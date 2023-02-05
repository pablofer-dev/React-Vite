import React from 'react'

const Form = (props) => {
  console.log(props.id);
  return (
    <div>
      <h1 className="text-center">Formulario Reserva</h1>
      <form>
        <div className="row mb-4">
          <div className="col">
            <input type="text" className="form-control" placeholder="Nombre" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Apellido" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Teléfono" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <input type="text" className="form-control" placeholder="País" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Fecha de Nacimiento" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <input type="text" className="form-control" placeholder="Tarjeta de Credito" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Cvv" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <input type="text" className="form-control" placeholder="Menu" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Comensales" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form