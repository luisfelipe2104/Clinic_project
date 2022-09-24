import './index.css';

function index() {
    return (
        <div className='app'>
            <div className="titulos">
                <h1>Agende sua consulta!</h1>
                <h1>Selecione a forma de atendimento: </h1>
            </div>
            <div className="opcoes">
                <input className='botao' type="button" value="Particular" />
                <input className='botao' type="button" value="SUS" />
            </div>
            <div className="container">

                <label>Informe sua cidade: </label>
                <input className='input' type="text" />

                <label>Informe a especialidade médica: </label>
                <input className='input' type="text" />

                <label>Informe a data e hora que em que deseja ser atendido: </label>
                <input className='input' type="text" />

                <input className='botao' type="button" value="Marcar consulta" />

            </div>


        </div>
    );
}

export default index;

