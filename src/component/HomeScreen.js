import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image  } from 'react-native'
import MainList from './MainList'
import AllHeader from './header'
import styles from './Css/CssForAl'
import { Container,Drawer } from 'native-base';




export class HomeScreen extends Component {
 
  constructor(props){
    super(props)
    
  }  
  
  
  render() {
    
    return (
      
      <Container style={{backgroundColor:'#a4b0be'}}>
        <AllHeader  onPress= {this.props.navigation} />
        <MainList onPress={this.props.navigation} />
        <TouchableOpacity 
                activeOpacity = { 0.7 } 
                style = { styles.TouchableOpacityStyle } 
                onPress={()=>this.props.navigation.navigate("Form",{
                                                            title : "Create Note",
                                                            flag: "NewTodo"
                                                          })}
                >
                <Image
                   source={{uri:('https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png')}} 
                   style = { styles.FloatingButtonStyle }
              />
                
      </TouchableOpacity>
    </Container>
    )
  }
}

export default HomeScreen