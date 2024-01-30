import {STATES} from "./constants.mjs";
import {stateBuild, statePickUpEnergy, stateRepairConstruction} from "./workingStates.mjs";

export const runBuilder = function(creep) {
    switch(creep.memory.state) {
        case STATES.PICKUP_ENERGY:
            statePickUpEnergy(creep);
            if (creep.store[RESOURCE_ENERGY] > 0) {
                creep.memory.state = STATES.REPAIR_CONSTRUCTION;
                creep.say('🔧')
            }
            break;
        case STATES.BUILD_CONSTRUCTION:
            stateBuild(creep);
            break;
        case STATES.REPAIR_CONSTRUCTION:
            stateRepairConstruction(creep);
            break;
        default:
            creep.memory.state = STATES.PICKUP_ENERGY
            break;
    }
};