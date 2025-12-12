// =========================
// GAMING LIFE KONFIGURATION
// Hier alle Einstellungen ändern
// =========================

// Discord Webhook URL für Feedback
const DISCORD_WEBHOOK_URL = 'DEINE_DISCORD_WEBHOOK_URL_HIER';

// Discord Server Einladungslink
const DISCORD_INVITE_URL = 'https://discord.gg/DEIN_LINK_HIER';

// Team Mitglieder Liste
const TEAM_MITGLIEDER = [
    { name: 'Max Mustermann', rang: 'Server-Inhaber' },
    { name: 'Lisa Beispiel', rang: 'Head-Admin' },
    { name: 'Tom Test', rang: 'Admin' },
    { name: 'Anna Admin', rang: 'Admin' },
    { name: 'Paul Moderator', rang: 'Moderator' },
    { name: 'Sarah Supporter', rang: 'Supporter' }
];

// Server Features für die Startseite (weniger, aber besser)
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
    }
];

// Changelog Einträge (höchste ID zuerst)
const CHANGELOGS = [
    { 
        id: 5,
        titel: 'Neue Häuser hinzugefügt', 
        beschreibung: 'Es wurden 5 neue Häuser in die Stadt eingefügt, die für realistischere Einsätze sorgen.',
        datum: '15.10.2023'
    },
    { 
        id: 4,
        titel: 'Voice-Chat verbessert', 
        beschreibung: 'Die Qualität des Voice-Chats wurde deutlich verbessert, sodass nun klarere Kommunikation möglich ist.',
        datum: '10.10.2023'
    },
    { 
        id: 3,
        titel: 'Neue Fahrzeuge', 
        beschreibung: 'Drei neue Einsatzfahrzeuge sind jetzt verfügbar.',
        datum: '05.10.2023'
    },
    { 
        id: 2,
        titel: 'Bugfixes', 
        beschreibung: 'Behebung von verschiedenen Fehlern, die zu Serverabstürzen führen konnten.',
        datum: '01.10.2023'
    },
    { 
        id: 1,
        titel: 'Neue Fraktionen', 
        beschreibung: 'Die THW-Fraktion wurde hinzugefügt.',
        datum: '25.09.2023'
    }
];

// Regelwerk HTML (kann direkt HTML enthalten)
const REGELWERK_HTML = `
<h3>Allgemeine Regeln</h3>
<ul>
    <li>Respektvoller Umgang mit allen Spielern ist Pflicht</li>
    <li>Rassistische, sexistische oder anderweitig beleidigende Äußerungen sind verboten</li>
    <li>Das Verwenden von Cheats oder Exploits führt zu einem sofortigen Bann</li>
    <li>Spamming in Text- oder Voice-Chat ist nicht erlaubt</li>
</ul>

<h3>Rollenspiel-Regeln</h3>
<ul>
    <li>Das Rollenspiel muss stets ernsthaft und realistisch sein</li>
    <li>Powergaming (unerlaubte Vorteilsbeschaffung) ist verboten</li>
    <li>Metagaming (Nutzung von Wissen, das die Figur nicht haben kann) ist untersagt</li>
    <li>Charaktere müssen logisch und konsistent gespielt werden</li>
</ul>

<h3>Voice-Chat Regeln</h3>
<ul>
    <li>Der Voice-Chat ist für Rollenspielzwecke zu nutzen</li>
    <li>Störgeräusche sind zu vermeiden (Push-to-Talk wird empfohlen)</li>
    <li>Musik oder andere Audio-Abspielungen sind untersagt</li>
    <li>Respektvolle Kommunikation ist jederzeit einzuhalten</li>
</ul>

<h3>Fraktionen und Ränge</h3>
<ul>
    <li>Ränge innerhalb von Fraktionen sind zu respektieren</li>
    <li>Beförderungen erfolgen durch verdientes Spiel und Engagement</li>
    <li>Jede Fraktion hat spezifische Regeln, die zusätzlich zu beachten sind</li>
</ul>
`;

// Farbkonfiguration
const COLORS = {
    primary: '#0a0a0f',
    secondary: '#12121a',
    accent1: '#8a2be2',  // Lila
    accent2: '#4169e1',  // Royal Blue
    textPrimary: '#ffffff',
    textSecondary: '#b0b0c0'
};

// Seiten-Konfiguration
const PAGE_CONFIG = {
    siteName: 'Gaming Life',
    siteTagline: 'Der beste Notruf-Emden-Server mit Voice-Chat',
    footerText: '© 2023 Gaming Life RP Server. Alle Rechte vorbehalten. Roblox ist eine eingetragene Marke von Roblox Corporation.'
};
