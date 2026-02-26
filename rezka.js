(function () {
    'use strict';

    function start() {
        Lampa.Noty.show('Rezka плагин запущен');
    }

    Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
            Lampa.SettingsApi.addParam({
                component: 'plugins',
                param: {
                    name: 'rezka_plugin',
                    type: 'button'
                },
                field: {
                    name: 'Rezka плагин'
                },
                onChange: start
            });
        }
    });
})();
