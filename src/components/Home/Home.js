import React, {useEffect, useState} from 'react'
import {Container, Grow, Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {getPosts} from '../../actions/posts'
import Posts from '../posts/Posts'
import Form from '../form/Form'
import useStyles from '../../styles'

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes= useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return (
        <div>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3} >
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </div>
    )
}

export default Home
