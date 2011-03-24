jQuery.fn.animateStep = function( options ) {
	
	var settings = {
		css : {},
		speed: 200,
		limit: null,
		after: function(){},
		delay: 50
	};
	
	if ( options )  
		$.extend( settings, options );
		
	return this.each(function(x,item){
		if( x === settings.limit ) 
			return false;
		
		var me = $(item);
		
		if( x < options.limit-1 )
			me.delay(x*settings.delay).animate(settings.css,settings.speed);
		else 
			me.delay(x*settings.delay).animate(settings.css,settings.speed,settings.after);
	});
 };