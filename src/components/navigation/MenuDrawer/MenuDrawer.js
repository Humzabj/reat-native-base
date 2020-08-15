import * as React from 'react';
import {DrawerNavigator} from 'react-navigation'; // 1.0.3
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../Home/Home';
import Upload from '../../Upload/Upload';

const Drawer = createDrawerNavigator();

function MenuDrawer() {
  return (
    <Drawer.Navigator
      hideStatusBar='true'
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Upload" component={Upload} />
    </Drawer.Navigator>
  );
}

export default MenuDrawer;