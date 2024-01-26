Creep.prototype.statePickUpEnergy = function () {

    console.log('dd')
    if (this.store[RESOURCE_ENERGY] === 0){

        const storage = this.room.find(FIND_STRUCTURES, {
            filter : (structure)=> {
                return (structure.structureType === STRUCTURE_CONTAINER || structure.structureType === STRUCTURE_STORAGE)
                    && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            }
        });

        const closestStorage = this.pos.findClosestByRange(storage)

        console.log(storage.length)

        if (this.withdraw(closestStorage,RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
            this.moveTo(closestStorage, {visualizePathStyle: {stroke: '#ffffff'}});
        }

    }
    else{

        this.memory.state = global.STATE_REPAIR_CONSTRUCTION;
        this.say('🔧')

    }



}