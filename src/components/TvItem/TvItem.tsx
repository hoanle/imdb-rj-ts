import './TvItem.css';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import Configuration from '../../types/Configuration';
import TvResult from '../../types/TvResult';
import TvDetailPopOver from '../TvDetailPopOver/TvDetailPopOver';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';

type TvItemProps = {
    tv: TvResult,
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

const TvItem = (props: TvItemProps) => {
    let url = `${props.configuration?.images.base_url}${props.configuration?.images.poster_sizes[3]}${props.tv.poster_path}`
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

    if (props.configuration == undefined || props.tv == null) {
        return <div>Loading</div>
    } else {
        return (
            <Container className="TvItem-div">
                <Image src={url} className="TvItem-image" />

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
                    <TvDetailPopOver tv={props.tv} />
                </Popover>

                <div className="TvItem-detail">
                    <div className="TvItem-detail-title" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} >{props.tv.name}</div>
                        Genre: <div className="TvItem-detail-genre">{getMovieGenre(props.tv.genre_ids)}</div>
                        First air date: <div className="TvItem-detail-release-date">{props.tv.first_air_date}</div>
                </div>
            </Container>
        )
    }
}

export default TvItem;