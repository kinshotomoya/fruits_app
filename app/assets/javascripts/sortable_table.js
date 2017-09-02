$(function(){

  $('.table-sortable').sortable();
  $('.table-sortable').disableSelection();
  $('.table-sortable').bind('sortstop', function(e, ui){
    item = ui.item;
    item.children('td').effect('highlight');
    name = item.attr('data-name');
    order = item.index();
    id = item.attr('data-id');
    params = {fruit: {name: name, row_order_position: order}};
    $.ajax({
      url: "/fruits/" + id + "/sort",
      type: 'PUT',
      data: params,
      dataType: 'JSON',
    })
    .done(function(res){
      changeRankText(res, item);
    })
    .fail(function(res){

    })
    var changeRankText = function(res, item){
      var $ranks = $('.rank');
      $.each($ranks, function(i, rank){
        $(rank).text(i+1);
      })
    }
  })
})

