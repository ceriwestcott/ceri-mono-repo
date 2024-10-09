import { IFormStructure } from '../form-structure';

export const createTourConfig: IFormStructure[] = [
  {
    type: 'text',
    label: 'Tour Name',
    name: 'tourName',
    value: '',
    validators: [
      {
        name: 'required',
        message: 'Tour Name is required',
        validator: 'required',
      },
    ],
  },
  {
    type: 'text',
    label: 'Tour Description',
    name: 'tourDescription',
    value: '',
    validators: [
      {
        name: 'required',
        message: 'Tour Description is required',
        validator: 'required',
      },
    ],
  }, {
    type: 'number',
    label: 'Tour Price',
    name: 'tourPrice',
    value: '',
    validators: [
      {
        name: 'required',
        message: 'Tour Price is required',
        validator: 'required',
      },
    ],
  }, {
    type: 'text',
    label: 'Tour Duration',
    name: 'tourDuration',
    value: '',
    validators: [
      {
        name: 'required',
        message: 'Tour Duration is required',
        validator: 'required',
      },
    ],
  }, {
    type: 'text',
    label: 'Tour Location',
    name: 'tourLocation',
    value: '',
    validators: [
      {
        name: 'required',
        message: 'Tour Location is required',
        validator: 'required',
      },
    ],
  }, {
    type: 'text',
    label: 'Tour Category',
    name: 'tourCategory',
    value: '',
    validators: [
      {
        name: 'required',
        message: 'Tour Category is required',
        validator: 'required',
      },
    ],
  }
];
