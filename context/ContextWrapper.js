import {createContext, useReducer} from 'react';
import reducer from '../reducer/reducer';

export const ContextW = createContext();

const initialState = {
    data:0
}

function ContextWrapper({children}){
    const [state, dispatch] =useReducer(reducer,initialState)
    return(
        <ContextW.Provider value={[state,dispatch]} >
            {children}
        </ContextW.Provider>
    )
}

export default ContextWrapper