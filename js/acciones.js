// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	var basedatos=window.sqlitePlugin.openDatabase({name: "ColoresBD.db",createFromLocation:1});
	cargarnombrejugador();
	function cargarnombrejugador ()
	{
		basedatos.transaction(function(ejecutar){
			var sql="SELECT NombreUsuario FROM Usuario";
		ejecutar.executeSql(sql,undefined,function(ejecutar,resultado){
			var datosJugador=resultado.rows.item(0);
			var actual = datosJugador.NombreUsuario;
			$('#jugador').text(actual);
		});
		});
	}
	$('#btnconfigurar').on ('tap',function (){
		$('#txtnombre').val($('#jugador').text());
	});
	$('#btnguardar').on ('tap',function (){
		var nuevonombre=$('#txtnombre').val();
		basedatos.transaction(function(consulta){
		consulta.executeSql("UPDATE Usuario SET NombreUsuario=? WHERE ClaveUsuario='1';",[nuevonombre]);
	});
	cargarnombrejugador();
	});
	function flash (boton)
{
	boton.stop().animate({opacity:'0.5'},{
		duration:80,
		complete:function(){
			boton.stop().animate({opacity:'1'},
			200);
		}
	});
}
$('.cuadro').on('tap',function(){
	flash($(this));
	audio.play($(this).attr('id'));
});
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('B1','audio/C.mp3',function(){},
	function(msg){alert("Error "+msg);});
	audio.preloadFX('B2','audio/D.mp3',function(){},
	function(msg){alert("Error "+msg);});
	audio.preloadFX('B3','audio/E.mp3',function(){},
	function(msg){alert("Error "+msg);});
	audio.preloadFX('B4','audio/F.mp3',function(){},
	function(msg){alert("Error "+msg);});
	
	$('#btnjugar').on('tap',function(){
		var pantalla=$.mobile.getScreenHeight();
		var encabezado=$('.ui-header').outerHeight();
		var pie=$('.ui-footer').outerHeight();
		var contenido=$('.ui-content').outerHeight();
		var alto=(pantalla - encabezado - pie)/2
		//alert('Pantalla  '+ pantalla)
		//alert('Encabezado  '+ encabezado)
		//alert('Pie  '+ pie)
		//alert('Contenido  '+ contenido)
		//alert('Alto ' + alto)
		$('.cuadro').height(alto);
		
});//btnjugar on click
//$('.cuadro').on('vmousedown',function(){
	//$('#pantalla').append(quien($(this).attr('id')));
			//$(this).addClass('pulsado')
			
//});
//$('.cuadro').on('vmouseup',function(){
			//$(this).removeClass('pulsado')
			
//});
function quien (q)
{
	audio.play(q);
	return q.substring(1);
}
}); 
});