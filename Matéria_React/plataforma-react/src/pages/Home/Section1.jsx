import { Link } from "react-router-dom";

export function Section1() {
    return (
        <div className="home">
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="/section1">Section 1</Link>
                </li>
                <li>
                    <Link to="/section2">Section 2</Link>
                </li>
                <li>
                    <Link to="/section3">Section 3</Link>
                </li>
                <h2>Section 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia consectetur porro eos amet? At repellendus veritatis, cum unde iure quidem a commodi officiis possimus aperiam ratione maiores blanditiis libero.</p>
            </ul>
             
            
        </div>
    );
}