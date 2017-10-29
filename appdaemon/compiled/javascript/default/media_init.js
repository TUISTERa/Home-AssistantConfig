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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basemedia-default-sonytv" id="default-sonytv"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="artist" data-bind="text: artist, attr:{style: artist_style}"></h1><h1 class="media_title" data-bind="text: media_title, attr:{style: media_title_style}"></h1><h1 class="album" data-bind="text: album, attr:{style: album_style}"></h1><h2 id="previous" class="previous" data-bind="attr:{style: previous_icon_style}"><i data-bind="attr: {class: previous_icon}"></i></h2><h2 id="play" class="play" data-bind="attr:{style: play_icon_style}"><i data-bind="attr: {class: play_icon}"></i></h2><h2 id="next" class="next" data-bind="attr:{style: next_icon_style}"><i data-bind="attr: {class: next_icon}"></i></h2><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="attr:{style: units_style}">%</p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 2, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-back" id="default-back"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 2, 4)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'fields': {'time': '', 'date': ''}, 'precision': 1, 'widget_type': 'baseclock', 'use_comma': 0, 'static_css': {'date_style': 'color: #fff;', 'time_style': 'color: #aa00ff;', 'widget_style': 'background-color: #444;'}, 'static_icons': [], 'time_format': '24hr', 'css': {}, 'icons': []})
    
        widgets["default-temp"] = new basedisplay("default-temp", "", "default", {'entity': 'sensor.tank_temp', 'fields': {'title': 'Температура', 'title2': '', 'state_text': '', 'unit': '', 'value': ''}, 'widget_type': 'basedisplay', 'use_comma': 0, 'icons': [], 'precision': 1, 'static_icons': [], 'sub_entity': '', 'static_css': {'title2_style': 'color: #fff;', 'unit_style': '', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'value_style': ''}, 'css': {'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 100%;', 'value_style': 'color: #00aaff;font-size: 250%;'}})
    
        widgets["default-sonytv"] = new basemedia("default-sonytv", "", "default", {'entity': 'media_player.sonytv', 'fields': {'play_icon_style': '', 'pause_icon_style': '', 'state_text': '', 'album': '', 'media_title': '', 'next_icon_style': '', 'level': '', 'title': 'Сони', 'artist': '', 'previous_icon_style': ''}, 'widget_type': 'basemedia', 'precision': 1, 'post_service_next': {'entity_id': 'media_player.sonytv', 'service': 'media_player/media_next_track'}, 'post_service_level': {'entity_id': 'media_player.sonytv', 'service': 'media_player/volume_set'}, 'static_css': {'album_style': 'color: #fff;', 'units_style': 'color: #fff;', 'media_title_style': 'color: #fff;', 'next_icon_style': 'color: #888;', 'state_text_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'artist_style': 'color: #fff;', 'level_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'level_up_style': 'color: #888;', 'title_style': 'color: #fff;', 'previous_icon_style': 'color: #888;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_pause': {'entity_id': 'media_player.sonytv', 'service': 'media_player/media_pause'}, 'post_service_play_pause': {'entity_id': 'media_player.sonytv', 'service': 'media_player/media_play_pause'}, 'static_icons': {'previous_icon': 'fa-step-backward', 'next_icon': 'fa-step-forward', 'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'post_service_previous': {'entity_id': 'media_player.sonytv', 'service': 'media_player/media_previous_track'}, 'use_comma': 0, 'icons': {'play_icon': 'fa-play', 'pause_icon': 'fa-pause'}, 'post_service_stop': {'entity_id': 'media_player.sonytv', 'service': 'media_player/media_stop'}})
    
        widgets["default-reload"] = new javascript("default-reload", "", "default", {'fields': {'title': 'Презареди', 'icon_style': '', 'title2': '', 'icon': ''}, 'precision': 1, 'widget_type': 'javascript', 'command': 'location.reload(true)', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'static_icons': [], 'use_comma': 0, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}})
    
        widgets["default-back"] = new javascript("default-back", "", "default", {'fields': {'title': 'Назад', 'icon_style': '', 'title2': '', 'icon': ''}, 'precision': 1, 'widget_type': 'javascript', 'icon_inactive': 'fa-home', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'static_icons': [], 'use_comma': 0, 'url': '/main', 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}})
    

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