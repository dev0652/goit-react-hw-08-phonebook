import { combineReducers } from 'redux';
import toast from 'react-hot-toast';
import defaultContacts from 'data/defaultContacts';

// ################################

const contactsState = {
  contacts: localStorage.load() ?? defaultContacts,
};

const contactsReducer = (state = contactsState, action) => {
  switch (action.type) {
    //
    // ############# Add contact #############

    case 'contacts/addedContact':
      const name = action.payload.name;

      if (checkIfContactExists(state.contacts, name)) {
        toast.error(`${name} is already a contact`);
        return state;
      }

      toast.success(`${name} has been added to the phonebook`);

      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    // ############# Delete contact ##########

    case 'contacts/deletedContact':
      toast.success('Contact has been deleted');

      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

// ############# Update filter ###########

const filterState = {
  filter: '',
};

const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case 'filter/updatedFilter':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

// ################################

const checkIfContactExists = (contacts, nameToCompare) =>
  contacts.find(
    ({ name }) => name.toLowerCase() === nameToCompare.toLowerCase()
  );

// ################################

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
