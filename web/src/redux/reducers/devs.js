import * as ActionTypes from '../ActionTypes';

export const Devs = (state = { 
    isLoading: true,
    errMess: null,
    devs:[] } ,  action ) => {

    switch (action.type) {
        case ActionTypes.ADD_DEVS:
            return {...state, isLoading: false, errMess: null, devs: action.payload};

        case ActionTypes.DEVS_LOADING:
            return {...state, isLoading: true, errMess: null, devs: []}

        case ActionTypes.DEVS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_DEV:
                var dev = action.payload;
                //comment.id = state.comments.length;
               // comment.date = new Date().toISOString();
                return { ...state, devs: state.devs.concat(dev)};

        default:
            return state;
    }
};