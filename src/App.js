import { Switch, Route } from "react-router-dom";
/* views */
import SelectDog from "./views/SelectDog/SelectDog";
import DogImages from "./views/DogImages/DogImages";
import PageNotFound from "./views/PageNotFound/PageNotFound";
/* styles */
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/images/:breed">
          <DogImages />
        </Route>
        <Route exact path="/">
          <SelectDog />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
