<?
    class JSON_API_Mikictrl_Controller {

      public function get_custom_posts() {
      global $json_api;

      // See also: http://codex.wordpress.org/Template_Tags/query_posts
      $posts = $json_api->introspector->get_posts(array(
        'meta_key' => $json_api->query->key,
        'meta_value' => $json_api->query->value,
        'orderby' => $json_api->query->key
      ));

      return array(
        'key' => $json_api->query->key,
        'value' => $json_api->query->value,
        'posts' => $posts
      );
     }

  public function get_custom_post() {
    global $json_api, $post;
    extract($json_api->query->get(array('id', 'slug', 'post_id', 'post_slug', 'meta_key')));
    if ($id || $post_id) {
      if (!$id) {
        $id = $post_id;
      }
      $posts = $json_api->introspector->get_posts(array(
        'p' => $id
      ), true);
    } else if ($slug || $post_slug) {
      if (!$slug) {
        $slug = $post_slug;
      }
      $posts = $json_api->introspector->get_posts(array(
        'name' => $slug
      ), true);
    } else {
      $json_api->error("Include 'id' or 'slug' var in your request.");
    }
    if (count($posts) == 1) {
      $post = $posts[0];
      $previous = get_adjacent_post(false, '', true);
      $next = get_adjacent_post(false, '', false);
      $post = new JSON_API_Post($post);
      $response = array(
        'post' => $post
      );


          
      return $response;
    } else {
      $json_api->error("Not found.");
    }
  }

    }
?>