function doGet(e) {
  
  return HtmlService.createTemplateFromFile("form").evaluate()
  .setTitle("BUKU KERJA 1")
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


var url = "#";
var folderId = "#";

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function uploadFiles(data)
{
 var file = data.myFile;
 var folder = DriveApp.getFolderById(folderId);
 var createFile = folder.createFile(file);
 return createFile.getUrl();
}

function addNewRow2(rowData2) {
  
  const currentDate = new Date();

  var files = DriveApp.getFilesByName(rowData2.unggahan);
  while (files.hasNext()) { 
  var file = files.next();
  //var keteranganFile = file.getName()+' - '+ file.getUrl();
  var linkFile = file.getUrl();
  var sizeFileTemp = file.getSize();
  var sizeFile = (sizeFileTemp/1000).toString() + " KB";
  }
  
  var ss = SpreadsheetApp.openByUrl(url);
  ws = ss.getSheetByName("BUKU 1");
  ws.appendRow([currentDate, rowData2.nama, rowData2.nip, rowData2.mapel, rowData2.smt, rowData2.jenis, rowData2.kelas,
                rowData2.tp, rowData2.unggahan, sizeFile, linkFile])
  
  return true;
}
