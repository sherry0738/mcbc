import React from 'react'
import QuestionSection from './QuestionSection'

export default class QuestionContainer extends React.Component {
    constructor(props) {
        super(props)
        var buildSections = queSectionList => {
            var sections = queSectionList.map(function (quesection, index) {
                return <QuestionSection key={index} data={quesection} />
            })
            return sections;
        }
    }

    render() {
        var sections = this.buildSections(this.props.data);
        return (
            <div className="questionContainer">
                {sections}
            </div>
        )
    }
}

