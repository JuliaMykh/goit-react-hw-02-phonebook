import React from "react";

export const ContactItem = ({ name, number, onDeleteContact, contactId}) => {

  return (
    <>
        <p>{name} : {number} </p>
        <button
        type="button"
        onClick={() => onDeleteContact(contactId)}
             
          >
              Delete
        </button>
    </>
  );
}