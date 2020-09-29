import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Slider from '../slider/Slider';
import ProgressTracker from '../progressTracker/ProgressTracker';
import Submit from '../submit/Submit';

export default class QuestionContainer extends Component {

    state = {
        questions: this.props.questions,
        question: 'q1'
    }

    countQuestions = () => {
        let count = 0, key;
        for(key in this.state.questions) {
            if(this.state.questions.hasOwnProperty(key)) {
                count++;
            }
        }
        return count
    }

    handleNext = () => {
        let questionCount = this.countQuestions();
        let questionNumber = this.state.question.substring(1);
        if(questionNumber < questionCount) {
            let question = 'q' + (parseInt(questionNumber) + 1);
            this.setState({
                question: question
            })
        }
    }

    handlePrevious = () => {
        let questionNumber = this.state.question.substring(1);
        if(questionNumber > 1) {
            let question = 'q' + (parseInt(questionNumber) - 1);
            this.setState({
                question: question
            })
        }
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    handleRating = (answer) => {
        let updatedQuestions = this.state.questions;
        updatedQuestions[this.state.question].answer = answer;
        this.setState({
            questions: updatedQuestions
        })
    }

    render() {
        let max = this.countQuestions()
        let questionNumber = this.state.question.substring(1);
        return (
            <div>
                {this.state.questions[this.state.question].question}
                <Slider handleRating={this.handleRating} rating={this.state.questions[this.state.question].answer} />
                <Navigation 
                    handleNext={this.handleNext} 
                    handlePrevious={this.handlePrevious} 
                />
                <ProgressTracker max={String(max)} value={questionNumber}/>
                <Submit questions={this.state.questions}/>
            </div>
        )
    }
}