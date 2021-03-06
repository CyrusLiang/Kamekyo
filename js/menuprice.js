/*
 * Displays menu prices
 * Mark as sold out
 ** "Sold out";//
 */
$(document).ready(function(){
    // Appetizers
    document.getElementById("gyoza").innerHTML = "$8.50";
    document.getElementById("eggp").innerHTML = "$9.50";
    document.getElementById("misoyaki").innerHTML = "$16";
    document.getElementById("bnegi").innerHTML = "$14.50";
    document.getElementById("hkama").innerHTML = "$15";
    document.getElementById("ckushi").innerHTML = "$12";
    document.getElementById("karaage").innerHTML = "$9";
    document.getElementById("svtempura").innerHTML = "$12.50";
    document.getElementById("stempura").innerHTML = "$11";
    document.getElementById("vtempura").innerHTML = "$10";
    document.getElementById("sscrab").innerHTML = "$12.50";
    document.getElementById("korokke").innerHTML = "$8.50";
    document.getElementById("kakifry").innerHTML = "$10.50";
    document.getElementById("atofu").innerHTML = "$9.50";
    document.getElementById("ktofu").innerHTML = "$10";
    document.getElementById("htofu").innerHTML = "$9";

    // Salads
    document.getElementById("gomaae").innerHTML = "$9.50";
    document.getElementById("ohitashi").innerHTML = "$9.50";
    document.getElementById("tsukemono").innerHTML = "$7.50";
    document.getElementById("poke").innerHTML = "$15.50";
    document.getElementById("sunomono").innerHTML = "$10.50";
    document.getElementById("houses").innerHTML = "$9.50";
    document.getElementById("seaweed").innerHTML = "$8.50";
    document.getElementById("sobas").innerHTML = "$10.50";
    document.getElementById("bean").innerHTML = "$8.50";
    document.getElementById("cucumber").innerHTML = "$9";

    // Sides
    document.getElementById("miso").innerHTML = "$3.50";
    document.getElementById("asari").innerHTML = "$8.50";
    document.getElementById("eda").innerHTML = "$7";
    document.getElementById("rice").innerHTML = "$3";
    document.getElementById("srice").innerHTML = "$3.50";

    // Entrees
    document.getElementById("salteri").innerHTML = "$22";
    document.getElementById("sabteri").innerHTML = "$19";
    document.getElementById("chiteri").innerHTML = "$19.50";
    document.getElementById("beefteri").innerHTML = "$27";
    document.getElementById("svteri").innerHTML = "$27";
    document.getElementById("tonkatsu").innerHTML = "$19.50";
    document.getElementById("chikatsu").innerHTML = "$19.50";
    document.getElementById("gpork").innerHTML = "$19.50";
    document.getElementById("gsnap").innerHTML = "$19.50";
    document.getElementById("misoyakie").innerHTML = "$27";
    document.getElementById("sizzveg").innerHTML = "$16";
    document.getElementById("svtempe").innerHTML = "$23.50";
    document.getElementById("stempe").innerHTML = "$21.50";
    document.getElementById("vtempe").innerHTML = "$18";
    document.getElementById("kakifrye").innerHTML = "$19.50";
    document.getElementById("unagid").innerHTML = "$25";
    document.getElementById("terid").innerHTML = "$18.50";
    document.getElementById("tempd").innerHTML = "$17.50";
    document.getElementById("oyako").innerHTML = "$17";
    document.getElementById("tonkatsud").innerHTML = "$18";

    // Kitchen Specials
    document.getElementById("skushi").innerHTML = "$26";
    document.getElementById("yosen").innerHTML = "$27";
    document.getElementById("suki").innerHTML = "$28";
    document.getElementById("sesame").innerHTML = "$20";
    document.getElementById("kclay").innerHTML = "$27";

    // Noodles
    document.getElementById("chicku").innerHTML = "$17";
    document.getElementById("beefu").innerHTML = "$18";
    document.getElementById("kameu").innerHTML = "$16.50";
    document.getElementById("seafu").innerHTML = "$20";
    document.getElementById("svtempu").innerHTML = "$18";
    document.getElementById("stempu").innerHTML = "$17";
    document.getElementById("vtempu").innerHTML = "$17";
    document.getElementById("vegu").innerHTML = "$15";
    document.getElementById("kitsune").innerHTML = "$15.50";
    document.getElementById("nabe").innerHTML = "$24.50";
    document.getElementById("yasai").innerHTML = "$15.50";
    document.getElementById("zaru").innerHTML = "$15.50";
    document.getElementById("tzsoba").innerHTML = "$20";
    document.getElementById("pudon").innerHTML = "$8";
    document.getElementById("psoba").innerHTML = "$9";

    // Sushibar Specials
    document.getElementById("hsroll").innerHTML = "$19.50";
    document.getElementById("strain").innerHTML = "$19.50";
    document.getElementById("harain").innerHTML = "$19.50";
    document.getElementById("kdrag").innerHTML = "$19.50";
    document.getElementById("dyna").innerHTML = "$14";
    document.getElementById("niners").innerHTML = "$18.50";
    document.getElementById("tekkad").innerHTML = "$27";
    document.getElementById("chirashi").innerHTML = "$27";
    document.getElementById("sushim").innerHTML = "$27";
    document.getElementById("sscombo").innerHTML = "$50";

    // Sushibar Specials
    document.getElementById("maguros").innerHTML = "$17";
    document.getElementById("magurol").innerHTML = "$29.50";
    document.getElementById("hamachis").innerHTML = "$17";
    document.getElementById("hamachil").innerHTML = "$29.50";
    document.getElementById("sakes").innerHTML = "$16.50";
    document.getElementById("sakel").innerHTML = "$29";
    document.getElementById("albacores").innerHTML = "$16.50";
    document.getElementById("albacorel").innerHTML = "$29";
    document.getElementById("ankimos").innerHTML = "$16.50";
    document.getElementById("ankimol").innerHTML = "$29";
    document.getElementById("sashimis").innerHTML = "$21";
    document.getElementById("sashimim").innerHTML = "$31.50";
    document.getElementById("sashimil").innerHTML = "$43.50";

    // Nigiri
    document.getElementById("maguro").innerHTML = "$7.50";
    document.getElementById("hamachi").innerHTML = "$7.50";
    document.getElementById("sake").innerHTML = "$6.50";
    document.getElementById("unagi").innerHTML = "$6.75";
    document.getElementById("aji").innerHTML = "$7";
    document.getElementById("amaebi").innerHTML = "$10";
    document.getElementById("anago").innerHTML = "$6.75";
    document.getElementById("ebi").innerHTML = "$6.50";
    document.getElementById("hirame").innerHTML = "$7.25";
    document.getElementById("kanpachi").innerHTML = "$7.50";
    document.getElementById("hotate").innerHTML = "$6.75";
    document.getElementById("ika").innerHTML = "$6.50";
    document.getElementById("ikura").innerHTML = "$7";
    document.getElementById("kani").innerHTML = "$7.50";
    document.getElementById("katsuo").innerHTML = "$6.75";
    document.getElementById("mirugai").innerHTML = "Sold out";//"$11";
    document.getElementById("saba").innerHTML = "$6.50";
    document.getElementById("shiro").innerHTML = "$6.50";
    document.getElementById("tai").innerHTML = "$7";
    document.getElementById("tako").innerHTML = "$6.75";
    document.getElementById("tobiko").innerHTML = "$6.50";
    document.getElementById("tamago").innerHTML = "$5.50";
    document.getElementById("uni").innerHTML = "$14";
    document.getElementById("shotate").innerHTML = "$7";
    document.getElementById("ankimo").innerHTML = "$7";
    document.getElementById("toro").innerHTML = "$17";
    document.getElementById("bigeye").innerHTML = "$8.50";
    document.getElementById("king").innerHTML = "$9";
    document.getElementById("sbelly").innerHTML = "$7.50";
    document.getElementById("abelly").innerHTML = "$7.50";

    // Maki
    document.getElementById("negitoro").innerHTML = "$18";
    document.getElementById("alaska").innerHTML = "$8";
    document.getElementById("avocado").innerHTML = "$6.75";
    document.getElementById("avokyu").innerHTML = "$8";
    document.getElementById("cali").innerHTML = "$9";
    document.getElementById("futom").innerHTML = "$9.50";
    document.getElementById("garisaba").innerHTML = "$8";
    document.getElementById("gobo").innerHTML = "$6.75";
    document.getElementById("horenso").innerHTML = "$6.75";
    document.getElementById("kanpyo").innerHTML = "$6.75";
    document.getElementById("kappa").innerHTML = "$6.75";
    document.getElementById("natto").innerHTML = "$6.75";
    document.getElementById("newyork").innerHTML = "$8";
    document.getElementById("negihama").innerHTML = "$8";
    document.getElementById("oshinko").innerHTML = "$6.75";
    document.getElementById("philly").innerHTML = "$9";
    document.getElementById("rocknroll").innerHTML = "$8.25";
    document.getElementById("sakem").innerHTML = "$8";
    document.getElementById("sskin").innerHTML = "$8.25";
    document.getElementById("stroll").innerHTML = "$8.50";
    document.getElementById("shiitake").innerHTML = "$8.25";
    document.getElementById("stuna").innerHTML = "$8.50";
    document.getElementById("shama").innerHTML = "$8.50";
    document.getElementById("spider").innerHTML = "$14";
    document.getElementById("tekka").innerHTML = "$8";
    document.getElementById("tunad").innerHTML = "$8.50";
    document.getElementById("hamachid").innerHTML = "$8.50";
    document.getElementById("vegd").innerHTML = "$8";
    document.getElementById("unakyu").innerHTML = "$8.25";
    document.getElementById("vtroll").innerHTML = "$8";
    document.getElementById("umeshiso").innerHTML = "$6.75";
    document.getElementById("lobster").innerHTML = "$10";

    // Beverages
    document.getElementById("sanpell").innerHTML = "$4.50";
    document.getElementById("kerns").innerHTML = "$4.50";
    document.getElementById("ramune").innerHTML = "$4.50";
    document.getElementById("calpico").innerHTML = "$4.50";
    document.getElementById("soda").innerHTML = "$3.25";
    document.getElementById("icedt").innerHTML = "$4";
    document.getElementById("thait").innerHTML = "$4.50";
    document.getElementById("mangofloat").innerHTML = "$7";

    // Desserts
    document.getElementById("icecream").innerHTML = "$7.50";
    document.getElementById("friedb").innerHTML = "$8";
    document.getElementById("friedic").innerHTML = "$8";
    document.getElementById("mochi").innerHTML = "$5.50";
})
/*
";
document.getElementById("").innerHTML = "$
*/
