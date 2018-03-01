import React from 'react'
//import './AnswerTexter.scss'

export default class AnswerTexter extends React.Component {

    constructor(props) {
        super(props)
        this.onTextAreaChange = this.onTextAreaChange.bind(this)
        //this.onTextAreaChange = this.onTextAreaChange.bind(this)
        this.state = {
            answer: '',
            // emailForAnsInput: '',
            maxTextLength: 400
        }
    }
    
onTextAreaChange(event) {
    //console.log('this function work, we use hard bind above instead of using this below')
    this.setState({
        answer: event.target.value
    })
    console.log(this.state.answer)
}
// emailForAIChange(event) {
//     this.setState({
//         emailForQueInput: event.target.value
//     })
//     console.log(this.state.emailForQueInput)
//   }

    render() {
        // const maxTextLength = this.state.maxTextLength
        // const answer = this.state.answer
        const { maxTextLength, answer } = this.state  // maping the stucture
        const isDisabled = answer.length <= 0 || answer.length > maxTextLength
        const charsLeft = maxTextLength - answer.length
        const spanClass = charsLeft < 20 ? 'answerTexter_span--warning' : ''
          
        return (        
            <div className="answerTexter">
                <textarea
                placeholder="email"
                onChange={this.emailForAIChange}></textarea>
                <textarea 
                placeholder="your answer ..."
                className="answerTexter_textarea"
                onChange={this.onTextAreaChange}></textarea>
                <footer className="answerTexter_footer">
                <span className={spanClass}>{charsLeft}</span>
                    {/* <span className="answerTexter_span--warning">{maxTextLength - answer.length}</span> */}
                    <button disabled={isDisabled}>Submit</button>
                </footer>
            </div>
        )
    }
}

