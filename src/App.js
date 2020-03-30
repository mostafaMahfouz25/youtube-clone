import React, { Component } from 'react';
import Youtube from './api/Youtube';

import {Search,VideoDetail,VideoList,Loading} from './components/index';



class App extends Component {

  state={
    load:false,
    videos:[],
    selectedVideo:''
  }

  handleSubmit = (text) =>{

    const getData = async ()=>
    {
       this.setState({
         load:true,
       })
      const res = await Youtube.get('search',{params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyBWTyDTDZAvEWWWEu3B0cgT0tzHvf65SW4',
        q:text
        }});

        this.setState({
          load:false,
          videos:res.data.items,
          selectedVideo:res.data.items[0]
        })
      
    }
    
    getData();

  } 


  onSelectedVideo = (item)=>{
    // console.log(item)
    this.setState({selectedVideo:item})
  }

    render()
    {
      const {selectedVideo,videos} = this.state;
      return (
        <div className="App">
            <h1 className="text-center text-primary display-4 border-bottom pb-2">Youtube Clone App</h1>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <Search   onFormSubmit={this.handleSubmit} />
                </div>

                {
                  this.state.load ? <div className="col-sm-12"><Loading /></div> :''
                }
                

                <div className="col-md-8">
                  <VideoDetail video={selectedVideo}  />
                </div>
    
    
                <div className="col-md-4">
                  <VideoList videos={videos} onSelectedVideo={this.onSelectedVideo} />
                </div>
    
    
                
              </div>
            </div>
        </div>
      );
    }
 
}

export default App;
