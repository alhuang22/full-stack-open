import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const AnecdoteDisplay = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  let maxIndex = votes.indexOf(Math.max(...votes));

  const generateRandom = () => {
    let index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index);
  };

  const vote = () => {
    let copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <AnecdoteDisplay anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={vote} text="vote" />
      <Button handleClick={generateRandom} text="next anecdote" />
      <h2>Anecdote with the most votes</h2>
      <AnecdoteDisplay anecdote={anecdotes[maxIndex]} votes={votes[maxIndex]} />
    </div>
  );
};

export default App;
