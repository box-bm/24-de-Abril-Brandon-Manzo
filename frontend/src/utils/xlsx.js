import FileSaver from "file-saver";
import * as XLSX from "xlsx";

const exportToXLSX = (data, fileName) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = { Sheets: { Reporte: ws }, SheetNames: ["Reporte"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const file = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(file, fileName + ".xlsx");
};

export default exportToXLSX;
