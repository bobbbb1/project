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
    closeSubMenu();
  } else {
    openSubMenu();
  }
  isOpen = !isOpen;
});

// Tambahkan event listener ke elemen document untuk menutup submenu saat mengklik di luar submenu
document.addEventListener('click', function(e) {
  if (!subBtn.contains(e.target) && !subMenu.contains(e.target)) {
    closeSubMenu();
    isOpen = false;
  }
});

function openSubMenu() {
  subMenu.style.display = 'block';
  setTimeout(function() {
    subMenu.style.opacity = 1;
  }, 0);
  arrowIcon.classList.remove('fa-caret-down');
  arrowIcon.classList.add('fa-caret-up');
}

function closeSubMenu() {
  subMenu.style.opacity = 0;
  setTimeout(function() {
    subMenu.style.display = 'none';
  }, 100);
  arrowIcon.classList.remove('fa-caret-up');
  arrowIcon.classList.add('fa-caret-down');
}

  

/*display menu */

var menu = document.querySelector(".navbar-menu")
var menuBtn = document.querySelector(".menu-btn")
var closeBtn = document.querySelector(".close-btn")

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});





  