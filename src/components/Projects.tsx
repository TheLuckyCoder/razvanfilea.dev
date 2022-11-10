import 'solid-js';
import { createSignal, Component, createEffect, For } from "solid-js"
import Styles from '../styles/Projects.module.css'

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
        <div class={Styles.card} >
            <div class={Styles.cardContent}>
                <p class="text-slate-200">{cardData.title}</p>
            </div>
        </div>
    )
}

export const Projects = () => {
    let ref: any;
    const [pos, setPos] = createSignal({ x: 0, y: 0 });

    function handleMouseMove(event: { clientX: any; clientY: any; }) {
        setPos({
            x: event.clientX,
            y: event.clientY
        });
    }

    createEffect(() => {
        if (!ref) return

        for (const child of (ref.children as HTMLCollection)) {
            const rect = child.getBoundingClientRect();
            const xPx = `${pos().x - rect.left}px`
            const yPx = `${pos().y - rect.top}px`

            child.style.setProperty(
                "--mouse-x",
                pos().x !== 0 ? xPx : null
            );

            child.style.setProperty(
                "--mouse-y",
                yPx
            );
        }
    })

    return <div id={Styles.cards} class="grid grid-row-3 grid-flow-col gap-2 px-6" ref={ref} onMouseMove={handleMouseMove}>
        <For each={data}>
            {(item) => Card(item)}
        </For>
    </div>
};
