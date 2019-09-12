
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

export default class SearchTable extends React.Component {

    render() {
        return <div><Paper> 
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell >Meio de pagamento</TableCell>
                    <TableCell >Cliente</TableCell>
                    <TableCell>Plano</TableCell>
                </TableRow>
                <TableBody>
                    {this.props.itens.map((contrato) => (
                        <TableRow key={contrato.id}>
                            <TableCell>{contrato.id}</TableCell>
                            <TableCell >{contrato.meioPagamento}</TableCell>
                            <TableCell >{contrato.cliente ? (
                                contrato.cliente.nome) : ""}</TableCell>
                            <TableCell >{contrato.internet ? (
                                contrato.internet.plano) : ""}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableHead>
            <TableBody>
                 
                    
                
            </TableBody>
        </Table>
        </Paper>
            
            
        </div>
    }
}

