const Realm = require('realm');

class Note_Demo{}
Note_Demo.schema = {
    name: 'Note_Demo',
    // primeryKey: 'id',
    properties :{ 
        id : 'int',
        note : {type:'string',default:""},
        createDate :{type:'string',default:""},
        // editDate : {type:'string',default:""},
        // completeDate : {type:'string',default:""}, 
    }

};

export default Note_Demo