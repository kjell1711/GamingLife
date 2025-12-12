// =========================
// GAMING LIFE KONFIGURATION
// =========================

// Discord Webhook URL für Feedback
const DISCORD_WEBHOOK_URL = 'https://discordapp.com/api/webhooks/1449034993371189381/RtVDdhc2o8nGoDcdG4M_HuaC-sIHh3joYRcgSQTOxnf8Bw76eTqE4xAMGjgbwom3gPNc';

// Discord Server Einladungslink
const DISCORD_INVITE_URL = 'https://discord.gg/DEIN_LINK_HIER';

// Externe Links
const EXTERNAL_LINKS = {
    regelwerk: '#regelwerk',
    tutorials: '#',
    team: '#team',
    serverBeitreten: 'https://www.roblox.com/games/',
    hilfe: '#',
    kontakt: '#',
    datenschutz: '#',
    youtube: 'https://youtube.com',
    robloxGruppe: 'https://www.roblox.com/groups/'
};

// Team Mitglieder Liste
const TEAM_MITGLIEDER = [
    { name: 'GL Dalex', rang: 'Projektinhaber' },
    { name: 'GL Henri', rang: 'Stv.Projektinhaber' },
    { name: 'GL Raffa', rang: 'Projektleitung' },
    { name: 'GL Almin', rang: 'Stv.Projektleitung' },
    { name: 'GL Happycat', rang: 'Head of Direktion' },
    { name: 'GL Kjell (joke)', rang: 'Roblox Admin' }
];

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

// Regelwerk (HTML-Format)
const REGELWERK_HTML = `
<h3>1. Allgemeine Regeln</h3>
<ul>
    <li>Respektvoller Umgang mit allen Spielern ist Pflicht</li>
    <li>Keine rassistischen, sexistischen oder beleidigenden Äußerungen</li>
    <li>Cheats oder Exploits führen zu sofortigem Bann</li>
    <li>Kein Spamming in Chat oder Voice</li>
</ul>

<h3>2. Rollenspiel-Regeln</h3>
<ul>
    <li>Ernsthaftes und realistisches Rollenspiel</li>
    <li>Kein Powergaming (unerlaubte Vorteilsbeschaffung)</li>
    <li>Kein Metagaming (Nutzung von Wissen das die Figur nicht haben kann)</li>
    <li>Konsistentes Charakterspiel</li>
</ul>

<h3>3. Voice-Chat Regeln</h3>
<ul>
    <li>Voice-Chat nur für Rollenspielzwecke</li>
    <li>Störgeräusche vermeiden (Push-to-Talk empfohlen)</li>
    <li>Keine Musik oder Audio-Abspielungen</li>
    <li>Respektvolle Kommunikation</li>
</ul>

<h3>4. Fraktionen und Ränge</h3>
<ul>
    <li>Ränge innerhalb von Fraktionen respektieren</li>
    <li>Beförderungen durch verdientes Spiel</li>
    <li>Fraktionsspezifische Regeln beachten</li>
</ul>
`;

// Seiten-Konfiguration
const PAGE_CONFIG = {
    siteName: 'Gaming Life',
    siteTagline: 'Der beste Notruf-Emden-Server mit Voice-Chat',
    footerText: '© 2023 Gaming Life RP Server. Alle Rechte vorbehalten. Roblox ist eine eingetragene Marke von Roblox Corporation.'
};
