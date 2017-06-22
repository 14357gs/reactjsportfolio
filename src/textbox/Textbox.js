import React from 'react';
import PropTypes from 'prop-types';
import './Textbox.css';

class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = {
            hasError: this.props.hasError,
            errorClass: this.props.hasError ? 'has-error' : ''
        };
        this.errorClass = 'has-error';
    }

    handleBlur(e) {
        if (this.props.isRequired) {
            const hasError = this._isEmpty(e.target.value);
            this.setState({
                hasError: hasError,
                errorClass: hasError ? 'has-error' : ''
            });
        }
    }

    _isEmpty(str) {
        return !str && this._trim(str) === '';
    }

    _trim(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }

    renderErrorMessage() {
        if (this.props.hasError) {
            return (
                <div className={this.props.errorLabelClassName} style={{display: this.props.hasError}}>
                    <span className="help-block">{this.props.errorMessage}</span>
                </div>
            );
        }

        return null;
    }

    render() {
        return (
            <div className={"form-group " + (this.props.hasError ? this.errorClass : "")}>
                <label className={this.props.labelClassName}
                       htmlFor={this.props.id}>{this.props.isRequired &&
                <span className="required">*</span>}{this.props.labelName}</label>
        <div className={this.props.className}>
            <input className="form-control"
                   type={this.props.type}
                   id={this.props.id}
                   name={this.props.id}
                   ref={this.props.id}
                   value={this.props.value}
                   placeholder={this.props.placeholder}
                   required={this.props.isRequired}
                   onChange={this.props.onChange}
            />
        </div>
    {this.renderErrorMessage()}
    </div>
    )
        ;
    }
}

Textbox.propTypes = {
    labelName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    errorLabelClassName: PropTypes.string,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func
};

Textbox.defaultProps = {
    type: 'text',
    required: false,
    className: 'col-md-6',
    labelClassName: 'col-md-4 control-label',
    errorLabelClassName: 'col-md-offset-4 col-md-6'
};

export default Textbox;
