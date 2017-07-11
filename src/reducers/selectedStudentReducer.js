var SelectedStudent = function(state = "No one", action){
    if(action.type === 'PICK_STUDENT'){
        return action.payload
    }else{
    return state;
    }
}
export default SelectedStudent;