import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// Import custom components
import rootReducer from '../reducers';

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    }catch(e){
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    saveToLocalStorage(state);
});

export default store;