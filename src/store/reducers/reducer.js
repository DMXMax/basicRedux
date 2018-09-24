

const initialState = {
  persons: []
};

const reducer = (state=initialState, action)=>{
  switch(action.type){
    case 'PERSON_ADD':
      console.log("PERSON_ADD", action.person);
      state = {...state, persons: state.persons.concat(action.person)};
      break;
    case 'PERSON_DEL':
      console.log("PERSON_DEL");
      let res = state.persons.filter(elem => elem.id !== action.id);
      state = {...state, persons:res};
      break;
    default:
  }
  return state;

}

export default reducer;



