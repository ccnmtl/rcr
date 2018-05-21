function openAnnotation(url) {
var winl = (screen.width - 600) / 2;
var wint = (screen.height - 500) / 2;
winprops = 'height='+400+',width='+540+',top='+wint+',left='+winl+',resizable=no,scrollbars=yes,status=no,menubar=yes,directories=no,toolbar=yes'
myHelpWin = window.open(url, "annotation", winprops)
if (parseInt(navigator.appVersion) >= 4) { myHelpWin.window.focus(); }
}


function openWizard(url) {
var winl = (screen.width - 600) / 2;
var wint = (screen.height - 500) / 2;
winprops = 'height='+500+',width='+540+',top='+wint+',left='+winl+',resizable=no,scrollbars=yes,status=no,menubar=yes,directories=no,toolbar=yes'
myHelpWin = window.open(url, "wizard", winprops)
if (parseInt(navigator.appVersion) >= 4) { myHelpWin.window.focus(); }
}


function openAnswer(url,h,w) {
var winl = (screen.width - 600) / 2;
var wint = (screen.height - 500) / 2;
winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',resizable=no,scrollbars=yes,status=no,menubar=yes,directories=no,toolbar=yes'
myHelpWin = window.open(url, "annotation", winprops)
if (parseInt(navigator.appVersion) >= 4) { myHelpWin.window.focus(); }
}

function openSideBar(url,h,w) {
var winl = (screen.width - 600) / 2;
var wint = (screen.height - 500) / 2;
winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',resizable=no,scrollbars=yes,status=no,menubar=no,directories=no,toolbar=no'
suppReading = window.open(url, "elements", winprops)
if (parseInt(navigator.appVersion) >= 4) { suppReading.window.focus(); }
}




function openPopUp(url,w,h) {
var winl = (screen.width - 600) / 2;
var wint = (screen.height - 500) / 2;
winprops = 'width='+w+',height='+h+',top='+wint+',left='+winl+',resizable=no,scrollbars=yes,status=no,menubar=no,directories=no,toolbar=no'
myHelpWin = window.open(url, "popUp", winprops)
if (parseInt(navigator.appVersion) >= 4) { myHelpWin.window.focus(); }
}