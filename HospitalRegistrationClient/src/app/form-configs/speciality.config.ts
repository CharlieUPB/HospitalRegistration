import { FormlyFieldConfig } from "@ngx-formly/core";

export const RegisterSpecialityFormConfig: FormlyFieldConfig[] = [
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
        key: 'description',
        type: 'input',
        templateOptions: {
          label: 'Description',
          placeholder: 'Enter speciality description',
          required: true,
        },
    },
    {
        key: 'iconIdentifier',
        type: 'input',
        templateOptions: {
          label: 'Icon Identifier',
          placeholder: 'Enter icon identifier',
          required: true
        },
    }
];