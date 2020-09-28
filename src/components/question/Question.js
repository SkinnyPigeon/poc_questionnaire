import React, { Component } from 'react';
import styles from './Question.module.css';

export default class Question extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <h1>{this.props.question}</h1>
            </div>
        )
    }
}