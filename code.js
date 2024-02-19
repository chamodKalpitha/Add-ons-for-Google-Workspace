function onOpen(e){
  DocumentApp.getUi().createAddonMenu()
  .addItem('Start','showSidebar')
  .addToUi();
}

function showSidebar(){
  const html = HtmlService.createTemplateFromFile('Sidebar').evaluate().setTitle("Start");
  DocumentApp.getUi()
  .showSidebar(html);
}
