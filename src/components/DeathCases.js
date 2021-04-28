import React from 'react';
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';

//import icons
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: '#fb3640',
        color: '#fff',
        width: theme.spacing(17),
        marginRight: theme.spacing(1),
        position: 'relative',
        '& .MuiSvgIcon-root': {
            position: 'absolute',
            right: theme.spacing(1)
        },
        '& .MuiCardContent-root:last-child': {
            paddingBottom: '16px'
        },
        [theme.breakpoints.up(375)]: {
            marginRight: theme.spacing(3)
        },
        [theme.breakpoints.up(1024)]: {
            width: theme.spacing(25),
        },
    },
    subtitle: {
        fontSize: '1.2rem',
        fontWeight: 700
    }
}))

const DeathCases = ({ totalDeaths }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid
                    container
                    item
                    direction='column'
                    alignItems='flex-start'>
                    <LocalHospitalIcon />
                    <Typography
                        variant='subtitle1'>
                        Deaths
                    </Typography>
                    <Typography
                        className={classes.subtitle}
                        variant='subtitle2'>
                        {<NumberFormat
                            value={totalDeaths}
                            displayType={'text'}
                            thousandSeparator={true}
                        />}
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default DeathCases
