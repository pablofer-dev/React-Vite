import React from 'react'
import '../Register.css'
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="form" id='form1'>
        <div className="text-center">
          <button className='mx-2 form__input2 text-center' onClick={() => {
            document.getElementById('form1').style.display = 'none';
            document.getElementById('form2').style.display = 'block';
          }}>Logearse</button>
          <button className='mx-2 form__input2 text-center' >Registrarse</button>
        </div>

        <div className="form-body">
          <div className="username">
            <label className="form__label">Nombre </label>
            <input className="form__input" type="text" id="nombre" placeholder="Nombre" />
          </div>
          <div className="lastname">
            <label className="form__label" for="apellido">Apellido </label>
            <input type="text" name="" id="apellido" className="form__input" placeholder="Apellido" />
          </div>
          <div className="telefono">
            <label className="form__label" for="telefono">Télefono </label>
            <input type="telefono" id="telefono" className="form__input" placeholder="Télefono" />
          </div>
          <div className="email">
            <label className="form__label" for="email">Email </label>
            <input type="email" id="email" className="form__input" placeholder="Email" />
          </div>
          <div className="password">
            <label className="form__label" for="password">Contraseña </label>
            <input className="form__input" type="password" id="password" placeholder="Contraseña" />
          </div>
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">Confirmar Contraseña </label>
            <input className="form__input" type="password" id="confirmPassword" placeholder="Confirmar Contraseña" />
          </div>
        </div>
        <div class="footer">
          <button type="submit" class="btn btn-success" onClick={() => {
            let nombre = document.getElementById("nombre").value;
            let apellido = document.getElementById("apellido").value;
            let telefono = document.getElementById("telefono").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;
            if (password === confirmPassword) {
              axios.post(`http://127.0.0.1:8000/api/auth/register?name=${nombre}&apellido=${apellido}&telefono=${telefono}&email=${email}&password=${password}`, {
                headers: {
                  'Content-Type': 'application/json',
                }
              }).then((res) => {
                axios.post(`http://127.0.0.1:8000/api/auth/login?email=${email}&password=${password}`, {
                  headers: {
                    'Content-Type': 'application/json',
                  }
                }).then((res) => {
                  const tokenRes = res.data.token;
                  let token = tokenRes.substring(tokenRes.indexOf("|") + 1);
                  let id = tokenRes.substring(0, tokenRes.indexOf("|"));
                  dispatch({
                    type: 'login/setLogin',
                    payload: {
                      id: id,
                      token: token
                    }
                  })
                  console.log("LOGEADO");
                  navigate("/mis-reservas");
                }
                )
              }
              )
            }
          }}>Registrar</button>
        </div>
      </div>

      <div className="form" id='form2'>
        <div className="text-center">
          <button className='mx-2 form__input2 text-center' >Logearse</button>
          <button className='mx-2 form__input2 text-center' onClick={() => {
            document.getElementById('form1').style.display = 'block';
            document.getElementById('form2').style.display = 'none';
          }}>Registrarse</button>
        </div>
        <div className="form-body">
          <div className="lastname">
            <label className="form__label" for="email">Email </label>
            <input type="text" name="" id="email2" className="form__input" placeholder="Email" />
          </div>
          <div className="password">
            <label className="form__label" for="password">Contraseña </label>
            <input className="form__input" type="password" id="password2" placeholder="Contraseña" />
          </div>
        </div>
        <div class="footer">
          <button type="submit" class="btn btn-success" onClick={() => {
            let email = document.getElementById("email2").value;
            let password = document.getElementById("password2").value;
            axios.post(`http://127.0.0.1:8000/api/auth/login?email=${email}&password=${password}`, {
              headers: {
                'Content-Type': 'application/json',
              }
            }).then((res) => {
              const tokenRes = res.data.token;
              let token = tokenRes.substring(tokenRes.indexOf("|") + 1);
              let id = tokenRes.substring(0, tokenRes.indexOf("|"));
              dispatch({
                type: 'login/setLogin',
                payload: {
                  id: id,
                  token: token
                }
              })
              navigate("/mis-reservas");
            }
            )

          }}>Registrar</button>
        </div>
      </div>
    </div>
  );
}