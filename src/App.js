import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Card } from 'reactstrap';

export default function App() {
  return (
    <div>
      <Navbar>
        <header className="App-header">
          <nav class="navbar bg-primary" data-bs-theme="dark">
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <img
                    src="imgs/list-ol.svg"
                    alt="Logo"
                    width="30"
                    height="24"
                    class="d-inline-block align-text-top"
                  />
                  Decathlon World Rankings
                </a>
              </div>
            </nav>
          </nav>
        </header>
      </Navbar>
      <Card>
        <div class="card" styles="width: 18rem;">
          <img src="imgs/dwarner" class="card-img-top" alt="DameionWarner" />
          <div class="card-body">
            <h5 class="card-title">Decathlon fans from across the world...</h5>
            <p class="card-text">
              Welcome to the official world rankings page for the Decathlon
              where we will be showing a list of the top decathletes from across
              the globe throughout the 2023 season!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
