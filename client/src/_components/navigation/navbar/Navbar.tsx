import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <h4>Recently played games</h4>
            </div>
            <div>
                <input type="text" placeholder="Search..." />
                <button>+</button>
            </div>
        </div>
    );
}

export default Navbar;