import {STATES, STATUS} from "./constants.mjs";

export const stateBuild = function (creep) {

    if (creep.memory.store(RESOURCE_ENERGY) > 0){
        let constructionTarget = creep.room.find(FIND_CONSTRUCTION_SITES);

        if (constructionTarget.length ){
            if (creep.build(constructionTarget[0]) === ERR_NOT_IN_RANGE){
                creep.moveTo(constructionTarget[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else{
            //return STATUS.CONSTRUCTIONS_NOT_FOUND;
        }
    }
    else{
      //  return STATUS.ENERGY_STORAGE_EMPTY;
    }



}

export const stateDepositEnergy = function (creep) {

    if (creep.store.getFreeCapacity(RESOURCE_ENERGY) <= 0){

        const resourceStorage = creep.room.find(FIND_STRUCTURES, {
            filter : (structure)=> {
                return (structure.structureType === STRUCTURE_CONTAINER || structure.structureType === STRUCTURE_STORAGE
                        || structure.structureType === STRUCTURE_SPAWN)
                    && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }
        });


        const closestResourceStorage = creep.pos.findClosestByRange(resourceStorage)

        if (creep.transfer(closestResourceStorage, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
            creep.moveTo(closestResourceStorage,{visualizePathStyle: {stroke: '#ffffff'}});
        }
    }
    else {
        creep.memory.state = STATES.LOOTING_ENERGY
        creep.say('🛒')
    }

}

export const stateHarvestEnergy = function (creep){
    const sources = creep.room.find(FIND_SOURCES);

    if(creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#330111'}});
    }
}

export const stateLootEnergy = function (creep) {

    if (creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0){

        const droppedEnergy = creep.room.find(FIND_DROPPED_RESOURCES,
            {filter : resource =>  resource.resourceType === RESOURCE_ENERGY
                    && resource.amount >= 100})


        const closestDroppingEnergy = creep.pos.findClosestByRange(droppedEnergy)

        if (creep.pickup(closestDroppingEnergy) === ERR_NOT_IN_RANGE)
        {
            creep.moveTo(closestDroppingEnergy, {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }
    else {

        creep.memory.state = STATES.DEPOSITING_ENERGY;
        creep.say('🚚')
    }

}

export const statePickUpEnergy = function (creep) {


   /* if (creep.store[RESOURCE_ENERGY] === 0){*/

        const storage = creep.room.find(FIND_STRUCTURES, {
            filter : (structure)=> {
                return (structure.structureType === STRUCTURE_CONTAINER || structure.structureType === STRUCTURE_STORAGE
                        || structure.structureType === STRUCTURE_SPAWN)
                    && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }
        });

        const closestStorage = creep.pos.findClosestByRange(storage)



        if (creep.withdraw(closestStorage,RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
            creep.moveTo(closestStorage, {visualizePathStyle: {stroke: '#ffffff'}});
        }

  /*  }
    else{

        creep.memory.state = STATES.REPAIR_CONSTRUCTION;
        creep.say('🔧')

    }*/



}

export const stateRepairConstruction = function (creep) {


    if (creep.store[RESOURCE_ENERGY] > 0){

        let damagedRoad = creep.room.find(FIND_STRUCTURES, { filter : (structure) => structure.structureType === STRUCTURE_ROAD && structure.hits < structure.hitsMax*0.5});



        /*let lowestRoad =
        let damagedOtherStructure*/
        damagedRoad.sort((a, b) => {
            // Par exemple, si vous souhaitez prioriser la réparation d'une structure spécifique,
            // comparez les hits de a et b pour les trier en conséquence.
            return a.hits - b.hits;
        });

        if (damagedRoad.length > 0) {

            // Il n'y a plus de sites de construction, réparer.
            if (creep.repair(damagedRoad[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(damagedRoad[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            let contnairs = creep.room.find(FIND_STRUCTURES,
                {filter : (structure) => structure.structureType === STRUCTURE_CONTAINER})
            contnairs.sort((a, b) => {
                // Par exemple, si vous souhaitez prioriser la réparation d'une structure spécifique,
                // comparez les hits de a et b pour les trier en conséquence.
                return a.hits - b.hits;
            });

            if (contnairs.length > 0) {

                // Il n'y a plus de sites de construction, réparer.
                if (creep.repair(contnairs[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(contnairs[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }

        }

    }
    else{

        creep.memory.state = STATES.BUILD_CONSTRUCTION;
        creep.say('🚧')

    }

}
