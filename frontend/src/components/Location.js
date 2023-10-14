import React from "react";
import Dropdown from "./Dropdown";

export default function Location({ formValues, setFormValues }) {
    const optionsNeighourhood = [
        "Friedrichshain-Kreuzberg",
        "Mitte",
        "Pankow",
        "Neukölln",
        "Charlottenburg-Wilm.",
        "Tempelhof - Schöneberg",
        "Treptow - Köpenick",
        "Lichtenberg",
        "Steglitz - Zehlendorf",
        "Reinickendorf",
        "Spandau",
        "Marzahn - Hellersdorf",

    ]

    const optionsSmallerNeighbourhood = [
        "Alexanderplatz",
        "Frankfurter Allee Süd FK",
        "Tempelhofer Vorstadt",
        "Brunnenstr. Süd",
        "Reuterstraße",
        "Rixdorf",
        "Neuköllner Mitte/Zentrum",
        "südliche Luisenstadt",
        "Prenzlauer Berg Südwest",
        "Prenzlauer Berg Nordwest",
        "Frankfurter Allee Nord",
        "Schillerpromenade",
        "Schöneberg-Nord",
        "Prenzlauer Berg Süd",
        "Moabit West",
        "Wedding Zentrum",
        "Schöneberg-Süd",
        "Helmholtzplatz",
        "nördliche Luisenstadt",
        "Moabit Ost",
        "Karl-Marx-Allee-Süd",
        "Südliche Friedrichstadt",
        "Prenzlauer Berg Nord",
        "Brunnenstr. Nord",
        "Karl-Marx-Allee-Nord",
        "Parkviertel",
        "Osloer Straße",
        "Tempelhof",
        "Regierungsviertel",
        "Prenzlauer Berg Ost",
        "Düsseldorfer Straße",
        "Weißensee",
        "Tiergarten Süd",
        "Otto-Suhr-Allee",
        "Neu Lichtenberg",
        "Pankow Süd",
        "Friedenau",
        "Volkspark Wilmersdorf",
        "Kurfürstendamm",
        "Schloß Charlottenburg",
        "Alt  Treptow",
        "Kantstraße",
        "Neue Kantstraße",
        "Pankow Zentrum",
        "Westend",
        "Albrechtstr.",
        "Alt-Lichtenberg",
        "Halensee",
        "Zehlendorf  Südwest",
        "Britz",
        "Drakestr.",
        "Mierendorffplatz",
        "Zehlendorf  Nord",
        "Teltower Damm",
        "Blankenfelde/Niederschönhausen",
        "Rahnsdorf/Hessenwinkel",
        "Schloßstr.",
        "Grunewald",
        "Baumschulenweg",
        "Karlshorst",
        "Niederschöneweide",
        "Heerstrasse",
        "Rudow",
        "Barstraße",
        "Plänterwald",
        "Schmöckwitz/Karolinenhof/Rauchfangswerder",
        "Ost 2",
        "Mariendorf",
        "Nord 1",
        "Rummelsburger Bucht",
        "Ost 1",
        "Oberschöneweide",
        "Mahlsdorf",
        "Buch",
        "Friedrichsfelde Nord",
        "Wilhelmstadt",
        "Wiesbadener Straße",
        "Adlershof",
        "Fennpfuhl",
        "Köllnische Heide",
        "Frankfurter Allee Süd",
        "Spandau Mitte",
        "Ostpreußendamm",
        "Johannisthal",
        "Friedrichshagen",
        "Biesdorf",
        "Alt-Hohenschönhausen Süd",
        "Lichtenrade",
        "Gatow / Kladow",
        "Schmargendorf",
        "Buchholz",
        "Friedrichsfelde Süd",
        "Marzahn-Süd",
        "Blankenburg/Heinersdorf/Märchenland",
        "Köpenick-Süd",
        "Buckow",
        "West 4",
        "Weißensee Ost",
        "Altglienicke",
        "Dammvorstadt",
        "Nord 2",
        "Schönholz/Wilhelmsruh/Rosenthal",
        "West 2",
        "Lankwitz",
        "Friedrichshain-Kreuzberg",
        "Mitte",
    ]

    return (
        <div className="dropdown">
            <h2>Location of the Property</h2>
            <ul className="list">
                <li>
                    <Dropdown
                    name="Neighbourhood of the location: "
                    options={optionsNeighourhood}
                    onChange={neighbourhood_group => {setFormValues({ ...formValues, neighbourhood_group })}}
                    />
                </li>
                <li>
                    <Dropdown
                    name="Smaller neighbourhood of the location: "
                    options={optionsSmallerNeighbourhood}
                    onChange={neighbourhood => {setFormValues({ ...formValues, neighbourhood })}}
                    />
                </li>
            </ul>
        </div>
    )
}