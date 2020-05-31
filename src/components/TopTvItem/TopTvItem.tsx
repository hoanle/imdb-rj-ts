import React from 'react';
import MovieResult from './../../types/MovieResult';
import Image from 'react-bootstrap/Image';
import Configuration from '../../types/Configuration';
import { Container, Row, Col } from 'react-bootstrap';
import './TopTvItem.css';
import TvResult from '../../types/TvResult';

type TopTvItemProps = {
    tv: TvResult,
    configuration: Configuration | undefined,
}

const TopTvItem = (props: TopTvItemProps) => {
    let url = `${props.configuration?.images.base_url}${props.configuration?.images.poster_sizes[0]}${props.tv.poster_path}`

    if (props.configuration == undefined || props.tv == null) {
        return <div>Loading</div>
    } else {
        return (
            <Container className='TopTvItem-div'>
                <Row className="col-12 no-padding">
                    <Col className="col-6">
                        <Image className="TopTvItem-image" src={url} />
                    </Col>
                    <Col className="TopTvItem-detail col-6">
                        <h6 className="TopTvItem-detail-title">{props.tv.name}</h6>
                        <h6 className="TopTvItem-detail-score">{props.tv.vote_average}</h6>
                    </Col>

                </Row>

            </Container>
        )
    }
}

export default TopTvItem;