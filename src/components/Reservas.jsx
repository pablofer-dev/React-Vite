
import * as React from "react";
import axios from "axios";

export default function Reservas() {
    const [reservas, setReservas] = React.useState([]);
    const formData = new FormData();

    new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:8000/api/auth/reservas', {
            headers: 'X-CSRF-TOKEN',
            'X-Requested-With': 'XMLHttpRequest',
        })
            .then(response => {
                setReservas(response.data);
                console.log(response.data);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
    return (
        <div className="">
            <h1>Reservas</h1>
            {reservas.length > 0 ?

                reservas.map((reserva, index) => (
                    <div key={index} className="card">
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
    );
}