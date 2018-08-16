import React, { Component } from 'react'
import { TouchableOpacity,View} from 'react-native'
import styles from "./Css/CssForAl"
import Title from './Title'
import SubTitle from './SubTitle'

export class ListItem extends Component {
    constructor(props){
        super(props);
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

    //   console.log(this.props.item.id)
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
            <View>
                <Title style ={styles.row} title={list.item.title}></Title>
                <SubTitle style={styles.subTitle} sub={list.item.notes}></SubTitle>
            </View>
        </TouchableOpacity>
        
    )
  }
}

export default ListItem