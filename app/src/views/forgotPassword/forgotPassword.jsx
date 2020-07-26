import React from 'react';
import { withRouter } from 'react-router-dom';

import QuestionList from '../../components/questionList/questionList.jsx';
import { userService } from '../../services/userService.js';

import { validations} from '../../utils/validations.js'
import { utils } from '../../utils/utils.js';
import './forgotPassword.scss';

class SearchFlightComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answer: "",
            username: "",
            password: "",
            password2: "",
            msgError: ""
        }
    }

    setQuestion = (question) => {
        this.setState({ question: question });
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    forgotPass = (ev) => {
        ev.preventDefault();

        try {
            const forgotData = {
                question: this.state.question,
                answer: this.state.answer,
                username: this.state.username,
                password: this.state.password 
            };

            let error = validations.forgotDataValidation(forgotData,this.state.password2);
            if(!utils.isNullOrEmpty(error)){
                this.setState({msgError:error});
                return;
            }
            
            userService.forgotPassword(forgotData);
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500);

        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <form onSubmit={this.forgotPass}>
                <span>{this.state.msgError}</span>
                    Usuario : <input placeholder="Introduzca su usuario" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Preguntas Secretas : <QuestionList id={0} setQuestion={this.setQuestion} readOnly />
                    Respuesta Secreta : <input type="text" name="answer" value={this.state.answer} onChange={this.handleChange} />
                    Nueva contraseña : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    Repita la constraseña : <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange} />
                <button type="submit">Recuperar mi contraseña!</button>
            </form>
        )
    }
}
export default withRouter(SearchFlightComp);

