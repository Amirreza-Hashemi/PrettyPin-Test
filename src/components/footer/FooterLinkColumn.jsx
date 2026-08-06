const FooterLinkColumn = ({ title, links }) => {
    return (
        <div>
            <h4 className="text-sm font-bold text-gray-900 sm:text-base">{title}</h4>
            <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                    <li key={link}>
                        <a href="#" className="text-sm text-gray-500 transition hover:text-pink-500">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinkColumn;