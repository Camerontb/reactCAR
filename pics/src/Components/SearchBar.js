import React from "react";
import ButtonGroup from "./ButtonGroup";
class searchBar extends React.Component{
    state= {term:''}

    onFormSubmit=(event)=>{
        event.preventDefault()
        // console.log(this.state.term)
        this.props.onSubmit(this.state.term)
    }

  

    render(){
        return(
            <div>
                <h1 className= 'head'> A Simple Photo Search</h1>
                <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                             type="text" 
                             value={this.state.term} 
                             onChange={ e => this.setState({term: e.target.value})}
                        />
                        {/* <ButtonGroup/> */}
                    </div> 
                </form>
            </div>




            </div>
            
        )
    }
}

export default searchBar