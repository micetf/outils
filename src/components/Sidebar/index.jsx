import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectTool } from "../../actions/";
import SearchBar from "./Searchbar";
import Link from "./Link";
import { filterItems } from "../../utils/searchUtils";

/**
 * Composant qui affiche la liste des outils avec filtrage amélioré
 * Utilisant Tailwind CSS pour le design
 */
class ToolsList extends Component {
    constructor(props) {
        super(props);
        props.selectTool(props.tools[0]);
    }

    /**
     * Filtre la liste des outils selon le terme de recherche
     * @returns {Array} - Liste filtrée des outils
     */
    filterList() {
        if (!this.props.term) return this.props.tools;

        return filterItems(this.props.tools, this.props.term, [
            "title",
            "description",
            "keywords",
        ]);
    }

    /**
     * Génère le contenu JSX pour une mise en évidence des termes correspondants
     * @param {string} text - Texte à afficher
     * @param {boolean} highlight - Indique si le texte doit être mis en évidence
     * @returns {string|JSX.Element} - Texte avec mise en évidence si nécessaire
     */
    highlightMatch(text, highlight = false) {
        if (!highlight || !this.props.term) return text;
        return <span className="font-semibold text-blue-700">{text}</span>;
    }

    /**
     * Affiche la liste des outils filtrés
     * @param {Array} tools - Liste des outils à afficher
     * @returns {Array<JSX.Element>} - Éléments de liste rendus
     */
    renderList(tools) {
        return tools.map((tool) => {
            const hasSearchResult =
                tool.searchResult && tool.searchResult.matches;
            const keywordsMatched =
                hasSearchResult && tool.searchResult.matches.keywords;
            const tooltipKeywords = keywordsMatched || tool.keywords;
            const keywordsText = Array.isArray(tooltipKeywords)
                ? tooltipKeywords.join(", ")
                : tooltipKeywords;

            return (
                <li
                    key={tool.url}
                    className="group border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
                >
                    <div className="relative">
                        <Link
                            url="#"
                            handleClick={() => this.props.selectTool(tool)}
                            className="block p-3 w-full text-left"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    {this.highlightMatch(
                                        tool.title,
                                        hasSearchResult &&
                                            tool.searchResult.matches.title
                                    )}
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>

                            {/* Tooltip contenu (mots-clés) - affiché au survol */}
                            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-0 -bottom-1 transform translate-y-full bg-gray-800 text-white text-xs p-2 rounded shadow-lg max-w-xs z-10">
                                <div className="font-medium mb-1">
                                    Mots-clés:
                                </div>
                                <div className="text-gray-300">
                                    {keywordsText}
                                </div>
                                <div className="absolute top-0 left-4 transform -translate-y-full border-8 border-transparent border-b-gray-800"></div>
                            </div>
                        </Link>
                    </div>
                </li>
            );
        });
    }

    render() {
        const tools = this.filterList();

        return (
            <div className="w-full md:w-1/3 lg:w-1/4">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3">
                        <h2 className="text-white font-medium">
                            Outils disponibles
                        </h2>
                    </div>

                    <SearchBar />

                    <div className="px-4 py-2 bg-gray-50 border-t border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">
                                Résultats
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                {tools.length}
                            </span>
                        </div>
                    </div>

                    <ul className="max-h-[440px] overflow-y-auto divide-y divide-gray-200">
                        {this.renderList(tools)}
                    </ul>
                </div>
            </div>
        );
    }
}

ToolsList.propTypes = {
    /** Liste complète des outils */
    tools: PropTypes.array.isRequired,
    /** Terme de recherche actuel */
    term: PropTypes.string.isRequired,
    /** Action pour sélectionner un outil */
    selectTool: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    tools: state.toolsList,
    term: state.searchTerm,
});

export default connect(mapStateToProps, { selectTool })(ToolsList);
