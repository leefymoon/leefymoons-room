class asideDoodad extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
	<iframe scrolling="no" frameborder="no" clocktype="html5" style="overflow:hidden;border:#8a2be2 1px solid;margin:0;padding:2px 19px;width:120px;height:40px;"src="https://www.clocklink.com/html5embed.php?clock=004&timezone=EST&color=white&size=120&Title=&Message=&Target=&From=2025,1,1,0,0,0&Color=white"></iframe>
            <div class="mood">
            	<h3>leefy is feeling:</h3>
            	<a href="https://www.imood.com/users/leefylavish"><img class="moodIMG"src="https://moods.imood.com/display/uname-leefylavish/fg-ffffff/bg-000000/imood.gif" width="80px" alt="The current mood of leefylavish at www.imood.com" style="border-left: 1px #8a2be2;border-top: 1px #8a2be2;"></a>
            </div>
                <div class="socials">
                  <h2>socials</h2>
                  <a href="https://forums.fort1nd.com/u/leefymoon"><img src="forums-icon.png"/></a>
                  <a href="https://pikidiary.lol/@leefylavish"><img src="piki-icon.png"/></a>
                  <a href="https://discord.com/users/484765590511419403"/><img src="discord-icon.png"/></a>
                  <a href="https://crosstalk.im/profile/+leefymoon"/><img src="wlm-icon.png"/></a>
                  <a href="https://www.tumblr.com/blog/leefymoon"/><img src="tumblr-icon.png"/></a>
                  <a href="https://spacehey.com/leefymoon"/><img src="spacehey-icon.png"/></a>
                </div>
                `;
  }
}
customElements.define("aside-doodad", asideDoodad);

document.getElementById("disco-mode").style.display = "none";

var x = document.getElementById("disco-mode");
if (x.style.display === "block") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
