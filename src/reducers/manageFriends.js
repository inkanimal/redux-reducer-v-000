let state = { freinds: [{name: 'Avi', hometown: "NYC", id: 100}]}
let action = {type: 'ADD_FRIEND',
              friend: 'Chrome Boi'}

export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return (
                {...state, friends:[...state.friends, action.friend]
                }
            )
       case 'REMOVE_FRIEND':
           const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
           return (
               {...state, friends: [...state.friends.slice(0, removalIndex),
                 ...state.friends.slice(removalIndex + 1)]
                }
           )
           default: return state;

            }
    
}
