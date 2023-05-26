import React from "react";

const GreetWithDestructingProps1 = ({name,heroname}) => {

    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroname}
            </h1>
        </div>
    )
}
export default GreetWithDestructingProps1