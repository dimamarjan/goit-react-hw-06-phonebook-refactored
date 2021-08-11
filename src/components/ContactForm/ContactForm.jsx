import { useState, useEffect } from 'react';
import {
    FormPhoneBook,
    LabelForm,
    LabelText,
    InputForm,
    SubmitButton
} from 'components/ContactForm/ContactForm.style'
import { useDispatch, useSelector} from 'react-redux';
import { addContact } from 'redux/slices/items';
import { nanoid } from 'nanoid'




export function ContactForm() {
    const dispatch = useDispatch();
    const contactsArr = useSelector((store) => store.items)
    const [newContactsArr, setNewContactsArr] = useState();


    const contactForm = (nameContact, numberContact, {target} ) => {
        const contactItem = {
            id: nanoid(),
            name: nameContact.toLowerCase(),
            number: numberContact
        };
        target.elements.name.value = "";
        target.elements.number.value = "";
        return contactItem;
    }

    
    const onSubmitHandle = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const number = e.target.elements.number.value;
        if (contactsArr.length !== 0) {
            const namesArr = contactsArr.map(i => i.name);
            const numberArr = contactsArr.map(i => i.number);
            if (namesArr.includes(name.toLowerCase()) || numberArr.includes(number)) {
                e.target.elements.name.value = "";
                e.target.elements.number.value = "";
                return;
            } else {
                const newContact = contactForm(name, number, e)
                setNewContactsArr(newContact);
            };
        } else {
            const newContact = contactForm(name, number, e)
            setNewContactsArr(newContact);
        };
    };

    useEffect(() => {
        if (newContactsArr) {
            dispatch(addContact(newContactsArr));
        }
    },[dispatch, newContactsArr])

    return (
        <div>
            <FormPhoneBook onSubmit={onSubmitHandle}>
                <LabelForm>
                    <LabelText>Name</LabelText>
                    <InputForm
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required>
                    </InputForm>
                </LabelForm>
                <LabelForm>
                    <LabelText>Number</LabelText>
                    <InputForm
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required>
                    </InputForm>
                </LabelForm>
                <SubmitButton>Add contact</SubmitButton>
            </FormPhoneBook>
        </div>
    );
};
