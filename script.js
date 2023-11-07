  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 }, // Ganti dengan koordinat Anda
      zoom: 8,
      styles: [
        {
          elementType: 'geometry',
          stylers: [{ color: '#242f3e' }]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#242f3e' }]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{ color: '#746855' }]
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        // Anda dapat menambahkan lebih banyak pengaturan gaya sesuai kebutuhan.
      ]
    });
  }


  /* button */

  document.getElementById("floating-button-up").addEventListener("click", function() {
    // Menggulirkan halaman ke paling atas
    window.scrollTo(0, 0);
});

var floatingButton = document.getElementById("floating-button-up");

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) { // Ganti angka 100 sesuai kebutuhan
        floatingButton.style.display = "block"; // Menampilkan tombol saat di bawah
    } else {
        floatingButton.style.display = "none"; // Menghilangkan tombol saat di atas
    }
});

floatingButton.addEventListener("click", function() {
    window.scrollTo(0, 0);
});



  /* index */

  /* navbar */

  
  var subBtn = document.getElementById('sub-btn');
  var subMenu = document.querySelector('.sub-menu');
  var arrowIcon = document.querySelector('#sub-btn .fa-solid');
  var isOpen = false;
  
  subBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah link dari navigasi
  
    if (isOpen) {
      // Sembunyikan submenu dengan efek fade-out
      subMenu.style.opacity = 0;
      setTimeout(function() {
        subMenu.style.display = 'none';
      }, 100); // Waktu transisi adalah 0.3 detik (300ms)
      // Ganti ikon panah menjadi panah ke bawah
      arrowIcon.classList.remove('fa-caret-up');
      arrowIcon.classList.add('fa-caret-down');
    } else {
      // Tampilkan submenu dengan efek fade-in
      subMenu.style.display = 'block';
      setTimeout(function() {
        subMenu.style.opacity = 1;
      }, 0); // Sebuah penundaan kecil sebelum memunculkan submenu
      // Ganti ikon panah menjadi panah ke atas
      arrowIcon.classList.remove('fa-caret-down');
      arrowIcon.classList.add('fa-caret-up');
    }
    isOpen = !isOpen;
  });
  







  /* Contact */

  /* navbar */

  // Cek apakah ada status navbar yang tersimpan di localStorage
  var isNavbarHidden = localStorage.getItem('navbarHidden') === 'true';

  // Fungsi untuk menampilkan atau menyembunyikan navbar
  function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    
    if (isNavbarHidden) {
      navbar.style.top = "-200px"; // Sesuaikan dengan nilai yang sesuai
    } else {
      navbar.style.top = "0";
    }
  }

  // Cek status navbar saat halaman dimuat
  window.onload = function() {
    toggleNavbar();
  };

  // Fungsi untuk menyimpan status navbar saat pengguna menggulir
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 50) {
      isNavbarHidden = false;
      localStorage.setItem('navbarHidden', 'false');
    } else {
      isNavbarHidden = true;
      localStorage.setItem('navbarHidden', 'true');
    }
    toggleNavbar();
  };



  /* button */
  document.getElementById("floating-button").addEventListener("click", function() {
    // Menggulirkan halaman ke paling bawah
    window.scrollTo(0, document.body.scrollHeight);
  });

 
  var floatingButton = document.getElementById("floating-button");
  
  window.addEventListener("scroll", function() {
    if (window.scrollY > 100) { // Ganti angka 100 sesuai kebutuhan
      floatingButton.classList.add("hide");
    } else {
      floatingButton.classList.remove("hide");
    }
  });

  floatingButton.addEventListener("click", function() {
    window.scrollTo(0, document.body.scrollHeight);
  });






