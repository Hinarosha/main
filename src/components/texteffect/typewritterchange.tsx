import "./typewritterchange.css";

export default function Typewriter() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet" />

            <h1 aria-label="Hi! I'm a developer">
                Hi! I'm a&nbsp;<span className="typewriter"></span>
            </h1>

            <h1 aria-label="Hi! I'm a developer">
                Hi! I'm a&nbsp;<span className="typewriter thick"></span>
            </h1>

            <h1 aria-label="Hi! I'm a developer">
                Hi! I'm a&nbsp;<span className="typewriter nocaret"></span>
            </h1>
        </div>
    )
}