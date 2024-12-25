import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="d-flex align-items-center header overlay-top">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo" >
                                <img src={logo} />
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </header>
        </>
    )
}

export default Header;