function applycss(css) {
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode(css));
  head.appendChild(s);
}

applycss(`
  a {
    cursor: pointer;
  }
  .client_channels_list_container {
    background: #222;
    color: #DDD;
    max-width: 206px;
  }
  #channels_scroller.show_which_channel_is_active ul li.active .primary_action {
    background-color: #0b629c;
    color: #222;
  }
  #channels_scroller.show_which_channel_is_active ul li.active .primary_action .prefix {
    color: #222;
  }
  #channels_scroller.show_which_channel_is_active li.member.active .presence {
    color: #DDD;
  }
  #channels_scroller .presence.active {
    color: #0b629c;
  }
  .channels_list_holder ul li .primary_action {
    color: #DDD;
  }
  .channels_list_holder ul li .primary_action:not(.feature_user_custom_status):hover {
    background: #333;
    color: #DDD;
  }
  .channels_list_holder h2 {
    color: #DDD;
  }
  #team_menu {
    border-bottom: 1px solid #0b629c;
    background: #222;
    border-right: 1px solid #0b629c;
  }
  #team_menu .notifications_menu_btn {
    color: #DDD;
  }
  #team_menu_user {
    color: #DDD;
  }
  #presence.active:before {
    color: #0b629c;
  }
  body:not(.loading) #team_menu:hover {
    background: #333;
    border-bottom: 1px solid #0b629c;
  }
  #col_channels {
    color: #DDD;
    width: 206px;
    background-color: #222;
  }
  #col_channels_footer {
    color: #DDD;
    height: 4.5rem;
  }
  #quick_switcher_btn {
    background: #222;
      color: #DDD;
    border-top: 1px solid #0b629c;
    border-right: 1px solid #0b629c;
    height: 4.5rem;
  }
  #quick_switcher_btn:hover {
      color: #DDD;
    background: #333;
    border-top: 1px solid #0b629c;
    border-right: 1px solid #0b629c;
  }
  #quick_switcher_btn > i {
    color: #DDD;   
  }
  #quick_switcher_btn:active > i, #quick_switcher_btn:focus > i, #quick_switcher_btn:hover > i {
    color: #DDD;   
  }
  #quick_switcher_btn:hover #quick_switcher_label {
    color: #DDD;   
  }
  #quick_switcher_btn:hover #quick_switcher_shortcut {
    color: #DDD;   
  }
  #quick_switcher_btn:hover #quick_switcher_shortcut {
    color: #DDD;   
  }
  #quick_switcher_label {
    color: #DDD;   
  }
  .slackbot_icon {
    color: #b71c1c;
  }
  .client_main_container {
    background: #2D2E31;
  }
  #client_header {
    background: #222;
  }
  .channel_header {
    background: #222;
    color: #DDD;
  }
  #client_body {
    background: #2D2E31;
  }
  .supports_custom_scrollbar:not(.slim_scrollbar) #col_channels:hover #channels_scroller::-webkit-scrollbar {
    background: #333;
    width: .75em;
  }
  .supports_custom_scrollbar:not(.slim_scrollbar) #col_channels:hover #channels_scroller::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background: #444;
  }
  .supports_custom_scrollbar:not(.slim_scrollbar) #col_channels:hover #channels_scroller::-webkit-scrollbar-thumb {
    background: #333;
    outline: 1px solid #333;
    color: #333;
  }
  html:not(.slim_scrollbar) #col_channels #channels_scroller {
    border-right: 1px solid #222;
  }
  .supports_custom_scrollbar:not(.slim_scrollbar) #col_channels:hover #channels_scroller {
    border-right: none;
  }
  #client_body:not(.onboarding):before {
    background: #222;
    border-color: #222;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  #app_index_scroller_div {
    background: #222;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    overflow-y: visible;
    height: .75em;
  }
  ts-message {
    // border-top: 1px solid #323336;
    border-top: 1px solid #222;
    // padding: .4em 10px .4em 0;
  }
  ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply),ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply) {
    background: #3A3B3E;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  .message_content {
    color: #DDD;
  }
  .message_content > .message_content_header > .message_content_header_left > a:first-child {
    color: #0b629c !important;
  }
  .day_container .day_divider .day_divider_label {
    top: -1px;
    background: #222;
    color: #0b629c;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  .loading #loading-zone {
    left: 206px;
  }
  #loading_welcome {
    background: #222;
  }
  #loading_message p {
    color: #DDD;
  }
  .day_container .day_msgs {
    border-top: 1px solid #0b629c;
  }
  ts-message .mention {
    background: #0b629c;
    color: #222;
    padding: .25em;
    border-radius: 4px;
  }
  code {
    color: #222;
    background: #CCC;
    padding: .25em;
    border-radius: 4px;
  }
  pre {
    color: #222;
    background: #CCC;
    tab-size: 2;
  }
  .rxn {
    background: #222;
    color: #0b629c;
    border: 1px solid #0b629c;
  }
  .rxn .emoji_rxn_count {
    color: #0b629c;
  }
  .rxn:hover .emoji_rxn_count {
    color: #0b629c;
  }
  .rxn.menu_rxn .ts_icon {
    color: #444;
  }
  ts-message .bot_label {
    background: #0b629c;
    color: #222;
  }
  .bot_message .message_sender a {
    color: #DDD;
  }
  #msgs_div > .day_container:last-child > .day_msgs {
    padding-bottom: 1em;
  }
  #footer {
    background-image: none;
    background: #222;
    height: 4.5rem;
  }
  #msg_form {
    margin-top: .25em;
  }
  .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar,.supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar {
    background: #333;
    width: 1em;
  }
  .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-track,.supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background: #444;
  }
  .supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-thumb,.supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-thumb {
    background: #333;
    outline: 1px solid #333;
    color: #333;
  }
  .supports_custom_scrollbar:not(.slim_scrollbar) #messages_container:after {
    background: none;
  }
  .supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div {
    border-right: none;
  }
  #msg_input {
    background: #444;
    color: #DDD;
    border: 1px solid #0b629c;
  }
  #msg_input.focus,#msg_input:focus {
    border: 1px solid #0b629c;
  }
  #primary_file_button {
    color: #0b629c;
    background: #444;
    border-color: #0b629c;
  }
  #primary_file_button.active,#primary_file_button:hover {
    color: #DDD;
    background: #0b629c;
    border-color: #0b629c;
  }
  #msg_input.focus+#primary_file_button:not(:hover):not(.active),#msg_input:focus+#primary_file_button:not(:hover):not(.active) {
    border-color: #0b629c;
    color: #0b629c;
  }
  ts-message .action_hover_container.narrow_buttons .btn_msg_action {
    background: #222;
    color: #DDD;
  }
  .attachment_group {
    max-width: 1000px;
  }
  .attachment_group a {
    text-decoration: underline;
    cursor: pointer;
  }
  .attachment_group.has_border {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    border-top: 1px;
    border-right: 1px;
    border-color: #101010;
  }
  .msg_inline_attachment_column.column_border {
    background-color: #0b629c;
  }
  #notification_bar {
    color: #DDD;
  }
  #typing_text {
    color: #DDD;
  }
  #special_formatting_text > b {
    color: #DDD;
  }
  #search_terms {
    background: #444;
    color: #AAA;
  }
  #search_container .icon_search {
    color: #AAA;
  }
  #channel_title {
    color: #DDD;
  }
  #channel_actions_toggle {
    color: #AAA;
  }
  #details_toggle {
    color: #AAA;
  }
  .channel_calls_button .call_icon.call_window_offline {
    color: #444;
  }
  .channel_calls_button .call_icon.call_window_online {
    color: #AAA;
  }
  #channel_header_info {
    color: #AAA;
  }
  #star_container {
    color: #AAA;
  }
  #channel_header_info button {
    color: #AAA;
  }
  #whats_new_toggle {
    background-color: #444 !important;
    color: #0b629c !important;
  }
  #whats_new_toggle:hover {
    background-color: #333 !important;
  }
  #recent_mentions_toggle {
    color: #AAA;
  }
  #recent_mentions_toggle:hover {
    color: #b71c1c;
  }
  #stars_toggle {
    color: #AAA;
  }
  #stars_toggle:hover {
    color: #ffeb3b;
  }
  #flex_menu_toggle {
    color: #AAA;
  }
  #flex_menu_toggle:hover {
    color: #0b629c;
  }
  .inline_edit .inline_edit_inner:before {
    background-color: #222;
    border-radius: 0;
    border: 0;
  }
  #messages_container {
    background: #2D2E31;
  }
  #messages_container.has_top_messages_banner:before {
    opacity: 0;
  }
  #connection_div {
    color: #b71C1C;
    background: #222;
  }
  #connection_div > a {
    color: #0b629c;
  }
  #msg_input.offline:not(.pretend-to-be-online) {
    background-color: #DDD !important;
    border: 2px solid #b71c1c;
  }
  #msgs_undread_divider .unread_divider {
    color: #0b629c;
  }
  #msgs_div .unread_divider hr {
    border-top-color: #0b629c;
  }
  #msgs_div .unread_divider.no_unreads hr {
    border-top-color: #0b629c;
  }
  #msgs_div .unread_divider hr,#unread_msgs_div .unread_divider hr {
    border-top-color: #0b629c !important;
  }
  #msgs_div .unread_divider.no_unreads .divider_label {
    color: #0b629c;
  }
  #msgs_div .unread_divider .divider_label {
    background: #222;
  }
  #im_title {
    color: #DDD;   
  }
  .presence.active {
    color: #0b629c;   
  }
  ts-jumper ts-jumper-container {
      border: 1px solid #0b629c;
    background: #222;   
      color: #DDD;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  ts-jumper ts-jumper-help {
    color: #DDD;   
  }
  ts-jumper input[type=text], ts-jumper input[type=text]:focus {
    background: #333;   
      color: #DDD;
  }
  .btn_outline {
    background: #444;
      color: #0b629c !important;
      border: 1px solid #0b629c;
      outline: none;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  .btn_outline:after {
    border: 1px solid #0b629c;   
  }
  .btn_outline.hover, .btn_outline:focus, .btn_outline:hover {
    background: #333;
      color: #0b629c !important;
  }
  body:not(.loading) #team_menu.active {
    background: #333;   
  }
  .channels_list_holder ul li .primary_action.feature_user_custom_status:hover .im_name_background {
    background-color: #333;   
  }
  #menu {
    background-color: #222;   
  }
  #menu ul li a {
    color: #DDD;   
  }
  .menu {
    background-color: #222;
      color: #DDD;
  }
  .menu ul li a {
    background-color: #222;
      color: #DDD;
  }
  .supports_custom_scrollbar .team_menu.slack_menu .menu_content {
    background-color: #222;   
      color: #DDD;
  }
  .slack_menu_download {
    background-color: #222;
      color: #DDD;
  }
  .menu .section_header .header_label {
    background-color: #222;   
  }
  #channels_scroller.show_which_channel_is_active ul li.active .primary_action.feature_user_custom_status .im_name_background {
    background-color: #0b629c;   
  }
  #fs_modal_bg {
    background-color: #222;
      color: #DDD;
  }
  #messages_container {
    background: #222;
  }
  .p-channel_sidebar {
    background: #171717 !important
  }
`);