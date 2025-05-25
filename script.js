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
                    <img src="aotwIMG.png" width="150px" height="150px"/>
                    <p>Clancy<br>Twenty One Pilots</p>
                </div>
                <div class="poll">
                    <form method="post" action="https://poll.pollcode.com/82372382"><div style="border:#8a2be2 1px solid;background-color:#000000;padding:2px;width:154px;font-family:Courier New;font-size:small;color:#fff;"><div style="padding:2px 0px 4px 2px;"><strong>salty or sweet foods?</strong></div><input type="radio" name="answer" value="1" id="answer823723821" style="float:left;" /><label for="answer823723821" style="float:left;width:125px;">salty</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="2" id="answer823723822" style="float:left;" /><label for="answer823723822" style="float:left;width:125px;">sweet</label><div style="clear:both;height:2px;"></div><div align="center" style="padding:3px;"><input type="submit" value=" Vote ">&nbsp;<input type="submit" name="view" value=" View "></div><div align="right" style="font-size:10px">pollcode.com <a href="https://pollcode.com/">free polls</a></div></div></form>
                </div> 
                <!-- // Begin Current Moon Phase HTML (c) MoonConnection.com // --><table cellpadding="0" cellspacing="0" border="0" width="128"><tr><td align="center"><a href="https://www.moonconnection.com" target="mc_moon_ph"><img src="https://www.moonmodule.com/cs/dm/vn.gif" width="128" height="196" border="0" alt="" /></a><div style="position:relative;width:128px;"><div style="position:absolute;top:-20px;left:6px;background:#000000;width:116px;text-align:center;"><a href="https://www.moonconnection.com/moon_phases.phtml" target="mc_moon_ph"><font color="#7F7F7F" size="1" face="arial,helvetica,sans-serif"><span style="color:#7F7F7F;font-family:arial,helvetica,sans-serif;font-size:10px;">moon phase info</span></font></a></div></div></td></tr></table><!-- // end moon phase HTML // -->`;
	}
}
customElements.define("aside-doodad", asideDoodad);

class footerButtons extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
	<marquee>
        <a href="https://nekoweb.org/"><img src="https://nekoweb.org/assets/buttons/button6.gif"></a><!-- button by s1nez.nekoweb.org -->
        <a href="https://pikidiary.lol"><img src="pikibutton.png"/></a>
        <a href="https://moonlit-blossom.neocities.org"><img src="moonlitblossombutton.jpeg"/></a>
        <a href="https://kyurems-webroom.neocities.org"><img src="ksitebutton.png"/></a>
        <a href="https://graybox.lol/" target="_blank"><img src="https://graybox.lol/button?speed=60&style=1" alt="GrayBox 88x31 Button" width="88" height="31"></a>
        <a href="https://kaiserpug.nekoweb.org/"><img src="https://kaiserpug.neocities.org/button(4).png" alt="KaiserPug.org"></a>
        <a href="https://lukaszone.neocities.org/"><img src="https://lukaszone.neocities.org/kkkk (online-video-cutter.com).gif" alt="Lukas Zone" title="Zone Yourselves In!"></a>
        <a href="https://daniele63.com/"><img src="https://files.catbox.moe/5nn8i3.jpg"/></a>
        <a href="https://openbooks.neocities.org"><img src="https://openbooks.neocities.org/img/88x31.gif" height="31" width="88" style="image-rendering:pixelated;"/></a>
        <a href="https://miniwildpanda.neocities.org"><img src="https://files.catbox.moe/78mv2j.gif"/></a>
        <a href="https://thegibusguy.neocities.org"><img src="https://files.catbox.moe/yua6cx.png"/></a>
        <a href="https://t-hates-you.neocities.org/" target="_blank"><img src="https://file.garden/ZoyWx9J8Swks2aed/evilfuckingwebsite.webp"></a>
        <a href="https://wheatley-science.neocities.org/"><img src="https://files.catbox.moe/li94r4.gif"></a>
        <a href="https://maxboi.neocities.org"><img src="https://files.catbox.moe/t8r38w.png"/></a>
        <a href="https://kuroi.com.br/"><img src="https://files.catbox.moe/2z8jar.png"/></a>
        <a href="https://xxstephsroomxx.neocities.org/" target="_blank"><img src="https://i.imgur.com/rTv7TZw.png" height=31 width=88 alt="stephs room"></a>
    	<a href="https://dimden.dev/"><img src="https://dimden.dev/services/images/88x31.gif"></a>
    	<a href="https://guh.nekoweb.org/" target="_blank"><img src="https://guh.nekoweb.org/myguhsite.gif"></a>
      <a href="https://salutationsjosh.neocities.org/"><img src="https://salutationsjosh.neocities.org/assets/button/button.gif"></a>
    </marquee> `;
	}
}
customElements.define("footer-buttons", footerButtons);

class visiterCounter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
	<script type="text/javascript" src="https://www.counters-free.net/count/hrzs"></script><br>
	<a href='https://www.acadoo.de/leistungen/ghostwriter-doktorarbeit/'>Diss Ghostwriter</a> <script type='text/javascript' src='https://www.whomania.com/ctr?id=d14e4fda5e2f731083992b0bba2589bfaa5adcf2'></script> `;
	}
}
customElements.define("visiter-counter", visiterCounter);

document.getElementById("disco-mode").style.display = "none";

var x = document.getElementById("disco-mode");
  if (x.style.display === "block") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
}
