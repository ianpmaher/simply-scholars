const TitleComponent = ({ component }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">{component.title}</h2>
        </div>
    );
}

export default TitleComponent;