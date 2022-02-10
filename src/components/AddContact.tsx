import React, { FormEvent, FormEventHandler, useState } from "react";
import { json } from "stream/consumers";
import { ContactType } from "../interfaces/contact";
import styles from "./AddContact.module.scss";
import Button from "./ui/Button";
import TextField from "./ui/TextField";

export interface IAddContactProps {
  className?: string;
  onAdd: (contact: ContactType) => void;
}

const initialContact = { firstName: "", lastName: "", phoneNumber: "" };

const AddContact: React.FC<IAddContactProps> = ({ className = "", onAdd }) => {
  const [contact, setContact] = useState<ContactType>(initialContact);

  const handleChange = (name: keyof ContactType, value: string) => {
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onAdd(contact);
    setContact(initialContact);
  };

  return (
    <div className={styles.addContact + " " + className}>
      <form onSubmit={handleSubmit}>
        <TextField name="firstName" value={contact.firstName} label="First name" onChange={handleChange} />
        <TextField name="lastName" value={contact.lastName} label="last name" onChange={handleChange} />
        <TextField name="phoneNumber" value={contact.phoneNumber} label="Phone number" onChange={handleChange} />
        <Button value="add" type="submit" />
      </form>
    </div>
  );
};

export default AddContact;
