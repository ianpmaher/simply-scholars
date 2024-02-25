const Card = ({ className, children, variant }) => {
    const baseStyle =
        "flex flex-col flex-wrap items-center justify-center rounded-2xl transition-all duration-300 ease-in-out object-contain";
    const variantStyle = {
        primary: "rounded-2xl bg-[#4A4C60] shadow-xl p-2 flex flex-col items-center justify-center hover:scale-110",
        secondary: "bg-gray-400 hover:bg-white p-0 shadow-xl md:w-32 md:h-32 w-24 h-24",
        container: "rounded-2xl bg-white shadow-xl p-2 flex-grow flex flex-col items-center justify-center",
    };

    return <div className={`${baseStyle} ${variantStyle[variant]} ${className}`}>{children}</div>;
};

export default Card;
