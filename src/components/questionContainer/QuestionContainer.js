import React, { Component } from 'react';
import Question from '../question/Question';
import Navigation from '../navigation/Navigation';


export default class QuestionContainer extends Component {

    state = {
        questions: [
            <Question question="This is a question?"/>,
            <Question question="This is another question?"/>
        ],
        number: 0
    }

    handleNext = () => {
        let questions = this.state.questions.length - 1
        let number = this.state.number
        if(number < questions) {
            this.setState({
                number: number + 1
            })
        }
    }

    handlePrevious = () => {
        let number = this.state.number
        if(number > 0) {
            this.setState({
                number: number - 1
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.questions[this.state.number]}
                <Navigation 
                    handleNext={this.handleNext} 
                    handlePrevious={this.handlePrevious} 
                />
            </div>
        )
    }
}