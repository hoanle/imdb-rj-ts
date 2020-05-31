import './MovieItem.css';

import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import Configuration from '../../types/Configuration';
import MovieDetailPopOver from '../MovieDetailPopOver/MovieDetailPopOver';
import MovieResult from './../../types/MovieResult';

type MovieItemProps = {
    movie: MovieResult,
    configuration: Configuration | undefined,
}

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

const MovieItem = (props: MovieItemProps) => {
    let url = `${props.configuration?.images.base_url}${props.configuration?.images.poster_sizes[3]}${props.movie.poster_path}`

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const getMovieGenre = (genre_ids: number[]) => {
        return props.configuration?.genres.filter(x => {
            return genre_ids.filter(g => g == x.id).length > 0;
        }).map(a => a.name).join(', ');
    }

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget)
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    if (props.configuration == undefined || props.movie == null) {
        return <div>Loading</div>
    } else {
        return (
            <Container className="MovieItem-div">
                <Image src={url} className="MovieItem-image" />
                <Popover
                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <MovieDetailPopOver movie={props.movie} />
                </Popover>

                <div className="MovieItem-detail">
                    <div className="MovieItem-detail-title" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} >{props.movie.title}</div>
                        Genre: <div className="MovieItem-detail-genre">{getMovieGenre(props.movie.genre_ids)}</div>
                        Release date: <div className="MovieItem-detail-release-date">{props.movie.release_date}</div>
                </div>
            </Container>
        )
    }
}

export default MovieItem;