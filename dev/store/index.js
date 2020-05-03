import EventEmitter from 'events';

const EVENT = 'eventTask';

const tasksDefault = [
	{
		id: 1,
		isCheck: true,
		text: 'Lorem 1 ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.'
	},
	{
		id: 2,
		isCheck: false,
		text: 'Lorem 2 ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.'
	},
	{
		id: 3,
		isCheck: false,
		text: 'Lorem 3 dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.'
	},
	{
		id: 4,
		isCheck: false,
		text: 'Lorem 4 dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.'
	},
	{
		id: 5,
		isCheck: true,
		text: 'Lorem 5 dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.'
	},
	{
		id: 6,
		isCheck: false,
		text: 'Lorem 6 dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.'
	},
	{
		id: 7,
		isCheck: true,
		text: 'Lorem 7 dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.'
	}
];

let tasksInit = () => {
    if (localStorage.getItem('tasksObject') !== null) {
        let tasksObject = localStorage.getItem('tasksObject');
        return JSON.parse(tasksObject);
    } else {
        localStorage.setItem('tasksObject', JSON.stringify(tasksDefault));
        return tasksDefault;
    }
};

let tasks = tasksInit();

const store = {
    ...EventEmitter.prototype,
    getStore() {
        return tasks;
    },
    emitStore() {
        this.emit(EVENT);
    },
    addEventListener(callback) {
        this.on(EVENT, callback);
    },
    removeEventListener(callback) {
        this.off(EVENT, callback);
    },
    deleteTask(taskId) {
        tasks = tasks.filter(item => item.id !== taskId);
        localStorage.setItem('tasksObject', JSON.stringify(tasks));
    },
    updateTask(task) {
        tasks = tasks.map(item => item.id === task.id ? task : item);
        localStorage.setItem('tasksObject', JSON.stringify(tasks));
    },
    addTask(newTask) {
        tasks = [newTask, ...tasks];
        localStorage.setItem('tasksObject', JSON.stringify(tasks));
    },
    clearTasks() {
        tasks = [];
        localStorage.setItem('tasksObject', JSON.stringify(tasks));
    }
};

export default store;