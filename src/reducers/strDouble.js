const strDoubleReducer = (state = "hello", action) => {
    switch(action.type){
        case 'DOUBLE':
            return state + action.payload;
        default:
            return state;
    }
}

export default strDoubleReducer;