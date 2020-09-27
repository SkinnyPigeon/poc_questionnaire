import React, { Component } from 'react';
import styles from './Navigation.module.css';

export default class Navigation extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <button 
                    className={styles.button} 
                    onClick={this.props.handlePrevious} >Previous
                </button>
                <button 
                    className={styles.button} 
                    onClick={this.props.handleNext} >Next
                </button>
            </div>
        )
    }
}