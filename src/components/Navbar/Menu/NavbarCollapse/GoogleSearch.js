import React from "react";

const action = "https://cse.google.com/cse/publicurl";
const cx = "partner-pub-3083664774752222:3949962842";

const renderInputText = () => (
    <input
        className="form-control mr-sm-2"
        type="text"
        id="q"
        name="q"
        title="Recherche"
        alt="Recherche"
        placeholder="Recherche"
        maxLength="256"
    />
);
const renderInputHidden = () => (
    <input type="hidden" id="cx" name="cx" value={cx} />
);

const renderButtonSubmit = () => (
    <div>
        <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            id="searchSubmit"
            name="submit"
            alt="Chercher"
            title="Soumettre la recherche"
        >
            Chercher
        </button>
    </div>
);
export default () => (
    <form
        className="form-inline my-2 my-lg-0"
        method="get"
        title="Formulaire de recherche"
        action={action}
    >
        {renderInputText()}
        {renderInputHidden()}
        {renderButtonSubmit()}
    </form>
);
