import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

const NavBarLoged:React.FC = () =>{

    const {user}:any = useAuth()
    
    return(
        <>
        {user!=undefined?(
         user.tipo_usuario==1 ?(
             <>
           
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-1">
										<div className="dashboard-stat-content"><h4>R$564,64</h4> <span>Saldo disponível para saque</span></div>
										<div className="dashboard-stat-icon"><i className="ti-location-pin"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-2">
										<div className="dashboard-stat-content"><h4>R$102,00</h4> <span>Valores a receber</span></div>
										<div className="dashboard-stat-icon"><i className="ti-pie-chart"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-3">
										<div className="dashboard-stat-content"><h4>1.927</h4> <span>Visualizações nos anúncios</span></div>
										<div className="dashboard-stat-icon"><i className="ti-user"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-4">
										<div className="dashboard-stat-content"><h4>30</h4> <span>Propriedades anunciadas</span></div>
										<div className="dashboard-stat-icon"><i className="ti-location-pin"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-5">
										<div className="dashboard-stat-content"><h4>4</h4> <span>Reservas realizadas</span></div>
										<div className="dashboard-stat-icon"><i className="ti-pie-chart"></i></div>
									</div>	
								</div>
								
								<div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-6">
										<div className="dashboard-stat-content"><h4>2</h4> <span>Médias de reserva/mês</span></div>
										<div className="dashboard-stat-icon"><i className="ti-user"></i></div>
									</div>	
								</div>

					
            
            </>
        ):(
            <>
                            <div className="col-lg-4 col-md-6 col-sm-12">
									<div className="dashboard-stat widget-1">
										<div className="dashboard-stat-content"><h4>R$0,00</h4> <span>Meu Saldo</span></div>
										<div className="dashboard-stat-icon"><i className="ti-location-pin"></i></div>
									</div>	
								</div>
								
								
            </>
        )

        
        ):(
           <p>Usuario não logado</p>
				                			
        )}
        </>

    )
}

export default NavBarLoged;