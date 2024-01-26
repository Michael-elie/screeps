Creep.prototype.stateDepositEnergy = function () {

    if (this.store.getFreeCapacity(RESOURCE_ENERGY) <= 0){

        const resourceStorage = this.room.find(FIND_STRUCTURES, {
            filter : (structure)=> {
                return (structure.structureType === STRUCTURE_CONTAINER || structure.structureType === STRUCTURE_STORAGE
                        || structure.structureType === STRUCTURE_SPAWN)
                && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }
        });


        const closestResourceStorage = this.pos.findClosestByRange(resourceStorage)

        if (this.transfer(closestResourceStorage, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
            this.moveTo(closestResourceStorage,{visualizePathStyle: {stroke: '#ffffff'}});
        }
    }
    else {
        this.memory.state = global.STATE_LOOTING_ENERGY
        this.say('🛒')
    }







}