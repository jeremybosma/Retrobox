import "./Sidebar.css";
import { useState } from "react";

function Sidebar() {
    const [isDolphinCollapsed, setIsDolphinCollapsed] = useState(true);

    const toggleDolphinCollapse = () => {
        setIsDolphinCollapsed(!isDolphinCollapsed);
    };

    return (
        <div className="sidebar">
            <h3>Retrobox</h3>
            <button onClick={toggleDolphinCollapse}>Dolphin</button>

            {!isDolphinCollapsed && (
                <>
                    <button>Wii</button>
                    <button>Gamecube</button>
                </>
            )}
            <button>Ryujinx</button>
        </div>
    );
}

export default Sidebar;