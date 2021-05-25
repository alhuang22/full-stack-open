import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h3>{course.name}</h3>;
};

const Total = ({ course }) => {
  /*
      (a, b) where a is the accumulator and b is the current value in the array
      the 0 passed in at the end indicates the initial value of the accumulator
    */
  let sum = course.parts.reduce((a, b) => a + b.exercises, 0);
  return <p>total of {sum} exercises </p>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total course={course} />
    </div>
  );
};

export default Course;
