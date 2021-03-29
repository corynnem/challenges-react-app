


const initState = {
    contact: false
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'CONTACT_SET'){     // specify action type for state variable
        return{                 // specify state variable
            ...state,
            contact: !state.contact
        }
    } else if(action.type === ''){
        return {
            ...state,
            //stateVar: action.state
        }
    }


    return state;
}


export default rootReducer