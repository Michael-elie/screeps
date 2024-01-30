import {STATES} from "./constants.mjs";
import {stateDepositEnergy, stateLootEnergy} from "./workingStates.mjs";

export const runDeliverer = function(creep) {
        switch(creep.memory.state) {
            case STATES.LOOTING_ENERGY:
                stateLootEnergy(creep);
                break;
            case STATES.DEPOSITING_ENERGY:
                stateDepositEnergy(creep);
                break;
            default:
                creep.memory.state = STATES.LOOTING_ENERGY
                break;
        }
    };