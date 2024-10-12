export interface IFormStructure {
  type: string;
  label: string;
  name: string;
  value: string | number | boolean;
  options?: {
    label: string;
    value: string | number | boolean;
    onChange: boolean;
  }[];
  validators?: { name: string; message: string; validator: string }[];
}
