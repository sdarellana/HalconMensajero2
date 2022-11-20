import React from 'react'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function RegistroOrdenes() {
  return (
    <div className='Registrer-form-container'>

<form action="/" method="post" className='fondito'>
            <h1>Gestion de Paquetes</h1>
            


            <fieldset>
            <legend>Registro Ordenes </legend>

            <label for="fecharec">Fecha</label>
            <input
                    type="date"
                    name="fecharec"
                    id="fecharec"
                    className="rounded-sm mb-2"
                    required
                />

                
                <label for="horarec">Hora</label>
                <input
                    type="time"
                    name="horarec"
                    id="horarec"
                    className="rounded-md mb-2"
                    required
                />
                <br></br>

            <div class="container text-center">
            <div class="row row-cols-2">
                <div class="col">
                <label for="largo">Largo</label>
                <input
                    type="number"
                    name="largo"
                    id="largo"
                    className="rounded-md mb-2"
                    style={{width : "50px", heigth : "4px"}}
                    required
                />
                </div>
                <div class="col">
                <label for="alto">Alto</label>
                <input
                    type="number"
                    name="alto"
                    id="alto"
                    className="rounded-md mb-2"
                    style={{width : "50px", heigth : "4px" }}
                    required
                />
                </div>
                <div class="col">
                <label for="ancho">ancho</label>
                <input
                    type="number"
                    name="ancho"
                    id="ancho"
                    className="rounded-md mb-2"
                     
                    style={{width : "50px", heigth : "4px"}} 
                    
                    required
                />
                </div>
                <div class="col">
                <label for="peso">Peso</label>
                <input
                    type="peso"
                    name="peso"
                    id="peso"
                    className="rounded-md mb-2"
                    style={{width : "50px", heigth : "4px"}}
                    required
                />
                </div>
            </div>
            </div>


                <table className="menu">
                    <tr>
                        <td align="right">
                            <label for="direccionrec">Dirección recogida</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="direccionrec"
                                id="direccionrec"
                                className="form-control"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="ciudadrec">Ciudad recogida</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="ciudadrec"
                                id="ciudadrec"
                                className="form-control"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="nombredest">Nombre destinatario</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="nombredest"
                                id="nombredest"
                                className="form-control"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="CedulaNitDest">Cédula/Nit destinatario</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="CedulaNitDest"
                                id="CedulaNitDest"
                                className="form-control"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="DireccionEntr">Dirección entrega</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="DireccionEntr"
                                id="DireccionEntr"
                                className="form-control"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="CiudadEntr">Ciudad entrega</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="CiudadEntr"
                                id="CiudadEntr"
                                className="form-control"
                                required
                            />
                        </td>
                    </tr>
                    

                    
                </table>
                <table align='center'>
                <tr>
                        <td>
                        <button type="submit" class="btn btn-primary">Crear oden</button>
                        </td>
                        <td >
                        <button type="submit" class="btn btn-primary">Cancelar</button>
                        </td>
                    </tr>
                </table>
                
                
                
            </fieldset>
        </form>



    </div>
        


  )
}
