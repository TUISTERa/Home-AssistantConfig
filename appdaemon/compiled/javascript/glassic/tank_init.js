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
    
        widgets["default-clock"] = new baseclock("default-clock", "", "glassic", {'icons': [], 'use_comma': 0, 'widget_type': 'baseclock', 'static_css': {'time_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'date_style': 'font-size: 175%;color: #fff;font-weight: 700;'}, 'time_format': '24hr', 'fields': {'date': '', 'time': ''}, 'css': {}, 'static_icons': [], 'precision': 1})
    
        widgets["default-temp"] = new basedisplay("default-temp", "", "glassic", {'icons': [], 'use_comma': 0, 'widget_type': 'basedisplay', 'static_css': {'title_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'state_text_style': 'font-size: 100%;color: #00aaff;', 'value_style': '', 'unit_style': '', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;'}, 'entity': 'sensor.tank_temp', 'sub_entity': '', 'fields': {'title': 'Температура', 'state_text': '', 'title2': '', 'unit': '', 'value': ''}, 'css': {'value_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;', 'text_style': 'font-size: 100%;color: #00aaff;', 'unit_style': 'font-size: 125%;color: #00aaff;'}, 'static_icons': [], 'precision': 1})
    
        widgets["default-light"] = new baseswitch("default-light", "", "glassic", {'icon_on': 'mdi-lightbulb-on', 'icons': {'icon_on': 'mdi-lightbulb-on', 'icon_off': 'mdi-lightbulb'}, 'use_comma': 0, 'static_css': {'title_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'state_text_style': 'color: white;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.fish_tank_lights'}, 'entity': 'light.fish_tank_lights', 'state_text': 1, 'fields': {'title': 'Осветление', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.fish_tank_lights'}, 'static_icons': [], 'precision': 1, 'icon_off': 'mdi-lightbulb', 'enable': 1, 'widget_type': 'baseswitch', 'state_active': 'on', 'css': {'icon_style_inactive': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;', 'icon_style_active': 'color: #00aaff;line-height: 90%;'}, 'state_inactive': 'off', 'state_map': {'off': 'Изключено', 'on': 'Включено'}})
    
        widgets["default-switch"] = new baseswitch("default-switch", "", "glassic", {'icon_on': 'mdi-fan', 'icons': {'icon_on': 'mdi-fan', 'icon_off': 'mdi-fan'}, 'use_comma': 0, 'static_css': {'title_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'state_text_style': 'color: white;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.fish_tank_fans'}, 'entity': 'switch.fish_tank_fans', 'state_text': 1, 'fields': {'title': 'Охлаждане', 'state_text': '', 'title2': '', 'icon': '', 'icon_style': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.fish_tank_fans'}, 'static_icons': [], 'precision': 1, 'icon_off': 'mdi-fan', 'enable': 1, 'widget_type': 'baseswitch', 'state_active': 'on', 'css': {'icon_style_inactive': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;', 'icon_style_active': 'color: #00aaff;line-height: 90%;'}, 'state_inactive': 'off', 'state_map': {'off': 'Изключено', 'on': 'Включено'}})
    
        widgets["default-reload"] = new javascript("default-reload", "", "glassic", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'use_comma': 0, 'widget_type': 'javascript', 'static_css': {'title_style': 'color: #00aaff;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;'}, 'command': 'location.reload(true)', 'fields': {'title': 'Презареди', 'title2': '', 'icon': '', 'icon_style': ''}, 'css': {'icon_active_style': 'color: #00aaff;line-height: 90%;', 'icon_inactive_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;'}, 'static_icons': [], 'precision': 1})
    
        widgets["default-back"] = new javascript("default-back", "", "glassic", {'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'use_comma': 0, 'widget_type': 'javascript', 'skin': 'clear_sky', 'static_css': {'title_style': 'color: #00aaff;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;'}, 'icon_inactive': 'fa-home', 'url': '/main', 'fields': {'title': 'Назад', 'title2': '', 'icon': '', 'icon_style': ''}, 'css': {'icon_active_style': 'color: #00aaff;line-height: 90%;', 'icon_inactive_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;line-height: 90%;'}, 'static_icons': [], 'precision': 1})
    

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