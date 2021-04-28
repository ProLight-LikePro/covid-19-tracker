import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import DeathCases from './DeathCases'
import New from './New'
import Cases from './Cases'
import RecoverCases from './RecoverCases'

const useStyles = makeStyles(theme => ({
    grid: {
        width: theme.spacing(37),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.up(600)]: {
            width: '100%',
        }
    }
}))

const Card = ({
    totalCases,
    totalDeaths,
    totalRecovered,
    newCases,
}) => {

    const classes = useStyles();

    return (
        <Grid
            className={classes.grid}
            container
            item
            justify='center'>
            <New newCases={newCases} />
            <Cases totalCases={totalCases} />
            <DeathCases totalDeaths={totalDeaths} />
            <RecoverCases totalRecovered={totalRecovered} />
        </Grid>
    )
}

export default Card
