import React from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class QandAExpandable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnswers: null
    };
  }
  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.cardTitleText}
          subtitle=""
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions expandable={true}>
          <FlatButton label="Answer this question" />
        </CardActions>
      
        {
          this.props.cardAnswers.map((item, index) => {
          return (
            
          <CardText expandable={true} > {item.user}:{item.answer} </CardText> 

          )
        })}
      </Card>
    );
  }
}


export default QandAExpandable;