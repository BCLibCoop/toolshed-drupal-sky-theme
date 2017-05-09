<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix node-file"<?php print $attributes; ?>>

  <?php print $unpublished; ?>

  <?php print render($title_prefix); ?>

  <?php if(!empty($user_picture) || $title || (!empty($submitted) && $display_submitted)): ?>
    <header<?php print $header_attributes; ?>>

      <!--Node title inside content bounds -->
      <?php $types = array(
    'training_resource',
    'program_info',
    'conference_presentation');
      ?>

      <?php if ($title && in_array($node->type, $types)): ?>
        <h1 id="node-title" class="node-title-a" <?php print $attributes; ?>>
        <?php print $title; ?>
        </h1>
      <?php endif; ?>

      <!-- <?php print $user_picture; ?> -->

      <?php if ($title && !$page): ?>
        <h1<?php print $title_attributes; ?>>
          <a href="<?php print $node_url; ?>" rel="bookmark"><?php print $title; ?></a>
        </h1>
      <?php endif; ?>

      <!-- <?php if ($node->type): ?>

	<section class="node-type"><?php print node_type_get_name($node->type); ?></section>
      <?php endif; ?> -->
      <div class="author">
      <?php if ($content['field_authot']): ?>
        <span>By:</span> <?php print render($content['field_authot']); ?>
      <?php endif; ?>
      <?php if ($content['field_authot'] && $content['field_source_library_region']): ?><span>,</span><?php endif; ?>
      <?php if ($content['field_source_library_region']): ?>
          <?php
          print render(field_view_field('node', $node, 'field_source_library_region', array('label'=>'hidden'))); 
          ?>
      <?php endif; ?></div>
      <?php if ($display_submitted): ?>
        <div class="submitted"><?php print $submitted; ?></div>
      <?php endif; ?>
    </header>
  <?php endif; ?>

  <?php print render($title_suffix); ?>

  <div<?php print $content_attributes; ?>>
  <?php
    hide($content['comments']);
    hide($content['links']);
    print render($content);
  ?>
  </div>

  <!-- <?php if ($links = render($content['links'])): ?>
    <nav<?php print $links_attributes; ?>><?php print $links; ?></nav>
  <?php endif; ?> -->

  <?php //print render($content['comments']); ?>

</article>
