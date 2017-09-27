

export default function suggestionsReducer(state, action) {
    if (action.type === 'UPDATE_SUGGESTIONS') {
        return state.merge({
            suggestions: action.suggestions,
        });
    }
    return state;
}
