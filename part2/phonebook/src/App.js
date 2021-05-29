import React, { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ value, onChange }) => {
  return (
    <div>
      filter shown with <input value={value} onChange={onChange} />
    </div>
  );
};

const PersonForm = ({
  handleSubmit,
  name,
  handleNameChange,
  number,
  handleNumberChange,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={name} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

const Persons = ({ persons, filter }) => {
  return (
    <div>
      {persons
        .filter(
          (person) =>
            person.name.toLowerCase().indexOf(filter.toLowerCase()) === 0
        )
        .map((person) => (
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        ))}
    </div>
  );
};
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const hook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleNewEntry = (event) => {
    event.preventDefault();
    const person = {
      name: newName,
      number: newNumber,
    };
    let containsName = false;
    persons.forEach((person) => {
      if (person.name === newName) containsName = true;
    });
    if (!containsName) {
      setPersons(persons.concat(person));
      setNewName("");
      setNewNumber("");
    } else {
      const text = `${newName} is already added to phonebook`;
      alert(text);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilter} />
      <h3>add a new</h3>
      <PersonForm
        handleSubmit={handleNewEntry}
        name={newName}
        handleNameChange={handleNameChange}
        number={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;
