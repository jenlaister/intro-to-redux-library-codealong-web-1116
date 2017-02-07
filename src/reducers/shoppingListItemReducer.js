export default function shoppingListItemReducer(state = {items: []}, action) {
  switch(action.type) {
    // case 'INCREASE_COUNT'
    // let items = items.concat(state.items.length + 1)
    // return Object.assign({}, {items: items})
    // default:
    // return state
    // console.log(action)
    case 'GET_COUNT_OF_ITEMS':
    let items;
    items = state.items.concat(state.items.length + 1)
    let proposedstate = Object.assign({}, {items: items})
    console.log(proposedstate)
     return proposedstate;
    default:
      console.log(state)
      return state;
  }
}
