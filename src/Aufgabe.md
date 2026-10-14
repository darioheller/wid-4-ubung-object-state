y# Übung WID 4 - Object State

Diese Übung soll verdeutlichen, wie Objekte in React "State" gespeichert werden können und was es dabei zu beachten gilt.

In der App.js Datei findest du Code für einen einfaches Adressfeld, bestehend aus Name, Strassenname und Hausnummer. Ein "Absenden"-Button simuliert das Abschicken der Daten, in dem die Eingabe in einem Anzeigefenster ausgegeben wird. Ein "Zurücksetzen"-Button ist bereits in HTML implementiert, aber noch ohne Funktion. Wenn du den Development-Server startest, kannst du die App überprüfen.

Aktuell hat jedes der drei Eingabe-Felder einen zugehörigen useState-Hook, der die Eingabe in State speichert. Dazu liest der `onChange`-Eventhandler das Event Objekt und übergibt den Wert des Einfabgefeldes (e.target.value) an die jeweilige setState Funktion. Jedes der drei Input-Element hat ein "value"-Attribut, welches die "State-Variable" liest.

Obwohl die App in diesem Umfang bereits funktioniert, möchte man thematisch zusammengehörige Daten, hier eine Adresse, häufig auch zusammen speichern und verwenden. Dafür eignen sich Objekte. In dieser Übung nimmst du entsprechende Änderungen vor.

## Aufgabe 1:

Schreibe den Code so um, dass anstelle der drei Hooks nur ein einziger useState-Hook verwendet wird. Dazu sollen die drei bisherigen State-Variablen "name" (string), "strasse" (string) und "hausnummer" (number) Schlüssel in einem neuen "adresse"-Objekt (object) werden.

- Setze im neue Hook als "default Wert" ein Objekt mit den Eigenschaften "name" (Wert: leerer String), "strasse" (leerer String) und "hausnummer" (Zahl 0).
- Als State-Variable deines neuen Hooks setzt du "adresse" und passt dann den Code überall dort an, wo die alten State-Variablen der bisherigen Hooks verwendet wurden. Dort soll nun die entsprechende Eigenschaft von "adresse" gelesen werden.

```
// Reminder:

const meinObjekt = {meinSchluessel: "meinWert}

meinObjekt.meinSchluessel   // ergibt "mein Wert"

```

- Passe nun auch die setState Funktionen in den EventHandlern an, indem du diese ersetzt. Wichtig ist, dass diese die jeweilige Eigenschaft ändern (z.B. den Strassennamen), aber die anderen beiden Eigenschaften nicht löschen. Dazu brauchst du den Spread-Operator, wie im Beispiel gezeigt.

```
// Reminder:

const [meinObjektState, setMeinObjektState ] = useState({key1: value1, key2: value2})

setMeinObjektState({key1: someOtherValue1}) // Falsch: Damit verlierst du key2: value2
setMeinObjektState({...meinObjektState, key1: someOtherValue1}) // Richtig: Du kopierst erst das GANZE Objekt und ersetzt key1 mit dem neuen Wert.

```

- Teste nun die Applikation, auch unter der Verwendung der Browser-Konsole. Wenn du einen Fehler bekommst, hast du wahrscheinlich irgendwo eine Umbenennung übersehen. Funktioniert auch das Popup mit der Änderung oder musst du dort noch etwas anpassen?

## Aufgabe 2:

Der "Zurücksetzen"-Button ist noch ohne Funktionalität. Verwende den gleichen Hook aus Aufgabe 1, um alle Eingaben auf den Ausgangswert (Default-Wert) zurückzusetzen. Am elegantesten ist es, den Default-Wert in eine eigene Variable zu speichern und diese dann sowohl für den Default-Wert, als auch für den Button zu verwenden.
