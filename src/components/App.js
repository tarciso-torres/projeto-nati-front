import React from 'react';
import axios from 'axios';
import ListarAlunos from './ListarAluno';

class App extends React.Component {
    state = {alunos: []}

    componentDidMount() {
        this.getAlunos();
      }

      getAlunos = () => {
        axios
            .get("http://localhost:8080/alunos")
            .then(reponse => this.setState({ alunos: reponse.data }))
            .catch(err => {
                console.log(err);
                return null;
            });
     };

    render() {
        console.log(this.state.alunos.dados)
        return(
            <div className = 'ui container'>
                <ListarAlunos alunos={this.state.alunos}/>
            </div>
        ) 
    }
}

export default App;