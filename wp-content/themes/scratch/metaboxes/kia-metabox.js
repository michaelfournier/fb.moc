/*-----------------------------------------------------------------------------------*/
/* KIA Metabox scripts
/*
/* 
/* requires jquery 1.7
/* tested on WordPress 3.3.1
/*
/* � based on Kathy Darling http://www.kathyisawesome.com
/* 2012-03-07. */
/*-----------------------------------------------------------------------------------*/


;(function ($) {

	var KIA_metabox = {
 

/*-----------------------------------------------------------------------------------*/
/* Meta Fields Sorting
/*-----------------------------------------------------------------------------------*/
	
	sortable: function(){

		$('#wpa_loop-blocspics').sortable({
			 axis:'y',
			 cursor: 'move'
		});
		
	}, //end of sortable
	
	differentTypes: function(){
			$('.addtext').on('click', function() {				
				$(this).parent().parent().find(".wpa_group").not(".tocopy").last().find(".mypic").remove();
				$(this).parent().parent().find(".wpa_group").not(".tocopy").last().find(".mymedia").remove();
				KIA_metabox.enfrButton();				
			});
		
			$('.addpic').on('click', function() {
				//$(this).parent().parent().parent().not(".last").last().find(".mytext").remove();
				$(this).parent().parent().find(".wpa_group").not(".tocopy").last().find(".mymedia").remove();
			});
			
			$('.addmedia').on('click', function() {
				//$(this).parent().parent().parent().not(".last").last().find(".mytext").remove();
				//alert($(this).parent().parent().find(".wpa_group").not(".tocopy").last().attr('class'));
				$(this).parent().parent().find(".wpa_group").not(".tocopy").last().find(".mypic").remove();
			});
	}, // end differentTypes
	
	// fonction qui gère le switch en / fr des editeurs de texte //
	enfrButton : function() {
		$(".mytext a.wp-switch-editor").bind('click', function() {
			$(this).parent().parent().find("a").removeClass('active');
			$(this).addClass("active");
			if ($(this).attr("id") == "my_english") {				
				$(this).parent().parent().find(".editor_fr").css("display", "none");
				$(this).parent().parent().find(".editor_en").css("display", "block");
			} else {
				$(this).parent().parent().find(".editor_fr").css("display", "block");
				$(this).parent().parent().find(".editor_en").css("display", "none");				
			}
		});
	}
	
	
	}; // End KIA_metabox Object // Don't remove this, or the sky will fall on your head.

 /*-----------------------------------------------------------------------------------*/
/* Execute the above methods in the KIA_metabox object.
/*-----------------------------------------------------------------------------------*/
  
	$(document).ready(function () {
		
		//KIA_metabox.mediaButtons();
		KIA_metabox.differentTypes();
		KIA_metabox.sortable();
		//KIA_metabox.enfrButton();
		//KIA_metabox.reinitTinyMce();			
	});
  
})(jQuery);



// jQuery insertAtCaret plugin
// http://stackoverflow.com/questions/946534/insert-text-into-textarea-with-jquery#answer-2819568
jQuery.fn.extend({
insertAtCaret: function(myValue){
  return this.each(function(i) {
    if (document.selection) {
      //For browsers like Internet Explorer
      this.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
      this.focus();
    }
    else if (this.selectionStart || this.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = this.selectionStart;
      var endPos = this.selectionEnd;
      var scrollTop = this.scrollTop;
      this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
      this.focus();
      this.selectionStart = startPos + myValue.length;
      this.selectionEnd = startPos + myValue.length;
      this.scrollTop = scrollTop;
    } else {
      this.value += myValue;
      this.focus();
    }
  })
}
});
