import React from 'react';
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';

//import icons
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: '#0061a8',
        color: '#fff',
        width: theme.spacing(17),
        position: 'relative',
        '& .MuiSvgIcon-root': {
            position: 'absolute',
            right: theme.spacing(1)
        },
        '& .MuiCardContent-root:last-child': {
            paddingBottom: '16px'
        },
        [theme.breakpoints.up(1024)]: {
            width: theme.spacing(25),
        },
    },
    subtitle: {
        fontSize: '1.2rem',
        fontWeight: 700
    }
}));

const RecoverCases = ({ totalRecovered }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid
                    container
                    item
                    direction='column'
                    alignItems='flex-start'>
                    <AccessibilityNewIcon />
                    <Typography
                        variant='subtitle1'>
                        Recovered
                    </Typography>
                    <Typography
                        className={classes.subtitle}
                        variant='subtitle2'>
                        {<NumberFormat
                            value={totalRecovered}
                            displayType={'text'}
                            thousandSeparator={true}
                        />}
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default RecoverCases
