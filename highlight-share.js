$(function() {
  $('a.share-twitter').click(function() {
    var $this = $(this),
      shareUrl = $this.data('share-url'),
      shareText = $this.data('share-text');

    window.open(
      'https://twitter.com/intent/tweet?text=' +
        encodeURIComponent(shareText) +
        '&url=' +
        encodeURIComponent(shareUrl),
      'twitter-share-dialog',
      'width=626,height=436'
    );
    return false;
  });

  $('a.share-discord').click(function() {
    var $this = $(this),
      shareUrl = $this.data('share-url'),
      shareText = $this.data('share-text');

    window.open(
      'https://discord.com/share?text=' +
        encodeURIComponent(shareText) +
        '&url=' +
        encodeURIComponent(shareUrl),
      'discord-share-dialog',
      'width=626,height=436'
    );
    return false;
  });
});
