import dispatcher from '../dispatcher';

export const removeTask = (id) => {
    dispatcher.dispatch({
        type: "REMOVE",
        payload: id
    });
};

export const updateTask = (task) => {
    dispatcher.dispatch({
        type: "UPDATE",
        payload: task
    });
};

export const addTask = (task) => {
    dispatcher.dispatch({
        type: "ADD",
        payload: task
    });
};

export const clearTasks = () => {
    dispatcher.dispatch({
        type: "CLEAR"
    });
};