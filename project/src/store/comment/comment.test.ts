import {checkCommentListLoaded, commentSlice, loadCommentList, sendNewCommentList} from './comment';
import {mockComment, mockCommentState} from '../../mocks';

describe('Reducer: commentSlice', () => {
  const state = mockCommentState;
  const comment = mockComment;

  describe('commentList tests', () => {
    it('set comment to commentList', () => {
      expect(commentSlice.reducer(state, loadCommentList([comment])))
        .toEqual({ commentList: [comment], newCommentList: [], isCommentListLoaded: false });
    });

    it('set emptyCommentList', () => {
      const state = {
        commentList: [comment],
        newCommentList: [],
        isCommentListLoaded: false
      };

      expect(commentSlice.reducer(state, loadCommentList([])))
        .toEqual({ commentList: [], newCommentList: [], isCommentListLoaded: false });
    });
  });

  describe('newCommentList tests', () => {
    it('set comment to newCommentList', () => {
      expect(commentSlice.reducer(state, sendNewCommentList([comment])))
        .toEqual({ commentList: [], newCommentList: [comment], isCommentListLoaded: false });
    });

    it('set newCommentList', () => {
      const state = {
        commentList: [],
        newCommentList: [comment],
        isCommentListLoaded: false
      };

      expect(commentSlice.reducer(state, sendNewCommentList([])))
        .toEqual({ commentList: [], newCommentList: [], isCommentListLoaded: false });
    });
  });

  it('set commentListLoaded flag to true', () => {
    expect(commentSlice.reducer(state, checkCommentListLoaded(true)))
      .toEqual({ commentList: [], newCommentList: [], isCommentListLoaded: true });
  });
});
