import 'solid-js';
import { createEffect, createSignal, For } from "solid-js";
import Styles from '../styles/Projects.module.css';
import { FiExternalLink } from "solid-icons/fi";

class CardData {
    readonly title: string;
    readonly summary: string;
    readonly githubSource: string;
    readonly link?: string;

    constructor(title: string, summary: string, githubSource: string, link?: string) {
        this.title = title
        this.summary = summary
        this.githubSource = githubSource
        this.link = link
    }
}

const data: CardData[] = [
    new CardData('ChessEngine', 'A UCI-compatible Chess Engine written in C++20 with an Android and WearOS Interface', 'https://github.com/TheLuckyCoder/ChessEngine'),
    new CardData('zip_password_cracker', 'A multithreaded bruteforce-based zip password cracker written in Rust', 'https://github.com/TheLuckyCoder/zip_password_cracker'),
    new CardData('A&A Consult Website', 'Website and backend server for the A&A Consult Company', 'https://github.com/TheLuckyCoder/aaconsl.com', 'https://aaconsl.com'),
    new CardData('hello', 'A multithreaded bruteforce-based zip password cracker written in Rust', 'https://github.com/TheLuckyCoder/zip_password_cracker'),

];

function Card(cardData: CardData) {
    return (
        <a class={Styles.card} href={cardData.githubSource} target='_blank' rel="noopener">
            <div class={`${Styles.cardContent}`}>
                <FiExternalLink size={20} color="#00b0ff" class='ml-auto opacity-66' />

                <p class="text-slate-200 text-xl mb-1 mt-auto">{cardData.title}</p>
                <p class="text-slate-400">{cardData.summary}</p>
            </div>
        </a>
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

    return <>
        <h2 id='Projects' class='text-white text-4xl px-16 py-8'>Featured Projects</h2>

        <div id={Styles.cards} class="grid grid-cols-3 grid-flow-row gap-1 px-6" ref={ref} onMouseMove={handleMouseMove}>
            <For each={data}>
                {(item) => Card(item)}
            </For>
        </div>
    </>
};
