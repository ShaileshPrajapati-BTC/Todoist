import React, { Component } from 'react'
import { TextInput, View,ScrollView ,TouchableOpacity,Animated,KeyboardAvoidingView} from 'react-native'
import TextField from './TextField'
import design from '../Css/SecondCss'
import ButtonStyle from "./ButtonStyle"
import NoteView from './NoteView'
import { IconButton } from '../IconButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import NoteTitle from '../../Database/NoteTitle'
import Note from '../../Database/Note'


const Realm = require('realm');



export class CreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      ViewArray:[],
      Disable_Button: false,
      realm :null,
      title:'',
      notes:[],
      data:''

    };  
    this.animatedValue = new Animated.Value(0);
    this.Array_Value_Index= 0;
    this.realm = this.props.realm;
  }

  pushArray = (note) => {
    alert(note);
    this.setState({
      note : this.state.notes.push(note)
    },()=>{
      alert(JSON.stringify(this.state.notes));
    });
    
  }

  For_Creating_Title_List = () => {
    Realm.open({
      schema:[NoteTitle,Note]
    }).then(realm => {
      realm.write(() =>{
        
        const l = realm.objects('Title_Demo')
        const n = realm.objects('Note_Demo')
        realm.create(NoteTitle,
          {
              id:l.length+1,
              title:this.state.title,
              createDate:new Date().toString(),
            
            },true);

          }
        );
    });

  }

  Add_New_View_Function  = () => {
    this.animatedValue.setValue(0);
    let New_Added_View_Value = { Array_Value_Index : this.Array_Value_Index}
    this.setState({
      Disable_Button :true,
      ViewArray:[...this.state.ViewArray, New_Added_View_Value ]},
        () => {
            Animated.timing(
                this.animatedValue,
                {
                  toValue:1,
                  duration : 400,
                  useNativeDriver:true
                }
            ).start(() => 
              {
                this.Array_Value_Index = this.Array_Value_Index + 1;
                /* this.setState({ Disable_Button : false}); */
              });
        });
  }

  render() {
      const AnimatedValue = this.animatedValue.interpolate(
      {
          inputRange : [0 ,1],
          outputRange : [59,0]
      });  

      let Rander_Animated_View = this.state.ViewArray.map(
        (item,key) =>{/* 
          if(( key ) == this.Array_Value_Index) { */
              return(    
                  <NoteView
                      key ={key} 
                      style={design}  
                      onChangeText={this.onChangeText}
                      onPress = {this.pushArray }
                   />
            
              );
             /*  }
              else
              {
                  return(
                    <View style={{height:60, }}>
                      <NoteView key={key} style={design} />
                      </View>
                  );
              } */
          }
        )

    /* style={{margin:10,padding:20, right:0, position:'absolute'}} */
    return (
      
      <View style={design.container}>
          <View style={{height:80}}>
            <ButtonStyle 
                style={[design.addButton ,design.buttonText]} 
                title="Add Reminder"
                onPress={this.pushArray } />
          </View>
        
          <View style={{height:60}}>
            <TextInput 
              style={design.titleText} 
              placeholder="title"
              onChangeText= {(title)=> this.setState({title})}
              value = {this.state.title}
              /> 
          </View>
              <KeyboardAwareScrollView style={{backgroundColor:'white',flex:1,margin:40,paddingBottom:80,}}>
                <ScrollView style={design.noteFrameInside} >
                    {Rander_Animated_View}
                </ScrollView>
            </KeyboardAwareScrollView>
            <IconButton style={{paddingLeft:10,paddingBottom:30,fontSize:20}} 
                name="add" 
                value=" Add Task" 
                onPress={()=> this.Add_New_View_Function()} />
              
      </View>
    )
  }
}

export default CreateForm 