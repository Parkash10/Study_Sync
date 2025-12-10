const features = [
  {
    icon: "⬆️",
    title: "Upload First",
    description:
      "Contribute your notes to unlock the entire library. Quality contributions earn you credits and recognition.",
    tint: "linear-gradient(135deg, rgba(91,107,255,.2), rgba(168,85,247,.2))",
  },
  {
    icon: "🛡️",
    title: "Community Verified",
    description: "Every note is reviewed and approved by our community, ensuring high-quality content for everyone.",
    tint: "linear-gradient(135deg, rgba(168,85,247,.2), rgba(34,197,94,.15))",
  },
  {
    icon: "⬇️",
    title: "Unlimited Downloads",
    description: "Once approved, access unlimited downloads from our vast collection of student-curated resources.",
    tint: "linear-gradient(135deg, rgba(34,197,94,.2), rgba(91,107,255,.2))",
  },
  {
    icon: "⭐",
    title: "Rating System",
    description: "Rate and review notes to help others find the best content. Top contributors get featured.",
    tint: "linear-gradient(135deg, rgba(91,107,255,.2), rgba(168,85,247,.2))",
  },
  {
    icon: "👥",
    title: "Study Groups",
    description: "Join subject-specific communities, collaborate with peers, and share insights on difficult topics.",
    tint: "linear-gradient(135deg, rgba(168,85,247,.2), rgba(34,197,94,.15))",
  },
  {
    icon: "🏆",
    title: "Earn Rewards",
    description: "Gain badges, climb leaderboards, and earn credits that can be used for premium features.",
    tint: "linear-gradient(135deg, rgba(34,197,94,.2), rgba(91,107,255,.2))",
  },
]

const steps = [
  { step: "01", title: "Sign Up", description: "Create your free account with your institutional email" },
  { step: "02", title: "Upload Notes", description: "Share your quality notes to contribute to the community" },
  { step: "03", title: "Get Approved", description: "Community reviews ensure quality standards are met" },
  { step: "04", title: "Unlock Access", description: "Download unlimited notes from our entire library" },
]

const stats = [
  { value: 125000, suffix: "+", label: "Notes Shared" },
  { value: 50000, suffix: "+", label: "Active Students" },
  { value: 2500000, suffix: "+", label: "Downloads" },
  { value: 4.9, suffix: "/5", label: "Average Rating", decimals: 1 },
]

const notes = [
  {
    id: "1",
    title: "Advanced Calculus - Derivatives & Integrals",
    subject: "Mathematics",
    author: "Sarah Chen · MIT",
    rating: 4.9,
    reviews: 128,
    downloads: 3420,
    thumbnail: "./public/calculus-notes-derivations.jpg",
    tags: ["Calculus", "Derivatives", "Integrals"],
    date: "2 days ago",
    pages: 24,
    fileType: "PDF",
    level: "undergrad",
    type: "pdf",
  },
  {
    id: "2",
    title: "Organic Chemistry - Reaction Mechanisms",
    subject: "Chemistry",
    author: "Marcus Johnson · Stanford",
    rating: 4.8,
    reviews: 95,
    downloads: 2180,
    thumbnail: "./public/chemistry-organic-reactions.jpg",
    tags: ["Organic Chemistry", "Reactions", "Mechanisms"],
    date: "5 days ago",
    pages: 32,
    fileType: "PDF",
    level: "undergrad",
    type: "pdf",
  },
  {
    id: "3",
    title: "Data Structures & Algorithms Cheat Sheet",
    subject: "Computer Science",
    author: "Emily Rodriguez · Berkeley",
    rating: 4.95,
    reviews: 256,
    downloads: 5890,
    thumbnail: "./public/data-structures-algorithms-code.png",
    tags: ["DSA", "Algorithms", "Programming"],
    date: "1 week ago",
    pages: 18,
    fileType: "PDF",
    level: "undergrad",
    type: "pdf",
  },
  {
    id: "4",
    title: "Quantum Mechanics - Wave Functions",
    subject: "Physics",
    author: "David Kim · Caltech",
    rating: 4.7,
    reviews: 67,
    downloads: 1540,
    thumbnail: "./public/quantum-physics-wave-equations.jpg",
    tags: ["Quantum", "Physics", "Wave Functions"],
    date: "3 days ago",
    pages: 28,
    fileType: "PDF",
    level: "grad",
    type: "pdf",
  },
  {
    id: "5",
    title: "Machine Learning Fundamentals",
    subject: "Computer Science",
    author: "Alex Rivera · CMU",
    rating: 4.85,
    reviews: 189,
    downloads: 4230,
    thumbnail: "./public/machine-learning-neural-networks.jpg",
    tags: ["ML", "AI", "Neural Networks"],
    date: "4 days ago",
    pages: 45,
    fileType: "PDF",
    level: "grad",
    type: "pdf",
  },
  {
    id: "6",
    title: "Microeconomics - Supply & Demand",
    subject: "Economics",
    author: "Jessica Park · NYU",
    rating: 4.6,
    reviews: 72,
    downloads: 1890,
    thumbnail: "./public/economics-supply-demand-graphs.jpg",
    tags: ["Economics", "Microeconomics", "Markets"],
    date: "1 week ago",
    pages: 22,
    fileType: "PDF",
    level: "undergrad",
    type: "pdf",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science, MIT",
    avatar: "./public/young-asian-woman-student-portrait.jpg",
    content:
      "StudySync transformed how I prepare for exams. The quality of notes here is incredible, and contributing my own work feels rewarding.",
  },
  {
    name: "Marcus Johnson",
    role: "Pre-Med, Stanford",
    avatar: "./public/young-black-man-student-portrait.jpg",
    content:
      "As a pre-med student, having access to well-organized anatomy notes is a lifesaver. The community here is supportive and the peer review system ensures top-quality content.",
  },
  {
    name: "Emily Rodriguez",
    role: "Business, NYU",
    avatar: "./public/young-latina-woman-student-portrait.jpg",
    content:
      "The gamification elements keep me motivated to contribute. I've earned enough credits to access premium features just by sharing my marketing notes.",
  },
  {
    name: "David Kim",
    role: "Engineering, Berkeley",
    avatar: "./public/young-asian-student.png",
    content:
      "The upload-to-unlock system creates such a positive cycle of sharing. Everyone contributes, everyone benefits.",
  },
]

const trendingSearches = ["Calculus derivatives", "Organic Chemistry", "Data Structures", "Linear Algebra", "Machine Learning"]
const recentSearches = ["Physics mechanics", "Economics 101", "Python programming"]

const filterOptions = {
  subjects: [
    { id: "Computer Science", label: "Computer Science", count: 2450 },
    { id: "Mathematics", label: "Mathematics", count: 1820 },
    { id: "Physics", label: "Physics", count: 1540 },
    { id: "Chemistry", label: "Chemistry", count: 980 },
    { id: "Biology", label: "Biology", count: 760 },
    { id: "Engineering", label: "Engineering", count: 1230 },
    { id: "Business", label: "Business", count: 890 },
    { id: "Economics", label: "Economics", count: 650 },
  ],
  types: [
    { id: "pdf", label: "PDF", count: 8500 },
    { id: "doc", label: "Document", count: 2300 },
    { id: "images", label: "Images", count: 1200 },
  ],
  levels: [
    { id: "undergrad", label: "Undergraduate" },
    { id: "grad", label: "Graduate" },
    { id: "professional", label: "Professional" },
  ],
}

const comments = [
  {
    author: "Alex Kim",
    avatar: "./public/young-asian-student.png",
    content: "These notes are incredibly well-organized! The diagrams really helped me understand the concepts.",
    date: "2 days ago",
  },
  {
    author: "Emma Wilson",
    avatar: "./public/placeholder.jpg",
    content: "Saved me during finals week. Thank you for sharing!",
    date: "1 week ago",
  },
]

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year")
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString()

  // Initialize sidebar active state
  if (document.querySelector(".sidebar")) {
    initSidebar()
  }
  
  // Update profile info in navbar
  if (document.getElementById("profile-name")) {
    updateProfileInfo()
  }

  initNav()
  if (document.getElementById("feature-grid")) renderFeatures()
  if (document.getElementById("steps")) renderSteps()
  if (document.querySelector("[data-counter]")) initHeroCounter()
  if (document.getElementById("stats-grid")) renderStats()
  if (document.getElementById("search")) {
    initSearch()
    initFilters()
    initNotes()
  }
  if (document.getElementById("testimonials-grid")) initTestimonials()
  if (document.querySelector(".profile-header")) initProfile()
  initCTA()
  if (document.getElementById("signup-form") || document.getElementById("signin-form")) initAuth()
})

function initNav() {
  const toggle = document.querySelector(".nav__toggle")
  const mobile = document.querySelector(".nav__mobile")
  const nav = document.querySelector(".nav")

  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open")
    if (isOpen) {
      mobile.removeAttribute("hidden")
    } else {
      mobile.setAttribute("hidden", "true")
    }
    toggle.setAttribute("aria-expanded", String(isOpen))
  })

  mobile?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      mobile.setAttribute("hidden", "true")
      nav.classList.remove("is-open")
      toggle?.setAttribute("aria-expanded", "false")
    }),
  )
}

function renderFeatures() {
  const grid = document.getElementById("feature-grid")
  grid.innerHTML = features
    .map(
      (f) => `
      <article class="feature">
        <div class="feature__icon" style="background:${f.tint}">${f.icon}</div>
        <h3>${f.title}</h3>
        <p class="muted">${f.description}</p>
      </article>
    `,
    )
    .join("")
}

function renderSteps() {
  const wrap = document.getElementById("steps")
  wrap.innerHTML = steps
    .map(
      (s) => `
      <div class="step">
        <div class="step__badge">${s.step}</div>
        <h4>${s.title}</h4>
        <p class="muted">${s.description}</p>
      </div>
    `,
    )
    .join("")
}

function animateValue(el, target, decimals = 0, duration = 2000) {
  let start = 0
  const stepTime = Math.max(Math.floor(duration / 60), 16)
  const increment = target / (duration / stepTime)
  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      start = target
      clearInterval(timer)
    }
    el.textContent = decimals ? start.toFixed(decimals) : Math.floor(start).toLocaleString()
  }, stepTime)
}

function initHeroCounter() {
  const badge = document.querySelector("[data-counter]")
  if (!badge) return
  animateValue(badge, Number(badge.dataset.counter || 0), 0, 1800)
}

function renderStats() {
  const grid = document.getElementById("stats-grid")
  grid.innerHTML = stats
    .map(
      (s) => `
      <div class="stat">
        <div class="muted">${s.label}</div>
        <strong data-stat data-value="${s.value}" data-decimals="${s.decimals || 0}">
          0${s.suffix}
        </strong>
      </div>
    `,
    )
    .join("")

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const val = Number(el.dataset.value)
          const decimals = Number(el.dataset.decimals || 0)
          animateValue(el, val, decimals)
          obs.unobserve(el)
        }
      })
    },
    { threshold: 0.2 },
  )

  document.querySelectorAll("[data-stat]").forEach((el) => observer.observe(el))
}

function initSearch() {
  const input = document.getElementById("search-input")
  const dropdown = document.getElementById("search-dropdown")
  const clearBtn = document.getElementById("clear-search")
  const submit = document.getElementById("search-submit")

  const renderSuggestions = (value) => {
    const term = value.trim().toLowerCase()
    const matches = term
      ? trendingSearches.filter((t) => t.toLowerCase().includes(term))
      : []

    dropdown.innerHTML = ""

    if (term && matches.length) {
      dropdown.innerHTML = `
        <div class="search__group">
          <h5>Suggestions</h5>
          ${matches.map((m) => `<button class="search__suggestion" data-fill="${m}">${m}</button>`).join("")}
        </div>`
    } else {
      dropdown.innerHTML = `
        <div class="search__group">
          <h5>Recent Searches</h5>
          ${recentSearches.map((m) => `<button class="search__suggestion" data-fill="${m}">${m}</button>`).join("")}
        </div>
        <div class="search__group">
          <h5>Trending Now</h5>
          ${trendingSearches.slice(0, 3).map((m) => `<button class="search__suggestion" data-fill="${m}">${m}</button>`).join("")}
        </div>`
    }

    dropdown.querySelectorAll("[data-fill]").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        input.value = e.currentTarget.dataset.fill
        dropdown.setAttribute("hidden", "true")
        applyFilters()
      }),
    )
  }

  input.addEventListener("input", (e) => {
    renderSuggestions(e.target.value)
    dropdown.toggleAttribute("hidden", !e.target.value && !dropdown.innerHTML.trim())
  })

  input.addEventListener("focus", () => {
    renderSuggestions(input.value)
    dropdown.removeAttribute("hidden")
  })

  input.addEventListener("blur", () => setTimeout(() => dropdown.setAttribute("hidden", "true"), 150))

  clearBtn.addEventListener("click", () => {
    input.value = ""
    applyFilters()
  })

  submit.addEventListener("click", (e) => {
    e.preventDefault()
    applyFilters()
  })
}

const filterState = {
  subjects: new Set(),
  types: new Set(),
  levels: new Set(),
  rating: 3,
}

let viewMode = "grid"
let notesShown = 6

function initFilters() {
  if (!document.querySelector('[data-section="subjects"]')) return
  const subjectsEl = document.querySelector('[data-section="subjects"]')
  const typesEl = document.querySelector('[data-section="types"]')
  const levelsEl = document.querySelector('[data-section="levels"]')
  const ratingRange = document.getElementById("rating-range")
  const ratingValue = document.getElementById("rating-value")

  subjectsEl.innerHTML = filterOptions.subjects
    .map(
      (o) => `
      <label>
        <span>${o.label}</span>
        <span>${o.count.toLocaleString()}</span>
        <input type="checkbox" data-filter="subjects" value="${o.id}">
      </label>`,
    )
    .join("")

  typesEl.innerHTML = filterOptions.types
    .map(
      (o) => `
      <label>
        <span>${o.label}</span>
        <span>${o.count.toLocaleString()}</span>
        <input type="checkbox" data-filter="types" value="${o.id}">
      </label>`,
    )
    .join("")

  levelsEl.innerHTML = filterOptions.levels
    .map(
      (o) => `
      <label>
        <span>${o.label}</span>
        <input type="checkbox" data-filter="levels" value="${o.id}">
      </label>`,
    )
    .join("")

  document.querySelectorAll("[data-filter]").forEach((input) =>
    input.addEventListener("change", (e) => {
      const target = e.target
      const set = filterState[target.dataset.filter]
      target.checked ? set.add(target.value) : set.delete(target.value)
      applyFilters()
    }),
  )

  ratingRange.addEventListener("input", (e) => {
    const val = Number(e.target.value)
    filterState.rating = val
    ratingValue.textContent = val
    applyFilters()
  })

  document.getElementById("filters-clear").addEventListener("click", () => {
    filterState.subjects.clear()
    filterState.types.clear()
    filterState.levels.clear()
    filterState.rating = 3
    ratingRange.value = 3
    ratingValue.textContent = "3"
    document.querySelectorAll("[data-filter]").forEach((c) => (c.checked = false))
    applyFilters()
  })

  document.querySelectorAll(".filters__toggle").forEach((btn) =>
    btn.addEventListener("click", () => {
      const section = document.querySelector(`[data-section="${btn.dataset.target}"]`)
      section.classList.toggle("hidden")
    }),
  )
}

function initNotes() {
  if (!document.getElementById("notes-grid")) return
  document.querySelectorAll(".view-toggle button").forEach((btn) =>
    btn.addEventListener("click", () => {
      document.querySelectorAll(".view-toggle button").forEach((b) => b.classList.remove("is-active"))
      btn.classList.add("is-active")
      viewMode = btn.dataset.view
      renderNotes()
    }),
  )

  document.getElementById("sort-select").addEventListener("change", renderNotes)
  document.getElementById("load-more").addEventListener("click", () => {
    notesShown = Math.min(notesShown + 3, notes.length)
    renderNotes()
  })

  applyFilters()
}

let filteredNotes = [...notes]

function applyFilters() {
  if (!document.getElementById("notes-grid")) return
  const query = document.getElementById("search-input").value.trim().toLowerCase()
  filteredNotes = notes.filter((n) => {
    const matchesQuery =
      !query ||
      n.title.toLowerCase().includes(query) ||
      n.subject.toLowerCase().includes(query) ||
      n.tags.some((t) => t.toLowerCase().includes(query))

    const matchesSubject = filterState.subjects.size === 0 || filterState.subjects.has(n.subject)
    const matchesType = filterState.types.size === 0 || filterState.types.has(n.type)
    const matchesLevel = filterState.levels.size === 0 || filterState.levels.has(n.level)
    const matchesRating = n.rating >= filterState.rating

    return matchesQuery && matchesSubject && matchesType && matchesLevel && matchesRating
  })

  notesShown = Math.min(notesShown, filteredNotes.length) || Math.min(6, filteredNotes.length)
  renderNotes()
}

function renderNotes() {
  if (!document.getElementById("notes-grid")) return
  const grid = document.getElementById("notes-grid")
  const sort = document.getElementById("sort-select").value
  const resultsCount = document.getElementById("results-count")

  const sorted = [...filteredNotes].sort((a, b) => {
    if (sort === "recent") return a.date.localeCompare(b.date)
    if (sort === "rating") return b.rating - a.rating
    if (sort === "downloads") return b.downloads - a.downloads
    return b.reviews - a.reviews
  })

  const display = sorted.slice(0, notesShown)
  resultsCount.textContent = `${filteredNotes.length.toLocaleString()} notes found`

  grid.classList.toggle("list-view", viewMode === "list")
  grid.innerHTML = display
    .map(
      (n) => `
      <article class="note ${viewMode === "list" ? "note--list" : ""}" data-id="${n.id}">
        <div class="note__image">
          <img src="${n.thumbnail}" alt="${n.title}">
          <span class="note__badge">${n.subject}</span>
        </div>
        <div class="note__content">
          <h3 class="note__title">${n.title}</h3>
          <div class="note__meta">
            <span>${n.author}</span>
            <span>⭐ ${n.rating.toFixed(2)} • ${formatDownloads(n.downloads)} downloads</span>
          </div>
          <div class="note__meta">
            <span>${n.fileType} • ${n.pages} pages</span>
            <span>${n.date}</span>
          </div>
          <div class="note__tags">
            ${n.tags.slice(0, 3).map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      </article>`,
    )
    .join("")

  grid.querySelectorAll(".note").forEach((card) =>
    card.addEventListener("click", () => {
      const note = notes.find((n) => n.id === card.dataset.id)
      openModal(note)
    }),
  )
}

function formatDownloads(val) {
  if (val >= 1000) return `${(val / 1000).toFixed(1)}K`
  return val.toString()
}

function initTestimonials() {
  if (!document.getElementById("testimonials-grid")) return
  const grid = document.getElementById("testimonials-grid")
  grid.innerHTML = testimonials
    .map(
      (t) => `
      <article class="testimonial">
        <div class="muted">“${t.content}”</div>
        <div>
          <strong>${t.name}</strong>
          <div class="muted">${t.role}</div>
        </div>
      </article>`,
    )
    .join("")

  const slide = document.getElementById("testimonial-slide")
  const dots = document.getElementById("testimonial-dots")
  let idx = 0

  const renderSlide = () => {
    const t = testimonials[idx]
    slide.innerHTML = `
      <p class="muted">“${t.content}”</p>
      <strong>${t.name}</strong>
      <div class="muted">${t.role}</div>
    `
    dots.innerHTML = testimonials
      .map((_, i) => `<button class="${i === idx ? "is-active" : ""}" data-dot="${i}"></button>`)
      .join("")
    dots.querySelectorAll("[data-dot]").forEach((d) =>
      d.addEventListener("click", () => {
        idx = Number(d.dataset.dot)
        renderSlide()
      }),
    )
  }

  renderSlide()

  document.querySelector('[data-action="prev"]').addEventListener("click", () => {
    idx = (idx - 1 + testimonials.length) % testimonials.length
    renderSlide()
  })
  document.querySelector('[data-action="next"]').addEventListener("click", () => {
    idx = (idx + 1) % testimonials.length
    renderSlide()
  })
}

function initCTA() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href")
      if (targetId.startsWith("#") && document.querySelector(targetId)) {
        e.preventDefault()
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" })
      }
    })
  })
}

let currentNote = null
let currentPage = 1

function openModal(note) {
  if (!note) return
  const modal = document.getElementById("note-modal")
  if (!modal) return
  currentNote = note
  currentPage = 1
  modal.classList.add("is-open")
  modal.setAttribute("aria-hidden", "false")

  document.getElementById("modal-image").src = note.thumbnail
  document.getElementById("modal-subject").textContent = note.subject
  document.getElementById("modal-title").textContent = note.title
  document.getElementById("modal-meta").innerHTML = `
    <div><strong>${note.rating.toFixed(2)}</strong><div class="muted">Rating</div></div>
    <div><strong>${formatDownloads(note.downloads)}</strong><div class="muted">Downloads</div></div>
    <div><strong>${note.pages}</strong><div class="muted">Pages</div></div>
    <div><strong>${note.date}</strong><div class="muted">Added</div></div>
  `
  document.getElementById("modal-tags").innerHTML = note.tags.map((t) => `<span class="tag">${t}</span>`).join("")
  document.getElementById("page-indicator").textContent = `${currentPage} / ${note.pages}`
  renderStars(0)
  renderComments()
}

function closeModal() {
  const modal = document.getElementById("note-modal")
  modal.classList.remove("is-open")
  modal.setAttribute("aria-hidden", "true")
}

function renderStars(active) {
  const wrap = document.getElementById("rating-stars")
  wrap.innerHTML = ""
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement("button")
    btn.className = `star ${i <= active ? "is-active" : ""}`
    btn.innerHTML = "★"
    btn.addEventListener("mouseenter", () => renderStars(i))
    btn.addEventListener("mouseleave", () => renderStars(active))
    btn.addEventListener("click", () => {
      renderStars(i)
      document.getElementById("rating-thanks").hidden = false
    })
    wrap.appendChild(btn)
  }
}

function renderComments() {
  if (!document.getElementById("comment-list")) return
  const list = document.getElementById("comment-list")
  list.innerHTML = comments
    .map(
      (c) => `
      <div class="comment">
        <strong>${c.author}</strong>
        <div class="muted small">${c.date}</div>
        <p>${c.content}</p>
      </div>
    `,
    )
    .join("")
}

function initModalControls() {
  const backdrop = document.querySelector(".modal__backdrop")
  const closeBtn = document.querySelector(".modal__close")
  if (!backdrop || !closeBtn) return
  backdrop.addEventListener("click", closeModal)
  closeBtn.addEventListener("click", closeModal)
  const prev = document.getElementById("page-prev")
  const next = document.getElementById("page-next")
  const submit = document.getElementById("comment-submit")
  const download = document.getElementById("download-btn")
  if (prev)
    prev.addEventListener("click", () => {
      if (!currentNote) return
      currentPage = Math.max(1, currentPage - 1)
      document.getElementById("page-indicator").textContent = `${currentPage} / ${currentNote.pages}`
    })
  if (next)
    next.addEventListener("click", () => {
      if (!currentNote) return
      currentPage = Math.min(currentNote.pages, currentPage + 1)
      document.getElementById("page-indicator").textContent = `${currentPage} / ${currentNote.pages}`
    })
  if (submit)
    submit.addEventListener("click", () => {
      const input = document.getElementById("comment-input")
      if (!input.value.trim()) return
      comments.unshift({
        author: "You",
        avatar: "",
        content: input.value.trim(),
        date: "Just now",
      })
      input.value = ""
      renderComments()
    })
  if (download) download.addEventListener("click", () => alert("Download started! (demo)"))
}

initModalControls()

function initAuth() {
  const uniDomains = ["edu", "ac.uk", "edu.au", "ac.in", "edu.cn", "uni.de"]
  const form = document.getElementById("signup-form")
  const stepBodies = form.querySelectorAll(".auth__body")
  const dots = form.querySelectorAll("[data-step-dot]")
  const errorBox = document.getElementById("signup-error")
  const nextBtn = document.getElementById("signup-next")
  const backBtn = document.getElementById("signup-back")
  const emailInput = document.getElementById("su-email")
  const suggestionBox = document.getElementById("email-suggestions")
  const passInput = document.getElementById("su-password")
  const confirmInput = document.getElementById("su-confirm")
  const strengthBars = document.querySelectorAll("#password-strength span")
  const reqs = document.querySelectorAll("#password-reqs li")
  let step = 1
  const saveUser = (user) => localStorage.setItem("studysync:user", JSON.stringify(user))
  const loadUser = () => {
    try {
      return JSON.parse(localStorage.getItem("studysync:user") || "null")
    } catch {
      return null
    }
  }

  const showStep = () => {
    stepBodies.forEach((el) => el.setAttribute("hidden", el.dataset.step !== String(step)))
    dots.forEach((d) => d.classList.toggle("is-active", d.dataset.stepDot === String(step)))
    backBtn.disabled = step === 1
    nextBtn.textContent = step === 1 ? "Continue" : "Create Account"
    errorBox.hidden = true
  }

  emailInput.addEventListener("input", () => {
    const val = emailInput.value
    const [, domain] = val.split("@")
    if (domain && !domain.includes(".")) {
      suggestionBox.innerHTML = uniDomains.map((d) => `<button data-suggestion="${val.split("@")[0]}@${d}">${val.split("@")[0]}@${d}</button>`).join("")
      suggestionBox.hidden = false
      suggestionBox.querySelectorAll("[data-suggestion]").forEach((btn) =>
        btn.addEventListener("click", () => {
          emailInput.value = btn.dataset.suggestion
          suggestionBox.hidden = true
        }),
      )
    } else {
      suggestionBox.hidden = true
    }
  })

  const validatePassword = () => {
    const val = passInput.value
    const checks = [
      { id: "len", ok: val.length >= 8 },
      { id: "upper", ok: /[A-Z]/.test(val) },
      { id: "lower", ok: /[a-z]/.test(val) },
      { id: "num", ok: /\d/.test(val) },
    ]
    const score = checks.filter((c) => c.ok).length
    strengthBars.forEach((bar, i) => {
      bar.style.background = i < score ? (score <= 2 ? "#ef4444" : score === 3 ? "#f59e0b" : "#22c55e") : "#e5e7eb"
    })
    reqs.forEach((li) => {
      const ok = checks.find((c) => li.dataset.req === c.id)?.ok
      li.classList.toggle("ok", ok)
    })
    return score === checks.length && passInput.value === confirmInput.value && passInput.value.length >= 8
  }

  passInput.addEventListener("input", validatePassword)
  confirmInput.addEventListener("input", validatePassword)

  backBtn.addEventListener("click", () => {
    if (step === 2) {
      step = 1
      showStep()
    }
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    errorBox.hidden = true
    if (step === 1) {
      const required = ["su-name", "su-email", "su-uni"]
      const missing = required.some((id) => !document.getElementById(id).value.trim())
      if (missing) {
        errorBox.textContent = "Please fill in all fields"
        errorBox.hidden = false
        return
      }
      step = 2
      showStep()
      return
    }

    const passwordsOk = validatePassword()
    if (!passwordsOk) {
      errorBox.textContent = "Please use a stronger password and confirm it."
      errorBox.hidden = false
      return
    }
    if (!document.getElementById("su-terms").checked) {
      errorBox.textContent = "Please agree to the terms."
      errorBox.hidden = false
      return
    }
    const user = {
      name: document.getElementById("su-name").value.trim(),
      email: document.getElementById("su-email").value.trim(),
      university: document.getElementById("su-uni").value.trim(),
      password: passInput.value,
    }
    nextBtn.textContent = "Creating..."
    setTimeout(() => {
      saveUser(user)
      nextBtn.textContent = "Created!"
      setTimeout(() => {
        nextBtn.textContent = "Create Account"
        alert("Account created! Saved locally.")
        form.reset()
        step = 1
        showStep()
      }, 600)
    }, 600)
  })

  showStep()

  // Sign in
  const signinForm = document.getElementById("signin-form")
  const signinError = document.getElementById("signin-error")
  signinForm.addEventListener("submit", (e) => {
    e.preventDefault()
    signinError.hidden = true
    const email = document.getElementById("si-email").value.trim()
    const pass = document.getElementById("si-password").value.trim()
    const saved = loadUser()
    const remember = document.getElementById("si-remember")?.checked
    const submitBtn = e.target.querySelector("button[type=submit]")
    if (!email || pass.length < 6) {
      signinError.textContent = "Please enter a valid email and a password (6+ characters)."
      signinError.hidden = false
      return
    }
    submitBtn.textContent = "Signing in..."
    setTimeout(() => {
      const validSaved = saved && saved.email === email && saved.password === pass
      const allowFallback = !saved // demo: allow login when no saved user exists
      if (validSaved || allowFallback) {
        if (remember) localStorage.setItem("studysync:session", email)
        alert(`Welcome back${saved?.name ? ", " + saved.name : ""}!`)
        signinError.hidden = true
      } else {
        signinError.textContent = "Invalid credentials. Please try again or sign up first."
        signinError.hidden = false
      }
      submitBtn.textContent = "Sign In"
    }, 700)
  })
}

// Authentication utility functions
function checkAuth() {
  const isAuthenticated = localStorage.getItem("studysync:isAuthenticated") === "true"
  const currentUser = localStorage.getItem("studysync:currentUser")
  const session = localStorage.getItem("studysync:session")
  return isAuthenticated || !!currentUser || !!session
}

function getCurrentUser() {
  try {
    const userJson = localStorage.getItem("studysync:currentUser")
    if (userJson) return JSON.parse(userJson)
    
    // Fallback: check session email
    const session = localStorage.getItem("studysync:session")
    if (session) {
      const allUsersJson = localStorage.getItem("studysync:users")
      const allUsers = allUsersJson ? JSON.parse(allUsersJson) : []
      const singleUserJson = localStorage.getItem("studysync:user")
      const singleUser = singleUserJson ? JSON.parse(singleUserJson) : null
      
      const foundUser = singleUser?.email === session 
        ? singleUser 
        : allUsers.find(u => u.email === session)
      
      if (foundUser) {
        return {
          name: foundUser.name || foundUser.fullName,
          email: foundUser.email,
          id: foundUser.id
        }
      }
    }
    return null
  } catch {
    return null
  }
}

function logout() {
  localStorage.removeItem("studysync:isAuthenticated")
  localStorage.removeItem("studysync:currentUser")
  localStorage.removeItem("studysync:session")
  window.location.href = "sign-in.html"
}

// Initialize sidebar active state
function initSidebar() {
  const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html'
  const pageMap = {
    'dashboard.html': 'dashboard',
    'browse.html': 'browse',
    'uploads.html': 'uploads',
    'leaderboard.html': 'leaderboard',
    'profile.html': 'profile',
    'approvals.html': 'approvals',
    'settings.html': 'settings',
    'admin.html': 'admin'
  }
  
  const pageKey = pageMap[currentPage] || 'dashboard'
  document.querySelectorAll('.sidebar__item').forEach(item => {
    item.classList.remove('active')
    if (item.dataset.page === pageKey) {
      item.classList.add('active')
    }
  })
}

// Update profile info in navbar
function updateProfileInfo() {
  try {
    const currentUser = getCurrentUser()
    if (currentUser) {
      const nameEl = document.getElementById("profile-name")
      const emailEl = document.getElementById("profile-email")
      if (nameEl) nameEl.textContent = currentUser.name || "User"
      if (emailEl) emailEl.textContent = currentUser.email || "user@example.com"
    }
  } catch (e) {
    console.log("Could not load user info:", e)
  }
}

function initProfile() {
  const uploadsTab = document.getElementById('uploads-tab');
  const savedTab = document.getElementById('saved-tab');
  const profileTabs = document.querySelectorAll('.profile-tab');
  
  if (!uploadsTab || !savedTab) return;

  // Tab Switching Logic
  profileTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      profileTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      uploadsTab.classList.add('hidden');
      savedTab.classList.add('hidden');
      
      const targetId = tab.textContent.includes('Uploads') ? 'uploads-tab' : 'saved-tab';
      const target = document.getElementById(targetId);
      if(target) target.classList.remove('hidden');
    });
  });

  const demoName = "Alex Rivera"; 
  
  const myUploads = notes.filter(n => n.author.includes(demoName));
  const savedNotes = notes.filter(n => !n.author.includes(demoName)).slice(0, 2);

  const renderCard = (n) => `
      <article class="note" data-id="${n.id}">
        <div class="note__image">
          <img src="${n.thumbnail}" alt="${n.title}">
          <span class="note__badge">${n.subject}</span>
        </div>
        <div class="note__content">
          <h3 class="note__title">${n.title}</h3>
          <div class="note__meta">
            <span>${n.author.split(' · ')[0]}</span>
            <span>⭐ ${n.rating.toFixed(2)} • ${formatDownloads(n.downloads)} downloads</span>
          </div>
          <div class="note__meta">
            <span>${n.fileType} • ${n.pages} pages</span>
            <span>${n.date}</span>
          </div>
          <div class="note__tags">
            ${n.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      </article>
  `;

  if (myUploads.length > 0) {
      uploadsTab.innerHTML = myUploads.map(renderCard).join('');
  } else {
      uploadsTab.innerHTML = '<div class="empty-state"><p class="muted">No uploads yet.</p></div>';
  }
  
  if (savedNotes.length > 0) {
      savedTab.innerHTML = savedNotes.map(renderCard).join('');
  } else {
      savedTab.innerHTML = '<div class="empty-state"><p class="muted">No saved notes.</p></div>';
  }

  [uploadsTab, savedTab].forEach(container => {
    container.querySelectorAll('.note').forEach(card => {
      card.addEventListener('click', () => {
        const note = notes.find(n => n.id === card.dataset.id);
        if(typeof openModal === 'function') openModal(note);
      });
    });
  });
}

