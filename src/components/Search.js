import React, { Component } from 'react'

export class Search extends Component {

    state={
        searchText:''
    }


    handleChange = (e)=>{
        this.setState({searchText:e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        
        const {searchText} = this.state;
        const {onFormSubmit} = this.props;
        onFormSubmit(searchText);
    }

    render() {
        return (
            <div className="form-group border p-5">
                <form onSubmit={this.handleSubmit}>
                    <label className="text-white">Type Any Word Here</label>
                    <input className="form-control" id="search-text" onChange={this.handleChange} value={this.state.searchText} placeholder="Type Here ...." />

                </form>
            </div>
        )
    }
}

export default Search
