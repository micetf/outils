import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Composant Navbar pour la page Outils (galerie de description des outils)
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.pageTitle - Titre de la page actuelle
 * @param {string} props.selectedDomain - Domaine sélectionné (optionnel)
 * @returns {JSX.Element} Composant Navbar
 */
function Navbar({ pageTitle = "Recherche thématique", selectedDomain = "" }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Gestion du scroll pour modifier l'apparence de la navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Construction de l'email avec prévention anti-spam
    const handleContact = () => {
        window.location.href = `mailto:webmaster@micetf.fr?subject=Au sujet de ${
            document.location.pathname
        }${selectedDomain ? " - " + selectedDomain : ""}`;
    };

    return (
        <nav
            className={`${
                isScrolled ? "bg-gray-900 shadow-lg py-2" : "bg-gray-800 py-3"
            } text-white fixed top-0 left-0 right-0 w-full z-20 transition-all duration-300`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Breadcrumb navigation */}
                    <div className="flex items-center space-x-2">
                        {/* Logo + "MiCetF" qui renvoie à micetf.fr */}
                        <a
                            href="https://micetf.fr"
                            className="flex items-center text-white hover:text-blue-300 transition-colors duration-200"
                            title="Retour à l'accueil MiCetF"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8 mr-2 text-blue-400"
                            >
                                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                            </svg>
                            <span className="hidden md:inline text-xl font-semibold">
                                MiCetF
                            </span>
                        </a>

                        {/* Séparateur */}
                        <span className="text-gray-400 hidden md:inline select-none">
                            &gt;
                        </span>

                        {/* Titre de la page */}
                        <button
                            className="text-sm md:text-lg font-normal md:font-semibold truncate text-white hover:text-blue-300 transition-colors duration-200 border-none bg-transparent cursor-pointer"
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            title="Remonter en haut de page"
                        >
                            {pageTitle}
                        </button>

                        {/* Domaine sélectionné (si présent) */}
                        {selectedDomain && (
                            <>
                                <span className="text-gray-400 hidden md:inline select-none">
                                    &gt;
                                </span>
                                <span className="text-sm md:text-lg text-blue-300 font-normal truncate">
                                    {selectedDomain}
                                </span>
                            </>
                        )}
                    </div>

                    {/* Navigation principale - visible sur desktop */}
                    <div className="hidden md:flex items-center space-x-2">
                        {/* Boutons d'action - Ordre optimisé pour UX */}
                        <div className="flex space-x-2">
                            {/* 1. Index (liste alphabétique) */}
                            <a
                                href="https://micetf.fr/index/"
                                className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md transition-colors duration-200"
                                title="Liste des outils par ordre alphabétique"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    className="h-5 w-5 fill-current"
                                >
                                    <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm6 0a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zm7-1a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
                                </svg>
                                <span className="hidden lg:inline">
                                    Index A-Z
                                </span>
                            </a>

                            {/* 2. Contact (email) */}
                            <button
                                onClick={handleContact}
                                className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-md transition-colors duration-200"
                                title="Contacter le webmaster"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    className="h-5 w-5 fill-current"
                                >
                                    <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"></path>
                                </svg>
                                <span className="hidden lg:inline">
                                    Contact
                                </span>
                            </button>

                            {/* 3. Don Paypal */}
                            <form
                                action="https://www.paypal.com/cgi-bin/webscr"
                                method="post"
                                target="_top"
                                className="inline-block"
                            >
                                <button
                                    type="submit"
                                    className="flex items-center gap-1 bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded-md transition-colors duration-200"
                                    title="Si vous pensez que ces outils le méritent... Merci !"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        className="h-5 w-5 fill-current"
                                    >
                                        <path d="m10 3.22-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"></path>
                                    </svg>
                                    <span className="hidden lg:inline">
                                        Faire un don
                                    </span>
                                </button>
                                <input
                                    type="hidden"
                                    name="cmd"
                                    value="_s-xclick"
                                />
                                <input
                                    type="hidden"
                                    name="hosted_button_id"
                                    value="Q2XYVFP4EEX2J"
                                />
                            </form>
                        </div>
                    </div>

                    {/* Bouton menu mobile */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            aria-label={
                                isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
                            }
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 px-2 bg-gray-800 mt-2 rounded-lg shadow-xl transition-all duration-300">
                        <div className="space-y-4">
                            {/* Navigation mobile */}
                            <a
                                href="https://micetf.fr/index/"
                                className="flex items-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    className="h-5 w-5 fill-current"
                                >
                                    <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm6 0a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zm7-1a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
                                </svg>
                                <span>Index alphabétique</span>
                            </a>

                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={handleContact}
                                    className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        className="h-5 w-5 fill-current"
                                    >
                                        <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"></path>
                                    </svg>
                                    <span>Contact</span>
                                </button>

                                <form
                                    action="https://www.paypal.com/cgi-bin/webscr"
                                    method="post"
                                    target="_top"
                                    className="inline-block"
                                >
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            className="h-5 w-5 fill-current"
                                        >
                                            <path d="m10 3.22-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"></path>
                                        </svg>
                                        <span>Faire un don</span>
                                    </button>
                                    <input
                                        type="hidden"
                                        name="cmd"
                                        value="_s-xclick"
                                    />
                                    <input
                                        type="hidden"
                                        name="hosted_button_id"
                                        value="Q2XYVFP4EEX2J"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    pageTitle: PropTypes.string,
    selectedDomain: PropTypes.string,
};

export default Navbar;
