$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Управление на аквариум");
    content_width = (150 + 5) * 2 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [150, 150],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 2,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-temp" id="default-temp"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-light" id="default-light"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch" id="default-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-back" id="default-back"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 3)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock"] = new baseclock("default-clock", "", "clear_sky", {'widget_type': 'baseclock', 'use_comma': 0, 'fields': {'date': '', 'time': ''}, 'css': {}, 'icons': [], 'static_icons': [], 'static_css': {'date_style': 'color: #fff;', 'time_style': 'color: #fff;', 'widget_style': 'background-color: rgba(68,68,68,0.7);color: #00aaff;'}, 'time_format': '24hr', 'precision': 1})
    
        widgets["default-temp"] = new basedisplay("default-temp", "", "clear_sky", {'css': {'value_style': 'font-size: 250%;', 'unit_style': 'font-size: 100%;', 'text_style': 'font-size: 100%;'}, 'fields': {'title': 'Температура', 'value': '', 'state_text': '', 'unit': '', 'title2': ''}, 'use_comma': 0, 'widget_type': 'basedisplay', 'sub_entity': '', 'icons': [], 'static_icons': [], 'precision': 1, 'entity': 'sensor.tank_temp', 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'state_text_style': '', 'value_style': '', 'unit_style': '', 'widget_style': 'background-color: rgba(68,68,68,0.7);color: #00aaff;', 'title_style': 'font-weight: 400;color: #fff;'}})
    
        widgets["default-light"] = new baseswitch("default-light", "", "clear_sky", {'fields': {'title': 'Осветление', 'state_text': '', 'icon_style': '', 'icon': '', 'title2': ''}, 'state_inactive': 'off', 'post_service_active': {'entity_id': 'light.fish_tank_lights', 'service': 'homeassistant/turn_on'}, 'state_text': 1, 'enable': 1, 'precision': 1, 'entity': 'light.fish_tank_lights', 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'widget_style': 'background-color: rgba(68,68,68,0.7);color: #00aaff;'}, 'state_map': {'off': 'Изключено', 'on': 'Включено'}, 'widget_type': 'baseswitch', 'use_comma': 0, 'icon_on': 'mdi-lightbulb-on', 'css': {'icon_style_inactive': 'color: antiquewhite;', 'icon_style_active': 'color: #00aaff;'}, 'post_service_inactive': {'entity_id': 'light.fish_tank_lights', 'service': 'homeassistant/turn_off'}, 'icon_off': 'mdi-lightbulb', 'icons': {'icon_off': 'mdi-lightbulb', 'icon_on': 'mdi-lightbulb-on'}, 'static_icons': [], 'state_active': 'on'})
    
        widgets["default-switch"] = new baseswitch("default-switch", "", "clear_sky", {'fields': {'title': 'Охлаждане', 'state_text': '', 'icon_style': '', 'icon': '', 'title2': ''}, 'state_inactive': 'off', 'post_service_active': {'entity_id': 'switch.fish_tank_fans', 'service': 'homeassistant/turn_on'}, 'state_text': 1, 'enable': 1, 'precision': 1, 'entity': 'switch.fish_tank_fans', 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'widget_style': 'background-color: rgba(68,68,68,0.7);color: #00aaff;'}, 'state_map': {'off': 'Изключено', 'on': 'Включено'}, 'widget_type': 'baseswitch', 'use_comma': 0, 'icon_on': 'mdi-fan', 'css': {'icon_style_inactive': 'color: antiquewhite;', 'icon_style_active': 'color: #00aaff;'}, 'post_service_inactive': {'entity_id': 'switch.fish_tank_fans', 'service': 'homeassistant/turn_off'}, 'icon_off': 'mdi-fan', 'icons': {'icon_off': 'mdi-fan', 'icon_on': 'mdi-fan'}, 'static_icons': [], 'state_active': 'on'})
    
        widgets["default-reload"] = new javascript("default-reload", "", "clear_sky", {'command': 'location.reload(true)', 'widget_type': 'javascript', 'use_comma': 0, 'fields': {'title': 'Презареди', 'icon_style': '', 'icon': '', 'title2': ''}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'static_icons': [], 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'widget_style': 'background-color: rgba(68,68,68,0.7);color: #00aaff;'}, 'precision': 1})
    
        widgets["default-back"] = new javascript("default-back", "", "clear_sky", {'widget_type': 'javascript', 'use_comma': 0, 'icon_inactive': 'fa-home', 'fields': {'title': 'Назад', 'icon_style': '', 'icon': '', 'title2': ''}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'skin': 'clear_sky', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'url': '/main', 'static_css': {'title2_style': 'font-weight: 400;color: #fff;', 'title_style': 'font-weight: 400;color: #fff;', 'widget_style': 'background-color: rgba(68,68,68,0.7);color: #00aaff;'}, 'static_icons': [], 'precision': 1})
    

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
    ha_status(stream_url, "Управление на аквариум", widgets);

});