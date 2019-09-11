
export default function reducer(state, action) {
  switch (action.type) {
    case 'GET_LIST':
      return {
        ...state,
        list: action.payload
      }
    case 'SET_NEW_LANG':
      if (state.knowledge.find(id => id.id === action.payload.id)) {
        return state
      } else {
        const addedLang = [...state.knowledge, action.payload]
        return {
          ...state,
          knowledge: addedLang
        }
      }
    case 'REMOVE_NEW_LANG':
      const filteredLangs = state.knowledge.filter(l => l.id !== action.payload.id)
      return {
        ...state,
        knowledge: filteredLangs
      }
    default:
      return state
  }
}