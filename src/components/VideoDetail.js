import React from 'react'

export default function VideoDetail({video}) {

    if(!video) return <div className="text-white text-center p-3">Loading....</div>
    console.log(video)
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <iframe frameBorder="0" height="500" width="100%" src={videoSrc} />
            <div className="card py-3 px-2">
                <h5 className="card-title px-2">{video.snippet.title}</h5>
                <h5 className="card-title px-2">{video.snippet.channelTitle}</h5>
                <p className="card-body">  {video.snippet.description} </p>
            </div>
        </div>
    )
}
