
const CustomTheme = {
    accordion: {
        defaultProps: {
            className: "",
            animate: {
                unmount: {scale: 0.9},
                mount: {scale: 1},
            },
            disabled: false,
        },
        styles: {
            base: {
                container: {
                    display: "block",
                    position: "relative",
                    width: "w-full",
                    background:"bg-white dark:bg-[#31363F]",
                    mt:"mt-2",
                    rounded:"rounded-md",
                    shadow:"shadow-sm"
                },
                header: {
                    initial: {
                        display: "flex",
                        justifyContent: "justify-between",
                        alignItems: "items-center",
                        width: "w-full",
                        py: "py-4",
                        px:"px-2",
                        borderWidth: "border-b-0",
                        color: "text-blue-gray-700 dark:text-gray-200",
                        fontSmoothing: "antialiased",
                        fontFamily: "font-sans",
                        fontSize: "text-sm",
                        textAlign: "text-left",
                        fontWeight: "font-semibold",
                        lineHeight: "leading-snug",
                        userSelect: "select-none",
                        hover: "hover:text-blue-gray-900 dark:hover:text-gray-400",
                        transition: "transition-colors",
                    },
                    icon: {
                        ml: "ml-4",
                    },
                },
                body: {
                    display: "block",
                    width: "w-full",
                    pt:"pt-0",
                    px:"px-2",
                    color: "text-gray-700 dark:text-gray-400",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-sm",
                    fontWeight: "font-light",
                    lineHeight: "leading-normal",
                },
                disabled: {
                    pointerEvents: "pointer-events-none",
                    opacity: "opacity-50",
                },
            },
        },
    },
};
export default CustomTheme;