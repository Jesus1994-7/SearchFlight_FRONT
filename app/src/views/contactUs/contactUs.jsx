import React from 'react';
import { validations } from "../../utils/validations.js";
import { utils } from "../../utils/utils.js";

import { contactMsgService } from '../../services/contactMsgService.js';

import './contactUs.css';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userID: "",
            name: "",
            subject: "",
            email: "",
            msgError: "",
        }
        this.createContactMsg = this.createContactMsg.bind(this);
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    componentDidMount() {//de props llamada
        this.setState({ userID: 0 });
    }

    createContactMsg() {
        const contactMsg = {
            userID: this.state.userID,
            message: this.state.message,
            subject: this.state.subject,
            email: this.state.email
        }

        let error = validations.contactMsgValidation(contactMsg);

        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }

        try {
            contactMsgService.setContactMessage(contactMsg);
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            this.props.history.push('/');
        }, 2000);
    }

    render() {
        return (
            <div>
                <span>{this.state.msgError}</span>
                <input placeholder="Introduzca su email" type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
                <input placeholder="Introduzca asunto" type="text" name="subject" value={this.state.subject} onChange={this.handleChange}></input>
                <input placeholder="Su mensaje para nosotros" type="text" name="message" value={this.state.message} onChange={this.handleChange}></input>
                <button onClick={this.createContactMsg}>ENVIAR!</button>
            </div>
        );
    }
};
export default ContactUs;