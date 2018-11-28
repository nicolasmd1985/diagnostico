jQuery(document).ready(function() {
  jQuery('.pregunta11').load('pregunta1.html',function () {
    jQuery('.pregunta12').load('pregunta2.html',function () {
      jQuery('.pregunta21').load('pregunta3.html',function () {
        jQuery('.pregunta22').load('pregunta4.html',function () {
          jQuery('.pregunta31').load('pregunta5.html',function () {
            jQuery('.pregunta32').load('pregunta6.html',function () {
              jQuery('.pregunta41').load('pregunta7.html',function () {
                jQuery('.pregunta42').load('pregunta8.html',function () {
                  jQuery('.pregunta43').load('pregunta9.html',function () {
                    loadScripts();
                  });
                });
              });
            });
          });
        });
      });
    });
  });

})

function loadScripts() {
  var arrayasp = [0,0,0,0];
  var arraypreg = [0,0,0,0,0,0,0,0,0];
  var arrayx = [0,0,0,0,0];
  //INICIO
  inicio();
  crear_preguntas();
  esconder_todo();
  crear_logica();

  function inicio() {
      jQuery('.empezar').click(function() {
        jQuery('.Instrucciones').hide(function() {
          mostrar_pregunta(1,1);
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
      jQuery(p).click(function() {
        // jQuery(this).css('background','azure');
        for(var j = 0;j < arrayx.length; j++) {
          if (jQuery(this).index() == j){
            arrayx[j] = 1;
            jQuery(this).css('background','azure');
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

  function mostrar_pregunta(aspecto,num_pregunta) {
    var pre = '.pregunta';
    console.log(aspecto);
    jQuery('.nav_preguntas').show();
    if (aspecto == 1) {
      jQuery('#p_transversales').show();
    }
    if (aspecto == 2) {
      jQuery('#p_economicas').show();
    }
    if (aspecto == 3) {
      jQuery('#p_sociales').show();
    }
    if (aspecto == 4) {
      jQuery('#p_ambientales').show();
    }
    var preg = '.pregunta' + num_pregunta;
    var preg2 = '.pregunta' + aspecto + num_pregunta;
    var p = '#p'+num_pregunta+1;
    console.log(p+''+preg+''+preg2);
    jQuery(p).trigger('click');
    jQuery(preg).show();
    jQuery(preg2).show();
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
        jQuery(blankCheckbox).hide();
        jQuery(p).show().css('background','transparent');
      }
      else {
        jQuery(blankCheckbox).show().css('background','azure');
      }
      // console.log(blankCheckbox+''+r[i]+''+p);
      blankCheckbox = '#blankCheckbox';
      p = '#p';
    }
  }
    //FUNCION CLICK
  jQuery("input:checkbox").on('click', function() {
    // in the handler, 'this' refers to the box clicked on
    var box = jQuery(this);
    if (box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    jQuery(group).prop("checked", false);
    box.prop("checked", true);
    } else {
      box.prop("checked", false);
    }
  });

  function esconder_todo() {
    jQuery('.nav_preguntas').hide();
    jQuery('#p_transversales').hide();
    jQuery('#p_economicas').hide();
    jQuery('#p_social').hide();
    jQuery('#p_ambientales').hide();
    for(var j = 1;j <= arraypreg.length; j++) {
      for (var i = 1; i <= 2; i++) {
        var preg = '.pregunta'+j+i;
        jQuery(preg).hide();
        // console.log(preg);
        }
    }
  }

  function crear_logica() {
    for (var i = 1; i <= arraypreg.length; i++) {
      var p = '.sig' + i;
      console.log(p);
      if (i>=1 && i<=2) {
        jQuery(p).on('click',function () {
          var n = jQuery(this).val();
          var val = parseInt(n.charAt(n.length-1)) + 1;
          console.log(this);
          esconder_todo();
          mostrar_pregunta(1,val);
        });
      }
      if (i>=3 && i<=4) {
        jQuery(p).on('click',function () {
          var n = jQuery(this).val();
          var val = parseInt(n.charAt(n.length-1)) + 1;
          console.log(this);
          esconder_todo();
          mostrar_pregunta(2,val);
        });
      }
      if (i>=5 && i<=6) {
        jQuery(p).on('click',function () {
          var n = jQuery(this).val();
          var val = parseInt(n.charAt(n.length-1)) + 1;
          console.log(this);
          esconder_todo();
          mostrar_pregunta(3,val);
        });
      }
      if (i>=7 && i<=9) {
        jQuery(p).on('click',function () {
          var n = jQuery(this).val();
          var val = parseInt(n.charAt(n.length-1)) + 1;
          console.log(this);
          esconder_todo();
          mostrar_pregunta(4,val);
        });
      }

    }
  }


}
