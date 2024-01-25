Creep.prototype.stateSearchDroppedEnergy = function () {


    if (this.store.getFreeCapacity() > 0) {

        const droppedEnergy = creep.room.find(FIND_DROPPED_RESOURCES,
            {filter : resource =>  resource.resourceType == RESOURCE_ENERGY})


        const closestDroppingEnergy = creep.pos.findClosestByRange(droppedEnergy)


        if (droppedEnergy.length > 0 ) {

            this.memory.state = global.STATE_LOOTING_ENERGY
            this.say('💰')
        }
        else {
            this.memory.state = global.STATE_SEARCHING_ENERGY
            this.say('🔎')
        }

    }
    else {
        this.memory.state = global.STATE_DEPOSITING_ENERGY
        this.say('🚚')
    }








}