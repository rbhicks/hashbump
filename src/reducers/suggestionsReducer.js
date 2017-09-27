import update from 'immutability-helper';

export default function suggestionsReducer(state, action) {
    if(action.type === 'UPDATE_SUGGESTIONS') {
        return update(state,
                      {
                          suggestions: {$set: action.suggestions},
                      });
    }
    if (action.type === 'CHANGE_SELECTION_ON_MOUSEOVER' && state.suggestions) {
        let deselectIndex = null;
        let selectIndex   = 0;

        state.suggestions.forEach((item, i) => {
            if(item.selected === true) deselectIndex = i;
            if(item.name === action.name) {
                selectIndex = i;
            }
        });

        if(deselectIndex !== null) {
            return update(state,
                          {
                              suggestions: {
                                  [deselectIndex]: {
                                      selected: { $set: false },
                                  },
                                  [selectIndex]: {
                                      selected: { $set: true },
                                  }
                              }
                          });
        }
        else {
            return update(state,
                          {
                              suggestions: {            
                                  [selectIndex]: {
                                      selected: { $set: true },
                                  }
                              }
                          });
        }
    }
    if (action.type === 'MOVE_SUGGESTION_SELECTION_BY_ARROWS' && state.suggestions) {
        const selectionExists = state.suggestions &&
                                state.suggestions.find(item => {return item.selected === true;});
        let   deselectIndex   = null;
        let   selectIndex     = 0;

        if(selectionExists) {
            if(action.subtype === 'UP') {
                state.suggestions.find((item, i) => {
                    if(item.selected === true && i > 0) {
                        deselectIndex = i;
                        selectIndex   = i-1;
                        return true;
                    }
                    else if(item.selected === true && i === 0) {
                        deselectIndex = null;
                        selectIndex   = 0;
                        return true;
                    }
                });
            }
            else if(action.subtype === 'DOWN') {
                state.suggestions.find((item, i) => {
                    if(item.selected === true &&
                       i < state.suggestions.length - 1) {
                        deselectIndex = i;
                        selectIndex   = i+1;
                        return true;
                    }
                    else if(item.selected === true &&
                            i === state.suggestions.length - 1) {
                        deselectIndex = null;
                        selectIndex   = i;
                        return true;
                    }
                });
            }
        }
        if(deselectIndex !== null) {
            return update(state,
                          {
                              suggestions: {
                                  [deselectIndex]: {
                                      selected: { $set: false },
                                  },
                                  [selectIndex]: {
                                      selected: { $set: true },
                                  }
                              }
                          });
        }
        else {
            return update(state,
                          {
                              suggestions: {            
                                  [selectIndex]: {
                                      selected: { $set: true },
                                  }
                              }
                          });
        }
    }
    return state;
}
