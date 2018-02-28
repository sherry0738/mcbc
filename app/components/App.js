import React from 'react'
import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Test from './CardExampleWithAvatar'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: 'getting from express...',
      questions: 'getting from express...',
      // imageurl: "http://events.globallandscapesforum.org/wp-content/uploads/sites/2/2017/11/33239101020_d20d6905a9_z.jpg"
    }
    
  }

  render() {
    return (
      <div>
        <h2>Support Group</h2>
        <div>
          <h3>Recent Asked Questions</h3>
          <a href="#">Ask a Question</a>
        </div>
          <Test />
    </div>
    );
  };

}




