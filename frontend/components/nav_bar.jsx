import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSearch(this.state.title);
    }
    updateInput(e) {
        this.setState({
            title: e.target.value
        })
    }
    render() {
        return(
            <div className="navBar">
                <h1>Movie Search</h1>
                <form>
                    <input type="text" name="title" onChange={e => this.updateInput(e)} placeholder="Enter movie title"/>
                    <button className="searchButton" onClick={this.handleSubmit.bind(this)}>Search</button>
                </form>
            </div>
        )
    }
  
};

export default NavBar;