import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import './Dropdown.css';

class Dropdown extends React.Component {
    render() {
        return (
            <FormGroup labelName={this.props.labelName}
                       required={this.props.required}
                       formGroupClassName={this.props.formGroupClassName}
                       className={this.props.className}
                       labelClassName={this.props.labelClassName}
                       errorLabelClassName={this.props.errorLabelClassName}
                       errorMessage={this.props.errorMessage}
                       hasError={this.props.hasError}>
                <select className="form-control"
                        id={this.props.id}
                        name={this.props.name || this.props.id}
                        ref={this.props.id}
                        value={this.props.value}
                        required={this.props.required}
                        onChange={this.props.onChange}
                >
                    {this.props.options && this.props.options.map((option, index) =>
                        <option key={index} value={option.id}>{option.name}</option>
                    )}
                </select>
            </FormGroup>
        );
    }
}

Dropdown.propTypes = {
    labelName: PropTypes.string.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    formGroupClassName:PropTypes.string,
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    errorLabelClassName: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError:PropTypes.bool,
    options: PropTypes.array,
    onChange: PropTypes.func
};

Dropdown.defaultProps = {
    required: false,
    className: 'col-md-6',
    formGroupClassName: '',
    labelClassName: 'col-md-4 control-label',
    errorLabelClassName: '',
    hasError:false
};

export default Dropdown;