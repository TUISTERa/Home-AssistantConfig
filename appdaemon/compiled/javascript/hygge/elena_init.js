$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Управление на осветлението");
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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-light" id="default-light"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 1, 2)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock"] = new baseclock("default-clock", "", "hygge", {'widget_type': 'baseclock', 'use_comma': 0, 'fields': {'date': '', 'time': ''}, 'css': {}, 'icons': [], 'static_icons': [], 'static_css': {'date_style': 'color: #313131;', 'time_style': 'color: #4E88A1;', 'widget_style': 'background-color: #E5E4E2;'}, 'time_format': '24hr', 'precision': 1})
    
        widgets["default-temp"] = new basedisplay("default-temp", "", "hygge", {'css': {'value_style': 'color: #4E88A1;font-size: 250%;', 'unit_style': 'color: #4E88A1;font-size: 100%;', 'text_style': 'color: #71706E;font-size: 100%;'}, 'fields': {'title': 'Температура', 'value': '', 'state_text': '', 'unit': '', 'title2': ''}, 'use_comma': 0, 'widget_type': 'basedisplay', 'sub_entity': '', 'icons': [], 'static_icons': [], 'precision': 1, 'entity': 'sensor.tank_temp', 'static_css': {'title2_style': 'color: #313131;', 'state_text_style': '', 'value_style': '', 'unit_style': '', 'widget_style': 'background-color: #E5E4E2;', 'title_style': 'color: #313131;'}})
    
        widgets["default-light"] = new baseswitch("default-light", "", "hygge", {'fields': {'title': 'Осветление', 'state_text': '', 'icon_style': '', 'icon': '', 'title2': ''}, 'state_inactive': 'off', 'post_service_active': {'entity_id': 'light.bedroom_2', 'service': 'homeassistant/turn_on'}, 'enable': 1, 'precision': 1, 'icon_on': 'mdi-lightbulb-on', 'static_css': {'title2_style': 'color: #313131;', 'state_text_style': 'color: #71706E;', 'title_style': 'color: #313131;', 'widget_style': 'background-color: #E5E4E2;'}, 'widget_type': 'baseswitch', 'use_comma': 0, 'entity': 'light.bedroom_2', 'css': {'icon_style_inactive': 'color: #B8B6B3;', 'icon_style_active': 'color: #A15734;'}, 'post_service_inactive': {'entity_id': 'light.bedroom_2', 'service': 'homeassistant/turn_off'}, 'icon_off': 'mdi-lightbulb', 'icons': {'icon_off': 'mdi-lightbulb', 'icon_on': 'mdi-lightbulb-on'}, 'static_icons': [], 'state_active': 'on'})
    

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
    ha_status(stream_url, "Управление на осветлението", widgets);

});