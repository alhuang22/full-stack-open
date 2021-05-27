import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewPerson = (event) => {
    event.preventDefault();
    const person = {
      name: newName,
    };
    let containsName = false;
    persons.forEach((person) => {
      if (person.name === newName) containsName = true;
    });
    if (!containsName) {
      setPersons(persons.concat(person));
      setNewName("");
    } else {
      const text = `${newName} is already added to phonebook`;
      alert(text);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
