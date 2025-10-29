// === SURAH INFO (names with Urdu) ===
// Convert English numbers to Urdu digits
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
  { no: 114, en: "An-Naas", ur: "سورة الناس", noUr: "١١٤" }
  // ... continue for all Surahs
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

// === GOOGLE SHEET CSV LINK ===
const sheetUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIVMfq432UPRrpgIixP-v4CXZ0W8Rg82BUdglWWhYZiWVlnAs8KJot9MhIIsEVZo2mLxyHk7MkFXfG/pub?output=csv";

// === GLOBAL DATA CACHE ===
let data = [];

// === Fetch & Convert CSV to JSON ===
async function fetchSheetData() {
  const res = await fetch(sheetUrl);
  const text = await res.text();
  const rows = text.split("\n").map(r => r.split(","));
  const headers = rows[0].map(h => h.trim());
  return rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => (obj[h] = row[i]?.trim() || ""));
    return obj;
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
  </div>
`;

    li.addEventListener("click", () => loadSurahDetails(i + 1, s.en));
    surahList.appendChild(li);
  });
}

// === Load Surah Details ===
async function loadSurahDetails(surahId, surahName) {
  surahListPage.style.display = "none";
  surahDetailPage.style.display = "block";
  bookmarksPage.style.display = "none";
  surahTitle.innerHTML = `<b>📘 Surah ${surahName}</b>`;
  ayatContainer.innerHTML = "<p>Loading...</p>";

  if (!data.length) {
    data = await fetchSheetData();
  }

  const surahAyat = data.filter(
    v => v.SURAH.trim().toLowerCase() === surahName.trim().toLowerCase()
  );

  if (!surahAyat.length) {
    ayatContainer.innerHTML = `<p>No verses found for Surah ${surahName}.</p>`;
    return;
  }

  ayatContainer.innerHTML = "";

  surahAyat.forEach(v => {
    const key = `${v.SURAH}_${v.AYAT}`;
    const isBookmarked = localStorage.getItem(key);

    const div = document.createElement("div");
    div.className = "ayah";
    div.innerHTML = `
      <div class="ayah-header" style="display:flex; justify-content:space-between; align-items:center;">
        <strong>${v.SURAH} — Ayah <span style="font-weight:bold;">${v.AYAT}</span></strong>
        <button class="bookmark-btn" data-key="${key}" style="border:none; background:none; font-size:18px; cursor:pointer;">
          ${isBookmarked ? "⭐" : "☆"}
        </button>
      </div>

      <div class="arabic" style="font-size:22px; text-align:right; margin-top:10px;">
        ${v.ARABIC}
      </div>

      <div class="urdu" style="
        font-family:'Noto Nastaliq Urdu', serif;
        direction:rtl;
        text-align:right;
        font-size:20px;
        margin-top:10px;
        white-space: normal;
        word-wrap: break-word;
        overflow-wrap: break-word;
      ">
        ${v.URDU}
      </div>

      <div class="roman" style="
        margin-top:10px;
        white-space: normal;
        word-wrap: break-word;
        overflow-wrap: break-word;
      ">
        <b>Roman Urdu:</b> ${v["ROMAN URDU"]}
      </div>

      <div class="english" style="
        margin-top:5px;
        white-space: normal;
        word-wrap: break-word;
        overflow-wrap: break-word;
      ">
        <b>English:</b> ${v.ENGLISH}
      </div>
    `;
    ayatContainer.appendChild(div);
  });

  // Bookmark toggle
  document.querySelectorAll(".bookmark-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const key = e.target.dataset.key;
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        e.target.textContent = "☆";
      } else {
        localStorage.setItem(key, "true");
        e.target.textContent = "⭐";
      }
    });
  });
}

// === Load Bookmarked Ayahs ===
async function loadBookmarks() {
  bookmarksPage.style.display = "block";
  surahListPage.style.display = "none";
  surahDetailPage.style.display = "none";
  bookmarkedAyahs.innerHTML = "<p>Loading...</p>";

  if (!data.length) {
    data = await fetchSheetData();
  }

  const keys = Object.keys(localStorage).filter(k => k.includes("_"));
  if (!keys.length) {
    bookmarkedAyahs.innerHTML = "<p>No bookmarked ayahs yet.</p>";
    return;
  }

  bookmarkedAyahs.innerHTML = "";
  keys.forEach(key => {
    const [surah, ayah] = key.split("_");
    const verse = data.find(v => v.SURAH === surah && v.AYAT === ayah);
    if (verse) {
      const div = document.createElement("div");
      div.className = "ayah";
      div.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong>${verse.SURAH} — Ayah ${verse.AYAT}</strong>
          <button class="remove-bookmark" data-key="${key}" style="border:none; background:none; color:red; font-size:16px; cursor:pointer;">❌</button>
        </div>

        <div class="arabic" style="font-size:22px; text-align:right;">${verse.ARABIC}</div>
        <div class="urdu" style="
          font-family:'Noto Nastaliq Urdu', serif;
          direction:rtl;
          text-align:right;
          font-size:20px;
          white-space: normal;
          word-wrap: break-word;
          overflow-wrap: break-word;
        ">${verse.URDU}</div>
        <div class="roman" style="
          margin-top:8px;
          white-space: normal;
          word-wrap: break-word;
          overflow-wrap: break-word;
        "><b>Roman Urdu:</b> ${verse["ROMAN URDU"]}</div>
        <div class="english" style="
          white-space: normal;
          word-wrap: break-word;
          overflow-wrap: break-word;
        "><b>English:</b> ${verse.ENGLISH}</div>

        <button class="open-surah" data-surah="${verse.SURAH}" style="margin-top:8px;">📖 Open Surah</button>
        <hr>
      `;
      bookmarkedAyahs.appendChild(div);
    }
  });

  // Handle remove + open
  document.querySelectorAll(".remove-bookmark").forEach(btn =>
    btn.addEventListener("click", e => {
      const key = e.target.dataset.key;
      localStorage.removeItem(key);
      loadBookmarks();
    })
  );

  document.querySelectorAll(".open-surah").forEach(btn =>
    btn.addEventListener("click", e => {
      const surahName = e.target.dataset.surah;
      loadSurahDetails(1, surahName);
    })
  );
}


// === Navigation Buttons ===
homeBtn.addEventListener("click", () => {
  surahListPage.style.display = "block";
  surahDetailPage.style.display = "none";
  bookmarksPage.style.display = "none";
});
bookmarksBtn.addEventListener("click", loadBookmarks);
backBtn.addEventListener("click", () => {
  surahListPage.style.display = "block";
  surahDetailPage.style.display = "none";
});
backFromBookmarks.addEventListener("click", () => {
  surahListPage.style.display = "block";
  bookmarksPage.style.display = "none";
});

// === Initialize ===
(async () => {
  data = await fetchSheetData();
  loadSurahList();
})();