
import MenuView from '../Menu/MenuView';
import React from 'react';
import Button from '@material-ui/core/Button';
import SearchForm from './SearchForm';
import axios from 'axios';
import SearchFormMetodo from './SearchFormMetodo';
import SearchTable from './SearchTable';
import SearchTableClient from './SearchTableClient';

export default class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = { carregar: true, trocaTela: "", trocatelaEsconder: true, show: false, showMetodo: false };
    }


    pesquisarNome(cliente) {
        axios.post("/api/clientes/pesquisar/nome", cliente).then(
            (retorno) => this.setState({
                carregar: false,
                clientes: retorno.data
            })
        );
    }


    pesquisarMeio(contrato) {
        axios.post("/api/contratos/pesquisar/metodo", contrato).then(
            (retorno) => this.setState({
                carregar: false,
                contratos: retorno.data
            })
        );
    }

    trocaTela() {
        this.setState({ trocaTela: "Voltar" })
        this.setState({ trocatelaEsconder: false })
    }


    esconderForm() {
        this.setState({
            show: !this.state.show
        })
    }

    esconderFormCpf() {
        this.setState({
            showMetodo: !this.state.showMetodo
        })
    }


    componentDidMount() {
        document.title = "Pesquisar"
        this.pesquisarNome();
        this.pesquisarMeio();
    }

    render() {
        return <div> {this.state.trocatelaEsconder ?
            <div>
                <MenuView />
                <br />
                <Button className="alignButtonsTables" onClick={() => this.esconderForm()} variant="contained">
                    <strong> Pesquisar por nome </strong>
                </Button>
                <br />

                <Button className="alignButtonsTables" onClick={() => this.esconderFormCpf()} variant="contained">
                    <strong> Pesquisar por meio de pagamento </strong>
                </Button>
                <br />
                
                {this.state.carregar ? "" :
                    <SearchTableClient
                        itens={this.state.clientes}
                    />}
                

                {this.state.carregar ? "Carregando ..." :
                    <SearchTable
                        itens={this.state.contratos}
                    />}
                <br />


                {this.state.show ? <SearchForm onPesquisar={(cliente) => this.pesquisarNome(cliente)} /> : ""}
                {this.state.showMetodo ? <SearchFormMetodo onPesquisar={(contrato) => this.pesquisarMeio(contrato)} /> : ""}
                <br />
                <Button onClick={() => this.trocaTela()} variant="contained">
                    <strong> Voltar </strong>
                </Button>
                <br />
            </div> : ""}
            {this.state.trocaTela == "Voltar" ? <MenuView /> : ""}
        </div>
    }
}
