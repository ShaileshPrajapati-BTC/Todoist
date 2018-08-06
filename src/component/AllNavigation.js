import {StackNavigator} from 'react-navigation'
import  HomeScreen  from './HomeScreen';
import CreateForm from './SecondScreen/CreateForm'


const Navigation =  StackNavigator(
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
            title :'Create Form',
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