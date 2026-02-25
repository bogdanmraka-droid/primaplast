const iframe = document.getElementById('api-frame');
const uid = 'c408470f192341d883fbbbcdac73aff4';
const client = new Sketchfab(iframe);

function getBase64Texture(url, callback) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        callback(canvas.toDataURL('image/jpeg'));
    };
    img.src = url;
}


client.init(uid, {
    success: function onSuccess(api) {
        api.start();
        api.addEventListener('viewerready', function() {
          const newTextureUrl = "./photo2.jpg";
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