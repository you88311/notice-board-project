package team001_be.stackoverflowCloneDemo.user.controller;

import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import team001_be.stackoverflowCloneDemo.auth.jwt.JwtTokenizer;
import team001_be.stackoverflowCloneDemo.response.SingleResponseDto;

import team001_be.stackoverflowCloneDemo.user.dto.*;

import team001_be.stackoverflowCloneDemo.user.entity.User;
import team001_be.stackoverflowCloneDemo.user.mapper.UserMapper;
import team001_be.stackoverflowCloneDemo.user.repository.UserRepository;
import team001_be.stackoverflowCloneDemo.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;
import java.util.Optional;


@RestController
@RequiredArgsConstructor //-> final 필드 에대한 생성자 생성해주는 어노테이션
@RequestMapping("/users")
@Validated
@Slf4j
public class UserController {
    @Autowired
    private final UserRepository userRepository;
    private final JwtTokenizer jwtTokenizer;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper mapper;
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
        User user = mapper.userPostDtoToUser(userPostDto);
        User createdUser = userService.createUser(user);

        UserResponseDto response = mapper.userToUserResponseDto(createdUser);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }

    @GetMapping("/login")
    public String getUser(){
        return  userService.getLoginUser();
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Positive long userId) {
        User user = userService.findUser(userId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.OK
        );
    }

    //4. 회원 정보 전부 출력 -  완료
    @GetMapping("/all-users")
    public List<UserResponseDto> retrieveUsers() {
        return userService.findAll();
    }


    //5. 회원 정보 수정
    @PatchMapping("/edit/{user-id}")
    public ResponseEntity updateUser(@PathVariable("user-id") @Positive Long userId,
                                     @Valid @RequestBody UserPatchDto userPatchDto){
        userPatchDto.setUserId(userId);
        User user = userService.updateUser(mapper.userPatchDtoToUser(userPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user))
                , HttpStatus.OK);
    }
}
