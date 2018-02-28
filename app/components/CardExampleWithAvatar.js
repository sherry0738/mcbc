import React from 'react';
import Card, { CardHeader, CardActions, CardText} from 'material-ui/Card';
import Button from 'material-ui/Button';
//import FlatButton from 'material-ui/FlatButton';



export default class Test extends React.Component {
    
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
                //console.log(res);
        }

        render() {
            const questions = this.state.questions;
    
            if (questions) {
                return (
                    <Card>
                        {
                            questions.map(question => {
                                console.log(question.title)
                                const answers = question.answers;
                                return (
                                    // <div className={"question"}>
                                    <CardHeader
                                    title={question.title}
                                    subtitle={question.description}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                 <CardActions>
                                         <Button variant="raised" color="default">Answer this question</Button>
                                        </CardActions>
                                        
                                //         <h4 className="questionTitle">{question.title}
                                //             <span className="">{question.answers.length + " answers"}</span>
                                //         </h4>
                                //         <p className="questionDescription">{question.description}</p>
                                //         {
                                //             answers.map(function(data, index){ 
                                //                 return (
                                //                     <ul>
                                //                         <li className="questionAnswer">{data.usera}</li>
                                //                          {/* key={index} data={section} */}
                                                       
                                //                     </ul>
                                //                 )
                                //             })
                                //         }
    
                                    
                                 );
                            })
                        }
    
                    </Card>
                );
            } else {
                return <div>loading...</div>
            }
        };
    }
    