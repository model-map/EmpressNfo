const games = [
    'Resident.Evil.4.Remake-EMPRESS',
    'Assassins.Creed.Valhalla.Complete.Edition-EMPRESS',
    'Hogwarts.Legacy.Deluxe.Edition-EMPRESS',
    'Monster.Hunter.Rise.Sunbreak-EMPRESS',
    'Dragon.Ball.FighterZ.Android.21-EMPRESS',
    'Maneater-EMPRESS',
    'Dying.Light.2.Crack.Enhancement-EMPRESS',
    'Dying.Light.2.Stay.Human-EMPRESS',
    'Marvels.Guardians.of.the.Galaxy.Crackfix-EMPRESS',
    'Marvels.Guardians.of.the.Galaxy-EMPRESS',
    'Evil.Genius.2.World.Domination-EMPRESS',
    'Far.Cry.6-EMPRESS',
    'Deathloop.Crackfix-EMPRESS',
    'Deathloop-EMPRESS',
    'Tom.Clancys.Ghost.Reacon.Wildlands.Complete.Editon-EMPRESS',
    'Tom.Clancys.Ghost.Recon.Wildlands.Complete.Edition.Crackfix-EMPRESS',
    'Red.Dead.Redemption.2.Build.1436.28-EMPRESS+Mr_Goldberg',
    'Watchs.Dogs.Legion-EMPRESS',
    'Forza.Horizon.5.PROPER-EMPRESS',
    'Doom.Eternal.The.Ancient.Gods-EMPRESS',
    'Total.War.WARHAMMER.II.The.Silence.and.The.Fury-EMPRESS',
    'Star.Wars.Battlefront.II.Celebration.Edition.READNFO-EMPRESS',
    'Resident.Evil.Village.Animation.Fix-EMPRESS',
    'Resident.Evil.Village-EMPRESS',
    'Yakuza.Like.A.Dragon-EMPRESS',
    'Left.Alive-EMPRESS',
    'Life.is.Strange.2.Complete.Edition.Crackfix.READNFO-EMPRESS',
    'Life.is.Strange.2.Complete.Edition-EMPRESS',
    'Planet.Coaster.Complete.Edition-EMPRESS',
    'Jurassic.World.Evolution.Complete.Edition-EMPRESS',
    'Crash.Bandicoot.4-EMPRESS',
    'Forza.Horizon.4.PROPER-EMPRESS',
    'Assassins.Creed.Valhalla.Repack-EMPRESS',
    'Immortals.Fenyx.Rising.Crackfix.V2-EMPRESS',
    'Just.Cause.4.Complete.Edition.READNFO-EMPRESS',
    'Immortals.Fenyx.Rising-EMPRESS',
    'Mortal.Kombat.11-EMPRESS',
];

const nfoLinks = [
    'https://nfomation.net/info/1684077256.EMPRESS.nfo', // Resident Evil 4 Remake
    'https://nfomation.net/info/1681489866.EMPRESS.nfo', // Assassin's Creed Valhalla Complete Edition
    'https://nfomation.net/info/1677131115.EMPRESS.nfo', // Hogwarts Legacy
    'https://nfomation.net/info/1676962149.EMPRESS.nfo', // Monster Hunter Rise Sunbreak
    'https://nfomation.net/info/1676962178.EMPRESS.nfo', // Dragon Ball FighterZ
    'https://nfomation.net/info/1676962191.EMPRESS.nfo', // Maneater
    'https://nfomation.net/info/1676962202.EMPRESS.nfo', // Dying Light 2 Crack Enhancement
    'https://nfomation.net/info/1676962212.EMPRESS.nfo', // Dying Light 2
    'https://nfomation.net/info/1676962222.EMPRESS.nfo', // Marvel's Guardians of the Galaxy Crackfix
    'https://nfomation.net/info/1676962235.EMPRESS.nfo', // Marvel's Guardians of the Galaxy
    'https://nfomation.net/info/1676962247.EMPRESS.nfo', // Evil Genius 2
    'https://nfomation.net/info/1676962257.EMPRESS.nfo', // Far Cry 6
    'https://nfomation.net/info/1676962269.EMPRESS.nfo', // Deathloop Crackfix
    'https://nfomation.net/info/1676962281.EMPRESS.nfo', // Deathloop
    'https://nfomation.net/info/1676962312.EMPRESS.nfo', // Tom Clacy Ghost Reacon Wildlands Complete Edition
    'https://nfomation.net/info/1676962292.EMPRESS.nfo', // Tom Clancy Ghost Reacon Wildlands Complete Edition Crackfix
    'https://nfomation.net/info/1676962302.EMPRESS.nfo', // Red Dead Redemption 2 Build 1436 28
    'https://nfomation.net/info/1676962344.EMPRESS.nfo', // Watch Dogs Legion
    'https://nfomation.net/info/1676962355.EMPRESS.nfo', // Forza Horizon 5 PROPER
    'https://nfomation.net/info/1676962365.EMPRESS.nfo', // Doom Eternal The Ancient Gods
    'https://nfomation.net/info/1676962376.EMPRESS.nfo', // Total War Warhammer II The Silence and the Fury
    'https://nfomation.net/info/1676962388.EMPRESS.nfo', // Star Wars Battlefront II Celebration Edition
    'https://nfomation.net/info/1676962462.EMPRESS.nfo', // Resident Evil Village
    'https://nfomation.net/info/1676962451.EMPRESS.nfo', // Resident Evil Village Animation Fix
    'https://nfomation.net/info/1676962473.EMPRESS.nfo', // Yakuza Like A Dragon
    'https://nfomation.net/info/1676962482.EMPRESS.nfo', // Left Alive
    'https://nfomation.net/info/1676962501.EMPRESS.nfo', // Life is Strange 2 Complete Edition
    'https://nfomation.net/info/1676962492.EMPRESS.nfo', // Life is Strange 2 Complete Edition Crackfix
    'https://nfomation.net/info/1676962512.EMPRESS.nfo', // Planet Coaster Complete Edition
    'https://nfomation.net/info/1676962522.EMPRESS.nfo', // Jurassic World Evolution Complete Edition
    'https://nfomation.net/info/1676962533.EMPRESS.nfo', // Crash Bandicoot 4
    'https://nfomation.net/info/1676962553.EMPRESS.nfo', // Forza Horizon 4 PROPER
    'https://nfomation.net/info/1676962543.EMPRESS.nfo', // Assassin's Creed Valhalla
    'https://nfomation.net/info/1676962563.EMPRESS.nfo', // Immortals Fenyx Rising Crackfix V2
    'https://nfomation.net/info/1676962573.EMPRESS.nfo', // Just Cause 4 Complete Edition
    'https://nfomation.net/info/1676962582.EMPRESS.nfo', // Immortals Fenyx Rising
    'https://nfomation.net/info/1682008157.EMPRESS.nfo', // Mortal Kombat 11
];

const container = document.querySelector('.container');

for (i = 0; i <= games.length - 1; i++) {
    const link = document.createElement('a');
    link.setAttribute('href', nfoLinks[i]);
    link.setAttribute('target', '_blank');
    link.setAttribute('style', 'text-decoration: none');
    if (games.length - i <= 9)
        link.textContent = `0${games.length - i} ${games[i]}`;
    else link.textContent = `${games.length - i} ${games[i]}`;
    container.appendChild(link);
}

// BONUS SECTION

const bonus = document.querySelector('.bonus');

const bonusTitle = [
    'WIRED.com - The Woman Bulldozing Video Games’ Toughest DRM',
    'FUCK-REDDIT-02-22',
    'ANTI-WOKE RESPONSES REVEAL 02-21',
    'THE TOP TIER CONTRADICTION & HYPOCRISY OF THE HUMAN RACE (removed by Reddit)',
    'Important Message To : r/PiratedGames Moderators & Fitgirl',
    'Finally caught by the police, goodjob everyone.',
    '[Digital Piracy] The rise of EMPRESS - How one woman turned the pirate underworld on its head, waged a solo war against the entire game industry (and won), went mad with power, started a messianic cult based on high school-level philosophy, and faked her own arrest to spite her rivals and haters',
];

const bonusLink = [
    'https://www.wired.com/story/empress-drm-cracking-denuvo-video-game-piracy/',
    'https://web.archive.org/web/20230222032852/https://telegra.ph/FUCK-REDDIT-02-22',
    'https://web.archive.org/web/20230222032715/https://telegra.ph/ANTI-WOKE-RESPONSES-REVEAL-02-21',
    'https://web.archive.org/web/20230221135823/https://www.reddit.com/r/EmpressEvolution/comments/117ywff/the_top_tier_contradiction_hypocrisy_of_the_human/',
    'https://web.archive.org/web/20230220225629/https://old.reddit.com/r/EmpressEvolution/comments/117e8tz/important_message_to_rpiratedgames_moderators/',
    'https://web.archive.org/web/20210227191727/https://old.reddit.com/r/CrackWatch/comments/lqs91b/finally_caught_by_the_police_goodjob_everyone/',
    'https://web.archive.org/web/20211226221641/https://old.reddit.com/r/HobbyDrama/comments/rowk83/digital_piracy_the_rise_of_empress_how_one_woman/',
];

for (i = 0; i <= bonusTitle.length - 1; i++) {
    const link = document.createElement('a');
    link.setAttribute('href', bonusLink[i]);
    link.setAttribute('target', '_blank');
    link.setAttribute('style', 'text-decoration: none');
    link.textContent = `* ${bonusTitle[i]}`;
    bonus.appendChild(link);
}
