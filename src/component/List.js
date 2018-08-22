import React, { Component } from 'react'
import { TouchableOpacity,View,Alert,ToastAndroid } from 'react-native'
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

    DeleteOkButton(list){
        Realm.open({
            schema:[NoteTitle,Note]
        }).then(realm => {
            realm.write(() =>   { 
                realm.delete(list.item.notes);
                realm.delete(list.item)
                ToastAndroid.show('Note deleted successfully...', ToastAndroid.SHORT);
                this.props.onRefresh()
            });
        });
    }

    DeleteNote =(list) => {
        Alert.alert(
            "Delete Note",
            "Are you sure want to Delete note?",
            [
                {text : "Cancel" ,onPress: ()=> {
                    
                } , style :'cancel'},
                {text : "OK" , onPress : () => {
                        this.DeleteOkButton(list);  
                    }, 
                }
            ]
        )
        {cancelable : true }  
    }

    
    render() {
      let list = this.props.list
      console.log(this.props.list)
        return (
            <TouchableOpacity 
                style ={styles.row}
                onPress = {() =>{ this.props.onPress.navigate("Form",{
                        // ssdata : this.props.list.title,
                        titleId:this.props.list,
                        onGoBack :() => this.props.onRefresh(),
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