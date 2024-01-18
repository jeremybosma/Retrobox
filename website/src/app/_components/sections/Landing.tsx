import Image from "next/image";

export function LandingSection() {
    return <section>
        <div className="cta">

            <div className="headers">
                <h1>One app. All your emulators.</h1>
                <p className="subtext">Retrobox supports various emulators like Dolphin, Ryujinx & more.</p>
                <p className="subtext">Available on Windows, MacOS & Linux</p>
            </div>

            <div className="buttons">
                <a className="downloadbutton" href="#">Download for MacOS</a>
                <a className="discord" href="#">Discord</a>
            </div>

        </div>
    </section>
}