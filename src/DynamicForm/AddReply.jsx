import FormField from '../Input/FormField';

const AddReply = ({ form }) => {

  return (
    <div>
      <h1>This is a custom form</h1>
      <FormField field={form?.model?.firstName}  />
      <FormField field={form?.model?.middleName}  />
      <FormField field={form?.model?.lastName}  />
      <FormField field={form?.model?.address}/>
      <br />
    </div>
  );
};

export default AddReply;
