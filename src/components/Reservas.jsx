import * as React from "react";
import axios from "axios";

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


export default function Reservas() {
    const [usuario, setUsuario] = React.useState([]);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userNR);
    const { user2 } = useSelector(state => state.user2);

    React.useEffect(() => {
        axios.post("http://127.0.0.1:8000/api/auth/reservas")
            .then((res) => {
                let dispatchArray = new Array();
                let dispatchArray2 = new Array();
                res.data.forEach(element => {
                    if (element.users_id == null) {
                        dispatchArray.push({
                            nombre: element.user.nombre,
                            apellido: element.user.apellido,
                            email: element.user.email,
                            telefono: element.user.telefono,
                            dni: element.user.dni,
                            tarjeta_creadito_id: element.tarjeta_creadito_id,
                            fecha_fk: element.fecha_fk,
                            hora: element.hora,
                        }
                        )
                    } else {
                        dispatchArray2.push({
                            nombre: element.user.name,
                            apellido: element.user.apellido,
                            email: element.user.email,
                            telefono: element.user.telefono,
                            dni: element.user.dni,
                            tarjeta_creadito_id: element.tarjeta_creadito_id,
                            fecha_fk: element.fecha_fk,
                            hora: element.hora,
                        }
                        )
                    }
                });

                dispatch({
                    type: "userNR/setUserNR",
                    payload: { dispatchArray }
                })
                dispatch({
                    type: "user2/setUser",
                    payload: { dispatchArray2 }
                });
                console.log(user);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className="">
            <h3 className="text-center">Reservas de usuarios registrados</h3>
            <div className="row gap-3 ">
                {user2.dispatchArray2?.length > 0 ?
                    user2.dispatchArray2?.map((user2, index) => (
                        <div key={index} className="card col-5 mx-auto">
                            <h5 className="card-header">{user2.nombre + ' ' + (user2.apellido) + ' | ' + user2.email}</h5>
                            <div className="card-body">
                                <p className="card-text"><b>Teléfono: </b>{user2.telefono}</p>
                                <p className="card-text"><b>Dni:</b> {user2.dni}</p>
                                <p className="card-text"><b>Tarjeta:</b> {user2.tarjeta_creadito_id}</p>
                                <p className="card-text"><b>Fecha:</b> {user2.fecha_fk}</p>
                                <p className="card-text"><b>Hora:</b> {user2.hora}</p>
                            </div>
                        </div>
                    ))
                    : <h4 className="text-center">No hay reservas</h4>}
                <h3></h3>
            </div>
            <hr />
            <div className="row gap-3 ">
                <h3 className="text-center">Reservas de usuarios no registrados</h3>
                {user.dispatchArray?.length > 0 ?
                    user.dispatchArray?.map((user, index) => (
                        <div key={index} className="card col-5 mx-auto">
                            <h5 className="card-header">{user.nombre + ' ' + (user.apellido) + ' | ' + user.email}</h5>
                            <div className="card-body">
                                <p className="card-text"><b>Teléfono: </b>{user.telefono}</p>
                                <p className="card-text"><b>Dni:</b> {user.dni}</p>
                                <p className="card-text"><b>Tarjeta:</b> {user.tarjeta_creadito_id}</p>
                                <p className="card-text"><b>Fecha:</b> {user.fecha_fk}</p>
                                <p className="card-text"><b>Hora:</b> {user.hora}</p>
                            </div>
                        </div>
                    ))
                    : <h4 className="text-center">No hay reservas</h4>}
            </div>
        </div>

    );
}