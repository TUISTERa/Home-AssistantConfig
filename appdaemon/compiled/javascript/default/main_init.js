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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-kitchen-1" id="default-kitchen-1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-bedroom-1" id="default-light-bedroom-1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-restart" id="default-restart"><h1 class="error" data-bind="text: error"></h1></div></li>', 1, 1, 2, 3)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'time_format': '24hr', 'use_comma': 0, 'fields': {'date': '', 'time': ''}, 'icons': [], 'use_hass_icon': 1, 'precision': 1, 'static_css': {'time_style': 'color: #aa00ff;', 'widget_style': 'background-color: #444;', 'date_style': 'color: #fff;'}, 'widget_type': 'baseclock', 'css': {}, 'static_icons': []})
    
        widgets["default-temp"] = new basedisplay("default-temp", "", "default", {'sub_entity': '', 'icons': [], 'precision': 1, 'fields': {'title2': '', 'title': 'Температура', 'state_text': '', 'value': '', 'unit': ''}, 'use_comma': 0, 'use_hass_icon': 1, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'static_icons': [], 'widget_type': 'basedisplay', 'entity': 'sensor.external_temp', 'static_css': {'value_style': '', 'widget_style': 'background-color: #444;', 'unit_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}})
    
        widgets["default-kitchen-1"] = new baselight("default-kitchen-1", "", "default", {'icons': {'icon_off': 'fa-circle-thin', 'icon_on': 'fa-circle'}, 'fields': {'icon': '', 'icon_style': '', 'level': '', 'title': 'Bedroom 2', 'units': '%', 'title2': '', 'state_text': ''}, 'widget_type': 'baselight', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.kitchen_1'}, 'entity': 'light.kitchen_1', 'on_attributes': {'brightness': 100}, 'static_css': {'level_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'unit_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'level_down_style': 'color: #888;'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.kitchen_1'}, 'use_hass_icon': 1, 'use_comma': 0, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'precision': 1, 'static_icons': {'icon_down': 'fa-minus', 'icon_up': 'fa-plus'}})
    
        widgets["default-light-bedroom-1"] = new baselight("default-light-bedroom-1", "", "default", {'icons': {'icon_off': 'fa-circle-thin', 'icon_on': 'fa-circle'}, 'fields': {'icon': '', 'icon_style': '', 'level': '', 'title': '', 'units': '%', 'title2': '', 'state_text': ''}, 'widget_type': 'baselight', 'title_is_friendly_name': 1, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.bedroom_1'}, 'entity': 'light.bedroom_1', 'static_css': {'level_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'unit_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'level_down_style': 'color: #888;'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.bedroom_1'}, 'use_hass_icon': 1, 'use_comma': 0, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'precision': 1, 'static_icons': {'icon_down': 'fa-minus', 'icon_up': 'fa-plus'}})
    
        widgets["default-reload"] = new javascript("default-reload", "", "default", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'command': 'location.reload(true)', 'use_hass_icon': 1, 'use_comma': 0, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'static_icons': [], 'widget_type': 'javascript', 'precision': 1, 'static_css': {'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;'}, 'fields': {'title': 'Презареди', 'icon_style': '', 'title2': '', 'icon': ''}})
    
        widgets["default-restart"] = new baseerror("default-restart", "", "default", {'widget_type': 'baseerror', 'fields': {'error': 'Widget definition not found'}, 'static_css': {'widget_style': ''}})
    

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