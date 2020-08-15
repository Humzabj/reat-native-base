import React, { useState, useEffect } from 'react';
import AppNavbar from '../navigation/AppNavbar/AppNavbar';
import Upload from '../Upload/Upload';
import { View, Text } from 'react-native';

const Home = ({navigation}) => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        console.log(menuOpen)
    })

    return (
        <React.Fragment>
            <AppNavbar navigator={navigation} title='Home' subtitle=''/>
            <View>
                <Text>Home</Text>
            </View>
        </React.Fragment>        
    );
}

export default Home;