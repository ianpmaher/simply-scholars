const BackgroundComponent = ({ component, children }) => {

    const hex = component.background;

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full h-20 rounded-xl" style={{ backgroundColor: hex }}>
                {children}
            </div>
        </div>
    );
}

export default BackgroundComponent;