
import React from 'react';
import axios from 'axios';
import ContractForm from './ContractForm';
import ContractTable from './ContractTable';
import MenuView from '../Menu/MenuView';
import Button from '@material-ui/core/Button';

export default class ContractView extends React.Component {
  constructor() {
    super();
    this.state = { carregar: true, contratoParaEditar: null, show: false, trocaTela: "", trocatelaEsconder:true };
  }


  listarClientes() {
    axios.get("/api/clientes/").then(
      (retorno)=>this.setState({
        clientes:retorno.data})  
    );
  }

  listarInternets() {
    axios.get("/api/internets/").then(
      (retorno)=>this.setState({
        internets:retorno.data})  
    );
  }


  listar() {
    axios.get("/api/contratos/").then(
      (retorno) => this.setState({
        carregar: false,
        contratos: retorno.data
        
      })
    );
  }
  apagar(contrato) {
    axios.delete(`/api/contratos/${contrato.id}`).then(
      () => this.listar()
    );
  }

  cadastrar(contrato) {
    axios.post("/api/contratos/", contrato).then(
      () => this.listar()
    );
  }

  atualizar(contrato) {
    axios.put("/api/contratos/" + contrato.id, contrato).then(
      () => this.listar()
    );
  }


  componentDidMount() {
    document.title = "Contratos"
    this.listar();
    this.listarClientes();
    this.listarInternets();
  }

  editar(contrato) {
    this.setState({
      contratoParaEditar: contrato
    });
  }

  esconderForm() {
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
        <ContractTable
          itens={this.state.contratos}
          onEditar={(contrato) => this.editar(contrato)}
          onApagar={(contrato) => this.apagar(contrato)}
        />}
      <br />
      <Button onClick={() => this.esconderForm()} variant="contained">
       <strong> Abrir formulário de Cadastro </strong>
      </Button>
      <br />
      {this.state.show ? <div><ContractForm
        key={this.state.contratoParaEditar ?
          this.state.contratoParaEditar.id : "0"}
        editar={this.state.contratoParaEditar}
        clientes={this.state.clientes}
        internets={this.state.internets}
        onCadastrar={(contrato) => this.cadastrar(contrato)}
        onAtualizar={(contrato) => this.atualizar(contrato)}
        onCancelar={() => this.setState({ contratoParaEditar: null })}
      /></div> : ""}
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
