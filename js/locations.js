//Variabeln locations är en array med objekt. Objekten är de fasta punkterna på kartan som man vill visa användaren
//Varje objekt har attributen: position (anges i en array med lat och lng), title (anges med en sträng), radie (anges som en 
//sträng t.ex "500m" eller 1km), icon (sträng med länk till bilden), keywords (anges i en sträng och är sökord man vill komplettera med), 
//description (en sträng med en beskrivning av platsen), recommended (en array med objekt, varje objekt är en referens till en specifik youtubevideo
//som man vill att användaren ska se först)
//

var locations = [{
position: {lat: 59.341302, lng: 18.058412},
title: "Pub Anchor",
address: "Sveavägen 90",
tunnelbana: "Rådmansgatan",
icon: "pics/icon_pubanchor.png",
marker: "pics/marker_pubanchor.png",
images: ["pics/pubanchor1.jpg","pics/pubanchor2.jpg","pics/pubanchor3.jpg"],
keywords: "Pub anchor",
price: 35,
description: "Pub anchor ligger mitt på sveavägen. Här får man en karhu för endast 35 spänn. På helgerna lirar det coverband som ofta är bättre än orginalen, och på tisdagar och söndagar kan man leva ut sina rockstjärnedrömmar då de kör rockkareoke. Är man hungrig finns det grymt käk. Hamburgarna rekommenderas! Alltid öppet till 03.00, med donken bara ett stenkast bort om man är sugen på lite fyllekäk. We <3 Anchor!",
rating: 5,
recommended: [{youtubeId: "H1Pb1XyTsAQ"},{youtubeId: "pV5oX0a3X4c"},{youtubeId: "SkUI1tHhi1o"}]},

{
position: {lat: 59.314824, lng: 18.071075},
title: "Neverland",
address: "Söderhallarna",
tunnelbana: "Medborgarplatsen",
icon: "pics/icon_neverland.jpg",
marker: "pics/marker_neverland.png",
images: ["pics/neverland1.jpg", "pics/neverland2.jpg"],
keywords: "Bara Enkelt söder stockholm",
price: 49,
description: "Neverland ligger i söderhallarna på medborgarplatsen, mitt emot burger king (om man vill unna sig lite chili cheese). En stor stark går loss på 49 spänn vilket inte känns superprisvärt. Här hänger lite blandad publik, mycket 20 åringar och en och annan bajare. Största styrkan är den väl tilltagna uteserveringen där man kan sitta och prata om livet varma sommarkvällar. Stort minus är att det endast finns två hederliga porslinstoaletter i lokalen = garanterat kö när man ska lämna utrymme för nästa öl. En pissoar hade dragit upp betyget ett snäpp. Men helt OK budgetalternativ till Snaps. Stänger 01:00.",
rating: 3,
recommended: [{youtubeId: "H1Pb1XyTsAQ"},{youtubeId: "pV5oX0a3X4c"},{youtubeId: "SkUI1tHhi1o"}]},

{
position: {lat: 59.312302, lng: 18.079152},
title: "Bara enkelt",
address: "Skånegatan 59",
tunnelbana: "Medborgarplatsen",
icon: "pics/icon_baraenkelt.jpg",
marker: "pics/marker_baraenkelt.png",
images: ["pics/baraenkelt1.jpg", "pics/baraenkelt2.jpg"],
keywords: "Bara Enkelt söder stockholm",
price: 29,
description: "Ett av favorithaken på söder. Mysig lokal i hjärtat av söder, ett stenkast från hak som Pet Sounds och Ugglan. Här får man en stor stark för endast 29 spänn, dessutom serverade i kylda glas! Stort plus. Finns även en liten uteservering man kan sitta på ifall man är på det humöret. Stänger dock 01.00 som tyvärr de flesta trevliga söderhak gör. Tar även endast kontanter, bankomat finns dock i lokalen.",
rating: 4.5,
recommended: [{youtubeId: "H1Pb1XyTsAQ"},{youtubeId: "pV5oX0a3X4c"},{youtubeId: "SkUI1tHhi1o"}]},

{
position: {lat: 59.340990, lng: 18.058055},
title: "Hirschenkeller",
address: "Sveavägen 61",
tunnelbana: "Rådmansgatan",
icon: "pics/icon_hirschenkeller.jpg",
marker: "pics/marker_hirschenkeller.png",
images: ["pics/hirschenkeller1.jpg", "pics/hirschenkeller2.jpg"],
keywords: "Hirschenkeller sveavägen",
price: 39,
description: "Hirschenkeller ligger mitt på Sveavägen, ett stenkast från observatorielunden. Här får man ett redigt glas öl för överkomliga 39kr. Lokalen är fräsch, men tyvärr drar personalen ner helthetsintrycket då de inte var av den serviceglada sorten.. Extremt dryga vakter. För övrigt ett helt okej ställe om man vill sätta sig ner och snacka med sina kompisar över någon öl innan man drar vidare ut i natten.",
rating: 2.5,
recommended: [{youtubeId: "H1Pb1XyTsAQ"},{youtubeId: "pV5oX0a3X4c"},{youtubeId: "SkUI1tHhi1o"}]},

{
position: {lat: 59.315046, lng: 18.078229},
title: "No Name bar",
tunnelbana: "Medborgarplatsen",
address: "Folkungagatan 69",
icon: "pics/icon_noname.jpg",
marker: "pics/marker_noname.jpg",
images: ["pics/noname1.jpg", "pics/noname2.jpg", "pics/noname3.jpg", "pics/noname4.jpg"],
keywords: "Pub anchor",
price: 39,
description: "Kanske bästa förkrökshaket på söder innan man glider vidare ut i natten beklädd i sina tightaste rövsvettsmarinerade cheapmondays. Vid första anblick kan de träpanelsbeklädda väggarna andas vibbar från Morfars gamla gillestuga, men det funkar tamigfan. Lokalen är mys och toaletterna är konstverk ala påtänd konstfackare. Ölen levereras i sibirienkalla glas vilket utan tvekan fler hak borde anamma. Ett minus för bordsplaceringen, som får en aning isolerande effekt.",
rating: 4.3,
recommended: [{youtubeId: "H1Pb1XyTsAQ"},{youtubeId: "pV5oX0a3X4c"},{youtubeId: "SkUI1tHhi1o"}]}

];
