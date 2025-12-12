// =========================
// GAMING LIFE KONFIGURATION
// HIER ALLES EINSTELLEN!
// =========================

// Discord Webhook URL für Feedback
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1449056405800616049/xVkMQraJYoBvF102zR1DE2pX5gdlR6Z415j9nmu3MbfhM6aFTsqdf62Mi9-FraIhN_6i';

// Discord Server Einladungslink
const DISCORD_INVITE_URL = 'https://discord.gg/DHrEuJteyq';

// Seiten-Konfiguration
const PAGE_CONFIG = {
    siteName: 'Gaming Life',
    siteTagline: 'Der beste Notruf-Emden-Server mit Voice-Chat',
    footerText: '© 2023 Gaming Life RP Server. Alle Rechte vorbehalten. Roblox ist eine eingetragene Marke von Roblox Corporation.'
};

// Server Features
const SERVER_FEATURES = [
    { 
        title: 'Sehr aktiver Server', 
        description: 'Über 500 tägliche Spieler garantieren ständig actiongeladene Einsätze.',
        icon: 'fa-users'
    },
    { 
        title: 'Aktives Support-Team', 
        description: 'Unser Team ist 24/7 für dich da und sorgt für ein faires Spielerlebnis.',
        icon: 'fa-headset'
    },
    { 
        title: 'Voice-Chat Only', 
        description: 'Nur mit Sprachchat für maximalen Realismus und bessere Kommunikation.',
        icon: 'fa-microphone'
    },
    { 
        title: 'Aktive Fraktionen', 
        description: 'Realistische Einsatzkräfte mit speziellen Fahrzeugen und Hierarchien.',
        icon: 'fa-sitemap'
    }
];

// Team Mitglieder Liste (NEUE VERSION)
const TEAM_MITGLIEDER = [
    // Projektinhaber
    { name: 'GL PI/OWNER | Dalex', rang: 'Projektinhaber' },
    
    // Stv. Projektinhaber
    { name: 'GL Henri', rang: 'Stv. Projektinhaber' },
    
    // Projektleitung
    { name: 'GL Raffa', rang: 'Projektleitung' },
    
    // Stv. Projektleitung
    { name: 'GL Almin', rang: 'Stv. Projektleitung' },
    
    // Head of Direktion
    { name: 'GL Happycat', rang: 'Head of Direktion' },
    
    // Direktor
    { name: 'GL Leon', rang: 'Direktor' },
    
    // Teamleitung
    { name: 'GL TL OG_Tayson', rang: 'Teamleitung' },
    
    // Manager
    { name: 'GL Anwalt', rang: 'Manager' },
    
    // Senior Administrator
    { name: 'GL Dominic', rang: 'Senior Administrator' },
    { name: 'GL Joel (Herr Oleke)', rang: 'Senior Administrator' },
    
    // Administrator
    { name: 'GL Max', rang: 'Administrator' },
    
    // Junior Moderator
    { name: 'GL frd_le0n', rang: 'Junior Moderator' },
    { name: 'GL Simi', rang: 'Junior Moderator' },
    //
    //
    // Test Moderator
    { name: 'GL Azadi', rang: 'Test Moderator' },
    { name: 'GL Gennaro', rang: 'Test Moderator' },
    { name: 'GL Marcbappe', rang: 'Test Moderator' },
    { name: 'GL Lulu', rang: 'Test Moderator' },
    { name: 'GL Leon🎄', rang: 'Test Moderator' },
    { name: 'GL Jamie', rang: 'Test Moderator' },
    { name: 'GL Ruzo', rang: 'Test Moderator' }
];


// Changelog Einträge (ID muss immer höher sein für neue Einträge)
const CHANGELOGS = [
    { 
        id: 5,
        titel: 'Neue Häuser hinzugefügt', 
        beschreibung: '5 neue Häuser für realistischere Einsätze.',
        datum: '15.10.2023'
    },
    { 
        id: 4,
        titel: 'Voice-Chat verbessert', 
        beschreibung: 'Bessere Sprachqualität für klarere Kommunikation.',
        datum: '10.10.2023'
    },
    { 
        id: 3,
        titel: 'Neue Fahrzeuge', 
        beschreibung: 'Feuerwehr-LKW, Polizei-Hubschrauber und Rettungswagen verfügbar.',
        datum: '05.10.2023'
    },
    { 
        id: 2,
        titel: 'Bugfixes', 
        beschreibung: 'Behebung von Serverabstürzen.',
        datum: '01.10.2023'
    },
    { 
        id: 1,
        titel: 'Neue Fraktionen', 
        beschreibung: 'THW-Fraktion hinzugefügt.',
        datum: '25.09.2023'
    }
];

// Regelwerk (DEIN KOMPLETTES REGELWERK)
const REGELWERK_HTML = `
<h3>📗 GamingLife RP – Ingame Regelwerk</h3>

<h4>1. Grundprinzipien</h4>
<p>Hardcore-RP bedeutet: Maximale Realistik, konsequentes Verhalten, permanente Charakterbindung.</p>
<ul>
    <li>Dein Charakter ist eine eigenständige Person.</li>
    <li>Alles Ingame hat Konsequenzen.</li>
    <li>Realistisches Verhalten ist Pflicht.</li>
    <li>Out-of-Character Handlungen Ingame sind verboten.</li>
</ul>

<h4>2. Charakter & Verhalten</h4>

<h5>2.1 Charakterführung</h5>
<ul>
    <li>Charaktere müssen logisch, glaubwürdig und konsistent gespielt werden.</li>
    <li>Persönlichkeiten dürfen sich entwickeln, aber nicht unrealistisch ändern.</li>
    <li>Random-Aggressivität, Troll-Verhalten oder sinnlose Aktionen sind verboten.</li>
    <li>Aufgaben des Charakters müssen ernsthaft ausgeführt werden.</li>
</ul>

<h5>2.2 Kommunikation</h5>
<ul>
    <li>Ingame wird nur Ingame gesprochen – OOC nur im dafür vorgesehenen Bereich.</li>
    <li>Voice & Text müssen zur Situation passen (Tonlage, Ernsthaftigkeit, Emotionen).</li>
    <li>Keine Meta-Kommentare ("Bruder, ich bugge", "Admin?", "Das ist unfair").</li>
    <li>Schreien, Lachen oder Weinen muss realistisch gespielt werden.</li>
</ul>

<h4>3. Realismus & Immersion</h4>

<h5>3.1 Schmerzen & Verletzungen</h5>
<ul>
    <li>Verletzungen müssen ausgespielt werden.</li>
    <li>Schüsse, Stiche, Schläge → realistische Auswirkungen.</li>
    <li>Keine Superheldenkräfte, kein Wegrennen mit tödlichen Wunden.</li>
</ul>

<h5>3.2 Angst- & Risikoverhalten</h5>
<ul>
    <li>Charaktere haben Angst – niemand ist unbesiegbar.</li>
    <li>Bei Überzahl, Waffengewalt oder Lebensgefahr → reagieren wie ein echter Mensch.</li>
    <li>Selbstmord-, Kamikaze- oder Real-Life-gefährdende Aktionen sind verboten.</li>
</ul>

<h4>4. Fairplay</h4>

<h5>4.1 Power-RP (Verboten)</h5>
<ul>
    <li>Handlungen, die anderen etwas aufzwingen, ohne Chance zu reagieren:</li>
    <li>„Ich knebel dich" ohne Reaktionsmöglichkeit</li>
    <li>Zwangsaktionen ohne Ausspielbarkeit</li>
</ul>

<h5>4.2 Meta-RP (Verboten)</h5>
<ul>
    <li>Wissen nutzen, das der Charakter nicht besitzen kann</li>
    <li>Informationen aus Stream, Discord, Logs, o. Ä. ingame verwenden</li>
</ul>

<h5>4.3 Fail-RP (Verboten)</h5>
<ul>
    <li>Unrealistische Fahrzeugeinsätze</li>
    <li>Sinnlose Kriminalität ohne Motiv</li>
    <li>Random-Abziehen ohne Grund</li>
    <li>Polizeiflucht ohne realistische Chancen</li>
</ul>

<h4>5. Crime & Criminal RP</h4>

<h5>5.1 Kriminelle Aktionen</h5>
<ul>
    <li>Müssen geplant, logisch und motiviert sein</li>
    <li>Keine "Random Kidnappings" ohne Grund</li>
    <li>Jeder Crime hat realistische Risiken</li>
    <li>Ausspielen nach Misserfolg ist Pflicht (Festnahme, Verletzungen, Trauma)</li>
</ul>

<h5>5.2 Geiselnahmen / Überfälle</h5>
<ul>
    <li>Nur mit Rolle & Motivation</li>
    <li>Geiseln müssen realistisch behandelt werden</li>
    <li>Kein Missbrauch von OOC-Situationen (z. B. Disconnects)</li>
</ul>

<h4>6. Polizei & Staatsfraktionen</h4>

<h5>6.1 Pflichten</h5>
<ul>
    <li>Gesetze müssen realistisch angewandt werden</li>
    <li>Kein übertriebener Waffeneinsatz</li>
    <li>Priorisierung von Deeskalation</li>
    <li>Dienstmoral & Rolle wahren (kein Streit innerhalb des Dienstes, keine Korruption außer IC abgesprochen)</li>
</ul>

<h5>6.2 Rechte</h5>
<ul>
    <li>Nutzung polizeilicher Mittel nur mit IC-Begründung</li>
    <li>Durchsuchungen & Festnahmen müssen ausgespielt werden</li>
</ul>

<h4>7. Gewalt & Eskalation</h4>

<h5>7.1 Eskalationsstufen</h5>
<ul>
    <li>Konflikte müssen steigerbar bleiben:</li>
    <li>Verbale Auseinandersetzung</li>
    <li>Drohung</li>
    <li>Körperliche Eskalation</li>
    <li>Waffen</li>
    <li>Lebensbedrohliche Gewalt (nur im extremen Ausnahmefall)</li>
</ul>

<h5>7.2 Tötungen</h5>
<ul>
    <li>Nur wenn es absolut logisch ist</li>
    <li>Keine Zufallstötungen</li>
    <li>Jede Tötung hat langfristige Konsequenzen</li>
</ul>

<h4>8. Fahrzeuge & Verkehr</h4>
<ul>
    <li>Fahrzeugverhalten realitätsnah (kein Driften im 50er Bereich usw.)</li>
    <li>Unfälle müssen ausgespielt werden</li>
    <li>Fluchten nur bei glaubwürdigem Vorteil</li>
    <li>Fahrzeuge sind kein Spielzeug – sondern Wertgegenstände</li>
</ul>

<h4>9. Taschenspielereien & Bugs</h4>
<ul>
    <li>Jede Nutzung von Bugs, Exploits oder Glitches ist strengstens verboten</li>
    <li>Ausversehene Bugs sofort melden</li>
    <li>Bugnutzen im RP → harter Server-Bann</li>
</ul>

<h4>10. Out-of-Character</h4>
<ul>
    <li>OOC ist streng limitiert</li>
    <li>Kein OOC-Geschrei</li>
    <li>Kein OOC im Voice</li>
    <li>Kein Bruch der Immersion</li>
</ul>
`;
