
import * as React from "react";
import { List } from 'react-bootstrap-icons';
import { BrowserRouter, Routes, Route, NavLink, Form } from "react-router-dom";
import Login from "./Login";
import MisReservas from "./MisReservas";
import Reservas from "./Reservas";
import Reservar from "./Reservar";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
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
                  <NavLink to="/reservar" className="nav-link botonReservar" aria-current="page">Reservar</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/reservas" className="nav-link" aria-current="page">Reservas</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/mis-reservas" className="nav-link" aria-current="page">Mis Reservas</NavLink>
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
        <Route path="/reservar" element={<Reservar />} />

      </Routes>
    </BrowserRouter>

  );
}