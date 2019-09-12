
import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuView from '../Menu/MenuView';

export default class SystemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            nome: "",
            confirmarNome: ""
        }
    }

    limpar() {
        this.setState({
            nome: ""
        });
    }

    confirmar() {
        this.props.onCadastrar({
            nome: this.state.nome
        });

        this.limpar();
    }

    hidingThings() {
        this.confirmar()
        this.setState({ show: false })
        this.setState({ confirmarNome: "confirmar" })
    }
    

    render() {
        console.log(this.state);
        return <div>

            {this.state.show ? <form className="alignCenter">
                <h2>Cadastre seu nome:</h2>
                <TextField
                    label="Nome"
                    value={this.state.nome}
                    onChange={(event) => this.setState({
                        nome: event.target.value
                    })} 
                />
                <br /><br />

                <button onClick={()=>this.hidingThings()} >Cadastrar</button>

            </form> : ""}
            { this.state.confirmarNome == "confirmar" ? <MenuView /> : "" }
        </div>

    }
}