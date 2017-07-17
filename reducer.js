
const initialState = {
  bShowModal:false
};

export default function show(state=initialState,action) {
  switch(action.type) {
    case 'SHOW_MODAL':
    return {
      ...state,
      bShowModal:true
    }
    default:
    return {
      ...state,
      bShowModal:false
    }
  }
}
