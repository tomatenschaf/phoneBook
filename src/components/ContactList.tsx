import React from "react";
import { ContactType } from "../interfaces/contact";
import styles from "./ContactList.module.scss";

export interface IContactListProps {
  className?: string;
  contacts: ContactType[];
  setContacts: Function; // TODO
}

const ContactList: React.FC<IContactListProps> = ({ className = "", contacts, setContacts }) => {
  const handleDelete = (idx: number) => {
    const newContacts = contacts.filter(function (item, itemIdx) {
      return idx != itemIdx;
    });
    setContacts((prev: ContactType) => newContacts);
  };

  return (
    <div className={styles.contactList + " " + className}>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact, idx) => {
            return (
              // TODO: use better key
              <tr key={idx + JSON.stringify(contact)}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phoneNumber}</td>
                <td>
                  <a
                    className={styles.delete}
                    onClick={() => {
                      handleDelete(idx);
                    }}
                  >
                    x
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
