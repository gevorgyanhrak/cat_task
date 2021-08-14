import React from "react";
import {DEFAULT_LIMIT} from "../../helpers/helpers";
import "./index.scss"

export default function Images({data, setLimit, limit}) {
    return (
        <>
            {
                data.map((d) => (
                    <div key={d.id} className='image_block'>
                        <img src={d.url} className='image-responsive' alt=""/>
                        {d.categories ?
                            <p>Category: {d.categories?.map((cat, index) => {
                                return <span key={index}>{cat.name}</span>
                            })}</p>
                            :
                            <p>Category empty</p>
                        }
                    </div>
                ))
            }

            {
             <div className="row">
                    <button className='learn_more' onClick={() => {
                        setLimit(limit + DEFAULT_LIMIT)
                    }}> Learn more
                    </button>
                </div>
            }
        </>
    )
}