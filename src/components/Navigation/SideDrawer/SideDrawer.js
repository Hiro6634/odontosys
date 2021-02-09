import React from 'react';

import styles from './SideDrawer.module.css';

import Aux from '../../../hoc/Auxiliar/Auxiliar';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => (
    <Aux>
        <Backdrop/>
        <div className={styles.SideDrawer}>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    </Aux>
);

export default sideDrawer;