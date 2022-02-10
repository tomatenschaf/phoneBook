import React, { FormEvent, FormEventHandler, useState } from "react";
import { json } from "stream/consumers";
import { ContactType } from "../interfaces/contact";
import styles from "./AddContact.module.scss";
import Error from "./Error";
import Button from "./ui/Button";
import TextField from "./ui/TextField";

export interface IAddContactProps {
  className?: string;
  onAdd: (contact: ContactType) => void;
}

const initialContact = { firstName: "", lastName: "", phoneNumber: "" };
const initialError = { text: "" };

const AddContact: React.FC<IAddContactProps> = ({ className = "", onAdd }) => {
  const [contact, setContact] = useState<ContactType>(initialContact);
  const [error, setError] = useState(initialError);

  const handleChange = (name: keyof ContactType, value: string) => {
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (contact.phoneNumber && (contact.firstName || contact.lastName)) {
      onAdd(contact);
      setContact(initialContact);
      setError(initialError);
    } else {
      setError({ text: "Each contact should habe a phone number and a first or last name" });
    }
  };

  return (
    <div className={styles.addContact + " " + className}>
      <form onSubmit={handleSubmit}>
        <TextField name="firstName" value={contact.firstName} label="First name" onChange={handleChange} />
        <TextField name="lastName" value={contact.lastName} label="Last name" onChange={handleChange} />
        <TextField name="phoneNumber" value={contact.phoneNumber} label="Phone number" onChange={handleChange} />
        <Button value="add" type="submit" />
      </form>
      {error.text && <Error error={error} />}
    </div>
  );
};

export default AddContact;
