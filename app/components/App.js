import React from 'react'
//import PasswordInput from './PasswordInput'
import 

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {info: 'getting from express...'}
  }


componentDidMount() {
  let localHost = 'http://localhost:3000/details'
  let hostedDomain = 'https://rocky-thicket-78112.herokuapp.com/details'
  fetch('https://rocky-thicket-78112.herokuapp.com/details').then(res => res.json()).then(res => this.setState({info: res.info}))
}
// fetch(hostedDomain, {
//   body: JSON.stringify({info: 'from client'}),
//   method: 'POST',
//   headers: {
//     'content-type': 'application/json'
//   }
// })


  render() {
    return <div>
      <h1></h1>
      <h2>{this.state.info}</h2>
      <h2>Mum coder support group</h2>
      <p>Not sure how to start or have a question? Just ask the question in our online support group, developers in our online community would love to help out and share their experience.</p>
      <p><a>Learn More</a></p>
    </div>
    <div>
      <h2>Resources</h2>
      <p>go to find out what you .</p>
      <p><a>Learn More</a></p>
    </div>
    <div>
      <h2>Resources</h2>
      <p>Giving back is always helpful. So join us to share you experience and help each other.</p>
      <p><a>Learn More</a></p>
    </div>
  }

}
