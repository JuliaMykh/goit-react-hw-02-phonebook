import React from "react";

export const ContactItem = ({ name, number, }) => {
  return (
    <>
        <p>{name} : {number} </p>
        <button
              type="button"
             
          >
              Delete
        </button>
     
    </>
  );
}