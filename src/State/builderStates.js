Creep.prototype.runBuilder = function() {
    switch(this.memory.state) {
        case  global.STATE_PICKUP_ENERGY:
            this.statePickUpEnergy();
            break;
        case global.STATE_BUILD_CONSTRUCTION:
            this.stateBuild();
            break;
        case global.STATE_REPAIR_CONSTRUCTION:
            this.stateRepairConstruction();
            break;
        default:
            this.memory.state = global.STATE_PICKUP_ENERGY
            break;
    }
};