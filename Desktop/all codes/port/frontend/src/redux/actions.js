// You can add any additional Redux actions here if needed
// Most actions are already defined in the slices

// Example:
export const clearErrors = () => (dispatch) => {
  dispatch(authSlice.actions.reset());
  dispatch(blogSlice.actions.reset());
  dispatch(portfolioSlice.actions.reset());
};