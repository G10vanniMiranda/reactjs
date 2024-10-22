import "./Card.css"

export function Card( { img_url, description, assessment, price } ){
    return(
        <div className="card">
            <img width={100} src={img_url} alt="imagem do produto" />
            <h3> {description} </h3>
            <p> {assessment} (100) </p>
            <p> {price} </p>
        </div>
    )
}