import {defineStore} from "pinia";

export const useSimulatorStore = defineStore('Simulator Store', {
    state: () => ({
        circuits: [
            {
                id: "abcd",
                name: "Untitled Circuit #1"
            },
            {
                id: "abcd1",
                name: "Untitled Circuit #2"
            }
        ],
        activeCircuit: "abcd"
    }),
    actions : {
        createCircuit(){
            
        }
    }
})
