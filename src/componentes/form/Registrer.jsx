import React from 'react'


export default function Registrer() {
  return (

    
   <div className='Registrer-form-container'>

    <form action="/" method="post" className="fondito">
     
     <h1>Gestion de Paquetes</h1>    
   
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Nombres:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Usuario:</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Email:</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Contraseña:</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Confirma Contraseña:</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Registrar</button>
</form>

    </div>    
  )
}
