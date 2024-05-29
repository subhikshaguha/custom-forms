import { TextField } from '../Field/TextField';
import { ObjectField } from '../Field/ObjectField';
import { ArrayField } from '../Field/ArrayField';

function createFields(form, rawFields) {
  let fieldModels = [];
  // check type of each field and create field model
  rawFields.forEach((rawField) => {
    fieldModels.push(createField(form, rawField));
  });
  return fieldModels;
}

function getFieldClass(rawField) {
  let fieldClassDefinition = null;
  if (rawField.isObject) {
    fieldClassDefinition = ObjectField;
  } else if (rawField.isText) {
    fieldClassDefinition = TextField;
  } else if (rawField.isArray) {
    fieldClassDefinition = ArrayField;
  }
  return fieldClassDefinition;
}

function createField(containerItem, rawField, parentField = null) {
  let fieldClassDefinition = rawField?.fieldClass || getFieldClass(rawField);

  return new fieldClassDefinition(containerItem, rawField, parentField);
}

function createFieldModels(fields) {
  let fieldModels = {};
  fields.forEach((field) => {
    fieldModels[field.key] = field;
  });
  return fieldModels;
}

export { createFields, createField, createFieldModels };
