var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
                filter: (creep) => {
                    return creep.memory.role === 'deliverer' && creep.store.getFreeCapacity() > 0;
                }
            });

            if(targets.length > 0) {
                creep.transfer(targets[0], RESOURCE_ENERGY);
            }
        }
    }
};

module.exports = roleHarvester;