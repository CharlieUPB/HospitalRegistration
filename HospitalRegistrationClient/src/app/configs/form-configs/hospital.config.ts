import { FormlyFieldConfig } from "@ngx-formly/core";

export const RegisterHospitalFormConfig: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter hospital name',
        required: true,
      },
    },
    {
        key: 'description',
        type: 'input',
        templateOptions: {
          label: 'Description',
          placeholder: 'Enter hospital description',
          required: true,
        },
    }
];