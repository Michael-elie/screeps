var roleDeliverer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.store.getFreeCapacity() > 0){

            const droppedEnergy = creep.room.find(FIND_DROPPED_RESOURCES,
                {filter : resource =>  resource.resourceType == RESOURCE_ENERGY})


            const closestDroppingEnergy = creep.pos.findClosestByRange(droppedEnergy)

            if (creep.pickup(closestDroppingEnergy) === ERR_NOT_IN_RANGE)
            {
                creep.moveTo(closestDroppingEnergy, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {

            const spawns = creep.room.find(FIND_MY_SPAWNS)

            const closestSpawn = creep.pos.findClosestByRange(spawns)

            if (creep.transfer(closestSpawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                creep.moveTo(closestSpawn,{visualizePathStyle: {stroke: '#ffffff'}});
            }
        }

    }
};

module.exports = roleDeliverer;