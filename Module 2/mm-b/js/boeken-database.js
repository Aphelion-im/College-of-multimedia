/* Boeken database met alle kookboeken. Samples genomen van Bol.com.  */

var boeken = [

boek = {
  "id"                : 0,
  "Auteur"            : "Nigella Lawson",
  "boekTitel"         : "Simply Nigella",
  "boekQuote"         : "Relaxt, inspirerend en om te watertanden.",
  "afbeelding"        : "simply-nigella-boek-o.jpg",
  "altDescription"    : "Boek Simply Nigella",
  "filterKey"         : ["nederlands", "wereldkeuken"],
  "buttonText"        : "Simply Nigella", 
  "cardParagraph"     : "Simply Nigella bevat 125 inspirerende en toegankelijke recepten die moeiteloos in ons drukke leven passen, boordevol ingrediënten waar zowel je lichaam als je geest gelukkig van wordt.",
  "prijsBoek"         : 20.00,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 1,
  "Auteur"            : "Janneke Koeman",
  "boekTitel"         : "Foodsisters",
  "boekQuote"         : "Had ik nooit verwacht en toch gebeurd.",
  "afbeelding"        : "foodsisters-kookboek-o.jpg",
  "altDescription"    : "Boek Janneke Koeman Foodsisters",
  "filterKey"         : ["nederlands", "wereldkeuken"],
  "buttonText"        : "Foodsisters", 
  "cardParagraph"     : "Al meer dan 10 jaar begeleiden de Foodsisters mensen bij het eten van minder koolhydraten. Al hun praktijk ervaring hebben ze gebundeld in één compleet en praktisch boek.",
  "prijsBoek"         : 25.00,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 2,
  "Auteur"            : "Jamie Oliver",
  "boekTitel"         : "VEG",
  "boekQuote"         : "Gevarieerd boek met smakelijke recepten.",
  "afbeelding"        : "jamie-oliver-veg-o.jpg",
  "altDescription"    : "Boek Jamie Oliver's VEG",
  "filterKey"         : ["vegetarisch", "wereldkeuken"],
  "buttonText"        : "VEG", 
  "cardParagraph"     : "VEG staat vol supermakkelijke, gezonde, overheerlijke, toegankelijke en betaalbare groenterecepten.",
  "prijsBoek"         : 29.99,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 3,
  "Auteur"            : "Nancy Singleton Hichisu",
  "boekTitel"         : "Japan",
  "boekQuote"         : "Japanese recipes for the normal person.",
  "afbeelding"        : "japan-the-cookbook-o.jpg",
  "altDescription"    : "Boek Japan - the cookbook",
  "filterKey"         : ["engelstalig", "aziatisch"],
  "buttonText"        : "Japan", 
  "cardParagraph"     : "The definitive, home cooking recipe collection from one of the most respected and beloved culinary cultures.",
  "prijsBoek"         : 35.99,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 4,
  "Auteur"            : "Artie Bucco",
  "boekTitel"         : "Sopranos",
  "boekQuote"         : "Not your typical Italian cookbook.",
  "afbeelding"        : "sopranos-family-cookbook-o.jpg",
  "altDescription"    : "Book Soprano's family cookbook",
  "filterKey"         : ["engelstalig", "italiaans"],
  "buttonText"        : "Sopranos", 
  "cardParagraph"     : "Not just your typical Italian cookbook, this volume aims to make it easy to cook ziti as good as Carmela's and satisfy your hunger and your Sopranos cravings in one go.",
  "prijsBoek"         : 25.99,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 5,
  "Auteur"            : "Nigella Lawson",
  "boekTitel"         : "Nigellissima",
  "boekQuote"         : "De italiaanse keuken lekker en snel.",
  "afbeelding"        : "nigellissima-o.jpg",
  "altDescription"    : "Boek Nigella Lawson's Nigellissima",
  "filterKey"         : ["nederlands", "italiaans"],
  "buttonText"        : "Nigellissima", 
  "cardParagraph"     : "In Nigellissima viert Nigella de Italiaanse keuken: eerlijk, simpel maar heerlijk eten dat van je dagelijkse maaltijd een feestje zonder gedoe maakt.",
  "prijsBoek"         : 39.50,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 6,
  "Auteur"            : "Jord Althuizen",
  "boekTitel"         : "Burgers & BBQ Bites",
  "boekQuote"         : "Smokey goodness van een pyro-culinair avonturier.",
  "afbeelding"        : "burgers-and-bbq-bites-o.jpg",
  "altDescription"    : "Boek Burgers & BBQ Bites",
  "filterKey"         : ["vlees", "wereldkeuken"],
  "buttonText"        : "BBQ Bites", 
  "cardParagraph"     : "Burgers & BBQ Bites, met barbecuerecepten voor iedereen, voor fans van BBQ USA-style en Smokey Goodness.",
  "prijsBoek"         : 22.50,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 7,
  "Auteur"            : "Yotam Ottolenghi",
  "boekTitel"         : "Ottolenghi SIMPLE",
  "boekQuote"         : "Zeer fijn kookboek! Lekkere en originele receptjes.",
  "afbeelding"        : "ottolenghi-simple-o.jpg",
  "altDescription"    : "Boek Ottolenghi SIMPLE",
  "filterKey"         : ["engelstalig", "wereldkeuken"],
  "buttonText"        : "SIMPLE", 
  "cardParagraph"     : "Yotam Ottolenghi's award-winning recipes are always a celebration: an unforgettable combination of abundance, taste and surprise.",
  "prijsBoek"         : 27.99,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 8,
  "Auteur"            : "Jody Vassallo",
  "boekTitel"         : "Basisboek Aziatisch",
  "boekQuote"         : "Een dik, rijk geïllustreerd boek met een logische opbouw.",
  "afbeelding"        : "basisboek-aziatisch-o.jpg",
  "altDescription"    : "Boek Basisboek Aziatisch",
  "filterKey"         : ["nederlands", "aziatisch"],
  "buttonText"        : "Aziatisch", 
  "cardParagraph"     : "Met 'Basisboek Aziatisch' haal je 300 recepten (met stap-voor-stap-fotografie en -uitleg) uit de keukens van China, Japan, Thailand en Korea in huis.",
  "prijsBoek"         : 15.95,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 9,
  "Auteur"            : "Judy Bastyra",
  "boekTitel"         : "Thaise keuken",
  "boekQuote"         : "Een dik, rijk geïllustreerd boek met een logische opbouw.",
  "afbeelding"        : "minibijbel-thaise-keuken-o.jpg",
  "altDescription"    : "Boek Minibijbel - Thaise keuken",
  "filterKey"         : ["nederlands", "thais"],
  "buttonText"        : "Thaise keuken", 
  "cardParagraph"     : "Verken de historie en tradities van dit fascinerende land en ontdek hoe de pittige, exotische keuken zich heeft ontwikkeld.",
  "prijsBoek"         : 10.00,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 10,
  "Auteur"            : "Saiphin Moore",
  "boekTitel"         : "Rosa's thai café",
  "boekQuote"         : "Uitstekend om cadeau te doen voor iemand.",
  "afbeelding"        : "rosas-thai-cafe-o.jpg",
  "altDescription"    : "Boek Rosa's thai café",
  "filterKey"         : ["nederlands", "thais"],
  "buttonText"        : "Thai café", 
  "cardParagraph"     : "Rosa's Thai Café, genoemd naar het gelijknamige populaire restaurant in Londen, biedt meer dan 100 Thaise recepten met een moderne twist.",
  "prijsBoek"         : 25.95,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 11,
  "Auteur"            : "Rianne Buis",
  "boekTitel"         : "Griekenland kookboek",
  "boekQuote"         : "Zeer uitgebreid kookboek met veel wetenswaardigheden.",
  "afbeelding"        : "griekenland-het-kookboek-o.jpg",
  "altDescription"    : "Boek Griekenland hét kookboek",
  "filterKey"         : ["nederlands", "grieks"],
  "buttonText"        : "Griekenland", 
  "cardParagraph"     : "De échte Griekse keuken is een goed bewaard geheim en heeft een zeer gevarieerd karakter: van de zonnige schotels van de eilanden tot de eerlijke, pure gerechten uit de bergdorpen.",
  "prijsBoek"         : 29.99,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 12,
  "Auteur"            : "Yotam Ottolenghi",
  "boekTitel"         : "Sweet",
  "boekQuote"         : "Zo mooi, zo compleet, zo vernieuwend.",
  "afbeelding"        : "sweet-o.jpg",
  "altDescription"    : "Boek Sweet",
  "filterKey"         : ["nederlands", "wereldkeuken"],
  "buttonText"        : "Sweet", 
  "cardParagraph"     : "Volmaakt luchtig biscuitgebak, op smaak gebracht met kruiden en citrus, een met poedersuiker bestoven, superkruimelig koekje rechtstreeks uit de oven.",
  "prijsBoek"         : 32.00,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 13,
  "Auteur"            : "Jamie Oliver",
  "boekTitel"         : "Super Food",
  "boekQuote"         : "Dit boek heeft mij zeker geholpen gevarieerder te eten.",
  "afbeelding"        : "jamies-superfood-o.jpg",
  "altDescription"    : "Book Super food",
  "filterKey"         : ["engels", "wereldkeuken"],
  "buttonText"        : "Super food", 
  "cardParagraph"     : "Jamie's Super Food Family Classics continues with the popular philosophy behind Jamie's Everyday Super Food, bringing exciting healthy eating to the heart of the home.",
  "prijsBoek"         : 22.99,
  "boekUrl"           : "#"
},

boek = {
  "id"                : 14,
  "Auteur"            : "Ricardo Vis van Heemst",
  "boekTitel"         : "Zeevis kookboek",
  "boekQuote"         : "50 authentieke visgerechten en meer...",
  "afbeelding"        : "zeevis-kookboek-o.jpg",
  "altDescription"    : "Boek Schmidt originals zeevis kookboek",
  "filterKey"         : ["vis", "wereldkeuken"],
  "buttonText"        : "Zeevis kookboek", 
  "cardParagraph"     : "Schmidt Zeevis is al 100 jaar toonaangevend op het gebied van zeevis, de bereiding daarvan en vooral van het (culinair) genieten in Nederland en ver daarbuiten. En in al die jaren hebben wij de meest pure, bijzondere maar ook vaak \'simpele\' gerechten verzameld.",
  "prijsBoek"         : 25.00,
  "boekUrl"           : "#"
}
]


