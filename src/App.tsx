import { useEffect, useState } from 'react';
import './App.css';
import { buscarDadosLoteria } from './api/loteria';

function App() {
 
  const [dados, setDados] = useState(null);

  useEffect(() => {

    async function carregarDados() {
      
      try {

        const dadosLoteria = await buscarDadosLoteria();

        setDados(dadosLoteria);

      } catch (error) {
        
      }

    }

    carregarDados();
  }, [])

  return (
    <div>
      {dados && (
        <div>
          <h2>Resultados da Loteria</h2>
          {Object.keys(dados).map((jogo, index) => (
            <div key={index}>
              <h3>{jogo}</h3>
              {/* <p>Data do sorteio: {dados}.</p> */}
              {/* <p>Número do concurso: {dados[jogo]}</p> */}
              {/* Adicione mais propriedades conforme necessário */}
            </div>
          ))}
        </div>
      )}
    </div>
    

  )

}

export default App;
