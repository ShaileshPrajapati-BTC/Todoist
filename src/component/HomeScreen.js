import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image,RefreshControl } from 'react-native'
import MainList from './MainList'
import AllHeader from './header'
import styles from './Css/CssForAl'
import NoteTitle from '../Database/NoteTitle'
import Note from '../Database/Note'
import { Container,Drawer, Content } from 'native-base';
const Realm = require('realm')



export class HomeScreen extends Component {
 
  constructor(props){
    super(props)
  
      this.state = {
          AllList :[],
          refreshing :false
          // subTitle :''
        };
    this.connectionData = this.connectionData.bind(this)
    
  } 

  componentWillMount(){
    this.connectionData()
  // 
  }
  
  connectionData = () => {
    this.setState({refreshing : true})
    Realm.open({
      schema:[ NoteTitle,Note]
    }).then(realm => {
      realm.write(() =>{
        // alert(Realm.defaultPath); 
        let  List = realm.objects(NoteTitle);
        let a = realm.objects(Note);
        // console.log(List)
        this.setState({
          AllList :List,
          refreshing:false
        });
        // alert(JSON.stringify(this.state.AllList))
      });
    }).catch(error => {
      alert(error);
    });
  }  
  
  render() {
    // console.log(this.state.AllList)
    // this.connectionData()
    
    return (
      <Container>
      <AllHeader  onPress= {this.props.navigation} />
      <Content style={{backgroundColor:'#a4b0be'}}
        refreshControl = {
           <RefreshControl
                refreshing = {this.state.refreshing} 
                onRefresh = {() => this.connectionData()}
                />
                }

      >
        <MainList onPress={this.props.navigation} list={this.state.AllList}  onRefresh={() => this.connectionData()} />
    </Content>
        <TouchableOpacity 
                activeOpacity = { 0.7 } 
                style = { styles.TouchableOpacityStyle  } 
                onPress={()=>this.props.navigation.navigate("Form",{
                                                            title : "Create Note",
                                                            flag: "NewTodo",
                                                            onGoBack :() => this.connectionData()                  
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