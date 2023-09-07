import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Box, Button, useTheme } from '@mui/material';
import { tokens } from '../../theme';

function generateRandomData() {
    const newData = [];
    const ageGroups = ["<5", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65-69", "70-74", "75-79", "80-84", "≥85"];

    for (let i = 0; i < ageGroups.length; i++) {
        const name = ageGroups[i];
        const value = Math.floor(Math.random() * (25000000 - 5000000) + 5000000); // Random value within a range
        newData.push({ name, value });
    }

    return newData;
}

function PieChart() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const svgRef = useRef();
    const [data, setData] = useState(generateRandomData);

    useEffect(() => {
        const width = 928;
        const height = Math.min(width, 500);

        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.name))
            .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());

        const pie = d3.pie()
            .sort(null)
            .value(d => d.value);

        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(Math.min(width, height) / 2 - 1);

        const labelRadius = arc.outerRadius()() * 0.8;

        const arcLabel = d3.arc()
            .innerRadius(labelRadius)
            .outerRadius(labelRadius);

        const arcs = pie(data);

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [-width / 2, -height / 2, width, height])
            .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

        svg.selectAll("g").remove();

        svg.append("g")
            .attr("stroke", "white")
            .selectAll()
            .data(arcs)
            .join("path")
            .attr("fill", d => color(d.data.name))
            .attr("d", arc)
            .append("title")
            .text(d => `${d.data.name}: ${d.data.value.toLocaleString("en-US")}`);

        svg.append("g")
            .attr("text-anchor", "middle")
            .selectAll()
            .data(arcs)
            .join("text")
            .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
            .call(text => text.append("tspan")
                .attr("y", "-0.4em")
                .attr("font-weight", "bold")
                .text(d => d.data.name))
            .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
                .attr("x", 0)
                .attr("y", "0.7em")
                .attr("fill-opacity", 0.7)
                .text(d => d.data.value.toLocaleString("en-US")));
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

export default PieChart;
