import * as types from './types';

export const loadPosts = async (dispatch) => {
    const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsRaw.json();
    dispatch({type: types.POST_SUCCESS, payload: posts});
};