import '../styles/Productos.css';

const Productos = (props) => {
  return (
    <div>
        
        {props.pos === "1" ? 
        <div className="card bg-dark">
            <div className="row g-0">
                <div className="col-md-6 image-prods" style={{backgroundImage: `url(${props.image})`}}>
                    {/* <img src={props.image} className='image-prods' alt="" /> */}
                </div>
                <div className="col-md-6 d-flex">
                    <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title text-uppercase text-center">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <p className="card-text"><small className="text-muted">{props.text2}</small></p>
                        <button type="button" className='border border-3 border-warning bg-dark text-warning text-uppercase fw-bolder px-3 mx-auto d-block rounded btn-info-prods'>+ Info</button>
                    </div>
                </div>
            </div>
        </div>
        : props.pos === "2" ?
            <div className="card bg-dark">
            <div className="row g-0 d-flex flex-row-reverse">
                <div className="col-md-6 image-prods" style={{backgroundImage: `url(${props.image})`}}>
                    {/* <img src={props.image} className='image-prods' alt="" /> */}
                </div>
                <div className="col-md-6 d-flex">
                    <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title text-uppercase text-center">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <p className="card-text"><small className="text-muted">{props.text2}</small></p>
                        <button type="button" className='border border-3 border-warning bg-dark text-warning text-uppercase fw-bolder px-3 mx-auto d-block rounded btn-info-prods'>+ Info</button>
                    </div>
                </div>
            </div>
        </div>
        : null }
    </div>

  )
}

export default Productos