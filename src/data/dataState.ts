export const dataState: DataStateType = {
    pages:
    [
        {
            heading: 'Цикл while',
            about: 'Цикл while имеет следующий синтаксист',
        },
        {
            heading: 'Цикл for',
            about: 'Цикл for имеет следующий синтаксист',
        },
        {
            heading: "Конструкция \"Switch\"",
            about: 'Конструкция Switch заменяет собой нескалько if',
        },
    ]
}

export type DataStateType = {
    pages: Array<PagesType>
}

export type  PagesType = {
    heading: string
    about: string
}