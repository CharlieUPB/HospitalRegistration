import { FormlyFieldConfig } from "@ngx-formly/core";

export const RegisterPatientFormConfig: FormlyFieldConfig[] = [
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
    }
];