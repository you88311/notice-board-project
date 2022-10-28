import React from 'react';

import PostDetails from './Details';
import PostStatus from './Status';
import * as S from './Post.style';

import useGetAllPosts from '../../../../../hooks/useGetAllPosts';
import { useRecoilValue } from 'recoil';
import { pagesState } from '../../../../../store';

const PostBox = () => {
  // Pagination
  const { selectedLimit, currentPage } = useRecoilValue(pagesState);
  const offset = (currentPage - 1) * selectedLimit;
  const { data } = useGetAllPosts((data) =>
    data.slice(offset, offset + selectedLimit),
  );

  return data?.map((postData, i) => {
    return (
      <S.PostContainer key={i}>
        <PostStatus status={postData.status} />
        <PostDetails data={postData} />
      </S.PostContainer>
    );
  });
};

export default PostBox;
