import "solid-js";

interface ICatergoyTitleProps {
    content: string
    id: string
};

export const CategoryTitle = (props: ICatergoyTitleProps) => {
    return <h2 id={props.id} class='text-white text-4xl px-16 py-8' > {props.content} </h2>;
};
