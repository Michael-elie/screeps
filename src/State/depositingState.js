Creep.prototype.stateDepositEnergy = function () {

    if (this.store.getFreeCapacity(RESOURCE_ENERGY) <= 0){

        const spawns = this.room.find(FIND_STRUCTURES, {
            filter : (structure)=> {
                return (structure.structureType === STRUCTURE_CONTAINER || structure.structureType === STRUCTURE_STORAGE
                        || structure.structureType === STRUCTURE_SPAWN)
                && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0 && structure.my;
            }
        });


        const closestSpawn = this.pos.findClosestByRange(spawns)

        if (this.transfer(closestSpawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
            this.moveTo(closestSpawn,{visualizePathStyle: {stroke: '#ffffff'}});
        }
    }
    else {

        this.memory.state = global.STATE_LOOTING_ENERGY
        this.say('🛒')
    }







}