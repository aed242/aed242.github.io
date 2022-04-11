//via https://medium.com/front-end-weekly/how-to-create-typing-effect-in-css-and-js-3252dd807f0a. I customized the code to meet my needs. 
const carouselText = [
    {text: "Recent Graduate", color: "rgb(0,175,156)", vowel: "a "},
    {text: "Passionate about full stack development", color: "rgb(84,92,235)", vowel: ""},
    {text: "Looking for new opportunities", color: "rgb(0,175,156)", vowel: ""}
  ]
  
  $( document ).ready(async function() {
    carousel(carouselText, "#feature-text")
  });
  
  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        //updateFontColor("#color-text-title",carouselList[i].color)
        updateFontColor("#feature-text-vowel", "white")
        await $("#feature-text-vowel").append(carouselList[i].vowel);
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1000);
        await deleteSentence(eleRef);
        await $("#feature-text-vowel").text("");
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

