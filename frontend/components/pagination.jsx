import React from 'react';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            totalPages: props.totalPages
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if(this.state.totalPages !== nextProps.totalPages) {
            this.setState({totalPages: nextProps.totalPages});
        }
    }
    handleClick(e) {
        let page = e.target.innerHTML;
        this.setState({currentPage: parseInt(page)});
        this.props.changePage(page);
    }
    render() {
        let currentPage = this.state.currentPage;
        let leftMax = currentPage - 2;
        let rightMax = currentPage + 2;
        let pageNumbers = [currentPage];
        for(let i = currentPage-1; i>= leftMax && i > 0; i--) pageNumbers.push(i);
        for(let i = currentPage+1; i<= rightMax && i <= this.state.totalPages; i++) pageNumbers.push(i);
        pageNumbers.sort();
        const renderPageNumbers = pageNumbers.map((num) => {
            return(
                <li
                    key={num}
                    onClick={this.handleClick}
                    className={this.state.currentPage === num ? "activePage" : ""}
                >
                    {num}
                </li>
            )
        })
        return(
            <div className="pageContainer">
                <div className="pages">
                    <div>Page {this.state.currentPage} of {this.state.totalPages}</div>
                    <ul className="pageNumbers">
                        {renderPageNumbers}
                    </ul>
                </div>
            </div>
        )
    }
};

export default Pagination;