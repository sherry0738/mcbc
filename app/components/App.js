import React from 'react'
//import PasswordInput from './PasswordInput'
import QuestionList from './QuestionList'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { info: 'getting from express...',questions: 'getting from express...'  }
    
  }

  //let hostedDomain = 'https://rocky-thicket-78112.herokuapp.com/details'
  // fetch(hostedDomain, {
  //   body: JSON.stringify({info: 'from client'}),
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // })


  render() {
    //const info = this.state.info
    
    
    return (
      <div>
        <h1>Support Group</h1>
        <div>
          <h2>Recent Asked Questions</h2>
          <a href="">Ask A Question</a>
        </div>
        <div>
            <QuestionList />
            
        </div>
    </div>
    );
  };

}
