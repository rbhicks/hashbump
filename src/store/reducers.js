export function currentHashtag(state = "buffalo", action) {
  switch (action.type) {
  case 'SET_CURRENT_HASHTAG':
      return action.hashtag;
  default:
      return state;
  }
}

// export function currentPartialHashtag(state = "", action) {
//   switch (action.type) {
//   case 'SET_CURRENT_PARTIAL_HASHTAG':
//       return action.currentPartialHashtag;
//   default:
//       return state;
//   }
// }
