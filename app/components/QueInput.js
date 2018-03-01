import React from 'react';
//import PropTypes from 'prop-types';
//import { withStyles } from 'material-ui/styles';
//import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import './QueInput.scss'



export default class QueInput extends React.Component {

  constructor(props) {
    super(props)
    this.titleTextChange = this.titleTextChange.bind(this)
    this.emailForQIChange = this.emailForQIChange.bind(this)
    this.desTextChange = this.desTextChange.bind(this)
    this.state = {
      queTitle: '',
      emailForQueInput: '',
      queDescription: ''

    }
    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }
  handleQuestionClick(event) {

    let serviceUrl = 'http://localhost:3000/question'
    //let serviceUrl = 'http://ec2-13-211-164-23.ap-southeast-2.compute.amazonaws.com:3000/question'
    fetch(serviceUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.emailForQueInput,
        username: this.state.emailForQueInput,
        title: this.state.queTitle,
        description: this.state.queDescription
      })
    }).then(res => {

      //console.log(res);
    })
  }
  titleTextChange(event) {
    this.setState({
      queTitle: event.target.value
    })
    console.log(this.state.queTitle)
  }
  emailForQIChange(event) {
    this.setState({
      emailForQueInput: event.target.value
    })
    console.log(this.state.emailForQueInput)
  }

  desTextChange(event) {
    this.setState({
      queDescription: event.target.value
    })
    console.log(this.state.queDescription)
  }

  render() {

    return (
      <div>
      <h5>Post your question here:</h5>

      <form className="question-form">
      
        <TextField
          id=""
          label=""
          placeholder="Question Title"
          className="queTitle-textField"
          value={this.state.queTitle}
          onChange={this.titleTextChange}
          margin="normal"
        />
        
        <TextField
          id="multiline-flexible"
          label="Multiline"
          placeholder="Question Descrition"
          value={this.state.queDescription}
          onChange={this.desTextChange}
          className="queDescription-textField"
          margin="normal"
        />
        <TextField
          required
          id="required"
          label="Required"
          placeholder="email"
          defaultValue=""
          onChange={this.emailForQIChange}
          className="queInputEmail-textField"
          margin="normal"
        />
        
        <button onClick={this.handleQuestionClick} style={{flex:1 , marginRight:10}}>Save</button>
      </form>
      </div>
    );
  }
}

//         QueInput.propTypes = {
//           classes: PropTypes.object.isRequired,
// };

//export default withStyles(styles)(QueInput);
