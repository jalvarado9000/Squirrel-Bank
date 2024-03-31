import React from 'react'

const Label = ({ title, titles }) => {

    /* TODO:
    1. find a way to just insert a word and displaying instead of using this that is more complicated */

    /* checking if title or titles is being used and if they are display the content */
    let displayed = titles ? titles : title;
    return (
        <>
            {/* displays labels on the app like account number, what does this sections do of the dashboard etc */}
            <div className="text-center">
                <h2>{displayed}</h2>
            </div>
        </>
    )
}

export default Label;