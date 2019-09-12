
import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class InternetTable extends React.Component {

    render() {
        return <Paper> 
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell >Plano</TableCell>
                    <TableCell >Valor</TableCell>
                    <TableCell>Escolha</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.itens.map((internet) => (
                    <TableRow key={internet.id}>
                        <TableCell component="th" scope="row">{internet.id}</TableCell>
                        <TableCell >{internet.plano}</TableCell>
                        <TableCell >R$ {internet.valor}</TableCell>
                        <TableCell >
                            <IconButton onClick={() => this.props.onEditar(internet)}>
                                <EditIcon color="primary">edit</EditIcon>
                            </IconButton>
                            <IconButton onClick={() => this.props.onApagar(internet)}>
                                <DeleteIcon color="error">delete</DeleteIcon>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </Paper>
        /*<table border="1"> 
            <tr>
                <th>Id</th>
                <th>Plano</th>
                <th>Valor</th>
            </tr>
            {this.props.itens.map((internet)=><tr key={internet.id}> 
                <td>{internet.id}</td>
                <td>{internet.plano}</td>
                <td>{internet.valor}</td>
                <td>
                    <IconButton onClick={()=>this.props.onApagar(internet)}>
                        <Icon color="error">delete</Icon>
                    </IconButton>
                    <IconButton onClick={()=>this.props.onEditar(internet)}>
                        <Icon color="primary">edit</Icon>
                    </IconButton>

                </td>
            </tr> )}
            </table> */
    }
}

