import {defineStore} from "pinia";
import {supabase} from "@/supabase.js";

export const useSimulatorStore = defineStore('Simulator Store', {
    state: () => ({
        signedIn: false,
        circuits: [],
        openedCircuits: [],
        activeCircuit: undefined
    }),
    actions : {
        async createCircuit(circuitName){
            const {data, error} = await supabase.from("circuits").insert({
                circuitName: circuitName
            });

            if (!error){
                await this.getCircuits();
                return true
            }
            return false
        },
        async getCircuits(){
            const { data, error } = await supabase.from("circuits").select();
            this.circuits = data;
        }
    }
})
