jQuery(document).ready(function() {
  jQuery('.pregunta11').load('pregunta1.html',function () {
    jQuery('.pregunta12').load('pregunta2.html',function () {
      jQuery('.pregunta23').load('pregunta3.html',function () {
        jQuery('.pregunta24').load('pregunta4.html',function () {
          jQuery('.pregunta35').load('pregunta5.html',function () {
            jQuery('.pregunta36').load('pregunta6.html',function () {
              jQuery('.pregunta47').load('pregunta7.html',function () {
                jQuery('.pregunta48').load('pregunta8.html',function () {
                  jQuery('.pregunta49').load('pregunta9.html',function () {
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
  var arraypreg = [0,0,0,0,0,0,0,0,0];
  var arrayx = [0,0,0,0,0];
  var respuestas = [0,0,0,0,0,0,0,0,0];
  var ctx = document.getElementById("myChart").getContext('2d');
  //INICIO
  inicio();
  crear_preguntas();
  esconder_todo();
  crear_logica();

  function inicio() {
      jQuery('.empezar').click(function() {
        jQuery('.Instrucciones').hide(function() {
          mostrar_pregunta(1,1);
          jQuery('.sig1').hide();
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
    for (var i = 1; i <= 5; i++) {
      var p = '#p';
      p=p+contpreg+i;
      jQuery(p).click(function() {
        for(var j = 0;j < arrayx.length; j++) {
          if (jQuery(this).index() == j){
            console.log(this);
            arrayx[j] = 1;
            jQuery(this).css('background','rgba(101, 101, 117, 0.4)');
          }
        }
        esconder(arrayx,contpreg);
        for(var j = 0;j < arrayx.length; j++) {
          arrayx[j] = 0;
        }
      })
    }
  }

  function mostrar_pregunta(aspecto,num_pregunta) {
    var pre = '.pregunta';
    // console.log(aspecto);
    jQuery('.nav_preguntas').show();
    if (aspecto == 1) {
      jQuery('#p_transversales').show();
      jQuery('.preguntas_transversales').show();
      jQuery('#tematica_t').addClass("resalto");
    }
    else if (aspecto == 2) {
      jQuery('#p_economicas').show();
      jQuery('.preguntas_economicas').show();
      jQuery('#tematica_e').addClass("resalto");
    }
    else if (aspecto == 3) {
      jQuery('#p_sociales').show();
      jQuery('.preguntas_sociales').show();
      jQuery('#tematica_s').addClass("resalto");
    }
    else if (aspecto == 4) {
      jQuery('#p_ambientales').show();
      jQuery('.preguntas_ambientales').show();
      jQuery('#tematica_a').addClass("resalto");
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
    var a = 0;
    for (var i = 0; i < r.length; i++) {
      var blankCheckbox = '#blankCheckbox';
      var p = '#p';
      a++;
      blankCheckbox = blankCheckbox + cp + a;
      p = p + cp  + a;
      if (r[i] == 0) {
        jQuery(blankCheckbox).hide();
        jQuery(p).show().css('background','transparent');
      }
      else {
        jQuery(blankCheckbox).show();
      }
    }
  }

    //FUNCION CLICK CHECKBOX
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

    var index = jQuery(this).attr('name');
    var resf = parseInt(jQuery(this).attr('value'));
    var res = parseInt(index.slice(6, 7));

      for (var i = 1; i <= 9; i++) {
      var p = '.sig' + i;
        if (res == i) {
          jQuery(p).show();
          res = res-1;
          respuestas[res] = resf;
        }
        else {
          jQuery(p).hide();
        }
      }
      } else {
      box.prop("checked", false);
    }
  });

  function esconder_todo() {
    jQuery('.nav_preguntas').hide();
    jQuery('.preguntas_transversales').hide();
    jQuery('.preguntas_economicas').hide();
    jQuery('.preguntas_sociales').hide();
    jQuery('.preguntas_ambientales').hide();
    jQuery('#p_transversales').hide();
    jQuery('#p_economicas').hide();
    jQuery('#p_social').hide();
    jQuery('#p_ambientales').hide();
    jQuery('#tematica_t').removeClass("resalto");
    jQuery('#tematica_e').removeClass("resalto");
    jQuery('#tematica_s').removeClass("resalto");
    jQuery('#tematica_a').removeClass("resalto");

    for(var j = 1;j <= arraypreg.length; j++) {
      for (var i = 1; i <= 9; i++) {
        var preg = '.pregunta'+j+i;
        var pregx = '.pregunta'+j;
        jQuery(preg).hide();
        jQuery(pregx).hide();
        }
    }
  }

  function formulario() {
    esconder_todo();
    jQuery('.nav_principal').hide();
    jQuery('.cont-radar').hide();
    jQuery('.email-d').show();
  }

  function crear_logica() {
    for (var i = 1; i <= arraypreg.length; i++) {
      var p = '.sig' + i;
      if (i<=1) {
        jQuery(p).on('click',function () {
          var n = jQuery(this).val();
          var val = parseInt(n.charAt(n.length-1)) + 1;
          esconder_todo();
          mostrar_pregunta(1,val);
        });
      }
      if (i>=2 && i<=3) {
        jQuery(p).on('click',function () {
          var n = jQuery(this).val();
          var val = parseInt(n.charAt(n.length-1)) + 1;
          esconder_todo();
          mostrar_pregunta(2,val);
        });
      }
      if (i>=4 && i<=5) {
        jQuery(p).on('click',function () {
          var n = jQuery(this).val();
          var val = parseInt(n.charAt(n.length-1)) + 1;
          esconder_todo();
          mostrar_pregunta(3,val);
        });
      }
      if (i>5 && i <=8) {
        jQuery(p).on('click',function () {
          var n = jQuery(this).val();
          var val = parseInt(n.charAt(n.length-1)) + 1;
          esconder_todo();
          mostrar_pregunta(4,val);
        });
      }
      if (i>=9) {
        jQuery(p).on('click',function () {
          esconder_todo();
          jQuery('.nav_principal').hide();
          jQuery('.cont-radar').show();
          setTimeout(formulario, 5000);
        });
      }

    }
  }

  var marksData = {
    labels: ["Misión, visión, valores", "Responsabilidad sobre los productos y los servicios", "Sostenibilidad de la organización", "Practicas de aprovisionamiento", "Condiciones de trabajo", "Salud y seguridad ocupacional", "Gestión de materias primas y residuos.", "Gestión de la energía", "Gestión del impacto ambiental local"],
    datasets: [{
      label: "Auto-Diagnostico",
      fill: false,
      borderColor: "rgb(209, 204, 45)",
      data: respuestas
    }]
  };
  var options = {
    scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 5,
          stepSize: 1
        },
        pointLabels: {
          fontSize: 12
        }
      },
      legend: {
        position: 'left'
      }
  };
  var myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: marksData,
      options: options
  });
}
