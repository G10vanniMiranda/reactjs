import { Nav } from "./../Nav"
import { Button } from "./../Button"

export function Header(){
    var url = "https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo-0.png"
    return(
        <div className="header">
            <img width={200} src={url} alt="Logo do site" />
            <Nav />
            <Button value="Login"/>
        </div>
    )
}