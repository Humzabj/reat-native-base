import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppNavbar = (props) => {
    const _openMenu = () => {
        console.log('Should open drawer')
        props.menuFunction(true);
    }

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
    <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => props.navigator.openDrawer()} />
        <Appbar.Content title={props.title} subtitle={props.subtitle} />
    </Appbar.Header>
    );
}

export default AppNavbar;