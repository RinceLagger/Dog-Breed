import React from "react";
import { useHistory } from "react-router-dom";
/* components */
import Select from "../Select/Select";
import Suspense from "../Suspense/Suspense";
/* service */
import { getAllDogs } from "../../services/infoDog.service";
/* hooks */
import { useDogs } from "../../context/DogContext";
/* styles */
import "./SelectDogForm.css";

function SelectDogForm() {
  const initialState = "select a dog breed";
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { dogs, setDogs } = useDogs();
  const [selection, setSelection] = React.useState("select a dog breed");
  const hasSelectedDog = selection !== initialState;
  const dogBreeds = getDogBreeds(dogs);
  const history = useHistory();

  const handleChange = ({ target }) => {
    setSelection(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (hasSelectedDog) {
      history.push(`/images/${selection}`);
    }
  };

  const getDogs = React.useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { message: dogs }
      } = await getAllDogs();
      setDogs(dogs);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }, [setDogs]);

  React.useEffect(() => {
    getDogs();
  }, [getDogs]);

  return (
    <Suspense
      error={error}
      loading={loading}
      errorFallback={<p>An error ocurred, refresh the page</p>}
      loadingFallback={<p>Loading data...</p>}
    >
      <form onSubmit={handleSubmit}>
        <Select
          options={formatOptions(dogBreeds)}
          label={"Pick your favorite Dog:"}
          id="dogs-select"
          onChange={handleChange}
          name="dogs-select"
        />
        <input type="submit" value="Submit" />
      </form>
    </Suspense>
  );
}

function formatOptions(dogs) {
  return dogs.map((dog) => ({ label: dog, value: dog }));
}

function getDogBreeds(dogs) {
  return Object.keys(dogs);
}

export default SelectDogForm;
