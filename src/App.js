import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Card } from 'reactstrap';
import './app.css';

export default function App() {
  return (
    <div>
      <Navbar>
        <header className="App-header">
          
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand" href="">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/014/532/400/small_2x/letter-d-gradient-logo-design-free-vector.jpg"
                    alt="Logo Image"
                    width="75"
                    height="75"
                    class="d-inline-block align-text-top"
                  />
                  DecaRanks
                </a>
              </div>
          </nav>
        </header>
      </Navbar>
      <Card>
        <div class="card">
          <img
            src="https://i.cbc.ca/1.6130478.1628186546!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/1332494986.jpg"
            class="card-img-top"
            alt="Card Image"
          />
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
