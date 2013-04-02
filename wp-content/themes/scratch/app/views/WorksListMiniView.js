var Blog = (function (blog) {

    blog.Views.WorksListMiniView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            this.template = _.template($("#works_listmini_template").html());
            _.bindAll(this, 'render');
        },
        render : function () {
            //this.$el.find('.maincontent').remove();
            var renderedContent = this.template({works : this.collection.models});
            // on fait apparaitre dans #mainbb la liste des works en fondu //
            i = 1;
            this.$el.find("#timeline").html(renderedContent);
            // this.$el.find("#timeline").html(renderedContent).find('a').each(function() {
            //     $(this).delay(i * 50).fadeIn();
            //     i++;
            //     //console.log($(this).attr('href'));
            // });
            // on applique l'autoscroll //
            $('#workslistmini').imagesLoaded(function() {         
                   // fonction auto scroll vignettes // 
                    function makeScrollable(thumbs, wrapper) {
                        var width = wrapper.innerWidth();           
                        //wrapper.scrollLeft(0);            
                        var leftBuffer = 100;
                        var rightBuffer = 100;
                        function scrollMe(imx) {
                                console.log(imx);
                                var xPos = imx.pageX - wrapper.offset().left - leftBuffer;
                                var xMax = wrapper.innerWidth() - rightBuffer;             
                                var perc = xPos / (xMax - leftBuffer);
                                var scrollAmt = thumbs.outerWidth(true) - wrapper.innerWidth();
                                //wrapper.scrollLeft(perc * scrollAmt);
                                //wrapper.stop(true,false).animate({"scrollLeft": (perc * scrollAmt)}, "slow");                     
                            wrapper.bind('mousemove', function(e) {
                                var xPos = e.pageX - wrapper.offset().left - leftBuffer;
                                var xMax = wrapper.innerWidth() - rightBuffer;             
                                var perc = xPos / (xMax - leftBuffer);
                                var scrollAmt = thumbs.outerWidth(true) - wrapper.innerWidth();
                                 //wrapper.scrollLeft(perc * scrollAmt);
                                wrapper.stop(true,false).animate({"scrollLeft": (perc * scrollAmt)}, { duration: 800, easing: "easeOutQuart"});               
                            });
                       }
                                
                        function scrollStop() {
                                wrapper.unbind('mouseover');
                                wrapper.stop(true);
                            }
                            // imx = initial mouse x position //
                            $('.st_wrapper').hover(function(imx) {
                                
                                mytimeout = setTimeout( scrollMe, 150, imx);
                            }, function() {
                                clearTimeout(mytimeout);
                                wrapper.off('mousemove');
                            });    
                        }
                            
                        function buildThumbs() {            
                                $('#workslistmini').each(function() {
                                    var width = 0;           
                                    var wrapper = $(this).find('.st_thumbs_wrapper'); 
                                    wrapper.find('.st_thumbs a').each( function() {
                                        width += $(this).outerWidth(true);
                                    });                 
                                    var thumbs = $(this).find('.st_thumbs');
                                    //thumbs.css('width', width + 'px');                    
                                    makeScrollable(thumbs, wrapper);
                                });
                                            
                        }
                        
                        $(this).on('mouseover', buildThumbs());
            });
            return this;
        }
     
    });

    return blog;
}(Blog));