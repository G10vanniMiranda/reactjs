import { Card } from "./../../components/Card"
export function Product(){
    
    var url1 = "https://m.media-amazon.com/images/I/51+qnZm7V7L.jpg";
    var url2 = "https://http2.mlstatic.com/D_NQ_NP_898803-MLB47866434694_102021-O.webp";

    return(
        <div>
            <Card img_url={url1} description="PS5 Slim" assessment="5" price="4500" />
            <Card img_url={url2} description="PS4 Slim" assessment="5" price="2500" />
        </div>
    )
}