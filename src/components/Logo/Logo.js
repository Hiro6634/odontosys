import React from 'react';

import appLogo from '../../assets/Odontoshika_1_200x200.png';
// import './Logo.css';
import styles from './Logo.module.css';

const logo = (props) => {
    console.log(props);
    return(
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={appLogo} alt="Odontoshika"/>
    </div>);
};

export default logo;