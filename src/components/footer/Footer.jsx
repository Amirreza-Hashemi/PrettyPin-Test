import Container from "../common/Container";
import FooterNewsletter from "./FooterNewsletter";
import FooterLinkColumn from "./FooterLinkColumn";
import FooterBottom from "./FooterBottom";
import footerLinks from "../../data/footerLinks";

const Footer = () => {
    return (
        <footer className="bg-gray-50 pt-10 sm:pt-14">
            <Container>
                <FooterNewsletter />

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
                    <div>
                        <span className="text-xl font-bold text-gray-900 sm:text-2xl">زیبانو</span>
                        <p className="mt-3 max-w-xs text-sm text-gray-500">
                            زیبایی در جزئیات توست. جدیدترین اکسسوری‌های مو و زیورآلات برای هر سلیقه.
                        </p>
                    </div>

                    {footerLinks.map((column) => (
                        <FooterLinkColumn key={column.id} title={column.title} links={column.links} />
                    ))}
                </div>

                <div className="mt-10 pb-8 sm:mt-14">
                    <FooterBottom />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;