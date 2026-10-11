/* ============================================================
   دفتر دانية — على الهواء
   Moomken Media Center · personal growth tracker (Oct–Dec 2026)
   Single static page. No build step, no backend.
   Progress syncs through a private GitHub Gist (same model as Hadeel's tracker).
   ============================================================ */
(function () {
'use strict';

/* ============================================================
   1 · CONTENT — everything the manager may want to edit
   ============================================================ */

var EMPLOYEE = { name: 'دانية', en: 'Dania' };
var MANAGER_LABEL = 'المشرف';
var MANAGER_PIN = '2001';

/* season: Sunday 11 Oct → Thursday 31 Dec 2026 (12 weeks) */
var START = new Date(2026, 9, 11);   /* months are 0-based → 9 = October */
var END   = new Date(2026, 11, 31, 23, 59);

var AJ = 'https://elearning.aljazeera.net/ar/courses/';
var AJP = 'https://institute.aljazeera.net/sites/default/files/';
var OD = 'https://moomken-my.sharepoint.com/personal/a_abukhutwah_moomken_org/Documents/Dania%20Library/';   /* Dania Library folder in Ayman's Moomken OneDrive (shared with Dania) */

var TAGS = {
  ccc: { l: 'Creative Copywriter', c: 'tag-ccc' },
  sfs: { l: 'Strategy School',     c: 'tag-sfs' },
  ar:  { l: 'رفيق عربي',     c: 'tag-ar' },
  mm:  { l: 'تطبيق على ممكن',      c: 'tag-moomken' }
};
var KIND = {
  lesson: 'درس', practice: 'تمرين', review: 'جلسة ملاحظات', mission: 'مهمة',
  project: 'مشروع', milestone: 'محطة كبيرة', read: 'قراءة', write: 'كتابة'
};

/* ---------- the chapters ----------
   task fields: id · c (course tag) · k (kind) · w (week 1–12) · t (text)
                m (applied on real Moomken work) · sub (can attach a link) · url (opens a free course) */
var CHAPTERS = [
  {
    id: 'P', n: 0, prologue: true, name: 'المقدّمة', en: 'Prologue', weeks: null,
    course: 'ما سلّمتِه قبل أن نبدأ',
    desc: 'قبل الفصل الأول كتبتِ أصدق صفحتين: رسالتك إلى دانية الصغيرة، وخريطة المهارات التي تحلمين ببنائها. هاتان الصفحتان هما أساس كل ما في هذا الدفتر — وقد سُلِّمتا واعتُمدتا.',
    read: [],
    tasks: [
      { id: 'p1', c: 'mm', k: 'write', t: '«أنا وأنا» — رسالتك إلى نفسك: من كنتِ، وما الذي تغيّر، ومن تريدين أن تصبحي', pre: 1 },
      { id: 'p2', c: 'mm', k: 'write', t: 'خريطة الشغف — المجالات والدورات التي تريدين التوسّع فيها', pre: 1 }
    ]
  },
  {
    id: 'C1', n: 1, name: 'الصفحة الأولى', en: 'The First Page', weeks: [1, 2],
    course: 'Creative Copywriter Course · Section 1 (1.1 – 1.3)',
    desc: 'نبدأ من أنتِ: لماذا تكتبين، ولمن، وبأي صوت. في نهاية هذا الفصل يكون لـ«ممكن» دليلُ نبرةٍ مكتوب بقلمك — مرجعٌ يعود إليه الفريق كلّه.',
    read: [{ b: 'tools' }, { b: 'edit' }, { b: 'creativity' }],
    tasks: [
      { id: 'c1a', c: 'ccc', k: 'mission',  w: 1, t: 'انطلاق: شاهدي «Onboarding Guide» وافتحي دفتر الدورة ccc-workbook.pdf واكتبي هدفك الشخصي من هذا الموسم في سطرين', sub: 1 },
      { id: 'c1b', c: 'ccc', k: 'lesson',   w: 1, t: '1.1 Story Time — قصة المدرّبة وكيف أصبحت كاتبة إعلانية' },
      { id: 'c1c', c: 'ccc', k: 'practice', w: 1, t: 'تمرين Story Time: صفحة عن مخاوفك وشكوكك ككاتبة… ثم حلٌّ واحد لكلٍّ منها', sub: 1 },
      { id: 'c1d', c: 'ccc', k: 'lesson',   w: 1, t: '1.2 Copywriting 101 — أنواع الكتابة الإعلانية وأين تُستخدم' },
      { id: 'c1e', c: 'ccc', k: 'practice', w: 2, m: 1, t: 'تمرين «عامّة أم متخصّصة؟»: اكتبي قائمة بكل أنواع النصوص التي تحتاجها ممكن منك (منشورات توعوية، سكربتات، حملات، رسائل للشركاء…) ورتّبيها حسب الأولوية', sub: 1 },
      { id: 'c1f', c: 'ccc', k: 'lesson',   w: 2, t: '1.3 Tone and Techniques — النبرة والأساليب' },
      { id: 'c1g', c: 'ccc', k: 'project',  w: 2, m: 1, t: 'Tone of Voice Audit: «دليل نبرة صوت ممكن» في صفحة واحدة — من نحن حين نكتب؟ ماذا نقول، وماذا لا نقول أبدًا؟', sub: 1 },
      { id: 'c1h', c: 'ar',  k: 'lesson',   w: 2, t: 'الجزيرة: «الإيجاز في الكتابة الصحفية» — 99 دقيقة', url: AJ + 'course-77' },
      { id: 'c1i', c: 'mm',  k: 'review',   w: 2, t: 'جلسة ملاحظات ودّية مع المشرف على دليل النبرة' }
    ]
  },
  {
    id: 'C2', n: 2, name: 'المسوّدة', en: 'The Draft', weeks: [3, 4],
    course: 'Creative Copywriter Course · Section 1 (1.4 – 1.5) + Workshop',
    desc: 'من الصفحة البيضاء إلى نصٍّ يعمل: العملية الإبداعية، ثم «البريف» — كيف تكتبين إعلانًا، ورسالة بريد، وعنوانًا رئيسيًا… كلها على مشاريع ممكن الحقيقية لا على عميلٍ متخيَّل.',
    read: [{ b: 'digital' }, { b: 'ads' }, { b: 'ideas' }, { b: 'seduce' }],
    tasks: [
      { id: 'c2a', c: 'ccc', k: 'lesson',   w: 3, t: '1.4 Creative Process — كيف تُطلقين الإبداع ثم تروّضينه' },
      { id: 'c2b', c: 'ccc', k: 'practice', w: 3, m: 1, t: 'جرّبي العملية الإبداعية على منشور توعوي حقيقي: 20 عنوانًا سريعًا قبل أن تختاري واحدًا', sub: 1 },
      { id: 'c2c', c: 'ccc', k: 'lesson',   w: 3, t: '1.5 The Copy Brief — قراءة البريف والكتابة عليه' },
      { id: 'c2d', c: 'ccc', k: 'practice', w: 3, m: 1, t: 'Brief 1: إعلان سوشيال ميديا + كابشن لحملة من حملات ممكن', sub: 1 },
      { id: 'c2e', c: 'ccc', k: 'practice', w: 4, m: 1, t: 'Brief 2: رسالة بريد إلكتروني لشركاء ممكن (العنوان + نص المعاينة + المتن)', sub: 1 },
      { id: 'c2f', c: 'ccc', k: 'practice', w: 4, m: 1, t: 'Brief 3: عنوان رئيسي (Hero headline) وعنوان فرعي لصفحة مشروع أو حملة', sub: 1 },
      { id: 'c2g', c: 'ccc', k: 'lesson',   w: 4, t: 'Workshop: How to be a stronger writer (at any level)' },
      { id: 'c2h', c: 'ar',  k: 'lesson',   w: 4, t: 'الجزيرة: «لكل منصة خصوصيتها.. كيف نكتب لجمهور الميديا الاجتماعية؟» — 243 دقيقة', url: AJ + 'course-3908' },
      { id: 'c2i', c: 'mm',  k: 'review',   w: 4, t: 'جلسة نقد على البريفات الثلاثة' }
    ]
  },
  {
    id: 'C3', n: 3, name: 'البصيرة', en: 'The Insight', weeks: [5, 6],
    course: 'Strategy Finishing School · 01 – 03',
    desc: 'الكاتبة الإعلانية الجيدة لا تبدأ بالكلمات بل بالناس. هنا تتعلّمين البحث، وكيف تلتقطين «البصيرة» — تلك الحقيقة الإنسانية الصغيرة التي تجعل الرسالة التوعوية تصل.',
    read: [{ b: 'human' }, { b: 'audience' }, { b: 'behav' }, { b: 'kahneman' }],
    tasks: [
      { id: 'c3a', c: 'sfs', k: 'mission',  w: 5, t: 'تجهيز مجلد Strategy Finishing School وتصفّح الوحدات (بعد اكتمال التحميل)' },
      { id: 'c3b', c: 'sfs', k: 'lesson',   w: 5, t: '01 · Strategy Fundamentals — ما الاستراتيجية أصلًا؟' },
      { id: 'c3c', c: 'sfs', k: 'lesson',   w: 5, t: '02 · Research — كيف نبحث عن الجمهور' },
      { id: 'c3d', c: 'sfs', k: 'practice', w: 6, m: 1, t: 'بحث جمهور حقيقي: 5 محادثات قصيرة مع أشخاص من الفئة المستهدفة لإحدى حملات ممكن + ملخّص ما سمعتِه', sub: 1 },
      { id: 'c3e', c: 'sfs', k: 'lesson',   w: 6, t: '03 · Insights — من المعلومة إلى البصيرة' },
      { id: 'c3f', c: 'sfs', k: 'practice', w: 6, m: 1, t: 'اكتبي 3 بصائر عن هذا الجمهور بصيغة: «نعرف أنّ… لكنّ… لأنّ…»', sub: 1 },
      { id: 'c3g', c: 'ar',  k: 'lesson',   w: 6, t: 'الجزيرة: «وراء كل لاجئ قصة.. السرد الصحفي للقضايا الإنسانية» — 82 دقيقة', url: AJ + 'course-69' },
      { id: 'c3h', c: 'mm',  k: 'review',   w: 6, t: 'جلسة نقاش: أيّ البصائر أقوى؟ ولماذا؟' }
    ]
  },
  {
    id: 'C4', n: 4, name: 'الموجز', en: 'The Brief', weeks: [7, 8],
    course: 'Strategy Finishing School · 04 · 14 · 05 · 06',
    desc: 'تحويل البصيرة إلى «موجز إبداعي» يفهمه المصمّم والمونتير والشريك في صفحةٍ واحدة، ثم إلى خطة تواصل: ماذا نقول، وأين، ومتى. وفي آخر الفصل… أول عرضٍ لكِ أمام جمهور صغير.',
    read: [{ b: 'opinion' }, { b: 'brand' }, { b: 'marketing' }],
    tasks: [
      { id: 'c4a', c: 'sfs', k: 'lesson',   w: 7, t: '04 · Briefing — أساسيات كتابة الموجز' },
      { id: 'c4b', c: 'sfs', k: 'lesson',   w: 7, t: '14 · Creative Briefing — الموجز الإبداعي (استعيني بقالب 17 · Planners Template)' },
      { id: 'c4c', c: 'sfs', k: 'project',  w: 7, m: 1, t: 'Creative Brief كامل لحملة توعوية من ممكن — في صفحة واحدة', sub: 1 },
      { id: 'c4d', c: 'sfs', k: 'lesson',   w: 8, t: '05 · Brand Strategy — استراتيجية العلامة' },
      { id: 'c4e', c: 'sfs', k: 'lesson',   w: 8, t: '06 · Communications Planning — تخطيط الاتصال' },
      { id: 'c4f', c: 'sfs', k: 'practice', w: 8, m: 1, t: 'خطة تواصل مصغّرة للحملة نفسها: الرسالة، القنوات، التوقيت', sub: 1 },
      { id: 'c4g', c: 'ar',  k: 'lesson',   w: 8, t: 'الجزيرة: «من الفكرة إلى النشر.. كيف تصنع قصتك الرقمية؟» — 110 دقائق', url: AJ + 'course-183' },
      { id: 'c4h', c: 'mm',  k: 'milestone',w: 8, t: 'أول «مؤتمر» صغير: اعرضي البريف وخطة التواصل على المشرف في 10 دقائق' }
    ]
  },
  {
    id: 'C5', n: 5, name: 'الملف', en: 'The Portfolio', weeks: [9, 10],
    course: 'Creative Copywriter Course · Section 2 + Strategy School 09 · 11',
    desc: 'حان وقت أن تري أعمالك مجتمعةً: ملفُّ أعمالٍ أول، ونبذةٌ تعريفية بقلمك، ومهاراتٌ متقدّمة في كتابة العلامة. ومن مدرسة الاستراتيجية: كيف تقنعين الآخرين بفكرتك بلباقة.',
    read: [{ b: 'narrative' }, { b: 'ethics' }],
    tasks: [
      { id: 'c5a', c: 'ccc', k: 'lesson',   w: 9,  t: '2.1 What Goes Into a Copy Portfolio' },
      { id: 'c5b', c: 'ccc', k: 'lesson',   w: 9,  t: '2.2 How to Pitch Yourself' },
      { id: 'c5c', c: 'ccc', k: 'practice', w: 9,  t: '«عنّي»: نبذة تعريفية بقلمك — بالعربية، ونسخة إنجليزية قصيرة', sub: 1 },
      { id: 'c5d', c: 'ccc', k: 'lesson',   w: 9,  t: '2.3 Show Your Stuff + 2.4a Next-Level Copywriting Skills' },
      { id: 'c5e', c: 'ccc', k: 'lesson',   w: 10, t: '2.5 Brand Copywriting + 2.6 Body-Building' },
      { id: 'c5f', c: 'sfs', k: 'lesson',   w: 10, t: '09 · Diplomacy + 11 · Selling Strategy — كيف تبيعين فكرتك' },
      { id: 'c5g', c: 'ccc', k: 'project',  w: 10, m: 1, t: 'ملف أعمالك الأول: 5 قطع من أعمالك في ممكن + قصة كل قطعة (المشكلة ← الفكرة ← النتيجة)', sub: 1 },
      { id: 'c5h', c: 'mm',  k: 'review',   w: 10, t: 'جلسة نقد على ملف الأعمال' }
    ]
  },
  {
    id: 'C6', n: 6, name: 'على المنصّة', en: 'On Stage', weeks: [11, 12],
    course: 'المشروع الختامي + Creative Copywriter Course · Section 3 (مختارات)',
    desc: 'كل ما تعلّمتِه في عملٍ واحد: حملة توعوية حقيقية من البصيرة إلى النص — ثم تقفين بها أمام فريق المركز الإعلامي كمتحدّثةٍ في مؤتمر. هذا هو الفصل الذي كانت دانية الصغيرة تنتظره.',
    read: [{ b: 'body' }, { b: 'voice' }, { b: 'tvstory' }],
    tasks: [
      { id: 'c6a', c: 'ccc', k: 'lesson',   w: 11, t: '3.2 How to Pitch Clients + 3.5 Dealing With Clients — «عملاؤك» هنا: الشركاء والمانحون وفرق المشاريع' },
      { id: 'c6b', c: 'ccc', k: 'lesson',   w: 11, t: 'Workshop: Client Pitch Live Demo — عرضٌ حيّ لتقديم فكرة' },
      { id: 'c6c', c: 'mm',  k: 'project',  w: 11, m: 1, t: 'الحملة الختامية: بصيرة ← موجز ← نصوص (3 منشورات + كابشن + سكربت فيديو قصير) لحملة حقيقية من ممكن', sub: 1 },
      { id: 'c6d', c: 'mm',  k: 'review',   w: 12, t: 'بروفة العرض أمام الكاميرا + ملاحظات المشرف على الإلقاء' },
      { id: 'c6e', c: 'mm',  k: 'milestone',w: 12, t: '🎙️ «على المنصّة»: قدّمي الحملة أمام فريق المركز الإعلامي كمتحدّثة مؤتمر (10 – 15 دقيقة)' },
      { id: 'c6f', c: 'mm',  k: 'write',    w: 12, t: 'صفحة الختام: «دانية في ديسمبر» — ماذا تغيّر منذ «أنا وأنا»؟', sub: 1 }
    ]
  }
];

/* ---------- the library ---------- */
var SHELVES = [
  { id: 'free', ar: 'الأدلّة الأساسية — اضغطي واقرئي', en: 'Core Guides · PDF' },
  { id: 'hin',  ar: 'كتبٌ عربية كاملة — من إصدارات مؤسسة هنداوي', en: 'Hindawi Books · PDF' },
  { id: 'own',  ar: 'أدلّة مرافقة — للتعمّق', en: 'Companion Guides · PDF' },
  { id: 'kit',  ar: 'مواد دورتك', en: 'Your Course Kit · PDF' }
];

var ODV = 'https://moomken-my.sharepoint.com/personal/a_abukhutwah_moomken_org/_layouts/15/onedrive.aspx?parent=%2Fpersonal%2Fa_abukhutwah_moomken_org%2FDocuments%2FDania%20Library&id=%2Fpersonal%2Fa_abukhutwah_moomken_org%2FDocuments%2FDania%20Library%2F';
function od(name) { return ODV + encodeURIComponent(name); }

/* every book on the shelf opens straight to a PDF:
   shelf 1 + 3 → copies in the shared «Dania Library» OneDrive folder
   shelf 2     → free official PDFs published by the Al Jazeera Media Institute */
var BOOKS = [
  /* shelf 1 — core guides (OneDrive) */
  { id: 'digital', s: 'free', t: 'الكتابة لمنصات الإعلام الرقمي', a: 'معهد الجزيرة للإعلام · 2023', c: '#1F3A5F', h: 222, w: 50, ch: 2,
    d: 'كيف تختلف الكتابة لكل منصة رقمية: العناوين، الإيجاز، والجمهور الذي يقرأ على الهاتف.', url: od('01-الكتابة-لمنصات-الإعلام-الرقمي.pdf'), pdf: 1 },
  { id: 'tools', s: 'free', t: 'أدوات كتابة القصة', a: 'معهد الجزيرة للإعلام · 2024', c: '#B4552F', h: 200, w: 46, ch: 1,
    d: 'صندوق أدوات السرد: البداية، الشخصية، التفاصيل، والإيقاع — بلغة عملية.', url: od('02-أدوات-كتابة-القصة.pdf'), pdf: 1 },
  { id: 'human', s: 'free', t: 'دليل إلى القصة الصحفية الإنسانية', a: 'معهد الجزيرة للإعلام · 2025', c: '#2F5D50', h: 232, w: 54, ch: 3,
    d: 'كيف تُروى قضايا الناس بكرامةٍ وتعاطف — قلب الكتابة التوعوية.', url: od('03-دليل-إلى-القصة-الصحفية-الإنسانية.pdf'), pdf: 1 },
  { id: 'edit', s: 'free', t: 'دليل إلى التحرير الصحفي', a: 'معهد الجزيرة للإعلام · 2025', c: '#C8962E', fg: '#2A1B05', h: 214, w: 48, ch: 1,
    d: 'التحرير بعد الكتابة: كيف تُصقَل الجملة ويُحذف الزائد قبل النشر.', url: od('04-دليل-إلى-التحرير-الصحفي.pdf'), pdf: 1 },
  { id: 'opinion', s: 'free', t: 'دليل إلى كتابة مقال الرأي', a: 'معهد الجزيرة للإعلام · 2024', c: '#5B3557', h: 206, w: 46, ch: 4,
    d: 'فنّ الإقناع بالحجة: كيف تبنين رأيًا يقنع القارئ — وهي مهارة الكاتبة الإعلانية الأولى.', url: od('05-دليل-إلى-كتابة-مقال-الرأي.pdf'), pdf: 1 },
  { id: 'misinfo', s: 'free', t: 'الصحافة التفسيرية ومحاربة التضليل', a: 'معهد الجزيرة للإعلام · 2023', c: '#2B6F77', h: 236, w: 54, ch: 3, fs: 13.5,
    d: 'كيف يشرح الإعلام الحقيقة ببساطة في وجه التضليل — في صميم رسالة ممكن التوعوية.', url: od('06-الصحافة-التفسيرية-ومحاربة-التضليل.pdf'), pdf: 1 },
  { id: 'interviews', s: 'free', t: 'المقابلات الإعلامية', a: 'إستراتيجية السؤال وإدارة التفاعل · 2026', c: '#7A2E3A', h: 218, w: 50, ch: 6,
    d: 'إدارة الحوار وطرح السؤال الصحيح — لما قلتِ إنك تريدين إتقانه: «إدارة الحوارات».', url: od('07-المقابلات-الإعلامية.pdf'), pdf: 1 },
  { id: 'body', s: 'free', t: 'لغة الجسد في الإعلام', a: 'معهد الجزيرة للإعلام · 2026', c: '#22252B', fg: '#F2C46D', h: 196, w: 46, ch: 6, lean: 1,
    d: 'الحضور أمام الجمهور والكاميرا: الوقفة، النظرة، اليدان — رفيقك قبل يوم «على المنصّة».', url: od('08-لغة-الجسد-في-الإعلام.pdf'), pdf: 1 },

  /* shelf — Hindawi free books (OneDrive copies; free Arabic editions published legally by Hindawi Foundation) */
  { id: 'ads', s: 'hin', t: 'الإعلانات والتصميم', a: 'ابتكار الأفكار الإبداعية في وسائل الإعلام · هنداوي', c: '#B4552F', h: 228, w: 54, ch: 2,
    d: 'كيف تولد الفكرة الإعلانية وكيف تتحوّل إلى نصٍّ وصورة — أقرب كتاب لعمل الكاتبة الإعلانية.', url: od('11-الإعلانات-والتصميم.pdf'), pdf: 1 },
  { id: 'seduce', s: 'hin', t: 'إغواء العقل الباطن', a: 'سيكولوجية التأثير العاطفي في الدعاية · هنداوي', c: '#5B3557', h: 214, w: 50, ch: 2,
    d: 'لماذا تؤثر فينا بعض الرسائل دون أن ننتبه؟ علم النفس وراء الإعلان المؤثّر.', url: od('12-إغواء-العقل-الباطن.pdf'), pdf: 1 },
  { id: 'ideas', s: 'hin', t: 'ماكينة الأفكار', a: 'كيف يمكن إنتاج الأفكار · هنداوي', c: '#E0B23A', fg: '#2A1B05', h: 200, w: 48, ch: 2,
    d: 'طرق عملية لتوليد الأفكار بانتظام بدل انتظار الإلهام.', url: od('17-ماكينة-الأفكار.pdf'), pdf: 1 },
  { id: 'creativity', s: 'hin', t: 'مَن قتل الإبداع؟', a: 'وكيف يمكن إعادته للحياة · هنداوي', c: '#2B6F77', h: 206, w: 48, ch: 1,
    d: 'سبع استراتيجيات تجعلك وفريقك أكثر إبداعًا — بداية لطيفة للفصل الأول.', url: od('18-من-قتل-الإبداع.pdf'), pdf: 1 },
  { id: 'audience', s: 'hin', t: 'الجمهور', a: 'التسويق في عالم رقمي · هنداوي', c: '#1F3A5F', h: 222, w: 52, ch: 3,
    d: 'من هو جمهورك وكيف يتصرف على الإنترنت — أساس البحث والبصيرة.', url: od('13-الجمهور-التسويق-في-عالم-رقمي.pdf'), pdf: 1 },
  { id: 'behav', s: 'hin', t: 'الرؤى السلوكية', a: 'هنداوي', c: '#6B7A3A', h: 190, w: 44, ch: 3,
    d: 'كيف تُستخدم معرفة السلوك البشري لتغيير العادات — جوهر الحملات التوعوية.', url: od('14-الرؤى-السلوكية.pdf'), pdf: 1 },
  { id: 'kahneman', s: 'hin', t: 'التفكير السريع والبطيء', a: 'دانيال كانمان · هنداوي', c: '#3E4A5C', h: 240, w: 60, ch: 3,
    d: 'كيف يقرّر الناس فعلًا: نظام سريع حدسي ونظام بطيء متأنٍّ — مفتاح فهم الجمهور.', url: od('15-التفكير-السريع-والبطيء.pdf'), pdf: 1 },
  { id: 'brand', s: 'hin', t: 'أسرار التعلق بالعلامات التجارية', a: 'هنداوي', c: '#7A2E3A', h: 226, w: 52, ch: 4, fs: 13.5,
    d: 'كيف تبني علاقة حقيقية بين الجمهور والعلامة — ينفعك في فصل «الموجز» واستراتيجية العلامة.', url: od('16-أسرار-التعلق-بالعلامات-التجارية.pdf'), pdf: 1 },
  { id: 'marketing', s: 'hin', t: 'التسويق: مقدمة قصيرة جدًّا', a: 'هنداوي', c: '#EADBC0', fg: '#1F2635', h: 196, w: 46, ch: 4, band: 'rgba(180,122,31,.7)', lean: 1,
    d: 'خريطة سريعة لعالم التسويق كله في كتاب صغير.', url: od('19-التسويق-مقدمة-قصيرة-جدا.pdf'), pdf: 1 },

  /* shelf 2 — more free guides (official PDFs) */
  { id: 'narrative', s: 'own', t: 'السرد في الصحافة', a: 'معهد الجزيرة للإعلام · 2021', c: '#E0B23A', fg: '#2A1B05', h: 214, w: 52, ch: 2,
    d: 'كتابٌ كامل عن بناء القصة الصحفية المتأنية — المشهد، الشخصية، والتفاصيل التي تجعل القارئ يكمل.', url: AJP + '2021/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B3%D8%B1%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B5%D8%AD%D8%A7%D9%81%D8%A9.pdf', pdf: 1 },
  { id: 'tvstory', s: 'own', t: 'كيف تحكي القصة في التلفزيون', a: 'معهد الجزيرة للإعلام · 2022', c: '#2E5BFF', h: 226, w: 52, ch: 6,
    d: 'كتابة السكربت والقصة المصوّرة — مباشرةً لسكربتات الفيديو التوعوية.', url: AJP + '2022/%D9%83%D9%8A%D9%81%20%D8%AA%D8%AD%D9%83%D9%8A%20%D8%A7%D9%84%D9%82%D8%B5%D8%A9%20%D9%84%D9%84%D8%AA%D9%84%D9%81%D8%B2%D9%8A%D9%88%D9%86.pdf', pdf: 1 },
  { id: 'voice', s: 'own', t: 'الأداء الصوتي وفنونه', a: 'معهد الجزيرة للإعلام · 2021', c: '#EADBC0', fg: '#1F2635', h: 204, w: 48, ch: 6, band: 'rgba(180,122,31,.7)',
    d: 'صوتك حين تقدّمين: النبرة، الوقفة، والإيقاع — تحضيرٌ لـ«على المنصّة».', url: AJP + '2021/%D8%A7%D9%84%D8%A3%D8%AF%D8%A7%D8%A1%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA%D9%8A%20%D9%88%D9%81%D9%86%D9%88%D9%86%D9%87%20-%20B5%20-%20Final%20-%20Web.pdf', pdf: 1 },
  { id: 'tvjourn', s: 'own', t: 'الصحافة التلفزيونية في تجربة الجزيرة', a: 'معهد الجزيرة للإعلام · 2026', c: '#3E4A5C', h: 240, w: 58, ch: 6, fs: 13.5,
    d: 'من داخل غرفة الأخبار والاستوديو — لحلم الوقوف أمام الكاميرا.', url: AJP + '2026/%D8%A7%D9%84%D8%B5%D8%AD%D8%A7%D9%81%D8%A9%20%D8%A7%D9%84%D8%AA%D9%84%D9%81%D8%B2%D9%8A%D9%88%D9%86%D9%8A%D8%A9%20%D9%81%D9%8A%20%D8%AA%D8%AC%D8%B1%D8%A8%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9.pdf', pdf: 1 },
  { id: 'mojo', s: 'own', t: 'دليل صحافة الموبايل 2.0', a: 'معهد الجزيرة للإعلام · 2022', c: '#6B7A3A', h: 210, w: 48, ch: 5,
    d: 'صناعة المحتوى كاملًا من الهاتف: فكرة، تصوير، ونشر — لما بعد النص.', url: AJP + '2022/Mobile%20Journalism%20Ar%20-%20Web%20%281%29_0.pdf', pdf: 1 },
  { id: 'factcheck', s: 'own', t: 'دليل تدقيق التصريحات والبيانات الرسمية', a: 'معهد الجزيرة للإعلام · 2024', c: '#7A2E3A', h: 230, w: 54, ch: 4, fs: 13.5,
    d: 'كيف تتحقّقين من الأرقام والتصريحات قبل أن تكتبي عنها — أمانة الرسالة التوعوية.', url: AJP + '2024/%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%AF%D9%82%D9%8A%D9%82%20%D8%A7%D9%84%D8%AA%D8%B5%D8%B1%D9%8A%D8%AD%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D8%B3%D9%85%D9%8A%D8%A9%20.pdf', pdf: 1 },
  { id: 'ethics', s: 'own', t: 'أخلاقيات الصحافة في العصر الرقمي', a: 'معهد الجزيرة للإعلام · 2022', c: '#1F2635', fg: '#F4EEE2', h: 222, w: 52, ch: 5, lean: 1,
    d: 'ما يجوز وما لا يجوز حين نكتب عن الناس ونصوّرهم على المنصات الرقمية.', url: AJP + '2022/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A3%D8%AE%D9%84%D8%A7%D9%82%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B5%D8%AD%D8%A7%D9%81%D8%A9%20%D8%A7%D9%84%D8%B5%D8%AD%D8%A7%D9%81%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B9%D8%B5%D8%B1%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A.pdf', pdf: 1 },

  /* shelf 3 — the course kit (OneDrive) */
  { id: 'wb', s: 'kit', t: 'Creative Copywriter Workbook', a: 'ilovecreatives', c: '#2E5BFF', h: 230, w: 62, fs: 13, lat: 1,
    d: 'دفتر تمارين الدورة — ستحتاجينه في كل درس من القسمين 1 و2.', url: od('09-Creative-Copywriter-Workbook.pdf'), pdf: 1 },
  { id: 'pv', s: 'kit', t: 'Passive Voice Cheat Sheet', a: 'ilovecreatives', c: '#F2C46D', fg: '#1F2635', h: 170, w: 44, fs: 12, lat: 1,
    d: 'ورقة مرجعية سريعة لتجنّب المبني للمجهول — علّقيها قرب مكتبك.', url: od('10-Passive-Voice-Cheat-Sheet.png'), pdf: 1 }
];

/* ---------- free Arabic courses (Al Jazeera Media Institute e-learning) ---------- */
var FREE = [
  { t: 'الإيجاز في الكتابة الصحفية', min: 99, ch: 1, d: 'قولي أكثر بكلمات أقل — أول عادة في الكتابة الإعلانية.', url: AJ + 'course-77' },
  { t: 'لكل منصة خصوصيتها.. كيف نكتب لجمهور الميديا الاجتماعية؟', min: 243, ch: 2, d: 'الخطّاف، الكابشن، الجمهور، والقضايا الحساسة على السوشيال ميديا.', url: AJ + 'course-3908' },
  { t: 'وراء كل لاجئ قصة.. السرد الصحفي للقضايا الإنسانية', min: 82, ch: 3, d: 'السرد بتعاطف ومن دون قوالب نمطية — جوهر العمل التوعوي.', url: AJ + 'course-69' },
  { t: 'السرد في الصحافة.. كيف تحكي قصّة متأنية معزَّزة بالمعلومات؟', min: 140, ch: 3, d: 'حين تحتاج الحملة إلى قصة طويلة مدعومة بالأرقام.', url: AJ + 'course-3026' },
  { t: 'من الفكرة إلى النشر.. كيف تصنع قصتك الرقمية؟', min: 110, ch: 4, d: 'من منتج في AJ+: رحلة الفكرة حتى تُنشر.', url: AJ + 'course-183' },
  { t: 'إدارة حسابات إنستغرام', min: 60, ch: 4, d: 'كيف تُدار صفحة بمحتوى متّسق وهوية واضحة.', url: AJ + 'course-78' },
  { t: 'الوسائط المتعددة.. أدواتك لتشكيل سرد قصصي جذاب', min: 140, ch: 5, d: 'كيف يلتقي النص بالصورة والفيديو في قصة واحدة.', url: AJ + 'course-58' },
  { t: 'فن الأداء الصوتي.. كيف يتحوّل النص إلى قصة حية؟', min: 146, ch: 6, d: 'صوتك على المنصّة: الإيقاع، الوقفة، والنبرة.', url: AJ + 'course-63' }
];

/* ---------- later shelf: complementary skills (not now) ---------- */
var LATER = [
  { h: '📷 التصوير والسرد البصري', items: [
    { t: 'من العين إلى العدسة.. أساسيات التصوير الفوتوغرافي', s: 'معهد الجزيرة · 170 دقيقة', l: 'ar', url: AJ + 'course-1933' },
    { t: 'صحافة الهاتف المحمول', s: 'معهد الجزيرة · تصوير ومونتاج بالهاتف', l: 'ar', url: AJ + 'course-76' }
  ] },
  { h: '🎬 المونتاج وصناعة الفيديو', items: [
    { t: 'المونتاج.. رؤية تقنية وإبداعية', s: 'معهد الجزيرة · 67 دقيقة', l: 'ar', url: AJ + 'course-86' },
    { t: 'وثائقي الهاتف المحمول', s: 'معهد الجزيرة · الفكرة والسكربت والمونتاج', l: 'ar', url: AJ + 'course-61' },
    { t: 'DaVinci Resolve — التدريب الرسمي', s: 'Blackmagic Design · كتب ودروس فيديو', l: 'en', url: 'https://www.blackmagicdesign.com/products/davinciresolve/training' }
  ] },
  { h: '🎨 التصميم الجرافيكي', items: [
    { t: 'فوتوشوب — مبتدئ', s: 'معهد الجزيرة', l: 'ar', url: AJ + 'course-83' },
    { t: 'كيف تعالج الصور بفوتوشوب؟', s: 'معهد الجزيرة', l: 'ar', url: AJ + 'course-1549' }
  ] },
  { h: '🎙️ الإلقاء والحضور', items: [
    { t: 'معارف إعلامية — ومنها سلسلة «بلسان فصيح»', s: 'معهد الجزيرة · فيديوهات قصيرة', l: 'ar', url: 'https://institute.aljazeera.net/ar/media-tips' },
    { t: 'مهارات الاتصال', s: 'منصة إدراك', l: 'ar', url: 'https://www.edraak.org/programs/course/comm-vt1_2018/' }
  ] },
  { h: '🧭 الاستراتيجية والتفكير', items: [
    { t: 'مكتبة Strategy Finishing School المفتوحة + بودكاست Starting In Strategy', s: 'Julian Cole · مقالات وتمارين', l: 'en', url: 'https://strategyfinishingschool.com/' },
    { t: 'Field Guide to Human-Centered Design', s: 'IDEO.org · دليل التفكير التصميمي (PDF)', l: 'en', url: 'https://www.designkit.org/resources/1.html' }
  ] },
  { h: '✍️ الكتابة والإنجليزية المهنية', items: [
    { t: 'English for Journalism', s: 'University of Pennsylvania · Coursera', l: 'en', url: 'https://www.coursera.org/learn/journalism' },
    { t: 'Copywriting 101', s: 'Copyblogger · كتاب ومقالات', l: 'en', url: 'https://copyblogger.com/copywriting-101/' },
    { t: 'Content Marketing Certification', s: 'HubSpot Academy · مع شهادة', l: 'en', url: 'https://academy.hubspot.com/content-marketing-training' }
  ] }
];

/* her own words, plus the craft — rotating in the speech bubble */
var QUOTES = [
  'الكتابة تمنحني الفكرة… والسرد يمنحها شكلًا ✦',
  'من التخطيط… إلى التنفيذ.',
  'أصبحتُ أعرف الطريق أكثر، وأعرف نفسي أكثر.',
  'ما زال فينا متّسعٌ للحلم 🎙️',
  'صفحةٌ واحدة كل يوم تكفي — شرطَ أن تكون كل يوم.',
  'الجمهور هو البطل… والرسالة هي المرشد.',
  'اكتبي أولًا، ثم حرّري بلا رحمة.',
  'أعظم تأثير… ذلك الذي يحدث داخلنا.',
  'إنّ مع العسر يسرا.'
];

/* ============================================================
   2 · STATE + PERSISTENCE (GitHub Gist)
   ============================================================ */

var LS_CFG = 'daniaTracker.cfg', LS_STATE = 'daniaTracker.state';
var DEFAULT_FILE = 'dania-progress.json';

var S = {
  statuses: {}, links: {}, finale: 0, updatedAt: 0,
  role: null, gistId: '', token: '', file: DEFAULT_FILE,
  sync: 'local', lastSync: null, open: {}, justDone: {}
};

function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

function loadLocal() {
  try { var c = JSON.parse(lsGet(LS_CFG) || '{}');
    S.role = c.role || null; S.gistId = c.gistId || ''; S.token = c.token || ''; S.file = c.file || DEFAULT_FILE;
  } catch (e) {}
  try { var d = JSON.parse(lsGet(LS_STATE) || '{}');
    S.statuses = d.statuses || {}; S.links = d.links || {}; S.finale = d.finale || 0; S.updatedAt = d.updatedAt || 0;
  } catch (e) {}
}
function saveCfg() {
  lsSet(LS_CFG, JSON.stringify({ role: S.role, gistId: (S.gistId || '').trim(), token: (S.token || '').trim(), file: (S.file || DEFAULT_FILE).trim() }));
}
function payload() { return { statuses: S.statuses, links: S.links, finale: S.finale, updatedAt: S.updatedAt }; }
function saveLocal() { lsSet(LS_STATE, JSON.stringify(payload())); }

var pushTimer = null, pushPending = false;
function setSync(st) { S.sync = st; paintSync(); }

function pull(manual) {
  if (!S.gistId) { if (manual) setSync('local'); return Promise.resolve(); }
  setSync('syncing');
  var h = { Accept: 'application/vnd.github+json' };
  if (S.token) h.Authorization = 'Bearer ' + S.token.trim();
  return fetch('https://api.github.com/gists/' + S.gistId.trim(), { headers: h, cache: 'no-store' })
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (g) {
      var f = g.files && g.files[S.file];
      var remote = f && f.content ? JSON.parse(f.content) : {};
      if ((remote.updatedAt || 0) > S.updatedAt) {
        S.statuses = remote.statuses || {}; S.links = remote.links || {}; S.finale = remote.finale || 0; S.updatedAt = remote.updatedAt || 0;
        saveLocal(); render();
      } else if ((remote.updatedAt || 0) < S.updatedAt) {
        schedulePush();
      }
      S.lastSync = new Date(); setSync('ok');
    })
    .catch(function () { setSync('error'); });
}
function schedulePush() {
  pushPending = true;
  if (pushTimer) clearTimeout(pushTimer);
  pushTimer = setTimeout(push, 1500);
}
function push() {
  pushPending = false;
  if (!S.gistId || !S.token) return;
  setSync('syncing');
  var body = { files: {} };
  body.files[S.file] = { content: JSON.stringify(payload(), null, 2) };
  fetch('https://api.github.com/gists/' + S.gistId.trim(), {
    method: 'PATCH',
    headers: { Accept: 'application/vnd.github+json', Authorization: 'Bearer ' + S.token.trim(), 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(function (r) {
    if (!r.ok) throw new Error('HTTP ' + r.status);
    S.lastSync = new Date(); setSync('ok');
  }).catch(function () { setSync('error'); });
}
function touch() { S.updatedAt = Date.now(); saveLocal(); render(); schedulePush(); }
function setStatus(id, st) {
  S.statuses[id] = st;
  if (st === 'done') S.justDone[id] = 1;
  touch();
}
function setLink(id, url) { if (url) S.links[id] = url; else delete S.links[id]; touch(); }

/* ============================================================
   3 · DATES + DERIVED DATA
   ============================================================ */

var DAY = 864e5;
function weekStart(w) { return new Date(START.getTime() + (w - 1) * 7 * DAY); }
function weekEnd(w) { return w === 12 ? new Date(2026, 11, 31) : new Date(START.getTime() + ((w - 1) * 7 + 6) * DAY); }
function fmt(d) { return d.getDate() + '/' + (d.getMonth() + 1); }
var MONTHS_AR = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
var MONTHS_EN = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
function fmtLong(d) { return d.getDate() + ' ' + MONTHS_AR[d.getMonth()]; }

function currentWeek() {
  var now = new Date();
  if (now < START) return 0;
  if (now > END) return 13;
  return Math.min(12, Math.floor((now - START) / (7 * DAY)) + 1);
}

function stat(t) {
  var s = S.statuses[t.id];
  if (s) return s;
  return t.pre ? 'done' : 'todo';
}

function computed() {
  var out = { chs: [], done: 0, pending: 0, total: 0, byWeek: {} };
  for (var w = 1; w <= 12; w++) out.byWeek[w] = { done: 0, total: 0 };
  CHAPTERS.forEach(function (ch) {
    var d = 0, p = 0;
    ch.tasks.forEach(function (t) {
      var st = stat(t);
      if (!ch.prologue) { out.total++; if (st === 'done') out.done++; if (st === 'pending') out.pending++; }
      if (st === 'done') d++; else if (st === 'pending') p++;
      if (t.w) { out.byWeek[t.w].total++; if (st === 'done') out.byWeek[t.w].done++; }
    });
    out.chs.push({ ch: ch, done: d, pending: p, total: ch.tasks.length,
      pct: ch.tasks.length ? Math.round(d / ch.tasks.length * 100) : 0,
      complete: d === ch.tasks.length });
  });
  out.pct = out.total ? Math.round(out.done / out.total * 100) : 0;
  var idx = out.chs.findIndex(function (x) { return !x.complete; });
  out.currentIdx = idx === -1 ? out.chs.length - 1 : idx;
  out.allDone = idx === -1;
  out.lit = out.chs.filter(function (x) { return x.complete && !x.ch.prologue; }).length;
  return out;
}

/* ============================================================
   4 · RENDER
   ============================================================ */

var $ = function (s) { return document.querySelector(s); };
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
function safeUrl(u) { u = String(u || '').trim(); return /^https?:\/\//i.test(u) ? u : ''; }

var prevComplete = null;

function render() {
  var C = computed();
  var nowComplete = C.chs.filter(function (x) { return x.complete; }).map(function (x) { return x.ch.id; });
  if (prevComplete) {
    nowComplete.forEach(function (id) {
      if (prevComplete.indexOf(id) === -1) {
        var ch = CHAPTERS.filter(function (c) { return c.id === id; })[0];
        if (ch && !ch.prologue) setTimeout(function () { celebrate(ch, C); }, 260);
      }
    });
  }
  prevComplete = nowComplete;

  renderStats(C); renderVU(C); renderWeek(C); renderRun(C); renderRig(C);
  renderChapters(C); renderManager(C); renderFinale(C);
  paintSync();
  S.justDone = {};
}

function paintSync() {
  var map = {
    local:   { c: '#8a96a8', t: 'حفظ محلي فقط — افتحي «إعدادات الحفظ» لتفعيل المزامنة' },
    idle:    { c: '#E2A13A', t: 'جاهز للمزامنة' },
    syncing: { c: '#E2A13A', t: 'جارٍ المزامنة…' },
    ok:      { c: '#7FB37A', t: 'متزامن' + (S.lastSync ? ' · آخر مزامنة ' + S.lastSync.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) : '') },
    error:   { c: '#E0473A', t: 'تعذّرت المزامنة — تحقّقي من الـ Gist ID والتوكن واسم الملف' }
  };
  var m = map[S.sync] || map.local;
  var d = $('#syncDot'); if (d) { d.style.background = m.c; d.classList.toggle('pulse', S.sync === 'syncing'); }
  var t = $('#syncTxt'); if (t) t.textContent = m.t;
  var rb = $('#roleBadge'); if (rb) rb.textContent = S.role === 'dania' ? EMPLOYEE.name + ' 🎙️' : S.role === 'manager' ? MANAGER_LABEL : '—';
}

function renderStats(C) {
  var el = $('#stats'); if (!el) return;
  var wk = currentWeek();
  var cells = [
    { c: 's1', v: C.done + '/' + C.total, l: 'مهمة مُنجَزة' },
    { c: 's2', v: C.lit + '/6', l: 'أضواء مُشعَلة' },
    { c: 's3', v: C.pending, l: 'قيد المراجعة' },
    { c: 's4', v: wk === 0 ? '—' : wk > 12 ? '✓' : wk + '/12', l: 'الأسبوع' }
  ];
  el.innerHTML = cells.map(function (x) {
    return '<div class="stat ' + x.c + '"><b data-count="' + esc(x.v) + '">' + esc(x.v) + '</b><span>' + x.l + '</span></div>';
  }).join('');
}

/* vintage VU meter: the needle shows overall progress */
function renderVU(C) {
  var el = $('#vu'); if (!el) return;
  var cx = 150, cy = 150, R = 118, ticks = '', labels = '';
  for (var i = 0; i <= 10; i++) {
    var ang = (-60 + i * 12) * Math.PI / 180;
    var x1 = cx + Math.sin(ang) * R, y1 = cy - Math.cos(ang) * R;
    var x2 = cx + Math.sin(ang) * (R - (i % 5 ? 9 : 15)), y2 = cy - Math.cos(ang) * (R - (i % 5 ? 9 : 15));
    ticks += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" stroke="' + (i >= 9 ? '#C8372B' : '#3A3226') + '" stroke-width="' + (i % 5 ? 1.6 : 2.6) + '"/>';
    if (i % 2 === 0) {
      var lx = cx + Math.sin(ang) * (R - 30), ly = cy - Math.cos(ang) * (R - 30);
      labels += '<text x="' + lx.toFixed(1) + '" y="' + (ly + 4).toFixed(1) + '" text-anchor="middle" font-family="Gotham" font-size="11" font-weight="700" fill="' + (i >= 9 ? '#C8372B' : '#3A3226') + '">' + (i * 10) + '</text>';
    }
  }
  var a0 = -60 * Math.PI / 180, a1 = 60 * Math.PI / 180, ar = 48 * Math.PI / 180;
  function pt(a, r) { return (cx + Math.sin(a) * r).toFixed(1) + ' ' + (cy - Math.cos(a) * r).toFixed(1); }
  var arc = '<path d="M ' + pt(a0, R) + ' A ' + R + ' ' + R + ' 0 0 1 ' + pt(ar, R) + '" stroke="#3A3226" stroke-width="2" fill="none"/>' +
            '<path d="M ' + pt(ar, R) + ' A ' + R + ' ' + R + ' 0 0 1 ' + pt(a1, R) + '" stroke="#C8372B" stroke-width="5" fill="none"/>';
  var deg = -60 + C.pct * 1.2;
  el.innerHTML =
    '<div class="vu-face"><svg viewBox="0 18 300 150">' + arc + ticks + labels +
      '<text x="150" y="128" text-anchor="middle" font-family="Gotham" font-size="13" font-weight="900" fill="#3A3226" letter-spacing="3">VU</text>' +
      '<g class="vu-needle" style="transform:rotate(' + deg.toFixed(1) + 'deg)"><line x1="150" y1="150" x2="150" y2="44" stroke="#1F2635" stroke-width="2.4" stroke-linecap="round"/></g>' +
      '<circle cx="150" cy="150" r="10" fill="#1F2635"/><circle cx="150" cy="150" r="4" fill="#E2A13A"/>' +
    '</svg></div>' +
    '<div class="vu-lbl"><span>PROGRESS</span><b>' + C.pct + '%</b><span>مستوى الكتاب</span></div>';
}

/* this week's focus */
function renderWeek(C) {
  var el = $('#weekCard'); if (!el) return;
  var wk = currentWeek();
  var w = Math.max(1, Math.min(12, wk));
  var tasks = [];
  CHAPTERS.forEach(function (ch) { ch.tasks.forEach(function (t) { if (t.w === w) tasks.push({ t: t, ch: ch }); }); });
  /* overdue items from earlier weeks still open */
  var late = [];
  if (wk > 1) CHAPTERS.forEach(function (ch) { ch.tasks.forEach(function (t) { if (t.w && t.w < w && stat(t) === 'todo') late.push({ t: t, ch: ch }); }); });
  var ws = weekStart(w), we = weekEnd(w);
  var head = wk === 0 ? 'يبدأ الموسم الأحد 11 أكتوبر' : wk > 12 ? 'اكتمل الموسم — ما أجمل هذه الرحلة ✦' : 'مهام هذا الأسبوع';
  var li = function (x) {
    var st = stat(x.t);
    return '<li class="' + st + '" data-jump="' + x.ch.id + '">' + pageIcon(st) + '<span>' + esc(x.t.t) + '</span></li>';
  };
  el.innerHTML =
    '<div class="wk-cal"><div class="m">' + MONTHS_EN[ws.getMonth()] + '</div><div class="d">' + ws.getDate() + '</div><div class="w">الأسبوع ' + w + '</div></div>' +
    '<div><div class="wk-head"><h3>' + head + '</h3><span class="rng">' + fmtLong(ws) + ' — ' + fmtLong(we) + '</span></div>' +
    (tasks.length ? '<ul class="wk-list">' + tasks.map(li).join('') + '</ul>' : '<div class="wk-empty">لا مهام مسجّلة لهذا الأسبوع.</div>') +
    (late.length ? '<div class="wk-head" style="margin-top:12px"><h3 style="font-size:16px;color:var(--gold)">من الأسابيع الماضية (' + late.length + ')</h3></div><ul class="wk-list">' + late.slice(0, 4).map(li).join('') + '</ul>' : '') +
    '</div>';
  el.querySelectorAll('[data-jump]').forEach(function (n) {
    n.addEventListener('click', function () { openChapter(n.getAttribute('data-jump')); });
  });
}

function openChapter(id) {
  S.open[id] = true; render();
  var card = document.getElementById('ch-' + id);
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* 12-week run of show */
function renderRun(C) {
  var el = $('#runShow'); if (!el) return;
  var wk = currentWeek(), html = '';
  for (var w = 1; w <= 12; w++) {
    var b = C.byWeek[w], pct = b.total ? Math.round(b.done / b.total * 100) : 0;
    var cls = w === wk ? ' now' : w < wk ? ' past' : '';
    html += '<div class="rs-wk' + cls + '"><span class="n">' + w + '</span><span class="dt">' + fmt(weekStart(w)) + ' – ' + fmt(weekEnd(w)) + '</span>' +
      '<div class="bar"><i style="width:' + pct + '%"></i></div></div>';
  }
  CHAPTERS.forEach(function (ch) { if (!ch.prologue) html += '<div class="rs-ch">' + ch.n + ' · ' + esc(ch.name) + '</div>'; });
  el.innerHTML = html;
}

/* lighting rig */
function lampSVG(on) {
  return '<svg class="lamp-body" viewBox="0 0 46 52"><rect x="20" y="0" width="6" height="8" fill="#5B6B86"/>' +
    '<path d="M10 8h26l4 30H6z" fill="' + (on ? '#2A3550' : '#26314A') + '" stroke="#55657F" stroke-width="1.5"/>' +
    '<ellipse cx="23" cy="40" rx="17" ry="6" fill="' + (on ? '#FFE2A0' : '#3B4763') + '"' + (on ? ' style="filter:drop-shadow(0 0 8px #FFD27A)"' : '') + '/>' +
    '<rect x="2" y="16" width="5" height="12" rx="2" fill="#55657F"/><rect x="39" y="16" width="5" height="12" rx="2" fill="#55657F"/></svg>';
}
function renderRig(C) {
  var el = $('#rig'); if (!el) return;
  var n = C.chs.length, html = '<div class="truss"></div><div class="floor"></div>';
  C.chs.forEach(function (x, i) {
    var left = 6 + i * (88 / (n - 1));
    var isCur = !C.allDone && i === C.currentIdx;
    var locked = i > C.currentIdx && !x.complete;
    var cls = 'lamp' + (x.complete ? ' lit' : '') + (isCur ? ' current' : '') + (locked ? ' locked' : '');
    var dates = x.ch.weeks ? fmtLong(weekStart(x.ch.weeks[0])) + ' – ' + fmtLong(weekEnd(x.ch.weeks[1])) : 'قبل البداية';
    html += '<div class="' + cls + '" style="right:' + left + '%" data-jump="' + x.ch.id + '" title="' + esc(x.ch.name) + '">' +
      '<div class="beam"></div>' + lampSVG(x.complete) +
      '<div class="plate"><div class="pn">' + (x.ch.prologue ? 'PROLOGUE' : 'CHAPTER ' + x.ch.n) + '</div>' +
      '<div class="pt">' + esc(x.ch.name) + '</div><div class="pd">' + dates + '</div>' +
      (x.pct > 0 && x.pct < 100 ? '<span class="pp">' + x.pct + '%</span>' : x.complete ? '<span class="pp">✦ أُضيء</span>' : '') +
      '</div></div>';
  });
  var wIdx = C.allDone ? n - 1 : C.currentIdx;
  var wl = 6 + wIdx * (88 / (n - 1));
  html += '<div class="walker" style="right:' + wl + '%"><span class="tag">' + (C.allDone ? 'على المنصّة!' : 'أنتِ هنا') + '</span><img src="assets/dania-sticker-sm.webp" alt="دانية"></div>';
  el.innerHTML = html;
  el.querySelectorAll('[data-jump]').forEach(function (n2) {
    n2.addEventListener('click', function () { openChapter(n2.getAttribute('data-jump')); });
  });
}

/* status icon: blank page → page with pen (pending) → gold stamped page (published) */
function pageIcon(st) {
  if (st === 'done') return '<svg class="t-ico" viewBox="0 0 30 30"><rect x="6" y="3" width="18" height="24" rx="3" fill="#FFF7E6" stroke="#C98B2E" stroke-width="1.5"/><circle cx="17" cy="17" r="8" fill="#E2A13A"/><path d="M13 17l3 3 5-6" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  if (st === 'pending') return '<svg class="t-ico" viewBox="0 0 30 30"><rect x="6" y="3" width="18" height="24" rx="3" fill="#FFF3D6" stroke="#E2A13A" stroke-width="1.5"/><path d="M10 10h10M10 14h8M10 18h6" stroke="#E2A13A" stroke-width="1.6" stroke-linecap="round"/><path d="M19 23l6-8 2 1.6-6 8-2.6.8z" fill="#B47A1F"/></svg>';
  return '<svg class="t-ico" viewBox="0 0 30 30"><rect x="6" y="3" width="18" height="24" rx="3" fill="#fff" stroke="#CDBB98" stroke-width="1.5" stroke-dasharray="3 2.4"/><path d="M10 10h10M10 14h10M10 18h7" stroke="#E6D6B8" stroke-width="1.6" stroke-linecap="round"/></svg>';
}

function bookById(id) { return BOOKS.filter(function (b) { return b.id === id; })[0]; }

function renderChapters(C) {
  var el = $('#chapters'); if (!el) return;
  el.innerHTML = C.chs.map(function (x, i) {
    var ch = x.ch;
    var isCur = !C.allDone && i === C.currentIdx;
    var locked = i > C.currentIdx && !x.complete;
    var open = S.open[ch.id] !== undefined ? S.open[ch.id] : isCur;
    var dates = ch.weeks ? 'الأسبوعان ' + ch.weeks[0] + ' و' + ch.weeks[1] + ' · ' + fmtLong(weekStart(ch.weeks[0])) + ' – ' + fmtLong(weekEnd(ch.weeks[1])) : 'سُلِّمت قبل البداية';

    var reads = (ch.read || []).map(function (r) {
      var b = bookById(r.b); if (!b) return '';
      return '<a class="read-chip" href="#libSec" data-book="' + b.id + '">' + '📄 ' + esc(b.t) + ' <small>PDF</small>' + '</a>';
    }).join('');

    var tasks = ch.tasks.map(function (t) {
      var st = stat(t), tg = TAGS[t.c] || TAGS.mm;
      var link = S.links[t.id];
      var acts = '';
      if (S.role === 'dania' && !t.pre) {
        if (st === 'todo') acts = btn('gold', 'أنجزتُها ✍️', t.id, 'pending');
        else if (st === 'pending') acts = btn('ghost', 'تراجع', t.id, 'todo');
      } else if (S.role === 'manager' && !t.pre) {
        if (st === 'pending') acts = btn('sage', 'اعتماد ✓', t.id, 'done') + btn('ghost', 'إرجاع', t.id, 'todo');
        else if (st === 'todo') acts = btn('ghost', 'اعتماد مباشر', t.id, 'done');
        else acts = btn('ghost', 'إلغاء', t.id, 'pending');
      }
      var sub = '';
      if (t.sub && S.role === 'dania' && st !== 'done') {
        sub = '<button class="t-attach" data-attach="' + t.id + '">📎 ' + (link ? 'تعديل الرابط' : 'أرفقي رابط عملك') + '</button>' +
          '<div class="t-sub" id="sub-' + t.id + '"><input type="url" dir="ltr" placeholder="رابط عملك (Google Docs / Drive)…" data-linkin="' + t.id + '" value="' + esc(link || '') + '">' +
          '<button class="btn btn-ink btn-xs" data-linksave="' + t.id + '">حفظ الرابط</button></div>';
      }
      return '<div class="task ' + st + (S.justDone[t.id] ? ' just-done' : '') + '">' + pageIcon(st) +
        '<div class="t-main"><div class="t-txt">' + esc(t.t) + '</div>' +
          '<div class="t-tags"><span class="tag ' + tg.c + '">' + tg.l + '</span>' +
          (t.m && t.c !== 'mm' ? '<span class="tag tag-moomken">تطبيق على ممكن</span>' : '') +
          '<span class="tag tag-kind">' + (KIND[t.k] || '') + '</span>' +
          (t.w ? '<span class="tag tag-wk">W' + t.w + '</span>' : '') +
          (t.url ? '<a class="t-link" href="' + esc(t.url) + '" target="_blank" rel="noopener">افتحي الدورة ↗</a>' : '') +
          (safeUrl(link) ? '<a class="t-link" href="' + esc(safeUrl(link)) + '" target="_blank" rel="noopener">📎 العمل المرفق</a>' : '') +
          '</div>' + sub + '</div>' +
        '<div class="t-act"><span class="t-state st-' + st + '">' + (st === 'done' ? 'تمّ ✦' : st === 'pending' ? 'قيد المراجعة' : 'لم تبدأ') + '</span>' + acts + '</div>' +
      '</div>';
    }).join('');

    return '<article class="ch rv' + (x.complete ? ' done' : '') + (isCur ? ' current' : '') + (locked ? ' locked' : '') + (open ? ' open' : '') + (ch.prologue ? ' prologue' : '') + '" id="ch-' + ch.id + '">' +
      '<header class="ch-head" data-toggle="' + ch.id + '">' +
        '<div class="ch-num"><small>' + (ch.prologue ? 'مقدّمة' : 'الفصل') + '</small><b>' + (ch.prologue ? '✦' : ch.n) + '</b></div>' +
        '<div class="ch-titles"><div class="ch-en">' + esc(ch.en) + '</div><h3>' + esc(ch.name) + '</h3><div class="ch-meta">' + esc(ch.course) + ' · ' + dates + '</div></div>' +
        '<div class="ch-prog"><div class="row"><span>' + x.done + ' / ' + x.total + '</span><span>' + x.pct + '%</span></div><div class="ch-bar"><i style="width:' + x.pct + '%"></i></div></div>' +
        '<button class="ch-toggle" aria-label="فتح أو طي الفصل">⌄</button>' +
      '</header>' +
      '<div class="ch-body"><div class="ch-inner">' +
        '<p class="ch-desc">' + esc(ch.desc) + '</p>' +
        (reads ? '<div class="ch-read"><span style="font-size:13px;color:var(--muted);align-self:center">قراءة مرافقة:</span>' + reads + '</div>' : '') +
        '<div class="tasks">' + tasks + '</div>' +
      '</div></div>' +
    '</article>';
  }).join('');

  el.querySelectorAll('[data-toggle]').forEach(function (h) {
    h.addEventListener('click', function () {
      var id = h.getAttribute('data-toggle'), card = document.getElementById('ch-' + id);
      var willOpen = !card.classList.contains('open');
      S.open[id] = willOpen; card.classList.toggle('open', willOpen);
    });
  });
  bindTaskButtons(el);
  el.querySelectorAll('[data-attach]').forEach(function (b) {
    b.addEventListener('click', function () {
      var box = document.getElementById('sub-' + b.getAttribute('data-attach'));
      if (box) { box.classList.toggle('on'); var i = box.querySelector('input'); if (i && box.classList.contains('on')) i.focus(); }
    });
  });
  el.querySelectorAll('[data-linksave]').forEach(function (b) {
    b.addEventListener('click', function () {
      var id = b.getAttribute('data-linksave');
      var inp = el.querySelector('[data-linkin="' + id + '"]');
      var u = safeUrl(inp && inp.value);
      if (inp && inp.value && !u) { toast('الرابط يجب أن يبدأ بـ https://'); return; }
      setLink(id, u); toast(u ? 'حُفظ الرابط 📎 — سيراه المشرف' : 'حُذف الرابط');
    });
  });
  el.querySelectorAll('[data-book]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var id = a.getAttribute('data-book');
      var sec = document.getElementById('libSec');
      if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(function () { peekBook(id, true); }, 650);
    });
  });
  observeReveals();
}

function btn(kind, label, id, to) {
  return '<button class="btn btn-' + kind + ' btn-sm" data-task="' + id + '" data-to="' + to + '">' + label + '</button>';
}
function bindTaskButtons(root) {
  root.querySelectorAll('[data-task]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      ripple(b, e);
      var id = b.getAttribute('data-task'), to = b.getAttribute('data-to');
      if (to === 'done') { burst(b, 22); happy(); }
      else if (to === 'pending') { burst(b, 10); toast('أحسنتِ! ✍️ المهمة الآن قيد المراجعة — بانتظار اعتماد المشرف'); }
      setStatus(id, to);
    });
  });
}

/* ---------- manager panel ---------- */
function renderManager(C) {
  var sec = $('#mgrSec'), el = $('#mgrPanel');
  if (!sec || !el) return;
  if (S.role !== 'manager') { sec.classList.add('hidden'); return; }
  sec.classList.remove('hidden');
  var pend = [];
  CHAPTERS.forEach(function (ch) { ch.tasks.forEach(function (t) { if (stat(t) === 'pending') pend.push({ ch: ch, t: t }); }); });
  var list = pend.length ? pend.map(function (p) {
    var l = safeUrl(S.links[p.t.id]);
    return '<div class="mgr-item"><span class="mi-txt">' + esc(p.t.t) + '<span class="mi-lvl">الفصل ' + p.ch.n + ' · ' + esc(p.ch.name) + ' · W' + p.t.w + '</span></span>' +
      (l ? '<a class="mi-link" href="' + esc(l) + '" target="_blank" rel="noopener">📎 افتح العمل</a>' : '') +
      '<button class="btn btn-sage btn-xs" data-task="' + p.t.id + '" data-to="done">اعتماد ✓</button>' +
      '<button class="btn btn-ghost-l btn-xs" data-task="' + p.t.id + '" data-to="todo">إرجاع</button></div>';
  }).join('') : '<div class="mgr-empty">لا شيء قيد المراجعة حاليًا ✦</div>';
  el.innerHTML = '<h3>لوحة المشرف</h3>' +
    '<p class="mgr-lead">' + (pend.length ? 'لديك ' + pend.length + ' مهمة قيد المراجعة.' : 'كل المهام معتمدة — الأمور على أتمّ وجه.') +
    ' الإنجاز الكلي: ' + C.pct + '% · الأسبوع ' + Math.max(1, Math.min(12, currentWeek())) + ' من 12.</p>' +
    '<div class="mgr-list">' + list + '</div>';
  bindTaskButtons(el);
}

/* ---------- the finale: one sealed gift at the end ---------- */
function envelopeSVG(open) {
  return '<svg viewBox="0 0 310 200">' +
    '<defs><linearGradient id="envG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF8EA"/><stop offset="1" stop-color="#EBD9B6"/></linearGradient>' +
    '<linearGradient id="sealG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E86A55"/><stop offset="1" stop-color="#A9281D"/></linearGradient></defs>' +
    (open ? '<path d="M8 70 L155 -20 L302 70 Z" fill="#E6D2AA"/>' +
            '<rect x="40" y="10" width="230" height="120" rx="8" fill="#fff" stroke="#E6D6B8"/>' +
            '<text x="155" y="62" text-anchor="middle" font-family="Dahab" font-size="22" font-weight="900" fill="#0E1726">مبروك يا دانية ✦</text>' +
            '<text x="155" y="92" text-anchor="middle" font-family="Dahab" font-size="14" fill="#776A55">ما بداخله ينتظرك في المكتب</text>' : '') +
    '<rect x="8" y="60" width="294" height="134" rx="12" fill="url(#envG)" stroke="#D9C49C"/>' +
    '<path d="M8 194 L155 112 L302 194" fill="#F1E3C6" stroke="#D9C49C"/>' +
    (open ? '' : '<path d="M8 62 L155 150 L302 62" fill="#F6EBD3" stroke="#D9C49C"/>' +
      '<circle cx="155" cy="146" r="26" fill="url(#sealG)"/><circle cx="155" cy="146" r="19" fill="none" stroke="rgba(255,255,255,.45)" stroke-dasharray="3 4"/>' +
      '<text x="155" y="152" text-anchor="middle" font-size="18">🎙️</text>') +
    '</svg>';
}
function renderFinale(C) {
  var el = $('#finale'); if (!el) return;
  var daysLeft = Math.max(0, Math.ceil((END - new Date()) / DAY));
  var open = C.allDone;
  el.classList.toggle('open', open);
  el.innerHTML =
    '<div class="promise-kicker" style="color:var(--gold)">الختام · The Finale</div>' +
    '<div class="env">' + envelopeSVG(open) + '</div>' +
    (open
      ? '<h3>اكتمل الكتاب — وانكسر الختم!</h3><p>ستة فصول، اثنا عشر أسبوعًا، وحملةٌ قدّمتِها على المنصّة. ما كان في المظروف صار لكِ — مرّي على المكتب ✦</p>'
      : '<h3>في آخر الكتاب… مظروفٌ مختوم</h3><p>ما بداخله يبقى سرًّا حتى تُطوى الصفحة الأخيرة. كلُّ مهمةٍ تُنجَز تقرّب لحظة كسر الختم — وحين يكتمل الفصل السادس، يُفتح باسمك.</p>') +
    '<div class="fin-meter"><i style="width:' + C.pct + '%"></i></div>' +
    '<div class="fin-sub">' + C.done + ' / ' + C.total + ' مهمة · ' + (open ? 'اكتمل' : 'متبقٍّ ' + daysLeft + ' يومًا حتى 31 ديسمبر') + '</div>' +
    (S.role === 'manager' ? '<div class="fin-mgr">🔒 <b>للمشرف فقط:</b> ما في المظروف من اختيارك — جهّزه قبل يوم «على المنصّة» (الأسبوع 12). يُفتح المظروف تلقائيًا عند اعتماد آخر مهمة، ودانية لا ترى هذه الملاحظة.</div>' : '');
}

/* ---------- the library ---------- */
var isTouch = window.matchMedia && window.matchMedia('(hover: none)').matches;

function renderLibrary() {
  var el = $('#bookcase'); if (!el) return;
  var html = '<div class="case">';
  SHELVES.forEach(function (sh) {
    var books = BOOKS.filter(function (b) { return b.s === sh.id; });
    html += '<div class="shelf"><div class="shelf-label"><span>' + esc(sh.ar) + '</span><span>' + esc(sh.en) + '</span></div><div class="shelf-row">';
    if (sh.id === 'free') html += '<span class="bookend"></span>';
    books.forEach(function (b, i) {
      var tag = b.url ? 'a' : 'button';
      var attrs = b.url ? ' href="' + esc(b.url) + '" target="_blank" rel="noopener"' : ' type="button"';
      html += '<' + tag + ' class="book' + (i % 3 === 1 ? ' tilt-r' : '') + (b.lean ? ' lean' : '') + '" data-bk="' + b.id + '"' + attrs +
        ' style="--c:' + b.c + ';--h:' + b.h + 'px;--w:' + b.w + 'px' + (b.fg ? ';--fg:' + b.fg : '') + (b.fs ? ';--fs:' + b.fs + 'px' : '') + (b.band ? ';--band:' + b.band : '') + '"' +
        ' aria-label="' + esc(b.t + ' — ' + b.a) + '">' +
        (b.pdf ? '<span class="pdf">PDF</span>' : '') +
        '<span class="sp-ic">' + (b.s === 'kit' ? '◆' : b.s === 'own' ? '❖' : b.s === 'hin' ? '✧' : '✦') + '</span>' +
        '<span class="sp-t"' + (b.lat ? ' style="font-family:Gotham;font-weight:700;writing-mode:vertical-rl;transform:rotate(180deg)"' : '') + '>' + esc(b.t) + '</span>' +
        '<span class="sp-a">' + esc(b.s === 'hin' ? 'هنداوي' : b.a.split('·')[0]) + '</span>' +
      '</' + tag + '>';
    });
    if (sh.id === 'free') html += '<span class="plant">🪴</span>';
    if (sh.id === 'hin') html += '<span class="plant">🕯️</span>';
    if (sh.id === 'own') html += '<span class="bookend" style="transform:scaleX(-1)"></span><span class="stack"><span class="deco">🎙️</span><i style="width:118px;background:#7A2E3A"></i><i style="width:126px;background:#2F5D50"></i><i style="width:112px;background:#C8962E"></i></span>';
    if (sh.id === 'kit') html += '<span class="plant">☕</span><span class="frame"><div><img src="assets/dania-sticker-sm.webp" alt=""></div></span><span class="stack"><span class="deco">⏳</span><i style="width:104px;background:#1F3A5F"></i><i style="width:116px;background:#B4552F"></i></span>';
    html += '</div><div class="shelf-plank"></div></div>';
  });
  html += '</div>';
  el.innerHTML = html;
  $('#bookPeek').innerHTML = '<div class="peek-hint">' + (isTouch ? 'المسي أي كتاب لتري تفاصيله ✦' : 'مرّري المؤشّر على أي كتاب لتري تفاصيله ✦') + '</div>';

  el.querySelectorAll('[data-bk]').forEach(function (n) {
    var id = n.getAttribute('data-bk');
    n.addEventListener('mouseenter', function () { peekBook(id); });
    n.addEventListener('focus', function () { peekBook(id); });
    n.addEventListener('click', function (e) {
      var b = bookById(id);
      if (isTouch && b.url && !n.classList.contains('peek')) { e.preventDefault(); peekBook(id, true); return; }
      if (!b.url) { e.preventDefault(); peekBook(id, true); }
    });
  });
}

function peekBook(id, mark) {
  var b = bookById(id); if (!b) return;
  document.querySelectorAll('.book.peek').forEach(function (x) { x.classList.remove('peek'); });
  if (mark) { var n = document.querySelector('[data-bk="' + id + '"]'); if (n) { n.classList.add('peek'); n.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); } }
  var ch = b.ch ? CHAPTERS.filter(function (c) { return c.n === b.ch && !c.prologue; })[0] : null;
  var action = b.url
    ? '<a class="btn ' + (b.pdf ? 'btn-gold' : 'btn-ink') + ' btn-sm" href="' + esc(b.url) + '" target="_blank" rel="noopener">' + '📖 اقرئي الآن (PDF)' + '</a>'
    : '<span class="tag tag-kind">' + esc(b.note || '') + '</span>';
  $('#bookPeek').innerHTML =
    '<div class="peek-card">' +
      '<div class="peek-cover" style="--c:' + b.c + ';--fg:' + (b.fg || '#fff') + '">' + esc(b.t) + '<small>' + esc(b.a) + '</small></div>' +
      '<div><h4>' + esc(b.t) + '</h4><div class="pa">' + esc(b.a) + '</div>' +
      '<p>' + esc(b.d) + '</p>' +
      '<div class="pk">' + action + (ch ? '<span class="tag tag-ar">رفيق الفصل ' + ch.n + ' · ' + esc(ch.name) + '</span>' : '') +
        (b.s === 'hin' ? '<span class="tag tag-kind">من إصدارات مؤسسة هنداوي</span>' : b.s !== 'kit' ? '<span class="tag tag-kind">من إصدارات معهد الجزيرة للإعلام</span>' : '') + '</div></div>' +
    '</div>';
}

/* ---------- free courses ---------- */
function renderFree() {
  var el = $('#freeCourses'); if (!el) return;
  el.innerHTML = FREE.map(function (f) {
    var ch = CHAPTERS.filter(function (c) { return c.n === f.ch && !c.prologue; })[0];
    return '<a class="fc rv" href="' + esc(f.url) + '" target="_blank" rel="noopener">' +
      '<div class="fc-top"><span class="fc-ch">الفصل ' + f.ch + ' · ' + esc(ch ? ch.name : '') + '</span><span class="fc-min">' + f.min + ' min</span></div>' +
      '<h4>' + esc(f.t) + '</h4><p>' + esc(f.d) + '</p><span class="fc-go">ابدئي الدورة ↗</span></a>';
  }).join('');
}

/* ---------- later shelf ---------- */
function renderLater() {
  var el = $('#laterBody'); if (!el) return;
  el.innerHTML = LATER.map(function (g) {
    return '<div class="lt-group"><h5>' + esc(g.h) + '</h5><ul>' + g.items.map(function (it) {
      return '<li><a href="' + esc(it.url) + '" target="_blank" rel="noopener">' + esc(it.t) +
        '<span class="lang lang-' + it.l + '">' + (it.l === 'ar' ? 'عربي' : 'EN') + '</span><small>' + esc(it.s) + '</small></a></li>';
    }).join('') + '</ul></div>';
  }).join('');
}

/* ============================================================
   5 · DELIGHT — confetti, toasts, celebration, typewriter, dust
   ============================================================ */

var cvs = document.getElementById('confetti'), ctx = cvs.getContext('2d'), parts = [], rafId = null;
var GLYPHS = ['✦', '✍️', '🎙️', '📰', '⭐', '📖'];
var COLORS = ['#F2C46D', '#E2A13A', '#E0473A', '#6F8B6A', '#4D7CA8', '#FFF3D6'];
function sizeCanvas() { cvs.width = innerWidth; cvs.height = innerHeight; }
addEventListener('resize', sizeCanvas); sizeCanvas();
function burst(el, n) { var r = el.getBoundingClientRect(); spawn(r.left + r.width / 2, r.top + r.height / 2, n || 24, 1); }
function rain(n) { for (var i = 0; i < (n || 120); i++) spawn(Math.random() * innerWidth, -30 - Math.random() * innerHeight * 0.5, 1, 0.6); }
function spawn(x, y, n, p) {
  for (var i = 0; i < n; i++) parts.push({ x: x, y: y, vx: (Math.random() - 0.5) * 11 * p, vy: (Math.random() * -9 - 3) * p,
    g: 0.28 + Math.random() * 0.18, r: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.26, s: 11 + Math.random() * 15,
    emoji: Math.random() < 0.45 ? GLYPHS[(Math.random() * GLYPHS.length) | 0] : null, col: COLORS[(Math.random() * COLORS.length) | 0] });
  if (!rafId) rafId = requestAnimationFrame(step);
}
function step() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  for (var i = parts.length - 1; i >= 0; i--) {
    var p = parts[i];
    p.vy += p.g; p.vx *= 0.995; p.x += p.vx; p.y += p.vy; p.r += p.vr;
    if (p.y > cvs.height + 60) { parts.splice(i, 1); continue; }
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
    if (p.emoji) { ctx.font = p.s + 'px serif'; ctx.textAlign = 'center'; ctx.fillStyle = '#F2C46D'; ctx.fillText(p.emoji, 0, 0); }
    else { ctx.fillStyle = p.col; ctx.fillRect(-p.s * 0.35, -p.s * 0.2, p.s * 0.7, p.s * 0.4); }
    ctx.restore();
  }
  if (parts.length) rafId = requestAnimationFrame(step); else { rafId = null; ctx.clearRect(0, 0, cvs.width, cvs.height); }
}
function toast(msg) {
  var box = $('#toasts'); if (!box) return;
  var t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; box.appendChild(t);
  setTimeout(function () { t.classList.add('leave'); setTimeout(function () { t.remove(); }, 400); }, 4200);
}
function happy() {
  var p = $('#pressBadge'); if (!p) return;
  p.classList.add('is-happy'); setTimeout(function () { p.classList.remove('is-happy'); }, 900);
}
function celebrate(ch, C) {
  rain(150); setTimeout(function () { rain(80); }, 500);
  var last = C.allDone;
  var v = document.createElement('div'); v.className = 'cele';
  v.innerHTML = '<div class="cele-card">' +
    '<div class="cele-lamp">' + lampSVG(true).replace('class="lamp-body"', 'style="width:84px;height:94px"') + '</div>' +
    '<h2>' + (last ? 'اكتمل الكتاب يا دانية! 🎙️' : 'الفصل ' + ch.n + ' اكتمل ✦') + '</h2>' +
    '<p>' + (last ? 'أُضيئت الأضواء الستة كلها — وانكسر ختم المظروف. مرّي على المكتب ✦'
                  : 'تمّ إنجاز «' + esc(ch.name) + '»، وأُضيء ضوءٌ جديد على المسرح. ' + (6 - C.lit) + ' أضواء تنتظرك.') + '</p>' +
    '<button class="btn btn-gold" id="celeClose">' + (last ? 'إلى المظروف ✦' : 'إلى الفصل التالي →') + '</button></div>';
  document.body.appendChild(v);
  function close() { v.remove(); if (last) { var f = $('#finaleSec'); if (f) f.scrollIntoView({ behavior: 'smooth' }); } }
  v.querySelector('#celeClose').addEventListener('click', close);
  v.addEventListener('click', function (e) { if (e.target === v) close(); });
}
function ripple(b, e) {
  var r = b.getBoundingClientRect(), s = document.createElement('span'), d = Math.max(r.width, r.height);
  s.className = 'ripple'; s.style.width = s.style.height = d + 'px';
  s.style.left = (e.clientX - r.left - d / 2) + 'px'; s.style.top = (e.clientY - r.top - d / 2) + 'px';
  b.appendChild(s); setTimeout(function () { s.remove(); }, 600);
}
function startQuotes() {
  var el = $('#bubbleTxt'); if (!el) return;
  var qi = Math.floor(Math.random() * QUOTES.length);
  function type() {
    var q = QUOTES[qi % QUOTES.length]; qi++; var i = 0; el.textContent = '';
    (function tick() { if (i <= q.length) { el.textContent = q.slice(0, i++); setTimeout(tick, 45); } else setTimeout(erase, 4200); })();
    function erase() { (function tick() { var s = el.textContent; if (s.length) { el.textContent = s.slice(0, -1); setTimeout(tick, 16); } else setTimeout(type, 500); })(); }
  }
  type();
}
function startDust() {
  var box = $('#dust'); if (!box) return;
  var out = '';
  for (var i = 0; i < 26; i++) {
    out += '<span class="mote" style="left:' + (8 + Math.random() * 40).toFixed(1) + '%;top:' + (30 + Math.random() * 60).toFixed(1) + '%;' +
      'animation-duration:' + (6 + Math.random() * 9).toFixed(1) + 's;animation-delay:-' + (Math.random() * 12).toFixed(1) + 's;opacity:' + (0.3 + Math.random() * 0.6).toFixed(2) + '"></span>';
  }
  box.innerHTML = out;
}
var io = null;
function observeReveals() {
  if (!('IntersectionObserver' in window)) { document.querySelectorAll('.rv').forEach(function (n) { n.classList.add('in'); }); return; }
  if (!io) io = new IntersectionObserver(function (en) {
    en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.rv:not(.in)').forEach(function (n) { io.observe(n); });
}

/* ============================================================
   6 · WIRING
   ============================================================ */
function showRolePicker(show) { var v = $('#rolePicker'); if (v) v.classList.toggle('hidden', !show); }

function init() {
  loadLocal();
  startDust();
  renderLibrary(); renderFree(); renderLater();

  $('#inGist').value = S.gistId; $('#inToken').value = S.token; $('#inFile').value = S.file || DEFAULT_FILE;
  if (S.gistId) S.sync = 'idle';

  showRolePicker(!S.role);
  function assumeRole(role, b) {
    S.role = role; saveCfg(); showRolePicker(false); render();
    if (b) burst(b, 30);
    if (role === 'dania') { toast('أهلًا يا دانية 🎙️ الكتاب مفتوح على صفحتك'); happy(); }
  }
  document.querySelectorAll('[data-role]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (b.getAttribute('data-role') === 'manager') { var row = $('#pinRow'); if (row) { row.classList.remove('hidden'); $('#pinInput').focus(); } return; }
      assumeRole('dania', b);
    });
  });
  var pinGo = $('#pinGo');
  var tryPin = function () {
    var v = ($('#pinInput').value || '').trim();
    if (v === MANAGER_PIN) { $('#pinErr').classList.add('hidden'); assumeRole('manager', pinGo); }
    else { $('#pinErr').classList.remove('hidden'); $('#pinInput').select(); }
  };
  pinGo.addEventListener('click', tryPin);
  $('#pinInput').addEventListener('keydown', function (e) { if (e.key === 'Enter') tryPin(); });

  $('#btnSwitchRole').addEventListener('click', function () { showRolePicker(true); });
  $('#btnSyncNow').addEventListener('click', function () { pull(true); });
  $('#btnSetup').addEventListener('click', function () { $('#setupPanel').classList.toggle('hidden'); });
  $('#btnSaveSetup').addEventListener('click', function () {
    S.gistId = $('#inGist').value.trim(); S.token = $('#inToken').value.trim(); S.file = ($('#inFile').value.trim() || DEFAULT_FILE);
    saveCfg(); $('#setupPanel').classList.add('hidden');
    S.sync = S.gistId ? 'idle' : 'local'; toast('تم الحفظ — جارٍ الاتصال…'); pull(true);
  });
  $('#pressBadge').addEventListener('click', function () { happy(); burst($('#pressBadge'), 16); });

  render(); observeReveals(); startQuotes();
  if (S.gistId) pull();
  setInterval(function () { if (S.gistId && !pushPending) pull(); }, 60000);
  setTimeout(function () { rain(50); }, 900);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
