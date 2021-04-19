import React, { useState, useContext, useEffect } from "react";
//import styled from "styled-components";
import { ContextState } from "../globals/context";

export default function FormPerson() {
  const [person, dispatch] = useContext(ContextState);

  const [state, setState] = useState({
    id: null,
    name: String,
    age: Number
  });

  const addPerson = () => {
    const { name, age } = state;
    if (name === "") {
      alert("as");
      return;
    }
    dispatch({
      type: "ADD_PERSON",
      data: { id: person.length + 1, name, age }
    });
    setState({
      name: String,
      age: Number
    });
  };

  const deletePerson = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      data: { id }
    });
  };
  const editPerson = () => {
    const { name, age } = state;
    dispatch({
      type: "EDIT_PERSON",
      data: { id: state.id, name, age }
    });
    setState({
      name: String,
      age: Number
    });
  };
  const startEdit = (id) => {
    setState({ ...person.filter((person) => person.id === id)[0], id });
  };

  function handleChange({ target: { name, value } }) {
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div>
     
        <div>
          <input
            placeholder="name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="age"
            name="age"
            value={state.age}
            onChange={handleChange}
          />
        </div>
        <button onClick={state.id ? editPerson : addPerson}>
          {" "}
          {state.id ? "Save" : "Add"}{" "}
        </button>
      
      <table>
        <tr>
          <th>ID</th>
          <th> name </th>
          <th> age </th>
          <th> </th>
          <th> </th>
        </tr>
        {person.length > 0 ? (
          person.map((onePerson) => {
            return (
              <tr>
                <td> {onePerson.id} </td>
                <td> {onePerson.name} </td>
                <td> {onePerson.age} </td>
                <td>
                  {" "}
                  <button onClick={() => startEdit(onePerson.id)}>
                    {" "}
                    Edit{" "}
                  </button>{" "}
                </td>
                <td>
                  <button onClick={() => deletePerson(onePerson.id)}>
                    {" "}
                    Delete{" "}
                  </button>{" "}
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
        )}
      </table>
      </div>
  );
}


