// https://en.wikipedia.org/wiki/List_of_communes_in_France_with_over_20,000_inhabitants

function city_listing() {
  var cities = []; 
  var table = document.getElementsByClassName('wikitable sortable');
  for (var i = 0; i < table.length; i++) {
      var rows = table[i].getElementsByTagName('tr');
      for (var j = 0; j < rows.length; j++) {
          var cells = rows[j].getElementsByTagName('td');
          if (cells.length > 0) {
              cities.push(cells[0].innerHTML);
          }
      }
  }
}
