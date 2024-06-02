// JavaScript Document

$(document).ready(function(){
  // 單字vocab
  $('.vocab .v-text').hide();
  $('.vocab').click(function(event){
    jQuery(this).children(".v-text").toggle();
  });

  
});

