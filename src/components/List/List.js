import { Box, Stack, Typography } from '@mui/material';
import React from 'react'

const List1 = () => {

    const mockData = [
        { No: 1, Title: "Product A", Price: 19.99 },
        { No: 2, Title: "Product B", Price: 24.95 },
        { No: 3, Title: "Product C", Price: 14.50 },
        { No: 4, Title: "Product D", Price: 29.99 },
        { No: 5, Title: "Product E", Price: 9.99 },
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
                        <Typography>{item.Price}</Typography>
                    </Stack>
                </Box>
            ))}
        </>
    )
}

export default List1
