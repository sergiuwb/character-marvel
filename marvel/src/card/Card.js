import React from 'react';

const Card = ({props}) =>

        <div className="card">
            <img
                src={`${props?.thumbnail.path}/standart_fantastic.${props?.thumbnail.extension}`}
                alt={'name'}
            />
            <p>{props?.name}</p>
            <p>{props?.description}</p>
        </div>

export default Card;
