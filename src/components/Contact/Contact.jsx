import { Item, Text, DeleteButton } from './Contact.styled';

function Contact({ name, number, onDelete }) {
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </Item>
  );
}

export default Contact;