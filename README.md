# TS_Assignement 3 : Rest-API

## Erik Jakobsson

**How to run**
Have node

#Client

- cd server
- npm i
- npm run dev

#Server

- cd client
- npm i
- npm run dev

**Krav för godkänt**

- [x] 1. Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] 2. Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [x] 3. Datan som API:et hanterar sparas lokalt i serverfilen
- [x] 4. APIét ska svara med 404 om datan saknas.
- [x] 5. Git & GitHub har använts
- [x] 6.Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [x] 7 Uppgiften lämnas in i tid!

**Krav för väl godkänt**

- [x] 1. Alla punkter för godkänt är uppfyllda
- [x] 2. All data skall vara sparad i en JSON-fil istället för i serverfilen
- [x] 3. Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [x] 4. Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och
     presentera datan, redigeringsformulär skall fyllas i med befintlig information.
- [x] 5. Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt

**ÄNDRINGAR/AVGRÄNSNINGAR**
Det finns delvis felhantering och data validering vid input, men klippt lite hörnen här å där.
Det finns typ INGEN css (inget krav (: )

Lazy updatering av sidan (reloadar bara ist för att rita ut contentet / updatera contentet live) obvs sämre

Det finns inget flow i navigeringen av frontended ( inget krav 🙃)
(Mer specifikt, man söker på ID, men det finns inget sätt att ta reda på vad för Id vad för maträtt har och dom har inte logiska IDn pga jag gjorde en väldigt lazy unique ID implementation)
