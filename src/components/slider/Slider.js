import React, { Component } from 'react';
import styles from './Slider.module.css';

export default class Slider extends Component {
    handleAnswer = (e) => {
        this.props.handleRating(parseInt(e.target.value))
    }

    render() {
        return (
            <div className={styles.wrapper}>
                 <input 
                    type="range" 
                    name="rating" 
                    min="1" 
                    max="5" 
                    value={this.props.rating}
                    onChange={this.handleAnswer} >
                </input>
            </div>
        )
    }
}