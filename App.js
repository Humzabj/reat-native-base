import React, { useState, useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MenuDrawer from './src/components/navigation/MenuDrawer/MenuDrawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(menuOpen)
  })

  return (
    // Add redux provider outside of this
    <NavigationContainer>
      <PaperProvider>
        <MenuDrawer />
      </PaperProvider>
    </NavigationContainer>
  );
}
