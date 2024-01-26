Creep.prototype.runHarvester = function() {
    switch(this.memory.state) {
        case global.STATE_HARVESTING_ENERGY:
            this.stateHarvestEnergy();
            break;
        case global.STATE_DEPOSITING_ENERGY:
            this.stateDepositEnergy();
            break;
        default:
            this.memory.state = global.STATE_HARVESTING_ENERGY;
            break;
    }
};
