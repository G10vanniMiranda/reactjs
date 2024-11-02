import "./employer.css"
import { NavBar } from "../../components/NavBar";

export function Employer(){
    return(
        <div className="container">
            <NavBar />
            <header>
                <h2 id="titulo">Ep. #153</h2>
                <p></p>
            </header>

            <main className="main1">
                <section className="text">
                    <div className="div-text">
                        <h3>Como a inovação</h3>
                        <h3>pode transformar</h3>
                        <h3>pequenos negócio</h3>
                    </div>

                    <ul>
                        <li className="li-item">
                            <img id="img99" src="image/item-1.png" alt="não carregou" />
                            <p>cndl</p>
                        </li>
                        <li className="li-item">
                            <img className="img99" src="image/item-1.png" alt="" />
                            <p>fcdl</p>
                        </li>
                        <li className="li-item">
                            <img className="img99" src="image/item-1.png" alt="" />
                            <p>cdl</p>
                        </li>
                        <li className="li-item">
                            <img className="img99" src="image/item-1.png" alt="" />
                            <p>cdl</p>
                        </li>
                        <li className="li-item">
                            <img className="img99" src="image/item-2.png" alt="" />
                            <p>spc</p>
                        </li>
                    </ul>
                </section>

                <section className="card">
                    <div className="card-header">
                        <button>
                            <i class="fa-regular fa-circle-left"></i>
                        </button>
                        <img src="image/logo.png" alt="" />
                        <button className="card-header-btn">...</button>
                    </div>
                    <div className="card-container">
                        <div className="box-shadow">
                            <img src="https://avatars.githubusercontent.com/u/134082250?v=4" alt="" />
                            <div className="card-description">
                                <img id="micro" src="image/micro.png" alt="" />
                                <div className="card-description-text">
                                    <h3>Giovanni Miranda</h3>
                                    <p>Desenvolvedor Full Web</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    )
}