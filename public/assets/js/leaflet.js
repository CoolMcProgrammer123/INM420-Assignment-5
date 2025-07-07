var map = L.map('map').setView([43.654804586268135, -79.39846256076028], 16);

// Put the map in
L.tileLayer('https://api.maptiler.com/maps/outdoor-v2/{z}/{x}/{y}@2x.png?key=ECRdJfI9HWDxsPqNic7O', {
    maxZoom: 19
}).addTo(map);

// Put a marker on the map
var marker = L.marker([43.654804586268135, -79.39846256076028]).addTo(map);

// Add text to marker
marker.bindPopup("Yume Arcade").openPopup();