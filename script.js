

// === SURAH INFO (names with Urdu) ===
function toUrduNumber(num) {
  const urduDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  return num.toString().replace(/\d/g, d => urduDigits[d]);
}

const surahNames = [
  { no: 1, en: "Al-Fatiha", ur: "سورة الفاتحہ", noUr: "١" },
  { no: 2, en: "Al-Baqarah", ur: "سورة البقرة", noUr: "٢" },
  { no: 3, en: "Aal-E-Imran", ur: "سورة آل عمران", noUr: "٣" },
  { no: 4, en: "An-Nisa", ur: "سورة النساء", noUr: "٤" },
  { no: 5, en: "Al-Ma'idah", ur: "سورة المائدة", noUr: "٥" },
  { no: 6, en: "Al-An'am", ur: "سورة الأنعام", noUr: "٦" },
  { no: 7, en: "Al-A'raf", ur: "سورة الأعراف", noUr: "٧" },
  { no: 8, en: "Al-Anfal", ur: "سورة الأنفال", noUr: "٨" },
  { no: 9, en: "At-Tawbah", ur: "سورة التوبة", noUr: "٩" },
  { no: 10, en: "Yunus", ur: "سورة يونس", noUr: "١٠" },
  { no: 11, en: "Hud", ur: "سورة هود", noUr: "١١" },
  { no: 12, en: "Yusuf", ur: "سورة يوسف", noUr: "١٢" },
  { no: 13, en: "Ar-Ra'd", ur: "سورة الرعد", noUr: "١٣" },
  { no: 14, en: "Ibrahim", ur: "سورة إبراهيم", noUr: "١٤" },
  { no: 15, en: "Al-Hijr", ur: "سورة الحجر", noUr: "١٥" },
  { no: 16, en: "An-Nahl", ur: "سورة النحل", noUr: "١٦" },
  { no: 17, en: "Al-Isra", ur: "سورة الإسراء", noUr: "١٧" },
  { no: 18, en: "Al-Kahf", ur: "سورة الكهف", noUr: "١٨" },
  { no: 19, en: "Maryam", ur: "سورة مريم", noUr: "١٩" },
  { no: 20, en: "Taha", ur: "سورة طه", noUr: "٢٠" },
  { no: 21, en: "Al-Anbiya", ur: "سورة الأنبياء", noUr: "٢١" },
  { no: 22, en: "Al-Hajj", ur: "سورة الحج", noUr: "٢٢" },
  { no: 23, en: "Al-Mu'minun", ur: "سورة المؤمنون", noUr: "٢٣" },
  { no: 24, en: "An-Nur", ur: "سورة النور", noUr: "٢٤" },
  { no: 25, en: "Al-Furqan", ur: "سورة الفرقان", noUr: "٢٥" },
  { no: 26, en: "Ash-Shu'ara", ur: "سورة الشعراء", noUr: "٢٦" },
  { no: 27, en: "An-Naml", ur: "سورة النمل", noUr: "٢٧" },
  { no: 28, en: "Al-Qasas", ur: "سورة القصص", noUr: "٢٨" },
  { no: 29, en: "Al-Ankabut", ur: "سورة العنكبوت", noUr: "٢٩" },
  { no: 30, en: "Ar-Rum", ur: "سورة الروم", noUr: "٣٠" },
  { no: 31, en: "Luqman", ur: "سورة لقمان", noUr: "٣١" },
  { no: 32, en: "As-Sajda", ur: "سورة السجدة", noUr: "٣٢" },
  { no: 33, en: "Al-Ahzab", ur: "سورة الأحزاب", noUr: "٣٣" },
  { no: 34, en: "Saba", ur: "سورة سبأ", noUr: "٣٤" },
  { no: 35, en: "Fatir", ur: "سورة فاطر", noUr: "٣٥" },
  { no: 36, en: "Ya-Sin", ur: "سورة يس", noUr: "٣٦" },
  { no: 37, en: "As-Saffat", ur: "سورة الصافات", noUr: "٣٧" },
  { no: 38, en: "Sad", ur: "سورة ص", noUr: "٣٨" },
  { no: 39, en: "Az-Zumar", ur: "سورة الزمر", noUr: "٣٩" },
  { no: 40, en: "Ghafir", ur: "سورة غافر", noUr: "٤٠" },
 { no: 41, en: "Fussilat", ur: "سورة فصلت", noUr: "٤١" },
  { no: 42, en: "Ash-Shura", ur: "سورة الشورى", noUr: "٤٢" },
  { no: 43, en: "Az-Zukhruf", ur: "سورة الزخرف", noUr: "٤٣" },
  { no: 44, en: "Ad-Dukhan", ur: "سورة الدخان", noUr: "٤٤" },
  { no: 45, en: "Al-Jathiyah", ur: "سورة الجاثية", noUr: "٤٥" },
  { no: 46, en: "Al-Ahqaf", ur: "سورة الأحقاف", noUr: "٤٦" },
  { no: 47, en: "Muhammad", ur: "سورة محمد", noUr: "٤٧" },
  { no: 48, en: "Al-Fath", ur: "سورة الفتح", noUr: "٤٨" },
  { no: 49, en: "Al-Hujurat", ur: "سورة الحجرات", noUr: "٤٩" },
  { no: 50, en: "Qaf", ur: "سورة ق", noUr: "٥٠" },
  { no: 51, en: "Adh-Dhariyat", ur: "سورة الذاريات", noUr: "٥١" },
  { no: 52, en: "At-Tur", ur: "سورة الطور", noUr: "٥٢" },
  { no: 53, en: "An-Najm", ur: "سورة النجم", noUr: "٥٣" },
  { no: 54, en: "Al-Qamar", ur: "سورة القمر", noUr: "٥٤" },
  { no: 55, en: "Ar-Rahman", ur: "سورة الرحمن", noUr: "٥٥" },
  { no: 56, en: "Al-Waqia", ur: "سورة الواقعة", noUr: "٥٦" },
  { no: 57, en: "Al-Hadid", ur: "سورة الحديد", noUr: "٥٧" },
  { no: 58, en: "Al-Mujadila", ur: "سورة المجادلة", noUr: "٥٨" },
  { no: 59, en: "Al-Hashr", ur: "سورة الحشر", noUr: "٥٩" },
  { no: 60, en: "Al-Mumtahina", ur: "سورة الممتحنة", noUr: "٦٠" },
  { no: 61, en: "As-Saff", ur: "سورة الصف", noUr: "٦١" },
  { no: 62, en: "Al-Jumu'ah", ur: "سورة الجمعة", noUr: "٦٢" },
  { no: 63, en: "Al-Munafiqun", ur: "سورة المنافقون", noUr: "٦٣" },
  { no: 64, en: "At-Taghabun", ur: "سورة التغابن", noUr: "٦٤" },
  { no: 65, en: "At-Talaq", ur: "سورة الطلاق", noUr: "٦٥" },
  { no: 66, en: "At-Tahrim", ur: "سورة التحريم", noUr: "٦٦" },
  { no: 67, en: "Al-Mulk", ur: "سورة الملك", noUr: "٦٧" },
  { no: 68, en: "Al-Qalam", ur: "سورة القلم", noUr: "٦٨" },
  { no: 69, en: "Al-Haqqah", ur: "سورة الحاقة", noUr: "٦٩" },
  { no: 70, en: "Al-Ma'arij", ur: "سورة المعارج", noUr: "٧٠" },
  { no: 71, en: "Nuh", ur: "سورة نوح", noUr: "٧١" },
  { no: 72, en: "Al-Jinn", ur: "سورة الجن", noUr: "٧٢" },
  { no: 73, en: "Al-Muzzammil", ur: "سورة المزمل", noUr: "٧٣" },
  { no: 74, en: "Al-Muddaththir", ur: "سورة المدثر", noUr: "٧٤" },
  { no: 75, en: "Al-Qiyamah", ur: "سورة القيامة", noUr: "٧٥" },
  { no: 76, en: "Al-Insan", ur: "سورة الإنسان", noUr: "٧٦" },
  { no: 77, en: "Al-Mursalat", ur: "سورة المرسلات", noUr: "٧٧" },
  { no: 78, en: "An-Naba", ur: "سورة النبأ", noUr: "٧٨" },
  { no: 79, en: "An-Nazi'at", ur: "سورة النازعات", noUr: "٧٩" },
  { no: 80, en: "Abasa", ur: "سورة عبس", noUr: "٨٠" },
  { no: 81, en: "At-Takwir", ur: "سورة التكوير", noUr: "٨١" },
  { no: 82, en: "Al-Infitar", ur: "سورة الإنفطار", noUr: "٨٢" },
  { no: 83, en: "Al-Mutaffifin", ur: "سورة المطففين", noUr: "٨٣" },
  { no: 84, en: "Al-Inshiqaq", ur: "سورة الإنشقاق", noUr: "٨٤" },
  { no: 85, en: "Al-Buruj", ur: "سورة البروج", noUr: "٨٥" },
  { no: 86, en: "At-Tariq", ur: "سورة الطارق", noUr: "٨٦" },
  { no: 87, en: "Al-A'la", ur: "سورة الأعلى", noUr: "٨٧" },
  { no: 88, en: "Al-Ghashiyah", ur: "سورة الغاشية", noUr: "٨٨" },
  { no: 89, en: "Al-Fajr", ur: "سورة الفجر", noUr: "٨٩" },
  { no: 90, en: "Al-Balad", ur: "سورة البلد", noUr: "٩٠" },
  { no: 91, en: "Ash-Shams", ur: "سورة الشمس", noUr: "٩١" },
  { no: 92, en: "Al-Lail", ur: "سورة الليل", noUr: "٩٢" },
  { no: 93, en: "Ad-Duha", ur: "سورة الضحى", noUr: "٩٣" },
  { no: 94, en: "Ash-Sharh", ur: "سورة الشرح", noUr: "٩٤" },
  { no: 95, en: "At-Tin", ur: "سورة التين", noUr: "٩٥" },
  { no: 96, en: "Al-Alaq", ur: "سورة العلق", noUr: "٩٦" },
  { no: 97, en: "Al-Qadr", ur: "سورة القدر", noUr: "٩٧" },
  { no: 98, en: "Al-Bayyina", ur: "سورة البينة", noUr: "٩٨" },
  { no: 99, en: "Az-Zalzalah", ur: "سورة الزلزلة", noUr: "٩٩" },
  { no: 100, en: "Al-Adiyat", ur: "سورة العاديات", noUr: "١٠٠" },
  { no: 101, en: "Al-Qari'ah", ur: "سورة القارعة", noUr: "١٠١" },
  { no: 102, en: "At-Takathur", ur: "سورة التكاثر", noUr: "١٠٢" },
  { no: 103, en: "Al-Asr", ur: "سورة العصر", noUr: "١٠٣" },
  { no: 104, en: "Al-Humazah", ur: "سورة الهمزة", noUr: "١٠٤" },
  { no: 105, en: "Al-Fil", ur: "سورة الفيل", noUr: "١٠٥" },
  { no: 106, en: "Quraysh", ur: "سورة قريش", noUr: "١٠٦" },
  { no: 107, en: "Al-Ma'un", ur: "سورة الماعون", noUr: "١٠٧" },
  { no: 108, en: "Al-Kawthar", ur: "سورة الكوثر", noUr: "١٠٨" },
  { no: 109, en: "Al-Kafirun", ur: "سورة الكافرون", noUr: "١٠٩" },
  { no: 110, en: "An-Nasr", ur: "سورة النصر", noUr: "١١٠" },
  { no: 111, en: "Al-Masad", ur: "سورة المسد", noUr: "١١١" },
  { no: 112, en: "Al-Ikhlas", ur: "سورة الإخلاص", noUr: "١١٢" },
  { no: 113, en: "Al-Falaq", ur: "سورة الفلق", noUr: "١١٣" },
  { no: 114, en: "An-Naas", ur: "سورة الناس", noUr: "١١٤" }// ... rest as before
];

// === ELEMENTS ===
const surahListPage = document.getElementById("surahListPage");
const surahDetailPage = document.getElementById("surahDetailPage");
const bookmarksPage = document.getElementById("bookmarksPage");
const surahList = document.getElementById("surahList");
const ayatContainer = document.getElementById("ayatContainer");
const surahTitle = document.getElementById("surahTitle");
const bookmarkedAyahs = document.getElementById("bookmarkedAyahs");

const backBtn = document.getElementById("backBtn");
const backFromBookmarks = document.getElementById("backFromBookmarks");
const homeBtn = document.getElementById("homeBtn");
const bookmarksBtn = document.getElementById("bookmarksBtn");

const sectionsPage = document.getElementById("sectionsPage");
const backFromSections = document.getElementById("backFromSections");
const sectionsBtn = document.getElementById("sectionsBtn");
const sectionsList = document.getElementById("sectionsList");
const newSectionName = document.getElementById("newSectionName");
const createSectionBtn = document.getElementById("createSectionBtn");
// === GLOBAL DATA CACHE ===
let data = [];
// === TRANSLATION DISPLAY OPTIONS ===
let showOptions = { urdu: false, roman: false, english: false };

const translationSelect = document.getElementById("translationSelect");
translationSelect.addEventListener("change", () => {
  const val = translationSelect.value;
  showOptions = {
    urdu: val === "urdu" || val === "all",
    roman: val === "roman" || val === "all",
    english: val === "english" || val === "all"
  };

  // Re-render current Surah instantly if visible
  if (surahDetailPage.style.display === "block") {
    const surahName = surahTitle.textContent.replace("📘 Surah ", "").trim();
    loadSurahDetails(1, surahName);
  }
});

// === RELIABLE SMART SEARCH (Fuzzy + Multi-language) ===
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
let fuse = null;

async function initializeSearch() {
  if (!data.length) data = await fetchSheetData();
  fuse = new Fuse(data, {
    shouldSort: true,
    includeScore: true,
    threshold: 0.4,          // Lower = stricter (0.2 is strict, 0.6 is loose)
    ignoreLocation: true,
    keys: [
      "SURAH",
      "ARABIC",
      "URDU",
      "ROMAN URDU",
      "ENGLISH",
      "LATIN ENGLISH"
    ]
  });
}

/* -------------------
  Smarter search handler
  - Pure numbers (e.g. "36") => find all rows with AYAT == 36 (global)
  - surah:ayah (e.g. "36:5") => open Surah 36 and scroll to ayah 5
  - On Surah detail page: single number => scroll to that ayah in current surah
  - Otherwise: fuzzy Fuse.js search
-------------------*/
searchInput.addEventListener("input", async () => {
  const raw = searchInput.value.trim();
  if (!raw) {
    searchResults.style.display = "none";
    searchResults.innerHTML = "";
    return;
  }

  // ensure data + fuse ready for text searches
  if (!data.length) data = await fetchSheetData();
  if (!fuse) initializeSearch(); // don't await - fuse init is cheap

  // check for surah:ayah format (e.g. 36:5 or 36:05)
  const saMatch = raw.match(/^(\d{1,3})\s*[:\-]\s*(\d{1,3})$/);
  if (saMatch) {
    const surahNum = parseInt(saMatch[1], 10);
    const ayahNum = parseInt(saMatch[2], 10);

    // find surah by number
    const surahObj = surahNames.find(s => Number(s.no) === surahNum);
    if (surahObj) {
      // show quick result item to open that surah and jump to ayah
      searchResults.style.display = "block";
      searchResults.innerHTML = `<div class="search-result" style="padding:12px; cursor:pointer;">
        <b>📖 Surah ${surahObj.en} — ${surahObj.ur}</b>
        <div>➡ Jump to Ayah ${ayahNum}</div>
      </div>`;
      searchResults.querySelector(".search-result").addEventListener("click", async () => {
        searchResults.style.display = "none";
        searchInput.value = "";
        await loadSurahDetails(surahObj.no, surahObj.en);
        setTimeout(() => scrollToAyah(ayahNum), 500);
      });
      return;
    }
    // if surah number not found, fall through to fuzzy below
  }

  // check for pure numeric input (only digits). This is the change you asked for:
  const onlyNumberMatch = raw.match(/^\d+$/);
  if (onlyNumberMatch) {
    const n = parseInt(raw, 10);

    // If we're on a Surah detail page, interpret numeric as ayah number within that surah
    if (surahDetailPage.style.display === "block") {
      // attempt to scroll to that ayah in current surah
      scrollToAyah(n);
      searchResults.style.display = "none";
      searchInput.value = "";
      return;
    }

    // OTHERWISE: global AYAT search (show all verses where AYAT === n)
    const results = data.filter(row => {
      // normalize AYAT values that may be numbers or strings
      const ay = row.AYAT;
      return Number(ay) === n;
    });

    searchResults.style.display = "block";
    if (!results.length) {
      searchResults.innerHTML = `<p style="padding:12px;">No ayahs found with number ${n}.</p>`;
      return;
    }

    searchResults.innerHTML = `<h3 style="margin:6px 8px;">🔍 Ayah number ${n} — ${results.length} result(s)</h3>`;
    results.slice(0, 100).forEach(v => { // limit to 100 results for safety
      const div = document.createElement("div");
      div.className = "search-result";
      div.style.borderBottom = "1px solid #eee";
      div.style.padding = "10px";
      div.style.cursor = "pointer";
      div.innerHTML = `
        <b>${v.SURAH}</b> — Ayah ${v.AYAT}<br>
        <div class="arabic" style="font-size:18px; text-align:right; margin-top:6px;">${v.ARABIC}</div>
        <div class="latin" style="font-style:italic; color:#3e2723; margin-top:6px;">${v["LATIN ENGLISH"] || ""}</div>
      `;
      div.addEventListener("click", async () => {
        // open surah and scroll to this ayah
        searchResults.style.display = "none";
        searchInput.value = "";
        await loadSurahDetails(1, v.SURAH);
        setTimeout(() => scrollToAyah(Number(v.AYAT)), 600);
      });
      searchResults.appendChild(div);
    });
    return;
  }

  // FALLBACK: normal fuzzy text search using Fuse
  if (!fuse) await initializeSearch();
  const fresults = fuse.search(raw);
  searchResults.style.display = "block";
  searchResults.innerHTML = `<h3 style="margin:6px 8px;">🔍 Found ${fresults.length} results</h3>`;
  if (!fresults.length) {
    searchResults.innerHTML += `<p style="padding:12px;">No matches found.</p>`;
    return;
  }
  fresults.slice(0, 25).forEach(({ item }) => {
    const v = item;
    const div = document.createElement("div");
    div.className = "search-result";
    div.style.borderBottom = "1px solid #ddd";
    div.style.padding = "8px";
    div.style.cursor = "pointer";
    div.innerHTML = `
      <b>${v.SURAH}</b> — Ayah ${v.AYAT}<br>
      <div class="arabic" style="font-size:20px; text-align:right;">${v.ARABIC}</div>
      <div class="latin" style="font-style:italic; color:#3e2723;">${v["LATIN ENGLISH"] || ""}</div>
    `;
    div.addEventListener("click", () => {
      searchResults.style.display = "none";
      searchInput.value = "";
      loadSurahDetails(1, v.SURAH);
      setTimeout(() => {
        const element = [...document.querySelectorAll(".ayah")]
          .find(el => {
            const h = el.querySelector("strong");
            return h && h.textContent.includes(`Ayah ${v.AYAT}`);
          });
        if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 900);
    });
    searchResults.appendChild(div);
  });
});




// === GOOGLE SHEET CSV LINK ===
const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIVMfq432UPRrpgIixP-v4CXZ0W8Rg82BUdglWWhYZiWVlnAs8KJot9MhIIsEVZo2mLxyHk7MkFXfG/pub?output=csv";


async function fetchSheetData() {
  const res = await fetch(sheetUrl);
  const text = await res.text();
  return new Promise(resolve => {
    Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      transformHeader: h =>
        h
          .replace(/\u00A0/g, " ") // remove non-breaking spaces
          .replace(/\s+/g, " ")    // collapse multiple spaces
          .trim()                  // remove start/end spaces
          .toUpperCase(),          // standardize case
      complete: results => resolve(results.data)
    });
  });
}
// === Load Surah List ===
function loadSurahList() {
  surahList.innerHTML = "";
  surahNames.forEach((s, i) => {
    const li = document.createElement("li");
    li.className = "surah-item";
    li.innerHTML = `
      <div class="surah-row">
        <span class="en-number">${s.no}</span>
        <div class="surah-name">
          <span>${s.en}</span>
          <span class="urdu">${s.ur}</span>
        </div>
        <span class="urdu-number">${toUrduNumber(s.no)}</span>
      </div>`;
    li.addEventListener("click", () => loadSurahDetails(i + 1, s.en));
    surahList.appendChild(li);
  });
}
const pageNav = document.getElementById("pageNav");

function showBackNav(show, title = "") {
  if (show) {
    pageNav.style.display = "flex";
    document.getElementById("surahTitle").textContent = `📘 Surah ${title}`;
  } else {
    pageNav.style.display = "none";
  }
}
// === Load Surah Details ===
async function loadSurahDetails(_, surahName) {
  surahListPage.style.display = "none";
  surahDetailPage.style.display = "block";
  bookmarksPage.style.display = "none";
  surahTitle.textContent = `📘 Surah ${surahName}`;
  document.getElementById("pageNav").style.display = "flex";
  ayatContainer.innerHTML = "<p>Loading...</p>";

  if (!data.length) data = await fetchSheetData();

const normalize = s => (s || "").trim().toLowerCase().replace(/[^a-z0-9]/g, "");
  const surahAyat = data.filter(v => normalize(v.SURAH || "") === normalize(surahName));

  console.log("Loaded Surah:", surahName, "→", surahAyat.length, "ayahs");

  if (!surahAyat.length) {
    ayatContainer.innerHTML = `<p style="color:red;">⚠️ No verses found for "${surahName}".</p>`;
    return;
  }

  ayatContainer.innerHTML = "";
surahAyat.forEach(v => {
  const key = `${v.SURAH}_${v.AYAT}`;
  const isBookmarked = localStorage.getItem(key);
  const div = document.createElement("div");
  div.className = "ayah";


  function scrollToAyah(num) {
  const ayahDivs = [...document.querySelectorAll(".ayah")];
  const target = ayahDivs.find(div => {
    const header = div.querySelector("strong");
    if (!header) return false;
    const match = header.textContent.match(/Ayah\s+(\d+)/i);
    return match && parseInt(match[1]) === num;
  });

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.classList.add("highlight");
    setTimeout(() => target.classList.remove("highlight"), 1500);
  } else {
    alert(`⚠️ Ayah ${num} not found in this Surah.`);
  }
}

  // Header + Bookmark
  const header = `
    <div style="display:flex; justify-content:space-between;">
      <strong>${v.SURAH} — Ayah ${v.AYAT}</strong>
      <button class="bookmark-btn" data-key="${key}" style="border:none; background:none; font-size:18px;">
        ${isBookmarked ? "⭐" : "☆"}
      </button>
    </div>`;
  div.innerHTML = header;

  // Always show Arabic
  const arabic = document.createElement("div");
  arabic.className = "arabic";
  arabic.style.fontSize = "22px";
  arabic.style.textAlign = "right";
  arabic.style.marginTop = "10px";
  arabic.textContent = v.ARABIC;
  div.appendChild(arabic);

  // Always show Latin English
  const latin = document.createElement("div");
  latin.className = "latin";
  latin.style.marginTop = "5px";
  latin.style.fontStyle = "italic";
  latin.textContent = v["LATIN ENGLISH"];
  div.appendChild(latin);

  // Optional translations based on dropdown
  if (showOptions.urdu && v.URDU) {
    const urdu = document.createElement("div");
    urdu.className = "urdu";
    urdu.style.fontFamily = "'Noto Nastaliq Urdu', serif";
    urdu.style.direction = "rtl";
    urdu.style.textAlign = "right";
    urdu.style.fontSize = "20px";
    urdu.style.marginTop = "10px";
    urdu.textContent = v.URDU;
    div.appendChild(urdu);
  }

  if (showOptions.roman && v["ROMAN URDU"]) {
    const roman = document.createElement("div");
    roman.className = "roman";
    roman.style.marginTop = "10px";
    roman.textContent = "Roman Urdu: " + v["ROMAN URDU"];
    div.appendChild(roman);
  }

  if (showOptions.english && v.ENGLISH) {
    const english = document.createElement("div");
    english.className = "english";
    english.style.marginTop = "5px";
    english.textContent = "English: " + v.ENGLISH;
    div.appendChild(english);
  }

  // Add Section button
  const btn = document.createElement("button");
  btn.textContent = "➕ Add to Section";
  btn.className = "section-btn";
  btn.dataset.key = key;
  btn.style.marginTop = "8px";
  div.appendChild(btn);

  ayatContainer.appendChild(div);
});


  document.querySelectorAll(".bookmark-btn").forEach(btn =>
    btn.addEventListener("click", e => {
      const key = e.target.dataset.key;
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        e.target.textContent = "☆";
      } else {
        localStorage.setItem(key, "true");
        e.target.textContent = "⭐";
      }
    })
  );

  document.querySelectorAll(".section-btn").forEach(btn =>
    btn.addEventListener("click", e => addToSection(e.target.dataset.key))
  );
}

// === Bookmarks ===
async function loadBookmarks() {
  bookmarksPage.style.display = "block";
  surahListPage.style.display = "none";
  surahDetailPage.style.display = "none";
  bookmarkedAyahs.innerHTML = "<p>Loading...</p>";

  if (!data.length) data = await fetchSheetData();

  const keys = Object.keys(localStorage).filter(k => k.includes("_"));
  if (!keys.length) {
    bookmarkedAyahs.innerHTML = "<p>No bookmarked ayahs yet.</p>";
    return;
  }

  bookmarkedAyahs.innerHTML = "";
  keys.forEach(key => {
    const [surah, ayah] = key.split("_");
    const verse = data.find(v =>
      v.SURAH.trim().toLowerCase() === surah.trim().toLowerCase() &&
      String(v.AYAT).trim() === String(ayah).trim()
    );
    if (verse) {
      const div = document.createElement("div");
      div.className = "ayah";
      div.innerHTML = `
        <div style="display:flex; justify-content:space-between;">
          <strong>${verse.SURAH} — Ayah ${verse.AYAT}</strong>
          <button class="remove-bookmark" data-key="${key}" style="border:none; background:none; color:red;">❌</button>
        </div>
        <div class="arabic" style="font-size:22px; text-align:right; margin-top:5px;">${verse.ARABIC}</div>
        <div class="urdu" style="font-family:'Noto Nastaliq Urdu', serif; direction:rtl; text-align:right; font-size:20px; margin-top:5px;">${verse.URDU}</div>
        <div class="roman" style="margin-top:5px;">Roman Urdu: ${verse["ROMAN URDU"]}</div>
        <div class="english" style="margin-top:5px;">English: ${verse.ENGLISH}</div>
        <div class="latin" style="margin-top:5px;">Latin English: ${verse["LATIN ENGLISH"]}</div>
      `;
      bookmarkedAyahs.appendChild(div);
    }
  });

  document.querySelectorAll(".remove-bookmark").forEach(btn =>
    btn.addEventListener("click", e => {
      localStorage.removeItem(e.target.dataset.key);
      loadBookmarks();
    })
  );
}

// === Navigation ===
homeBtn.addEventListener("click", () => {
  searchResults.style.display = "none"; // ✅ hide smart search
  surahListPage.style.display = "block";
  surahDetailPage.style.display = "none";
  bookmarksPage.style.display = "none";
});
bookmarksBtn.addEventListener("click", loadBookmarks);
backBtn.addEventListener("click", () => {
  // hide search
  searchResults.style.display = "none";

  // show Surah list
  surahListPage.style.display = "block";

  // hide detail and bookmarks
  surahDetailPage.style.display = "none";
  bookmarksPage.style.display = "none";

  // reset the header title + back nav visibility
  document.getElementById("pageNav").style.display = "none";
  surahTitle.textContent = "";
});

backFromBookmarks.addEventListener("click", () => {
  surahListPage.style.display = "block";
  bookmarksPage.style.display = "none";
});
sectionsBtn.addEventListener("click", loadSections);
backFromSections.addEventListener("click", () => {
  sectionsPage.style.display = "none";
  surahListPage.style.display = "block";
});

// === Sections ===
function loadSections() {
  surahListPage.style.display = "none";
  surahDetailPage.style.display = "none";
  bookmarksPage.style.display = "none";
  sectionsPage.style.display = "block";

  const sections = JSON.parse(localStorage.getItem("sections") || "{}");
  sectionsList.innerHTML = "";

  if (Object.keys(sections).length === 0) {
    sectionsList.innerHTML = "<p>No sections created yet.</p>";
    return;
  }

  Object.entries(sections).forEach(([name, ayahs]) => {
    const div = document.createElement("div");
    div.className = "section-card";
    div.style.background = "#fff";
    div.style.margin = "10px 0";
    div.style.padding = "10px";
    div.style.borderRadius = "8px";
    div.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    div.innerHTML = `
      <h3>${name}</h3>
      <p>${ayahs.length} ayahs</p>
      <button class="open-section" data-name="${name}">📖 Open</button>
      <button class="delete-section" data-name="${name}" style="color:red;">❌ Delete</button>
    `;
    sectionsList.appendChild(div);
  });

  document.querySelectorAll(".delete-section").forEach(btn => {
    btn.addEventListener("click", e => {
      const name = e.target.dataset.name;
      const sections = JSON.parse(localStorage.getItem("sections") || "{}");
      delete sections[name];
      localStorage.setItem("sections", JSON.stringify(sections));
      loadSections();
    });
  });

  document.querySelectorAll(".open-section").forEach(btn => {
    btn.addEventListener("click", e => openSection(e.target.dataset.name));
  });
}

createSectionBtn.addEventListener("click", () => {
  const name = newSectionName.value.trim();
  if (!name) return alert("Please enter a section name.");
  const sections = JSON.parse(localStorage.getItem("sections") || "{}");
  if (sections[name]) return alert("That section already exists!");
  sections[name] = [];
  localStorage.setItem("sections", JSON.stringify(sections));
  newSectionName.value = "";
  loadSections();
});

async function openSection(name) {
  if (!data.length) data = await fetchSheetData();
  const sections = JSON.parse(localStorage.getItem("sections") || "{}");
  const ayahKeys = sections[name] || [];
  sectionsList.innerHTML = `<h3>📂 ${name}</h3><button id="backToSections">⬅ Back</button><div id="sectionAyahs"></div>`;

  const sectionAyahs = document.getElementById("sectionAyahs");
  if (!ayahKeys.length) {
    sectionAyahs.innerHTML = "<p>No ayahs added yet.</p>";
  } else {
    ayahKeys.forEach(key => {
      const [surah, ayah] = key.split("_");
      const verse = data.find(v =>
        v.SURAH.trim().toLowerCase() === surah.trim().toLowerCase() &&
        String(v.AYAT).trim() === String(ayah).trim()
      );
      if (verse) {
        const div = document.createElement("div");
        div.className = "ayah";
        div.innerHTML = `
          <strong>${verse.SURAH} — Ayah ${verse.AYAT}</strong>
          <div class="urdu">${verse.URDU}</div>
          <div class="english">${verse.ENGLISH}</div>
          <button class="remove-from-section" data-key="${key}" style="color:red;">❌ Remove</button>
        `;
        sectionAyahs.appendChild(div);
      }
    });
  }

  document.getElementById("backToSections").addEventListener("click", loadSections);
  document.querySelectorAll(".remove-from-section").forEach(btn =>
    btn.addEventListener("click", e => {
      const key = e.target.dataset.key;
      const sections = JSON.parse(localStorage.getItem("sections") || "{}");
      sections[name] = sections[name].filter(k => k !== key);
      localStorage.setItem("sections", JSON.stringify(sections));
      openSection(name);
    })
  );
}

function addToSection(key) {
  const sections = JSON.parse(localStorage.getItem("sections") || "{}");
  const names = Object.keys(sections);
  if (!names.length) return alert("Please create a section first.");
  const choice = prompt(`Add to which section?\n${names.join("\n")}`);
  if (!choice || !sections[choice]) return;
  if (!sections[choice].includes(key)) {
    sections[choice].push(key);
    localStorage.setItem("sections", JSON.stringify(sections));
    alert("Ayah added to section!");
  } else alert("Already in that section.");
}
window.addEventListener("scroll", () => {
  const header = document.getElementById("fixedHeader");
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 3px 8px rgba(0,0,0,0.4)";
  } else {
    header.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
  }
});

// === Initialize ===
(async () => {
  data = await fetchSheetData();
  loadSurahList();
})();
