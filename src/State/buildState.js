Creep.prototype.stateBuild = function () {

    let constructionTarget = this.room.find(FIND_CONSTRUCTION_SITES);

    if (constructionTarget.length ){
        if (this.build(constructionTarget[0]) === ERR_NOT_IN_RANGE){
            this.moveTo(constructionTarget[0], {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }


}