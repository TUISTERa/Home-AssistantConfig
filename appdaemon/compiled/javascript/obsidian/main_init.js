$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Main Panel");
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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-temp" id="default-temp"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-kitchen-1" id="default-light-kitchen-1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-bedroom-1" id="default-light-bedroom-1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-hall" id="default-hall"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-default" id="default-default"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-glassic" id="default-glassic"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-simplyred" id="default-simplyred"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-obsidian" id="default-obsidian"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-zen" id="default-zen"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 3, 4)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock"] = new baseclock("default-clock", "", "obsidian", {'widget_type': 'baseclock', 'precision': 1, 'use_hass_icon': 1, 'use_comma': 0, 'static_css': {'date_style': 'color: #fff;font-size: 150%;', 'widget_style': 'border-color: white;border-style: solid;border-width: 2px;', 'time_style': 'color: #00FFFF;'}, 'css': {}, 'icons': [], 'static_icons': [], 'time_format': '24hr', 'fields': {'date': '', 'time': ''}})
    
        widgets["default-temp"] = new basedisplay("default-temp", "", "obsidian", {'widget_type': 'basedisplay', 'precision': 1, 'entity': 'sensor.dark_sky_temperature', 'use_hass_icon': 1, 'sub_entity': '', 'use_comma': 0, 'static_css': {'title_style': 'color: #fff;', 'unit_style': '', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;font-size: 100%;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'value_style': ''}, 'css': {'text_style': 'color: #00FFFF;font-size: 100%;', 'unit_style': 'color: #00FFFF;font-size: 95%;', 'value_style': 'color: #00FFFF;font-size: 300%;'}, 'icons': [], 'static_icons': [], 'fields': {'state_text': '', 'title2': '', 'title': 'Температура', 'value': '', 'unit': ''}})
    
        widgets["default-light-kitchen-1"] = new baselight("default-light-kitchen-1", "", "obsidian", {'widget_type': 'baselight', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.kitchen_1'}, 'static_icons': {'icon_down': 'fa-minus', 'icon_up': 'fa-plus'}, 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'precision': 1, 'entity': 'light.kitchen_1', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.kitchen_1'}, 'static_css': {'level_down_style': 'color: #888;', 'level_up_style': 'color: #888;', 'title_style': 'color: #fff;', 'level_style': 'color: #888;', 'unit_style': 'color: #888;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'use_comma': 0, 'title_is_friendly_name': 1, 'use_hass_icon': 1, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'fields': {'icon': '', 'title': '', 'level': '', 'units': '%', 'state_text': '', 'title2': '', 'icon_style': ''}})
    
        widgets["default-light-bedroom-1"] = new baselight("default-light-bedroom-1", "", "obsidian", {'widget_type': 'baselight', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.bedroom_1'}, 'static_icons': {'icon_down': 'fa-minus', 'icon_up': 'fa-plus'}, 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'precision': 1, 'entity': 'light.bedroom_1', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.bedroom_1'}, 'static_css': {'level_down_style': 'color: #888;', 'level_up_style': 'color: #888;', 'title_style': 'color: #fff;', 'level_style': 'color: #888;', 'unit_style': 'color: #888;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'use_comma': 0, 'title_is_friendly_name': 1, 'use_hass_icon': 1, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'fields': {'icon': '', 'title': '', 'level': '', 'units': '%', 'state_text': '', 'title2': '', 'icon_style': ''}})
    
        widgets["default-hall"] = new baselight("default-hall", "", "obsidian", {'widget_type': 'baselight', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.bedroom_1'}, 'static_icons': {'icon_down': 'fa-minus', 'icon_up': 'fa-plus'}, 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'precision': 1, 'entity': 'light.bedroom_1', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.bedroom_1'}, 'static_css': {'level_down_style': 'color: #888;', 'level_up_style': 'color: #888;', 'title_style': 'color: #fff;', 'level_style': 'color: #888;', 'unit_style': 'color: #888;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'use_comma': 0, 'use_hass_icon': 1, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'fields': {'icon': '', 'title': 'Hall', 'level': '', 'units': '%', 'state_text': '', 'title2': 'Light', 'icon_style': ''}})
    
        widgets["default-default"] = new javascript("default-default", "", "obsidian", {'widget_type': 'javascript', 'precision': 1, 'dashboard': 'main', 'static_css': {'title_style': 'color: #fff;', 'widget_style': 'color: black;background-image: none;background: black;border-style: inset;', 'title2_style': 'color: #fff;'}, 'skin': 'default', 'static_icons': [], 'use_comma': 0, 'use_hass_icon': 1, 'css': {'icon_active_style': 'color: #00FFFF;', 'icon_inactive_style': 'color: #00FFFF;'}, 'icons': {'icon_inactive': 'fa-gear', 'icon_active': 'fa-spinner fa-spin'}, 'fields': {'icon': '', 'title2': 'Default', 'title': 'Skin Change', 'icon_style': ''}})
    
        widgets["default-glassic"] = new javascript("default-glassic", "", "obsidian", {'widget_type': 'javascript', 'precision': 1, 'dashboard': 'main', 'static_css': {'title_style': 'color: #fff;', 'widget_style': 'color: black;background-image: none;background: black;border-style: inset;', 'title2_style': 'color: #fff;'}, 'skin': 'glassic', 'static_icons': [], 'use_comma': 0, 'use_hass_icon': 1, 'css': {'icon_active_style': 'color: #00FFFF;', 'icon_inactive_style': 'color: #00FFFF;'}, 'icons': {'icon_inactive': 'fa-gear', 'icon_active': 'fa-spinner fa-spin'}, 'fields': {'icon': '', 'title2': 'Glassic', 'title': 'Skin Change', 'icon_style': ''}})
    
        widgets["default-simplyred"] = new javascript("default-simplyred", "", "obsidian", {'widget_type': 'javascript', 'precision': 1, 'dashboard': 'main', 'static_css': {'title_style': 'color: #fff;', 'widget_style': 'color: black;background-image: none;background: black;border-style: inset;', 'title2_style': 'color: #fff;'}, 'skin': 'simplyred', 'static_icons': [], 'use_comma': 0, 'use_hass_icon': 1, 'css': {'icon_active_style': 'color: #00FFFF;', 'icon_inactive_style': 'color: #00FFFF;'}, 'icons': {'icon_inactive': 'fa-gear', 'icon_active': 'fa-spinner fa-spin'}, 'fields': {'icon': '', 'title2': 'Simply Red', 'title': 'Skin Change', 'icon_style': ''}})
    
        widgets["default-obsidian"] = new javascript("default-obsidian", "", "obsidian", {'widget_type': 'javascript', 'precision': 1, 'dashboard': 'main', 'static_css': {'title_style': 'color: #fff;', 'widget_style': 'color: black;background-image: none;background: black;border-style: inset;', 'title2_style': 'color: #fff;'}, 'skin': 'obsidian', 'static_icons': [], 'use_comma': 0, 'use_hass_icon': 1, 'css': {'icon_active_style': 'color: #00FFFF;', 'icon_inactive_style': 'color: #00FFFF;'}, 'icons': {'icon_inactive': 'fa-gear', 'icon_active': 'fa-spinner fa-spin'}, 'fields': {'icon': '', 'title2': 'Obsidian', 'title': 'Skin Change', 'icon_style': ''}})
    
        widgets["default-zen"] = new javascript("default-zen", "", "obsidian", {'widget_type': 'javascript', 'precision': 1, 'dashboard': 'main', 'static_css': {'title_style': 'color: #fff;', 'widget_style': 'color: black;background-image: none;background: black;border-style: inset;', 'title2_style': 'color: #fff;'}, 'skin': 'zen', 'static_icons': [], 'use_comma': 0, 'use_hass_icon': 1, 'css': {'icon_active_style': 'color: #00FFFF;', 'icon_inactive_style': 'color: #00FFFF;'}, 'icons': {'icon_inactive': 'fa-gear', 'icon_active': 'fa-spinner fa-spin'}, 'fields': {'icon': '', 'title2': 'Zen', 'title': 'Skin Change', 'icon_style': ''}})
    
        widgets["default-reload"] = new javascript("default-reload", "", "obsidian", {'command': 'location.reload(true)', 'widget_type': 'javascript', 'precision': 1, 'static_css': {'title_style': 'color: #fff;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;'}, 'use_hass_icon': 1, 'use_comma': 0, 'static_icons': [], 'css': {'icon_active_style': 'color: #00FFFF;', 'icon_inactive_style': 'color: #fff;'}, 'icons': {'icon_inactive': 'fa-refresh', 'icon_active': 'fa-spinner fa-spin'}, 'fields': {'icon': '', 'title2': '', 'title': 'Презареди', 'icon_style': ''}})
    

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
    ha_status(stream_url, "Main Panel", widgets);

});