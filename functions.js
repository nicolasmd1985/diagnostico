$(document).ready(function() {
  $('.pregunta11').load('pregunta1.html',function () {
    $('.pregunta12').load('pregunta2.html',function () {
      loadScripts();
    });
  });

})

function loadScripts() {
  var arraypreg = [0,0]
  var arrayx = [0,0,0,0,0];
  //INICIO
  inicio();
  crear_preguntas();

  function inicio() {
    // nav de preguntass
    $('.nav_preguntas').hide();
    //esconde preguntas transversales
    $('#p_transversales').hide();

    $('.empezar').click(function() {
        $('.Instrucciones').hide(function() {
          empezar_diagnostico();
        }
      );
    })
  }

  function crear_preguntas() {
    var preg = 'pregunta';
    var cp = 0;
    for (var i = 0; i < arraypreg.length; i++) {
      cp++;
      preg = preg + cp;
      crear_respuestas(preg,cp);
      preg = 'pregunta';
    }
  }

  function crear_respuestas(pregunta,contpreg) {
    var p = '#p';
    for (var i = 1; i <= 5; i++) {
      p=p+contpreg+i;
      console.log(p);
      $(p).click(function() {
        // $(this).css('background','azure');
        for(var j = 0;j < arrayx.length; j++) {
          if ($(this).index() == j){
            arrayx[j] = 1;
            $(this).css('background','azure');
          }
        }
        esconder(arrayx,contpreg);
        for(var j = 0;j < arrayx.length; j++) {
          arrayx[j] = 0;
        }
      })
      p = '#p';
    }
  }

  function empezar_diagnostico() {
    var a = 1;
    var pre = '.pregunta';
    $('.nav_preguntas').show();
    $('#p_transversales').show();
    mostrar_pregunta(1,1);
  }

  function esconder(r,cp) {
    // console.log(p);
    var blankCheckbox = '#blankCheckbox';
    var p = '#p';
    var a = 0;
    for (var i = 0; i < r.length; i++) {
      a++;
      blankCheckbox = blankCheckbox + cp + a;
      p = p + cp  + a;
      if (r[i] == 0) {
        $(blankCheckbox).hide();
        $(p).show().css('background','transparent');
      }
      else {
        $(blankCheckbox).show().css('background','azure');
      }
      // console.log(blankCheckbox+''+r[i]+''+p);
      blankCheckbox = '#blankCheckbox';
      p = '#p';
    }
  }

  function mostrar_pregunta(num_pregunta,aspecto) {
    var preg = '.pregunta' + num_pregunta;
    var preg2 = '.pregunta' + aspecto + num_pregunta;
    var p = '#p' + aspecto + num_pregunta;
    console.log(preg2);
    $(p).trigger('click');
    $(preg).show();
    $(preg2).show();
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


}
