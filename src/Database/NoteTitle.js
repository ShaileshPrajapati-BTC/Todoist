import note from './Note'

const Realm = require('realm');


class Title_Demo{}
Title_Demo.schema = {
    name : 'Title_Demo',
    primaryKey:'id',
    properties : {
        id : 'int',
        title : {type:'string',default:""},
        createDate :{type:'string',default:""},
        editDate : {type:'string',default:''},
        completeDate : {type:'string',default:''},
        notes :{type: 'list', objectType: 'Note_Demo'}
    }
};

export default Title_Demo