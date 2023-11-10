import React from 'react';
import {PagesType} from "../../data/dataState";
import {useLocation, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PropsType> = ({pages}) => {
    //useParams берёшь все id которые находятся в site т.е он считывает данные после : '<Route path={'/page/:id'}' берём вообще во всём проекте ссылки дресные
    const params = useParams()
    console.log(params.id)
    // useLocation делает почти тоже самое что и парамс но только показывает нам весь адресс
    const location = useLocation()
    console.log(location)

    return (
        <div>
            {location.pathname === '/page/0' && <div>Secret text</div>}
            {pages[Number(params.id)]
                ?
                <div>
                    {pages[Number(params.id)].heading}
                    {pages[Number(params.id)].about}
                </div>
                : <Error404/>
            }

        </div>
    );
};

