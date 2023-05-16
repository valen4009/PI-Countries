import React from "react";
import Card from "../Card/Card";

function Cards({ characters, onClose }) {
    return (
        <div>
            {
                characters.map(({ id, name, flag, continent  }) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            flag={flag}
                            continent={continent}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards;