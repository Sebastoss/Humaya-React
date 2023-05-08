import "../styles/Contacto.css";

const Contacto = () => {
  return (
    <div className="row g-0">
        <div className="col-sm-12 col-md-5 p-2 image-prods contactoImage">
            
        </div>
        <div className="col-sm-12 col-md-7 p-5 bg-white contactoTextColor">
            <p className="fs-5 fw-bold">Déjanos tu consulta y nuestro personal se pondrá en contacto a la brevedad:</p>
           <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label fs-4 text-uppercase fw-light">Nombre:</label>
                <input type="text" className="form-control text-white rounded-0" style={{backgroundColor: "#856C4F"}} id="exampleFormControlInput1" placeholder="" />
            </div>
           <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label fs-4 text-uppercase fw-light">Email:</label>
                <input type="email" className="form-control text-white rounded-0" style={{backgroundColor: "#856C4F"}} id="exampleFormControlInput1" placeholder="" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fs-4 text-uppercase fw-light">Consulta:</label>
                <textarea className="form-control text-white rounded-0" style={{backgroundColor: "#856C4F"}}  id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" className='btnContacto  text-uppercase fw-bolder px-3 py-2 mx-auto d-block'>Enviar</button>
        </div>
    </div>
  )
}

export default Contacto