import React, { useEffect } from 'react'
import {Button, Col, Row} from "react-bootstrap";
import * as XLSX from 'xlsx'
import * as FileSaver from 'file-saver'

export const Reports = () => {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';

    function exportAsExcelFile(json, excelFileName) {

        const worksheet = XLSX.utils.json_to_sheet(json);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        saveAsExcelFile(excelBuffer, excelFileName);
    }

    function saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + ' ' + new Date() + EXCEL_EXTENSION);
    }


//Выгрузка всех картриджей

async function allCartridge() {
    let response = await fetch('/api/find')
    let result = await response.json()
    exportAsExcelFile(result, 'Все картриджи')
}

//Выгрузка полных картриджей на складе

async function warehouseCartridge() {
    let response = await fetch('/api/find?issued=false&toRefuel=false&scrapped=false&empty=false')
    let result = await response.json()
    exportAsExcelFile(result, 'Полные на складе')
    }

//Выгрузка пустых картриджей на складе

async function warehouseCartridgeEmpty() {
    let response = await fetch('/api/find?issued=false&toRefuel=false&scrapped=false&empty=true')
    let result = await response.json()
    exportAsExcelFile(result, 'Пустые на складе')
    }

//Выгрузка выданных картриджей

async function issuedCartridge() {
    let response = await fetch('/api/find?issued=true')
    let result = await response.json()
    exportAsExcelFile(result, 'Выданные')
}

//Выгрузка отданных в заправку картриджей

async function refuelCartridge() {
    let response = await fetch('/api/find?toRefuel=true')
    let result = await response.json()
    exportAsExcelFile(result, 'Отданные на заправку')
}

//Выгрузка утилизированных картриджей

async function scrappedCartridge() {
    let response = await fetch('/api/find?scrapped=true')
    let result = await response.json()
    exportAsExcelFile(result, 'Утилизированные')
    }

    useEffect(() => document.title = 'Учет картриджей - Отчёты')
    return (
        <div>
            <div>
                <h1>Выгрузка данных в Excel</h1>
                <hr />
            </div>
            <Row>
                <div className={'button-block'}>
                    <div>
                        <Button className={'report-button'} onClick={allCartridge}>
                            Все картриджи
                        </Button>
                    </div>
                    <div>
                        <Button className={'report-button'} onClick={warehouseCartridge}>
                            Полные картриджи на складе
                        </Button>
                    </div>
                    <div>
                        <Button className={'report-button'} onClick={warehouseCartridgeEmpty}>
                            Пустые картриджи на складе
                        </Button>
                    </div>
                </div>
                <div>
                    <div>
                        <Button className={'report-button'} onClick={issuedCartridge}>
                            Выданы в отделения
                        </Button>
                    </div>
                    <div>
                        <Button className={'report-button'} onClick={refuelCartridge}>
                            На заправке
                        </Button>
                    </div>
                    <div>
                        <Button className={'report-button'} onClick={scrappedCartridge}>
                            Утилизированные
                        </Button>
                    </div></div>
            </Row>


        </div>

    )
}

export default Reports