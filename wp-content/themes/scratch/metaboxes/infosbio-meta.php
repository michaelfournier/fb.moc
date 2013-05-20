<? 
global $wp_media_access;
add_action('admin_print_footer_scripts', 'my_action_javascript', 999);
function my_action_javascript() { ?>
<script type="text/javascript">
      function send_myid(leid, leselect) {
        console.log(leid);
        var data = {
          action: 'my_action_callback',
          monid: leid,
          monselect: leselect
      };
      // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php     
      jQuery.post(ajaxurl, data, function(response) {
        // affiche la vignette //
        jQuery(response.selector).parent().find('.preview').html(response.pdflogo_html);
        // affiche le nom de l'image
        jQuery(response.selector).parent().find('#file_name').html(response.file_name);
      });
  }
</script>
<?php
}
?>
<div class="my_meta_control">

	<div class="inside file">
		<div class="oneblock" style="width:100%">	
			<h4>PDF</h4>
			<? $mb->the_field('pdf'); ?>
			<?php $wp_media_access->setGroupName('nn')->setInsertButtonLabel('Insert')->setTab('library&post_mime_type=application/pdf'); ?>			
			<!-- vignette preview -->	
			
				<? $file_id = $mb->get_the_value(); ?>
				
				<div style="clear:both; float: left" class="preview" id="pic">
					<? if (!empty($file_id)) { ?>
						<img src=<?= get_template_directory_uri().'/img/file-pdf.png'; ?> width='50px' alt='' />
					<? } ?>
				</div>
				
				<!-- champ texte contenant le nom du fichier-->
				<?  $file_url = wp_get_attachment_url($mb->get_the_value()); ?>
				<? echo $wp_media_access->getIdField(array('name'=> $mb->get_the_name(), 'value'=> $file_id)); ?>

				<!-- bouton ajouter image -->				
				<? echo $wp_media_access->getButton(array('label'=> 'Choisir un fichier')); ?>
				<!-- bouton supprimer image -->	
				<a class="button" href="" onclick="jQuery('#file_name, #pic').empty(); jQuery('.mediaid-nn').val(''); return false;">supprimer le fichier</a>


				<!-- nom de l'image -->
				<p>
					<span id="file_name"><em><? if(!empty($file_id)) echo get_the_title($mb->get_the_value());?></em></span>
				</p>
		</div>
				<? $mb->the_field('fileurl'); ?>	
				<input type='hidden' name="<?= $mb->get_the_name(); ?>" id="<?= $mb->get_the_name(); ?>" value="<?= wp_get_attachment_url($file_id); ?>" />

	</div>

 
	<p class="meta-save" style="float:right;"><button type="submit" class="button-primary" name="save"><?php _e('Update');?></button></p>
</div>