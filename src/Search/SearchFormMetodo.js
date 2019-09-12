
import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem  from '@material-ui/core/MenuItem';

export default class SearchFormCPF extends React.Component {

    constructor(props) {
        super(props);{
            this.state = {
                meioPagamento: ""
            }
        }
    }

    limpar() {
        this.setState({
            meioPagamento: ""
        });
    }
    

    pesquisar() {
        this.props.onPesquisar({
            meioPagamento: this.state.meioPagamento
        });
        this.limpar();
    }

    render() {
        console.log(this.state);
        return <div>
            <h2>Digite um meio de pagamento para pesquisa: </h2>
            <TextField 
                label="Meio de pagamento"
                value={this.state.meioPagamento}
                onChange={(meioPagamento) => this.setState({
                    meioPagamento: meioPagamento.target.value
                })}
            />
            <br /><br />
            <button onClick={() => this.pesquisar()} >Confirmar</button>
            <button onClick={() => this.limpar()} >Limpar</button>
        </div>
        
    }
}