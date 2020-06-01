import React, { useEffect, useState } from 'react';
import Configuration from '../../types/Configuration';
import './ListMovie.css';
import MovieApis from './../../apis/MovieApis';
import MovieResult from '../../types/MovieResult';
import MovieItem from '../MovieItem/MovieItem';
import { Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';


type ListMovieProps = {
    configuration: Configuration | undefined;
}

type MovieMap = Map<number, MovieResult[]>;

const ListMovie = (props: ListMovieProps) => {
    const [shouldRender, setSetRender] = useState(false);
    const [activePage, setActivePage] = useState(0);

    const [movies, setMovies] = useState(new Map<number, MovieResult[]>());

    const getPopularMovies = (page: number) => {
        MovieApis.getPopularMovieList(page).then((response: any) => {
            movies?.set(page - 1, response.data.results);
            setMovies(movies);
            setActivePage(page - 1);
            setSetRender(true);
        }).catch((error: any) => {
            console.log("Error happened");
        });
    }

    const handlePageClick = (selectedItem) => {
        let selectedPage = selectedItem.selected;
        console.log(selectedPage)
        if (movies.get(selectedPage) == null) {
            setSetRender(false);
            getPopularMovies(selectedPage + 1)
            setActivePage(selectedPage);
        } else {
            setActivePage(selectedPage);
            setSetRender(true);
        }

    }

    useEffect(() => {

        if (props.configuration != undefined) {
            getPopularMovies(activePage + 1);
        }

        return () => {

        }
    }, [props.configuration, shouldRender])

    return (
        <Container className="ListMovie-div">
            <Row className="ListMovie-pagination-container">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'ListMovie-pagination-break'}
                    pageCount={100}
                    initialPage={0}
                    forcePage={activePage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    pageClassName="ListMovie-pagination"
                    previousClassName="ListMovie-pagination"
                    nextClassName="ListMovie-pagination"
                    containerClassName="pagination"
                    activeClassName={'ListMovie-paginattion-active'}
                />
            </Row>
            <Row className="ListMovie-pagination-container">
                {
                    shouldRender ?
                        movies.get(activePage)?.map(movie => {
                            return (<div key={movie.id} className="col-md-3 sol-sm-12 ListMovie-item-div">
                                <MovieItem movie={movie} configuration={props.configuration} />
                            </div>)
                        })
                        : <div>Loading</div>
                }
            </Row>

        </Container>
    );

}

export default ListMovie;