var myUI;

myUI = {
	init: function(){
		var frame = createEle("div"),
		    header = createEle("header"),
		    container = createEle("div"),
		    footer = createEle("footer");

		footer.innerHTML = "2020 EHAWK LLC";

		container.innerHTML = "divs n stuff";
		container.className = "container";

		header.innerHTML = "<h1>SIM GAME</h1>";

		frame.className = "frame";
		frame.append(header,container,footer);

		body.append(frame);
		//console.log("alert: game initializing now");
	}
};

window.onload = function(){
	myUI.init();
};