Creep.prototype.runHarvester = function() {
    switch(this.memory.state) {
        case global.STATE_HARVESTING_ENERGY:
            this.stateHarvestEnergy();
            break;
        case global.STATE_LOOTING_ENERGY:
            this.stateLootEnergy();
            break;
        case global.STATE_SEARCHING_ENERGY:
            this.stateSearchEnergy();
            break;
        case global.STATE_DEPOSITING_ENERGY:
            this.stateDepositEnergy();
            break;
        default:
            this.memory.state = global.STATE_SEARCHING_ENERGY;
            break;
    }
};
