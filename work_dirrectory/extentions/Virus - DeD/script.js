if (location.hostname == 'rezka.ag' || location.hostname == 'hdrezka.co' ) {
    const player = document.querySelector('#oframecdnplayer');
    const config = { childList : true };

    // const elementsToRemove = player.querySelectorAll("pjsdiv");

    // elementsToRemove.forEach((e,i) => {
    //   if(i === 0 || i === 1) return;
    //   e.remove();
    // })

    let isCalled = false;

    const callback = function () {
      if(isCalled) return;
      player.lastElementChild?.remove();
      player.lastElementChild?.remove();
      player.lastElementChild?.remove();
      player.lastElementChild?.remove();
      player.lastElementChild?.remove();
      player.lastElementChild?.remove();
      player.lastElementChild?.remove();
      player.lastElementChild?.remove();
      player.lastElementChild?.remove();

      isCalled = true;
      console.log('done');
    };

    const observer = new MutationObserver(callback);

    observer.observe(player, config);
    console.log('luskdljfaklsdjklfs');
}



