import { Box, Stack, Typography } from '@mui/material';
import React from 'react'

const List2 = () => {

    const mockData = [
        { No: 1, Title: "Product A", Data: "2/2", Price: 19.99 },
        { No: 2, Title: "Product B", Data: "2/42", Price: 24.95 },
        { No: 3, Title: "Product C", Data: "7/2", Price: 14.50 },
        { No: 4, Title: "Product D", Data: "22/2", Price: 29.99 },
        { No: 5, Title: "Product E", Data: "42/23", Price: 9.99 },
        { No: 6, Title: "Product F", Data: "52/2", Price: 39.99 },
        { No: 7, Title: "Product G", Data: "2/2", Price: 49.99 },
        { No: 8, Title: "Product H", Data: "2/2", Price: 12.99 },
        { No: 9, Title: "Product I", Data: "2/2", Price: 34.99 },
        { No: 10, Title: "Product J", Data: "2/2", Price: 19.99 }
    ];

    return (
        <>
            {mockData.map((item, index) => (
                <Box margin={"0 1rem"} padding={"0.5rem"}>
                    <Stack
                        key={index}
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                    >
                        <Typography>{item.No}</Typography>
                        <Typography>{item.Title}</Typography>
                        <Typography>{item.Data}</Typography>
                        <Typography>{item.Price}</Typography>
                    </Stack>
                </Box>
            ))}
        </>
    )
}

export default List2
