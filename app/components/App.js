import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import QandAExpandable from './QandAExpandable'
import AnswerTexter from './AnswerTexter'
import QueInput from './QueInput'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ""
    }
  }

  componentDidMount() {
    let localHost = 'http://localhost:3000/details'
    fetch(localHost)
      .then(res => res.json())
      .then(res => {
        this.setState({ questions: res.questions })
        console.log(res);
    })
      
  }

  render() {
    const questions = this.state.questions;
    const answerTexters = this.state.answerTexters 
    
    if (questions) {
      return (
        <MuiThemeProvider>
          <div>
          <h2>Support Group</h2>
          <h3>Recent Asked Questions</h3>
          <a href="#">Ask a Question</a>
          <AnswerTexter />
          <QueInput />
        </div> 
        {
          questions.map(question => {
            return(
              <div>
              <QandAExpandable cardTitleText={question.title} question={question} cardAnswers={question.answers}></QandAExpandable>
            <br/>
            </div>
            )
          })
        }
    </MuiThemeProvider>
      );
    } else {
      return <div>loading...</div>
    }

  }

}


export default App;



// return <div>
//      <AnswerTexter />
//      {answerTexters.map(function(answerTexter, index) {
//        return <p key={index}>{answerTexter}</p>
//        })}
//      {/* {answerTexters.map(answerTexter, index)} => <p key={index}>{answerTexter}</p> */}
     
//      </div>