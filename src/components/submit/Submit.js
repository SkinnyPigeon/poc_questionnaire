import React, { Component } from 'react';
import styles from './Submit.module.css';

const mailjet = require('node-mailjet')
    .connect(process.env.REACT_APP_APIKEY_PUBLIC, process.env.REACT_APP_APIKEY_PRIVATE)

export default class Submit extends Component {

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmission()
        }
    }

    handleSubmission = () => {
        console.log("Submitting")
        let results = this.extractQsAndAs()
        console.log(results)
        const request = mailjet
            .post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": "2434924@dundee.ac.uk",
                            "Name": "Euan"
                        },
                        "To": [
                            {
                                "Email": "euan.blackledge@soprasteria.com",
                                "Name": "Euan"
                            }
                        ],
                        "Subject": "Serums POC Results Test",
                        "TextPart": "The following are the results from the POC dev testing",
                        "HTMLPart": JSON.stringify(results),
                        "CustomID": "POCTest"
                    }
                ]
            })
        request
            .then((result) => {
                console.log(result.body)
            })
            .catch((err) => {
                console.log(err.statusCode)
                console.log("AGHAGHA")
            })
    }

    extractQsAndAs = () => {
        let questions = {}
        for (let key in this.props.questions) {
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