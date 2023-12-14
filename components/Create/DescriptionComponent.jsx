import ReactMarkdown from 'react-markdown';

const DescriptionComponent = ({component}) => {
    return (
        <div className="block max-w-sm rounded-xl p-5 border border-cyan-950 text-center shadow-custom hover:border-cyan-300 hover:bg-orange-300">
            <ReactMarkdown className="prose">{component.decription}</ReactMarkdown>
        </div>
    );
}

export default DescriptionComponent;