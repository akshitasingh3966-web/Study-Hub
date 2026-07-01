const pages = [
  { id: 'dashboard', title: 'Dashboard', icon: '🏰' },
  { id: 'marks', title: 'Marks Vault', icon: '📝' },
  { id: 'studyIndex', title: 'Study Index', icon: '📚' },
  { id: 'skills', title: 'Skills', icon: '⚡' },
  { id: 'studyHall', title: 'Study Hall', icon: '🪄' },
  { id: 'examHall', title: 'Exam Hall', icon: '🧠' },
  { id: 'timetable', title: 'Timetable', icon: '🗓️' },
  { id: 'calendar', title: 'Calendar', icon: '📅' },
  { id: 'library', title: 'Library', icon: '📖' },
  { id: 'career', title: 'Career Vault', icon: '🎯' },
  { id: 'crush', title: 'Crush', icon: '💌' },
  { id: 'boys', title: 'Slytherin Boys', icon: '🕯️' },
  { id: 'relax', title: 'Relaxing Room', icon: '🌿' }
];

const subjectLibrary = {
  biology: [
    'Living World',
    'Systematics of Living Organisms',
    'Kingdom Plantae',
    'Kingdom Animalia',
    'Cell Structure and Organization',
    'Biomolecules',
    'Cell Division',
    'Plant Tissues and Anatomy',
    'Morphology of Flowering Plants',
    'Animal Tissue',
    'Study of Animal Type: Cockroach',
    'Photosynthesis',
    'Respiration and Energy Transfer',
    'Human Nutrition',
    'Excretion and Osmoregulation',
    'Skeleton and Movement'
  ],
  math: [
    'Angle and its Measurement',
    'Trigonometry – I',
    'Trigonometry – II',
    'Determinants and Matrices',
    'Straight Line',
    'Circle',
    'Conic Sections',
    'Measures of Dispersion',
    'Probability',
    'Complex Numbers',
    'Sequences and Series',
    'Permutations and Combination',
    'Methods of Induction and Binomial Theorem',
    'Sets and Relations',
    'Functions',
    'Limits',
    'Continuity',
    'Differentiation'
  ],
  chemistry: [
    'Some Basic Concepts of Chemistry',
    'Introduction to Analytical Chemistry',
    'Basic Analytical Techniques',
    'Structure of Atom',
    'Chemical Bonding',
    'Redox Reactions',
    'Modern Periodic Table',
    'Elements of Group 1 and 2',
    'Elements of Group 13, 14 and 15',
    'States of Matter',
    'Adsorption and Colloids',
    'Chemical Equilibrium',
    'Nuclear Chemistry and Radioactivity',
    'Basic Principles of Organic Chemistry',
    'Hydrocarbons',
    'Chemistry in Everyday Life'
  ],
  physics: [
    'Units and Measurements',
    'Mathematical Methods',
    'Motion in a Plane',
    'Laws of Motion',
    'Gravitation',
    'Mechanical Properties of Solids',
    'Thermal Properties of Matter',
    'Sound',
    'Optics',
    'Electrostatics',
    'Electric Current Through Conductors',
    'Magnetism',
    'Electromagnetic Waves and Communication System',
    'Semiconductors'
  ],
  english: [
    'Being Neighborly',
    'On To The Summit: We Reach The Top',
    'The Call of the Soil',
    'Pillars of Democracy',
    'Mrs. Adis',
    'Tiger Hills',
    'Cherry Tree',
    'The Sower',
    'There is Another Sky',
    'Upon Westminster Bridge',
    'Nose versus Eyes',
    'The Planners',
    'Expansion of Ideas',
    'Blog Writing',
    'E-mails',
    'Interview',
    'Film Review',
    'The Art of Compering',
    'History of English Drama',
    'The Rising of the Moon',
    'Extracts of Drama: A Midsummer Night\'s Dream',
    'Extracts of Drama: An Enemy of the People'
  ],
  health: [
    'Yoga and Mudra',
    'Nature and Diet',
    'Obesity',
    'Development of Physical Fitness',
    'Injury Management',
    'Career Opportunities in Sports',
    'Modern Technology - Activism',
    'Various Games',
    'Various Sports Competitions',
    'Success stories of Sportsmen'
  ],
  environment: [
    'Environment and Sustainable Development',
    'Ecosystems',
    'Biodiversity',
    'Natural Resources',
    'Disasters'
  ],
  it: [
    'Basics of Information Technology',
    'Introduction to DBMS',
    'Impressive Web Designing',
    'Cyber Law',
    'Skill Oriented Practicals (SOP)',
    'Daily Computing (Libre Office)',
    'Web Designing (HTML - 5)',
    'Client Side Scripting (JavaScript)',
    'Accounting Package (GNUKhata)',
    'Digital Content Creation (GIMP, Inkscape)',
    'DBMS (PostgreSQL)'
  ]
};

function buildSubjectState() {
  return Object.fromEntries(
    Object.entries(subjectLibrary).map(([subject, titles]) => [
      subject,
      titles.map((title) => ({ title, complete: false }))
    ])
  );
}

const defaultState = {
  name: 'Astra',
  level: 1,
  xp: 0,
  activePage: 'dashboard',
  activeSubject: 'biology',
  activeSkill: 'sharemarket',
  activeBookId: null,
  unlocked: { crush: false, boys: false },
  subjects: buildSubjectState(),
  notes: 'Keep your wand close and your plan sharper.',
  events: [
    { id: 1, title: 'Biology revision', date: '2026-07-02', note: 'Finish the chapter on photosynthesis.' },
    { id: 2, title: 'Math drill', date: '2026-07-03', note: 'Practice determinants and matrices.' }
  ],
  books: [
    { id: 1, title: 'The Secret Garden', author: 'Frances Hodgson Burnett', notes: 'A calm read between study bursts.' },
    { id: 2, title: 'Atomic Habits', author: 'James Clear', notes: 'A perfect one-page summary for habit loops.' }
  ],
  jobs: [
    { id: 1, title: 'Data Scientist', note: 'Build a portfolio around Python, SQL, and AI.' },
    { id: 2, title: 'Quant Analyst', note: 'Keep sharpening probability and finance intuition.' }
  ],
  marks: [],
  timetable: {
    Monday: 'Biology\nMath',
    Tuesday: 'Chemistry\nEnglish',
    Wednesday: 'Physics\nIT',
    Thursday: 'Biology\nHealth',
    Friday: 'Math\nEnvironment',
    Saturday: 'Revision\nSkills',
    Sunday: 'Rest\nLibrary'
  },
  studySessionCount: 0,
  revisionDays: 0,
  examDays: 0,
  achievements: [],
  shareMarket: {
    cash: 100000,
    portfolio: { TCS: 0, INFY: 0, RELIANCE: 0, HDFC: 0 },
    transactions: [],
    companies: [
      { symbol: 'TCS', name: 'Tata Consultancy Services', price: 4000, dividend: 34, pe: 25, balanceSheet: 'Revenue: ₹2.4L Cr', trend: [48, 50, 47, 53, 56, 61] },
      { symbol: 'INFY', name: 'Infosys', price: 1740, dividend: 18, pe: 22, balanceSheet: 'Revenue: ₹1.4L Cr', trend: [38, 40, 39, 42, 46, 45] },
      { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2815, dividend: 45, pe: 29, balanceSheet: 'Revenue: ₹10L Cr', trend: [52, 54, 53, 57, 60, 62] },
      { symbol: 'HDFC', name: 'HDFC Bank', price: 1760, dividend: 22, pe: 18, balanceSheet: 'Revenue: ₹2.8L Cr', trend: [44, 46, 45, 49, 52, 50] }
    ]
  },
  creative: {
    debateTopics: [
      'Should schools allow AI tools for every assignment?',
      'Is social media a helpful study companion or a distraction?'
    ],
    writingPrompts: [
      'Write an essay on how discipline creates freedom.',
      'Compose a short vlog script about your perfect study day.'
    ],
    designPrompts: [
      'Design a bookmark that matches a Slytherin study theme.',
      'Create a poster for a focused revision challenge.'
    ],
    diceRolls: 0
  }
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem('slytherin-study-vault');
    return saved ? { ...defaultState, ...JSON.parse(saved), subjects: { ...buildSubjectState(), ...(JSON.parse(saved).subjects || {}) } } : structuredClone(defaultState);
  } catch (error) {
    console.warn('Could not load saved state', error);
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem('slytherin-study-vault', JSON.stringify(state));
}

function addXp(amount) {
  state.xp += amount;
  const nextLevel = Math.floor(state.xp / 120) + 1;
  if (nextLevel > state.level) {
    state.level = nextLevel;
    state.achievements.push(`Level ${state.level} unlocked`);
  }
  saveState();
  render();
}

function unlockAchievement(title, detail) {
  if (!state.achievements.some((item) => item.includes(title))) {
    state.achievements.push(`${title} — ${detail}`);
    addXp(30);
  }
}

function init() {
  renderNav();
  render();
  bindEvents();
}

function render() {
  renderHeader();
  renderDashboard();
  renderMarks();
  renderStudyIndex();
  renderSkills();
  renderStudyHall();
  renderExamHall();
  renderTimetable();
  renderCalendar();
  renderLibrary();
  renderCareer();
  renderCrush();
  renderBoys();
  renderRelax();
  renderNav();
  renderPageVisibility();
}

function renderPageVisibility() {
  document.querySelectorAll('.page').forEach((page) => {
    const target = `${state.activePage}Page`;
    page.classList.toggle('active', page.id === target);
  });
}

function renderHeader() {
  document.getElementById('pageHeading').textContent = pages.find((page) => page.id === state.activePage)?.title || 'Dashboard';
  document.getElementById('userName').textContent = state.name;
  document.getElementById('userLevel').textContent = `Level ${state.level} • ${state.xp} XP`;
  document.getElementById('xpBadge').textContent = `${state.xp} XP`;
  document.getElementById('xpFill').style.width = `${Math.min(100, (state.xp % 120) / 1.2)}%`;
}

function renderNav() {
  const container = document.getElementById('sidebarNav');
  container.innerHTML = pages
    .map((page) => `
      <button class="nav-btn ${state.activePage === page.id ? 'active' : ''}" data-page="${page.id}">
        <span>${page.icon}</span> ${page.title}
      </button>
    `)
    .join('');
}

function bindEvents() {
  document.getElementById('sidebarNav').addEventListener('click', (event) => {
    const button = event.target.closest('[data-page]');
    if (!button) return;
    setPage(button.dataset.page);
  });

  document.getElementById('quickStudyBtn').addEventListener('click', () => setPage('studyHall'));
  document.getElementById('exportBtn').addEventListener('click', exportState);
  document.getElementById('importInput').addEventListener('change', importState);
}

function setPage(pageId) {
  state.activePage = pageId;
  saveState();
  render();
}

function renderDashboard() {
  const root = document.getElementById('dashboardContent');
  const completedCount = countCompletedChapters();
  const totalCount = totalChapterCount();
  const nextEvents = state.events.slice(0, 3);
  const todaySubjects = state.timetable.Monday.split('\n').filter(Boolean);
  const quote = 'A calm mind studies faster than a restless one.';

  root.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <h3>Today's timetable</h3>
        <div class="list-stack">
          ${todaySubjects.map((subject) => `<div class="stat-row"><span>${subject}</span><span class="small">Focus block</span></div>`).join('')}
        </div>
      </div>
      <div class="card">
        <h3>Progress snapshot</h3>
        <p>${completedCount}/${totalCount} chapters completed</p>
        <div class="badge-list">
          ${state.achievements.slice(-4).map((badge) => `<span class="badge">${badge}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="grid grid-2" style="margin-top: 16px;">
      <div class="card">
        <h3>Marks overview</h3>
        <div class="list-stack">
          ${state.marks.length ? state.marks.slice(-3).map((mark) => `
            <div class="stat-row">
              <span>${mark.subject}</span>
              <span>${mark.score}/${mark.outOf} (${mark.category})</span>
            </div>
          `).join('') : '<p class="muted">Add your first exam result from the marks vault.</p>'}
        </div>
      </div>
      <div class="card">
        <h3>Next events</h3>
        <div class="list-stack">
          ${nextEvents.map((event) => `
            <div class="event-card">
              <strong>${event.title}</strong>
              <div class="small">${event.date}</div>
              <div>${event.note}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="grid grid-2" style="margin-top: 16px;">
      <div class="card">
        <h3>Important notes</h3>
        <textarea id="dashboardNotes">${state.notes}</textarea>
        <button class="primary-btn" id="saveNotesBtn" style="margin-top: 10px;">Save notes</button>
      </div>
      <div class="card quote-box">
        <h3>Quote of the hour</h3>
        <p>${quote}</p>
        <p class="small">Your vault is gaining strength every time you finish a chapter.</p>
      </div>
    </div>
  `;

  document.getElementById('saveNotesBtn').addEventListener('click', () => {
    state.notes = document.getElementById('dashboardNotes').value;
    saveState();
    renderDashboard();
  });
}

function renderMarks() {
  const root = document.getElementById('marksContent');
  const categories = ['practice', 'class', 'term', 'custom'];
  const categoryLabel = (value) => value.charAt(0).toUpperCase() + value.slice(1);

  root.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <h3>Add a mark</h3>
        <form id="markForm">
          <div class="form-grid">
            <input id="markSubject" placeholder="Subject" required />
            <select id="markCategory">
              ${categories.map((cat) => `<option value="${cat}">${categoryLabel(cat)}</option>`).join('')}
            </select>
            <input id="markScore" type="number" placeholder="Score" required />
            <input id="markOutOf" type="number" placeholder="Out of" required />
          </div>
          <input id="markCustomCategory" placeholder="Custom category (optional)" />
          <textarea id="markNotes" placeholder="Notes or reflection"></textarea>
          <button class="primary-btn" type="submit">Save mark</button>
        </form>
      </div>
      <div class="card">
        <h3>Marks summary</h3>
        <div class="list-stack">
          ${state.marks.length ? state.marks.map((mark) => `
            <div class="mark-card">
              <div class="stat-row">
                <strong>${mark.subject}</strong>
                <span>${mark.score}/${mark.outOf}</span>
              </div>
              <div class="small">${mark.category} • ${mark.notes || 'No notes'}</div>
            </div>
          `).join('') : '<p class="muted">No marks yet. Add a test result and it will appear here.</p>'}
        </div>
      </div>
    </div>
  `;

  document.getElementById('markForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const subject = document.getElementById('markSubject').value.trim();
    const category = document.getElementById('markCustomCategory').value.trim() || document.getElementById('markCategory').value;
    const score = Number(document.getElementById('markScore').value);
    const outOf = Number(document.getElementById('markOutOf').value);
    const notes = document.getElementById('markNotes').value.trim();
    if (!subject || !score || !outOf) return;
    state.marks.unshift({ id: Date.now(), subject, category, score, outOf, notes });
    addXp(20);
    unlockAchievement('Marks Keeper', 'Your exam results now live in the vault');
    saveState();
    renderMarks();
  });
}

function renderStudyIndex() {
  const root = document.getElementById('studyIndexContent');
  const subjectEntries = Object.entries(state.subjects);

  root.innerHTML = `
    <div class="card">
      <h3>Study index</h3>
      <div class="subject-grid">
        ${subjectEntries.map(([subject, chapters]) => {
          const completed = chapters.filter((chapter) => chapter.complete).length;
          return `
            <button class="subject-card" data-subject="${subject}">
              <div class="stat-row">
                <strong>${subjectLabel(subject)}</strong>
                <span class="progress-pill">${completed}/${chapters.length}</span>
              </div>
              <div class="small">Tap to open chapters and start studying.</div>
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <div class="card" style="margin-top: 16px;">
      <h3>${subjectLabel(state.activeSubject)} chapters</h3>
      <div class="list-stack">
        ${(state.subjects[state.activeSubject] || []).map((chapter, index) => `
          <div class="chapter-item">
            <div>
              <strong>${chapter.title}</strong>
              <div class="small">${chapter.complete ? 'Completed' : 'Pending'}</div>
            </div>
            <div class="badge-list">
              <button class="inline-btn" data-action="complete" data-subject="${state.activeSubject}" data-index="${index}">${chapter.complete ? 'Undo' : 'Mark as complete'}</button>
              <button class="primary-btn" data-action="study" data-subject="${state.activeSubject}" data-index="${index}">Study</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  root.querySelectorAll('[data-subject]').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.subject) {
        state.activeSubject = button.dataset.subject;
        saveState();
        renderStudyIndex();
      }
    });
  });

  root.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const { action, subject, index } = button.dataset;
      if (action === 'complete') {
        state.subjects[subject][Number(index)].complete = !state.subjects[subject][Number(index)].complete;
        addXp(10);
        if (state.subjects[subject][Number(index)].complete) {
          unlockAchievement('Chapter Master', `Completed ${state.subjects[subject][Number(index)].title}`);
        }
      }
      if (action === 'study') {
        state.activePage = 'studyHall';
        state.studySessionCount += 1;
        addXp(5);
        unlockAchievement('Deep Focus', 'You opened study hall and began a session.');
      }
      saveState();
      render();
    });
  });
}

function renderSkills() {
  const root = document.getElementById('skillsContent');
  const skillCards = [
    { id: 'sharemarket', title: 'Share Market', emoji: '📈' },
    { id: 'coding', title: 'Coding', emoji: '💻' },
    { id: 'digital', title: 'Digital Editing', emoji: '🎨' },
    { id: 'writing', title: 'Writing Skills', emoji: '✍️' },
    { id: 'ai', title: 'AI', emoji: '🤖' }
  ];
  const current = state.activeSkill;

  root.innerHTML = `
    <div class="card">
      <h3>Skills studio</h3>
      <div class="skill-grid">
        ${skillCards.map((skill) => `
          <button class="skill-card ${current === skill.id ? 'active' : ''}" data-skill="${skill.id}">
            <div style="font-size: 1.4rem;">${skill.emoji}</div>
            <strong>${skill.title}</strong>
          </button>
        `).join('')}
      </div>
    </div>

    <div class="card" style="margin-top: 16px;">
      ${renderSkillContent(current)}
    </div>
  `;

  root.querySelectorAll('[data-skill]').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeSkill = button.dataset.skill;
      saveState();
      renderSkills();
    });
  });

  const tradeForm = document.getElementById('tradeForm');
  if (tradeForm) {
    tradeForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const symbol = document.getElementById('tradeSymbol').value;
      const qty = Number(document.getElementById('tradeQty').value);
      const type = document.getElementById('tradeType').value;
      const company = state.shareMarket.companies.find((entry) => entry.symbol === symbol);
      if (!company || qty <= 0) return;
      const cost = company.price * qty;
      if (type === 'buy' && state.shareMarket.cash >= cost) {
        state.shareMarket.cash -= cost;
        state.shareMarket.portfolio[symbol] += qty;
        state.shareMarket.transactions.unshift({ type, symbol, qty, price: company.price, date: new Date().toLocaleDateString() });
      } else if (type === 'sell' && state.shareMarket.portfolio[symbol] >= qty) {
        state.shareMarket.cash += cost;
        state.shareMarket.portfolio[symbol] -= qty;
        state.shareMarket.transactions.unshift({ type, symbol, qty, price: company.price, date: new Date().toLocaleDateString() });
      } else {
        alert('Insufficient funds or shares.');
        return;
      }
      addXp(12);
      saveState();
      renderSkills();
    });
  }

  const newDebateBtn = document.getElementById('newDebateBtn');
  if (newDebateBtn) {
    newDebateBtn.addEventListener('click', () => {
      state.creative.debateTopics.unshift('Should students be allowed to build a portfolio before college?');
      saveState();
      renderSkills();
    });
  }

  const newPromptBtn = document.getElementById('newPromptBtn');
  if (newPromptBtn) {
    newPromptBtn.addEventListener('click', () => {
      state.creative.writingPrompts.unshift('Write a short reflection on your strongest study habit.');
      saveState();
      renderSkills();
    });
  }

  const rollDiceBtn = document.getElementById('rollDiceBtn');
  if (rollDiceBtn) {
    rollDiceBtn.addEventListener('click', () => {
      state.creative.diceRolls = Math.floor(Math.random() * 6) + 1;
      addXp(6);
      saveState();
      renderSkills();
    });
  }
}

function renderSkillContent(skillId) {
  if (skillId === 'sharemarket') {
    return `
      <h3>Share Market Lab</h3>
      <p class="small">Practice with fake money and live-style company data.</p>
      <div class="grid grid-2">
        <div class="card">
          <h4>Portfolio</h4>
          <div class="stat-row"><span>Cash</span><span>₹${state.shareMarket.cash.toLocaleString()}</span></div>
          ${Object.entries(state.shareMarket.portfolio).map(([symbol, qty]) => `<div class="stat-row"><span>${symbol}</span><span>${qty} shares</span></div>`).join('')}
        </div>
        <div class="card">
          <h4>Market watch</h4>
          ${state.shareMarket.companies.map((company) => `
            <div class="chapter-item">
              <div>
                <strong>${company.symbol}</strong>
                <div class="small">PE ${company.pe} • Dividend ${company.dividend}</div>
              </div>
              <div>₹${company.price}</div>
            </div>
            <div class="chart-bars">
              ${company.trend.map((value) => `<span style="height:${value}%"></span>`).join('')}
            </div>
          `).join('')}
        </div>
      </div>
      <div class="grid grid-2" style="margin-top: 16px;">
        <div class="card">
          <h4>Buy / Sell</h4>
          <form id="tradeForm">
            <select id="tradeSymbol">${state.shareMarket.companies.map((company) => `<option value="${company.symbol}">${company.symbol}</option>`).join('')}</select>
            <input id="tradeQty" type="number" placeholder="Quantity" required />
            <select id="tradeType"><option value="buy">Buy</option><option value="sell">Sell</option></select>
            <button class="primary-btn" type="submit">Execute</button>
          </form>
        </div>
        <div class="card">
          <h4>Learning links</h4>
          <div class="list-stack">
            <a href="https://www.moneycontrol.com" target="_blank">Moneybhai</a>
            <a href="https://www.tradingview.com" target="_blank">TradingView Simulator</a>
            <a href="https://www.stockgro.club" target="_blank">StockGro</a>
          </div>
        </div>
      </div>
    `;
  }

  if (skillId === 'coding') {
    return `
      <h3>Coding Lab</h3>
      <p class="small">Master Python, HTML, CSS, Java and connect them into projects.</p>
      <div class="grid grid-2">
        <div class="card">
          <h4>Roadmap</h4>
          <div class="list-stack">
            <div class="stat-row"><span>Python</span><span>Loops, functions, OOP</span></div>
            <div class="stat-row"><span>HTML/CSS</span><span>Semantic layouts and styling systems</span></div>
            <div class="stat-row"><span>Java</span><span>Classes, collections, APIs</span></div>
          </div>
        </div>
        <div class="card">
          <h4>Practice links</h4>
          <div class="list-stack">
            <a href="https://learn.microsoft.com/" target="_blank">Microsoft Learn</a>
            <a href="https://skills.github.com/" target="_blank">GitHub Skills</a>
            <a href="https://platform.openai.com/" target="_blank">OpenAI Platform</a>
          </div>
        </div>
      </div>
    `;
  }

  if (skillId === 'digital') {
    return `
      <h3>Digital Editing Studio</h3>
      <div class="grid grid-2">
        <div class="card">
          <h4>Debate box</h4>
          <div class="list-stack">
            ${state.creative.debateTopics.map((topic) => `<div class="event-card">${topic}</div>`).join('')}
          </div>
          <button class="secondary-btn" id="newDebateBtn" style="margin-top: 10px;">Generate new topic</button>
        </div>
        <div class="card">
          <h4>Design prompts</h4>
          <div class="list-stack">
            ${state.creative.designPrompts.map((prompt) => `<div class="event-card">${prompt}</div>`).join('')}
          </div>
        </div>
      </div>
    `;
  }

  if (skillId === 'writing') {
    return `
      <h3>Writing Lab</h3>
      <div class="grid grid-2">
        <div class="card">
          <h4>Prompt generator</h4>
          <div class="list-stack">
            ${state.creative.writingPrompts.map((prompt) => `<div class="event-card">${prompt}</div>`).join('')}
          </div>
          <button class="secondary-btn" id="newPromptBtn" style="margin-top: 10px;">Generate new prompt</button>
        </div>
        <div class="card">
          <h4>Dice challenge</h4>
          <p class="timer">${state.creative.diceRolls || 1}</p>
          <button class="primary-btn" id="rollDiceBtn">Roll the dice</button>
          <p class="small" id="diceOutput">1 = Essay • 2 = Vlog • 3 = Poster • 4 = Bookmark • 5 = Review • 6 = Debate</p>
        </div>
      </div>
    `;
  }

  if (skillId === 'ai') {
    return `
      <h3>AI Engineering Guide</h3>
      <div class="grid grid-2">
        <div class="card">
          <h4>Guidelines</h4>
          <div class="list-stack">
            <div class="stat-row"><span>Prompt design</span><span>Be precise and structured.</span></div>
            <div class="stat-row"><span>Learning loop</span><span>Test, revise, and document results.</span></div>
            <div class="stat-row"><span>Tool stack</span><span>Use OpenAI, GitHub, Microsoft Learn, and docs.</span></div>
          </div>
        </div>
        <div class="card">
          <h4>Useful links</h4>
          <div class="list-stack">
            <a href="https://academy.openai.com/" target="_blank">OpenAI Academy</a>
            <a href="https://platform.openai.com/" target="_blank">OpenAI Platform</a>
            <a href="https://learn.microsoft.com/" target="_blank">Microsoft Learn</a>
          </div>
        </div>
      </div>
    `;
  }

  return '';
}

function renderStudyHall() {
  const root = document.getElementById('studyHallContent');
  const completed = countCompletedChapters();
  const total = totalChapterCount();
  root.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <h3>Study hall</h3>
        <p class="small">Ambient focus block with your current chapter and revision plan.</p>
        <p><strong>Current focus:</strong> ${subjectLabel(state.activeSubject)}</p>
        <p><strong>Completed:</strong> ${completed}/${total}</p>
        <a class="primary-btn" href="https://www.youtube.com/results?search_query=hogwarts+library+ambience" target="_blank">Open Hogwarts library ambience</a>
      </div>
      <div class="card">
        <h3>Session checklist</h3>
        <div class="list-stack">
          <div class="stat-row"><span>Read one chapter</span><span>✓</span></div>
          <div class="stat-row"><span>Make notes</span><span>✓</span></div>
          <div class="stat-row"><span>3-day revision plan</span><span>⌛</span></div>
        </div>
      </div>
    </div>

    <div class="grid grid-2" style="margin-top: 16px;">
      <div class="card">
        <h3>Study timer</h3>
        <p class="small">Use the timer for a focused session.</p>
        <div class="form-grid">
          <input id="studyMinutes" type="number" placeholder="Minutes" value="45" />
          <input id="studySeconds" type="number" placeholder="Seconds" value="0" />
        </div>
        <button class="primary-btn" id="startStudyTimerBtn" style="margin-top: 10px;">Start study timer</button>
        <p class="timer" id="studyTimerDisplay">00:45:00</p>
      </div>
      <div class="card">
        <h3>Complete a session</h3>
        <form id="studySessionForm">
          <div class="form-grid">
            <input id="revisionDays" type="number" placeholder="Revision days" value="${state.revisionDays}" />
            <input id="examDays" type="number" placeholder="Exam days" value="${state.examDays}" />
          </div>
          <button class="primary-btn" type="submit">Save my plan</button>
        </form>
      </div>
    </div>
  `;

  document.getElementById('studySessionForm').addEventListener('submit', (event) => {
    event.preventDefault();
    state.revisionDays = Number(document.getElementById('revisionDays').value) || 0;
    state.examDays = Number(document.getElementById('examDays').value) || 0;
    addXp(15);
    saveState();
    renderStudyHall();
  });

  let studyTimer = null;
  let studyRemaining = 2700;
  document.getElementById('startStudyTimerBtn').addEventListener('click', () => {
    clearInterval(studyTimer);
    const minutes = Number(document.getElementById('studyMinutes').value) || 0;
    const seconds = Number(document.getElementById('studySeconds').value) || 0;
    studyRemaining = (minutes * 60) + seconds;
    updateStudyTimerDisplay();
    studyTimer = setInterval(() => {
      studyRemaining -= 1;
      if (studyRemaining <= 0) {
        clearInterval(studyTimer);
        studyRemaining = 0;
      }
      updateStudyTimerDisplay();
    }, 1000);
  });

  function updateStudyTimerDisplay() {
    const minutes = String(Math.floor(studyRemaining / 60)).padStart(2, '0');
    const seconds = String(studyRemaining % 60).padStart(2, '0');
    document.getElementById('studyTimerDisplay').textContent = `${minutes}:${seconds}`;
  }
}

function renderExamHall() {
  const root = document.getElementById('examHallContent');
  root.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <h3>Exam timer</h3>
        <p class="small">Set a custom timer for revision tests and mock papers.</p>
        <div class="form-grid">
          <input id="examHours" type="number" placeholder="Hours" value="1" />
          <input id="examMinutes" type="number" placeholder="Minutes" value="0" />
        </div>
        <button class="primary-btn" id="startTimerBtn" style="margin-top: 10px;">Start timer</button>
        <p class="timer" id="examTimerDisplay">01:00:00</p>
      </div>
      <div class="card">
        <h3>Exam checklist</h3>
        <div class="list-stack">
          <div class="stat-row"><span>Review notes</span><span>✓</span></div>
          <div class="stat-row"><span>Answer calmly</span><span>✓</span></div>
          <div class="stat-row"><span>Log score</span><span>⌛</span></div>
        </div>
      </div>
    </div>
  `;

  let timer = null;
  let remaining = 3600;
  document.getElementById('startTimerBtn').addEventListener('click', () => {
    clearInterval(timer);
    const hours = Number(document.getElementById('examHours').value) || 0;
    const minutes = Number(document.getElementById('examMinutes').value) || 0;
    remaining = (hours * 3600) + (minutes * 60);
    updateTimerDisplay();
    timer = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        clearInterval(timer);
        remaining = 0;
      }
      updateTimerDisplay();
    }, 1000);
  });

  function updateTimerDisplay() {
    const hours = String(Math.floor(remaining / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
    const seconds = String(remaining % 60).padStart(2, '0');
    document.getElementById('examTimerDisplay').textContent = `${hours}:${minutes}:${seconds}`;
  }
}

function renderTimetable() {
  const root = document.getElementById('timetableContent');
  const days = Object.keys(state.timetable);
  root.innerHTML = `
    <div class="card">
      <h3>Timetable</h3>
      <p class="small">No time slots, just your subject list for each day.</p>
      <div class="grid grid-2">
        ${days.map((day) => `
          <div class="event-card">
            <h4>${day}</h4>
            <textarea data-day="${day}">${state.timetable[day]}</textarea>
          </div>
        `).join('')}
      </div>
      <button class="primary-btn" id="saveTimetableBtn" style="margin-top: 12px;">Save timetable</button>
    </div>
  `;

  document.getElementById('saveTimetableBtn').addEventListener('click', () => {
    root.querySelectorAll('textarea[data-day]').forEach((textarea) => {
      state.timetable[textarea.dataset.day] = textarea.value;
    });
    addXp(8);
    saveState();
    renderTimetable();
  });
}

function renderCalendar() {
  const root = document.getElementById('calendarContent');
  root.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <h3>Add an event</h3>
        <form id="eventForm">
          <input id="eventTitle" placeholder="Event title" required />
          <input id="eventDate" type="date" required />
          <textarea id="eventNote" placeholder="Notes"></textarea>
          <button class="primary-btn" type="submit">Save event</button>
        </form>
      </div>
      <div class="card">
        <h3>Stored events</h3>
        <div class="list-stack">
          ${state.events.length ? state.events.map((event) => `
            <div class="event-card">
              <strong>${event.title}</strong>
              <div class="small">${event.date}</div>
              <div>${event.note}</div>
            </div>
          `).join('') : '<p class="muted">No events yet.</p>'}
        </div>
      </div>
    </div>
  `;

  document.getElementById('eventForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('eventTitle').value.trim();
    const date = document.getElementById('eventDate').value;
    const note = document.getElementById('eventNote').value.trim();
    if (!title || !date) return;
    state.events.unshift({ id: Date.now(), title, date, note });
    addXp(12);
    unlockAchievement('Calendar Keeper', 'Your study calendar now holds a new event');
    saveState();
    renderCalendar();
  });
}

function renderLibrary() {
  const root = document.getElementById('libraryContent');
  const activeBook = state.books.find((book) => book.id === state.activeBookId) || null;

  root.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <h3>Add a book</h3>
        <form id="bookForm">
          <input id="bookTitle" placeholder="Book title" required />
          <input id="bookAuthor" placeholder="Author" required />
          <textarea id="bookNotes" placeholder="Reading notes"></textarea>
          <button class="primary-btn" type="submit">Save to library</button>
        </form>
      </div>
      <div class="card">
        <h3>Library shelf</h3>
        <div class="list-stack">
          ${state.books.map((book) => `
            <button class="book-card" data-book-id="${book.id}">
              <strong>${book.title}</strong>
              <div class="small">${book.author}</div>
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    ${activeBook ? `
      <div class="card" style="margin-top: 16px;">
        <h3>${activeBook.title}</h3>
        <p class="small">${activeBook.author}</p>
        <p>${activeBook.notes}</p>
        <button class="secondary-btn" data-clear-book="true">Back to shelf</button>
      </div>
    ` : ''}
  `;

  root.querySelectorAll('[data-book-id]').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeBookId = Number(button.dataset.bookId);
      saveState();
      renderLibrary();
    });
  });

  root.querySelectorAll('[data-clear-book]').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeBookId = null;
      saveState();
      renderLibrary();
    });
  });

  document.getElementById('bookForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('bookTitle').value.trim();
    const author = document.getElementById('bookAuthor').value.trim();
    const notes = document.getElementById('bookNotes').value.trim();
    if (!title || !author) return;
    state.books.unshift({ id: Date.now(), title, author, notes });
    unlockAchievement('Bookworm', 'Your library now has a new companion');
    saveState();
    renderLibrary();
  });
}

function renderCareer() {
  const root = document.getElementById('careerContent');
  root.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <h3>Career vault</h3>
        <form id="jobForm">
          <input id="jobTitle" placeholder="Future role" required />
          <textarea id="jobNote" placeholder="Notes about your path"></textarea>
          <button class="primary-btn" type="submit">Save role</button>
        </form>
      </div>
      <div class="card">
        <h3>Dream roles</h3>
        <div class="list-stack">
          ${state.jobs.map((job) => `
            <div class="job-card">
              <strong>${job.title}</strong>
              <div class="small">${job.note}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  document.getElementById('jobForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('jobTitle').value.trim();
    const note = document.getElementById('jobNote').value.trim();
    if (!title) return;
    state.jobs.unshift({ id: Date.now(), title, note });
    addXp(10);
    saveState();
    renderCareer();
  });
}

function renderCrush() {
  const root = document.getElementById('crushContent');
  if (!state.unlocked.crush) {
    root.innerHTML = `
      <div class="lock-overlay">
        <div>
          <h3>Restricted wing unlocked by password</h3>
          <input id="crushPassword" placeholder="Enter password" />
          <button class="primary-btn" id="unlockCrushBtn" style="margin-top: 10px;">Unlock</button>
        </div>
      </div>
    `;
    document.getElementById('unlockCrushBtn').addEventListener('click', () => {
      if (document.getElementById('crushPassword').value === 'tomhughes') {
        state.unlocked.crush = true;
        saveState();
        renderCrush();
      }
    });
    return;
  }

  root.innerHTML = `
    <div class="card">
      <h3>Tom Hughes</h3>
      <div class="grid grid-2">
        <div class="card">
          <div style="min-height: 180px; border: 1px dashed var(--border); border-radius: 16px; display: grid; place-items: center; color: var(--muted);">Photo slot</div>
        </div>
        <div class="card">
          <p>Keep this page soft, dreamy, and calm for breaks between study rounds.</p>
          <a class="primary-btn" href="https://www.wattpad.com/" target="_blank">Open Wattpad</a>
        </div>
      </div>
    </div>
  `;
}

function renderBoys() {
  const root = document.getElementById('boysContent');
  if (!state.unlocked.boys) {
    root.innerHTML = `
      <div class="lock-overlay">
        <div>
          <h3>Private Slytherin archive</h3>
          <input id="boysPassword" placeholder="Enter password" />
          <button class="primary-btn" id="unlockBoysBtn" style="margin-top: 10px;">Unlock</button>
        </div>
      </div>
    `;
    document.getElementById('unlockBoysBtn').addEventListener('click', () => {
      if (document.getElementById('boysPassword').value === 'slytherin') {
        state.unlocked.boys = true;
        saveState();
        renderBoys();
      }
    });
    return;
  }

  root.innerHTML = `
    <div class="card">
      <h3>Slytherin boys</h3>
      <div class="grid grid-2">
        <div class="card"><h4>Theodore Nott</h4><p>Quiet ambition, sharp mind, polished presence.</p></div>
        <div class="card"><h4>Mattheo Riddle</h4><p>Dark charisma with a strategic spark.</p></div>
        <div class="card"><h4>Draco Malfoy</h4><p>Elegant, ambitious, and dramatic to the core.</p></div>
        <div class="card"><h4>Regulus Black</h4><p>Intensity wrapped in mystery and loyalty.</p></div>
      </div>
      <a class="primary-btn" href="https://www.wattpad.com/" target="_blank" style="margin-top: 12px;">Read on Wattpad</a>
    </div>
  `;
}

function renderRelax() {
  const root = document.getElementById('relaxContent');
  root.innerHTML = `
    <div class="card">
      <h3>Relaxing room</h3>
      <p class="small">A soft landing between study rounds.</p>
      <div class="quote-box">
        <h4>The calm after focus</h4>
        <p>Rest is not wasted time. It protects your next burst of brilliance.</p>
      </div>
      <div class="grid grid-2" style="margin-top: 16px;">
        <div class="card"><h4>Breathing pause</h4><p>Inhale for four, hold for four, exhale for six.</p></div>
        <div class="card"><h4>Gentle reward</h4><p>Read one chapter, sip tea, and let the mind soften.</p></div>
      </div>
    </div>
  `;
}

function exportState() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'slytherin-study-vault.json';
  link.click();
  URL.revokeObjectURL(url);
}

function importState(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const loaded = JSON.parse(reader.result);
      state = { ...defaultState, ...loaded, subjects: { ...buildSubjectState(), ...(loaded.subjects || {}) } };
      saveState();
      render();
    } catch (error) {
      alert('The selected file could not be imported.');
    }
  };
  reader.readAsText(file);
}

function countCompletedChapters() {
  return Object.values(state.subjects).reduce((total, chapters) => total + chapters.filter((chapter) => chapter.complete).length, 0);
}

function totalChapterCount() {
  return Object.values(state.subjects).reduce((total, chapters) => total + chapters.length, 0);
}

function subjectLabel(subjectKey) {
  const labels = {
    biology: 'Biology',
    math: 'Mathematics',
    chemistry: 'Chemistry',
    physics: 'Physics',
    english: 'English',
    health: 'Health & Physical Education',
    environment: 'Environment Education',
    it: 'Information Technology'
  };
  return labels[subjectKey] || subjectKey;
}

init();
