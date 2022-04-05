import {checkCommentListLoaded, commentSlice, loadCommentList, loadNewCommentList} from './comment';
import {mockComment, mockCommentState} from '../../mocks';

describe('Reducer: commentSlice', () => {
  const state = mockCommentState;
  const comment = mockComment;

  it('returning initialState with unknown action', () => {
    expect(commentSlice.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  describe('commentList tests', () => {
    it('set comment to commentList', () => {
      expect(commentSlice.reducer(state, loadCommentList([comment])))
        .toEqual({ commentList: [comment], newCommentList: [], isCommentListLoaded: false });
    });

    it('set emptyCommentList', () => {
      const localState = {
        commentList: [comment],
        newCommentList: [],
        isCommentListLoaded: false,
      };

      expect(commentSlice.reducer(localState, loadCommentList([])))
        .toEqual({ commentList: [], newCommentList: [], isCommentListLoaded: false });
    });
  });

  describe('newCommentList tests', () => {
    it('set comment to newCommentList', () => {
      expect(commentSlice.reducer(state, loadNewCommentList([comment])))
        .toEqual({ commentList: [], newCommentList: [comment], isCommentListLoaded: false });
    });

    it('set newCommentList', () => {
      const localState = {
        commentList: [],
        newCommentList: [comment],
        isCommentListLoaded: false,
      };

      expect(commentSlice.reducer(localState, loadNewCommentList([])))
        .toEqual({ commentList: [], newCommentList: [], isCommentListLoaded: false });
    });
  });

  it('set commentListLoaded flag to true', () => {
    expect(commentSlice.reducer(state, checkCommentListLoaded(true)))
      .toEqual({ commentList: [], newCommentList: [], isCommentListLoaded: true });
  });
});
