define(["jquery","map/drawMap","map/updateMap", "jqueryui", "readdata" ],
	function($,drawMap,updateMap) {
	$(function() {
		var w = $(window).width();
		var h = $(window).height();

		//$("#mapContainer").height("100%");
    
        $( "#slider" ).slider({
            value: 1970,
            min: 1960,
            max: 2000,
            step: 10,
            slide: function( event, ui ){
                console.log(ui.value);
               global.year = ui.value; 
               global.map.update(); 
            }
        });
		global.year=1970;

		global.map = drawMap;
		updateMap(global.map);
	});
});