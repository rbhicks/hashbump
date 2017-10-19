

export default function finalizedSelectionReducer(state, action) {
    if (action.type === 'UPDATE_FINALIZED_SELECTION') {
        return state.merge({
            finalizedSelection: action.finalizedSelection,
        });
    }
    return state;
}
