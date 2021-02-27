import { FormlyFieldConfig } from "@ngx-formly/core";
import { Doctor } from "../models/doctor";

export const EmptyDoctor: Doctor = {
  name: '',
  address: '',
  birthdate: null,
  lastName: '',
  medicalAppointmentNotes: [],
  profilePicture: '',
  specialities: [],
  id: 0
};

export const RegisterDoctorFormConfig: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter name',
        required: true,
      },
    },
    {
        key: 'lastName',
        type: 'input',
        templateOptions: {
          label: 'Last Name',
          placeholder: 'Enter last name',
          required: true,
        },
    },
    {
      key: 'birthdate',
      type: 'datepicker',
      templateOptions: {
        label: 'Datepicker',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        readonly: true
      },
    },
    {
        key: 'address',
        type: 'input',
        templateOptions: {
          label: 'Address',
          placeholder: 'Enter address',
          required: true,
        },
    },
    {
        key: 'profilePicture',
        type: 'input',
        templateOptions: {
          label: 'Profile Picture',
          placeholder: 'Enter profile picture',
          required: true
        },
    },
    {
      key: 'specialities',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Speciality',
        placeholder: 'Medical Speciality',
        description: 'Fill in your medical specialities',
        required: true,
        type: 'array',
        options: [
          { value: 1, label: 'Cardio'},
          { value: 2, label: 'Urologist'},
          { value: 3, label: 'Ginecologist'},
          { value: 4, label: 'Cardio'},
          { value: 5, label: 'Urologist'},
          { value: 6, label: 'Ginecologist'},
          { value: 7, label: 'Cardio'},
          { value: 8, label: 'Urologist'},
          { value: 9, label: 'Ginecologist'}
        ]
      }
    }
];