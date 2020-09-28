import React, { Component } from 'react';
import Question from '../question/Question';
import Navigation from '../navigation/Navigation';
import Slider from '../slider/Slider';


export default class QuestionContainer extends Component {

    state = {
        questions: {
            q1: {
                question: <Question question="This is a question?" />,
                answer: 1
            },
            q2: {
                question: <Question question="This is another question?" />,
                answer: 1

            },
            q3: {
                question: <Question question="This is the final question?" />,
                answer: 1
            }
        },
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
        return (
            <div>
                {this.state.questions[this.state.question].question}
                <Slider handleRating={this.handleRating} rating={this.state.questions[this.state.question].answer} />
                <Navigation 
                    handleNext={this.handleNext} 
                    handlePrevious={this.handlePrevious} 
                />
            </div>
        )
    }
}