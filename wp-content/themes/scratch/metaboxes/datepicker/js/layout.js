
jQuery(document).ready(function() {
	
	jQuery('#dp1, #dp2').datepicker({
		format: 'dd.mm.yyyy',
		weekStart: 1,
		starDate: new Date(),
		language: "fr"
	});

	

	
	jQuery('#dp1').datepicker()
		.on('changeDate', function(ev){
			yo = ev.date.valueOf();
			jQuery('#dp1').attr("data-date", yo);
			// on écrit la valeur de la date dans le champs input hidden //
			jQuery('#dp1-hidden').val(yo);
			endDate = (jQuery('#dp2-hidden').val());
			//console.log(ev.date.valueOf()+" "+endDate);
			if (endDate.length > 0 && ev.date.valueOf() > endDate){
				alert("La date de début ne peut pas être supérieure à la date de fin");
				jQuery('#dp1').attr("data-date", "");
				jQuery('#dp1').val("");
				jQuery('#dp1').datepicker('hide');				
			}
		jQuery('#dp1').datepicker('hide');	
		});
	jQuery('#dp2').datepicker()
		.on('changeDate', function(ev){
			yo = ev.date.valueOf();
			// on écrit la valeur de la date dans le champs input hidden //
			jQuery('#dp2-hidden').val(yo);
			jQuery('#dp2').attr("data-date", yo);
			startDate = jQuery('#dp1-hidden').val();
			if (startDate.length > 0 && ev.date.valueOf() < startDate){
				alert("La date de fin ne peut pas être inférieure à la date de début");
				jQuery('#dp2').attr("data-date", "");
				jQuery('#dp2').val("");
				jQuery('#dp2').datepicker('hide');
			}
// si la date de fin est égale à la date de début //			
			if (startDate.length > 0 && ev.date.valueOf() == startDate){
				jQuery('#dp2').attr("data-date", "");
				jQuery('#dp2').val("");
				jQuery('#dp2').datepicker('hide');
			}
			jQuery('#dp2').datepicker('hide');		
		});
});
	