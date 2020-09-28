import React, { Component } from 'react';
import styles from './ProgressTracker.module.css';

export default class ProgressTracker extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <input type="range" min="1" max={this.props.max} value={this.props.value} readOnly={true} />
                <p>Progress: {this.props.value} / {this.props.max}</p>
            </div>
        )
    }
}