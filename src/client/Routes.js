import React from 'react';
import HomePage from './page/HomePage';
import NewVideoPage from './page/NewVideoPage';
import NotFoundPage from './page/NotFoundPage';
import VideoListPage from './page/VideoListPage';
import App from './App'

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...NewVideoPage,
                path: '/new'
            },
            {
                ...VideoListPage,
                path: '/list'
            },
            {
                ...NotFoundPage
            }
        ]
    }
];