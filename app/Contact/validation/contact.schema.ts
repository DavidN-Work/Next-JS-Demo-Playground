/*
 * File: contact.schema.ts
 * Project: demo-app
 * Created Date: Saturday, July 27th 2024, 4:28:41 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sat Jul 27 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

import * as yup from 'yup';

export const ContactSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required')
    .min(2, 'First Name must be at least 2 characters')
    .max(50, 'First Name must be at most 50 characters'),
  lastName: yup
    .string()
    .required('Last Name is required')
    .min(2, 'Last Name must be at least 2 characters')
    .max(50, 'Last Name must be at most 50 characters'),
  company: yup
    .string()
    .required('Company is required')
    .min(2, 'Company must be at least 2 characters')
    .max(100, 'Company must be at most 100 characters'),
  email: yup.string().required('Email is required').email('Email must be a valid email address'),
  phoneNumber: yup
    .string()
    .required('Phone Number is required')
    .matches(
      /^^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'Phone Number must be a valid international phone number'
    ),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be at most 1000 characters'),
  agreeToPrivacyPolicy: yup
    .boolean()
    .oneOf([true], 'You must agree to the privacy policy')
    .required('You must agree to the privacy policy'),
});

export type ContactFormType = yup.InferType<typeof ContactSchema>;
