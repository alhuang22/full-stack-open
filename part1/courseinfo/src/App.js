import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  const [p1, p2, p3] = props.parts;
  return (
    <>
      <Part part={p1.name} exercises={p1.exercises} />
      <Part part={p2.name} exercises={p2.exercises} />
      <Part part={p3.name} exercises={p3.exercises} />
    </>
  );
};

const Total = (props) => {
  let total = props.parts.reduce((a, b) => a + b.exercises, 0);
  return <p>{total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
