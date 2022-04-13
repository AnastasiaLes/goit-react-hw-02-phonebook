import { Formik, Form, ErrorMessage } from 'formik';
import { ContactField, FieldName, AddContactButton } from './App.styled';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
});

const initialValues = {
  name: '',
  id: nanoid(),
};

export const NameField = ({ handleClick }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      // onSubmit={onSubmit}
    >
      <Form autoComplete="off">
        <FieldName htmlFor="name">Name</FieldName>
        <ContactField type="text" name="name" />
        <ErrorMessage name="name" component="div" />

        <AddContactButton type="button" onClick={handleClick}>
          {' '}
          Add contact{' '}
        </AddContactButton>
      </Form>
    </Formik>
  );
};
