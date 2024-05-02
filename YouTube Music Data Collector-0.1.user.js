// ==UserScript==
// @name         YouTube Music Data Collector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Sendet Titel, Künstler und eine Kontrollvariable als JSON an den Server
// @author       You
// @match        https://music.youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function sendSongInfoToServer(url) {
        console.log("SendSongInfoToServer function called");
        // Finde das Element mit dem Künstlernamen
        var artistElement = document.querySelector('yt-formatted-string.byline.style-scope.ytmusic-player-bar.complex-string a.yt-simple-endpoint.style-scope.yt-formatted-string');
        var artist = artistElement ? artistElement.textContent.trim() : "Unknown Artist"; // Fallback, falls das Element nicht gefunden wird

        // Finde das Element mit dem Bild-Quelltext
        var imageElement = document.querySelector('img.image.style-scope.ytmusic-player-bar');
        var imageUrl = imageElement ? imageElement.src : "Unknown Image"; // Fallback, falls das Element nicht gefunden wird

        console.log("Artist:", artist);
        console.log("Image URL:", imageUrl);

        // Finde alle Elemente, die "Erika" im Titel haben
        var titleElements = document.querySelectorAll('yt-formatted-string.title.style-scope.ytmusic-player-bar');

        // Schleife durch alle gefundenen Elemente
        titleElements.forEach(function(titleElement) {
            console.log("Title element found");
            var title = titleElement.textContent.trim();
            console.log("Title:", title);

            // Erstelle ein Objekt mit den Song-Informationen und der Kontrollvariable
            var songInfo = {
                "title": title,
                "artist": artist, // Künstlername dynamisch einfügen
                "image": imageUrl
            };

            // Konvertiere die Song-Informationen in ein Blob
            var blob = new Blob([JSON.stringify(songInfo)], { type: 'application/json' });

            // Erzeuge ein FormData-Objekt und füge die Blob-Datei hinzu
            var formData = new FormData();
            formData.append("file", blob, "song_info.json");

            // Sende die FormData an den Server
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.send(formData);
            console.log("Song info sent to server:", songInfo);
        });
    }

    // Passe die URL entsprechend an
    var serverUrl = "http://127.0.0.1:5000/upload"; // Hier ändern, wenn der Server anders konfiguriert ist

    // Funktion zum periodischen Senden der Song-Informationen
    function sendPeriodically() {
        console.log("Sending song info periodically");
        sendSongInfoToServer(serverUrl);
        setTimeout(sendPeriodically, 1000); // Warte 2 Sekunden und rufe die Funktion erneut auf
    }

    // Starte den periodischen Sendevorgang
    sendPeriodically();
})();
