import React, { useState } from 'react';
import { JAIN_MUHURATS, JAIN_PANCHANG_MONTHS, MuhuratItem } from '../data/muhuratData';
import { Calendar, Clock, CheckCircle2, AlertOctagon, Sparkles, MessageCircle, Star, Compass } from 'lucide-react';

export const MuhuratCalculator: React.FC = () => {
  const [selectedMuhuratId, setSelectedMuhuratId] = useState<string>('pran-pratishtha-muhurat');
  
  // Interactive Checker States
  const [testTithi, setTestTithi] = useState<string>('पंचमी (5)');
  const [testNakshatra, setTestNakshatra] = useState<string>('रोहिणी');
  const [testDay, setTestDay] = useState<string>('गुरुवार');

  const currentMuhurat = JAIN_MUHURATS.find(m => m.id === selectedMuhuratId) || JAIN_MUHURATS[0];

  // Quick evaluation
  const isAuspiciousTithi = currentMuhurat.auspiciousTithi.some(t => t.includes(testTithi.split(' ')[0]));
  const isAuspiciousNakshatra = currentMuhurat.auspiciousNakshatra.includes(testNakshatra);
  const isAuspiciousDay = currentMuhurat.auspiciousDays.some(d => d.includes(testDay));

  return (
    <div className="space-y-8">
      {/* Top Intro */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-amber-700">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>जैन ज्योतिष एवं प्रतिष्ठा मुहूर्त विज्ञान</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-jain text-amber-100">
            जैन मंदिर निर्माण, प्राण प्रतिष्ठा एवं प्रवेश मुहूर्त
          </h2>
          <p className="text-amber-200/90 text-xs sm:text-sm mt-3 leading-relaxed">
            जैन श्वेतांबर परंपरा में जिनालय निर्माण से लेकर अंजनशलाका प्रतिष्ठा तक प्रत्येक क्रिया केवल शुभ लग्न, ध्रुव नक्षत्र, रिक्ता-रहित तिथि और गुरु-शुक्र की अनुकूलता में ही करने का विधान है। गलत मुहूर्त में किया गया कार्य विघ्न और कलह का कारण बनता है।
          </p>
        </div>
      </div>

      {/* Select Muhurat Type */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {JAIN_MUHURATS.map((item) => {
          const isSelected = item.id === selectedMuhuratId;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedMuhuratId(item.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-800 text-white border-amber-900 shadow-md ring-2 ring-amber-300'
                  : 'bg-white hover:bg-amber-50 text-stone-800 border-amber-200'
              }`}
            >
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${isSelected ? 'text-amber-300' : 'text-amber-800'}`}>
                  {item.category}
                </span>
                <span className="text-xs sm:text-sm font-bold line-clamp-2">
                  {item.title.split('(')[0]}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Muhurat Detail Box */}
      <div className="bg-white rounded-2xl border-2 border-amber-300 p-5 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-amber-200 gap-4">
          <div>
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
              {currentMuhurat.category} महामुहूर्त
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-jain text-stone-900 mt-1">
              {currentMuhurat.title}
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              {currentMuhurat.shortDesc}
            </p>
          </div>

          <a
            href={`https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20हमें%20'${encodeURIComponent(
              currentMuhurat.title
            )}'%20का%20शुभ%20मुहूर्त%20निकलवाना%20है।%20कृपया%20मार्गदर्शन%20दें।`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-emerald-800 transition-colors shadow-sm shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>संजीव जी से मुहूर्त शोधन करवाएं</span>
          </a>
        </div>

        {/* Shastric Significance */}
        <div className="my-5 p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-stone-800 leading-relaxed">
          <strong className="text-amber-950 font-bold block mb-1">शास्त्रोक्त महत्व एवं फल:</strong>
          {currentMuhurat.shastricSignificance}
        </div>

        {/* 4 Cards Grid: Tithis, Nakshatras, Days, Months */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Tithis */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-1.5 mb-2.5">
              <Calendar className="w-4 h-4 text-amber-700" />
              <span>शुभ तिथियां (Tithi)</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {currentMuhurat.auspiciousTithi.map((t, idx) => (
                <span key={idx} className="text-[11px] bg-white border border-amber-200 text-amber-950 px-2 py-0.5 rounded font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Nakshatras */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-1.5 mb-2.5">
              <Star className="w-4 h-4 text-amber-700" />
              <span>शुभ नक्षत्र (Nakshatra)</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {currentMuhurat.auspiciousNakshatra.map((n, idx) => (
                <span key={idx} className="text-[11px] bg-white border border-emerald-200 text-emerald-950 px-2 py-0.5 rounded font-medium">
                  {n}
                </span>
              ))}
            </div>
          </div>

          {/* Days */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-1.5 mb-2.5">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>शुभ वार (Days)</span>
            </h4>
            <div className="space-y-1">
              {currentMuhurat.auspiciousDays.map((d, idx) => (
                <div key={idx} className="text-xs text-stone-700 font-medium">
                  • {d}
                </div>
              ))}
            </div>
          </div>

          {/* Months */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-1.5 mb-2.5">
              <Compass className="w-4 h-4 text-amber-700" />
              <span>शुभ मास (Months)</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {currentMuhurat.auspiciousMonths.map((m, idx) => (
                <span key={idx} className="text-[11px] bg-white border border-blue-200 text-blue-950 px-2 py-0.5 rounded font-medium">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Lagna Requirements vs Strict Prohibitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="bg-emerald-50/50 rounded-xl p-4 sm:p-5 border border-emerald-200">
            <h4 className="font-bold text-emerald-950 text-xs sm:text-sm flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>अनिवार्य लग्न शुद्धि (Lagna Shuddhi Rules):</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {currentMuhurat.lagnaRequirements.map((r, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-rose-50/50 rounded-xl p-4 sm:p-5 border border-rose-200">
            <h4 className="font-bold text-rose-950 text-xs sm:text-sm flex items-center gap-1.5 mb-2">
              <AlertOctagon className="w-4 h-4 text-rose-600" />
              <span>सख्त वर्जित योग एवं दोष (Strict Prohibitions):</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {currentMuhurat.strictProhibitions.map((p, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Steps for Temple Trust */}
        <div className="bg-stone-50 rounded-xl p-4 sm:p-5 border border-stone-200">
          <h4 className="font-bold text-stone-900 text-xs sm:text-sm mb-3">
            मंदिर ट्रस्ट एवं आयोजक समिति हेतु प्रक्रियागत कदम:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {currentMuhurat.processSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-3 rounded-lg border border-stone-200 text-xs text-stone-700">
                <span className="w-5 h-5 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-[10px] mb-1.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Quick Compatibility Checker */}
      <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl border border-amber-300 p-5 sm:p-7 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-5">
          <h3 className="text-lg sm:text-xl font-bold font-serif-jain text-stone-900">
            त्वरित मुहूर्त पात्रता चेकर (Quick Muhurat Checker)
          </h3>
          <p className="text-stone-600 text-xs mt-1">
            अपने विचारणीय तिथि, नक्षत्र एवं वार का चयन करें और देखें कि वर्तमान कार्य हेतु वह अनुकूल है या नहीं:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-5">
          {/* Tithi select */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">तिथि (Tithi):</label>
            <select
              value={testTithi}
              onChange={(e) => setTestTithi(e.target.value)}
              className="w-full text-xs p-2 rounded-lg bg-white border border-stone-300 text-stone-800 font-medium"
            >
              {['प्रतिपदा (1)', 'द्वितीया (2)', 'तृतीया (3)', 'चतुर्थी (4 - रिक्ता)', 'पंचमी (5)', 'षष्ठी (6)', 'सप्तमी (7)', 'अष्टमी (8)', 'नवमी (9 - रिक्ता)', 'दशमी (10)', 'एकादशी (11)', 'द्वादशी (12)', 'त्रयोदशी (13)', 'चतुर्दशी (14 - रिक्ता)', 'पूर्णिमा (15)', 'अमावस्या'].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Nakshatra select */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">नक्षत्र (Nakshatra):</label>
            <select
              value={testNakshatra}
              onChange={(e) => setTestNakshatra(e.target.value)}
              className="w-full text-xs p-2 rounded-lg bg-white border border-stone-300 text-stone-800 font-medium"
            >
              {['रोहिणी', 'पुष्य', 'उत्तराषाढ़ा', 'उत्तराभाद्रपद', 'उत्तराफाल्गुनी', 'हस्त', 'चित्रा', 'स्वाति', 'अनुराधा', 'रेवती', 'श्रवण', 'धनिष्ठा', 'मृगशिरा', 'अश्विनी', 'भरणी', 'कृत्तिका', 'आर्द्रा', 'आश्लेषा', 'मघा', 'ज्येष्ठा', 'मूल'].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          {/* Day select */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">वार (Day):</label>
            <select
              value={testDay}
              onChange={(e) => setTestDay(e.target.value)}
              className="w-full text-xs p-2 rounded-lg bg-white border border-stone-300 text-stone-800 font-medium"
            >
              {['गुरुवार', 'सोमवार', 'बुधवार', 'शुक्रवार', 'रविवार', 'शनिवार', 'मंगलवार'].map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Evaluation Result */}
        <div className="max-w-2xl mx-auto bg-white p-4 rounded-xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-xs">
            <div>
              तिथि स्थिति: <strong>{testTithi}</strong> → {isAuspiciousTithi ? <span className="text-emerald-600 font-bold">✓ अत्यंत शुभ</span> : <span className="text-amber-700 font-medium">⚠️ विचारणीय / सामान्य</span>}
            </div>
            <div>
              नक्षत्र स्थिति: <strong>{testNakshatra}</strong> → {isAuspiciousNakshatra ? <span className="text-emerald-600 font-bold">✓ शास्त्र सम्मत ध्रुव/शुभ नक्षत्र</span> : <span className="text-stone-600">मध्यम / विशेष शांति आवश्यक</span>}
            </div>
            <div>
              वार स्थिति: <strong>{testDay}</strong> → {isAuspiciousDay ? <span className="text-emerald-600 font-bold">✓ सौम्य शुभ वार</span> : <span className="text-rose-600">क्रूर वार (त्याज्य)</span>}
            </div>
          </div>

          <div className="text-right shrink-0">
            <a
              href={`https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मैं%20${encodeURIComponent(currentMuhurat.title)}%20हेतु%20${testTithi},%20${testNakshatra}%20नक्षत्र%20व%20${testDay}%20का%20सटीक%20मुहूर्त%20शोधन%20करवाना%20चाहता%20हूँ।`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3.5 py-2 bg-amber-800 text-white rounded-lg text-xs font-bold hover:bg-amber-900"
            >
              सटीक समय शोधन करें →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
