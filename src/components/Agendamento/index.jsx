import './index.css';
import Button from 'react-bootstrap/Button';


function index() {
    return (
        <div className='app'>
            <div className="titulos">
                <h1>Agende sua consulta!</h1>
                <h1>Selecione a forma de atendimento: </h1>
            </div>
            <div className="container">

                <label>Informe sua cidade: </label>
                <input className='input' type="text" />

                <label>Informe a especialidade médica: </label>
                <input className='input' type="text" />

                <label>Informe a data e hora que em que deseja ser atendido: </label>
                <input className='input' type="text" />

                <Button className='botao' variant="outline-success">Agendar consulta</Button>{' '}

            </div>



        </div>
    );
}

export default index;

