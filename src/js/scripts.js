var myUI, navBtnNames;

navBtnNames = ["➕","🔬","📜","💲","🔋","💠","🔨","⚙"];

myUI = {
	init: function(){
		var frame = createEle("div"),
		    header = createEle("header"),
		    container = createEle("div"),
		    footer = createEle("footer");

		footer.innerHTML = "2020 EHAWK LLC";

		container.className = "container";
		container.onload = myUI.popCont(container);

		header.innerHTML = "<h1>SIM GAME</h1>";

		frame.className = "frame";
		frame.append(header,container,footer);

		body.append(frame);
		//console.log("alert: game initializing now");
	},
	popCont: function(container){
		var nav = createEle("div");

		nav.className = "nav";

		for(var i = 0; i < navBtnNames.length; i++){
			var btns = createEle("button");

			btns.innerHTML = navBtnNames[i];
			btns.className = "btns";

			nav.append(btns);
		}

		container.append(nav);
	}
};

window.onload = function(){
	myUI.init();
};