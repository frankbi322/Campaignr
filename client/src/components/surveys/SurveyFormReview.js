import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

const SurveyReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Review your Survey</h5>
      <div />
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  // console.log(state);
  // const form = state.form.surveyForm.values.body;
  return {
    formValues: state.form.surveyForm.values
    // body: form.body,
    // emails: form.emails,
    // subject: form.subject,
    // title: form.title
  };
}

export default connect(mapStateToProps)(SurveyReview);
