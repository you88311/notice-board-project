import React from 'react';

import { ROUTES } from '../constants';
import { Nav } from '../components/@Layout';

import Layout from './PagesLayout/Layout';
import Tags from './Tags/Tags';
import Login from './AuthPage/Login';
import SignUp from './AuthPage/Signup';
import Questions from './Questions/Questions';
import Post from './Questions/Post/Post';
import Users from './Users/Users';
import UserProfile from './UserProfile/UserProfile';
import Ask from './Questions/ASK/Ask';
import NotFound from './404/404';
import Search from './Search/Search';

// Layout 하위로 페이지 라우팅
const PAGES = [
  {
    element: <Layout />,
    children: [
      {
        name: ROUTES.INDEX.name,
        path: ROUTES.INDEX.path,
        element: <Questions />,
      },
      {
        name: ROUTES.QUESTIONS.name,
        path: ROUTES.QUESTIONS.path,
        element: <Questions />,
      },
      {
        name: ROUTES.TAGS.name,
        path: ROUTES.TAGS.path,
        element: <Tags />,
      },

      {
        name: ROUTES.POST.name,
        path: ROUTES.POST.path,
        element: <Post />,
      },
      {
        name: ROUTES.SEARCH.name,
        path: ROUTES.SEARCH.path,
        element: <Search />,
      },
      {
        name: ROUTES.USERS.name,
        path: ROUTES.USERS.path,
        element: <Users />,
      },
      {
        name: ROUTES.USERPROFILE.name,
        path: ROUTES.USERPROFILE.path,
        element: <UserProfile />,
      },
      { name: ROUTES.ASK.name, path: ROUTES.ASK.path, element: <Ask /> },
    ],
  },
  {
    element: <Nav />,
    children: [
      {
        name: ROUTES.LOGIN.name,
        path: ROUTES.LOGIN.path,
        element: <Login />,
      },
      {
        name: ROUTES.SIGNUP.name,
        path: ROUTES.SIGNUP.path,
        element: <SignUp />,
      },
    ],
  },
  {
    name: ROUTES.NOT_FOUND.name,
    path: ROUTES.NOT_FOUND.path,
    element: <NotFound />,
  },
];

export default PAGES;
