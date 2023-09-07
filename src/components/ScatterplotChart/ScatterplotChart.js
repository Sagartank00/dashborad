import React, { useState } from 'react'
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Tooltip from "../Tooltip/Tooltip";
import * as d3 from "d3";
import { data1 } from '../../data/mockData';

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

const ScatterplotChart = () => {
    const width = 400;
    const height = 400;
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    const [hovered, setHovered] = useState(null);

    // Scales
    const yScale = d3.scaleLinear().domain([35, 85]).range([boundsHeight, 0]);
    const xScale = d3
        .scaleLinear()
        .domain([-3000, 50000])
        .range([0, boundsWidth]);
    const allGroups = data1.map((d) => String(d.group));
    const colorScale = d3
        .scaleOrdinal()
        .domain(allGroups)
        .range(["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"]);

    // Build the shapes
    const allShapes = data1.map((d, i) => (
        <circle
            key={i}
            r={8}
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            stroke={colorScale(d.group)}
            fill={colorScale(d.group)}
            fillOpacity={0.7}
            onMouseEnter={() =>
                setHovered({
                    xPos: xScale(d.x),
                    yPos: yScale(d.y),
                    name: d.subGroup,
                })
            }
            onMouseLeave={() => setHovered(null)}
        />
    ));

    return (
        <div style={{ position: "relative" }}>
            <svg width={width} height={height}>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
                >
                    {/* Y axis */}
                    <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />

                    {/* X axis, use an additional translation to appear at the bottom */}
                    <g transform={`translate(0, ${boundsHeight})`}>
                        <AxisBottom
                            xScale={xScale}
                            pixelsPerTick={40}
                            height={boundsHeight}
                        />
                    </g>

                    {/* Circles */}
                    {allShapes}
                </g>
            </svg>

            {/* Tooltip */}
            <div
                style={{
                    width: boundsWidth,
                    height: boundsHeight,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                    marginLeft: MARGIN.left,
                    marginTop: MARGIN.top,
                }}
            >
                <Tooltip interactionData={hovered} />
            </div>
        </div>
    )
}

export default ScatterplotChart
