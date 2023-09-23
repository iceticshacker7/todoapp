import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
// import styled from "styled-components";
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color : ${props => (props.invalid ? '' : 'red')}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid  ${props => (props.invalid ? '#ccc' : 'red')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background: ${props => (props.invalid ? 'transparent' : 'salmon')};
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

// `;
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  console.log(isValid);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl invalid={isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          // style={{
          //   borderColor: !isValid ? "red" : "black",
          //   background: !isValid ? "salmon" : "transparent",
          // }}
          onChange={goalInputChangeHandler}
        />
      </FormControl> */}
      <div
        className={`${styles["form-control"]} ${
          !isValid ? styles.invalid : ""
        }`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          // style={{
          //   borderColor: !isValid ? "red" : "black",
          //   background: !isValid ? "salmon" : "transparent",
          // }}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
