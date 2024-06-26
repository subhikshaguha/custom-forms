import { BaseField } from './BaseField';
import { createField, createFieldModels } from '../utilities/FormModel';

export class ObjectField extends BaseField {
  isObject = true;
  childFields = null;

  constructor(form, fieldValue, parentField = null) {
    super(form, fieldValue, parentField);
    this.childFieldsMetaInfo = fieldValue.childFieldsMetaInfo || [];
    this.createChildFields(this.childFieldsMetaInfo);
    // this.childFields = fieldValue.childFields;
    this.model = createFieldModels(this.childFields);
  }

  createChildFields(
    childFieldsValues = null,
  ) {
    let childFields = [];
    if (childFieldsValues) {
      // let childMetaInfo = this.childFieldsMetaInfo;
      childFieldsValues.forEach((childValue) => {
        let fieldValue = {
          ...childValue,
          value: this.value?.[childValue.key],
        };
        let field = createField(this.form, fieldValue, this);
        childFields.push(field);
      });
    }

    // this.value = value;
    // this._initialValue = initialValue;
    this.childFields = childFields;
  }

  isFieldDirty() {
    this.isDirty = this.childFields.some((child) => child.isDirty);
    if (this.parentField) {
      this.parentField.isFieldDirty();
    } else {
      this.form.isFieldDirty();
    }
    return this.isDirty;
  }

  validate() {
    return new Promise((resolve, reject) => {
      this.resetErrors();
      let promises = {};
      this.childFields.forEach((child) => {
        promises[child.key] = child.validate();
      });
  
      Promise.allSettled(Object.values(promises))
        .then((results) => {
          const isValid = results.every((result) => result.status === 'fulfilled');
          if (isValid) {
            resolve();
          } else {
            reject();
          }
        });
    });
  }

  getCleanValue() {
    let cleanValue = {};
    this.childFields.forEach((child) => {
      cleanValue[child.key] = child.getCleanValue();
    });
    this.cleanValue = cleanValue;
    return cleanValue;
  }

}
