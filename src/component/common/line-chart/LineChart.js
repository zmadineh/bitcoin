import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {Grid} from "@mui/material";

const labels = ["January", "February", "March", "April", "May", "June"];

const CHARTOPTIONS = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    // Modify the axis by adding scales
    scales: {
        // to remove the labels
        x: {
            ticks: {
                display: false,
            },

            // to remove the x-axis grid
            grid: {
                drawBorder: false,
                display: false,
            },
        },
        // to remove the y-axis labels
        y: {
            ticks: {
                display: false,
                beginAtZero: true,
            },
            // to remove the y-axis grid
            grid: {
                drawBorder: false,
                display: false,
            },
        },
    },

    elements: {
        line: {
            tension: 0.2
        }
    },
};

const CHARTDATA = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
            fill: true,
            backgroundColor: 'pink'
        },
    ],

};

const LineChart = () => {
    return (
        <Grid maxWidth={'100px'}>
            <Line data={CHARTDATA} options={CHARTOPTIONS}/>
        </Grid>
    );
};

export default LineChart;