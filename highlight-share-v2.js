$(document).ready(function() {
  $('body').on('mouseup', function(e) {
    var selection = window.getSelection().toString();
    if (selection.length > 0) {
      var $tooltip = $('<div>')
        .addClass('tooltip')
        .append(
          $('<img>')
            .attr('src', 'twitter.png')
            .click(function() {
              window.open(
                'https://twitter.com/intent/tweet?text=' +
                  encodeURIComponent(selection)
              );
            })
        )
        .append(
          $('<img>')
            .attr('src', 'discord.png')
            .click(function() {
              window.open(
                'https://discord.com/api/oauth2/authorize?client_id=12345678&scope=bot&permissions=0'
              );
            })
        );
      $('body').append($tooltip);
      $tooltip
        .css('left', e.pageX + 10)
        .css('top', e.pageY + 10)
        .fadeIn();
    }
  });
  $('body').on('mousedown', function() {
    $('.tooltip').remove();
  });
});
