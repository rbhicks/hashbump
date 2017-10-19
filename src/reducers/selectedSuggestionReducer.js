

export default function selectedSuggestionReducer(state, action) {
    if (action.type === 'UPDATE_SELECTED_SUGGESTION') {
        return state.merge({
            selectedSuggestion: action.selectedSuggestion,
        });
    }
    return state;
}
