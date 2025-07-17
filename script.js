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
                    <p>Dare To Be Stupid<br>"Weird Al" Yankovic</p>
                </div>
                <div class="poll">
                    <form method="post" action="https://poll.pollcode.com/99328334"><div style="background-color:#000000;padding:2px;width:175px;font-family:Palatino Linotype;font-size:small;color:#FFFFFF;"><div style="padding:2px 0px 4px 2px;"><strong>comics or books?</strong></div><input type="radio" name="answer" value="1" id="answer993283341" style="float:left;" /><label for="answer993283341" style="float:left;width:150px;">comics</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="2" id="answer993283342" style="float:left;" /><label for="answer993283342" style="float:left;width:150px;">books</label><div style="clear:both;height:2px;"></div><div align="center" style="padding:3px;"><input type="submit" value=" Vote ">&nbsp;<input type="submit" name="view" value=" View "></div><div align="right" style="font-size:10px">pollcode.com <a href="https://pollcode.com/">free polls</a></div></div></form>
                </div> 
                <!-- // Begin Current Moon Phase HTML (c) MoonConnection.com // --><table cellpadding="0" cellspacing="0" border="0" width="128"><tr><td align="center"><a href="https://www.moonconnection.com" target="mc_moon_ph"><img src="https://www.moonmodule.com/cs/dm/vn.gif" width="128" height="196" border="0" alt="" /></a><div style="position:relative;width:128px;"><div style="position:absolute;top:-20px;left:6px;background:#000000;width:116px;text-align:center;"><a href="https://www.moonconnection.com/moon_phases.phtml" target="mc_moon_ph"><font color="#7F7F7F" size="1" face="arial,helvetica,sans-serif"><span style="color:#7F7F7F;font-family:arial,helvetica,sans-serif;font-size:10px;">moon phase info</span></font></a></div></div></td></tr></table><!-- // end moon phase HTML // -->`;
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
