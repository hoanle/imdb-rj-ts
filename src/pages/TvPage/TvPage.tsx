import React, { useState, useEffect } from 'react';
import './TvPage.css';
import Configuration from '../../types/Configuration';
import { Container, Col, Row } from 'react-bootstrap';
import TvSection from '../../components/TvSection/TvSection';
import TopTvs from './../../components/TopTvs/TopTvs';

type TvPageProps = {
    configuration: Configuration | undefined;
}

const TvPage = (props : TvPageProps) => {

    return (
        <Container className="TvPage-main-div col-12">
            <Row>
                <Col className="TvPage-tvsection-div col-md-9 col-sm-12 col-xs-12">
                    <TvSection configuration={props.configuration} />
                </Col>
                <Col className="TvPage-toptv-div col-md-3 col-sm-12 col-xs-12">
                    <TopTvs configuration={props.configuration} />
                </Col>
            </Row>

        </Container>
    );
}

export default TvPage;