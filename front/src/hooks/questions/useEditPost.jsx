import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { modifyPost } from '../../apis/questions';

const useEditPost = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, status } = useMutation(
    ['questions', 'postById'],
    ({ questionId, modifiedContent }) =>
      modifyPost(questionId, id, modifiedContent),
    {
      onSuccess: () => (
        queryClient.invalidateQueries(['postById']),
        navigate(`/questions/${id}`)
      ),
    },
  );

  return { mutate, status };
};

export default useEditPost;
