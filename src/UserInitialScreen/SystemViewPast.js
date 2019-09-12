import React, { Component } from 'react';
import MenuView from '../Menu/MenuView';
import style from '../css/style.css';



export default class SystemViewPast extends Component {

    constructor() {
        super()
        this.state = {
            show: true,
            nome: "",
            confirmarNome: ""
        };
    }

    hidingThings() {
        this.setState({ show: false })
        this.setState({ confirmarNome: "confirmar" })
    }

    

    render() {
        return <div>
            {this.state.show ?
                <div  className="alignCenter">
                    <h1>Cadastre seu nome:</h1>
                    <label>Nome: </label>
                    <input value={this.state.nome}
                        onChange={(nome) => this.setState({
                            nome: nome.target.value
                        })} />
                    <br />
                    <br />
                    <button onClick={() => this.hidingThings()}>Confirmar</button>

                </div> : ""
            }
            {this.state.confirmarNome == "confirmar" ? <MenuView /> : ""}


        </div>
    }

}
