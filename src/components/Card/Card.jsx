import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { faker } from '@faker-js/faker';

import Modal from 'components/Modal';
import Section from 'components/Section';

import {
  EditButton,
  DeleteButton,
  ButtonWrapper,
  CardWrapper,
  Image,
  ImageWrapper,
  Meta,
  Name,
  TelephoneLink,
  EmailLink,
} from './Card.styled';
import { toast } from 'react-hot-toast';
import ContactDataForm from 'components/Forms/ContactDataForm/ContactDataForm';

// ##################################################

export default function Card() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const dispatch = useDispatch();

  const { items, currentId } = useSelector(selectContacts);
  const {
    name,
    number,
    // email, image
  } = items.find(item => item.id === currentId);

  const email = faker.internet.exampleEmail();
  const image = faker.image.avatar();
  // const image = faker.image.people(640, 640, true);
  // faker.image.people(width, height, randomize?: boolean = false)

  const handleDelete = id => {
    dispatch(deleteContact(id))
      .then(toast.success('Contact has been deleted'))
      .catch(er => toast.error(er.message));
  };

  const values = { name, number, email, id: currentId };

  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={image} alt={name} width={640} />
      </ImageWrapper>

      <Meta>
        <Name>{name}</Name>

        <TelephoneLink href={`tel:+${number}`}>{number}</TelephoneLink>

        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </Meta>

      <ButtonWrapper>
        <EditButton type="button" onClick={toggleModal}>
          Edit
        </EditButton>

        <DeleteButton type="button" onClick={() => handleDelete(currentId)}>
          Delete
        </DeleteButton>
        {/* 
        <DeleteIconButton
          onClick={() => handleDelete(currentId)}
          aria-label="Delete contact"
        >
          <DeleteIcon />
        </DeleteIconButton> */}
      </ButtonWrapper>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Section title="Edit Contact">
            <ContactDataForm
              formType={'edit'}
              editValues={values}
              toggleModal={toggleModal}
            />
          </Section>
        </Modal>
      )}
    </CardWrapper>
  );
}
