import React, { Component } from 'react';
import styles from './Question.module.css';

export default class Question extends Component {
    state = {
        rating: 1
    }

    handleRating = (e) => {
        this.setState({
            rating: e.target.value
        })
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return(
            <div className={styles.wrapper}>
                <h1>{this.props.question}</h1>
                <input 
                    type="range" 
                    name="rating" 
                    min="1" 
                    max="5" 
                    value={this.state.rating}
                    onChange={this.handleRating} >
                </input>
            </div>
        )
    }
}