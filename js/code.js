function cambiar(id)
{
	if(id==1){
		document.getElementById("inf-title").innerHTML = "¿What is advertising?";
		document.getElementById("info").innerHTML = "Advertising is a means of communication" + 
		" with the users of a product or service. Advertisements are messages paid for by those" + 
		" who send them and are intended to inform or influence people who receive them."+ "<br />"+ "<br />" +
		"The advertising industry is made of companies that advertise, agencies that create the advertisements,"+ 
		" media that carries the ads, and a host of people like copy editors, visualizers, brand managers, researchers, "+
		"creative heads and designers who take it the last mile to the customer or receiver.";
	}else{
		if(id==2){
			document.getElementById("inf-title").innerHTML = "Types of advertising";
			document.getElementById("info").innerHTML = 
				"Advertising has evolved into a vastly complex form of communication, with literally thousands of different ways for a business to get a message to the consumer: " + "<br />" + "<br />"
			+ "- Online Advertising" + "<br />" 
			+ "- Cell Phone & Mobile Advertising" + "<br />"
			+ "- Print Advertising" + "<br />"
			+ "- Marketing" + "<br />"
			+ "- Broadcast Advertising" + "<br />"
			+ "- Outdoor Advertising" + "<br />"
			+ "- Public Service Advertising" + "<br />"
			+ "- Product Placement Advertising" + "<br />";
		}else{
			if(id==3){
				document.getElementById("inf-title").innerHTML = "Advertising in the USA";
				document.getElementById("info").innerHTML = "The United States is, by far, the largest advertising market in the world." + 
				" In 2016, more than 190 billion U.S. dollars were spent in advertising in the United States." +
				"  Forecasts show healthy projections for the ad market in the U.S. for 2017,"+
				" as media advertising spending is expected to reach the 207 billion U.S. dollars mark this year."+
				" Television has been the biggest advertising medium in the United States in the last few years, "+ 
				"but is projected to lose the market lead in 2017 to digital. ";
			}else{
				if(id==4){
					document.getElementById("inf-title").innerHTML = "Increase in sales in medium-sized companies in the USA";
					document.getElementById("info").innerHTML = 
					"Advertising plays an important role in the growth of small and medium-sized businesses. "+
					"A company that needs to advertise itself and/or its products hires an advertising agency."+
					" The company briefs the agency on the brand, its imagery, the ideals and values behind it, "+
					"the target segments and so on. The agencies convert the ideas and concepts to create the visuals, "+
					"text, layouts and themes to communicate with the user. After approval from the client, the ads go on air,"+
					" and the sales begin to increase.";

				}else{
					document.getElementById("inf-title").innerHTML = "Brochure:";
					document.getElementById("info").innerHTML = "<a href='brochure/brochure.pdf'>"+"Link"+"</a>";
				}
				
			}
		}
	}
}
