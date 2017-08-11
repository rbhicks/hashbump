export function currentHashtagName(state = "", action) {
  switch (action.type) {
  case 'SET_CURRENT_HASHTAG_NAME':
      return action.hashtagName;
  default:
      return state;
  }
}
