import React from 'react';
import './countryList.scss';

import { connect } from 'react-redux';

class QuestionList extends React.Component {

    state = {}

    render() {
        return (
            <select defaultValue={this.props.selected} onChange={
                e => this.props.setQuestion(e.target.key)}>
                {this.props.questions?.map(question => (
                    <option key={question.questionSecret}>
                        {question.questionSecret}
                    </option>
                ))}
            </select>
        )
    }
}

const mapStateToProps = ({ initialData }) => ({ questions: initialData.questionList })
export default connect(mapStateToProps)(QuestionList);
