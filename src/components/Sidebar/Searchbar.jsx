import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterTools, resetSearch } from "../../actions/";

/**
 * Barre de recherche améliorée avec design Tailwind CSS et bonnes pratiques UX/UI
 * @param {Object} props - Propriétés du composant
 * @returns {JSX.Element} - Composant rendu
 */
const SearchBar = ({ term, filterTools, resetSearch }) => {
    return (
        <div className="px-2 py-2 w-full">
            <div className="relative w-full">
                {/* Icône de recherche à gauche */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>

                {/* Champ de saisie */}
                <input
                    type="text"
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400"
                    placeholder="Rechercher un outil..."
                    value={term}
                    onChange={(event) => filterTools(event.target.value)}
                    aria-label="Rechercher un outil"
                />

                {/* Bouton de réinitialisation (seulement affiché quand il y a du texte) */}
                {term && (
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                        onClick={resetSearch}
                        aria-label="Effacer la recherche"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                    </button>
                )}
            </div>

            {/* Compteur de résultats */}
            <div className="mt-2 text-sm text-gray-600 font-medium">
                Filtrer par mot-clé, titre ou description
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    /** Terme de recherche actuel */
    term: PropTypes.string.isRequired,
    /** Action pour filtrer les outils */
    filterTools: PropTypes.func.isRequired,
    /** Action pour réinitialiser la recherche */
    resetSearch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    term: state.searchTerm,
});

export default connect(mapStateToProps, { filterTools, resetSearch })(
    SearchBar
);
