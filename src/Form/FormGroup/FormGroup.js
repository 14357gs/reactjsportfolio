import React from 'react';
import PropTypes from 'prop-types';
import './FormGroup.css';

class FormGroup extends React.Component {

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
        let formGroupClass = "form-group " + this.props.formGroupClassName + " " + (this.props.hasError ? "has-error" : "");
        return (
            <div className={formGroupClass}>
                <label className={this.props.labelClassName}
                       htmlFor={this.props.id}>{this.props.required &&
                <span className="required">*</span>}{this.props.labelName}</label>
                <div className={this.props.className}>
                    {this.props.children}
                    {this.renderErrorMessage()}
                </div>
            </div>
        );
    }
}

FormGroup.propTypes = {
    labelName: PropTypes.string.isRequired,
    id: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    errorLabelClassName: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError:PropTypes.bool
};

FormGroup.defaultProps = {
    required: false,
    className: 'col-md-6',
    formGroupClassName: '',
    labelClassName: 'col-md-4 control-label',
    errorLabelClassName: '',
    hasError:false
};

export default FormGroup;