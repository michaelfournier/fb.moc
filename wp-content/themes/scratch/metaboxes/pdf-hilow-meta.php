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
        console.log(jQuery(response.selector));
        jQuery(response.selector).closest('.inside').find('.preview').html(response.image_html);
        // affiche le nom de l'image
        jQuery(response.selector).closest('.inside').find('.pic_name').html(response.file_name);
        jQuery(response.selector).closest('.inside').find('.hidden').val(response.file_name);
      });
  }
</script>
<?php
}
?>
<div class="my_meta_control">
    <!-- ENGLISH VERSION -->
	<div class="wpa_group">
	<? $mb->the_field('pdf_en'); ?>	
		<h3 class="handle">PDF english version</h3>		
		<!-- HIGH RES -->	
		<div class="inside">
		   <?php $wp_media_access->setGroupName('n1')->setInsertButtonLabel('Insert')->setTab('library&post_mime_type=application/pdf'); ?>	
		   <h4>PDF High Resolution</h4>
			<div style="clear:both; float:left" class="preview">
				<?
				$file_id = $mb->meta['pdf_en']['high']['pdfid'];
				$image_thumbnail = @wp_get_attachment_image_src( $file_id, 'thumbnail', true );
				//$image_thumbnail = @$image_thumbnail[0];
				$image_html = "<img id='icon-thumbnail_preview' src='$image_thumbnail[0]' style='overflow:hidden' width='$image_thumbnail[1]' height='$image_thumbnail[2]' alt='' />";
				echo @$image_html;
				?>
			</div>
			<? 
			// si il n'y a pas d'image //
			if(!isset($file_id)) { $istherepic = "nopic"; } else { $istherepic = "yespic"; } ; 
			?>
			<!-- champ texte contenant l'id de l'image -->
			<div class="block <?= $istherepic; ?>" style="display:none">
			<? $pdfidvalue=""; if (!empty($mb->meta['pdf_en']['high']['pdfid'])) $pdfidvalue = $mb->meta['pdf_en']['high']['pdfid']; ?>
			<? echo $wp_media_access->getIdField(array('name'=> "_filespdf[pdf_en][high][pdfid]", 'value'=> $pdfidvalue)); ?>
			</div>
			<!-- bouton ajouter image -->
				<? echo $wp_media_access->getButton(array('label'=> 'Choisir un fichier')); ?>
				<a class="button" href="" onclick="jQuery(this).closest('.inside').find('.pic_name, .preview').empty(); jQuery(this).closest('.inside').find('.mediaid-n1, .hidden').val(''); return false;">supprimer le fichier</a>
			<!-- nom de l'image -->
			<p>
				<span class="pic_name"><em><? if(!empty($file_id)) { $titlepdf = $mb->meta['pdf_en']['high']['title']; echo $titlepdf; } ?></em></span>
			</p>
			<!-- titre -->
			<input class="hidden" id="_filespdf[pdf_en][high][title]" name="_filespdf[pdf_en][high][title]" type="hidden" value="<? if(!empty($file_id)) echo $titlepdf; ?>">
		</div>
        <!-- LOW RES -->
		<div class="inside">
		   <?php $wp_media_access->setGroupName('n2')->setInsertButtonLabel('Insert')->setTab('library&post_mime_type=application/pdf'); ?>	
		   <h4>PDF Low Resolution</h4>
			<div style="clear:both; float:left" class="preview">
				<?
				$file_id = $mb->meta['pdf_en']['low']['pdfid'];
				$image_thumbnail = @wp_get_attachment_image_src( $file_id, 'thumbnail', true );
				//$image_thumbnail = @$image_thumbnail[0];
				$image_html = "<img id='icon-thumbnail_preview' src='$image_thumbnail[0]' style='overflow:hidden' width='$image_thumbnail[1]' height='$image_thumbnail[2]' alt='' />";
				echo @$image_html;
				?>
			</div>
			<? 
			// si il n'y a pas d'image //
			if(!isset($file_id)) { $istherepic = "nopic"; } else { $istherepic = "yespic"; } ; 
			?>
			<!-- champ texte contenant l'id de l'image -->
			<div class="block <?= $istherepic; ?>" style="display:none">
			    <? $pdfidvalue=""; if (!empty($mb->meta['pdf_en']['low']['pdfid'])) $pdfidvalue = $mb->meta['pdf_en']['high']['pdfid']; ?>
				<? echo $wp_media_access->getIdField(array('name'=> "_filespdf[pdf_en][low][pdfid]", 'value'=> $pdfidvalue)); ?>
			</div>
			<!-- bouton ajouter image -->	
				<? echo $wp_media_access->getButton(array('label'=> 'Choisir un fichier')); ?>
				<a class="button" href="" onclick="jQuery(this).closest('.inside').find('.pic_name, .preview').empty(); jQuery(this).closest('.inside').find('.mediaid-n2, .hidden').val(''); return false;">supprimer le fichier</a>
			<!-- nom de l'image -->
			<p>
				<span class="pic_name"><em><? if(!empty($file_id)) { $titlepdf =  $mb->meta['pdf_en']['low']['title']; echo $titlepdf; } ?></em></span>
			</p>
			<!-- titre -->
			<input class="hidden" id="_filespdf[pdf_en][low][title]" name="_filespdf[pdf_en][low][title]" type="hidden" value="<? if(!empty($file_id)) echo $titlepdf; ?>">
		</div>
	</div>
    <!-- VERSION FRANÇAISE -->
	<div class="wpa_group">
	<? $mb->the_field('pdf_fr'); ?>	
		<h3 class="handle">PDF version française</h3>		
		<!-- HIGH RES -->	
		<div class="inside fr">
		   <?php $wp_media_access->setGroupName('n3')->setInsertButtonLabel('Insert')->setTab('library&post_mime_type=application/pdf'); ?>	
		   <h4>PDF High Resolution</h4>
			<div style="clear:both; float:left" class="preview">
				<?
				$file_id = $mb->meta['pdf_fr']['high']['pdfid'];
				$image_thumbnail = @wp_get_attachment_image_src( $file_id, 'thumbnail', true );
				//$image_thumbnail = @$image_thumbnail[0];
				$image_html = "<img id='icon-thumbnail_preview' src='$image_thumbnail[0]' style='overflow:hidden' width='$image_thumbnail[1]' height='$image_thumbnail[2]' alt='' />";
				echo @$image_html;
				?>
			</div>
			<? 
			// si il n'y a pas d'image //
			if(!isset($file_id)) { $istherepic = "nopic"; } else { $istherepic = "yespic"; } ; 
			?>
			<!-- champ texte contenant l'id de l'image -->
			<div class="block <?= $istherepic; ?>" style="display:none">
			    <? $pdfidvalue="";  if (!empty($mb->meta['pdf_fr']['high']['pdfid'])) $pdfidvalue = $mb->meta['pdf_fr']['high']['pdfid']; ?>
				<? echo $wp_media_access->getIdField(array('name'=> "_filespdf[pdf_fr][high][pdfid]", 'value'=> $pdfidvalue)); ?>
			</div>
			<!-- bouton ajouter image -->	
				<? echo $wp_media_access->getButton(array('id'=>'', 'label'=> 'Choisir un fichier')); ?>
				<a class="button" href="" onclick="jQuery(this).closest('.inside').find('.pic_name, .preview').empty(); jQuery(this).closest('.inside').find('.mediaid-n3, .hidden').val(''); return false;">supprimer le fichier</a>
			<!-- nom de l'image -->
			<p>
				<span class="pic_name"><em><? if(!empty($file_id)) { $titlepdf = $mb->meta['pdf_fr']['high']['title']; echo $titlepdf; } ?></em></span>
			</p>
			<!-- titre -->
			<input class="hidden" id="_filespdf[pdf_fr][high][title]" name="_filespdf[pdf_fr][high][title]" type="hidden" value="<? if(!empty($file_id)) echo $titlepdf; ?>">
		</div>
        <!-- LOW RES -->
		<div class="inside">
		   <?php $wp_media_access->setGroupName('n4')->setInsertButtonLabel('Insert')->setTab('library&post_mime_type=application/pdf'); ?>	
		   <h4>PDF Low Resolution</h4>
			<div style="clear:both; float:left" class="preview">
				<?
				$file_id = $mb->meta['pdf_fr']['low']['pdfid'];
				$image_thumbnail = @wp_get_attachment_image_src( $file_id, 'thumbnail', true );
				//$image_thumbnail = @$image_thumbnail[0];
				$image_html = "<img id='icon-thumbnail_preview' src='$image_thumbnail[0]' style='overflow:hidden' width='$image_thumbnail[1]' height='$image_thumbnail[2]' alt='' />";
				echo @$image_html;
				?>
			</div>
			<? 
			// si il n'y a pas d'image //
			if(!isset($file_id)) { $istherepic = "nopic"; } else { $istherepic = "yespic"; } ; 
			?>
			<!-- champ texte contenant l'id de l'image -->
			<div class="block <?= $istherepic; ?>" style="display:none">
			    <? $pdfidvalue=""; if (!empty($mb->meta['pdf_fr']['low']['pdfid'])) $pdfidvalue = $mb->meta['pdf_fr']['low']['pdfid']; ?>
				<? echo $wp_media_access->getIdField(array('name'=> "_filespdf[pdf_fr][low][pdfid]", 'value'=> $pdfidvalue)); ?>
			</div>
			<!-- bouton ajouter image -->	
				<? echo $wp_media_access->getButton(array('label'=> 'Choisir un fichier')); ?>
				<a class="button" href="" onclick="jQuery(this).closest('.inside').find('.pic_name, .preview').empty(); jQuery(this).closest('.inside').find('.mediaid-n4, .hidden').val(''); return false;">supprimer le fichier</a>
			<!-- nom de l'image -->
			<p>
				<span class="pic_name"><em><? if(!empty($file_id)) { $titlepdf = $mb->meta['pdf_fr']['low']['title']; echo $titlepdf; } ?></em></span>
			</p>
			<!-- titre -->
			<input class= "hidden" id="_filespdf[pdf_fr][low][title]" name="_filespdf[pdf_fr][low][title]" type="hidden" value="<? if(!empty($file_id)) echo $titlepdf; ?>">
		</div>
	</div>
 
</div>