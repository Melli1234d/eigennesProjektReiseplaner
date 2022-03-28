import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '@redux/quizSlice';
import favoriteReducer from '@redux/favoriteSlice';

export const store = configureStore({
	reducer: {
		quiz: quizReducer,
		favorite: favoriteReducer
	}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
