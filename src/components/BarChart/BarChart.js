import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Box, Button, useTheme } from '@mui/material';
import { tokens } from '../../theme';

function generateRandomData() {
    const newData = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < 26; i++) {
        const letter = alphabet[i];
        const frequency = Math.random();
        newData.push({ letter, frequency });
    }

    return newData;
}

function BarChart() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const svgRef = useRef();
    const [data, setData] = useState(generateRandomData);

    useEffect(() => {
        const width = 928;
        const height = 500;
        const marginTop = 30;
        const marginRight = 0;
        const marginBottom = 30;
        const marginLeft = 40;

        const x = d3.scaleBand()
            .domain(d3.groupSort(data, ([d]) => -d.frequency, (d) => d.letter)) // descending frequency
            .range([marginLeft, width - marginRight])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d.frequency)])
            .range([height - marginBottom, marginTop]);

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto;");

        svg.selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", (d) => x(d.letter))
            .attr("y", (d) => y(d.frequency))
            .attr("height", (d) => y(0) - y(d.frequency))
            .attr("width", x.bandwidth())
            .attr("fill", "steelblue");

        svg.select(".x-axis").remove();
        svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0));

        svg.select(".y-axis").remove();
        svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
            .call(g => g.select(".domain").remove())
            .call(g => g.append("text")
                .attr("x", -marginLeft)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text("↑ Frequency (%)"));
    }, [data]);

    const updateData = () => {
        setData(generateRandomData());
    };

    return (
        <Box m={3}>
            <svg ref={svgRef}></svg>
            <Button
                sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                }}
                onClick={updateData}>
                Update Data
            </Button>
        </Box>
    );
}

export default BarChart;
