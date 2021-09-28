import './App.css';
import {Header} from "./MyComponents/Header";
import {Properties} from "./MyComponents/Properties";
import { AddProperty } from './MyComponents/AddProperty';
import {Footer} from "./MyComponents/Footer";
import {Home} from "./MyComponents/Home";
import {Tenants} from "./MyComponents/Tenants";
import { AddTenant } from './MyComponents/AddTenant';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTenant;
  if (localStorage.getItem("Tenants") === null) {
    initTenant = [];
  }
  else {
    initTenant = JSON.parse(localStorage.getItem("Tenants"));
  }
  const onDelete = (tenant, property) => {
    console.log("I am ondelete of tenant", tenant, property);
    // Deleting this way in react does not work
    //let index = todos.index.indexOf(todo);
    //todos.splice(index, 1);

     setTenants(tenants.filter((e) => {
       return e !== tenant;
     }));
    localStorage.setItem("tenants", JSON.stringify(tenant));
  }

  const addTenant = (name, prpname) => {
    console.log("Adding this Property", name, prpname)
    let sno;
    if (tenants.length === 0) {
      sno = 0;
    }
    else {
      let sno = tenants[tenants.length - 1].sno + 1;
    }

    const myTenant = {
      sno: sno,
      name: name,
      prpname: prpname,
    }
    setTenants([...tenants, myTenant]);
    console.log(myTenant);

  }

  const [tenants, setTenants] = useState(initTenant);
  useEffect(() => {
    localStorage.setItem("tenants", JSON.stringify(Tenants));
  }, [tenants])



  let initProperty;
  if (localStorage.getItem("Properties") === null) {
    initProperty = [];
  }
  else {
    initProperty = JSON.parse(localStorage.getItem("properties"));
  }
  const onDeleteProperty = (property) => {
   console.log("I am ondelete of todo", property);
    // Deleting this way in react does not work
    //let index = todos.index.indexOf(todo);
    //todos.splice(index, 1);

     setProperties(properties.filter((e) => {
       return e !== property;
     }));
    localStorage.setItem("properties", JSON.stringify(property));
  }

  const addProperty = (place, desc) => {
    console.log("Adding this Property", place, desc)
    let sno;
    if (properties.length === 0) {
      sno = 0;
    }
    else {
      let sno = properties[properties.length - 1].sno + 1;
    }

    const myProperty = {
      sno: sno,
      place: place,
      desc: desc,
    }
    setProperties([...properties, myProperty]);
    console.log(myProperty);

  }

  const [properties, setProperties] = useState(initProperty);
  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(Properties));
  }, [properties])
  return (
    <>
      <Router>
        <Header title="Real Estate" searchBar={false} />
        <Switch>
          <Route exact path="/property" render={() => {
            return(
            <>
              <AddProperty addProperty={addProperty} />
              <Properties properties={properties} onDelete={onDeleteProperty} />
            </>)
          }} >
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/tenant" render={() => {
            return(
            <>
              <AddTenant addTenant={addTenant} />
              <Tenants tenants={tenants} onDelete={onDelete} />
            </>)
          }}>
          </Route>
        </Switch>

        <Footer />

      </Router>
    </>
  );
}


export default App;
