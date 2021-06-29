import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        todoList: []
    },
    mutations: {
        addTask(state, task) {
            state.todoList.push({ title: task, finished: false });
        },
        updateTaskStatus(state, index) {
            state.todoList[index].finished = !state.todoList[index].finished;
        },
        deleteTask(state, index) {
            state.todoList.splice(index, 1)
        }
    },
    getter: {
    },
    actions: {
    },
    models: {
    }
});