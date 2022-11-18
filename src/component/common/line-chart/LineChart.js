import React, {useEffect} from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {Grid} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import axios from "axios";

const labels = Array.from(Array(20).keys());

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
            tension: 0.4,
        },
        point: {
            radius: 0,
        }
    },
};


const LineChart = ({changes, coinId}) => {
    const theme = useTheme();
    const borderColor = (changes < 0 ? theme.palette.error.main : theme.palette.success.main);
    const fillColor = (changes < 0 ? theme.palette.error.light : theme.palette.success.light);

    const CHARTDATA = {
        labels: labels,
        datasets: [
            {
                label: "coin dataset",
                borderColor: borderColor,
                borderWidth: 2,
                data: Array.from({length: 20}, () => Math.floor(Math.random() * 40)+10),
                fill: true,
                backgroundColor: fillColor,
            },
        ],

    };

    // const options = {
    //     method: 'GET',
    //     url: 'https://coingecko.p.rapidapi.com/coins/bitcoin/market_chart',
    //     params: {vs_currency: 'usd', days: '5', id: coinId},
    //     headers: {
    //         'X-RapidAPI-Key': 'e5e276cd06msh90df54307c9bbe4p1026e1jsna4ae8f1b8107',
    //         'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    //     }
    // };
    //
    //
    // const changeOrderOfData = (data) => {
    //     const dataArray = data.map(d => d[0]);
    //     CHARTDATA.datasets[0].data = dataArray ? dataArray : [];
    // }
    //
    // useEffect(() => {
    //     axios.request(options).then(function (response) {
    //         changeOrderOfData(response.data.prices);
    //         // console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }, []);

    return (
        <Grid maxWidth={'100px'}>
            <Line data={CHARTDATA} options={CHARTOPTIONS}/>
        </Grid>
    );
};

export default LineChart;