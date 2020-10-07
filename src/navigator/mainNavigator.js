import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile132018Navigator from '../features/UserProfile132018/navigator';
import Settings132017Navigator from '../features/Settings132017/navigator';
import Settings132015Navigator from '../features/Settings132015/navigator';
import SignIn2132013Navigator from '../features/SignIn2132013/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile132018: { screen: UserProfile132018Navigator },
Settings132017: { screen: Settings132017Navigator },
Settings132015: { screen: Settings132015Navigator },
SignIn2132013: { screen: SignIn2132013Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
