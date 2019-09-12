
import React from 'react';
import axios from 'axios';
import InternetForm from './InternetForm';
import InternetTable from './InternetTable';
import MenuView from '../Menu/MenuView';
import Button from '@material-ui/core/Button';

export default class InternetView extends React.Component {
  constructor() {
    super();
    this.state = { carregar: true, internetParaEditar: null, show: false, trocaTela:"",trocatelaEsconder:true};
  }

  listar() {
    axios.get("/api/internets/").then(
      (retorno) => this.setState({
        carregar: false,
        internets: retorno.data
      })
    );
  }
  apagar(internet) {
    axios.delete(`/api/internets/${internet.id}`).then(
      () => this.listar()
    );
  }

  cadastrar(internet) {
    axios.post("/api/internets/", internet).then(
      () => this.listar()
    );
  }

  atualizar(internet) {
    axios.put("/api/internets/" + internet.id, internet).then(
      () => this.listar()
    );
  }

  componentDidMount() {
    document.title = "Planos de Internet"
    
    this.listar();
  }

  editar(internet) {
    this.setState({
      internetParaEditar: internet
    });
  }

  esconderForm(){
    this.setState({ 
      show: !this.state.show
    })
  }

  trocaTela() {
    this.setState({ trocaTela: "Voltar" })
    this.setState({ trocatelaEsconder:false })
  }

  render() {
    return <div>
      {this.state.trocatelaEsconder ? <div>
      <MenuView/>
      <br/><br/>
      {this.state.carregar ? "Carregando ..." :
        <InternetTable
          itens={this.state.internets}
          onEditar={(internet) => this.editar(internet)}
          onApagar={(internet) => this.apagar(internet)}
        />}
      <br />
        <Button onClick={() => this.esconderForm()} variant="contained">
       <strong> Abrir formulário de Cadastro </strong>
      </Button>
      <br />
      {this.state.show ? <div><InternetForm
        key={this.state.internetParaEditar ?
          this.state.internetParaEditar.id : "0"}
        editar={this.state.internetParaEditar}
        onCadastrar={(internet) => this.cadastrar(internet)}
        onAtualizar={(internet) => this.atualizar(internet)}
        onCancelar={() => this.setState({ internetParaEditar: null })}
      /></div> :""}
       <br />
      <Button onClick={() => this.trocaTela()} variant="contained">
       <strong> Voltar </strong>
      </Button>
      <br />


  </div> :""}
      {this.state.trocaTela == "Voltar" ? <MenuView /> : ""}
    </div>
  }
}
