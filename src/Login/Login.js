import React from 'react';
import validator from '../../utilities/validators';
import stringHelper from '../../utilities/stringHelper';
import Textbox from '../Form/Textbox';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: {
                value: '',
                hasError: false,
                errorMessage: ''
            },
            password: {
                value: '',
                hasError: false,
                errorMessage: ''
            }
        };

        this.updateFieldData = this.updateFieldData.bind(this);
        this.login = this.login.bind(this);
    }

    updateFieldData(e) {
        var field = {};
        field[e.target.name] = this.state[e.target.name];
        field[e.target.name].value = e.target.value;
        this.setState(field);
    }

    login(e) {
        if (this.validateLoginForm()) {
            //TODO:Add login into server logic here
        }

        e.preventDefault();
    }

    validateLoginForm() {
        var isValid = true;
        if (stringHelper.isEmpty(this.state.email.value)) {
            this.state.email.errorMessage = "Please enter email";
            this.state.email.hasError = true;
            isValid = false;
        }
        else if (!validator.validateEmail(this.state.email.value)) {
            this.state.email.errorMessage = "Please enter a valid email";
            this.state.email.hasError = true;
            isValid = false;
        }
        else{
            this.state.email.hasError = false;
        }

        if (stringHelper.isEmpty(this.state.password.value)) {
            this.state.password.errorMessage = "Please enter password";
            this.state.password.hasError = true;
            isValid = false;
        }
        else if (!validator.validatePassword(this.state.password.value)) {
            this.state.password.errorMessage = "Please enter a value between 6 and 12 characters long";
            this.state.password.hasError = true;
            isValid = false;
        }
        else{
            this.state.password.hasError = false;
        }

        if (!isValid) {
            this.setState(this.state);
        }

        return isValid;
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="form-horizontal col-md-6">
                        <Textbox type="text"
                                 id="email"
                                 labelName="Email"
                                 className="col-md-6" labelClassName="col-md-4 control-label"
                                 errorMessage={this.state.email.errorMessage}
                                 hasError={this.state.email.hasError}
                                 value={this.state.email.value}
                                 onChange={this.updateFieldData}
                        />

                        <Textbox type="password"
                                 id="password"
                                 labelName="Password"
                                 className="col-md-6" labelClassName="col-md-4 control-label"
                                 errorMessage={this.state.password.errorMessage}
                                 hasError={this.state.password.hasError}
                                 value={this.state.password.value}
                                 onChange={this.updateFieldData}
                        />
                        <div className="form-group">
                            <div className="col-md-offset-4 col-md-8">
                                <div className="help-block">
                                    <a href="https://registration.analog.com/Registration/public/forgotpassword.aspx">
                                        Forgot your password?.
                                    </a>
                                </div>

                                <div className="help-block">
                                    Not a registered user?&nbsp;
                                    <a href="https://registration.analog.com/login/accountregistration.aspx?locale=en"
                                       className="registerNow">
                                        Register now.
                                    </a>
                                </div>

                                <div className="checkbox">
                                    <input type="checkbox" id="auto-login"/>
                                    <label htmlFor="auto-login">
                                        Remember my email on this computer
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-8 col-md-offset-4">
                                <input type="submit" className="btn btn-primary" value="LOGIN" onClick={this.login}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p>
                            Access to information on the Analog Devices web site is subject to
                            our <a
                            href="http://www.analog.com/en/about-adi/landing-pages/001/adi_community_weblog_terms_of_use.html">
                            Terms of Use</a>. Please refer to our <a
                            href="http://www.analog.com/en/about-adi/landing-pages/001/privacy_security_statement.html">
                            Privacy Policy</a> for additional
                            information.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;