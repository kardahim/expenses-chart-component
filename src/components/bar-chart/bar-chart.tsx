import React from 'react'
import './bar-chart.scss'
import { useEffect, useState } from 'react';

// charts
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
} from 'chart.js';


function BarChart() {
    const [labels, setLabels] = useState<string[]>([])
    const [amount, setAmounts] = useState<number[]>([])

    useEffect(() => {
        // prevents for second render
        setLabels([])
        setAmounts([])

        // read json file
        const json = require("../../data/data.json")
        for (let i = 0; i < json.length; i++) {
            setLabels(labels => [...labels, json[i].day])
            setAmounts(amounts => [...amounts, json[i].amount])
        }
    }, [])

    // chart options
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Tooltip
    );

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                xAlign: 'center' as 'center',
                yAlign: 'center' as 'center',
                margin: 20,
                cornerRadius: 6,
                displayColors: false,
                callbacks: {
                    title: function () {
                        return ""
                    },
                    label: function (context: any) {
                        let label = context.dataset.label || ''

                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(context.parsed.y)
                        }
                        return label
                    }
                },
                bodyFont: {
                    size: 18,
                    weight: 'bold'
                },
                padding: 10
            }
        },
        elements: {
            bar: {
                borderRadius: 6,
                borderSkipped: 'middle' as 'middle',
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    color: 'hsl(28, 10%, 53%)',
                    font: {
                        size: 17,
                        family: "'DM Sans', sans-serif"
                    }
                }
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false
                }
            }
        },
        onHover: (event: any, chartElement: any) => {
            event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        }
    }

    const data = {
        labels,
        datasets: [{
            data: amount,
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'
            ]
        }]

    }
    return (
        <Bar options={options} data={data} />
    )
}

export default BarChart