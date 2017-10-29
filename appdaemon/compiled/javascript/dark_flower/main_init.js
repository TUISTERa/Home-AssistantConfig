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
    
        widgets["default-skynet"] = new basedisplay("default-skynet", "", "dark_flower", {'use_hass_icon': 1, 'use_comma': 0, 'skin': 'glassic', 'fields': {'title': '', 'value': 'SKYNET', 'state_text': '', 'unit': '', 'title2': ''}, 'css': {}, 'widget_type': 'basedisplay', 'icons': [], 'static_icons': [], 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'state_text_style': 'color: #fff;', 'value_style': 'color: #fff;', 'unit_style': '', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'title_style': 'font-weight: 400;color: #fff;'}, 'precision': 1})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "dark_flower", {'use_hass_icon': 1, 'use_comma': 0, 'skin': 'glassic', 'fields': {'date': '', 'time': ''}, 'css': {}, 'widget_type': 'baseclock', 'icons': [], 'static_icons': [], 'static_css': {'date_style': 'color: #fff;', 'time_style': 'color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'time_format': '24hr', 'precision': 1})
    
        widgets["default-temp"] = new basedisplay("default-temp", "", "dark_flower", {'fields': {'title': 'Температура', 'value': '', 'state_text': '', 'unit': '', 'title2': ''}, 'use_hass_icon': 1, 'sub_entity': '', 'precision': 1, 'entity': 'sensor.external_temp', 'widget_type': 'basedisplay', 'use_comma': 0, 'css': {'value_style': '', 'unit_style': '', 'text_style': 'color: #fff;'}, 'skin': 'glassic', 'icons': [], 'static_icons': [], 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'state_text_style': '', 'value_style': '', 'unit_style': '', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'title_style': 'font-weight: 400;color: #fff;'}})
    
        widgets["default-georgi"] = new baseswitch("default-georgi", "", "dark_flower", {'fields': {'title': 'Георги', 'state_text': '', 'icon_style': '', 'icon': '', 'title2': ''}, 'enable': 0, 'state_inactive': 'not_home', 'widget_type': 'baseswitch', 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': 'georgi_coolpad', 'location_name': 'home'}, 'precision': 1, 'entity': 'device_tracker.georgi_coolpad', 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'state_text_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'state_map': {'not_home': 'Навън', 'home': 'У дома'}, 'use_hass_icon': 1, 'use_comma': 0, 'icon_on': 'fa-male', 'active_map': ['home'], 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': 'georgi_coolpad', 'location_name': 'not_home'}, 'css': {'icon_style_inactive': 'color: #888;font-size: 250%;', 'icon_style_active': 'color: #ffaa00;font-size: 250%;'}, 'skin': 'glassic', 'icon_off': 'fa-male', 'icons': {'icon_off': 'fa-male', 'icon_on': 'fa-male'}, 'static_icons': [], 'state_active': 'home'})
    
        widgets["default-plamena"] = new baseswitch("default-plamena", "", "dark_flower", {'fields': {'title': 'Пламена', 'state_text': '', 'icon_style': '', 'icon': '', 'title2': ''}, 'enable': 0, 'state_inactive': 'not_home', 'widget_type': 'baseswitch', 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': 'plamena_elephone', 'location_name': 'home'}, 'precision': 1, 'entity': 'device_tracker.plamena_elephone', 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'state_text_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'state_map': {'not_home': 'Навън', 'home': 'У дома'}, 'use_hass_icon': 1, 'use_comma': 0, 'icon_on': 'fa-female', 'active_map': ['home'], 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': 'plamena_elephone', 'location_name': 'not_home'}, 'css': {'icon_style_inactive': 'color: #888;font-size: 250%;', 'icon_style_active': 'color: #ffaa00;font-size: 250%;'}, 'skin': 'glassic', 'icon_off': 'fa-female', 'icons': {'icon_off': 'fa-female', 'icon_on': 'fa-female'}, 'static_icons': [], 'state_active': 'home'})
    
        widgets["default-gergana"] = new baseswitch("default-gergana", "", "dark_flower", {'fields': {'title': 'Гергана', 'state_text': '', 'icon_style': '', 'icon': '', 'title2': ''}, 'enable': 0, 'state_inactive': 'not_home', 'widget_type': 'baseswitch', 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': 'android7099bb111999b997', 'location_name': 'home'}, 'precision': 1, 'entity': 'device_tracker.android7099bb111999b997', 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'state_text_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'state_map': {'not_home': 'Навън', 'home': 'У дома'}, 'use_hass_icon': 1, 'use_comma': 0, 'icon_on': 'fa-child', 'active_map': ['home'], 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': 'android7099bb111999b997', 'location_name': 'not_home'}, 'css': {'icon_style_inactive': 'color: #888;font-size: 250%;', 'icon_style_active': 'color: #ffaa00;font-size: 250%;'}, 'skin': 'glassic', 'icon_off': 'fa-child', 'icons': {'icon_off': 'fa-child', 'icon_on': 'fa-child'}, 'static_icons': [], 'state_active': 'home'})
    
        widgets["default-kitchen-1"] = new baselight("default-kitchen-1", "", "dark_flower", {'fields': {'title': 'Bedroom 2', 'units': '%', 'icon': '', 'state_text': '', 'icon_style': '', 'level': '', 'title2': ''}, 'widget_type': 'baselight', 'state_text': 1, 'static_icons': {'icon_down': 'fa-minus', 'icon_up': 'fa-plus'}, 'post_service_active': {'entity_id': 'light.kitchen_1', 'service': 'homeassistant/turn_on'}, 'precision': 1, 'entity': 'light.kitchen_1', 'state_map': {'off': 'Изключено', 'on': 'Включено'}, 'use_hass_icon': 1, 'use_comma': 0, 'icon_on': 'mdi-lightbulb-on', 'post_service_inactive': {'entity_id': 'light.kitchen_1', 'service': 'homeassistant/turn_off'}, 'css': {'icon_style_inactive': 'top: 45px !important;color: antiquewhite;', 'icon_style_active': 'top: 45px !important;color: #ffff00;'}, 'skin': 'glassic', 'icon_off': 'mdi-lightbulb', 'icons': {'icon_off': 'mdi-lightbulb', 'icon_on': 'mdi-lightbulb-on'}, 'on_attributes': {'brightness': 100}, 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'unit_style': 'color: #888;', 'level_style': 'color: #888;', 'level_up_style': 'color: #888;', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'level_down_style': 'color: #888;'}})
    
        widgets["default-light-bedroom-1"] = new baselight("default-light-bedroom-1", "", "dark_flower", {'fields': {'title': '', 'units': '%', 'icon': '', 'state_text': '', 'icon_style': '', 'level': '', 'title2': ''}, 'widget_type': 'baselight', 'post_service_active': {'entity_id': 'light.bedroom_1', 'service': 'homeassistant/turn_on'}, 'precision': 1, 'title_is_friendly_name': 1, 'use_hass_icon': 1, 'use_comma': 0, 'entity': 'light.bedroom_1', 'post_service_inactive': {'entity_id': 'light.bedroom_1', 'service': 'homeassistant/turn_off'}, 'css': {'icon_style_inactive': 'top: 45px !important;color: antiquewhite;', 'icon_style_active': 'top: 45px !important;color: #ffff00;'}, 'skin': 'glassic', 'icons': {'icon_off': 'fa-lightbulb-o', 'icon_on': 'fa-lightbulb-o'}, 'static_icons': {'icon_down': 'fa-minus', 'icon_up': 'fa-plus'}, 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'unit_style': 'color: #888;', 'level_style': 'color: #888;', 'level_up_style': 'color: #888;', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'level_down_style': 'color: #888;'}})
    
        widgets["default-reload"] = new javascript("default-reload", "", "dark_flower", {'command': 'location.reload(true)', 'widget_type': 'javascript', 'use_comma': 0, 'fields': {'title': 'Презареди', 'icon_style': '', 'icon': '', 'title2': ''}, 'use_hass_icon': 1, 'skin': 'glassic', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'static_icons': [], 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'precision': 1})
    
        widgets["default-media"] = new javascript("default-media", "", "dark_flower", {'fields': {'title': 'Медия', 'icon_style': '', 'icon': '', 'title2': ''}, 'widget_type': 'javascript', 'url': '/media', 'precision': 1, 'icon_inactive': 'fa-tv', 'use_hass_icon': 1, 'use_comma': 0, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'skin': 'clear_sky', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-tv'}, 'static_icons': [], 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}})
    
        widgets["default-tank"] = new javascript("default-tank", "", "dark_flower", {'fields': {'title': 'Аквариум', 'icon_style': '', 'icon': '', 'title2': ''}, 'widget_type': 'javascript', 'url': '/tank', 'precision': 1, 'icon_inactive': 'mdi-fish', 'use_hass_icon': 1, 'use_comma': 0, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'skin': 'clear_sky', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-fish'}, 'static_icons': [], 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}})
    
        widgets["default-elena"] = new javascript("default-elena", "", "dark_flower", {'fields': {'title': 'Елена', 'icon_style': '', 'icon': '', 'title2': ''}, 'widget_type': 'javascript', 'url': '/elena', 'precision': 1, 'icon_inactive': 'fa-bed', 'use_hass_icon': 1, 'use_comma': 0, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'skin': 'clear_sky', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-bed'}, 'static_icons': [], 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}})
    

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