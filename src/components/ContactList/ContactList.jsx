import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/slices/items';


import { ContactListSection } from 'components/ContactList/ContactList.style'
import { ContactListView } from 'views/ContactListView';

export function ContactList() {
    const store = useSelector(store => store.items);
    const filterData = useSelector(store => store.filter);
    const dispatch = useDispatch();
    const [filteredArr, setFilteredArr] = useState([]);
    const [dataToDelete, setDataToDelete] = useState();

    const [showFilteredList, setShowFilteredList] = useState(false);
    const [showList, setShoList] = useState(false);

    const onDeleteHeandler = ({ target }) => {
        setDataToDelete(target.id);
    };


    useEffect(() => {
        if (filterData) {
            if (toString(filterData)) {
                setFilteredArr([
                    ...store.filter((contact => {
                        return contact.name.indexOf(filterData) > -1;
                    }))
                ])
            };
            if (parseInt(filterData)) {
                setFilteredArr([
                    ...store.filter((contact => {
                        return contact.number.indexOf(filterData) > -1;
                    }))
                ])
            };

        } else {
            setFilteredArr([]);
        }
    }, [filterData, store])


    useEffect(() => {
        if (filteredArr.length !== 0) {
            setShoList(false);
            setShowFilteredList(true);
        } else {
            setShowFilteredList(false);
            setShoList(true);
        }
    }, [filteredArr.length])


    useEffect(() => {
        if (dataToDelete) {
            dispatch(delContact(dataToDelete));
        }
    }, [dataToDelete, dispatch])


    return (
        <div>
            <ContactListSection>
                {showList && store.map((contactItem) => (
                    <ContactListView key={contactItem.id} data={contactItem} onDelete={onDeleteHeandler} />
                ))}
                {showFilteredList && filteredArr.map((contactItem) => (
                    <ContactListView key={contactItem.id} data={contactItem} onDelete={onDeleteHeandler} />
                ))}
            </ContactListSection>
        </div>
    );
};

