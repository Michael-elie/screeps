import {STATES} from "./constants.mjs";
import {stateDepositEnergy, stateHarvestEnergy} from "./workingStates.mjs";

export const runHarvester = function(creep) {
    switch(creep.memory.state) {
        case STATES.HARVESTING_ENERGY:
            stateHarvestEnergy(creep);
            break;
        case STATES.DEPOSITING_ENERGY:
            stateDepositEnergy(creep);
            break;
        default:
            creep.memory.state = STATES.HARVESTING_ENERGY;
            break;
    }
};
