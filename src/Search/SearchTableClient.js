
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class SearchTableClient extends React.Component {

    render() {
        return <div><Paper> 
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell >Nome</TableCell>
                    <TableCell >CPF</TableCell>
                    <TableCell >Telefone</TableCell>
                    <TableCell >Endereço</TableCell>
                    <TableCell>Escolha</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.itens.map((cliente) => (
                    <TableRow key={cliente.id}>
                        <TableCell >{cliente.id}</TableCell>
                        <TableCell >{cliente.nome}</TableCell>
                        <TableCell >{cliente.cpf}</TableCell>
                        <TableCell >{cliente.telefone}</TableCell>
                        <TableCell >{cliente.endereco}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </Paper>
            
            
        </div>
    }
}

