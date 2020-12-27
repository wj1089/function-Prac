import React, { useEffect, useRef } from "react";
import Input from "./Input"


const Useref = () => {
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const ageRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    firstRef.current.focus();
  }, []);

  function firstKeyDown(e) {
    if (e.key === "Enter") {
      lastRef.current.focus();
    }
  }

  function lastKeyDown(e) {
    if (e.key === "Enter") {
      ageRef.current.focus();
    }
  }
  function ageKeyDown(e) {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  }

  function submitKeyDown() {
    alert("yey happy to see you Park!!");
  }

  return (
    <>
      <div>
        <h1>hello react</h1>

        <Input
          ref={firstRef}
          type="text"
          onKeyDown={firstKeyDown}
          placeholder="FirstName"
        />
        <br />

        <Input
          ref={lastRef}
          type="text"
          onKeyDown={lastKeyDown}
          placeholder="LastName"
        />
        <br />

        <Input
          ref={ageRef}
          type="text"
          onKeyDown={ageKeyDown}
          placeholder="Age"
        />
        <br />

        <button ref={submitRef} onKeyDown={submitKeyDown}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Useref;
