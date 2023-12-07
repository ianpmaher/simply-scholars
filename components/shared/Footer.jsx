const Footer = ({ className }) => (
    <footer className={className}>
        <p className="text-xs">🌐 {new Date().toLocaleDateString()} Ian Maher</p>
    </footer>
);

export default Footer;
