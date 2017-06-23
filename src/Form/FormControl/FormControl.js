import React from 'react';
import PropTypes from 'prop-types';
import Textbox from '../../../components/Form/Textbox';
import Dropdown from '../../../components/Form/Dropdown';

class FormControl extends React.Component {
    render() {
        let formControl,
            field = this.props.field;

        if (field.type === 'dropdown') {
            formControl = <Dropdown id={field.id}
                                    name={field.name}
                                    labelName={field.labelName}
                                    required={field.required}
                                    formGroupClassName={field.formGroupClassName}
                                    className="col-md-8"
                                    labelClassName="col-md-4 control-label"
                                    errorMessage={field.errorMessage}
                                    hasError={field.hasError}
                                    value={field.value}
                                    options={field.options}
                                    onChange={this.props.onChange}
            />
        }
        else {
            formControl = <Textbox type={field.type}
                                   id={field.id}
                                   name={field.name}
                                   labelName={field.labelName}
                                   required={field.required}
                                   formGroupClassName={field.formGroupClassName}
                                   className="col-md-8"
                                   labelClassName="col-md-4 control-label"
                                   errorMessage={field.errorMessage}
                                   hasError={field.hasError}
                                   value={field.value}
                                   onChange={this.props.onChange}
            />
        }
        return formControl;
    };
}

FormControl.propTypes = {
    field: PropTypes.object,
    onChange: PropTypes.func
};

export default FormControl;