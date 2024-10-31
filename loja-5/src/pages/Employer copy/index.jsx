import "./employer.css"
import { NavBar } from "../../components/NavBar";

export function Employer(){
    return(
        <div className="container">
            <NavBar />
            <header>
                <h2>Ep. #153</h2>
                <p></p>
            </header>

            <main className="main1">
                <section className="text">

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
                        <img src="https://avatars.githubusercontent.com/u/134082250?v=4" alt="" />
                        <div className="card-description">
                            <img id="micro" src="image/micro.png" alt="" />
                            <div className="card-description-text">
                                <h3>Giovanni Miranda</h3>
                                <p>Desenvolvedor Full Web</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    )
}