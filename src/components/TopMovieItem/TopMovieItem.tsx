import React from 'react';
import MovieResult from './../../types/MovieResult';
import Image from 'react-bootstrap/Image';
import Configuration from '../../types/Configuration';
import { Container, Row, Col } from 'react-bootstrap';
import './TopMovieItem.css';

type TopMovieItemProps = {
    movie: MovieResult,
    configuration: Configuration | undefined,
}

const TopMovieItem = (props: TopMovieItemProps) => {
    let url = `${props.configuration?.images.base_url}${props.configuration?.images.poster_sizes[0]}${props.movie.poster_path}`

    if (props.configuration == undefined || props.movie == null) {
        return <div>Loading</div>
    } else {
        return (
            <Container className='TopMovieItem-div'>
                <Row className="col-12 no-padding">
                    <Col className="col-6">
                        <Image className="TopMovieItem-image" src={url} />
                    </Col>
                    <Col className="TopMovieItem-detail col-6">
                        <h6 className="TopMovieItem-detail-title">{props.movie.title}</h6>
                        <h6 className="TopMovieItem-detail-score">{props.movie.vote_average}</h6>
                    </Col>

                </Row>

            </Container>
        )
    }
}

export default TopMovieItem;