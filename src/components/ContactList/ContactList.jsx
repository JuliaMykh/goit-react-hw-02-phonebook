import React from "react";
// import PropTypes from 'prop-types';

import { ContactItem } from './ContactItem/ContactItem';


export const ContactList = ({ contacts, }) => {
    return (
        <ul>
            {contacts.map((name, number, id) => {
                return (
                   <ContactItem
              name={name}
              number={number}
              contactId={id}
            />
                );
            })}
        </ul>
    );
}