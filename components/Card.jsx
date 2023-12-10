const Card = ({ children }) => {
    
    
    return (
        <div className="shadow-custom h-full w-3/4 flex flex-col flex-wrap justify-center items-center my-0 mx-auto p-1 hover:ring-8">
            {children}
        </div>
    );
}

export default Card;