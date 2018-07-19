const initialState = {
    user: null, //no one is logged in, otherwise this would be an object full of all the information 
};

const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT"

export default function reducer(state=initialState,action){
    switch(action.type){
        case USER_LOGIN:
            return Object.assign({}, state, {user: action.payload})
        case USER_LOGOUT:
            return Object.assign({}, state, {user: null});

        default: return state;
    }
}

export function login(user){
    return{
        type:USER_LOGIN,
        payload: user,
    }
}

export function logout(){
    return{
        type: USER_LOGOUT,
    }
}

export function createUser(){

}

export function createWord(){

}

export function readUser(){

}
