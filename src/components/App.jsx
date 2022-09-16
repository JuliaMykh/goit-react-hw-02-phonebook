import React, { Component } from "react";
import { ContactForm } from './ContactForm/ContackForm';


export class App extends Component  {
  state = {
  contacts: [],
  name: ''
}

  render() {
    const addContact = this.addContact;


    return (
  <div>
      <h1>Phonebook</h1>
       <ContactForm  onSubmit={addContact}/>

      <h2>Contacts</h2>
        {/* <Filter />
        <ContactList /> */}
    </div>

)
  };
};

  