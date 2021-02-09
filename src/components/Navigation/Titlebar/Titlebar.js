import React from 'react';

import Logo from '../../Logo/Logo';
import styles from './Titlebar.module.css';

const titlebar = (props) => (
    <header className={styles.Titlebar}>
        <div className={styles.Logo}>
            <Logo/>
        </div>
        <div className={styles.Title}>
            <h1>Historia Clinica</h1>
        </div>
    </header>
);

export default titlebar;