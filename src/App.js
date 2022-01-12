import './App.css';
import React, {Fragment} from 'react';
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";

export default function App() {
  return (
    <Fragment>
      <ServiceAdd />
      <ServiceList />
    </Fragment>
  );
}
