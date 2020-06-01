import './ListTv.css';

import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

import Configuration from '../../types/Configuration';
import TvResult from '../../types/TvResult';
import TvItem from '../TvItem/TvItem';
import TvApis from '../../apis/TvApis';


type ListTvProps = {
    configuration: Configuration | undefined;
}

type TvMap = Map<number, TvResult[]>;

const ListTv = (props: ListTvProps) => {
    const [shouldRender, setSetRender] = useState(false);
    const [activePage, setActivePage] = useState(0);

    const [tvs, setTvs] = useState(new Map<number, TvResult[]>());

    const getPopularTvs = (page: number) => {
        TvApis.getPopularTvList(page).then((response: any) => {
            tvs?.set(page - 1, response.data.results);
            setTvs(tvs);
            setActivePage(page - 1);
            setSetRender(true);
        }).catch((error: any) => {
            console.log("Error happened");
        });
    }

    const handlePageClick = (selectedItem) => {
        let selectedPage = selectedItem.selected;
        console.log(selectedPage)
        if (tvs.get(selectedPage) == null) {
            setSetRender(false);
            getPopularTvs(selectedPage + 1)
            setActivePage(selectedPage);
        } else {
            setActivePage(selectedPage);
            setSetRender(true);
        }

    }

    useEffect(() => {

        if (props.configuration != undefined) {
            getPopularTvs(activePage + 1);
        }

        return () => {

        }
    }, [props.configuration, shouldRender])

    return (
        <Container className="ListTv-div">
            <Row className="ListTv-pagination-container">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'ListTv-pagination-break'}
                    pageCount={100}
                    initialPage={0}
                    forcePage={activePage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    pageClassName="ListTv-pagination"
                    previousClassName="ListTv-pagination"
                    nextClassName="ListTv-pagination"
                    containerClassName="pagination"
                    activeClassName={'ListTv-paginattion-active'}
                />
            </Row>
            <Row className="ListTv-pagination-container">
                {
                    shouldRender ?
                        tvs.get(activePage)?.map(tv => {
                            return (<div key={tv.id} className="col-md-4 sol-sm-12 ListMovie-item-div">
                                <TvItem tv={tv} configuration={props.configuration} />
                            </div>)
                        })
                        : <div className="expanded">Loading</div>
                }
            </Row>

        </Container>
    );

}

export default ListTv;