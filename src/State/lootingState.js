Creep.prototype.stateLootEnergy = function () {



    if (this.store.getFreeCapacity(RESOURCE_ENERGY) > 0){

        const droppedEnergy = this.room.find(FIND_DROPPED_RESOURCES,
            {filter : resource =>  resource.resourceType === RESOURCE_ENERGY})


        const closestDroppingEnergy = this.pos.findClosestByRange(droppedEnergy)

        if (this.pickup(closestDroppingEnergy) === ERR_NOT_IN_RANGE)
        {
            this.moveTo(closestDroppingEnergy, {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }
    else {

        this.memory.state = global.STATE_DEPOSITING_ENERGY;
        this.say('🚚')
    }







}