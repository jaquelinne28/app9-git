// JavaScript Document

$(document).ready(function (e){
	document .addEventListener ("deviceready",onDeviceReady,false);
	
});

function onDeviceReady(){
	
	$('#posicion').on('click', function(){
		getPosition ();
	});
}

function getPosition(){
	var options ={
		eneableHighAccuracy :true,
		maximumAge:3600000
	}
	
	var watchID=navigator.geolocation.getCurrentPosition(onSucces, onError,options);
	
	function onSuccess(position){
		
		alert('Latitude:'  +position.coords.latitude  +'\n'+
		'Longitude:'       +position.coords.longitude +'\n');
	};
	
	function onError(error){
		alert('code:'  +error.code   +'\n'+'message:' + error.message + '\n');
	}
}
		