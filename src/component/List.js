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
        console.log(this.props.list);
    }
    componentDidMount(){
        console.log("=----------------===================",this.props.list);
    }
  render() {
      
    return (
        <TouchableOpacity style ={styles.row}>
            <View>
                <Title style ={styles.row} title={this.props.list}></Title>
                <SubTitle style={styles.subTitle}></SubTitle>
            </View>
        </TouchableOpacity>
        
    )
  }
}

export default ListItem