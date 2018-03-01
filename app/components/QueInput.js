import React from 'react';
//import PropTypes from 'prop-types';
//import { withStyles } from 'material-ui/styles';
//import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';



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
      <form>
        <TextField
          id=""
          label=""
          placeholder="Question Title"
          className="queTitle-textArea"
          value={this.state.queTitle}
          onChange={this.titleTextChange}
          margin="normal"
        />
        <TextField
          required
          id="required"
          label="Required"
          placeholder="email"
          defaultValue=""
          onChange={this.emailForQIChange}
          className="queInput-emailArea"
          margin="normal"
        />
        <TextField
          id="multiline-flexible"
          label="Multiline"
          placeholder="Question Descrition"
          Question Description
          rowsMax="4"
          value={this.state.queDescription}
          onChange={this.desTextChange}
          className="queDescription-textArea"
          margin="normal"
        />
        <button>Save</button>
        </form>
        );
  }
}
  
//         QueInput.propTypes = {
//           classes: PropTypes.object.isRequired,
// };

//export default withStyles(styles)(QueInput);
