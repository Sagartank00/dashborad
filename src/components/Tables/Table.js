import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, m, f, t) {
    return { name, m, f, t };
}

const rows = [
    createData("COMP", '28%', "52%", "80%"),
    createData("INDEX", 0.68, 1.23, 0.95),
];

export default function Table1() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">M</TableCell>
                        <TableCell align="right">F</TableCell>
                        <TableCell align="right">T</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.m}</TableCell>
                            <TableCell align="right">{row.f}</TableCell>
                            <TableCell align="right">{row.t}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}