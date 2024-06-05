import React, { useState } from 'react';
import FormField from '../Input/FormField';
import UiDynamicForm from './UiDynamicForm';

function Form(props) {
  const { form, updatedFormProps } = props;
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    if (submitted) {
      setSubmitted(false);
    }
    form.submit().then(async() => {
      setSubmitted(true);
      console.log('test data source', form.dataSource);
      await fetchUserData();
      setSubmitted(false);
    }).catch(() => {
      setSubmitted(true);
    })
  };

  const fetchUserData = () => {
    setIsLoading(true);
    // https://run.mocky.io/v3/9fa06aac-a001-49fc-bc26-bea654aa5b13 - error
    // https://run.mocky.io/v3/79c9a905-1891-4947-b40a-737738ea7b91 - success
    fetch("https://run.mocky.io/v3/79c9a905-1891-4947-b40a-737738ea7b91")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        if (!data?.errors) {
          let dataSource = data;
          form.setDataSource(dataSource);
          form.copyFromDataSource();
          setIsLoading(false);
        } else if (data?.errors) {
          data.status = 422;
          form.populateErrors(data);
          setIsLoading(false);
        }
      })
  };

  return (
    <form className="Form">
      {form?.component ? <UiDynamicForm component={form.component} form={form} /> :
        <React.Fragment>
          {form?.fields?.map((field, index) => {
            return (
              <FormField key={`${field.key}${index}`} field={field} />
            );
          })}
        </React.Fragment>
      }
      <button type="button" onClick={() => onSubmit()} disabled={!updatedFormProps.isDirty || isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
}

export default Form;
