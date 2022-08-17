import React from 'react';

const Card = ({props}) =>

        <div className="main-card">
            <div className="card">
            <img
                src={`${props?.thumbnail.path}/standard_fantastic.${props?.thumbnail.extension}`}
                alt={'name'}
            />
            <p className="name">{props?.name}</p>
            <p className="descr">{props?.description}</p>
            </div>
        </div>

export default Card;
