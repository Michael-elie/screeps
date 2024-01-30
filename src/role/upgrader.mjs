var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {


        if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 GO FARM !');
        }
        if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
            creep.memory.upgrading = true;
            creep.say('⚡ AMELIORONS !');
        }


        if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            const sources = creep.room.find(FIND_SOURCES);
            creep.harvestOrMove(sources[0]);
        }
    }
};

module.exports = roleUpgrader;