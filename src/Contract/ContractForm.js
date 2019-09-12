
import React from 'react';
import CustomerForm from '../Customer/CustomerForm';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default class ContractForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                meioPagamento: this.props.editar.meioPagamento,
                clienteId: this.props.editar.cliente ? this.props.editar.cliente.id : "",
                internetId: this.props.editar.internet ? this.props.editar.internet.id : ""
            }

        } else {
            this.state = {
                meioPagamento: "",
                clienteId: "",
                internetId: ""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                meioPagamento: "",
                clienteId: "",
                internetId: ""
            });
        }
    }

    confirmar() {

        let cliente = this.props.clientes.find(
            (cliente) => cliente.id == this.state.clienteId

        );

        let internet = this.props.internets.find(
            (internet) => internet.id == this.state.internetId

        );

        if (this.props.editar) {
            this.props.onAtualizar({
                id: this.props.editar.id,
                meioPagamento: this.state.meioPagamento,
                cliente: cliente,
                internet: internet
            });
        } else {
            this.props.onCadastrar({
                meioPagamento: this.state.meioPagamento,
                cliente: cliente,
                internet: internet
            });
        }
        this.limpar();
    }

    render() {
        console.log(this.state);
        return <div>
            <h2>Cadastrar</h2>
            <TextField
                label="Meio de Pagamento"
                value={this.state.meioPagamento}
                onChange={(formadePagamento) => this.setState({
                    meioPagamento: formadePagamento.target.value
                })}
            />
            <br /><br />
            <label>Selecione um cliente:</label>
            <br></br>
            <select value={this.state.clienteId} 
            onChange={ (evento) => this.setState({ clienteId: evento.target.value
                    })
                }>
                <option value="">Escolha</option>
                {
                    this.props.clientes && this.props.clientes.map(
                        (cliente) => <option value={cliente.id}>{cliente.nome}</option>
                    )}
            </select>
            <br></br>

            <label>Selecione uma internet:</label>
            <br></br>
            <select value={this.state.internetId}
                onChange={(evento) => this.setState({ internetId: evento.target.value
                    })
                }>
                <option value="">Escolha</option>
                {this.props.internets && this.props.internets.map(
                    (internet) => <option value={internet.id}>{internet.plano}</option>
                    )}
            </select>

            <br></br>

            <button
                disabled={this.state.valor < 0}
                onClick={() => this.confirmar()}
            >{this.props.editar ? "Confirmar" : "Cadastrar"}</button>

            <button
                onClick={() => this.limpar()}
            >{this.props.editar ? "Cancelar" : "Limpar"}</button>
        </div>
    }
}