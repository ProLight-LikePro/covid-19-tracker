import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
    div: {
        width: '90%',
        marginTop: '10px',
        [theme.breakpoints.up(1280)]: {
            width: '50%'
        }
    }
}));

const LineGraph = ({ graph }) => {

    const classes = useStyles();

    return (
        <div className={classes.div}>
            <Line data={
                {
                    labels: ['January', 'February', 'March', 'April'],
                    datasets: [
                        {
                            label: 'Cases',
                            data: graph,
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)',
                        },
                    ],
                }
            } />
        </div>
    )
}

export default LineGraph
