import React from "react";

const renderButton = () => (
    <button
        className="btn btn-warning text-light my-1 mr-2"
        title="Si vous pensez que ces outils le méritent... Merci !"
        type="submit"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            height="1em"
            fill="#f8f9fa"
        >
            <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
        </svg>{" "}
        Faire un don ?
    </button>
);

const renderHiddenInput = () => (
    <>
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="Q2XYVFP4EEX2J" />
    </>
);
export default () => (
    <div>
        <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
        >
            {renderButton()}
            {renderHiddenInput()}
        </form>
    </div>
);
