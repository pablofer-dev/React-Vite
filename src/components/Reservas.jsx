import * as React from "react";
import axios from "axios";

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


export default function Reservas() {
    const [usuario, setUsuario] = React.useState([]);
    const dispatch = useDispatch();
    const usuarioNR = useSelector(state => state.userNR);

    React.useEffect(() => {
        axios.post("http://127.0.0.1:8000/api/auth/reservas")
            .then((res) => {
                res.data.forEach(element => {
                    if (element.users_id == null) {
                        dispatch({
                            type: "userNR/setUserNR",
                            payload: {
                                nombre: element.user.nombre,
                                apellido: element.user.apellido,
                                email: element.user.email,
                                telefono: element.user.telefono,
                                dni: element.user.dni,
                                tarjeta_creadito_id: element.tarjeta_creadito_id,
                                fecha_fk: element.fecha_fk,
                                hora: element.hora,
                            }
                        })
                    }
                    else {
                        setUsuario(res.data);
                    }
                });

            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className="">
            <div className="row gap-3 ">
                {usuario.length > 0 ?
                    usuario.map((usuario, index) => (
                        <div key={index} className="card col-5 mx-auto">
                            <h5 className="card-header">Fea</h5>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    ))
                    : <p>No hay reservas</p>}
            </div>
            <hr />
            <div className="row gap-3 ">
                {usuarioNR.length > 0 ?
                    usuarioNR.map((usuarioNR, index) => (
                        <div key={index} className="card col-5 mx-auto">
                            <h5 className="card-header">{usuarioNR.user.nombre + ' ' + (usuarioNR.user.apellido) + ' | ' + usuarioNR.user.email}</h5>
                            <div className="card-body">
                                <p className="card-text"><b>Teléfono: </b>{usuarioNR.user.telefono}</p>
                                <p className="card-text"><b>Dni:</b> {usuarioNR.user.dni}</p>
                                <p className="card-text"><b>Tarjeta:</b> {usuarioNR.tarjeta_creadito_id}</p>
                                <p className="card-text"><b>Fecha:</b> {usuarioNR.fecha_fk}</p>
                                <p className="card-text"><b>Hora:</b> {usuarioNR.hora}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    ))
                    : <p>No hay reservas</p>
                }
            </div>
        </div>

    );
}