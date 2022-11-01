package team001_be.stackoverflowCloneDemo.user.mapper;

import org.mapstruct.Mapper;
import team001_be.stackoverflowCloneDemo.user.dto.UserDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserPostDto;
import team001_be.stackoverflowCloneDemo.user.dto.UserResponseDto;
import team001_be.stackoverflowCloneDemo.user.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
     User userPostDtoToUser(UserPostDto userPostDto);

     UserDto.Response userToUserResponseDto(User user);

}

