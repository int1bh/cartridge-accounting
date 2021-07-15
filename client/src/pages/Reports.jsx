import React, { useEffect } from 'react'

export const Reports = () => {
    useEffect(() => document.title = 'Учет картриджей - Отчёты')
    return (
        <div>
            <h1>Отчёты</h1>
            <p>Страница в разработке. </p>
            <p>Ваши предложения по наполнению этого раздела принимаются на GitHub проекта в разделе <a href="https://github.com/int1bh/cartridge-accounting/issues">Issues</a></p>
            <p>Там же регистрируйте все обнаруженные баги.</p>
        </div>
    )
}

export default Reports