    Creep.prototype.stateRepairConstruction = function () {


        if (this.store[RESOURCE_ENERGY] > 0){

            let damagedRoad = this.room.find(FIND_STRUCTURES, { filter : (structure) => structure.structureType === STRUCTURE_ROAD && structure.hits < structure.hitsMax*0.5});



            /*let lowestRoad =
            let damagedOtherStructure*/
            damagedRoad.sort((a, b) => {
                // Par exemple, si vous souhaitez prioriser la réparation d'une structure spécifique,
                // comparez les hits de a et b pour les trier en conséquence.
                return a.hits - b.hits;
            });

            if (damagedRoad.length > 0) {

                // Il n'y a plus de sites de construction, réparer.
                if (this.repair(damagedRoad[0]) === ERR_NOT_IN_RANGE) {
                    this.moveTo(damagedRoad[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else {
                let contnairs = this.room.find(FIND_STRUCTURES, {filter : (structure) => structure.structureType === STRUCTURE_CONTAINER})
                contnairs.sort((a, b) => {
                    // Par exemple, si vous souhaitez prioriser la réparation d'une structure spécifique,
                    // comparez les hits de a et b pour les trier en conséquence.
                    return a.hits - b.hits;
                });

                if (contnairs.length > 0) {

                    // Il n'y a plus de sites de construction, réparer.
                    if (this.repair(contnairs[0]) === ERR_NOT_IN_RANGE) {
                        this.moveTo(contnairs[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }

        }
        else{

            this.memory.state = global.STATE_BUILD_CONSTRUCTION;
            this.say('🚧')
            console.log('trvaux')
        }







    }
