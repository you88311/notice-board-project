import React, { useEffect } from 'react';
import useGetUserById from '../../../../hooks/useGetUserById';
import { TagButton } from '../../../@common/Buttons';
import { TextViewer } from '../../../@common/TextEditor/TextEditor';
import * as S from './PostBody.style';
import UserInfo from './UserInfo';
import useDeletePost from '../../../../hooks/questions/useDeletePost';
import CustomLink from '../../../@common/Link';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { pagesState } from '../../../../store';
import CommentBox from '../Comment/Comment';

const RightBox = ({
  type,
  questionId,
  answerId,
  context,
  userId,
  createdAt,
}) => {
  const { id } = useParams();
  const [state, setCurrentQuestionId] = useRecoilState(pagesState);
  const { data: user } = useGetUserById(userId);
  const { handleDelete: handleDeletePost } = useDeletePost();

  useEffect(() => {
    setCurrentQuestionId({ ...state, currentQuestionId: questionId });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionId]);

  const handleDeleteAnswer = () => {
    return;
  };

  const currentUser = localStorage.getItem('user') || 'anonymous';
  const tags = ['Javascript', 'Django', 'styled-components'];
  const isAuthor = user?.email === currentUser;

  return (
    <S.RightBox>
      <S.PostBody>
        <TextViewer initialValue={context} />
      </S.PostBody>
      <S.TagBox>
        {tags.map((tag) => {
          return <TagButton key={tag} content={tag} />;
        })}
      </S.TagBox>
      <S.BottomBox>
        <S.FeatureBox>
          <S.FeatureLeft>
            <S.FeatureSpan style={{ margin: 0 }}>Share</S.FeatureSpan>
            {isAuthor && (
              <>
                <CustomLink
                  path={
                    type === 'post'
                      ? `/questions/7${id}/edit`
                      : `/questions/8${answerId}/edit`
                  }
                >
                  <S.FeatureSpan>Edit</S.FeatureSpan>
                </CustomLink>
                <S.FeatureSpan
                  onClick={() => {
                    type === 'answer'
                      ? handleDeleteAnswer(answerId, userId)
                      : type === 'post'
                      ? handleDeletePost(questionId, userId)
                      : null;
                  }}
                >
                  Delete
                </S.FeatureSpan>
              </>
            )}
            <S.FeatureSpan>Follow</S.FeatureSpan>
          </S.FeatureLeft>
        </S.FeatureBox>
        <UserInfo
          type={type}
          author={user?.userNickname}
          createdAt={createdAt}
          isAuthor={isAuthor}
        />
      </S.BottomBox>
      <S.CommentSection>
        <CommentBox type={type} />
        <S.Comment>Add a comment</S.Comment>
      </S.CommentSection>
    </S.RightBox>
  );
};

export default RightBox;

// const onClick = (id) => {
//   status === 'success'
//     ? deletePost.mutate(id)
//     : status === 'error'
//     ? console.log('Failed to Delete Post')
//     : null;
// };
