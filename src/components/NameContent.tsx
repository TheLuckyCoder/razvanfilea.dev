import 'solid-js';

export const NameContent = () => {
    return <div class="h-[95vh] -z-50">
        <h1 class="center whitespace-nowrap text-white font-serif text-6xl">
            Hello, I am <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
                <span class="relative text-white">Răzvan</span>
            </span>.
        </h1>
    </div>
}