import {StackNavigator,DrawerNavigator} from 'react-navigation'
import  HomeScreen  from './HomeScreen';
import CreateForm from './SecondScreen/CreateForm'
import DrawerView from './DrawerView'
import { Container,Header,Body,Image } from 'native-base';
import styles from './Css/CssForAl'

this.state = {
    title : '',
}


const ContentDrawer = (props) => (
    <Container>
        <Header>
            <Body>
                <Image 
                    style ={styles.drawerImage}
                    source = {require('./Images/drawerPic.jpg')} />
            </Body>
        </Header>
    </Container>

)
const Navigation =StackNavigator(
    {
        Home:{ screen:HomeScreen,
            navigationOptions:{
                title : "Home",
                header:null,
                drawerPosition:'Left',
                drawerWidth:300,
            }
        },
        Form:{
            screen:CreateForm,
            title : this.state.title 
        },  
    },
    {
        InitialRouteName : 'Home',
        mode : 'card',
        headerMode: 'float',
    }    
);

const RootDrawer = DrawerNavigator(
    {
        Home:{
            screen:Navigation,
        },
        Form:{
            screen:CreateForm,
        } 

    },{
        // mode : "modal",
        headerMode: 'float',
        // contentComponent : ContentDrawer,
        drawerPosition : "left",
        drawerOpenRoute : 'DrawerOpen',
        drawerCloseRoute : 'DrawerClose',
        drawerToggleRoute : 'DrawerToggle'

    }
)


export default RootDrawer   