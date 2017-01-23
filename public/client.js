var display='';
var solve={};

$(function(){
  $('button').on('click',logic);

});


function logic(){
  if ($(this).attr('class')=='number'){
    if(display.length<7){
      if(display.includes('.')&&$(this).data('val')=='.'){
    }else{
    adjustDisplay($(this).data('val'));
    }
    }
  }else if ($(this).attr('class')=='modifier'){
    storeModifier($(this).data('val'),$(this).attr('id'));
  }else if ($(this).attr('id')=='clear'){
    clear();
  }else if($(this).attr('class')=='trig'){
    storeModifier($(this).data('val'),$(this).attr('id'));
    enter();
  }else{
      enter();
    }
}

function adjustDisplay(numberString){
  display+=numberString;
  $('#data').text(display);
}

function storeModifier(modifier,modifierName){
  solve.type=modifierName;
  solve.x=$('#data').text();
  display='';
  $('#data').text(modifier);
}

function clear(){
  display='';
  $('#data').text('calculator');
  solve.type='';
  solve.x='';
  solve.y='';
}

function enter(){
  solve.y=$('#data').text();
  console.log(solve);
  $.ajax({
    url: '/solve/' + solve.type,
    type: 'POST',
    data: solve, //This is going to be our req on the server side. req.body.val
    success: getResult
  })
}

function getResult(){

  $.ajax({
    url:'/solve',
    type: 'GET',
    success:showResult

  });
}

function showResult(result){
console.log(result.answer);
result.answer+='';
  $('#data').text(result.answer.substring(0,7));
  solve.type='';
  solve.x='';
  solve.y='';
  display='';
}
