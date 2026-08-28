const ORG_GROUPS_RAW = [
  { label:'Professional Communities', items:[
    { kind:'COMMUNITY', name:"UXPA International", description:"The global UX professionals association.", link:"https://uxpa.org/" },
    { kind:'COMMUNITY', name:"Gay Gaming Professionals", description:"LGBTQ+ professionals working in games.", link:"https://gaygamingpros.org/" },
    { kind:'COMMUNITY', name:"IAAP", description:"The accessibility professionals association.", link:"https://www.accessibilityassociation.org/" },
    { kind:'COMMUNITY', name:"IGDA", description:"The game developers association.", link:"https://igda.org/" },
    { kind:'COMMUNITY', name:"Women in Games", description:"Advocacy network for women in games.", link:"https://www.womeningames.org/" },
    { kind:'COMMUNITY', name:"AIGA", description:"The design professionals association.", link:"https://www.aiga.org/" },
    { kind:'COMMUNITY', name:"Latinas in Tech", description:"Community for Latina tech professionals.", link:"https://latinasintech.org/" },
    { kind:'COMMUNITY', name:"Out in Tech", description:"LGBTQ+ tech professionals community.", link:"https://outintech.com/" },
    { kind:'COMMUNITY', name:"ACM SIGCHI", description:"Human-computer interaction research community.", link:"https://sigchi.org/" },
    { kind:'COMMUNITY', name:"AccessComputing", description:"Disability community in computing.", link:"https://accesscomputing.uw.edu/" },
    { kind:'COMMUNITY', name:"Teach Access", description:"Nonprofit advancing digital accessibility education and skills.", link:"https://www.teachaccess.org" },
    { kind:'COMMUNITY', name:"Black In Gaming Foundation", description:"Black professionals and students in games.", link:"https://www.thebigfoundation.org/" },
    { kind:'COMMUNITY', name:"ASGC", description:"Always Supporting the Games Community.", link:"https://asgc.gg/" },
    { kind:'COMMUNITY', name:"GLITCHED, Women in Game Dev", description:"Community for women in game development.", link:"https://glitchedsf.com/" },
    { kind:'COMMUNITY', name:"Ladies that UX", description:"Local chapters for women in UX.", link:"https://ladiesthatux.com/" },
    { kind:'COMMUNITY', name:"DiGRA", description:"The digital games research association.", link:"https://digra.org/" },
    { kind:'COMMUNITY', name:"Latinx in Gaming", description:"Community for Latinx people in games.", link:"https://www.latinxingaming.com" },
  ]},
  { label:'Student Communities', items:[
    { kind:'COMMUNITY', name:"Rewriting the Code", description:"Community for women and non-binary students in tech.", link:"https://rewritingthecode.org/" },
    { kind:'COMMUNITY', name:"Alpha Sigma Kappa", description:"Women in technical studies sorority.", link:"https://ask-wits.com/" },
    { kind:'COMMUNITY', name:"Gamma Iota Mu", description:"Professional fraternity for game development.", link:"https://docs.google.com/forms/d/e/1FAIpQLSdM9B7yoBh2kPTBClCto6UxUuv6_SGBV2HoDA8NYgQWRA4k1w/viewform" },
    { kind:'COMMUNITY', name:"Alpha Theta Delta", description:"Design fraternity for student designers.", link:"https://www.alphathetadelta.org/" },
    { kind:'COMMUNITY', name:"Sigma Chi Psi Sorority Inc.", description:"Sorority for remote college students.", link:"https://www.scpandgsg.org/" },
    { kind:'COMMUNITY', name:"Gamma Sigma Gamma Fraternity Inc.", description:"Fraternity for remote college students.", link:"https://www.scpandgsg.org/" },
    { kind:'COMMUNITY', name:"Kappa Theta Pi", description:"Professional technology fraternity.", link:"https://www.kappathetapi.org/" },
    { kind:'COMMUNITY', name:"National Society of Black Engineers", description:"Student network for Black engineers.", link:"https://nsbe.org/" },
    { kind:'COMMUNITY', name:"Kappa Pi International Art Honor Society", description:"Honor society for student artists.", link:"https://www.kappapiart.com/" },
    { kind:'COMMUNITY', name:"Omega Nu Lambda", description:"National college honor society for remote students.", link:"https://www.omeganulambda.org/" },
    { kind:'COMMUNITY', name:"Phi Beta Fraternity", description:"National fraternity for the creative and performing arts.", link:"https://phibeta.org/" },
    { kind:'COMMUNITY', name:"Gamma Xi Phi", description:"Professional fraternity for artists and creatives.", link:"https://gammaxiphi.com/" },
    { kind:'COMMUNITY', name:"Cornell UX Design Club", description:"Student UX design club at Cornell University.", link:"https://www.cornelluxdesign.com/" },
    { kind:'COMMUNITY', name:"Design at UCI", description:"Student design community at UC Irvine.", link:"https://designatuci.com/" },
    { kind:'COMMUNITY', name:"Gator User Design", description:"Student UX design org at the University of Florida.", link:"https://gatoruserdesign.com/" },
    { kind:'COMMUNITY', name:"Rice Design", description:"Student design community at Rice University.", link:"https://www.instagram.com/riceu_design/?hl=en" },
  ]},
];

ORG_GROUPS_RAW.forEach((g) => g.items.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })));

export const ORG_GROUPS = ORG_GROUPS_RAW;
