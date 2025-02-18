require('State.harvesterStates');
require('State.harvestState');
require('State.delivererStates');
require('State.depositingState');
require('State.lootingState');
require('State.pickUpState')
require('State.repairState')
require('State.buildState')
require('State.builderStates')
require('Const_State');



var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleDeliverer = require('role.deliverer');




    module.exports.loop = function () {
        // You should spawn creeps at this point



        /**
         * DELETE DEAD MINIONS MEMORY
         */
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var deliverer = _.filter(Game.creeps, (creep) => creep.memory.role == 'deliverer');

        /**
         * HARVESTER SPAWNERS
         */
        if(harvesters.length < 3) {
            var newName = 'Harvester' + Game.time;
            Game.spawns['Spawn_1'].spawnCreep([WORK,WORK,MOVE], newName,
                {memory: {role: 'harvester'}});
        }


        /**
         *DELIVERER SPAWNERS
         */
             if(deliverer.length < 2) {
             var newName = 'Deliverer' + Game.time;
             Game.spawns['Spawn_1'].spawnCreep([CARRY,CARRY,MOVE], newName,
                 {memory: {role: 'deliverer'}});
         }


        /**
         * UPGRADER SPAWNERS
         */
       /* if(upgraders.length < 2) {
            var newName = 'Upgrader' + Game.time;
            Game.spawns['Spawn_1'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'upgrader'}});

        }*/

        /**
         * BUILDERS SPAWNERS
         */
        if(builders.length < 1) {
            var newName = 'Builder' + Game.time;
            Game.spawns['Spawn_1'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'builder'}});
        }


        /**
         * SPAWNERS VISUALS
         */
        if(Game.spawns['Spawn_1'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Spawn_1'].spawning.name];
            Game.spawns['Spawn_1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn_1'].pos.x + 1,
                Game.spawns['Spawn_1'].pos.y,
                {align: 'left', opacity: 0.8});
        }

        /**
         * ATTRIBUTE MINIONS MISSIONS
         */
        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            if(creep.memory.role === 'harvester') {
                //roleHarvester.run(creep);
                creep.runHarvester()
            }
            if(creep.memory.role === 'upgrader') {
               // roleUpgrader.run(creep);
            }
            if(creep.memory.role === 'builder') {
              //  roleBuilder.run(creep);
                creep.runBuilder()
            }
            if(creep.memory.role === 'deliverer') {
               //roleDeliverer.run(creep);
               creep.runDeliverer()
            }
        }



    }
