
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios'
import { createRoot } from 'react-dom/client';
import Form from './Form';
import esLocale from '@fullcalendar/core/locales/es';

export default class Reservar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        if (event.target.matches("button")) {
            let selectedId = event.target.id;
            document.getElementById('horasDisponiblesText').style.display = 'none';
            document.getElementById('reservar').style.display = 'block';
            let reserva = document.getElementById('reserva');
            createRoot(document.getElementById('reserva')).render(<Form id={selectedId} />);
        }
    }

    render() {
        return (
            <div className="">
                <FullCalendar locale={esLocale}
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events='https://daw202.medacarena.es/api/auth/eventos'
                    eventClick={function (info) {
                        axios.get(`https://daw202.medacarena.es/api/auth/horasreservas?id=${info.event['id']}`).then((res) => {
                            document.getElementById('horasDisponiblesText').style.display = 'block';
                            document.getElementById('reservar').style.display = 'none';
                            let horasDiv = document.getElementById('horas');
                            horasDiv.innerHTML = '';
                            res.data.forEach(element => {
                                let hora = element.hora
                                hora = hora.substring(0, hora.length - 3);
                                horasDiv.insertAdjacentHTML('beforeend',
                                    `<button class="btn btn-primary botones2 text-white fs-2" id=${info.event['id']} >${hora}</button>`
                                );
                            });
                            window.scrollTo(0, document.body.scrollHeight);
                        });
                    }}

                />
                <div id="horasDisponiblesText">
                    <h1 className="text-center">Horas disponibles</h1>
                    <div id="horas" className="d-flex gap-3 justify-content-center" onClick={this.handleClick}>

                    </div>
                </div>
                <div id="reservar" className='container'>
                    <div id="reserva" className="d-flex gap-3 justify-content-center">

                    </div>
                </div>
            </div>

        )
    }
}