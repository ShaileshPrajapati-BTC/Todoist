import React, { Component } from 'react'
import { Text, View,ScrollView ,TouchableOpacity,Animated,KeyboardAvoidingView} from 'react-native'
import TextField from './TextField'
import design from '../Css/SecondCss'
import ButtonStyle from "./ButtonStyle"
import NoteView from './NoteView'
import { IconButton } from '../IconButton';
import { Item } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export class CreateForm extends Component {
  constructor(){
    super();
    this.state = {
      ViewArray:[],
      Disable_Button: false
    }  
    this.animatedValue = new Animated.Value(0);
    this.Array_Value_Index= 0;
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
              if(( key ) == this.Array_Value_Index)
              { */
                  return(
                      
                        
                          <NoteView key = {key} style={design} />
                    
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
        );

    /* style={{margin:10,padding:20, right:0, position:'absolute'}} */
    return (
      
      <View style={design.container}>
          <View style={{height:80}}>
            <ButtonStyle style={[design.addButton ,design.buttonText]} title="Add Reminder"/>
          </View>
        
          <View style={{height:60}}>
            <TextField style={design.titleText} placeholder="title"/> 
          </View>
              <KeyboardAwareScrollView>
                 
                <ScrollView style={design.noteFrameInside} >
                  
                    {Rander_Animated_View}
                  
                {/* <NoteView style={design} /> */}
                </ScrollView>
            
            </KeyboardAwareScrollView>
                <IconButton style={{paddingLeft:10,fontSize:20}} name="add" value=" Add Task" onPress={()=> this.Add_New_View_Function()} />
              
      </View>
    )
  }
}

export default CreateForm 