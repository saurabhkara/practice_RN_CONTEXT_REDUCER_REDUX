function reducer(state, action){
    switch(action.type){
        case 'add': 
            {
                let data = state.data +1
                return {data}
            }
        case 'minus':
            {
                let data = state.data -1;
                return {data}
            }
        default:
            return state;
    }
}

export default reducer;