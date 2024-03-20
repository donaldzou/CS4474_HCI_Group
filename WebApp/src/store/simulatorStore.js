import {defineStore} from "pinia";
import {supabase} from "@/supabase.js";

export const useSimulatorStore = defineStore('Simulator Store', {
    state: () => ({
        circuits: [],
        activeCircuit: "abcd"
    }),
    actions : {
        createCircuit(){
            
        },
        async getCircuits(){
            const { data, error } = await supabase.from("circuits").select();
            this.circuits = data;
        }
    }
})
