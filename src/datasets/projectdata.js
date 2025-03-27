import placeholder from '../images/projectdataimages/placeholder.webp'
import pokedex from '../images/projectdataimages/PokeDexImage.png'
import portfolio from '../images/projectdataimages/PortfolioImage.png'
import cuphead from '../images/projectdataimages/CupheadImage.png'
import esports from '../images/projectdataimages/EsportsImage.png'
import NYIT from '../images/projectdataimages/NYITImage.png'
import quiz from '../images/projectdataimages/QuizImage.png'
import shelves from '../images/projectdataimages/ShelvesImage.png'
import letdowntourgraphic from '../images/projectdataimages/LetDownTourMockUp.png'
import fakeplastictreesgraphic from '../images/projectdataimages/FakePlasticTreesTourMockUp.png'

const projects = [
    {
        htmltitle: 'Portfolio Website',
        htmldescription: 'Personal website to show off my web development skillset and projects.',
        htmllink: 'https://github.com/katie-andor/portfolio-website',
        htmlimage: portfolio,
        htmlalt: 'placeholderalt'
    },
    {
        htmltitle: 'The Shelves',
        htmldescription: 'The one-stop-shop for all your reading needs. The Shelves is a service that works with public libraries in order to make access to library books more convenient and accessible for all.',
        htmllink: 'https://shelves-o7hn82av3-ayman-haques-projects.vercel.app/',
        htmlimage: shelves,
        htmlalt: 'The homepage of the website The Shelves'
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
        wireframetitle: 'Marvel Rivals',
        wireframedescription: 'Motion backgrounds for Marvel Rivals fans.',
        wireframeimage: 'https://embed.figma.com/proto/UrQUEjUD6xUgWumD1uUmuB/Venom-%26-Scarlet-Witch?page-id=0%3A1&node-id=1-28&p=f&viewport=-327%2C433%2C0.19&scaling=contain&content-scaling=fixed&embed-host=share',
        wireframealt: 'placeholder'
    },
    {
        wireframetitle: 'Fake Plastic Trees Tour',
        wireframedescription: 'Mockup landing page for Radiohead tour tickets. Scrollable.',
        wireframeimage: 'https://embed.figma.com/proto/xhZVgao7u9RSFyPfDEAkYs/Fake-Plastic-Trees-Tour-Mockup?page-id=0%3A1&node-id=3-24&scaling=contain&content-scaling=fixed&embed-host=share',
        wireframealt: 'placeholderalt'
    },
    {
        graphictitle: 'Let Down Tour 2025',
        graphicdescription: 'Landing page for Radiohead tour tickets.',
        graphicimage: letdowntourgraphic,
        graphicalt: 'placeholder'
    },
    {
        graphictitle: 'Fake Plastic Trees Tour 2025',
        graphicdescription: 'Landing page for Radiohead tour tickets.',
        graphicimage: fakeplastictreesgraphic,
        graphicalt: 'placeholder'
    },
];

export default projects;