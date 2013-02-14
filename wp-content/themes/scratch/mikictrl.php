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
    }
?>