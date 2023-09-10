import { defineStore } from 'pinia';

export const useStateStore = defineStore('stateStore', {
    state: () => ({
        stateData: 'projects',
        ref1: null,
        ref2: null,
        ref3: null
    }),
    getters: {
        getState: (state) => state.stateData,
        getRef1: (state) => state.ref1,
        getRef2: (state) => state.ref2,
        getRef3: (state) => state.ref3
    },
    actions: {
        setState(value) {
            this.stateData = value;
        },
        setRef1(ref) {
            this.ref1 = ref
        },
        setRef2(ref) {
            this.ref2 = ref
        },
        setRef3(ref) {
            this.ref3 = ref
        }
    },
});