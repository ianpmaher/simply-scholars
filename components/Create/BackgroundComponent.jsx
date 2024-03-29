import Button from "../Button";

const BackgroundComponent = ({ component, children }) => {

    // const hex = component.color;
    const hex = "#f0f0f0";
    console.log(hex)
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
        <div className="flex flex-col justify-center items-center my-0 mx-auto p-2 cursor-pointer rounded-xl" style={{ backgroundColor: hex}}>
            {children}
            <StyledButton>Apply Now</StyledButton>
        </div>
    );
}

export default BackgroundComponent;