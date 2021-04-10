import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Pet from "./Pet/Pet.jsx";
import PetList from "./PetList/PetList.jsx";
import Form from "./Form/Form.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Error from "./Error/Error.jsx";

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo0662291.mockable.io/pets");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Rescue Project: Humane</Link>
            </li>
            <li>
              <Link to="/petlist">Animals</Link>
            </li>
            <li>
              <Link to="/adoptionform">Apply For Adoption</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/petlist" exact><PetList pets={fetchedData} /></Route>
        <Route
          exact
          path={`/petlist/:category`}
          render={({ match }) => {
            return fetchedData ? <PetList
              pets={fetchedData[match.params.category]}
            /> : null
          }}
        />
        <Route
          exact
          path={`/petlist/:id`}
          render={({ match }) => {
            return fetchedData ? <Pet
              pet={fetchedData[match.params.id]}
            /> : null
          }}
        />
        <Route
          path="/adoptionform"
          exact
          render={() => <Form/>}
        />
        <Route
          path="/aboutus"
          exact
          render={() => <AboutUs/>}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
