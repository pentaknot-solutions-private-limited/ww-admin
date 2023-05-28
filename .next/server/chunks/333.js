"use strict";
exports.id = 333;
exports.ids = [333];
exports.modules = {

/***/ 1333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ ExcelService)
/* harmony export */ });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6302);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8109);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);


const EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";
class ExcelService {
    static exportAsExcelFile(json, columnKeys, headerNames, params) {
        // Setting
        // const columnKeys: any[] = params.columnKeys;
        const filteredJson = json.map(function(row) {
            return columnKeys.map(function(col) {
                return row[col];
            });
        });
        // Add Column Headers
        filteredJson.unshift(headerNames);
        //
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.json_to_sheet(filteredJson);
        // Delete First Row
        this.delete_row(worksheet, 0);
        //
        const workbook = {
            Sheets: {
                data: worksheet
            },
            SheetNames: [
                "data"
            ]
        };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_0__.write(workbook, {
            bookType: "xlsx",
            type: "array"
        });
        //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, params.fileName);
    }
    static exportJSONExcelFile(JSON, excelFileName, sheetName = "Data") {
        sheetName = sheetName.substring(0, 15);
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.json_to_sheet(JSON);
        let sheets = {
        };
        sheets[sheetName] = worksheet;
        const workbook = {
            Sheets: sheets,
            SheetNames: [
                sheetName
            ]
        };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_0__.write(workbook, {
            bookType: "xlsx",
            type: "array"
        });
        //
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    static exportAOAExcelFile(aoa, excelFileName1, sheetName1 = "Data") {
        sheetName1 = sheetName1.substring(0, 15);
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.aoa_to_sheet(aoa);
        let sheets = {
        };
        sheets[sheetName1] = worksheet;
        const workbook = {
            Sheets: sheets,
            SheetNames: [
                sheetName1
            ]
        };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_0__.write(workbook, {
            bookType: "xlsx",
            type: "array"
        });
        //
        this.saveAsExcelFile(excelBuffer, excelFileName1);
    }
    static saveAsExcelFile(buffer, fileName) {
        const data = new Blob([
            buffer
        ], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs(data, `${fileName}.${EXCEL_EXTENSION}`);
    }
}
ExcelService.ec = (r, c)=>{
    return xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.encode_cell({
        r: r,
        c: c
    });
};
ExcelService.delete_row = (ws, row_index)=>{
    let range = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.decode_range(ws["!ref"]);
    for(var R = row_index; R < range.e.r; ++R){
        for(var C = range.s.c; C <= range.e.c; ++C){
            ws[undefined.ec(R, C)] = ws[undefined.ec(R + 1, C)];
        }
    }
    range.e.r--;
    ws["!ref"] = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.encode_range(range.s, range.e);
};


/***/ })

};
;