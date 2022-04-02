import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
    numeros: function(state, actions){
        return{
            min: 5,
            max: 20
        }
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig;