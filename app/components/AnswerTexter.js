import React from 'react'
//import './AnswerTexter.scss'

export default class AnswerTexter extends React.Component {

    constructor(props) {
        super(props)
        this.onTextAreaChange = this.onTextAreaChange.bind(this)
        this.state = {
            content: '',
            maxTextLength: 400
        }
    }
    
onTextAreaChange(event) {
    //console.log('this function work, we use hard bind above instead of using this below')
    this.setState({
        content: event.target.value
    })
    console.log(this.state.content)
}

    render() {
        // const maxTextLength = this.state.maxTextLength
        // const content = this.state.content
        const { maxTextLength, content } = this.state  // maping the stucture
        const isDisabled = content.length <= 0 || content.length > maxTextLength
        const charsLeft = maxTextLength - content.length
        const spanClass = charsLeft < 20 ? 'answerTexter_span--warning' : ''
        // if (content.length < 20) {
        //     return 'answerTexter_span--warning'
        // } else {
        //     return ''
        // }    
        // can write function with if statement here   
        return (        
            <div className="answerTexter">
                <textarea 
                className="answerTexter_textarea"
                onChange={this.onTextAreaChange}></textarea>
                <footer className="answerTexter_footer">
                <span className={spanClass}>{charsLeft}</span>
                    {/* <span className="answerTexter_span--warning">{maxTextLength - content.length}</span> */}
                    <button disabled={isDisabled}>Submit</button>
                </footer>
            </div>
        )
    }
}

