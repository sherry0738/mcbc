import React from 'react'
//import './QuestionList.scss'

export default class QuestionList extends React.Component {

    constructor(props) {
        super(props)
        // this.onTextAreaChange = this.onTextAreaChange.bind(this)
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
        if(questions){
            return (
                <div>
                <ul>
                    {   
                        questions.map( question => {
                            //console.log(question.title)
                            return(
                                <li>
                                 <a href="#">{question.title}</a>
                                 <span className="">{question.answers.length}</span>
                                </li>
                            );
                        })
                    }
    
                </ul>
                </div>
            );
        }else{
            return <div>loading...</div>
        }
        
    };


}