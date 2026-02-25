const iframe = document.getElementById('api-frame');
const uid = 'c408470f192341d883fbbbcdac73aff4';
const client = new Sketchfab(iframe);

client.init(uid, {
    success: function onSuccess(api) {
        api.start();
        api.addEventListener('viewerready', function() {
          const newTextureUrl = window.location.origin + '/primaplast/photo2.jpg';
          api.addTexture(newTextureUrl, function(err, textureId) {
            if (err) {
              console.error('Деталі помилки:', err); // Подивіться, що саме пише в err
              return;
            }
            alert("OK");
          });
        });
    },
    error: function onError() {
        console.error('Помилка при ініціалізації Sketchfab API');
    }
});