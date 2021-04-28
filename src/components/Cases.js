import React from 'react';
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';

//import icons
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: '#fdca40',
        color: '#fff',
        width: theme.spacing(17),
        marginBottom: theme.spacing(3),
        position: 'relative',
        '& .MuiSvgIcon-root': {
            position: 'absolute',
            right: theme.spacing(1)
        },
        '& .MuiCardContent-root:last-child': {
            paddingBottom: '16px'
        },
        [theme.breakpoints.up(600)]: {
            marginBottom: theme.spacing(0),
            marginRight: theme.spacing(3),
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

const Cases = ({ totalCases }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid
                    container
                    item
                    direction='column'
                    alignItems='flex-start'>
                    <WarningIcon />
                    <Typography
                        variant='subtitle1'>
                        Cases
                    </Typography>
                    <Typography
                        className={classes.subtitle}
                        variant='subtitle2'>
                        {<NumberFormat
                            value={totalCases}
                            displayType={'text'}
                            thousandSeparator={true}
                        />}
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Cases
