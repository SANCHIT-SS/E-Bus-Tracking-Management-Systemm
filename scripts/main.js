document.addEventListener('DOMContentLoaded', () => {
    const busSelect = document.getElementById('bus-select');
    const etaDisplay = document.getElementById('eta');
    const boardingDisplay = document.getElementById('boarding');
    const destinationDisplay = document.getElementById('destination');

    busSelect.addEventListener('change', (event) => {
        const selectedRoute = event.target.value;
        fetchBusDetails(selectedRoute);
    });

    function fetchBusDetails(route) {
        // Bus schedule data
        const busDetails = {
            GL90: {
                eta: '12 mins',
                boarding: 'Kendriya Terminal',
                destination: 'Rohini Sector 16'
            },
            GL22: {
                eta: '8 mins',
                boarding: 'New Delhi Railway Station Gate 2',
                destination: 'Anand Vihar ISBT'
            },
            GL23: {
                eta: '10 mins',
                boarding: 'ISBT Kashmiri Gate',
                destination: 'Anand Vihar ISBT'
            },
            GL23Cluster: {
                eta: '15 mins',
                boarding: 'ISBT Maharana Pratap Bus Terminal',
                destination: 'Anand Vihar ISBT'
            },
            GL32: {
                eta: '25 mins',
                boarding: 'Karampura Terminal',
                destination: 'Noida Sector 34 Terminal'
            },
            GL91: {
                eta: '18 mins',
                boarding: 'Shivaji Stadium',
                destination: 'Mundka'
            },
            RL75: {
                eta: '5 mins',
                boarding: 'New Delhi Railway Station Gate 2',
                destination: 'Dwarka Sector 14 Metro Station'
            },
            RL77: {
                eta: '12 mins',
                boarding: 'New Delhi Railway Station Gate 2',
                destination: 'Mangla Puri'
            },
            RL77Cluster: {
                eta: '10 mins',
                boarding: 'New Delhi Railway Station Gate 2',
                destination: 'Mangla Puri Terminal'
            },
            RL77Extn: {
                eta: '7 mins',
                boarding: 'New Delhi Railway Station Gate 2',
                destination: 'Dawarka Sector 19 (Pocket 2)'
            },
            RL77A: {
                eta: '6 mins',
                boarding: 'New Delhi Railway Station Gate 2',
                destination: 'Dawarka Sector 18B'
            }
        };

        // Update UI with selected bus details
        etaDisplay.textContent = busDetails[route].eta;
        boardingDisplay.textContent = busDetails[route].boarding;
        destinationDisplay.textContent = busDetails[route].destination;

        // Update the bus location on the map (updateMap function)
        updateMap(route);
    }

    // Initialize with the first route's details
    fetchBusDetails('GL90');
});
