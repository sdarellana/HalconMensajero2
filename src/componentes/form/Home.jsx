import React from 'react'

export default function Home() {
  return (
    <div class="container-fluid">
        
      <div class="row flex-nowrap">
        <div class="col-md-2 bg-dark " color='blue' >
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Ordenes</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Registro Orden</span>  </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Actualizar Orden</span>  </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Listado de Ordenes</span>  </a>
                            </li>
                        </ul>
                    </li>
                    {/* <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Soporte</span></a>
                    </li> */}
                    {/* <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li> */}
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Quienes somos</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Contactanos</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Trabja Con nosotros</span> 2</a>
                            </li>
                            {/* <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                            </li> */}
                        </ul>
                    </li>
                    {/* <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li> */}
                </ul>
                {/* <hr/> */}
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../src/componentes/imagenes/Logo3.png" alt="hugenerd" width="80" height="200" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">Perfil</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">Inicio Sesión</a></li>
                        <li><a class="dropdown-item" href="#">Cambio Contraseña</a></li>
                        <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                        <li>
                            {/* <hr class="dropdown-divider"/>  */}
                             
                        </li>
                        {/* <li><a class="dropdown-item" href="#">Sign out</a></li> */}
                    </ul>
                </div>
            </div>
        </div>
        <div class="containerP">
            <div class="row">
            <div class="col s12">
                <h1 class="titulo center-align">Le ayudaremos a enviar sus deseos a sus seres queridos..</h1>
                <p class="fotos center-align">
                    <img src="../src/componentes/imagenes/pagina3.png"  alt="" width="1000" height="1000"/>
                </p>
                </div>
            </div>  <br/>
              
        </div>
   
      </div>
     
    </div>
  )
}
