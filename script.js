document.addEventListener('DOMContentLoaded', () => {
    // Tüm renk seçeneklerini seç
    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Tıklanan rengin parent product div'ini bul
            const product = option.closest('.product');
            const model = product.dataset.model; // Model adını al (ör. iphone-16-pro)
            const color = option.dataset.color; // Renk adını al (ör. lapis_lazuli)

            // Model adındaki tireleri alt çizgi ile değiştir
            const formattedModel = model.replace(/-/g, '_');

            // Görsel dosya adını oluştur
            const imagePath = `images/${formattedModel}_${color}.jpeg`;

            // Ürün görselini güncelle
            const productImage = product.querySelector('.product-image');
            productImage.src = imagePath;

            // Hata ayıklama için konsola bilgi yazdır
            console.log(`Model: ${formattedModel}, Renk: ${color}, Görsel Yolu: ${imagePath}`);

            // Görselin yüklenip yüklenmediğini kontrol et
            productImage.onerror = () => {
                console.error(`Görsel yüklenemedi: ${imagePath}`);
            };
            productImage.onload = () => {
                console.log(`Görsel başarıyla yüklendi: ${imagePath}`);
            };

            // Aktif renk işaretini güncelle
            const colors = product.querySelectorAll('.color-option');
            const colorNames = product.querySelectorAll('.color-name');
            colors.forEach(opt => opt.classList.remove('active'));
            colorNames.forEach(name => name.classList.remove('active'));
            option.classList.add('active');
            option.nextElementSibling.classList.add('active'); // Seçili rengin adını göster
        });
    });

    // Varsayılan olarak ilk renk seçili olsun
    document.querySelectorAll('.product').forEach(product => {
        const firstColor = product.querySelector('.color-option');
        const firstColorName = firstColor.nextElementSibling;
        firstColor.classList.add('active');
        firstColorName.classList.add('active');
    });
});