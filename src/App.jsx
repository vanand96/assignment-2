const element = (
  <div className="grid-container">
    <div className="user">
      <h1> ANAND VADAVELLI </h1>
    </div>
    <div className="picture">
      <img
        src="/img/Headshot.JPG"
        alt="Headshot"
        width="300"
        height="300"
      ></img>
    </div>
    <div className="description">
      Working as a Test Automation Engineer at Viasat and pursuing Masters in
      computer science at SDSU. I am taking this course to pursue my carrier as
      a full stack engineer.
    </div>
    <div className="code">
      <a href="https://github.com/vanand96" target="blank" className="button">
        VIEW MY GITHUB REPO
      </a>
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("content"));
