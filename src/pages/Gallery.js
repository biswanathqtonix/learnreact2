import React, { Component } from 'react'
import axios from 'axios'

export default class Gallery extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:"Bitu",
            email:'bitu@gmail.com',
            images:''
        }
    }

    changeName = () =>{
        this.setState({
            name:'John'
        })
    }

    test = () =>{
        console.log(this.state);
    } 


    componentDidMount(){
        axios.get('https://picsum.photos/v2/list?limit=15')
        .then(response=>{
            this.setState({
                images:response.data
            })
        })
    }


    render() {
        return (
            <>
            
               <h2>Gallery</h2>



               <div className="row">
                    <div className="col-md-3">
                        <img src="" alt=""/>
                    </div>
                </div>


                <p>{this.state.name}</p>
                <p>{this.state.email}</p>

                <button className="btn btn-primary" onClick={this.changeName}>Click Here</button>

                <button className="btn btn-info" onClick={this.test}>Test</button>
                
            </>
        )
    }
}
