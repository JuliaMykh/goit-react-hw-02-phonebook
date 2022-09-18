import React from "react";
import { Formik, Form, Field } from 'formik';
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

export const ContactForm = ({onSubmit}) => {
    
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        onSubmit(values);
        resetForm();
    };
    
    const loginInputId = nanoid();

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={handleSubmit}
        >
            <Form >
                <label>
                    Name
                    <Field
                        type="text"
                        name="name"
                        id={loginInputId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    Number
                    <Field
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit" >Add Contact</button>
            </Form>
        </Formik>
        
    );
};

ContactForm.prototype = {
    handleSubmit: PropTypes.func.isRequired,
}
