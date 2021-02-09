import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import IconGreen from '../../../assets/alert-icon-1572-green-32x32.png'
import IconYellow from '../../../assets/alert-icon-1561-Yellow-32x32.png'
import IconRed from '../../../assets/alert-icon-1552-red-32x32.png'

import styles from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact img={IconGreen} alt="Home">Home</NavigationItem>
        <NavigationItem link="/search" img={IconYellow} alt="Search">Search</NavigationItem>
        <NavigationItem link="/scheduler" img={IconRed} alt="Scheduler">Scheduler</NavigationItem>
    </ul>
);

export default navigationItems;