import React from 'react';
import classes from './KekModal.module.css';


const KekModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.dialog]

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            {children}
        </div>
    );
};

export default KekModal;