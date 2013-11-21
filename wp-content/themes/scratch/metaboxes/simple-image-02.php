<? global $wp_media_access; ?>
<?
add_action('admin_print_footer_scripts', 'my_action_javascript', 99);

function my_action_javascript() { ?>
<script type="text/javascript">
      function send_myid(leid, leselect) {
      console.log(leselect);
      var data = {
        action: 'my_action_callback',
        monid: leid,
        monselect: leselect
      };
      // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
      
      jQuery.post(ajaxurl, data, function(response) {
        // affiche la vignette //
        console.log(response);
        jQuery(response.selector).closest('.wpa_group, .mypic').find('.preview').html(response.image_html);
        // affiche le nom de l'image
        jQuery(response.selector).closest('.wpa_group').find('#pic_name').html(response.file_name);
      });
  }
</script>
<?php
}
?>
<div class="my_meta_control">
	<div class="mypic">	
		<? $mb->the_field('customthumb'); ?>
		<?php $wp_media_access->setGroupName('nn')->setInsertButtonLabel('Insert')->setTab('library'); ?>			
		<? //$wp_media_access1->setGroupName('img-n'. $mb->get_the_index())->setInsertButtonLabel('Inserer')->setTab('library'); ?>
		<!-- vignette preview -->	
		<div class="inside">
			<div style="clear:both; float:left" class="preview" id="pic">
				<?
				$file_id = $mb->get_the_value();
				$image_thumbnail = @wp_get_attachment_image_src( $file_id, 'full', true );
				//$image_thumbnail = @$image_thumbnail[0];
				$image_html = "<img src='$image_thumbnail[0]' style='overflow:hidden' width='200px' height='120px' alt='' />";
				echo @$image_html;
				?>
			</div>
			<? 
			// si il n'y a pas d'image //
			if(!isset($file_id)) { $istherepic = "nopic"; } else { $istherepic = "yespic"; } ; 
			?>
			<!-- champ texte contenant l'id de l'image -->
			<div class="block <?= $istherepic; ?>" style="display:none">
				<? echo $wp_media_access->getIdField(array('name'=> $mb->get_the_name(), 'value'=> $mb->get_the_value())); ?>
			</div>
			<!-- bouton ajouter image -->	
				<? echo $wp_media_access->getButton(array('label'=> 'Choisir une image')); ?>
				<a class="button" href="" onclick="jQuery('#file_name, #pic').empty(); jQuery('.mediaid-nn').val(''); return false;">supprimer le fichier</a>
			<!-- nom de l'image -->
			<p>
				<span id="file_name"><em><? if(!empty($file_id)) echo get_the_title($mb->get_the_value());?></em></span>
			</p>


		</div>
	</div>
 
</div>