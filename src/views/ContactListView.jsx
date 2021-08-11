import {
    ContactListItem,
    ContactItemText,
    DelContactButton
} from 'views/ContactListView.style'

export function ContactListView( {data, onDelete}) {
    const { id, name, number } = data;
    
    return (
        <ContactListItem >
            <ContactItemText>{name}: {number}</ContactItemText>
            <DelContactButton
                id={id}
                onClick={onDelete}
            >
                Delete
            </DelContactButton>
        </ContactListItem>
    )
}
