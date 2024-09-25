import { useState } from 'react';
import './App.css';

function App() {
  const [tituloSprint, setTituloSprint] = useState(''); 
  var [inputValue, setInputValue] = useState('');
  const [tarefasAFazer, setTarefasAFazer] = useState([]);
  const [frasesFazendo, setFrasesFazendo] = useState([]);
  const [frasesFeito, setFrasesFeito] = useState([]);

  function adicionarTarefa() {
    if (inputValue) {
      const novaTarefa = { titulo: inputValue };
      setTarefasAFazer(prev => [...prev, novaTarefa]);
      setInputValue('');
    }
  }

  function moverParaFazendo(index) {
    const tarefa = tarefasAFazer[index];
    setTarefasAFazer(prev => prev.filter((_, i) => i !== index));
    setFrasesFazendo(prev => [...prev, tarefa]);
  }

  function moverParaFeito(index) {
    const tarefa = frasesFazendo[index];
    setFrasesFazendo(prev => prev.filter((_, i) => i !== index));
    setFrasesFeito(prev => [...prev, tarefa]);
  }

  return (
    <div className='container'>
      <h1>Gerenciamento de Tarefas SCRUM</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Título da Sprint"
          id="tituloSprint"
        />
        <button onClick={() => {
          const input = document.getElementById('tituloSprint');
          if (input) {
            setTituloSprint(input.value);
          }
        }} >Criar Sprint</button>
      </div>
      <div className="flex">
        <input
          id='nometarefa'
          type="text"
          placeholder="Digite o nome da Tarefa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={adicionarTarefa} >Adicionar Tarefa</button>
      </div>

      <div className='sprints'>
          <h2 style={{}}>{tituloSprint}</h2><div className="deitado">
						
										<div className='sprint'>
						<div className="colunas">
							<h3 className='titleTask'>A fazer</h3>
							<div className='tarefas'>
							{tarefasAFazer.map((tarefa, index) => (
								<div key={index} className='tarefa-item'>
									<h3>{tarefa.titulo}</h3>
									<button onClick={() => moverParaFazendo(index)} className='button'>iniciar</button>
								</div>
							))}
						</div>
						</div>
										</div>
						
										<div className='sprint'>
						<div className="colunas">
							<h3 className='titleTask'>Fazendo</h3>
							<div className='tarefas'>
								{frasesFazendo.map((tarefa, index) => (
									<div key={index} className='tarefa-item'>
										<h3>{tarefa.titulo}</h3>
										<button onClick={() => moverParaFeito(index)} className='button'>terminar</button>
									</div>
								))}
							</div>
						</div>
										</div>
						
										<div className='sprint'>
						<div className="colunas">
							<h3 className='titleTask'>Feito</h3>
							<div className='tarefas'>
								{frasesFeito.map((tarefa, index) => (
									<div className='tarefa-item' key={index}>
										<h3>{tarefa.titulo}</h3>
									</div>
								))}
							</div>
						</div>
										</div>
					</div>
      </div>
    </div>
  );
}

export default App;
