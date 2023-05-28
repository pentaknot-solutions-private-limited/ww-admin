import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";

const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";
export class ExcelService {
  static exportAsExcelFile(
    json: any[],
    columnKeys: any,
    headerNames: any[],
    params: any
  ): void {
    // Setting
    // const columnKeys: any[] = params.columnKeys;
    const filteredJson = json.map(function (row) {
      return columnKeys.map(function (col: any) {
        return row[col];
      });
    });
    // Add Column Headers
    filteredJson.unshift(headerNames);
    //
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(filteredJson);

    // Delete First Row
    this.delete_row(worksheet, 0);
    //
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ["data"],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, params.fileName);
  }

  static exportJSONExcelFile(
    JSON: any[],
    excelFileName: any,
    sheetName = "Data"
  ): void {
    sheetName = sheetName.substring(0, 15);
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(JSON);
    let sheets: any = {};
    sheets[sheetName] = worksheet;
    const workbook: XLSX.WorkBook = { Sheets: sheets, SheetNames: [sheetName] };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    //
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  static exportAOAExcelFile(
    aoa: any[],
    excelFileName: any,
    sheetName = "Data"
  ): void {
    sheetName = sheetName.substring(0, 15);
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(aoa);
    let sheets: any = {};
    sheets[sheetName] = worksheet;
    const workbook: XLSX.WorkBook = { Sheets: sheets, SheetNames: [sheetName] };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    //
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  static saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(data, `${fileName}.${EXCEL_EXTENSION}`);
  }

  //   Internal Logic
  static ec = (r: any, c: any) => {
    return XLSX.utils.encode_cell({ r: r, c: c });
  };
  static delete_row = (ws: any, row_index: any) => {
    let range = XLSX.utils.decode_range(ws["!ref"]);
    for (var R = row_index; R < range.e.r; ++R) {
      for (var C = range.s.c; C <= range.e.c; ++C) {
        ws[this.ec(R, C)] = ws[this.ec(R + 1, C)];
      }
    }
    range.e.r--;
    ws["!ref"] = XLSX.utils.encode_range(range.s, range.e);
  };
}
