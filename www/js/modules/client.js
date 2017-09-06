myApp.onPageInit('restaurants-list', function (page){
  // Generate array with 10000 demo items:
  var items = [];
  items.push({
      title: 'Nautica ',
      subtitle: 'Restaurante piscina abajo'
  });
  items.push({
      title: 'Piscinas ',
      subtitle: 'Restaurante piscina arriba'
  });

  // Create virtual list
  var virtualList = myApp.virtualList($$(page.container).find('.virtual-list'), {
      // Pass array with items
      items: items,
      // Custom search function for searchbar
      searchAll: function (query, items) {
          var found = [];
          for (var i = 0; i < items.length; i++) {
              if (items[i].title.includes(query) || query.trim() === '') found.push(i);
          }
          return found; //return array with mathced indexes
      },
      // List item Template7 template
      template: '<li>' +
                  '<a href="views/client-profile.html" class="item-link item-content">' +
                    // '<div class="item-media">' +
                    //   '<img src="http://lorempixel.com/88/88/fashion/3" width="44">' +
                    // '</div>' +
                    '<div class="item-inner">' +
                      '<div class="item-title-row">' +
                        '<div class="item-title nowrap-list-title">{{title}}</div>' +
                      '</div>' +
                      '<div class="item-subtitle">{{subtitle}}</div>' +
                    '</div>' +
                  '</a>' +
                '</li>',
      // Item height
      height: 73,
  });
});

myApp.onPageInit('courts-list', function (page){
  // Generate array with 10000 demo items:
  var items = [];
  for (var i = 0; i < 20; i++) {
    items.push({
        title: 'Cancha '+i,
        subtitle: 'Cancha de deporte '+i
    });
  }
  // Create virtual list
  var virtualList = myApp.virtualList($$(page.container).find('.virtual-list'), {
      // Pass array with items
      items: items,
      // Custom search function for searchbar
      searchAll: function (query, items) {
          var found = [];
          for (var i = 0; i < items.length; i++) {
              if (items[i].title.includes(query) || query.trim() === '') found.push(i);
          }
          return found; //return array with mathced indexes
      },
      // List item Template7 template
      template: '<li>' +
                  '<a href="views/client-profile.html" class="item-link item-content">' +
                    // '<div class="item-media">' +
                    //   '<img src="http://lorempixel.com/88/88/fashion/3" width="44">' +
                    // '</div>' +
                    '<div class="item-inner">' +
                      '<div class="item-title-row">' +
                        '<div class="item-title nowrap-list-title">{{title}}</div>' +
                      '</div>' +
                      '<div class="item-subtitle">{{subtitle}}</div>' +
                    '</div>' +
                  '</a>' +
                '</li>',
      // Item height
      height: 73,
  });
});

myApp.onPageInit('client-profile', function (page) {
  $$("#client-menu-options").show();
});

myApp.onPageInit('client-profile-edit', function (page) {
});
