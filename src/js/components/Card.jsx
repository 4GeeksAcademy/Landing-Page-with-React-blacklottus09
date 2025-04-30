import React from 'react'

const Card = () => {
    return (
        <div className="row">
            <div className="card p-3">
                <img src="https://picsum.photos/500/325" className="card-img-top" alt="Random image from lorem picsum"/>
                <div className="card-body text-center">
                    <h5 className="card-title ">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <a href="#" className="btn btn-primary ">Find out more</a>
                </div>
            </div>
        </div>
    )
    
}
export default Card ;