import React from "react";
/* external modules */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
/* components */
import SelectDogForm from "../../components/SelectDogForm/SelectDogForm";
/* styles */
import "./SelectDog.css";

function SelectDog() {
  return (
    <div className="container-home">
      <FontAwesomeIcon icon={faPaw} size="6x" />;
      <h1>Choose your favourite Dog Breed!</h1>
      <SelectDogForm />
    </div>
  );
}

export default SelectDog;
