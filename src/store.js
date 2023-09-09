import { defineStore } from 'pinia';

export const stateStore = defineStore('stateStore', {
    state: () => ({
        stateData: '',
    }),
    getters: {
        getState: (state) => state.stateData,
    },
    actions: {
        setState(value) {
            this.stateData = value;
        },
    },
});