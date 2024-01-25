const {random} = require("lodash");
var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        const sources = creep.room.find(FIND_SOURCES);
        let targetSource = null;
        if (creep.memory.targetSourceId) {
            for (const source of sources) {
                if (source.id === creep.memory.targetSourceId) {
                    targetSource = source;
                    break;
                }
            }
        }
        else {
            // How do i select my source ?
            targetSource = sources[random(0, sources.length)];
            creep.memory.targetSourceId = targetSource.id;
        }

        if(creep.harvest(targetSource) === ERR_NOT_IN_RANGE) {
            creep.moveTo(targetSource, {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    }
};

module.exports = roleHarvester;