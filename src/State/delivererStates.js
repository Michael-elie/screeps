Creep.prototype.runDeliverer = function() {
        switch(this.memory.state) {
            case global.STATE_LOOTING_ENERGY:
                this.stateLootEnergy();
                break;
            case global.STATE_DEPOSITING_ENERGY:
                this.stateDepositEnergy();
                break;
            default:
                this.memory.state = global.STATE_LOOTING_ENERGY
                break;
        }
    };