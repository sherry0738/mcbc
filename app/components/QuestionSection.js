import React from 'react'
//import './QuestionSection.scss'

export default class QuestionSection extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            content: '',
        }
    }
    componentDidMount() {
        let localHost = 'http://localhost:3000/details'
        fetch(localHost)
            .then(res => res.json())
            .then(res => this.setState({ questions: res.questions }))
    }

    render() {
        const questions = this.state.questions;

        if (questions) {
            return (
                <div>
                    {
                        questions.map(question => {
                            //console.log(question.title)
                            const answers = question.answers;
                            return (
                                <div className={"question"}>
                                    <h4 className="questionTitle">{question.title}
                                        <span className="">{question.answers.length + " answers"}</span>
                                    </h4>
                                    <p className="questionDescription">{question.description}</p>
                                    {
                                        answers.map(function(data, index){ 
                                            return (
                                                <ul>
                                                    <li className="questionAnswer">{data.usera}</li>
                                                     {/* key={index} data={section} */}
                                                   
                                                </ul>
                                            )
                                        })
                                    }

                                </div>
                            );
                        })
                    }

                </div>
            );
        } else {
            return <div>loading...</div>
        }
    };
}

