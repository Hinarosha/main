import { useEffect, useState } from "react";
import "./typewritter.css";

interface TypewriterProps {
    /** Plain text content to display with the typewriter animation */
    text?: string;
    /** Raw HTML string (with tags like <br/>, <a>...) to animate */
    html?: string;
    /** Optional extra className(s) to customize layout/size */
    className?: string;
    /** Milliseconds between each visible character */
    speedMs?: number;
}

// Typewriter: reusable text effect component.
// Can operate on plain text or on simple HTML (keeps tags intact while
// revealing only the text characters one by one).
export default function Typewriter({ text, html, className, speedMs = 50 }: TypewriterProps) {
    const [index, setIndex] = useState(0);

    const source = (html ?? text ?? "").toString();
    const isHtml = typeof html === "string";

    useEffect(() => {
        setIndex(0);
        if (!source) return;

        let timeoutId: number | undefined;

        const step = () => {
            setIndex((prev) => {
                if (prev >= source.length) return prev;

                let i = prev;
                let advanced = false;

                // When in HTML mode, skip over whole tags instantly,
                // but count only "real" characters between tags.
                while (i < source.length && !advanced) {
                    const ch = source[i];

                    if (isHtml && ch === "<") {
                        const close = source.indexOf(">", i);
                        if (close === -1) {
                            // malformed HTML, just jump to end
                            i = source.length;
                        } else {
                            i = close + 1;
                        }
                    } else {
                        i += 1;
                        advanced = true;
                    }
                }

                return i;
            });

            timeoutId = window.setTimeout(step, speedMs);
        };

        timeoutId = window.setTimeout(step, speedMs);

        return () => {
            if (timeoutId !== undefined) {
                window.clearTimeout(timeoutId);
            }
        };
    }, [source, isHtml, speedMs]);

    const classes = ["cursor", className].filter(Boolean).join(" ");

    if (!source) {
        return <p className={classes} />;
    }

    if (isHtml) {
        return (
            <p className={classes}>
                <span
                    // Reveal only a valid prefix of the HTML string
                    dangerouslySetInnerHTML={{ __html: source.slice(0, index) }}
                />
                <span className="cursor-bar" />
            </p>
        );
    }

    // Plain text mode
    return (
        <p className={classes}>
            <span>{source.slice(0, index)}</span>
            <span className="cursor-bar" />
        </p>
    );
}