import { useEffect, useState } from 'react';
import EditForm from '../Form/EditForm';
import Form from './Form';
import { FORM_TYPE } from './constants';

const Forms = ({formType = 'custom_form'}) => {
  const [form, setForm] = useState({});
  const [updatedFormProps, setUpdatedFormProps] = useState({});  
  const initialValues = {
    firstName: 'Text',
    lastName: '',
    middleName: '',
  };

  const submit = (form) => {
    // console.log('form is tested here');
  };

  const onFormUpdate = (formProp, value) => {
    if (formProp === 'isDirty') {
      setUpdatedFormProps(prevUpdatedFormProps => ({
        ...prevUpdatedFormProps,
        isDirty: value
      }));
    }
  }

  useEffect(() => {
    // formValues
    const formValues = FORM_TYPE.find((form) => form.type === formType);
    const formVal = {
      ...formValues,
      dataSource: {
        firstName: "text",
        middleName: "some name",
        address: {
            street: "wilford",
            city: {
                name: "street"
            }
        },
      },
      onFormUpdate
    }
    let formInstance = new EditForm(formVal);
    setForm(formInstance);
  }, [formType]);

  return (
    <div className="App">

      <Form
        submit={submit}
        initialValues={initialValues}
        form={form}
        updatedFormProps={updatedFormProps}
      />
    </div>
  );
};

export default Forms;
