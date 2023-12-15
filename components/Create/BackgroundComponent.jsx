import Button from "../Button";

const BackgroundComponent = ({ component, children }) => {

    const hex = component.backgroundColor;

    const StyledButton = ({ children }) => {
        return (
            hex ? <Button
                style={{ backgroundColor: hex }}
                onClick={() => console.log("clicked")}
            >
                {children}
            </Button>
        : <Button
            onClick={() => console.log("clicked")}
        >
            {children}
        </Button>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center my-0 mx-auto p-5" style={{ backgroundColor: hex}}>
            {children}
            <StyledButton>Apply Now</StyledButton>
        </div>
    );
}

export default BackgroundComponent;