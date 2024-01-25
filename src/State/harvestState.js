Creep.prototype.stateHarvestEnergy = function (){
    const sources = this.room.find(FIND_SOURCES);

    if(this.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
        this.moveTo(sources[0], {visualizePathStyle: {stroke: '#330111'}});
    }
}