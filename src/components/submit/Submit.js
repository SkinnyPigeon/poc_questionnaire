import React, { Component } from 'react';
import styles from './Submit.module.css';

export default class Submit extends Component {

    handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            this.handleSubmission()
        }
    }

    handleSubmission = () => {
        console.log("Submitting")
        let results = this.extractQsAndAs()
        console.log(results)
    }

    extractQsAndAs = () => {
        let questions = {}
        for(let key in this.props.questions) {
            questions[key] = {
                question: this.props.questions[key].question.props.question,
                rating: this.props.questions[key].answer
            }
        }
        return questions
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <button onClick={this.handleSubmission} onKeyDown={this.handleKeyDown}>Submit</button>
            </div>
        )
    }
}