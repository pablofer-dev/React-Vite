
import axios from "axios";
import * as React from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";

export default function MisReservas() {
  function deleteReserva(params) {
    /* Axios dd crsf token  */
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.delete(`http://localhost/api/auth/deletereservas?id=${params}`)
      .then((res) => {
        console.log(res);
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
  if (id) {
    useEffect(() => {
      axios.post(`http://localhost/api/auth/misreservas?id=${id}`)
        .then((res) => {
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
        <div className="row gap-3 ">
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
        </div>

      </div>
    );
  }
  else {
    console.log("No estas logeado");
    return (
      <div className="">
        <h1>No estas logeado</h1>
      </div>
    );
  }

}