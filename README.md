## Deployment
* https://kunskapskontroll-4.netlify.app

## Skills used for this project
* HTML
* CSS
* JavaScript
* jQuery
* Snowpack
* Netlify

## Requirements

# Kunskapskontroll-4

Ni ska bygga ut portfolion som ni byggde för Kunskapskontroll 1 till att nu innehålla JS. Vad som är nytt jämfört med föregående Kunskapskontroll är att ni nu ska använda er av JS-bibliotek. Fokus kommer ligga på jQuery, men andra bibliotek tillåts.

Eftersom att jag fick frågan om det var ok att skriva en ny portfolio, så är svaret ja. Det ligger dock en del vinning i att återgå till något man skrev för ett tag sen, och “förstå det på nytt”.

Denna uppgift kommer träna er i att läsa, förstå och använda kod som någon annan har skrivit (nämligen det som de som har byggt biblioteket har skrivit).

Installation av jQuery kan göras via <script> med länk inläst från https://code.jquery.com/ (Links to an external site.). Olika versioner bör fungera, men vanligast är att välja det senaste, vilket är jQuery 3.x.

Precis som tidigare så kommer detta även kräva en del från er vad gäller tolkandet av en kravspecifikation.

### För att uppnå Godkänt är kraven att:

* Portfolions huvudnavigationsmeny (den som innehåller Home, Experience, Contact) ska nu kunna togglas “öppen eller stängd”. Detta innebär att menu items, dvs. Home, Experience och Contact är synligt vid klick någonstans i menyn. En vanlig lösning är en "hamburger"-meny för detta.

* Detta ska ske vid klick någonstans (en ikon är ett exempel, men det är fritt hur ni implementerar detta).

* En HTML-sida ska nu skapas för att representera ett individuellt projekt/erfarenhet. I en riktig portfolio så har man troligtvis /experience/project-1.html, /experience/project-2.html etc, som har individuella länkar från experience.html. Det räcker här att ni skapar en enstaka “detalj-sida” för detta, som ni återanvänder för de erfarenheter/projekt som ni har skrivna under experience.html. Den skulle kunna kallas experience-detail.html. Innehållet behöver ej vara relaterat till de olika erfarenheter/projekt som är listade under experience.html, utan det är ok att använda samma innehåll oavsett projekt.

* Denna “detalj-sida” ska innehålla en “bild-karusell”. Detta är en vanlig feature på hemsidor. Det är en samling av bilder, som visas en åt gången, men som kan “bläddras”. 

* Karusellen ska innehålla 5 valfria bilder. 

* Bläddrandet av karusellen ska ska ske vid klick på två olika knappar som representerar bakåt och framåt.

* Karusellen ska vara oändlig, vilket innebär att när användaren bläddrar förbi den sista bilden så ska den första bilden dyka upp igen. Detsamma gäller om användaren bläddrar bakåt direkt (att den sista visas).

* Om ni har använt “vanlig JS” (det som i regel kallas för vanilla JS), blandat med jQuery och andra bibliotek, så är detta helt tillåtet då det i regel är så man arbetar med bibliotek. Jag kommer ej titta rad för rad vad ni har använt i jQuery och vad ni ej har använt. Minimikrav är dock: Inläsning av jQuery som bibliotek (i form av inläst <script>) och en förekomst av funktionen $. Värt att tänka på är dock att uppgiften förmodligen kommer bli lättare för er ju mer ni använder er av jQuery.

* Plugins i jQuery får lov att användas. Dessa går att hitta på https://plugins.jquery.com/ (Links to an external site.).

* Externa bibliotek som inte är jQuery och dess plugins får även dessa lov att användas, men jag rekommenderar er att bekanta er främst med jQuery. Detta projektet ska alltså först och främst använda sig av jQuery, eventuellt jQuery plugins och kompletterande Vanilla JS (vanlig JS) och även kompletterande andra externa bibliotek.

* Inget krav på hur JS skrivs (traditionell extern JS-fil, inline JS, ESM etc). Vi har redan testat detta i tidigare kunskapskontroller så nu är det upp till er själva att välja hur ni vill skriva er JS.

* Om du väljer att bygga en ny portfolio, så förväntas index.html, experience.html och experience-detail.html finnas på plats. Inget annat behöver finnas med.

* Inget krav på hur CSS, men en rekommendation är fortfarande att strukturera projektet enligt “funktioner” som vi lärde oss i Kunskapskontroll 1.

* Inget krav på format eller innehåll av portfolion. Fortsätt att hitta på innehåll om ni vill, eller använd er av riktig erfarenhet.

* Inget krav på vilka enheter (dvs. hur responsivt) som visar denna funktionalitet (kan vara alla enheter, eller bara mobiler etc).

* Leverans av projektet sker via .zip i Canvas. Länk till GitHub kommer ej att tillåtas, men det uppmuntras att ni använder det som ett verktyg under tiden nu utvecklar. Versionshantering är alltid en bra sak.

### För att uppnå Väl Godkänt är kraven (utöver ovan nämnda krav för Godkänt):

* Bild-karusellen ska kunna illustrera vilken av de fem bilder som just nu är vald via en “indikator”.

* En viss bild som är vald ska kunna dyka upp i en popup/modal på något sätt. Se det som en “detaljvy” för den valda bilden. Detta kan vara via klick någonstans, eller någon annan lösning.

* Denna popup/modal ska kunna stängas på något sätt. Escape, klick utanför eller “cancel-knapp” är vanliga lösningar här.