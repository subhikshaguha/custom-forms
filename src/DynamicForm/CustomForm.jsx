import FormField from '../Input/FormField';

const CustomForm = ({ form }) => {

  return (
    <div>
      <h5>This is a custom form</h5>
      <FormField field={form?.model?.firstName}  />
      <FormField field={form?.model?.middleName}  />
      <FormField field={form?.model?.lastName}  />
      <FormField field={form?.model?.address}/>
      <br />
    </div>
  );
};

export default CustomForm;
