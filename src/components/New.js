import React from 'react';
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';

//import icons
import NewReleasesIcon from '@material-ui/icons/NewReleases';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: '#81b214',
        color: '#fff',
        width: theme.spacing(17),
        marginBottom: theme.spacing(3),
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
        [theme.breakpoints.up(600)]: {
            marginBottom: theme.spacing(0),
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

const New = ({ newCases }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid
                    container
                    item
                    direction='column'
                    alignItems='flex-start'>
                    <NewReleasesIcon />
                    <Typography
                        variant='subtitle1'>
                        New Cases
                    </Typography>
                    <Typography
                        className={classes.subtitle}
                        variant='subtitle2'>
                        {<NumberFormat
                            value={newCases}
                            displayType={'text'}
                            thousandSeparator={true}
                        />}
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default New
