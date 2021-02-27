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
        type: 'select',
        templateOptions: {
          label: 'Patient',
          placeholder: 'Enter patient',
          required: true,
          labelProp: "name",
          valueProp: "id" 
        },
    },
    {
        key: 'doctor',
        type: 'select',
        templateOptions: {
          label: 'Doctor',
          placeholder: 'Enter Doctor',
          required: true,
          labelProp: "name",
          valueProp: "id" 
        },
    }
];