import React, { Component } from 'react'
import { TextInput,ToastAndroid, View,ScrollView ,TouchableOpacity,Animated,KeyboardAvoidingView} from 'react-native'
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
      obj:'',
      title:'',
      editNote:[],
      notes:[],
      data:'',
      id:0,
      flage:''
    };  
    this.animatedValue = new Animated.Value(0);
    this.Array_Value_Index= 0;
    
  }

  pushArray = (text,key) => {
    (this.state.flag ==="editTodo")?    
      this.setState(prevState => {
        editNote : prevState.notes.push({
          id : parseInt(this.state.notes.length+1),
          note:text,
          editDate :new Date().toString()
        })},() =>{
          alert(JSON.stringify(this.state.editotes))
          ToastAndroid.show('Note updated!', ToastAndroid.SHORT);
        })
    :
    this.setState(prevState => {
      notes : prevState.notes.push({
        id: parseInt(this.state.notes.length+1),
        note:text,
        createDate :new Date().toString()}
      )},()=>{
        alert(JSON.stringify(this.state.notes))
      ToastAndroid.show('Note added!', ToastAndroid.SHORT);
    });  
  
  }
  
  Updating_Title_List = () => {
    
     alert(JSON.stringify(this.state.notes))



  }

  Creating_Title_List = () => {
    // alert(JSON.stringify(this.state.notes))

    Realm.open({
      schema:[NoteTitle,Note]
    }).then(realm => {
      realm.write(() =>{
        
        const l = realm.objects('Title_Demo')
        // let obj =  realm.create(Note,this.state.notes);
        
        let t = realm.create(NoteTitle,{
          id:l.length+1,
          title:this.state.title,
          createDate:new Date().toString(),
          notes :this.state.notes,
          
        });
      });
      alert("Add Successfully...")
      this.props.navigation.goBack();
    }).catch(e =>{
      alert(e);      
    });     
  }  

  Add_New_View_Function = () => {
    this.animatedValue.setValue(0);
    let New_Added_View_Value = { Array_Value_Index : this.Array_Value_Index}
    this.setState({
      Disable_Button :true,
      ViewArray:[...this.state.ViewArray, New_Added_View_Value ] },
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

  componentDidMount(){
    if(this.props.navigation.state.params.flag === "editTodo"){
      this.EditData()
    }
    // alert(JSON.stringify(list))  
  } 

  EditData = () => {
    let navigation = this.props.navigation   
    let list= navigation.getParam('titleId','id')
    let flag = navigation.getParam('flag','val')
    this.setState({
      obj : list,
      title : list.item.title,
      editNote: list.item.notes,
      flage : flag,
      ViewArray : list.item.notes
    }) ;
  }
  
  render() {  
    const AnimatedValue = this.animatedValue.interpolate(
      {
          inputRange : [0 ,1],
          outputRange : [59,0]
      });  

      
      let Rander_Animated_View = this.state.ViewArray.map(
        (item,key) =>{
          // if(( key ) == this.Array_Value_Index) {
              return(    
                  <NoteView
                      key ={key} 
                      style={design}  
                      onChangeText={this.pushArray}
                      value = {item}
                      onPress = {this.pushArray}
                   />
            
              );
            // }
            //   else
            //   {
            //       return(
            //         <View style={{height:60, }}>
            //           <NoteView key={key} style={design} />
            //           </View>
            //       );
            //   } 
          }
        )

    /* style={{margin:10,padding:20, right:0, position:'absolute'}} */
   
    const a = [ <View style={design.container}>  
          <View style={{height:80}}> 
            <ButtonStyle 
                style={[design.addButton ,design.buttonText]} 
                title="Create Note"
                onPress={this.Creating_Title_List} />
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
      ]    
         
    
    const b = [<View style={design.container}>
          <View style={{height:80}}>
            <ButtonStyle 
                style={[design.addButton ,design.buttonText]} 
                title="Update Note"
                onPress={this.Updating_Title_List} />
          </View>
        
          <View style={{height:60}}>
            <TextInput 
              style={design.titleText} 
              onChangeText= {(title)=> this.setState({title})}
              value = {this.state.title}
              /> 
          </View>
              <KeyboardAwareScrollView 
                  style={{backgroundColor:'white',flex:1,margin:40,paddingBottom:80,}}>
                <ScrollView style={design.noteFrameInside} >
                    {Rander_Animated_View}
                </ScrollView>
            </KeyboardAwareScrollView>
            <IconButton style={{paddingLeft:10,paddingBottom:30,fontSize:20}} 
                name="add" 
                value=" Add Task" 
                onPress={()=> this.Add_New_View_Function()} />              
    </View> ] 
    
    return (this.state.flage === "editTodo" )? b :a 
      
  
  }
}

export default CreateForm 