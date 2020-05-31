import React, { useState, useEffect } from 'react';

import MovieSection from '../../components/MovieSection/MovieSection';
import TopMovies from './../../components/TopMovies/TopMovies';
import './HomePage.css';
import Configuration from '../../types/Configuration';
import { Container, Col, Row } from 'react-bootstrap';

type HomePageProps = {
    configuration: Configuration | undefined;
}

const HomePage = (props: HomePageProps) => {

    return (
        <Container className="HomePage-main-div col-12">
            <Row>
                <Col className="HomePage-moviesection-div col-md-9 col-sm-12 col-xs-12">
                    <MovieSection configuration={props.configuration} />
                </Col>
                <Col className="HomePage-topmovies-div col-md-3 col-sm-12 col-xs-12">
                    <TopMovies configuration={props.configuration} />
                </Col>
            </Row>

        </Container>
    );
}

export default HomePage;