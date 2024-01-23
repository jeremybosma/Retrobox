"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function LandingSection() {
    const [operatingSystem, setOperatingSystem] = useState("");

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        if (userAgent.includes("Win")) {
            setOperatingSystem("Windows");
        } else if (userAgent.includes("Linux")) {
            setOperatingSystem("Linux");
        } else {
            setOperatingSystem("MacOS");
        }
    }, []);

    return (
        <section>
            <div className="cta">

                <div className="headers">
                    <h1>One app. All your emulators.</h1>
                    <p className="subtext">Retrobox supports various emulators like Dolphin, Ryujinx & more.</p>
                    <p className="subtext">Available on Windows, MacOS & Linux</p>
                </div>

                <div className="buttons">
                    <a className="downloadbutton" href="#">Download{operatingSystem && " for " + operatingSystem}</a>
                    <a className="discord" href="#">Discord</a>
                </div>

                <Image
                    src="/tv.png"
                    className="tv"
                    alt="placeholder"
                    width={908}
                    height={483}
                />
            </div>
        </section>
    )
};