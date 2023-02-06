import * as types from './types';

export const reducer = (state, action) => {
    /* eslint-disable default-case */
    switch (action.type) {
        case types.POST_SUCCESS:
            {
                console.log(action.type);
                return {
                    ...state, posts: action.payload
                };
            }
    }

    return {
        ...state
    };
}