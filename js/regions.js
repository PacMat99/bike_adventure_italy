// select all the regions with the class name 'region'
let regions = document.querySelectorAll('.region');
let regionDescriptions = document.querySelectorAll('.show-content')

// loop through each region and add a click event listener
regions.forEach(function(region) {
    region.addEventListener('click', function() {
        // do something when the region is clicked
        for (let regionDescription of regionDescriptions) {
            regionDescription.classList.add('hide-content');
        }
        for (let mapRegion of regions) {
            mapRegion.classList.remove('selected');
        }
        document.getElementById(region.id).classList.add('selected');
        document.getElementById(region.id + '-description').classList.remove('hide-content');
    });
});
