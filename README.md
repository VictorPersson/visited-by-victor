<p align="center">
  <img src="https://i.imgur.com/Kf5P2ae.png" width="250"><br>
</p>

Visited by Victor är en webbapplikation som låter användaren spåra sin nuvarade position, samt välja att spara denna för att kunna komma ihåg var man har varit och när. Detta kan komma bli mycket användbart om man exempelvis tänker ansöka om studentvisum till Australien. Detta kräver nämligen att man, med exakta datum, beskrver samtliga länder man besökt de senaste 10 åren. 

Projektet går under MIT licens och det är fritt fram att kopiera, bygga eller förstöra appen, givet att man följer Google Maps, Google Firebase samt licensens riktlinjer. 

## 1. Krav
<ul>
  <li> <a href="https://nodejs.org/en/download/">Node</a></li>
  <li> <a href="https://www.npmjs.com/get-npm">npm</a></li>
</ul>
  
  
## 2. Installation
<ol>
  <li> Clone / ladda ner repo </li> 
  <li> Öppna terminal/CMD och navigera till mappen visited-by-victor \ client
  <li> skriv <code> $ npm install </code> </li>
  <li> skriv <code> $ npm install -g vue </code> </li>
</ol>

## 3. API nycklar & config fil
#### För att kunna köra appen krävs Google Maps API samt Google Firebase nycklar. Dessa ligger i en config.js fil som inte följer ej med repot och behövs för att köra appen. 
<ol>
  <li> Skapa en Google Maps nyckel, välj maps and places <a href="https://cloud.google.com/maps-platform/?__utma=102347093.92387519.1558278983.1559032155.1559032155.1&__utmb=102347093.0.10.1559032155&__utmc=102347093&__utmx=-&__utmz=102347093.1559032155.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)&__utmv=-&__utmk=129617036&_ga=2.78148369.463654512.1559032149-92387519.1558278983#get-started">Google Maps key (Places & Maps)</a></li>
<li> Skapa en Google Maps nyckel, välj maps and places <a href="https://console.firebase.google.com/u/0/">Google Firebase key</a></li>
  <li> Öppna terminal/CMD och navigera till mappen visited-by-victor \ client \ src </li>
  <li> Skapa en ny fil och döp den till <strong> config.js </strong>, lägg till nedanstående kod samt dina egna API nycklar: </li>
</ol>

```
const APIKey = {
    googleMapsApi: 'GOOGLE MAPS API NYCKEL HÄR',
    firebaseApi: 'FIREBASE MAPS API NYCKEL HÄR'
}

module.exports = APIKey
```

## 4. Körning
<ol>
  <li> Öppna terminal/CMD och navigera till mappen visited-by-victor \ client \ src </li>
  <li> skriv <code> $ npm run serve </code> </li>
  <li> Öppna webbläsare och navigera till http://localhost:8080/ </li>
</ol>

## Made by

<ul>
  <li> <a href="https://github.com/VictorPersson ">Victor Persson </a></li>
</ul>
