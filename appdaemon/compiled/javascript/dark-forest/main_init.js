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
    
        widgets["default-skynet"] = new basedisplay("default-skynet", "", "dark-forest", {'fields': {'title': '', 'title2': '', 'state_text': '', 'unit': '', 'value': 'SKYNET'}, 'precision': 1, 'widget_type': 'basedisplay', 'static_css': {'title2_style': 'color: #fff;', 'unit_style': '', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'value_style': 'color: #fff;'}, 'skin': 'glassic', 'css': {}, 'static_icons': [], 'use_comma': 0, 'use_hass_icon': 1, 'icons': []})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "dark-forest", {'fields': {'time': '', 'date': ''}, 'precision': 1, 'widget_type': 'baseclock', 'use_comma': 0, 'static_css': {'date_style': 'color: #fff;', 'time_style': 'color: #aa00ff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'skin': 'glassic', 'css': {}, 'static_icons': [], 'time_format': '24hr', 'use_hass_icon': 1, 'icons': []})
    
        widgets["default-temp"] = new basedisplay("default-temp", "", "dark-forest", {'entity': 'sensor.external_temp', 'fields': {'title': 'Температура', 'title2': '', 'state_text': '', 'unit': '', 'value': ''}, 'widget_type': 'basedisplay', 'precision': 1, 'static_icons': [], 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'unit_style': '', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'title_style': 'color: #fff;', 'state_text_style': '', 'value_style': ''}, 'use_hass_icon': 1, 'skin': 'glassic', 'css': {'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}, 'use_comma': 0, 'icons': []})
    
        widgets["default-georgi"] = new baseswitch("default-georgi", "", "dark-forest", {'entity': 'device_tracker.georgi_coolpad', 'fields': {'title': 'Георги', 'icon_style': '', 'title2': '', 'state_text': '', 'icon': ''}, 'widget_type': 'baseswitch', 'state_text': 1, 'enable': 0, 'state_map': {'home': 'У дома', 'not_home': 'Навън'}, 'icon_on': 'fa-male', 'static_icons': [], 'precision': 1, 'post_service_active': {'dev_id': 'georgi_coolpad', 'location_name': 'home', 'service': 'device_tracker/see'}, 'icon_off': 'fa-male', 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'use_hass_icon': 1, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'state_active': 'home', 'state_inactive': 'not_home', 'post_service_inactive': {'dev_id': 'georgi_coolpad', 'location_name': 'not_home', 'service': 'device_tracker/see'}, 'active_map': ['home'], 'use_comma': 0, 'skin': 'glassic', 'icons': {'icon_on': 'fa-male', 'icon_off': 'fa-male'}})
    
        widgets["default-plamena"] = new baseswitch("default-plamena", "", "dark-forest", {'entity': 'device_tracker.plamena_elephone', 'fields': {'title': 'Пламена', 'icon_style': '', 'title2': '', 'state_text': '', 'icon': ''}, 'widget_type': 'baseswitch', 'state_text': 1, 'enable': 0, 'state_map': {'home': 'У дома', 'not_home': 'Навън'}, 'icon_on': 'fa-female', 'static_icons': [], 'precision': 1, 'post_service_active': {'dev_id': 'plamena_elephone', 'location_name': 'home', 'service': 'device_tracker/see'}, 'icon_off': 'fa-female', 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'use_hass_icon': 1, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'state_active': 'home', 'state_inactive': 'not_home', 'post_service_inactive': {'dev_id': 'plamena_elephone', 'location_name': 'not_home', 'service': 'device_tracker/see'}, 'active_map': ['home'], 'use_comma': 0, 'skin': 'glassic', 'icons': {'icon_on': 'fa-female', 'icon_off': 'fa-female'}})
    
        widgets["default-gergana"] = new baseswitch("default-gergana", "", "dark-forest", {'entity': 'device_tracker.android7099bb111999b997', 'fields': {'title': 'Гергана', 'icon_style': '', 'title2': '', 'state_text': '', 'icon': ''}, 'widget_type': 'baseswitch', 'state_text': 1, 'enable': 0, 'state_map': {'home': 'У дома', 'not_home': 'Навън'}, 'icon_on': 'fa-child', 'static_icons': [], 'precision': 1, 'post_service_active': {'dev_id': 'android7099bb111999b997', 'location_name': 'home', 'service': 'device_tracker/see'}, 'icon_off': 'fa-child', 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'use_hass_icon': 1, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'state_active': 'home', 'state_inactive': 'not_home', 'post_service_inactive': {'dev_id': 'android7099bb111999b997', 'location_name': 'not_home', 'service': 'device_tracker/see'}, 'active_map': ['home'], 'use_comma': 0, 'skin': 'glassic', 'icons': {'icon_on': 'fa-child', 'icon_off': 'fa-child'}})
    
        widgets["default-kitchen-1"] = new baselight("default-kitchen-1", "", "dark-forest", {'entity': 'light.kitchen_1', 'fields': {'title': 'Bedroom 2', 'icon_style': '', 'title2': '', 'state_text': '', 'units': '%', 'level': '', 'icon': ''}, 'widget_type': 'baselight', 'post_service_inactive': {'entity_id': 'light.kitchen_1', 'service': 'homeassistant/turn_off'}, 'state_map': {'on': 'Включено', 'off': 'Изключено'}, 'precision': 1, 'icon_on': 'mdi-lightbulb-on', 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'state_text': 1, 'post_service_active': {'entity_id': 'light.kitchen_1', 'service': 'homeassistant/turn_on'}, 'icon_off': 'mdi-lightbulb', 'static_css': {'level_style': 'color: #888;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #888;', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'level_up_style': 'color: #888;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_down_style': 'color: #888;'}, 'use_hass_icon': 1, 'skin': 'glassic', 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'on_attributes': {'brightness': 100}, 'use_comma': 0, 'icons': {'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb'}})
    
        widgets["default-light-bedroom-1"] = new baselight("default-light-bedroom-1", "", "dark-forest", {'entity': 'light.bedroom_1', 'fields': {'title': '', 'icon_style': '', 'title2': '', 'state_text': '', 'units': '%', 'level': '', 'icon': ''}, 'widget_type': 'baselight', 'post_service_inactive': {'entity_id': 'light.bedroom_1', 'service': 'homeassistant/turn_off'}, 'precision': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'post_service_active': {'entity_id': 'light.bedroom_1', 'service': 'homeassistant/turn_on'}, 'static_css': {'level_style': 'color: #888;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #888;', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'level_up_style': 'color: #888;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_down_style': 'color: #888;'}, 'use_hass_icon': 1, 'skin': 'glassic', 'title_is_friendly_name': 1, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}})
    
        widgets["default-reload"] = new javascript("default-reload", "", "dark-forest", {'fields': {'title': 'Презареди', 'icon_style': '', 'title2': '', 'icon': ''}, 'precision': 1, 'widget_type': 'javascript', 'command': 'location.reload(true)', 'skin': 'glassic', 'static_icons': [], 'use_hass_icon': 1, 'use_comma': 0, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}})
    
        widgets["default-media"] = new javascript("default-media", "", "dark-forest", {'fields': {'title': 'Медия', 'icon_style': '', 'title2': '', 'icon': ''}, 'precision': 1, 'widget_type': 'javascript', 'icon_inactive': 'fa-tv', 'static_icons': [], 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'use_hass_icon': 1, 'skin': 'glassic', 'url': '/media', 'use_comma': 0, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-tv'}})
    
        widgets["default-tank"] = new javascript("default-tank", "", "dark-forest", {'fields': {'title': 'Аквариум', 'icon_style': '', 'title2': '', 'icon': ''}, 'precision': 1, 'widget_type': 'javascript', 'icon_inactive': 'mdi-fish', 'static_icons': [], 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'use_hass_icon': 1, 'skin': 'glassic', 'url': '/tank', 'use_comma': 0, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-fish'}})
    
        widgets["default-elena"] = new javascript("default-elena", "", "dark-forest", {'fields': {'title': 'Елена', 'icon_style': '', 'title2': '', 'icon': ''}, 'precision': 1, 'widget_type': 'javascript', 'icon_inactive': 'fa-bed', 'static_icons': [], 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'use_hass_icon': 1, 'skin': 'glassic', 'url': '/elena', 'use_comma': 0, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-bed'}})
    

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