# MPSC Current Affairs Lab (महाराष्ट्र चालू घडामोडी लॅब)

> **MPSC राज्यसेवा आणि संयुक्त (गट-ब व गट-क) परीक्षांसाठी समर्पित डिजिटल शैक्षणिक व्यासपीठ.**
> **मराठी माध्यम + आवश्यक इंग्रजी संज्ञा (Bilingual) • शून्य खर्च (Zero Cost Stack).**

---

## 🎯 मुख्य वैशिष्ट्ये (Key Features)

1. **मुख्य पान (Home Dashboard)**:
   - आजची विशेष विश्लेषित घडामोड (Featured Hot Topic).
   - अभ्यासक्रमानुसार फिल्टर (GS-1, GS-2, GS-3).
   - त्वरित आकडेवारी विहंगावलोकन.

2. **न्यूज डिकोडर (News Decoder)**:
   - बातमीची तारीख व अधिकृत संदर्भ दुवे (The Hindu, लोकसत्ता, PIB).
   - MPSC पूर्व आणि मुख्य परीक्षेचा अभ्यासक्रम संदर्भ (Syllabus Linkage).
   - पार्श्वभूमी आणि मूळ संकल्पना (Background & Core Concepts).
   - पूर्व परीक्षा महत्त्वाचे पॉईंटर्स (High-Yield Facts).
   - मुख्य परीक्षा विश्लेषणात्मक आराखडा (संभाव्य प्रश्न व गुण/शब्दमर्यादा).
   - इंग्रजी-मराठी संकल्पना शब्दकोश (Bilingual Exam Glossary).
   - "📋 नोट्स कॉपी करा" बटण.

3. **दैनिक प्रश्नमंजुषा (Daily Quiz)**:
   - MPSC परीक्षा पॅटर्नवरील ५ बहुपर्यायी प्रश्न (MCQs).
   - **तात्काळ निकाल (Instant Feedback)**: पर्यायावर क्लिक करताच बरोबर (हिरवा रंग) किंवा चूक (लाल रंग) समजते.
   - योग्य पर्यायाचे तात्काळ हायलाईट आणि **सविस्तर मराठी स्पष्टीकरण** व मूळ संकल्पना.
   - चालू गुणांकन (Live Score) व शेवटी कामगिरीचे विश्लेषण (Performance Rating).
   - रीसेट/पुन्हा सराव करण्याची सुविधा.

4. **साप्ताहिक उजळणी (Weekly Revision)**:
   - आठवडाभरातील घडामोडींचे GS-1, GS-2, GS-3 नुसार संकलन.
   - ३ मिनिटांचे क्विक रिव्हिजन फ्लॅशकार्ड्स (Flashcards).
   - वेब-फर्स्ट डिझाईन (कोणताही PDF चा अडथळा नाही; थेट मोबाईलवर वाचता येते किंवा प्रिंट करू शकता).

5. **प्रायव्हसी व मोफत वापर (V1 Transparency)**:
   - कोणताही लॉगिन, पासवर्ड किंवा विद्यार्थ्यांची वैयक्तिक माहिती गोळा केली जात नाही.
   - कोणतेही पेमेंट किंवा छुपे शुल्क नाही.
   - सर्व नमुना माहितीवर `[डेमो डेटा / Sample Data]` स्पष्टपणे नमूद आहे.

---

## 🚀 हे ॲप तुमच्या संगणकावर / लॅपटॉपवर कसे चालवायचे? (How to Run Locally)

खालीलपैकी कोणतीही एक सोपी पद्धत वापरा (कोणतेही पेड सॉफ्टवेअर लागत नाही):

### पर्याय १: सर्वात सोपा मार्ग (विना कोणत्याही कमांडचा)
1. तुमच्या कॉम्प्युटरमधील `d:\claude alpha\mpsc-current-affairs-lab` फोल्डर उघडा.
2. `index.html` या फाईलवर डबल-क्लिक करा.
3. ॲप तुमच्या Chrome, Edge किंवा Firefox ब्राउझरमध्ये त्वरित सुरू होईल!

---

### पर्याय २: Python द्वारे लोकल सर्व्हर (शिफारस केलेला मार्ग)
तुमच्या सिस्टीममध्ये Python 3 उपलब्ध आहे:
1. टर्मिनल किंवा PowerShell उघडा.
2. खालील कमांड चालवा:
```bash
python -m http.server 8080 --directory "d:/claude alpha/mpsc-current-affairs-lab"
```
3. तुमच्या ब्राउझरमध्ये `http://localhost:8080` उघडा.

---

### पर्याय ३: Node.js / npx द्वारे
```bash
npx serve "d:/claude alpha/mpsc-current-affairs-lab"
```

---

## ✏️ स्वतः नवीन बातम्या व प्रश्न कसे जोडायचे? (How to Edit Content)

प्रकल्पामध्ये डेटा आणि डिझाइन पूर्णपणे वेगळे ठेवण्यात आले आहेत, ज्यामुळे तुम्हाला कोणतेही HTML कोडिंग न करता फक्त साध्या फाईल्स एडिट करून मजकूर बदलता येतो:

### १. नवीन बातमी किंवा विश्लेषण जोडण्यासाठी:
👉 **फाईल उघडा:** `data/articles.js`  
त्यात `MPSC_ARTICLES` या ॲरेमध्ये एक नवीन ऑब्जेक्ट जोडा किंवा अस्तित्वात असलेला मजकूर एडिट करा:
```javascript
{
  id: "tumchi-batmi-id",
  title: "मराठीतील बातमीचे शीर्षक",
  englishTitle: "English Title",
  date: "19 ऑक्टोबर 2024",
  category: "GS-2",
  categoryBadge: "GS-2: राज्यव्यवस्था",
  sourceName: "लोकसत्ता / द हिंदू",
  sourceUrl: "https://www.loksatta.com",
  summary: "थोडक्यात बातमीचा सारांश...",
  context: "बातमीचा नेमका संदर्भ...",
  background: "पार्श्वभूमी...",
  prelimsPointers: [
    "मुद्दा १",
    "मुद्दा २"
  ],
  mainsAngle: {
    question: "संभाव्य मुख्य परीक्षा प्रश्न...",
    marks: "15 गुण / 250 शब्द",
    modelPointers: ["मुद्दा १", "मुद्दा २"]
  },
  glossary: [
    { term: "मराठी संज्ञा", english: "English Term", definition: "स्पष्टीकरण" }
  ]
}
```

### २. नवीन क्विझ प्रश्न जोडण्यासाठी:
👉 **फाईल उघडा:** `data/quiz-data.js`  
त्यात `MPSC_QUIZ_DATA` मध्ये प्रश्न जोडा:
```javascript
{
  id: 6,
  topic: "GS-2: राज्यव्यवस्था",
  date: "19 ऑक्टोबर 2024",
  difficulty: "मध्यम",
  question: "तुमचा प्रश्न येथे लिहा...",
  englishQuestion: "Question in English...",
  statements: [], // विधाने असल्यास टाका, नसल्यास रिकामे ठेवा
  options: [
    "पर्याय १",
    "पर्याय २",
    "पर्याय ३",
    "पर्याय ४"
  ],
  correctIndex: 1, // 0 ते 3 मधील बरोबर पर्यायाचा इंडेक्स (0=पहिला, 1=दुसरा, 2=तिसरा, 3=चौथा)
  explanation: "या प्रश्नाचे सविस्तर मराठी स्पष्टीकरण...",
  keyConcept: "संबंधित MPSC संकल्पना..."
}
```

### ३. साप्ताहिक उजळणी पॉईंट्स जोडण्यासाठी:
👉 **फाईल उघडा:** `data/revision-data.js`  
त्यात `MPSC_REVISION_DATA` मध्ये नवीन आठवड्याचा किंवा विषयाचा ब्लॉक जोडा.

---

## 📁 फाईल रचना (Project Directory Structure)

```
mpsc-current-affairs-lab/
├── index.html           # मुख्य पान (Hero, Featured Article, Quick Stats, Syllabus Filters)
├── decoder.html         # न्यूज डिकोडर (Syllabus Linkage, Explanations, Prelims/Mains Angle)
├── quiz.html            # दैनिक सराव प्रश्नमंजुषा (Interactive Quiz with Instant Feedback)
├── revision.html        # साप्ताहिक उजळणी (Categorized Weekly Digest & Flashcards)
├── README.md            # हा वापरकर्ता माहिती मार्गदर्शक
├── css/
│   └── style.css        # Responsive Design System (Light/Dark mode, Typography, Mobile Nav)
├── js/
│   ├── app.js           # Theme toggle, navigation, clipboard copy helper
│   ├── decoder.js       # Dynamic article renderer and syllabus mapper
│   └── quiz.js          # Interactive Quiz evaluation engine
└── data/
    ├── articles.js      # बातमी डेटा (User Editable)
    ├── quiz-data.js     # प्रश्नमंजुषा डेटा (User Editable)
    └── revision-data.js # उजळणी डेटा (User Editable)
```

---
*MPSC Current Affairs Lab - विद्यार्थ्यांसाठी, गुणवत्तापूर्ण अभ्यासासाठी.*
