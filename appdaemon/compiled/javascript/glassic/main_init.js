$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Основен панел");
    content_width = (110 + 5) * 3 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [110, 110],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 3,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-skynet" id="default-skynet"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 3, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-temp" id="default-temp"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-georgi" id="default-georgi"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-plamena" id="default-plamena"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-gergana" id="default-gergana"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-kitchen-1" id="default-kitchen-1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-bedroom-1" id="default-light-bedroom-1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-media" id="default-media"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-tank" id="default-tank"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-elena" id="default-elena"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 5)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-skynet"] = new basedisplay("default-skynet", "", "glassic", {'icons': [], 'use_comma': 0, 'widget_type': 'basedisplay', 'skin': 'glassic', 'static_css': {'title_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'state_text_style': 'color: white;', 'value_style': 'color: #00aaff;', 'unit_style': '', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;'}, 'use_hass_icon': 1, 'fields': {'title': '', 'state_text': '', 'title2': '', 'unit': '', 'value': 'SKYNET'}, 'css': {}, 'static_icons': [], 'precision': 1})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "glassic", {'icons': [], 'use_comma': 0, 'widget_type': 'baseclock', 'skin': 'glassic', 'static_css': {'time_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'date_style': 'font-size: 175%;color: #fff;font-weight: 700;'}, 'time_format': '24hr', 'use_hass_icon': 1, 'fields': {'date': '', 'time': ''}, 'css': {}, 'static_icons': [], 'precision': 1})
    
        widgets["default-temp"] = new basedisplay("default-temp", "", "glassic", {'icons': [], 'use_comma': 0, 'skin': 'glassic', 'static_css': {'title_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'state_text_style': 'font-size: 100%;color: #00aaff;', 'value_style': '', 'unit_style': '', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;'}, 'entity': 'sensor.external_temp', 'use_hass_icon': 1, 'fields': {'title': 'Температура', 'state_text': '', 'title2': '', 'unit': '', 'value': ''}, 'static_icons': [], 'precision': 1, 'widget_type': 'basedisplay', 'sub_entity': '', 'css': {'value_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;', 'text_style': 'font-size: 100%;color: #00aaff;', 'unit_style': 'font-size: 125%;color: #00aaff;'}})
    
        widgets["default-georgi"] = new baseswitch("default-georgi", "", "glassic", {'icons': {'icon_on': 'fa-male', 'icon_off': 'fa-male'}, 'use_comma': 0, 'static_css': {'title_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'state_text_style': 'color: white;'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': 'georgi_coolpad', 'location_name': 'not_home'}, 'entity': 'device_tracker.georgi_coolpad', 'state_text': 1, 'fields': {'title': 'Георги', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}, 'state_active': 'home', 'precision': 1, 'icon_off': 'fa-male', 'static_icons': [], 'icon_on': 'fa-male', 'enable': 0, 'widget_type': 'baseswitch', 'active_map': ['home'], 'post_service_active': {'service': 'device_tracker/see', 'dev_id': 'georgi_coolpad', 'location_name': 'home'}, 'use_hass_icon': 1, 'css': {'icon_style_inactive': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;', 'icon_style_active': 'color: #00aaff;line-height: 90%;'}, 'state_inactive': 'not_home', 'state_map': {'not_home': 'Навън', 'home': 'У дома'}, 'skin': 'glassic'})
    
        widgets["default-plamena"] = new baseswitch("default-plamena", "", "glassic", {'icons': {'icon_on': 'fa-female', 'icon_off': 'fa-female'}, 'use_comma': 0, 'static_css': {'title_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'state_text_style': 'color: white;'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': 'plamena_elephone', 'location_name': 'not_home'}, 'entity': 'device_tracker.plamena_elephone', 'state_text': 1, 'fields': {'title': 'Пламена', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}, 'state_active': 'home', 'precision': 1, 'icon_off': 'fa-female', 'static_icons': [], 'icon_on': 'fa-female', 'enable': 0, 'widget_type': 'baseswitch', 'active_map': ['home'], 'post_service_active': {'service': 'device_tracker/see', 'dev_id': 'plamena_elephone', 'location_name': 'home'}, 'use_hass_icon': 1, 'css': {'icon_style_inactive': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;', 'icon_style_active': 'color: #00aaff;line-height: 90%;'}, 'state_inactive': 'not_home', 'state_map': {'not_home': 'Навън', 'home': 'У дома'}, 'skin': 'glassic'})
    
        widgets["default-gergana"] = new baseswitch("default-gergana", "", "glassic", {'icons': {'icon_on': 'fa-child', 'icon_off': 'fa-child'}, 'use_comma': 0, 'static_css': {'title_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'state_text_style': 'color: white;'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': 'android7099bb111999b997', 'location_name': 'not_home'}, 'entity': 'device_tracker.android7099bb111999b997', 'state_text': 1, 'fields': {'title': 'Гергана', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}, 'state_active': 'home', 'precision': 1, 'icon_off': 'fa-child', 'static_icons': [], 'icon_on': 'fa-child', 'enable': 0, 'widget_type': 'baseswitch', 'active_map': ['home'], 'post_service_active': {'service': 'device_tracker/see', 'dev_id': 'android7099bb111999b997', 'location_name': 'home'}, 'use_hass_icon': 1, 'css': {'icon_style_inactive': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;', 'icon_style_active': 'color: #00aaff;line-height: 90%;'}, 'state_inactive': 'not_home', 'state_map': {'not_home': 'Навън', 'home': 'У дома'}, 'skin': 'glassic'})
    
        widgets["default-kitchen-1"] = new baselight("default-kitchen-1", "", "glassic", {'icons': {'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb'}, 'use_comma': 0, 'static_css': {'level_style': 'color: #888;', 'title_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'level_down_style': 'color: #888;', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'level_up_style': 'color: #888;', 'unit_style': 'color: #888;', 'state_text_style': 'color: #fff;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.kitchen_1'}, 'entity': 'light.kitchen_1', 'use_hass_icon': 1, 'fields': {'title2': '', 'icon': '', 'units': '%', 'title': 'Bedroom 2', 'state_text': '', 'level': '', 'icon_style': ''}, 'on_attributes': {'brightness': 100}, 'precision': 1, 'icon_off': 'mdi-lightbulb', 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'icon_on': 'mdi-lightbulb-on', 'state_map': {'off': 'Изключено', 'on': 'Включено'}, 'widget_type': 'baselight', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.kitchen_1'}, 'css': {'icon_style_inactive': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;', 'icon_style_active': 'color: #00aaff;line-height: 90%;'}, 'state_text': 1, 'skin': 'glassic'})
    
        widgets["default-light-bedroom-1"] = new baselight("default-light-bedroom-1", "", "glassic", {'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'use_comma': 0, 'static_css': {'level_style': 'color: #888;', 'title_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'level_down_style': 'color: #888;', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'level_up_style': 'color: #888;', 'unit_style': 'color: #888;', 'state_text_style': 'color: #fff;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.bedroom_1'}, 'entity': 'light.bedroom_1', 'use_hass_icon': 1, 'fields': {'title2': '', 'icon': '', 'units': '%', 'title': '', 'state_text': '', 'level': '', 'icon_style': ''}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'precision': 1, 'widget_type': 'baselight', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.bedroom_1'}, 'title_is_friendly_name': 1, 'css': {'icon_style_inactive': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;', 'icon_style_active': 'color: #00aaff;line-height: 90%;'}, 'skin': 'glassic'})
    
        widgets["default-reload"] = new javascript("default-reload", "", "glassic", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'command': 'location.reload(true)', 'widget_type': 'javascript', 'skin': 'glassic', 'static_css': {'title_style': 'color: #00aaff;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;'}, 'use_comma': 0, 'use_hass_icon': 1, 'fields': {'title': 'Презареди', 'title2': '', 'icon': '', 'icon_style': ''}, 'css': {'icon_active_style': 'color: #00aaff;line-height: 90%;', 'icon_inactive_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;'}, 'static_icons': [], 'precision': 1})
    
        widgets["default-media"] = new javascript("default-media", "", "glassic", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-tv'}, 'use_comma': 0, 'url': '/media', 'skin': 'glassic', 'static_css': {'title_style': 'color: #00aaff;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;'}, 'use_hass_icon': 1, 'fields': {'title': 'Медия', 'title2': '', 'icon': '', 'icon_style': ''}, 'static_icons': [], 'precision': 1, 'widget_type': 'javascript', 'icon_inactive': 'fa-tv', 'css': {'icon_active_style': 'color: #00aaff;line-height: 90%;', 'icon_inactive_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;'}})
    
        widgets["default-tank"] = new javascript("default-tank", "", "glassic", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-fish'}, 'use_comma': 0, 'url': '/tank', 'skin': 'glassic', 'static_css': {'title_style': 'color: #00aaff;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;'}, 'use_hass_icon': 1, 'fields': {'title': 'Аквариум', 'title2': '', 'icon': '', 'icon_style': ''}, 'static_icons': [], 'precision': 1, 'widget_type': 'javascript', 'icon_inactive': 'mdi-fish', 'css': {'icon_active_style': 'color: #00aaff;line-height: 90%;', 'icon_inactive_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;'}})
    
        widgets["default-elena"] = new javascript("default-elena", "", "glassic", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-bed'}, 'use_comma': 0, 'url': '/elena', 'skin': 'glassic', 'static_css': {'title_style': 'color: #00aaff;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;'}, 'use_hass_icon': 1, 'fields': {'title': 'Елена', 'title2': '', 'icon': '', 'icon_style': ''}, 'static_icons': [], 'precision': 1, 'widget_type': 'javascript', 'icon_inactive': 'fa-bed', 'css': {'icon_active_style': 'color: #00aaff;line-height: 90%;', 'icon_inactive_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;'}})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
    });

    // Set up timeout

    var myTimeout

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Основен панел", widgets);

});