import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="section1">Section 1</Link>
                </li>
                <li>
                    <Link to="section2">Section 2</Link>
                </li>
                <li>
                    <Link to="section3">Section 3</Link>
                </li>
            </ul>
             
            
        </div>
    );
}