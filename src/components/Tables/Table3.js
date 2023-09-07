import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

const Table3 = () => {

    const movieData = [
        {
            title: "The Lost Treasure",
            mpa: "PG",
            release: "11/4",
            open: "$100",
            bor: "$200"
        },
        {
            title: "In the Shadows",
            mpa: "R",
            release: "11/8",
            open: "$110",
            bor: "$210"
        },
        {
            title: "Summer Adventure",
            mpa: "PG",
            release: "11/15",
            open: "$95",
            bor: "$180"
        },
        {
            title: "Mystery Mansion",
            mpa: "PG-13",
            release: "11/21",
            open: "$120",
            bor: "$230"
        },
        {
            title: "The Haunting",
            mpa: "R",
            release: "11/27",
            open: "$105",
            bor: "$195"
        },
        {
            title: "The Haunting",
            mpa: "R",
            release: "11/27",
            open: "$105",
            bor: "$195"
        },
        {
            title: "Mystery Mansion",
            mpa: "PG-13",
            release: "11/21",
            open: "$120",
            bor: "$230"
        },
    ];


    const rows = movieData.map((entry, index) => {
        return {
            id: index,
            title: entry?.title,
            mpa: entry?.mpa,
            release: entry?.release,
            open: entry?.open,
            bor: entry?.bor
        };
    });

    const columns = [
        { field: 'title', headerName: 'TITLE LIST', width: 150 },
        { field: 'mpa', headerName: 'MPA', width: 140 },
        { field: 'release', headerName: 'RELEASE', width: 200 },
        { field: 'open', headerName: 'OPEN', width: 200 },
        { field: 'bor', headerName: 'BOR', width: 200 },
    ];

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', height: "59vh" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                disableRowSelectionOnClick
            />
        </Paper>
    )
}

export default Table3
