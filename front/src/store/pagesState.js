import { atom } from 'recoil';

const pagesState = atom({
  key: 'pagesState',
  default: {
    selectedLimit: 15,
    currentPage: 1,
    postsLength: 0,
  },
});

export default pagesState;
