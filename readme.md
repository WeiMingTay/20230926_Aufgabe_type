`26. September 2023` `neueFische - Java DevelopmentBootcamp`
# Typescript
## Theoretische Aufgaben
1. Erkläre, wie du in TypeScript Felder in einer Typendefinition als optional bzw. nicht notwendig markieren kannst. Gib dabei an, welches Syntax-Element du verwenden würdest und wie es dazu beiträgt, flexiblere Typen zu erstellen."
> optionale Felder werden mit einem `?` gekennzeichnet. Dadurch können diese Werte später auch einfach weggelassen werden
2. Welche Vorteile/Nachteile bietet die Typisierung in TypeScript?
> Vorteile: einfachere Fehleranalyse, lesbarerer Code. Nachteile: Man muss vorher wissen was geliefert wird

## Aufgaben
##### In dieser Aufgabenstellung geht es darum, den Typ "Student" in TypeScript zu definieren. Jeder Student soll über einen Vornamen, Nachnamen, Alter und eine Eigenschaft "Zeugnis" verfügen, die eine Liste von Noten enthält. In diesem ersten Schritt soll eine Note eine Ganzzahl von 1 bis 6 sein. Wählt geeignete englische Bezeichner für die Attribute. Anschließend soll ein Student erstellt und in der Konsole ausgegeben werden.
1. Arbeitet bitte zusammen, eine*r von Euch legt ein Vite-Projekt mit Typescript an.
2. Schritt 1: Schreibt eine Funktion die einen Studenten mit seinen Noten ausgibt, dabei soll ein Student mit Vorname, Nachname, Alter und einer Liste von Noten ausgegeben werden.
   ###### Highlightet die Ausgabe der Vor- und Nachnamen, des Alters und der Noten durch eine Zeile mit 30x "=". 
Anton Meier (17)
    ==============================
    Noten: 1,4,3,1,3,2,1,2
3. Schritt 2: Erlaubt auch Strings und number als Benotung. Aufgabenstellung:
    1. stellt sicher, dass neben den Noten als Zahlen (deutsches System) auch Werte A bis F (amerikanisches System) in den Noten unterstützt werden. Die Funktion soll die Noten des Studenten ausgeben.
       Anton Meier (17)
       ==============================

        Noten: A,2,F,3,1,B,2,5
4. Schritt 3: Erlaubt auch undefined als Wert (in der Ausgabe als *) Aufgabenstellung:
   Anton Meier (17)
   ===========================
Noten: A,2,*,3,1,B,*,5
5. Schritt 4: Gibt eine Liste mit allen Studenten in der Konsole aus

Anton Meier (16)
    ===========================

Noten: 1,4,3,1,A,*,1,2



Berta Müller (17)
    ===========================

Noten: A,*,1



Cäsar Schmidt (17)
    ==========================

Noten: A,1,*, 3,2,4,5
