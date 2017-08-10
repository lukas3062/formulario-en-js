$(document).ready(function(){
var todos = [];
var copy = {};
var i=0;
var $numfav = "";
  $("#abajo").click(function(){

      subirDatos1("append");
      i++;

  });
  $("#arriba").click(function(){
    subirDatos1("prepend");
    i++;

  });


  function subirDatos1(lugar){
    var $name = $("input[id='name']").val();
    var $desc = $("input[id='desc']").val();
    var $cate = $("select").val();
    var $img = $("input[id='img']").val();
    copy={
      id: i,
      name: $name,
      descrip: $desc,
      Categoria: $cate,
      img: $img
    };
    todos.push(copy);


    var $div = $("<div/>");
        $div.attr("id",copy.id +"di");
        $div.attr("class", "divi");
        $div.mouseover(function(e){

          if( $(event.target).hasClass("divi") )
              {
                $("#"+e.target.id).attr("class","view");

              }
              var $items = $("#down div.divi");
              var $item= "";
          for (var i = 0; i < $items.length; i++) {
            $item = $($items[i]);

            $item.attr("class","diviopa");
          }

        });
        $div.mouseout(function(e){
          if( $(event.target).hasClass("view") )
              {
                $("#"+e.target.id).attr("class","divi");

              }
              var $items = $("#down div.diviopa");
              var $item= "";
          for (var i = 0; i < $items.length; i++) {
            $item = $($items[i]);

            $item.attr("class","divi");
          }
        });
    if ($cate == "autos") {
      $div.css("background-color","black");
      $div.css("color","red");
    }
    else {
      if ($cate == "ropa") {
        $div.css("background-color","blue");
      }
      else {
        if ($cate == "herramientas") {
          $div.css("background-color","red");
        }
        else {
          $div.css("background-color","white");
        }
      }
    }


    var $izq = $("<img/>");
    $izq.attr("src", $img);
    if ($img == "") {
      $izq.attr("src","default.jpg")
    }

    var $ul = $("<ul/>");
    var $li1 = $("<li/>");
    $li1.attr("class", "li1");
    $li1.text($name);
    var $li2 = $("<li/>");
    $li2.text("Descripcion: "+ $desc);

    var $der = $("<div/>");
    $der.attr("id","divdiv");
    var $h3 = $("<h3/>");
    $h3.text("Categoria: "+ $cate);

    var $favo = $("<button/>");
    $favo.attr("class","ion-ios-star favoo");
    $favo.attr("id", copy.id);

    $favo.click(function(){
      $numfav = $favo;
      addFavo();
      $favo.css("background","yellow");
    })

    $div.fadeOut(0);
    $div.fadeIn("slow");
    $div.append($izq);
    $ul.append($li1);
    $ul.append($li2);
    $der.append($h3);
    $div.append($ul);
    $div.append($der);
    $div.append($favo);
    if (lugar === "append") {
      $("#down").append($div);
    }
    else {
      $("#down").append($div);
    }
    $("input[id='name']").val("");
    $("input[id='desc']").val("");
    $("input[id='cate']").val("");
    $("input[id='img']").val("");
  };


$("#delete").click(function(){
  $("#down div").fadeOut("slow");
  $("div[id='divi']").remove();
});

$("#bloque").click(function(){
  var $items = $("#down div.divi");
  var $item= "";
  for (var i = 0; i < $items.length; i++) {
    $item = $($items[i]);
    $item.attr("class","blok");
    $item.find("#divdiv").attr("id","divblok");
  }

});
$("#lista").click(function(){
  var $items = $("#down div.blok");
  var $item= "";
  for (var i = 0; i < $items.length; i++) {
    $item = $($items[i]);
    $item.attr("class","divi");
    $item.find("#divblok").attr("id","divdiv");
  }


});

function addFavo(){

  var $numero = $numfav.attr("id");
  console.log($numero);
  for (var i = 0; i < todos.length; i++){
    if (todos[i].id == $numero) {

      var $li = $("<li/>");
      $li.text(todos[i].name);
      var $deletefav = $("<button/>");
      $deletefav.attr("remove", $numero);
      $deletefav.attr("class","ion-close");
      $deletefav.attr("id","deletefav");
      $li.append($deletefav);
      $li.fadeOut(0);
      $li.fadeIn(3000);
      $("#ulfav").append($li);

      $deletefav.click(function(){

        $li.fadeOut(3000);
        $deletefav.parent().remove();

        console.log($deletefav.attr("remove"));
        console.log($("#"+$deletefav.attr("remove")));
        $("#"+$deletefav.attr("remove")).css("background","grey");

      });
      break;
    }
  }
};

});
/////
