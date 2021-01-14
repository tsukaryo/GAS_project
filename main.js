// @ts-nocheck
function myFunction() {
     var sheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1f5JxPerAwT7U1kqqAZPmnepncoVo7nW_Czx7kb81e0w/edit#gid=0').getSheetByName('シート1');
  var slide = SlidesApp.openByUrl('https://docs.google.com/presentation/d/1Z7O_CPMFMuk05sVN_0KIuU7fTyB6oC-gMx4dpd4uyws/edit#slide=id.gb55fd091ef_0_0');
 
  var datarange = sheet.getDataRange().getValues();
  var template = slide.getSlides()[1];

    for(var i=1;i<datarange.length;i++){
    var newpage = slide.appendSlide(template);
    for(var j=0;j<datarange[0].length;j++){
      newpage.replaceAllText('{'+datarange[0][j]+'}', datarange[i][j]);
    }
 
    var image = datarange[i][14].replace('open?','uc?export=view&');
    try{
      Logger.log(newpage.getImages()[0])
    }catch(e){
      Logger.log("ぴえん")
    }

    try{
      newpage.getImages()[0].replace(image);
      Logger.log("ok")
    }catch(e){
      Logger.log(image);
    }
}
}