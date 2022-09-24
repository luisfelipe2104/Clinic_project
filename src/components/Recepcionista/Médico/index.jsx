import React from "react";
import './index.css';

function Medico() {
    return (
        <div>
            <div className="titulo">
                <h1>Nome do Médico</h1>
            </div>

            <>
                <h2>Informações sobre o medico: </h2>
            </>

            <hr />

            <div className="agenda">
                <h2>Agenda:</h2>
            </div>

            <div className="container1">
                <div className="data">
                    <h2>Data:</h2>

                    <p>30/01</p>
                    <p>31/01</p>
                    <p>01/02</p>

                </div>

                <div className="horarios">
                    <h2>Horários Disponiveis</h2>



                    <input className="horario" type="button" value="08: 00" />
                    <input className="horario" type="button" value="08: 30" />
                    <input className="horario" type="button" value="09: 00" />
                    <input className="horario" type="button" value="09: 30" />
                    <input className="horario" type="button" value="10: 00" />
                    <input className="horario" type="button" value="10: 30" />
                    <input className="horario" type="button" value="11: 00" />
                    <input className="horario" type="button" value="11: 30" /> <br />

                    <input className="horario" type="button" value="08: 00" />
                    <input className="horario" type="button" value="08: 30" />
                    <input className="horario" type="button" value="09: 00" />
                    <input className="horario" type="button" value="09: 30" />
                    <input className="horario" type="button" value="10: 00" />
                    <input className="horario" type="button" value="10: 30" />
                    <input className="horario" type="button" value="11: 00" />
                    <input className="horario" type="button" value="11: 30" /> <br />
                    
                    <input className="horario" type="button" value="08: 00" />
                    <input className="horario" type="button" value="08: 30" />
                    <input className="horario" type="button" value="09: 00" />
                    <input className="horario" type="button" value="09: 30" />
                    <input className="horario" type="button" value="10: 00" />
                    <input className="horario" type="button" value="10: 30" />
                    <input className="horario" type="button" value="11: 00" />
                    <input className="horario" type="button" value="11: 30" /> <br />
                </div>


            </div>
        </div>
    );
}

export default Medico;