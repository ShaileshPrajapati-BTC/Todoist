import {StackNavigator} from 'react-navigation'
import  HomeScreen  from './HomeScreen';
import CreateForm from './SecondScreen/CreateForm'


this.state = {
    title : '',
}


const Navigation =StackNavigator(
    {
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            header:null,
            drawerPosition:'Left',
            drawerWidth:300,
        }
    },
    Form:{
        screen:CreateForm,
        navigationOptions:{
            title:"Create Note"
            /* headerStyle:{
            backgroundColor:"#3F51B5",
            } */
        }   
    },  
},
    {
        InitialRouteName : 'Home',
    }    
);

export default Navigation