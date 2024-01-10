import ReactMarkdown from 'react-markdown';

const DescriptionComponent = ({component}) => {
    return (
        <div className="block max-w-sm rounded-xl p-5 text-black border-cyan-950 text-center shadow-custom bg-custom-white">
            <ReactMarkdown className="prose text-black">{component.description}</ReactMarkdown>
        </div>
    );
}

export default DescriptionComponent;