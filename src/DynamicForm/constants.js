const CUSTOM_FORMS = {
  type: "custom_form",
  component: "./CustomForm.jsx",
  application: "happyfox",
  rawFields: [
    {
      isText: true,
      label: "First Name",
      key: "firstName",
      isMandatory: true,
    },
    {
      isText: true,
      label: "Last Name",
      key: "lastName",
      isMandatory: true,
      validateOnFocusOut: true,
      minCharacterLimit: 5,
    },
    {
      isText: true,
      label: "Middle Name",
      key: "middleName",
    },
    {
      isObject: true,
      label: "Address",
      key: "address",
      childFieldsMetaInfo: [
        {
          isText: true,
          label: "Street",
          key: "street",
          isMandatory: true,
          validateOnChange: true,
        },
        {
          isObject: true,
          label: "City",
          key: "city",
          childFieldsMetaInfo: [
            { isText: true, label: "Name", key: "name" },
            { isText: true, label: "Code", key: "code" },
          ],
        },
        { isText: true, label: "State", key: "state" },
      ],
    },
    {
      isArray: true,
      label: 'Phones',
      key: 'phones',
      childFieldsMetaInfo: {
        isObject: true, 
        label: 'Phone', 
        key: 'phone',
        childFieldsMetaInfo: [
          { isText: true, label: 'Number', key: 'number' },
          { isText: true, label: 'Type', key: 'type' },
        ]
      }
    }
  ],
};

const INBUILT_FORMS = {
  type: "inbuilt_form",
  application: "happyfox",
  rawFields: [
    {
      isText: true,
      label: "First Name",
      key: "firstName",
      isMandatory: true,
    },
    {
      isText: true,
      label: "Last Name",
      key: "lastName",
      isMandatory: true,
      validateOnFocusOut: true,
      minCharacterLimit: 5,
    },
    {
      isText: true,
      label: "Middle Name",
      key: "middleName",
    },
    {
      isArray: true,
      label: 'Phones',
      key: 'phones',
      childFieldsMetaInfo: {
        isObject: true, 
        label: 'Phone', 
        key: 'phone',
        childFieldsMetaInfo: [
          { isText: true, label: 'Number', key: 'number' },
          { isText: true, label: 'Type', key: 'type' },
        ]
      }
    }
  ],
};

const FORM_TYPE = [CUSTOM_FORMS, INBUILT_FORMS];

export { FORM_TYPE };
