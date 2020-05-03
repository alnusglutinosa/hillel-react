import { Dispatcher } from 'flux';

import store from '../store';

const dispatcher = new Dispatcher();

dispatcher.register((action) => {
    switch(action.type) {
        case 'REMOVE': {
            store.deleteTask(action.payload);
            break;
        }
        case 'UPDATE': {
            store.updateTask(action.payload);
            break;
        }
        case 'ADD': {
            store.addTask(action.payload)
            break;
        }
        case 'CLEAR': {
            store.clearTasks();
            break;
        }
    }
    store.emitStore();
})

export default dispatcher;