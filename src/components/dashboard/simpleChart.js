import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MARGIN = { top: 20, right: 20, bottom: 20, left: 20 };

export const data = [
    { x: 1, y: 50 },
    { x: 2, y: 12 },
    { x: 3, y: 34 },
    { x: 4, y: 53 },
    { x: 5, y: 52 },
    { x: 6, y: 9 },
    { x: 7, y: 18 },
    { x: 8, y: 58 },
    { x: 9, y: 28 },
    { x: 10, y: 34 },
]

const ConnectedScatterplot = ({ width, height }) => {

    const axesRef = useRef(null);
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    const [min, max] = d3.extent(data, (d) => d.y);
    const yScale = d3
        .scaleLinear()
        .domain([0, max || 0])
        .range([boundsHeight, 0]);

    const [xMin, xMax] = d3.extent(data, (d) => d.x);
    const xScale = d3
        .scaleLinear()
        .domain([0, xMax || 0])
        .range([0, boundsWidth]);

    useEffect(() => {
        const svgElement = d3.select(axesRef.current);
        svgElement.selectAll('*').remove();
        const xAxisGenerator = d3.axisBottom(xScale);
        svgElement
            .append('g')
            .attr('transform', 'translate(0,' + boundsHeight + ')')
            .call(xAxisGenerator);

        const yAxisGenerator = d3.axisLeft(yScale);
        svgElement.append('g').call(yAxisGenerator);
    }, [xScale, yScale, boundsHeight]);

    const lineBuilder = d3
        .line()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y));
    const linePath = lineBuilder(data);
    if (!linePath) {
        return null;
    }

    const allCircles = data.map((item, i) => {
        return (
            <circle
                key={i}
                cx={xScale(item.x)}
                cy={yScale(item.y)}
                r={4}
                fill={'#cb1dd1'}
            />
        );
    });

    return (
        <svg width={width} height={height}>
            <g
                width={boundsWidth}
                height={boundsHeight}
                transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
            >
                <path
                    d={linePath}
                    opacity={0.3}
                    stroke="#cb1dd1"
                    fill="none"
                    strokeWidth={2}
                />
                {allCircles}
            </g>
            <g
                width={boundsWidth}
                height={boundsHeight}
                ref={axesRef}
                transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
            />
        </svg>
    );
};

export default ConnectedScatterplot;
