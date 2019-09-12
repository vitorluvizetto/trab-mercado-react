import React, { Component } from 'react';
import axios from 'axios';
import SystemForm from './SystemForm';


export default class SystemView extends Component {

  constructor() {
    super()
    this.state = {
      nome: ""
    };
  }

  cadastrar(funcionario) {
    axios.post("/api/funcionarios/", funcionario);
  }

  componentDidMount(){
    document.title = "Cadastro funcionário"
  }



  render() {
    return <div>
      <div>
        <SystemForm
          onCadastrar={(funcionario) => this.cadastrar(funcionario)}
        />
      </div>
    </div>
  }

}
