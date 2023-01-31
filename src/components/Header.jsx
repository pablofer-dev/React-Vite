
import * as React from "react";
import { List } from 'react-bootstrap-icons';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Login from "./Login";
import MisReservas from "./MisReservas";
import Profile from "./Profile";
import Reservas from "./Reservas";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ><List />
            </button>

            <div class="collapse navbar-collapse" id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink to="/reservas" className="nav-link" aria-current="page">Reservas</NavLink>
                </li>

                <li class="nav-item">
                  <NavLink to="/mis-reservas" className="nav-link" aria-current="page">Mis Reservas</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/profile" className="nav-link" aria-current="page">Profile</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/login" className="nav-link" aria-current="page">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mis-reservas" element={<MisReservas />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

  );
}