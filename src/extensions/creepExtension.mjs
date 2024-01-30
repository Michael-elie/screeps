/**
 * Harvest or move to the target
 * @param {Source} target
 */
Creep.prototype.harvestOrMove = function (target) {
    if(this.harvest(target) === ERR_NOT_IN_RANGE) {
        this.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
    }
}