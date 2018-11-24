$(document).ready(function() {
  $('.pregunta11').load('pregunta1.html',function () {
    loadScripts();
  });
  $('.pregunta12').load('pregunta2.html',function () {
    loadScripts();
  });
})

function loadScripts() {
  var arraypreg = [0,0,0,0,0,0,0,0,0]
  var arrayx = [0,0,0,0,0];
  //INICIO
  inicio();

  function inicio() {
    $('#p_transversales').hide();
    $('.preguntas_trans').hide();
    $('.sig1').hide();
    $('.empezar').click(function() {
        $('.Instrucciones').hide(function() {
          $('.preguntas_trans').show();
          $('#p_transversales').show();
          $('.pregunta2').hide();
        }
      );
    })
  }

  //FUNCION CLICK
  $("input:checkbox").on('click', function() {
    // in the handler, 'this' refers to the box clicked on
    var $box = $(this);
    if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });


  for (var i = 1; i <= 5; i++) {
    var cont =0;
    var p = '#p1';
    p=p+i;
    $(p).click(function() {
      $(this).css('background','azure');
      for(var j = 0;j < arrayx.length; j++) {
        if ($(this).index() == j) arrayx[j] = 1;
      }
      esconder(arrayx);
      for(var j = 0;j < arrayx.length; j++) {
        arrayx[j] = 0;
      }
    })
  }

  function esconder(r) {
    var blankCheckbox = '#blankCheckbox1';
    var p = '#p1';
    var a = 1;
    for (var i = 0; i < r.length; i++) {
      blankCheckbox = blankCheckbox + a;
      p = p + a;
      a++;
      if (r[i] == 0) {
        $(blankCheckbox).hide();
        $(p).css('background',"transparent");
      }
      else {
        $(blankCheckbox).show().css('background','azure');
      }
      console.log(blankCheckbox+''+r[i]+''+p);
      blankCheckbox = '#blankCheckbox1';
      p = '#p1';
    }
  }
}
