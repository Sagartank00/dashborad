import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(first, second, third, total) {
    return { first, second, third, total };
}

const rows = [
    createData("xyz1", 'xyz2', "xyz3", 100),
    createData("1P", "2P", "3P", "Total"),
];

export default function Table2() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            Data Sowrces
                        </TableCell>
                        <TableCell>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.first}</TableCell>
                            <TableCell align="center">{row.second}</TableCell>
                            <TableCell align="center">{row.third}</TableCell>
                            <TableCell align="center">{row.total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}