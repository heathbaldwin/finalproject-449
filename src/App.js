import React from "react";
import "./style.css";
import { Navbar, Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return (
    <div>
  
      <header className= "App-header">
      <nav class="navbar bg-primary" data-bs-theme="dark">
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="imgs/list-ol.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Decathlon World Rankings
    </a>
  </div>
      </nav>
      </nav>
      </header>

      <div class="card" style="width: 18rem;">
  <img src="imgs/dwarner" class="card-img-top" alt="DameionWarner">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    
    
    </div>
    
  );
}
