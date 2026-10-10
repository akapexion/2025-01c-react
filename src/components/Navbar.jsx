import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
                <div className="bg-blue-700 text-white flex justify-between p-5">
                    <div>Logo</div>
                    <div>
                        <ul className="flex gap-4">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default Navbar;