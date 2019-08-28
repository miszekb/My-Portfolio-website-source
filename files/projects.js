githubButtonHandler = () => {
    window.open('https://github.com/miszekb', '_blank');
}

facebookButtonHandler = () => {
   // window.open('https://www.codexworld.com', '_blank');
}

linkedinButtonHandler = () => {
    window.open('https://www.linkedin.com/in/miszekb/', '_blank');
}

fakeLoadingAnim = () => {

}

downloadResumeHandler = () => {
    document.getElementById('my_iframe').src = "../files/CV.pdf";
}

pictureZoom = () => {
  document.getElementById("projectImg1").innerHTML = "<div class='pictureZoom'></div>"      
}

closeZoom = () => {
    document.getElementById("projectImg1").innerHTML = "";
}