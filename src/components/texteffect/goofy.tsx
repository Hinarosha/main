import "./goofy.css";

export default function Goofy() {
    return (
        <div className="content">

            <div className="marquee">
                <div className="marquee_blur" aria-hidden="true">
                    <p className="marquee_text">Lorem ipsum dolor sit amet!</p>
                </div>
                <div className="marquee_clear">
                    <p className="marquee_text">Lorem ipsum dolor sit amet!</p>
                </div>
            </div>

            <p className="text">
                I wanted to make a Gooey Marquee type effect, tried a couple of things, and ended up using two layers of text, one with the effect, and a clean one on top so that the text remains readable.
            </p>
        </div>

    )
}