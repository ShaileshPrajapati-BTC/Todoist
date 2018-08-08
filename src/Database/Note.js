const Realm = require('realm');

class Note_Demo{}
Note_Demo.schema = {
    name: 'Note_Demo',
    primeryKey: 'id',
    properties :{ 
        id : 'int',
        note : {type:'string',default:""},
        createDate :{type:'date',default:""},
        editDate : {type:'date',default:""},
        completeDate : {type:'date',default:""}, 
    }

};

export default Note_Demo