

export default function valueReducer(state, action) {
    if (action.type === 'UPDATE_VALUE') {
        return state.merge({
            value: action.value,
        });
    }
    return state;
}
