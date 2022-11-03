import React from 'react';

import Layout from './PagesLayout/Layout';
import Home from './Home';
import Tags from './Tags/Tags';
import Login from './AuthPage/Login';
import SignUp from './AuthPage/Signup';
import Questions from './Questions/Questions';
import Post from './Questions/Post/Post';
import Users from './Users/Users';
import UserProfile from './UserProfile/UserProfile';
import { ROUTES } from '../constants';
import Ask from './Questions/ASK/Ask';

// Layout 하위로 페이지 라우팅
const PAGES = [
  {
    element: <Layout />,
    children: [
      {
        name: ROUTES.HOME.name,
        path: ROUTES.HOME.path,
        element: <Home />,
      },
      {
        name: ROUTES.TAGS.name,
        path: ROUTES.TAGS.path,
        element: <Tags />,
      },
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
      {
        name: ROUTES.QUESTIONS.name,
        path: ROUTES.QUESTIONS.path,
        element: <Questions />,
      },
      {
        name: ROUTES.POST.name,
        path: ROUTES.POST.path,
        element: <Post />,
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
];

export default PAGES;
