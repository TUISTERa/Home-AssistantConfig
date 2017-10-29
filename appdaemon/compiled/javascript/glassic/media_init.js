$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Управление на медиа");
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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-sony" id="default-sony"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-back" id="default-back"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 3)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock"] = new baseclock("default-clock", "", "glassic", {'widget_type': 'baseclock', 'use_comma': 0, 'fields': {'date': '', 'time': ''}, 'css': {}, 'icons': [], 'static_icons': [], 'static_css': {'date_style': 'font-weight: 700;color: #fff;font-size: 175%;', 'time_style': 'line-height: 90%;text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);'}, 'time_format': '24hr', 'precision': 1})
    
        widgets["default-temp"] = new basedisplay("default-temp", "", "glassic", {'css': {'value_style': 'line-height: 90%;text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #3B5957;font-weight: bold;', 'unit_style': 'color: #00aaff;font-size: 125%;', 'text_style': 'color: #00aaff;font-size: 100%;'}, 'fields': {'title': 'Температура', 'value': '', 'state_text': '', 'unit': '', 'title2': ''}, 'use_comma': 0, 'widget_type': 'basedisplay', 'sub_entity': '', 'icons': [], 'static_icons': [], 'precision': 1, 'entity': 'sensor.tank_temp', 'static_css': {'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'state_text_style': 'color: #00aaff;font-size: 100%;', 'value_style': '', 'unit_style': '', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);', 'title_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;'}})
    
        widgets["default-sony"] = new baseswitch("default-sony", "", "glassic", {'fields': {'title': 'Sony TV', 'state_text': '', 'icon_style': '', 'icon': '', 'title2': ''}, 'state_inactive': 'off', 'post_service_active': {'entity_id': 'media_player.sonytv', 'service': 'homeassistant/turn_on'}, 'state_text': 1, 'enable': 1, 'icon_style_active': 'color: rgb(170, 255, 0);', 'precision': 1, 'entity': 'media_player.sonytv', 'static_css': {'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'state_text_style': 'color: white;', 'title_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);'}, 'state_map': {'off': 'Изключен', 'on': 'Включен'}, 'widget_type': 'baseswitch', 'use_comma': 0, 'icon_style_inactive': 'color: rgb(255, 0, 85);', 'icon_on': 'mdi-television', 'css': {'icon_style_inactive': 'line-height: 90%;text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);font-weight: bold;color: rgb(255, 0, 85);', 'icon_style_active': 'line-height: 90%;color: rgb(170, 255, 0);'}, 'post_service_inactive': {'entity_id': 'media_player.sonytv', 'service': 'homeassistant/turn_off'}, 'icon_off': 'mdi-television', 'icons': {'icon_off': 'mdi-television', 'icon_on': 'mdi-television'}, 'static_icons': [], 'state_active': 'on'})
    
        widgets["default-reload"] = new javascript("default-reload", "", "glassic", {'command': 'location.reload(true)', 'widget_type': 'javascript', 'use_comma': 0, 'fields': {'title': 'Презареди', 'icon_style': '', 'icon': '', 'title2': ''}, 'css': {'icon_inactive_style': 'line-height: 90%;text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);font-weight: bold;color: #3B5957;', 'icon_active_style': 'line-height: 90%;color: #00aaff;'}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'static_icons': [], 'static_css': {'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'title_style': 'font-weight: bold;color: #00aaff;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);'}, 'precision': 1})
    
        widgets["default-back"] = new javascript("default-back", "", "glassic", {'widget_type': 'javascript', 'use_comma': 0, 'icon_inactive': 'fa-home', 'fields': {'title': 'Назад', 'icon_style': '', 'icon': '', 'title2': ''}, 'css': {'icon_inactive_style': 'line-height: 90%;text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);font-weight: bold;color: #3B5957;', 'icon_active_style': 'line-height: 90%;color: #00aaff;'}, 'skin': 'glassic', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'url': '/main', 'static_css': {'title2_style': 'text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);color: #899B9A;font-weight: bold;', 'title_style': 'font-weight: bold;color: #00aaff;', 'widget_style': 'background-image: url(/css/glassic/img/carbon3.jpg);'}, 'static_icons': [], 'precision': 1})
    

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
    ha_status(stream_url, "Управление на медиа", widgets);

});