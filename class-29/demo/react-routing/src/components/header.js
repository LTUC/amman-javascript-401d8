import {Link} from 'react-router-dom';
export default (props) => {

    return (
        <header>
            <h1>Kashkoul</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/render">Render</Link>
                    </li>
                    <li>
                        <Link to="/render/1">Render One item</Link>
                    </li>
                    <li >
                        <a href="/about-us">Href About Us Reload</a>
                    </li>
                </ul>
            </nav>
        </header>
    )

};
