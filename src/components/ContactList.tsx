import React from "react";
import { ContactType } from "../interfaces/contact";
import styles from "./ContactList.module.scss";

export interface IContactListProps {
  className?: string;
  contacts: ContactType[];
}

const ContactList: React.FC<IContactListProps> = ({ className = "", contacts }) => {
  return (
    <div className={styles.contactList + " " + className}>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              // TODO: use better key
              <tr key={JSON.stringify(contact)}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
