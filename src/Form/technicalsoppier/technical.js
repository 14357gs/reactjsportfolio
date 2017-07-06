import React from 'react';
import _ from 'lodash';
import Breadcrumb from '../../../containers/Breadcrumb';
import LoginForm from '../LoginForm';
import FormControl from '../../../components/Form/FormControl';
import validators from '../../../utilities/validators';
import statesData from '../../../data/TechnicalSupport/states.json';
import countriesData from '../../../data/TechnicalSupport/countries.json';
import customerData from '../../../data/TechnicalSupport/Customer.json';
import './TechnicalSupport.css';

class TechnicalSupport extends React.Component {
    constructor(props) {
        super(props);
        customerData.detailedInformation.fields.state.options = statesData;
        customerData.detailedInformation.fields.country.options = countriesData;
        this.state = {
            customer: customerData
        };

        this.updateFieldData = this.updateFieldData.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateFieldData(e) {
        let nameParts = e.target.name.split('.'),
            sectionName = nameParts[0],
            fieldName = nameParts[1];

        this.state.customer[sectionName].fields[fieldName].value = e.target.value;

        this.setState({customer: this.state.customer});
    }

    onSubmit(e) {
        if (this.validateForm()) {
            //TODO:Add logic to save data using api
        }
        e.preventDefault();
    }

    validateForm() {
        let isValid = true,
            sectionNames = _.keys(this.state.customer);

        sectionNames.forEach(sectionName => {
            let section = this.state.customer[sectionName],
                fieldNames = _.keys(section.fields);

            fieldNames.forEach(fieldName => {
                let field = section.fields[fieldName];
                isValid = validators.validateField(field);
            });
        });

        this.setState({customer: this.state.customer});

        return isValid;
    }

    renderHeader() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2>Technical Support Request</h2>
                    <p>Some topics and discussions are covered under ADI technical support forum, EngineerZone, but
                        you can use this form to open a private support ticket with our experienced application
                        engineers. Please do not post a question to the support forum and open a support ticket for the
                        same question.</p>
                </div>
            </div>
        );
    }

    renderSection(section, formClass) {
        return (
            <div className="row" key={section}>
                <div className="col-md-12 section">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>{this.state.customer[section].title}</h3>
                        </div>
                        <div className="panel-body" id="type-of-support">
                            <div className={`form-horizontal ${formClass}`}>
                                {this.renderSectionFields(section, this.state.customer[section].fields)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderSectionFields(section, sectionFields) {
        return (
            _.keys(sectionFields).map((key, index) => {
                let field = sectionFields[key];
                field.name = `${section}.${field.id}`;
                return <FormControl key={index} field={field} onChange={this.updateFieldData}/>;
            })
        );
    }

    renderRequestDetailsSection() {
        let requestTypeField = this.state.customer.requestDetails.fields.requestType;
        return (
            <div className="row">
                <div className="col-md-12 section">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>{this.state.customer.requestDetails.title}</h3>
                        </div>
                        <div
                            className={"panel-body" + (requestTypeField.hasError ? " has-error" : "")}
                            id="type-of-support">
                            <div className="form-horizontal">
                                <div className="">
                                    <div className="form-group">
                                        <div className="col-md-2 text-right">
                                            <label className="control-label"
                                                   htmlFor={requestTypeField.id}>{requestTypeField.required &&
                                            <span className="required">*</span>}{requestTypeField.labelName}</label>
                                        </div>
                                        <div className="col-md-8" style={{"marginTop": "9px"}}>
                                            {requestTypeField.options.map(option =>
                                                (
                                                    <span className="request-type-option" key={option.id}>
                                                        <label htmlFor={option.id}>
                                                            <input
                                                                type={requestTypeField.type}
                                                                id={option.id}
                                                                name="requestDetails.requestType"
                                                                ref={option.id}
                                                                value={option.id}
                                                                onChange={this.updateFieldData}
                                                            />
                                                            {option.name}
                                                        </label>
                                                    </span>
                                                )
                                            )}

                                            {this.state.customer.requestDetails.fields.requestType.hasError &&
                                            <span
                                                className="help-block"> Request Type is required</span>
                                            }
                                        </div>
                                    </div>
                                    {requestTypeField.value && this.renderSectionFields(requestTypeField.value, this.state.customer[requestTypeField.value].fields)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Breadcrumb color="aqua"/>
                <div className="container">
                    {this.renderHeader()}
                    <LoginForm/>
                    {this.renderSection('aboutYou', 'col-md-6')}
                    {this.renderSection('detailedInformation', 'col-md-12')}
                    {this.renderSection('project', 'col-md-6')}
                    {this.renderRequestDetailsSection()}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center submit-margin-bottom">
                                <input type="button" className="btn btn-primary" value="SUBMIT"
                                       onClick={this.onSubmit}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TechnicalSupport;
