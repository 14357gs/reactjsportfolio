import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import './Textbox.css';

class Textbox extends React.Component {
    render() {
        let control;
        if (this.props.type === 'textarea') {
            control = <textarea className="form-control"
                                id={this.props.id}
                                name={this.props.name || this.props.id}
                                ref={this.props.id}
                                value={this.props.value}
                                placeholder={this.props.placeholder}
                                required={this.props.required}
                                onChange={this.props.onChange}>

            </textarea>;
        } else {
            control = <input className="form-control"
                             type={this.props.type}
                             id={this.props.id}
                             name={this.props.name || this.props.id}
                             ref={this.props.id}
                             value={this.props.value}
                             placeholder={this.props.placeholder}
                             required={this.props.required}
                             onChange={this.props.onChange}/>;
        }
        return (
            <FormGroup labelName={this.props.labelName}
                       required={this.props.required}
                       formGroupClassName={this.props.formGroupClassName}
                       className={this.props.className}
                       labelClassName={this.props.labelClassName}
                       errorLabelClassName={this.props.errorLabelClassName}
                       errorMessage={this.props.errorMessage}
                       hasError={this.props.hasError}>
                {control}
            </FormGroup>
        );
    }
}

Textbox.propTypes = {
    labelName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    formGroupClassName: PropTypes.string,
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    errorLabelClassName: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    onChange: PropTypes.func
};

Textbox.defaultProps = {
    type: 'text',
    required: false,
    className: 'col-md-6',
    formGroupClassName: '',
    labelClassName: 'col-md-4 control-label',
    errorLabelClassName: '',
    hasError: false
};

export default Textbox;