import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";
import Home from "./Home/Home.jsx";
import Pet from "./Pet/Pet.jsx";
import PetList from "./PetList/PetList.jsx";
import Form from "./Form/Form.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Error from "./Error/Error.jsx";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import style from "./App.module.css";

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://demo0662291.mockable.io/pets");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }

  }, [fetchedData]);

  return isEmpty(fetchedData) ? <div>Website is loading!</div> : (
    <>
      <Header/>
      <div className={style.bodyContainer}>
        <div>
          <Switch>
            <Route path="/" exact><Home pets={Object.values(fetchedData)} /></Route>
            <Route path="/aboutus" exact render={() => <AboutUs/>}/>
            <Route path="/adoptionform" exact><Form pets={Object.values(fetchedData)} /></Route>
            <Route path="/adoptionform/:petId" exact
              render={({ match }) => {
                return fetchedData[match.params.petId] ? <Form
                  petId={fetchedData[match.params.petId]} pets={Object.values(fetchedData)}
                /> : <Error/>
              }}
            />
            <Route
              exact
              path={`/petlist/:category`}
              render={({ match }) => {
                return fetchedData ? <PetList
                  pets={Object.values(fetchedData).filter((pet) => pet.category.match(match.params.category))}
                /> : null
              }}
            />
            <Route
              exact
              path={`/id/:id`}
              render={({ match }) => {
                return fetchedData[match.params.id] ? <Pet
                  pet={fetchedData[match.params.id]}
                /> : <Error/>
              }}
            />
            <Route path="/petlist" exact><PetList pets={Object.values(fetchedData)} /></Route>
            <Route component={Error} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
