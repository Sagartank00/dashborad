import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Box, Button, useTheme } from '@mui/material';
import { generateMockData } from '../../data/mockData';
import { tokens } from '../../theme';

const AreaChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState(generateMockData());

    useEffect(() => {
        // Clear the previous chart content
        const svg1 = d3.select(chartRef.current);
        svg1.selectAll('*').remove();

        // Declare the chart dimensions and margins.
        const width = 928;
        const height = 500;
        const marginTop = 20;
        const marginRight = 30;
        const marginBottom = 30;
        const marginLeft = 40;

        // Declare the x (horizontal position) scale.
        const x = d3.scaleUtc(d3.extent(chartData, d => d.date), [marginLeft, width - marginRight]);

        // Declare the y (vertical position) scale.
        const y = d3.scaleLinear([0, d3.max(chartData, d => d.close)], [height - marginBottom, marginTop]);

        // Declare the area generator.
        const area = d3.area()
            .x(d => x(d.date))
            .y0(y(0))
            .y1(d => y(d.close));

        // Create the SVG container.
        const svg = d3.select(chartRef.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto;");

        // Append a path for the area (under the axes).
        svg.append("path")
            .attr("fill", "steelblue")
            .attr("d", area(chartData));

        // Add the x-axis.
        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

        // Add the y-axis, remove the domain line, add grid lines and a label.
        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).ticks(height / 40))
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").clone()
                .attr("x2", width - marginLeft - marginRight)
                .attr("stroke-opacity", 0.1))
            .call(g => g.append("text")
                .attr("x", -marginLeft)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text("↑ Daily close ($)"));
    }, [chartData]);

    const handleRandomizeData = () => {
        const newChartData = generateMockData();
        setChartData(newChartData);
    };

    return <Box m={3}>
        <svg ref={chartRef}></svg>
        <Button
            sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
            }}
            onClick={handleRandomizeData}>
            Randomize Data
        </Button>
    </Box>;
};

export default AreaChart;
