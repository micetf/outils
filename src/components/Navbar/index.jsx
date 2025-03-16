// src/components/Navbar/index.js
import React from "react";

export default () => {
    // Construction de l'email avec prévention anti-spam
    const emailParts = [
        "mailto:",
        "webmaster",
        "@",
        "micetf.fr",
        "?",
        "subject=",
        `Au sujet de ${window.location.pathname}`,
    ];
    const emailContact = emailParts.join("");

    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white fixed top-0 left-0 w-full z-10">
            {/* Logo/Brand avec fil d'Ariane */}
            <div className="flex items-center">
                <a
                    href="https://micetf.fr"
                    className="text-xl font-semibold hover:text-gray-300 transition-colors"
                    title="Accueil"
                >
                    MiCetF
                </a>
                <span className="mx-2 text-gray-400">&gt;</span>
                <a
                    href="#"
                    className="text-lg hover:text-gray-300 transition-colors"
                    title="Recherche sur le site par mots clés"
                >
                    Chercher un outil
                </a>
            </div>

            {/* Boutons à droite */}
            <div className="flex items-center space-x-2">
                {/* Bouton contact (email) */}
                <button
                    onClick={() => (window.location.href = emailContact)}
                    className="bg-gray-600 p-2 rounded hover:bg-gray-700 transition-colors"
                    title="Contacter le webmaster"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="h-5 w-5 fill-current"
                    >
                        <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"></path>
                    </svg>
                </button>

                {/* Bouton don Paypal */}
                <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_top"
                    className="inline-block"
                >
                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded transition-colors"
                        title="Si vous pensez que ces outils le méritent... Merci !"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            className="h-5 w-5 fill-current"
                        >
                            <path d="m10 3.22-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"></path>
                        </svg>
                    </button>
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input
                        type="hidden"
                        name="hosted_button_id"
                        value="Q2XYVFP4EEX2J"
                    />
                </form>

                {/* Bouton index */}
                <a
                    href="https://micetf.fr/index/"
                    className="bg-gray-600 p-2 rounded hover:bg-gray-700 transition-colors"
                    title="Liste des outils rangés par ordre alphabétique"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="h-5 w-5 fill-current"
                    >
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden bg-gray-600 p-2 rounded hover:bg-gray-700 transition-colors ml-2"
                    aria-label="Menu"
                    onClick={() => {
                        const mobileMenu =
                            document.getElementById("mobile-menu");
                        mobileMenu.classList.toggle("hidden");
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="h-5 w-5 fill-current"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className="absolute top-full left-0 right-0 bg-gray-800 hidden flex-col w-full md:hidden"
            >
                <a
                    href="https://micetf.fr/"
                    className="px-4 py-2 hover:bg-gray-700 transition-colors"
                    title="Accueil"
                >
                    MiCetF
                </a>
                <a
                    href="https://micetf.fr/index/"
                    className="px-4 py-2 hover:bg-gray-700 transition-colors"
                    title="Liste des outils rangés par ordre alphabétique"
                >
                    Liste des outils
                </a>
                <a
                    href={emailContact}
                    className="px-4 py-2 hover:bg-gray-700 transition-colors"
                    title="Pour contacter le webmaster..."
                >
                    Contact
                </a>
            </div>
        </nav>
    );
};
