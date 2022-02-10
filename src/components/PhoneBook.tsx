import React, { useState } from "react";
import { ContactType } from "../interfaces/contact";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import styles from "./PhoneBook.module.scss";

export interface IPhoneBookProps {
  className?: string;
}

const PhoneBook: React.FC<IPhoneBookProps> = ({ className = "" }) => {
  const [contacts, setContacts] = useState<ContactType[]>([]);

  console.log(contacts);

  const handleAdd = (contact: ContactType) => {
    console.log("handleAdd", contact);
    setContacts((prev) => [...prev, contact]);
  };

  return (
    <div className={styles.phoneBook + " " + className}>
      <ContactList contacts={contacts} setContacts={setContacts} />

      <div>
        <h5>Add new contact</h5>
        <AddContact onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default PhoneBook;
