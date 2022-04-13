import React from 'react';
// import { AddedContacts } from './Contacts';
import { NameField } from './Form';
// import { nanoid } from 'nanoid';

export class PhoneBook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleClick = (values, { resetForm }) => {
    console.log(values);
    console.log(this.state.contacts);
    resetForm();
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.push(values),
      };
    });
    // this.state.contacts.push(values);
  };

  ContactList = props => {
    console.log('Yes');
    const contacts = props.contacts;
    const List = contacts.map(contact => (
      <li key={contact.id}>{contact.name}</li>
    ));
    return (
      <div>
        <h2>Contacts</h2>
        {contacts.length > 0 && <ul>{List}</ul>}
      </div>
    );
  };

  render() {
    return (
      <div>
        <NameField onSubmit={this.handleClick} />
        <this.ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

// const contacts = [
//   {
//     name: 'Hanna',
//     id: nanoid()},
//   {
//     name: 'Taras',
//     id: nanoid()
//   },
// ];

// export const PhoneBook = () => {

//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     console.log(contacts);
//     resetForm();
//     contacts.push(values);
//   };

//   const ContactList = (props) => {
//     console.log("Yes");
//     const contacts = props.contacts;
//     const List = contacts.map(contact => <li key={contact.id}>
//       {contact.name}
//     </li>);
//     return (
//       <ul>{List}</ul>
//     )
// }

//   return (
//     <div>
//       <FormMarkup onSubmit={handleSubmit}/>
//       <ContactList contacts={contacts}/>
//     </div>
//     );
// }