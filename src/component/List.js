import React, { Component } from 'react'
import { TouchableOpacity,View,Alert } from 'react-native'
import styles from "./Css/CssForAl"
import Title from './Title'
import SubTitle from './SubTitle'
import { IconButton } from './IconButton';
import NoteTitle from '../Database/NoteTitle'
import Note from '../Database/Note'
// import navigation from './AllNavigation'



export class ListItem extends Component {
    constructor(props){
        super(props);
    }

    DeleteNote =(list) => {
        Alert.alert(
            "Delete Note",
            "Are you sure want to Delete note?",
            [
                {text : "Cancel" ,onPress: ()=> {
                    
                } , style :'cancel'},
                {text : "OK" , onPress : () => {
                    
                    // alert(JSON.stringify(id))
                    Realm.open({
                        schema:[NoteTitle,Note]
                        }).then(realm => {
                        realm.write(() =>   { 
                            
                            realm.delete(realm.objectForPrimaryKey(NoteTitle,list.item.id));
                            ToastAndroid.show('Note deleted successfully...', ToastAndroid.SHORT);

                            // list.item.notes.map((item) =>{
                            //     let i = Number(item.id)
                            //     console.log(i)
                            //     realm.delete(realm.objectForPrimaryKey(Note,i));
                            //     // ToastAndroid.show('Note deleted successfully...', ToastAndroid.SHORT);


                            // })
                            

                            // for (id in list.item.notes){
                            //     console.log("&&&&&&&&&&",list.item.notes[id].id)
                                
                            // }


                            console.log(realm.objects(Note))

                            // alert(JSON.stringify(d))
                            // alert("HELLO")

                        });
                    });
                  
                    }, 
                }

            ]
        )
        {cancelable : true }   
        

    }

    componentWillMount(){
        // console.log(this.props.list);
    }
    componentDidMount(){
        // alert(JSON.stringify(this.props.list))
        // console.log("=----------------===================",this.props.list);
    }
  render() {
      let list = this.props.list

    return (
        <TouchableOpacity 
            style ={styles.row}
            onPress = {() =>{ this.props.onPress.navigate("Form",{
                    // ssdata : this.props.list.title,
                    titleId:this.props.list,
                    
                    // HEllo :this.props.list.notes,
                    
                    title : "Edit note",
                    flag:'editTodo'
                });
            }}
            >
            <View style={{flex:1,flexDirection:'row'}}>
                <Title style ={styles.row} title={list.item.title}></Title>
                <SubTitle style={styles.subTitle} sub={list.item.notes}></SubTitle>

            </View>
            <View style={styles.trash_Icon}>
                <IconButton  
                name="trash" 
                onPress={() => {this.DeleteNote(list)}}
                />
            </View>
            
        </TouchableOpacity>
        
    )
  }
}

export default ListItem