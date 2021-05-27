import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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
      filter shown with <input value={filter} onChange={handleFilter} />
      <h2>add a new</h2>
      <form onSubmit={handleNewEntry}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
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

export default App;
