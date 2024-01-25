Creep.prototype.runUpgrader = function() {
    switch(this.memory.state) {
        case global.STATE_UPGRADING_CONTROLLER:
            this.stateLootEnergy();
            break;
        case global.STATE_LOOTING_ENERGY :
            this.stateDepositEnergy();
            break;
        default:
            this.memory.state = global.STATE_LOOTING_ENERGY
            break;
    }
};
