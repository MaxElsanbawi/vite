import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schemas
const initialValues = {
  email: '',
  resetCode: '',
  newPassword: '',
};

const emailValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const resetCodeValidationSchema = Yup.object({
  resetCode: Yup.string().required('Required'),
});

const newPasswordValidationSchema = Yup.object({
  newPassword: Yup.string().min(6, 'Password too short').required('Required'),
});

const ForgotPassword = () => {
  const [stage, setStage] = useState(1); // 1: Request Email, 2: Verify Code, 3: Reset Password

  const handleEmailSubmit = async (values) => {
    try {
      await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', {
        email: values.email,
      });
      setStage(2);
    } catch (error) {
      console.error('Error sending reset email:', error);
    }
  };

  const handleCodeSubmit = async (values) => {
    try {
      await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', {
        resetCode: values.resetCode,
      });
      setStage(3);
    } catch (error) {
      console.error('Error verifying reset code:', error);
    }
  };

  const handleNewPasswordSubmit = async (values) => {
    try {
      await axios.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword', {
        newPassword: values.newPassword,
      });
      alert('Password has been reset successfully!');
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div>
      {stage === 1 && (
        <Formik
          initialValues={initialValues}
          validationSchema={emailValidationSchema}
          onSubmit={handleEmailSubmit}
        >
          {() => (
            <Form>
              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <button type="submit">Send Reset Code</button>
            </Form>
          )}
        </Formik>
      )}

      {stage === 2 && (
        <Formik
          initialValues={initialValues}
          validationSchema={resetCodeValidationSchema}
          onSubmit={handleCodeSubmit}
        >
          {() => (
            <Form>
              <div>
                <label htmlFor="resetCode">Reset Code</label>
                <Field type="text" id="resetCode" name="resetCode" />
                <ErrorMessage name="resetCode" component="div" />
              </div>
              <button type="submit">Verify Code</button>
            </Form>
          )}
        </Formik>
      )}

      {stage === 3 && (
        <Formik
          initialValues={initialValues}
          validationSchema={newPasswordValidationSchema}
          onSubmit={handleNewPasswordSubmit}
        >
          {() => (
            <Form>
              <div>
                <label htmlFor="newPassword">New Password</label>
                <Field type="password" id="newPassword" name="newPassword" />
                <ErrorMessage name="newPassword" component="div" />
              </div>
              <button type="submit">Reset Password</button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ForgotPassword;
