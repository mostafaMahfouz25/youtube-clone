import React from 'react';

export default function VideoItem({item,onSelectedVideo}) {

    return (
        <React.Fragment>
 
            <div className="card mb-3" style={{cursor:"pointer"}} >

                <div className="row no-gutters" onClick={()=>onSelectedVideo(item)}>
                    <div className="col-md-4">
                    <img src={item.snippet.thumbnails.default.url} className="card-img" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.snippet.title}</h5>
                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
