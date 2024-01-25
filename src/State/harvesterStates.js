Creep.prototype.runHarvester = function() {
    switch(this.memory.state) {
        case global.STATE_HARVESTING_ENERGY:
            this.stateHarvestEnergy();
            break;
        default:
            this.memory.state = global.STATE_HARVESTING_ENERGY;
            break;
    }
};
