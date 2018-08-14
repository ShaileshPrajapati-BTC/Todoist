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

const realm = new Realm({schema:[NoteTitle,Note]});



export class CreateForm extends Component {
 
  

  constructor(props){
    super(props);
    this.state = {
      ViewArray:[],
      Disable_Button: false,
      obj:'',
      title:'',
      editNote:[],
      // notes:[],
      realm:'',
      data:'',
      id:0,
      flage:'',
     };  
    // this.handleValue = this.handleValue.bind(this),
    this.animatedValue = new Animated.Value(0);
    this.Array_Value_Index= 0;
     
    
  }


  demoPush = (text) =>{
    
  }

  pushArray = (text) => {
    (this.state.flage ==="editTodo")?    
     this.setState( prevState => {
        editNote : prevState.notes.push({
          id :id ,
          note:text,
          editDate :new Date().toString()
        })} 
        ,() =>{
          alert(JSON.stringify(this.state.editnotes))
        })
      //  ( 
      //     this.statenotes[key].note = 'text'
      // ,() =>{
      //     alert(JSON.stringify(this.state.notes))
      //     ToastAndroid.show('Note updated!', ToastAndroid.SHORT);
      //   })
    :
    this.setState(prevState => {
      notes : prevState.notes.push({
        id: parseInt(this.state.notes.length+1),
        note:text,
        createDate :new Date().toString()}
      )},()=>{
        alert(JSON.stringify("welcom",this.state.notes))
      ToastAndroid.show('Note added!', ToastAndroid.SHORT);
    });  
  
  }
  


  // handleValue = (text) => {

  //   // alert(JSON.stringify(text ,"==========",key))
  //   this.setState({note :text})
    
  //   alert(this.state.note)
  //   // console.log(this.state.note,"...................",key)
  //   // this.value = text;
  // }
  // storeInArray = (note) =>{
  //   alert(this.state.note)
  //   // notes = this.state.notes.push(this.state.note)

  // }


  // demoCreate = () =>{
  //   Realm.open({
  //     schema:[NoteTitle,Note]
  //   }).then(realm => {
  //     realm.write(() =>{
        
  //       const l = realm.objects('Title_Demo').filtered('id=3')
  //       const n =realm.objects(Note)
  //       let obj =  realm.create(Note,this.state.notes);
        
  //       let t = realm.create(NoteTitle,{
  //         id:l.length+1,
  //         title:this.state.title,
  //         createDate:new Date().toString(),
  //         notes :this.state.ViewArray.map(
  //           (item,key) =>{
  //             return({
  //               id: n.length+1,
  //               note :this.state.note,
  //               createDate : new Date().toString()               
  //             })
  //           })
            
  //         });
  //         alert("Add Successfully...\n",JSON.stringify(l))

  //     });
  //     this.props.navigation.goBack();
  //   }).catch(e =>{
  //     alert(e);      
  //   });
  // }


  Creating_Title_List = () => {
    // alert(JSON.stringify(this.state.ViewArrays))




    Realm.open({
      schema:[NoteTitle,Note]
    }).then(realm => {
    realm.write(() =>{
        
      const l = realm.objects(NoteTitle)
      let n =realm.objects(Note)
       console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",this.state.ViewArray)
      let t = realm.create(NoteTitle,{
          id:l.length+1,
          title:this.state.title,
          createDate:new Date().toString(),
          notes :this.state.ViewArray.map(
            (item,key) =>{
              return({
                id:parseInt(n.length+item.notes.id+1),
                note :item.note,
                createDate : new Date().toString()               
              })
             })
             
      });

      if(this.state.flage == 'newTodo'){

      }


    });
    ToastAndroid.show('Note added successfully...', ToastAndroid.SHORT);
    this.props.navigation.goBack();
   }).catch(e =>{
     alert(e);      
   });     
}  

  Add_New_View_Function = () => {
    this.animatedValue.setValue(0);
    let New_Added_View_Value = { Array_Value_Index : this.Array_Value_Index,notes:
                                {
                                id:this.Array_Value_Index,
                                note:'',
                                createDate:'',
                                editDate:'',
                                completeDate:''
                                }
                              }
    this.setState({
      // Disable_Button :true,
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
                // value=''
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
    
    const list= navigation.getParam('titleId','id')
    const flag = navigation.getParam('flag','val')
    // alert(JSON.stringify(flag)) 
    this.setState({
      obj : list,
      title : list.item.title,
      // editNote: list.item.notes,
      flage : flag,
      ViewArray : list.item.notes

    },()=>{
      // alert(this.state.title)
      alert(JSON.stringify(this.state.ViewArray))
    //   // this.Updating_Title_List()
    }) ;
  }

  Updating_Title_List = () => {  
 // alert(JSON.stringify(this.state.ViewArrays))

    Realm.open({
      schema:[NoteTitle,Note]
      }).then(realm => {
      realm.write(() =>{ 
        // alert(JSON.stringify(this.state.obj))
        let t = realm.create(NoteTitle,{
          id:this.state.obj.item.id,
          title:this.state.title,
          editDate:new Date().toString(),
          notes :this.state.ViewArray.map(
            (item,key) =>{
              return({
                id:item.id,
                note :item.note,
                editDate : new Date().toString()               
              })
            })
            
          },true);
      });

      alert("Note updated...")
      this.props.navigation.goBack();
    }).catch(e =>{
      alert(e);      
    });         
  }



  render() {  
    // const AnimatedValue = this.animatedValue.interpolate(
    //   {
    //       inputRange : [0 ,1],
    //       outputRange : [59,0]
    //   });  
      console.log(JSON.stringify(this.state.ViewArray))
      let Rander_Animated_View = this.state.ViewArray.map(
        (item,key) =>{

          console.log("Kssey  :",key,"====================","item :",item.note)
          // if(( key ) == this.Array_Value_Index) {

            // this.setState({
              
            //     realValue :(this.state.flage === "editTodo" )?item.note:realValue
            // })        

             
            return(    
              <NoteView
                key ={key} 
                style={design} 
                
                // onChangeText = {this.}
                onChangeText = {(text) => /* (item.value=text) */ { item.note=text }}
// final                onChangeText = {(text) => {item.value=text}}
               value ={ item.note}
                
                // (this.state.flage === "editTodo")? value={this.state.ViewArray[key].note} : value = {item.val}
                // value = {this.item}
              // console.log("hello =========================================================",key)
                      // onPress = {this.pushArray}
                      // onChange={this.handleValue}
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
                // title={(this.state.flage === "editTodo" )? "Update note" :"Create Note"}
                title="Create Note"
                onPress={(this.state.flage === "editTodo" )? this.Updating_Title_List :this.Creating_Title_List} />
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
                onPress={()=> this.Add_New_View_Function()} 
                
                />              

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