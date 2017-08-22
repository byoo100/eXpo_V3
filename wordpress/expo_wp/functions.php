<?php
/**
 * eXpo_wp functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package eXpo_wp
 */

if ( ! function_exists( 'expo_wp_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function expo_wp_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on eXpo_wp, use a find and replace
		 * to change 'expo_wp' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'expo_wp', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 1280, 560, true ); //16:7
		add_image_size( 'expo-sm', 320, 140, true );
		add_image_size( 'expo-md', 800, 350, true );
		add_image_size( 'expo-xl', 1920, 840, true );//16:7

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'Left-Menu' => esc_html__( 'Left Menu', 'expo' ),
			'Right-Menu' => esc_html__( 'Right Menu', 'expo' ),
			'Social' => esc_html__( 'Social Menu', 'expo' )
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'expo_wp_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'expo_wp_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function expo_wp_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'expo_wp_content_width', 640 );
}
add_action( 'after_setup_theme', 'expo_wp_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function expo_wp_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'expo_wp' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'expo_wp' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'expo_wp_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function expo_wp_scripts() {
	wp_enqueue_style( 'expo_wp-style', get_stylesheet_uri() );

	wp_enqueue_script( 'expo_wp-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'expo_wp-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'expo_wp_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/required/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/required/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/required/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/required/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/required/jetpack.php';
}

/**
 * TGM Plugin Activation
 */
require get_template_directory() . '/inc/TGM-Plugin-Activation/tgm-plugin-list.php';

/**
 * Load new controllers and endpoints for rest api
 */
include('inc/add_rest_api.php');
