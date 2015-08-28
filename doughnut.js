
  var DoughnutStore = function(hours, min, max, avg, location) {
      this.hoursOpenPerDay = hours;
      this.minCustomersPerHour = min;
      this.maxCustomersPerHour = max;
      this.avgDoughnutsPerCustomer = avg;
      this.location = location;
      this.avgCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
      this.doughnutsPerHour = function() {
        return Math.round(this.avgCustomersPerHour * this.avgDoughnutsPerCustomer);
      };
      this.doughnutsPerDay = function() {
        return this.doughnutsPerHour() * this.hoursOpenPerDay;
      };
    };

    var DoughnutMaster = function(array) {
      this.locations = array;
      this.addShop = function(location) {
        this.locations.push(location);
      };
      this.generateReport = function() {
        for (var i = 0; i < this.locations.length; i++) {

        console.log("location " + this.locations[i].location +
          " doughnutsPerHour " +  this.locations[i].doughnutsPerHour()
          + " doughnutsPerDay " + this.locations[i].doughnutsPerDay());
        }
      };
    };

    var ballard = new DoughnutStore(12, 8, 58, 3.75, "Ballard");
    var downtown = new DoughnutStore(16, 8, 43, 4.5, "Downtown");
    var capHill = new DoughnutStore(14, 4, 37, 2, "Capitol Hill");
    var southLU = new DoughnutStore(12, 9, 23, 6.33, "South Lake Union");
    var wedgwood = new DoughnutStore(15, 2, 28, 1.25, "Wedgwood");

    var hq = new DoughnutMaster([ballard, downtown, capHill, southLU, wedgwood]);

    hq.generateReport();
    console.log(hq.locations.length);

  $( "tbody" ).html(function() {
    var tableData;
    for (var i = 0; i < hq.locations.length; i++) {
      tableData += "<tr class='colorEffect" + i + "'><td>" + hq.locations[i].location +
      "</td><td>" + hq.locations[i].hoursOpenPerDay + "</td><td>" +
      hq.locations[i].doughnutsPerHour() + "</td><td>" +
      hq.locations[i].avgDoughnutsPerCustomer + "</td><td>" +
      hq.locations[i].doughnutsPerHour() + "</td><td>" +
      hq.locations[i].doughnutsPerDay() + "</td></tr>";
    }
    return tableData;
  });

  $( "tr" ).hover(function() {
    $(this).css({ "background-color": "orange", "font-size": "125%", "color": "black"});
  }, function() {
    $(this).css({ "background-color": "blueviolet", "font-size": "100%", "color": "white"});
  });



