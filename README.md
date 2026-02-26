(function () {
    'use strict';

    Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
            Lampa.Noty.show('Rezka plugin loaded');

            Lampa.SettingsApi.addParam({
                component: 'plugins',
                param: {
                    name: 'rezka_plugin',
                    type: 'button'
                },
                field: {
                    name: 'Rezka test',
                    description: 'Тест кнопки'
                },
                onChange: function () {
                    Lampa.Noty.show('Rezka работает');
                }
            });
        }
    });
})();
