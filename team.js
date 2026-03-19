
const TEAMS = [
  {rank:1,  name:"Argentina",       code:"ARG", conf:"CONMEBOL", pts:1895.27, chg:0},
  {rank:2,  name:"France",          code:"FRA", conf:"UEFA",     pts:1851.93, chg:+1},
  {rank:3,  name:"England",         code:"ENG", conf:"UEFA",     pts:1821.48, chg:-1},
  {rank:4,  name:"Belgium",         code:"BEL", conf:"UEFA",     pts:1812.34, chg:0},
  {rank:5,  name:"Brazil",          code:"BRA", conf:"CONMEBOL", pts:1789.65, chg:+1},
  {rank:6,  name:"Portugal",        code:"POR", conf:"UEFA",     pts:1777.41, chg:+2},
  {rank:7,  name:"Netherlands",     code:"NED", conf:"UEFA",     pts:1752.18, chg:-2},
  {rank:8,  name:"Spain",           code:"ESP", conf:"UEFA",     pts:1745.93, chg:+3},
  {rank:9,  name:"Germany",         code:"DEU", conf:"UEFA",     pts:1728.47, chg:-1},
  {rank:10, name:"Croatia",         code:"HRV", conf:"UEFA",     pts:1719.23, chg:0},
  {rank:11, name:"Italy",           code:"ITA", conf:"UEFA",     pts:1710.84, chg:+1},
  {rank:12, name:"Morocco",         code:"MAR", conf:"CAF",      pts:1695.31, chg:+4},
  {rank:13, name:"Colombia",        code:"COL", conf:"CONMEBOL", pts:1688.57, chg:-2},
  {rank:14, name:"USA",             code:"USA", conf:"CONCACAF", pts:1672.08, chg:+1},
  {rank:15, name:"Uruguay",         code:"URY", conf:"CONMEBOL", pts:1661.44, chg:-1},
  {rank:16, name:"Mexico",          code:"MEX", conf:"CONCACAF", pts:1642.79, chg:0},
  {rank:17, name:"Switzerland",     code:"CHE", conf:"UEFA",     pts:1635.18, chg:+2},
  {rank:18, name:"Senegal",         code:"SEN", conf:"CAF",      pts:1621.67, chg:-1},
  {rank:19, name:"Japan",           code:"JPN", conf:"AFC",      pts:1608.93, chg:+3},
  {rank:20, name:"Egypt",           code:"EGY", conf:"CAF",      pts:1594.22, chg:+2},
  {rank:21, name:"Denmark",         code:"DNK", conf:"UEFA",     pts:1581.50, chg:-1},
  {rank:22, name:"Australia",       code:"AUS", conf:"AFC",      pts:1568.40, chg:+2},
  {rank:23, name:"Austria",         code:"AUT", conf:"UEFA",     pts:1554.30, chg:0},
  {rank:24, name:"Iran",            code:"IRN", conf:"AFC",      pts:1541.70, chg:-1},
  {rank:25, name:"South Korea",     code:"KOR", conf:"AFC",      pts:1529.10, chg:+1},
  {rank:26, name:"Ecuador",         code:"ECU", conf:"CONMEBOL", pts:1516.50, chg:-2},
  {rank:27, name:"Ukraine",         code:"UKR", conf:"UEFA",     pts:1503.90, chg:+3},
  {rank:28, name:"Peru",            code:"PER", conf:"CONMEBOL", pts:1491.30, chg:-1},
  {rank:29, name:"Serbia",          code:"SRB", conf:"UEFA",     pts:1478.70, chg:0},
  {rank:30, name:"Hungary",         code:"HUN", conf:"UEFA",     pts:1466.10, chg:+2},
  {rank:31, name:"Tunisia",         code:"TUN", conf:"CAF",      pts:1453.50, chg:-1},
  {rank:32, name:"Czech Republic",  code:"CZE", conf:"UEFA",     pts:1440.90, chg:+1},
  {rank:33, name:"Chile",           code:"CHL", conf:"CONMEBOL", pts:1428.30, chg:-2},
  {rank:34, name:"Algeria",         code:"DZA", conf:"CAF",      pts:1415.70, chg:+4},
  {rank:35, name:"Cameroon",        code:"CMR", conf:"CAF",      pts:1403.10, chg:-1},
  {rank:36, name:"Scotland",        code:"SCO", conf:"UEFA",     pts:1390.50, chg:0},
  {rank:37, name:"Nigeria",         code:"NGA", conf:"CAF",      pts:1377.90, chg:+1},
  {rank:38, name:"Paraguay",        code:"PRY", conf:"CONMEBOL", pts:1365.30, chg:-1},
  {rank:39, name:"Poland",          code:"POL", conf:"UEFA",     pts:1352.70, chg:+2},
  {rank:40, name:"Turkey",          code:"TUR", conf:"UEFA",     pts:1340.10, chg:0},
  {rank:41, name:"Ivory Coast",     code:"CIV", conf:"CAF",      pts:1327.50, chg:+3},
  {rank:42, name:"Russia",          code:"RUS", conf:"UEFA",     pts:1314.90, chg:-2},
  {rank:43, name:"Venezuela",       code:"VEN", conf:"CONMEBOL", pts:1302.30, chg:+1},
  {rank:44, name:"Slovakia",        code:"SVK", conf:"UEFA",     pts:1289.70, chg:-1},
  {rank:45, name:"Romania",         code:"ROU", conf:"UEFA",     pts:1277.10, chg:+2},
  {rank:46, name:"Norway",          code:"NOR", conf:"UEFA",     pts:1264.50, chg:0},
  {rank:47, name:"Sweden",          code:"SWE", conf:"UEFA",     pts:1251.90, chg:+1},
  {rank:48, name:"Mali",            code:"MLI", conf:"CAF",      pts:1239.30, chg:-1},
  {rank:49, name:"South Africa",    code:"ZAF", conf:"CAF",      pts:1226.70, chg:+3},
  {rank:50, name:"Ghana",           code:"GHA", conf:"CAF",      pts:1214.10, chg:-2},
  {rank:51, name:"China",           code:"CHN", conf:"AFC",      pts:1201.50, chg:0},
  {rank:52, name:"Greece",          code:"GRC", conf:"UEFA",     pts:1188.90, chg:+1},
  {rank:53, name:"Honduras",        code:"HND", conf:"CONCACAF", pts:1176.30, chg:-1},
  {rank:54, name:"Bolivia",         code:"BOL", conf:"CONMEBOL", pts:1163.70, chg:+2},
  {rank:55, name:"Qatar",           code:"QAT", conf:"AFC",      pts:1151.10, chg:0},
  {rank:56, name:"Albania",         code:"ALB", conf:"UEFA",     pts:1138.50, chg:+4},
  {rank:57, name:"Bosnia & Herz.",  code:"BIH", conf:"UEFA",     pts:1125.90, chg:-1},
  {rank:58, name:"Saudi Arabia",    code:"SAU", conf:"AFC",      pts:1113.30, chg:+1},
  {rank:59, name:"Costa Rica",      code:"CRI", conf:"CONCACAF", pts:1100.70, chg:-2},
  {rank:60, name:"Jamaica",         code:"JAM", conf:"CONCACAF", pts:1088.10, chg:+1},
  {rank:61, name:"Zambia",          code:"ZMB", conf:"CAF",      pts:1075.50, chg:0},
  {rank:62, name:"Israel",          code:"ISR", conf:"UEFA",     pts:1062.90, chg:+2},
  {rank:63, name:"Panama",          code:"PAN", conf:"CONCACAF", pts:1050.30, chg:-1},
  {rank:64, name:"Burkina Faso",    code:"BFA", conf:"CAF",      pts:1037.70, chg:+3},
  {rank:65, name:"Finland",         code:"FIN", conf:"UEFA",     pts:1025.10, chg:0},
  {rank:66, name:"N. Macedonia",    code:"MKD", conf:"UEFA",     pts:1012.50, chg:+1},
  {rank:67, name:"Iraq",            code:"IRQ", conf:"AFC",      pts: 999.90, chg:-1},
  {rank:68, name:"UAE",             code:"ARE", conf:"AFC",      pts: 987.30, chg:0},
  {rank:69, name:"DR Congo",        code:"COD", conf:"CAF",      pts: 974.70, chg:+2},
  {rank:70, name:"Gabon",           code:"GAB", conf:"CAF",      pts: 962.10, chg:-1},
  {rank:71, name:"Cape Verde",      code:"CPV", conf:"CAF",      pts: 949.50, chg:+4},
  {rank:72, name:"Jordan",          code:"JOR", conf:"AFC",      pts: 936.90, chg:0},
  {rank:73, name:"Uzbekistan",      code:"UZB", conf:"AFC",      pts: 924.30, chg:+2},
  {rank:74, name:"Guatemala",       code:"GTM", conf:"CONCACAF", pts: 911.70, chg:-1},
  {rank:75, name:"Wales",           code:"WAL", conf:"UEFA",     pts: 899.10, chg:+1},
  {rank:76, name:"Oman",            code:"OMN", conf:"AFC",      pts: 886.50, chg:0},
  {rank:77, name:"El Salvador",     code:"SLV", conf:"CONCACAF", pts: 873.90, chg:+3},
  {rank:78, name:"Iceland",         code:"ISL", conf:"UEFA",     pts: 861.30, chg:-2},
  {rank:79, name:"Bahrain",         code:"BHR", conf:"AFC",      pts: 848.70, chg:+1},
  {rank:80, name:"New Zealand",     code:"NZL", conf:"OFC",      pts: 836.10, chg:0},
];


const FLAG = {
  ARG:'ar',FRA:'fr',ENG:'gb-eng',BEL:'be',BRA:'br',POR:'pt',NED:'nl',ESP:'es',
  DEU:'de',HRV:'hr',ITA:'it',MAR:'ma',COL:'co',USA:'us',URY:'uy',MEX:'mx',
  CHE:'ch',SEN:'sn',JPN:'jp',EGY:'eg',DNK:'dk',AUS:'au',AUT:'at',IRN:'ir',
  KOR:'kr',ECU:'ec',UKR:'ua',PER:'pe',SRB:'rs',HUN:'hu',TUN:'tn',CZE:'cz',
  CHL:'cl',DZA:'dz',CMR:'cm',SCO:'gb-sct',NGA:'ng',PRY:'py',POL:'pl',TUR:'tr',
  CIV:'ci',RUS:'ru',VEN:'ve',SVK:'sk',ROU:'ro',NOR:'no',SWE:'se',MLI:'ml',
  ZAF:'za',GHA:'gh',CHN:'cn',GRC:'gr',HND:'hn',BOL:'bo',QAT:'qa',ALB:'al',
  BIH:'ba',SAU:'sa',CRI:'cr',JAM:'jm',ZMB:'zm',ISR:'il',PAN:'pa',BFA:'bf',
  FIN:'fi',MKD:'mk',IRQ:'iq',ARE:'ae',COD:'cd',GAB:'ga',CPV:'cv',JOR:'jo',
  UZB:'uz',GTM:'gt',WAL:'gb-wls',OMN:'om',SLV:'sv',ISL:'is',BHR:'bh',NZL:'nz',
};


const LOGO = {
  ARG:'https://upload.wikimedia.org/wikipedia/en/9/9b/AFA_Logo.png',
  FRA:'https://upload.wikimedia.org/wikipedia/en/b/be/Logo-FFF.png',
  ENG:'https://upload.wikimedia.org/wikipedia/en/a/a9/FA_logo_without_text.svg',
  BEL:'https://upload.wikimedia.org/wikipedia/commons/6/67/Royal_Belgian_Football_Association_logo.svg',
  BRA:'https://upload.wikimedia.org/wikipedia/en/0/09/CBF_logo_2014.svg',
  POR:'https://upload.wikimedia.org/wikipedia/en/f/f3/FPF_Logo_official.png',
  NED:'https://upload.wikimedia.org/wikipedia/commons/0/03/Royal_Dutch_Football_Association_Logo.svg',
  ESP:'https://upload.wikimedia.org/wikipedia/en/1/1c/RFEF.svg',
  DEU:'https://upload.wikimedia.org/wikipedia/en/d/df/DFB-Logo.svg',
  HRV:'https://upload.wikimedia.org/wikipedia/en/5/50/HNS_logo.png',
  ITA:'https://upload.wikimedia.org/wikipedia/en/f/f0/FIGC_Logo_2022.svg',
  MAR:'https://upload.wikimedia.org/wikipedia/en/e/e7/FRMF.png',
  COL:'https://upload.wikimedia.org/wikipedia/en/6/6a/FCFvector.svg',
  USA:'https://upload.wikimedia.org/wikipedia/en/3/31/US_Soccer_2022_Logo.svg',
  URY:'https://upload.wikimedia.org/wikipedia/en/d/d2/AUF_Logo.png',
  MEX:'https://upload.wikimedia.org/wikipedia/en/3/34/FMF_Logo.svg',
  CHE:'https://upload.wikimedia.org/wikipedia/en/4/46/ASF-SFV_logo.svg',
  SEN:'https://upload.wikimedia.org/wikipedia/en/4/4c/Senegal_Football_Federation.svg',
  JPN:'https://upload.wikimedia.org/wikipedia/en/9/9e/JFA_logo.svg',
  EGY:'https://upload.wikimedia.org/wikipedia/en/7/7c/EFA_logo.svg',
};


const flagUrl  = c => `https://flagcdn.com/w80/${FLAG[c]||c.toLowerCase()}.png`;
const logoHTML = t => {
  const src = LOGO[t.code] || flagUrl(t.code);
  return `<img src="${src}" alt="${t.name}" onerror="this.parentElement.innerHTML='⚽'">`;
};
const rankCell = r => {
  if(r===1) return '<span class="medal">🥇</span>';
  if(r===2) return '<span class="medal">🥈</span>';
  if(r===3) return '<span class="medal">🥉</span>';
  return `<span class="rn">${r}</span>`;
};
const chgHTML = c => {
  if(c>0) return `<span class="chg up"><i class="bi bi-arrow-up-short"></i>+${c}</span>`;
  if(c<0) return `<span class="chg down"><i class="bi bi-arrow-down-short"></i>${c}</span>`;
  return `<span class="chg same"><i class="bi bi-dash"></i></span>`;
};
const rowCls = r => r===1?'team-row r1':r===2?'team-row r2':r===3?'team-row r3':'team-row';

function render(list) {
  const el = document.getElementById('teams-grid');
  if (!list.length) {
    el.innerHTML = `<div class="empty-state"><i class="bi bi-search"></i><p>No teams match your search.</p></div>`;
    return;
  }
  el.innerHTML = list.map((t,i) => `
    <div class="${rowCls(t.rank)}" style="animation-delay:${i*25}ms">
      <div class="rank-cell">${rankCell(t.rank)}</div>
      <div class="ti">
        <div class="tl">${logoHTML(t)}</div>
        <div class="tn">
          <h3>${t.name}</h3>
          <span class="cb ${t.conf}">${t.conf}</span>
        </div>
      </div>
      <div class="cc">
        <div class="fl"><img src="${flagUrl(t.code)}" alt="${t.name}" onerror="this.style.display='none'"></div>
        <span class="cn">${t.name}</span>
      </div>
      <div class="conf-col"><span class="cb ${t.conf}">${t.conf}</span></div>
      <div class="pc">${Math.round(t.pts).toLocaleString()}<small>pts</small></div>
      ${chgHTML(t.chg)}
    </div>
  `).join('');
}


let activeConf = 'ALL', searchQ = '';
function applyFilters() {
  let list = TEAMS;
  if (activeConf !== 'ALL') list = list.filter(t => t.conf === activeConf);
  if (searchQ) {
    const q = searchQ.toLowerCase();
    list = list.filter(t => t.name.toLowerCase().includes(q));
  }
  render(list);
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('total-count').textContent = TEAMS.length;
  setTimeout(() => render(TEAMS), 280);

  document.getElementById('search-input').addEventListener('input', e => {
    searchQ = e.target.value.trim();
    applyFilters();
  });

  document.querySelectorAll('.f-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      activeConf = btn.dataset.conf;
      applyFilters();
    });
  });
});