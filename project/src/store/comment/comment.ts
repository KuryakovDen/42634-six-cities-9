import {Review} from '../../types/review';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';

export type CommentState = {
  commentList: Review[] | [];
  isCommentListLoaded: boolean;
  newCommentList: Review[] | [];
};

const initialState: CommentState = {
  commentList: [],
  isCommentListLoaded: false,
  newCommentList: [],
};

export const commentSlice = createSlice({
  name: NameSpace.Comment,
  initialState,
  reducers: {
    loadCommentList: (state, action) => {
      state.commentList = action.payload;
    },
    checkCommentListLoaded: (state, action) => {
      state.isCommentListLoaded = action.payload;
    },
    sendNewCommentList: (state, action) => {
      state.newCommentList = action.payload;
    },
  },
});

export const { loadCommentList, checkCommentListLoaded, sendNewCommentList } = commentSlice.actions;
