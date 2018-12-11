import React from 'react';
import {searchMovies, searchMovie} from '../util/search_util';
import MovieIndexItem from './movie_index_item';
import Pagination from './pagination';
import NavBar from './nav_bar';

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            totalPages: 1,
            title: "",
            movieSearched: false
        }
        this.changePage = this.changePage.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount() {
        this.changePage(1);
    }
    changePage(num) {
        if(!this.state.movieSearched) {
            searchMovies(num)
            .then(res => {
                this.setState({results: res.results, totalPages: res.total_pages});
            })
        } else {
            this.handleSearch(this.state.title, num);
        }
        
    }
    handleSearch(title,num) {
       
      
        searchMovie(title,num)
        .then(res => {
            if(res.results.length > 0) {
                this.setState({movieSearched: true, title: title});
                this.setState({results: res.results, totalPages: res.total_pages});
            } else {
                alert("Movie does not exist, please try another search");
            }
        });
    }
    render() {
        if(this.state.results.length === 0) return null;
        return(
            <div className="IndexContainer">
                <NavBar handleSearch={this.handleSearch}/>
                {this.state.results.map((movie, idx) => (
                        <MovieIndexItem movie={movie} key={idx}/>
                ))}
                <Pagination changePage={this.changePage} totalPages={this.state.totalPages}/>
            </div>
        )
    }
};

export default MovieIndex;