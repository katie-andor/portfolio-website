import placeholder from './images/projectdataimages/placeholder.webp'
import pokedex from './images/projectdataimages/PokeDexImage.png'
import portfolio from './images/projectdataimages/PortfolioImage.png'
import cuphead from './images/projectdataimages/CupheadImage.png'
import esports from './images/projectdataimages/EsportsImage.png'
import NYIT from './images/projectdataimages/NYITImage.png'
import quiz from './images/projectdataimages/QuizImage.png'

const projects = [
    {
        htmltitle: 'Portfolio Website',
        htmldescription: 'Personal website to show off my web development skillset and projects.',
        htmllink: 'https://github.com/katie-andor/portfolio-website',
        htmlimage: portfolio,
        htmlalt: 'placeholderalt'
    },
    {
        htmltitle: 'Esports Research Website',
        htmldescription: 'Tasked with a redesign of the current website, while incorporating the same theme and provided media.',
        htmllink: 'https://esportsresearch.net/',
        htmlimage: esports,
        htmlalt: 'placeholderalt'
    },
    {
        htmltitle: 'Pokedex Completion Tracker',
        htmldescription: 'Generation 1 Pokedex Tracker to have on the side while playing, shows percentage progress to completion. Lists all 151 original Pokémon, but the user is also able to search for individual Pokémon. Also has a randomized fun facts page about Generation 1. Uses PHP, HTML, SQL, and Bootstrap.',
        htmllink: 'https://github.com/katie-andor/pokedex-completion-tracker',
        htmlimage: pokedex,
        htmlalt: 'placeholderalt'
    },
    {
        htmltitle: 'Cuphead Website',
        htmldescription: 'Personal website created to present information about the video game Cuphead to its players or fans in a fun, digestible way that aligns with the aesthetic of the game itself.',
        htmllink: 'https://cupheadfanwiki.netlify.app/',
        htmlimage: cuphead,
        htmlalt: 'placeholderalt'
    },
    {
        htmltitle: 'NYIT Website',
        htmldescription: 'Utilization of WordPress blocks to update page layout for the new school website and old NYIT web pages to new ones, while also updating them to the new design.',
        htmlimage: NYIT,
        htmlalt: 'placeholderalt'
    },
    {
        htmltitle: 'Quiz Website',
        htmldescription: 'Quiz website.',
        htmllink: 'https://github.com/katie-andor/QuizProject',
        htmlimage: quiz,
        htmlalt: 'placeholderalt'
    },
    {
        apptitle: 'Quiz App',
        appdescription: 'Android app that lets you take a quiz.',
        appimage: placeholder,
        appalt: 'placeholder'
    },
    {
        javatitle: 'Wordle Cheat',
        javadescription: 'cheat at Wordle',
        javaimage: placeholder,
        javaalt: 'placeholder'
    },
    {
        javatitle: 'Cypher',
        javadescription: 'codes and decodes messages',
        javaimage: placeholder,
        javaalt: 'placeholder'
    },
    {
        javatitle: 'Cypher',
        javadescription: 'codes and decodes messages',
        javaimage: placeholder,
        javaalt: 'placeholder'
    },
];

export default projects;