export const ToolIcon = ({ component }: { component: React.ElementType }) => {
    const IconComponent = component;
    return (
        <>
            <IconComponent className="size-10 fill-[url(#toolIconGradient)]"/>
            <svg className="absolute size-0">
                <linearGradient id="toolIconGradient">
                    <stop offset="0%" stopColor="rgb(110 231 183)" />
                    <stop offset="100%" stopColor="rgb(56 189 248)" />
                </linearGradient>
            </svg>
        </>
    )
}