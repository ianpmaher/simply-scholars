const Card = ({ children }) => {
    return (
        <div className="ring-4 h-full w-3/4 flex flex-col justify-center items-center mx-auto my-0 hover:ring-8">
            {children}
        </div>
    );
}

export default Card;