import React from 'react';
import {PagesType} from "../../data/dataState";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PropsType> = ({pages}) => {
    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()


    const obClickBackHandler = () => {
        navigate(-1)
    }

    const obClickMainHandler = () => {
        navigate('/page/0')
    }

    return (
        <div>
            {location.pathname === '/page/0' && <div>Secret text</div>}
            {pages[Number(params.id)]
                ?
                <div>
                    {pages[Number(params.id)].heading}
                    {pages[Number(params.id)].about}
                    <div>
                        <button onClick={obClickBackHandler}>Back</button>
                        <button onClick={obClickMainHandler}>Main page</button>
                    </div>
                </div>
                : <Error404/>
            }

        </div>
    );
};

