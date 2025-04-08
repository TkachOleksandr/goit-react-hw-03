import Contact from '../Contact/Contact';
import { List } from './ContactList.styled';

function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </List>
  );
}

export default ContactList;