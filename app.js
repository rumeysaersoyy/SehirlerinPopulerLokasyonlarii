document.addEventListener('DOMContentLoaded', () => {
  // Tüm şehir elementlerini seç
  const cities = document.querySelectorAll('.city');
  const popup = document.getElementById('popup');
  const locationName = document.getElementById('location-name');
  const locationImage = document.getElementById('location-image');
  const locationDescription = document.getElementById('location-description');
  const cityNameDisplay = document.getElementById('city-name');

  // Eğer DOM elementlerinden biri null ise, bir hata mesajı yazdır
  if (!cities.length || !popup || !locationName || !locationImage || !locationDescription || !cityNameDisplay) {
    console.error("Bazı DOM elementleri bulunamadı. Lütfen HTML'deki id'leri ve class'ları kontrol edin.");
    return;
  }

  // Şehir elementleri üzerinde döngü
  cities.forEach(city => {
    // Fareyi şehir üzerine getirme
    city.addEventListener('mouseover', function(event) {
      const cityName = event.target.getAttribute('data-city-name');
      cityNameDisplay.innerText = cityName || 'Bilinmiyor';
      cityNameDisplay.style.display = 'block';

      // Fare konumuna göre div'in pozisyonunu ayarla
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      cityNameDisplay.style.left = `${mouseX + 3}px`; // Fare sağında 3px
      cityNameDisplay.style.top = `${mouseY - cityNameDisplay.offsetHeight / 2}px`;
    });

    // Fareyi şehirden çekince gizle
    city.addEventListener('mouseout', function() {
      cityNameDisplay.style.display = 'none';
    });

    // Şehre tıklama olayı
    city.addEventListener('click', function(event) {
      const location = event.target.getAttribute('data-location');
      const image = event.target.getAttribute('data-image');
      const description = event.target.getAttribute('data-description');

      locationName.innerText = location || 'Bilinmiyor';
      locationImage.src = image || '';
      locationDescription.innerText = description || 'Bilgi bulunamadı';

      popup.style.display = 'block';
    });
  });

  // Pop-up'ı kapatma
  const closeButton = popup.querySelector('button');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }
});
