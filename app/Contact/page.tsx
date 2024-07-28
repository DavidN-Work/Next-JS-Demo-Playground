/*
 * File: page.tsx
 * Project: demo-app
 * Created Date: Saturday, July 27th 2024, 3:50:19 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sat Jul 27 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Textarea, Switch, Button, cn } from '@nextui-org/react';
import { toast } from 'react-hot-toast';
import { ContactFormType, ContactSchema } from './validation/contact.schema';
import { Field, Label } from '@headlessui/react';
import { faker } from '@faker-js/faker';
import approvedNumbers from './Data/approvedNumbers.data';

const FormPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    register,
    setValue,
    watch,
  } = useForm<ContactFormType>({
    resolver: yupResolver(ContactSchema),
  });

  const [contacts, setContacts] = useState<ContactFormType[]>([]);
  const [agreed, setAgreed] = useState(false);

  const onSubmit = (data: ContactFormType) => {
    setContacts(prevContacts => [...prevContacts, data]);
    alert(JSON.stringify(data, null, 2));
    toast.success('Message sent successfully!');
    reset();
  };

  const generateFakeData = () => {
    setAgreed(true);
    const fakeData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.name(),
      email: faker.internet.email(),
      phoneNumber: approvedNumbers[Math.floor(Math.random() * approvedNumbers.length)],
      message: faker.lorem.paragraph(),
      agreeToPrivacyPolicy: true,
    };

    Object.keys(fakeData).forEach(key => {
      setValue(key as keyof ContactFormType, fakeData[key as keyof ContactFormType]);
    });
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 flex items-center mx-auto">
      <div className="">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact sales
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <Input
              size="sm"
              type="text"
              label="First Name"
              autoComplete="given-name"
              isInvalid={!!errors.firstName}
              errorMessage={errors.firstName?.message}
              aria-invalid={errors.firstName ? 'true' : 'false'}
              {...register('firstName', { required: true })}
              value={watch('firstName')}
              onChange={e => setValue('firstName', e.target.value)}
            />
            <Input
              size="sm"
              type="text"
              label="Last Name"
              autoComplete="family-name"
              isInvalid={!!errors.lastName}
              errorMessage={errors.lastName?.message}
              aria-invalid={errors.lastName ? 'true' : 'false'}
              {...register('lastName', { required: true })}
              value={watch('lastName')}
              onChange={e => setValue('lastName', e.target.value)}
            />
            <Input
              className="sm:col-span-2"
              size="sm"
              type="text"
              label="Company"
              autoComplete="organization"
              isInvalid={!!errors.company}
              errorMessage={errors.company?.message}
              aria-invalid={errors.company ? 'true' : 'false'}
              {...register('company', { required: true })}
              value={watch('company')}
              onChange={e => setValue('company', e.target.value)}
            />
            <Input
              size="sm"
              type="email"
              label="Email"
              autoComplete="email"
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email', { required: true })}
              value={watch('email')}
              onChange={e => setValue('email', e.target.value)}
            />
            <Input
              size="sm"
              type="text"
              label="Phone Number"
              autoComplete="tel"
              isInvalid={!!errors.phoneNumber}
              errorMessage={errors.phoneNumber?.message}
              aria-invalid={errors.phoneNumber ? 'true' : 'false'}
              {...register('phoneNumber', { required: true })}
              value={watch('phoneNumber')}
              onChange={e => setValue('phoneNumber', e.target.value)}
            />
            <Textarea
              size="sm"
              label="Message"
              autoComplete="off"
              className="sm:col-span-2"
              isInvalid={!!errors.message}
              errorMessage={errors.message?.message}
              aria-invalid={errors.message ? 'true' : 'false'}
              {...register('message', { required: true })}
              value={watch('message')}
              onChange={e => setValue('message', e.target.value)}
            />
            <Field className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  isSelected={agreed}
                  onValueChange={setAgreed}
                  {...register('agreeToPrivacyPolicy', { required: true })}
                  onChange={e => {
                    setAgreed(e.target.checked);
                    setValue('agreeToPrivacyPolicy', e.target.checked);
                  }}
                  color="success"
                />
              </div>
              <Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-[#fbd900]">
                  privacy&nbsp;policy
                </a>
                .
              </Label>
            </Field>
          </div>
          <div className="mt-10 flex gap-4">
            <Button
              type="submit"
              disabled={!agreed}
              className={cn(
                agreed ? 'bg-[#fbd900]' : 'bg-gray-100 opacity-50',
                'text-gray-800 font-bold'
              )}
              fullWidth
            >
              Let&apos;s talk
            </Button>
            <Button
              type="button"
              onClick={generateFakeData}
              className="text-gray-800 font-bold"
              fullWidth
            >
              Generate fake data
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
