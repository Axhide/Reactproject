let initialState = {
    friends: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Aslanbek'},
        {id: 3, name: 'Vova'}
    ]
};

const sideBarReducer = (state = initialState, action) => {
    return state;
}

export default sideBarReducer;