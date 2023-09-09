import { defineStore } from 'pinia';

export const useStateStore = defineStore('stateStore', {
    state: () => ({
        stateData: '',
    }),
    getters: {
        getState: (state) => state.stateData,
    },
    actions: {
        setState(value) {
            this.stateData = value;
            console.log(this.stateData)
        },
    },
});