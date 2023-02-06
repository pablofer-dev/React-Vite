import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2'

const Form = (props) => {
  return (
    <div>
      <h1 className="text-center">Formulario Reserva</h1>
      <div className="row mb-4">
        <div className="col">
          <input type="text" className="form-control" placeholder="Nombre" minLength='3' maxLength='23' id='nombre' />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Apellido" minLength='3' maxLength='23' id='apellido' />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <input type="email" className="form-control" placeholder="Email" id='email' />
        </div>
        <div className="col">
          <input type="number" className="form-control" placeholder="Teléfono" id='telefono' />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <input type="text" className="form-control" placeholder="País" id='pais' />
        </div>
        <div className="col">
          <input type="date" className="form-control" placeholder="Fecha de Nacimiento" id='nacimiento' />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <input type="text" className="form-control" placeholder="Tarjeta de Credito" id='credito' />
        </div>
        <div className="col">
          <input type="number" className="form-control" placeholder="Cvv" minLength='3' maxLength='3' id='cvv' />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <input type="text" className="form-control" placeholder="Menu" id='menu' />
        </div>
        <div className="col">
          <input type="number" className="form-control" placeholder="Comensales" min='1' max='4' id='comensales' />
        </div>
      </div>
      <button type="submit" className="btn btn-primary botones text-center" onClick={() => {
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let email = document.getElementById('email').value;
        let telefono = document.getElementById('telefono').value;
        let pais = document.getElementById('pais').value;
        let nacimiento = document.getElementById('nacimiento').value;
        let credito = document.getElementById('credito').value;
        let cvv = document.getElementById('cvv').value;
        let menu = document.getElementById('menu').value;
        let comensales = document.getElementById('comensales').value;
        axios.get(`https://daw202.medacarena.es/api/auth/reservar?id=${props.id}&nombre=${nombre}&apellido=${apellido}&email=${email}&telefono=${telefono}&pais=${pais}&nacimiento=${nacimiento}&credito=${credito}&cvv=${cvv}&menu=${menu}&comensales=${comensales}`).then((response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Reserva realizada con exito',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            window.location.href = '/reservas';
          }, 300);

        }

        )
      }}>Reservar</button>
    </div>
  )
}

export default Form