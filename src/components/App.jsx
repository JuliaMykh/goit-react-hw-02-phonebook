import React, { Component } from "react";
import { nanoid } from "nanoid";

import { ContactForm } from './ContactForm/ContackForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export class App extends Component  {
  state = {
  contacts: [],
    name: '',
   filter: '',
  }
  
  // додавання контакту
  addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    this.state.contacts.find(contact => contact.name === name)
      ? alert(
          `${name} is already in the contact list`                
        )
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
      }));
  };

// функція зміни стану фільтру
  changeFilter = e => {
    // console.log(e.currentTarget.value);
    this.setState({ filter: e.currentTarget.value });
  };

  // фільтрує і повертає результат
  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
   const { filter } = this.state;
    const addContact = this.addContact;
    const changeFilter = this.changeFilter;
    const filtredContacts = this.filtredContacts();
    

    return (
  <div>
      <h1>Phonebook</h1>
       <ContactForm  onSubmit={addContact}/>

      <h2>Contacts</h2>
        <Filter filter={filter} changeFilter={changeFilter} />
        <ContactList
            contacts={filtredContacts}
          />
    </div>
)
  };
}; 

  