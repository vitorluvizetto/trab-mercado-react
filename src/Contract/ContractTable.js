
import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';

export default class ContractTable extends React.Component {

    render() {
        return <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Meio de pagamento</TableCell>
                        <TableCell>Cliente</TableCell>
                        <TableCell>Plano de Internet</TableCell>
                        <TableCell>Escolha</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.itens.map((contrato) => (
                        <TableRow key={contrato.id}>
                            <TableCell component="th" scope="row">{contrato.id}</TableCell>
                            <TableCell >{contrato.meioPagamento}</TableCell>
                            <TableCell >{contrato.cliente ? (
                                contrato.cliente.nome) : ""}</TableCell>
                            <TableCell >{contrato.internet ? (
                                contrato.internet.plano) : ""}</TableCell>
                            <TableCell >
                                <IconButton onClick={() => this.props.onEditar(contrato)}>
                                    <EditIcon className="material-icons" color="primary">edit</EditIcon>
                                </IconButton>
                                <IconButton onClick={() => this.props.onApagar(contrato)}>
                                    <DeleteIcon color="error">delete</DeleteIcon>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    }
}

