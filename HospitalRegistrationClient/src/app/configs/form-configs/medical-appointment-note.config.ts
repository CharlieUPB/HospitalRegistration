import { FormlyFieldConfig } from "@ngx-formly/core";

export const RegisterNoteFormConfig: FormlyFieldConfig[] = [
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'Enter note details',
        required: true,
      },
    },
    {
      key: 'date',
      type: 'datepicker',
      templateOptions: {
        label: 'Note Date',
        placeholder: 'Note Date',
        description: 'Note Date',
        required: true,
        readonly: true
      },
    },
    {
        key: 'patient',
        type: 'input',
        templateOptions: {
          label: 'Patient',
          placeholder: 'Enter patient',
          required: true,
        },
    },
    {
        key: 'doctor',
        type: 'input',
        templateOptions: {
          label: 'Doctor',
          placeholder: 'Enter Doctor',
          required: true
        },
    }
];