
import axios from "axios";
import * as React from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { useState } from "react";
import { SpinnerCircularFixed	 } from 'spinners-react';


export default function MisReservas() {
  const [spinner, setSpinner] = useState(true);
  function deleteReserva(params) {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.delete(`https://daw202.medacarena.es/api/auth/deletereservas?id=${params}`)
      .then((res) => {
        dispatch({
          type: "misreservas/setReserva",
          payload: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const { id } = useSelector(state => state.login);
  const { reservas } = useSelector(state => state.reservas);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.post(`https://daw202.medacarena.es/api/auth/misreservas?id=${id}`)
      .then((res) => {
        setSpinner(false);
        console.log(res.data);
        dispatch({
          type: "misreservas/setReserva",
          payload: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  return (
    <div className="">

      <h1 className="text-center">Mis reservas</h1>
      {spinner ? <SpinnerCircularFixed	size={"10%"} style={
        {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }
      } /> : <div className="row gap-3 ">
        <SpinnerCircularFixed	 enabled={false} />
        {reservas?.length > 0 ?
          reservas?.map((reserva, index) => (
            <div key={index} className="card col-5 mx-auto">

              <h5 className="card-header">{reservas[index].user.name + ' ' + (reservas[index].user.apellido) + ' | ' + reservas[index].user.email}</h5>
              <div className="card-body">
                <p className="card-text"><b>Teléfono: </b>{reservas[index].user.telefono}</p>
                <p className="card-text"><b>Tarjeta:</b> {reservas[index].tarjeta_creadito_id}</p>
                <p className="card-text"><b>Fecha:</b> {reservas[index].fecha_fk}</p>
                <p className="card-text"><b>Hora:</b> {reservas[index].hora}</p>
                <button className="btn btn-danger" id={reservas[index].id} onClick={() => {
                  deleteReserva(reservas[index].id)
                }}>Eliminar reserva</button>
              </div>
            </div>
          ))
          : <h4 className="text-center">No hay reservas</h4>}
        <h3></h3>
      </div>}
    </div>
  );
}