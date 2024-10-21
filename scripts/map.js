// Initialize the map
var map = L.map('map').setView([28.6139, 77.2090], 12); // Set initial coordinates and zoom level

// Add OSM tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define bus route coordinates
var busRoutes = {
    "GL90": {
        source: [28.5782, 77.2323], // Kendriya Terminal
        destination: [28.6740, 77.1510] // Rohini Sector 16
    },
    "GL22": {
        source: [28.6145, 77.2249], // New Delhi Railway Station Gate 2
        destination: [28.6189, 77.6704] // Anand Vihar ISBT
    },
    "GL23": {
        source: [28.6300, 77.2185], // ISBT Kashmiri Gate
        destination: [28.6189, 77.6704] // Anand Vihar ISBT
    },
    "GL23Cluster": {
        source: [28.6300, 77.2274], // ISBT Maharana Pratap Bus Terminal
        destination: [28.6189, 77.6704] // Anand Vihar ISBT
    },
    "GL32": {
        source: [28.5921, 77.1285], // Karampura Terminal
        destination: [28.5895, 77.3542] // Noida Sector 34 Terminal
    },
    "GL91": {
        source: [28.6135, 77.2170], // Shivaji Stadium
        destination: [28.6778, 77.0640] // Mundka
    },
    "RL75": {
        source: [28.6145, 77.2249], // New Delhi Railway Station Gate 2
        destination: [28.5694, 77.0576] // Dwarka Sector 14 Metro Station
    },
    "RL77": {
        source: [28.6145, 77.2249], // New Delhi Railway Station Gate 2
        destination: [28.5573, 77.0370] // Mangla Puri
    },
    "RL77Cluster": {
        source: [28.6145, 77.2249], // New Delhi Railway Station Gate 2
        destination: [28.5573, 77.0400] // Mangla Puri Terminal
    },
    "RL77Extn": {
        source: [28.6145, 77.2249], // New Delhi Railway Station Gate 2
        destination: [28.5500, 77.0350] // Dwarka Sector 19
    },
    "RL77A": {
        source: [28.6145, 77.2249], // New Delhi Railway Station Gate 2
        destination: [28.5560, 77.0340] // Dwarka Sector 18B
    }
};

// Add a marker for the bus location
var marker = L.marker([28.6139, 77.2090]).addTo(map) // Set initial marker position
    .bindPopup('Bus is here!') // Add a popup message
    .openPopup();

var polyline; // Variable to hold the polyline
var trafficLayer; // Variable to hold traffic layer

// Function to update the bus location (example)
function updateBusLocation(lat, lng) {
    marker.setLatLng([lat, lng]).update();
    map.setView([lat, lng]); // Optional: Center the map on the new position
}

// Function to draw the route line and show traffic
function drawRoute(routeKey) {
    // Remove the previous polyline if it exists
    if (polyline) {
        map.removeLayer(polyline);
    }
    // Remove the previous traffic layer if it exists
    if (trafficLayer) {
        map.removeLayer(trafficLayer);
    }

    // Get source and destination coordinates from the selected route
    var route = busRoutes[routeKey];
    if (route) {
        // Create a polyline from the source to destination
        polyline = L.polyline([route.source, route.destination], { color: 'blue' }).addTo(map);
        // Zoom the map to fit the polyline
        map.fitBounds(polyline.getBounds());

        // Adding traffic layer
        trafficLayer = L.tileLayer('https://{s}.traffic.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    }
}

// Event listener for bus route selection
document.getElementById('bus-select').addEventListener('change', function() {
    var selectedRoute = this.value; // Get the selected route
    drawRoute(selectedRoute); // Draw the route line and traffic
});
