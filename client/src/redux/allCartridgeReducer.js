const initialState = {                                         //начальный стейт
    allCartridges: [
        {a: "val1"},
        {b: "Тестовое значение"}
    ]
}



export const allCartridgeReducer = (state = initialState, action) => {        //редюсер возвращает все картриджи на складе
    return state
}

// fetch('http://localhost:5000/api/base')
//     .then(response => response.json())
//     .then(json => initialState.allCartridges = json)