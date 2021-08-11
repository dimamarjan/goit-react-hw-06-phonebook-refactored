import {
    LabelContacts,
    LabelContactsText,
    InputContacts,
    AccentText
} from "components/Filter/Filter.style"
import { useDispatch } from 'react-redux';
import { filterUpdate } from 'redux/slices/filter';



export function Filter() {
    const dispatch = useDispatch();


    const onChangeHandle = ({ target }) => {
        dispatch(filterUpdate(target.value))
    };

    return (
        <div>
            <LabelContacts>
                <LabelContactsText>Find contacts by <AccentText>name</AccentText> or <AccentText>number</AccentText></LabelContactsText>
                <InputContacts
                    name="filter"
                    onChange={onChangeHandle} />
            </LabelContacts>
        </div>
    );
}
