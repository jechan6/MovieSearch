import React from 'react';
import {searchMovies} from '../util/search_util';
import MovieIndexItem from './movie_index_item';
import Pagination from "react-js-pagination";

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }
    componentDidMount() {
        searchMovies(1)
            .then(res => {
                console.log(res.results);
                this.setState({results: res.results});
            })
    }
    render() {
        if(this.state.results.length === 0) return null;
        return(
            <div className="IndexContainer">
                {this.state.results.map((movie, idx) => (
                        <MovieIndexItem movie={movie} key={idx}/>
                ))}
                 <Pagination
                    activePage={5}
                    itemsCountPerPage={20}
                    totalItemsCount={100}
                    pageRangeDisplayed={5}
                    />
            </div>
        )
    }
};

export default MovieIndex;