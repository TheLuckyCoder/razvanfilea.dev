interface NavBarButtonParams {
    content: string, link: string
}

export const NavBarButton = ({ content, link }: NavBarButtonParams) => {
    return <a href={link} className="py-3 px-5 mx-1 rounded-lg select-none hover:bg-primary text-primary font-bold uppercase
        hover:bg-opacity-30 hover:underline decoration-wavy decoration-3 underline-offset-8
        transition-all duration-200 ease-linear">
        {content}
    </a>
};

interface SocialMediaButton {
    link: string, children: JSX.Element
}

export const SocialMediaButton = ({ link, children }: SocialMediaButton) => {
    return <a href={link} rel="noopener" target="_blank" className="py-3 px-5 mx-1 w-6 h-6 rounded-lg bg-primary bg-opacity-20
        hover:bg-opacity-50
        transition-all duration-200 ease-linear">
        {children}
    </a>
};
