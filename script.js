class asideDoodad extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
	<iframe scrolling="no" frameborder="no" clocktype="html5" style="overflow:hidden;border:#8a2be2 1px solid;margin:0;padding:2px 19px;width:120px;height:40px;"src="https://www.clocklink.com/html5embed.php?clock=004&timezone=EST&color=white&size=120&Title=&Message=&Target=&From=2025,1,1,0,0,0&Color=white"></iframe>
            <div class="mood">
            	<h3>leefy is feeling:</h3>
            	<a href="https://www.imood.com/users/leefylavish"><img class="moodIMG"src="https://moods.imood.com/display/uname-leefylavish/fg-ffffff/bg-000000/imood.gif" width="80px" alt="The current mood of leefylavish at www.imood.com" style="border-left: 1px #8a2be2;border-top: 1px #8a2be2;"></a>
            </div>
                <div class="aotw">
                    <h3>album of the week!</h3>
                    <img src="aotwIMG.jpg" width="150px" height="150px"/>
                    <p>Elect The Dead<br>Serj Tankian</p>
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
