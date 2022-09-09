if (location.hostname == 'www.twitch.tv') {
    console.log(location.hostname, 'location.hostname')
    const interval = setInterval(() => {   
    const element = document.querySelector(".ScCoreButton-sc-1qn4ixc-0.cgCHoV");
    if(element) {
      console.log('lksdjfkl')
      setTimeout(()=> {
        element?.click()
      }, 2000)
      element?.click()
      clearInterval(interval);
    } 
    
  }, 200)
  
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});

