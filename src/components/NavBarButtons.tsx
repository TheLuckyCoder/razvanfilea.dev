import type { Component } from "solid-js";

interface INavBarButtonParams {
    content: string, link: string
}

export const NavBarButton = ({ content, link }: INavBarButtonParams) => {
    return <a href={link} class="py-3 px-5 md:mx-1 rounded-lg select-none hover:bg-primary text-primary font-bold uppercase
        hover:bg-opacity-30 hover:underline decoration-wavy decoration-2 underline-offset-8 hover:underline-offset-4
        transition-all duration-200 ease-linear">
        {content}
    </a>
};

interface ISocialMediaButtonParams {
    link: string, children: any
}

export const SocialMediaButton = ({ link, children }: ISocialMediaButtonParams) => {
    return <a href={link} target="_blank" rel="noopener" class="py-3 px-5 mx-0.5 md:mx-1 w-6 h-6 rounded-lg bg-primary bg-opacity-20
        hover:bg-opacity-50
        transition-all duration-200 ease-linear">
        {children}
    </a>
};
