/**
 * Utilitaires pour la recherche améliorée
 */

/**
 * Supprime les accents d'une chaîne de caractères
 * @param {string} str - Chaîne de caractères à normaliser
 * @returns {string} - Chaîne sans accents
 */
export const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

/**
 * Vérifie si un terme de recherche est présent dans un ensemble de propriétés d'un objet
 * @param {Object} item - Objet à vérifier
 * @param {string} term - Terme de recherche (sans accents, en minuscules)
 * @param {Array<string>} fields - Liste des propriétés à vérifier
 * @param {Object} options - Options de recherche
 * @returns {Object} - Résultat de la recherche avec indicateur de correspondance et score
 */
export const searchInItem = (item, term, fields, options = {}) => {
    // Options par défaut
    const config = {
        prefixWeight: 2, // Poids plus important pour une correspondance au début
        exactMatchWeight: 3, // Poids pour une correspondance exacte
        keywordsWeight: 1.5, // Poids plus important pour les mots-clés
        ...options,
    };

    if (!term) return { match: true, score: 0, matches: {} };

    // Initialisation du résultat
    let match = false;
    let score = 0;
    const matches = {};

    // Pour chaque champ à rechercher
    fields.forEach((field) => {
        // Gestion spéciale pour les mots-clés (tableau)
        if (field === "keywords" && Array.isArray(item[field])) {
            const keywordsMatches = [];

            item[field].forEach((keyword) => {
                const normalizedKeyword = removeAccents(keyword.toLowerCase());

                // Correspondance exacte
                if (normalizedKeyword === term) {
                    match = true;
                    score += config.exactMatchWeight * config.keywordsWeight;
                    keywordsMatches.push(keyword);
                }
                // Correspondance au début (préfixe)
                else if (normalizedKeyword.startsWith(term)) {
                    match = true;
                    score += config.prefixWeight * config.keywordsWeight;
                    keywordsMatches.push(keyword);
                }
                // Correspondance partielle
                else if (normalizedKeyword.includes(term)) {
                    match = true;
                    score += config.keywordsWeight;
                    keywordsMatches.push(keyword);
                }
            });

            if (keywordsMatches.length > 0) {
                matches[field] = keywordsMatches;
            }
        }
        // Pour les champs textuels (chaînes)
        else if (typeof item[field] === "string") {
            const normalizedValue = removeAccents(item[field].toLowerCase());

            // Correspondance exacte
            if (normalizedValue === term) {
                match = true;
                score += config.exactMatchWeight;
                matches[field] = item[field];
            }
            // Correspondance au début (préfixe)
            else if (normalizedValue.startsWith(term)) {
                match = true;
                score += config.prefixWeight;
                matches[field] = item[field];
            }
            // Correspondance partielle
            else if (normalizedValue.includes(term)) {
                match = true;
                score += 1;
                matches[field] = item[field];
            }
        }
    });

    return { match, score, matches };
};

/**
 * Filtre une liste d'éléments selon un terme de recherche
 * @param {Array} items - Liste d'éléments à filtrer
 * @param {string} term - Terme de recherche
 * @param {Array<string>} fields - Champs sur lesquels effectuer la recherche
 * @returns {Array} - Liste filtrée et triée par pertinence
 */
export const filterItems = (items, term, fields) => {
    if (!term) return items;

    const normalizedTerm = removeAccents(term.toLowerCase());

    // Appliquer la recherche sur chaque élément
    const matchedItems = items
        .map((item) => {
            const searchResult = searchInItem(item, normalizedTerm, fields);
            return {
                ...item,
                searchResult,
            };
        })
        .filter((item) => item.searchResult.match)
        .sort((a, b) => b.searchResult.score - a.searchResult.score);

    return matchedItems;
};
