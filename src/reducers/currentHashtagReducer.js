

export default function currentHashtagReducer(state, action) {
    if (action.type === 'UPDATE_CURRENT_HASHTAG') {
        return state.merge({
            currentHashtag: action.currentHashtag,
        });
    }
    return state;
}
