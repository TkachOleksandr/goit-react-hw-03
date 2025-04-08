import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  Label,
  Input,
  ErrorText,
  SubmitButton,
} from './ContactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required('Required'),
  number: Yup.string().min(3).max(50).required('Required'),
});

function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        onAdd(values.name, values.number);
        actions.resetForm();
      }}
    >
      <Form as={FormContainer}>
        <Label>
          Name
          <Field name="name" as={Input} />
          <ErrorMessage name="name" component={ErrorText} />
        </Label>
        <Label>
          Number
          <Field name="number" as={Input} />
          <ErrorMessage name="number" component={ErrorText} />
        </Label>
        <SubmitButton type="submit">Add Contact</SubmitButton>
      </Form>
    </Formik>
  );
}

export default ContactForm;