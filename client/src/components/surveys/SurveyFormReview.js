import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>
          {label}
        </label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Review your Survey</h5>
      {reviewFields}
      <div />
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
      <button
        className="green white-text btn-flat right"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey!
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
    // body: form.body,
    // emails: form.emails,
    // subject: form.subject,
    // title: form.title
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
