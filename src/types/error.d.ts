export interface Field {
  resource?: string;
  field?: string;
  code?: string;
  message?: string;
}

export interface Error {
  fieldErrors?: Field[];
}
