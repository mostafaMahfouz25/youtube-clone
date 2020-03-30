import React, { Component } from 'react'
import VideoItem from './VideoItem'

export class VideoList extends Component {

    

    render() {
        if(!this.props.videos.length) return <div className="text-white text-center p-3">Loading....</div>
        const {onSelectedVideo} = this.props
        return (
            <React.Fragment>
                {this.props.videos.map((item,index)=>( 
                        <VideoItem  item={item} key={index} onSelectedVideo={onSelectedVideo} />
                ))}
            </React.Fragment>
        )
    }
}

export default VideoList
