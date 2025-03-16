import React from "react";

/**
 * Composant d'espacement pour la navbar
 * Crée un espace vide de la hauteur de la navbar pour éviter que le contenu ne soit caché
 * @returns {JSX.Element} Div d'espacement
 */
function NavbarSpacer() {
    return <div className="h-16 md:h-16"></div>;
}

export default NavbarSpacer;
