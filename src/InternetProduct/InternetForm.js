
import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem  from '@material-ui/core/MenuItem';

export default class InternetForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                plano: this.props.editar.plano,
                valor: this.props.editar.valor
            }

        } else {
            this.state = {
                plano: "",
                valor: ""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                plano: "",
                valor: ""
            });
        }
    }

    confirmar() {

        if (this.props.editar) {
            this.props.onAtualizar({
                id: this.props.editar.id,
                plano: this.state.plano,
                valor: this.state.valor
            });
        } else {
            this.props.onCadastrar({
                plano: this.state.plano,
                valor: this.state.valor
            });
        }
        this.limpar();
    }

    render() {
        console.log(this.state);
        return <div>
            <h2>Cadastrar</h2>
            <TextField 
                label="Plano"
                value={this.state.plano}
                onChange={(planoVelocidade) => this.setState({
                    plano: planoVelocidade.target.value
                })}
            />
            <br /><br />
            <TextField 
                label="Valor"
                value={this.state.valor} type="number"
                onChange={(event) => this.setState({
                    valor: event.target.value
                })}
            />  {
                this.state.valor < 0 ?
                    <span style={{ color: "red" }}>
                        Valor deve ser maior ou igual a 0
                        </span>
                    : ""}

            <br /><br />
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