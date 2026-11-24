// ============================================================
// Locket Remote Config Rewrite - minhwuan.com
// Endpoint: firebaseremoteconfig.googleapis.com
// Tác giả: minhwuan.com | Minh Quân
// ============================================================

let obj = JSON.parse(typeof $response != "undefined" && $response.body ? $response.body : "{}");
if (!obj || !obj.entries) {
  $done({});
} else {

  Object.assign(obj.entries, {
    feature_gates: JSON.stringify({
      app_icon_picker: "enabled",
      camera_roll: "enabled",
      camera_theme: "enabled",
      locket_views: "enabled",
      long_captions: "enabled",
      longer_video: "enabled",
      unlimited_friends: "enabled",
      priority_support: "enabled",
      profile_badge: "enabled",
      remove_ads: "enabled",
      video: "enabled",
      custom_widget_frames: "enabled",
      streak_recovery: "enabled"
    }),
    upsell_features: JSON.stringify({
      app_icon_picker: true,
      camera_roll: true,
      camera_theme: true,
      locket_views: true,
      remove_ads: true,
      custom_widget_frames: true,
      filter: false,
      filters: false,
      ai_filter: false,
      ai_filters: false
    }),
    paywall_presentation_config: JSON.stringify({
      uid: "paywall_testflight",
      onboarding: false,
      after_sent_moment: false,
      after_moment: false,
      after_capture: false,
      on_foreground: false,
      interval: 2592000,
      profile_banner: true
    }),
    feature_discovery_popup_config: JSON.stringify({
      tag: "Locket gold Minhwuan.com 💛",
      tag_gradient: true,
      tag_style: "gold_gradient",
      title: "Đã kích hoạt 💛",
      feature_set: [
        {
          title: "minhwuan.com",
          body: "💛Chúc bạn có trải nghiệm vui vẻ, đừng quên lên minhwuan.com để lụm vài thứ hay ho hơn nhé💛",
          imageURL: "https://raw.githubusercontent.com/mwuandz/locket-minhwuan/main/assets/locket-logo.svg"
        }
      ],
      primary_button_title: "Xong",
      campaign: "locket_gold_welcome_minhwuan",
      start_at: "2020-01-01T00:00:00",
      end_at: "2099-12-31T23:59:59",
      use_local_time_zone: true
    }),
    android_subscribe_gold_button_enabled: "false",
    profile_badge_visible: "true",
    lunar_new_year_app_icon_enabled: "true",
    settings_instagram_url: "https://minhwuan.com",
    settings_tiktok_url: "https://minhwuan.com",
    is_gold: "true",
    has_gold: "true",
    free_filters_enabled: "true",
    all_filters_free: "true",
    require_gold_for_filters: "false",
    filter_upsell_enabled: "false"
  });

  Object.assign(obj.entries, {
    camera: JSON.stringify({
      gold_max_duration: 60.0,
      goldMaxDuration: 60.0,
      max_duration: 60.0,
      maxDuration: 60.0,
      ultra_wide: true,
      volume_button: true,
      flash_button: true,
      quality_mbps: 0.9
    })
  });

  Object.assign(obj.entries, {
    history_ads_mode: "off",
    history_ads_prefetch_count: "0"
  });
}

$done({ body: JSON.stringify(obj) });
