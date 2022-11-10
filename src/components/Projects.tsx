// import {onCleanup, createSignal, Component} from "solid-js"
import 'solid-js';
class CardData {
    readonly title: string;
    readonly summary: string;
    readonly link: string;

    constructor(title: string, summary: string, link: string) {
        this.title = title
        this.summary = summary
        this.link = link
    }
}

const data: CardData[] = [
    new CardData('ChessEngine', 'A UCI-compatible Chess Engine written in C++20 with an Android and WearOS Interface', 'https://github.com/TheLuckyCoder/ChessEngine'),
    new CardData('zip_password_cracker', 'A multithreaded bruteforce-based zip password cracker written in Rust', 'https://github.com/TheLuckyCoder/zip_password_cracker'),
    new CardData('hello', 'A multithreaded bruteforce-based zip password cracker written in Rust', 'https://github.com/TheLuckyCoder/zip_password_cracker'),

];

function Card(cardData: CardData) {
    return (
    <div className="card" >
        <div className="card-content">
            <p className="text-slate-200">{cardData.title}</p>
        </div>
    </div>
    )
}

export const Projects = () => {

    /* let ref = undefined;
    const pos = useMousePosition();
    const [el, setEl] = createSignal(ref);
    const relative = createPositionToElement(ref, () => pos);

    createEffect(() => {
        if (!ref.current) return

        for (const child of (ref.current.children as HTMLCollection)) {
            const rect = child.getBoundingClientRect();
            const xPx = `${x - rect.left}px`
            const yPx = `${y - rect.top}px`
            
            child.style.setProperty(
                "--mouse-x",
                x !== 0 ? xPx : null
            );

            child.style.setProperty(
                "--mouse-y",
                yPx
            );
        }
    }) */

    return <div >
        <div id="cards" className="grid grid-row-3 grid-flow-col gap-2 px-6" >
            {data.map((cardData) => {
                return <>{Card(cardData)}</>
            })}
        </div>
    </div>
};
