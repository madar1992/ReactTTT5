import React from "react";

const GreetWithDestructingProps2 = props => {

    const {name, heroname} = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroname}
            </h1>
        </div>
    )
}
export default GreetWithDestructingProps2