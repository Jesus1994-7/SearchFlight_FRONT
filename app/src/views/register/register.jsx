import React from "react"
import './register.css';

class Register extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name : "",
            username : "",
            surname : "",
            password : "",
            password2 : "",
            passport : "",
            questionSecret : "",
            answerSecret : "",
            country : "",
            email : "",
            address : "",
            telephone : "",
            error : "",
            isRegistred : false
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default Register;