import {runHarvester} from "./states/runHarvester.mjs";
import {runBuilder} from "./states/runBuilder.mjs";
import {runDeliverer} from "./states/runDeliver.mjs";

module.exports.loop = function () {
    // You should spawn creeps at this point

    /**
     * DELETE DEAD MINIONS MEMORY
     */
    for(const name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    const harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');
    const upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader');
    const builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder');
    const deliverer = _.filter(Game.creeps, (creep) => creep.memory.role === 'deliverer');

    /**
     * HARVESTER SPAWNERS
     */
    if(harvesters.length < 3) {
        const newName = 'Harvester' + Game.time;
        Game.spawns['Spawn_1'].spawnCreep([WORK,WORK,MOVE], newName,
            {memory: {role: 'harvester'}});
    }


    /**
     *DELIVERER SPAWNERS
     */
         if(deliverer.length < 2) {
         const newName = 'Deliverer' + Game.time;
         Game.spawns['Spawn_1'].spawnCreep([CARRY,CARRY,MOVE], newName,
             {memory: {role: 'deliverer'}});
     }


    /**
     * UPGRADER SPAWNERS
     */
   /* if(upgraders.length < 2) {
        const newName = 'Upgrader' + Game.time;
        Game.spawns['Spawn_1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'upgrader'}});

    }*/

    /**
     * BUILDERS SPAWNERS
     */
    if(builders.length < 1) {
        const newName = 'Builder' + Game.time;
        Game.spawns['Spawn_1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'builder'}});
    }


    /**
     * SPAWNERS VISUALS
     */
    if(Game.spawns['Spawn_1'].spawning) {
        const spawningCreep = Game.creeps[Game.spawns['Spawn_1'].spawning.name];
        Game.spawns['Spawn_1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn_1'].pos.x + 1,
            Game.spawns['Spawn_1'].pos.y,
            {align: 'left', opacity: 0.8});
    }

    /**
     * ATTRIBUTE MINIONS MISSIONS
     */
    for(const name in Game.creeps) {
        const creep = Game.creeps[name];
        if(creep.memory.role === 'harvester') {
            //roleHarvester.run(creep);
            runHarvester(creep)
        }
        if(creep.memory.role === 'upgrader') {
           // roleUpgrader.run(creep);
        }
        if(creep.memory.role === 'builder') {
          //  roleBuilder.run(creep);
            runBuilder(creep)
        }
        if(creep.memory.role === 'deliverer') {
           //roleDeliverer.run(creep);
           runDeliverer(creep)
        }
    }

}