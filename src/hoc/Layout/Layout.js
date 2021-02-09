import React, { Component } from 'react';

import Aux from '../Auxiliar/Auxiliar';
import TitleBar from '../../components/Navigation/Titlebar/Titlebar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <TitleBar/>
                <SideDrawer/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;