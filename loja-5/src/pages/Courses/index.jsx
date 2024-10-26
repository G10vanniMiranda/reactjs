import "./Courses.css"
import { NavBar } from "../../components/NavBar";

export function Courses() {
    return (
        <div>
            <NavBar />
            <h1>Cursos</h1>

            <div className="courses-body">

                <div className="card">
                    <img width={150} src="https://openwebsolutions.in/blog/wp-content/uploads/2018/01/banner-1.jpg" alt="" />
                    <div className="description">
                        <h3>HTML5 - CSS3</h3>
                        <p>20 hours</p>
                    </div>
                </div>

                <div className="card">
                    <img width={150} src="https://openwebsolutions.in/blog/wp-content/uploads/2018/01/banner-1.jpg" alt="" />
                    <div className="description">
                        <h3>HTML5 - CSS3</h3>
                        <p>20 hours</p>
                    </div>
                </div>

                <div className="card">
                    <img width={150} src="https://openwebsolutions.in/blog/wp-content/uploads/2018/01/banner-1.jpg" alt="" />
                    <div className="description">
                        <h3>HTML5 - CSS3</h3>
                        <p>20 hours</p>
                    </div>
                </div>

                <div className="card">
                    <img width={150} src="https://openwebsolutions.in/blog/wp-content/uploads/2018/01/banner-1.jpg" alt="" />
                    <div className="description">
                        <h3>HTML5 - CSS3</h3>
                        <p>20 hours</p>
                    </div>
                </div>

            </div>
        </div>
    )
}