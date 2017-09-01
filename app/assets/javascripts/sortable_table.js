$(function(){
  $('.table-sortable').sortable();
  $('.table-sortable').disableSelection();
  $('.table-sortable').bind('sortstop', function(e, ui){
    item = ui.item;
    item_data = item.data()
    console.log(item, item_data.update_url)
  })
})

