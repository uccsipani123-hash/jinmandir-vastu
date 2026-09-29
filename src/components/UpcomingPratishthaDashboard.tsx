import React, { useState } from 'react';
import { 
  Calendar, 
  Moon, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Share2, 
  MessageCircle, 
  Filter, 
  Compass, 
  ShieldCheck,
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';

export interface PratishthaMuhuratEvent {
  id: string;
  title: string;
  eventType: 'pran-pratishtha' | 'mandir-pravesh' | 'dhwajarohan' | 'shilanyas';
  eventTypeHindi: string;
  lunarCategory: 'kartik-margashirsha' | 'magh-uttarayana' | 'phalguna-vasant' | 'vaishakha-akshaya';
  lunarCategoryHindi: string;
  targetDate: string; // ISO date format YYYY-MM-DD
  displayDate: string;
  dayHindi: string;
  tithiHindi: string;
  nakshatraHindi: string;
  yogaHindi: string;
  lagnaHindi: string;
  choghadiyaHindi: string;
  moonPhase: 'शुक्ल पंचमी' | 'शुक्ल सप्तमी' | 'शुक्ल दशमी' | 'देवउठनी एकादशी' | 'शुक्ल त्रयोदशी' | 'कार्तिक पूर्णिमा' | 'अक्षय तृतीया' | 'फाल्गुन पूर्णिमा';
  moonIcon: string;
  shastricSignificance: string;
  auspiciousScore: number; // e.g. 98%
  specialNotes: string;
}

export const UpcomingPratishthaDashboard: React.FC = () => {
  const [selectedLunarCat, setSelectedLunarCat] = useState<string>('all');
  const [selectedEventType, setSelectedEventType] = useState<string>('all');
  const [activeModalEvent, setActiveModalEvent] = useState<PratishthaMuhuratEvent | null>(null);

  // Reference date: current local time is late Sept 2026 (2026-09-29)
  const currentDate = new Date('2026-09-29T10:00:00');

  const UPCOMING_MUHURATS: PratishthaMuhuratEvent[] = [
    {
      id: 'kartik-ekadashi-2026',
      title: 'देवउठनी एकादशी महाप्रतिष्ठा एवं प्रवेश मुहूर्त',
      eventType: 'pran-pratishtha',
      eventTypeHindi: 'प्राण प्रतिष्ठा एवं अंजनशलाका',
      lunarCategory: 'kartik-margashirsha',
      lunarCategoryHindi: 'कार्तिक देवउठनी काल (Nov 2026)',
      targetDate: '2026-11-20',
      displayDate: '20 नवंबर 2026',
      dayHindi: 'शुक्रवार',
      tithiHindi: 'कार्तिक शुक्ल एकादशी (प्रबोधिनी एकादशी)',
      nakshatraHindi: 'उत्तराभाद्रपद (ध्रुव संज्ञक अमृत नक्षत्र)',
      yogaHindi: 'हर्षण योग एवं सर्वार्थसिद्धि योग',
      lagnaHindi: 'वृषभ स्थिर लग्न (प्रातः 07:15 AM से 09:10 AM)',
      choghadiyaHindi: 'अमृत एवं शुभ चौघड़िया',
      moonPhase: 'देवउठनी एकादशी',
      moonIcon: '🌔',
      shastricSignificance: 'चातुर्मास समाप्ति उपरांत का प्रथम अबूझ महामुहूर्त। भगवान का सिंहासनारोहण एवं प्रथम महाप्रवेश संघ को अक्षय कीर्ति देता है।',
      auspiciousScore: 99,
      specialNotes: 'गुरु-शुक्र दोनों आकाश में पूर्ण बलवान हैं। अष्टम भाव सर्वथा शुद्ध है।'
    },
    {
      id: 'kartik-purnima-2026',
      title: 'कार्तिक पूर्णिमा ध्वजारोहण एवं मंदिर प्रवेश',
      eventType: 'mandir-pravesh',
      eventTypeHindi: 'मंदिर प्रवेश एवं द्वारोद्घाटन',
      lunarCategory: 'kartik-margashirsha',
      lunarCategoryHindi: 'कार्तिक देवउठनी काल (Nov 2026)',
      targetDate: '2026-11-24',
      displayDate: '24 नवंबर 2026',
      dayHindi: 'मंगलवार (सौम्य लग्न)',
      tithiHindi: 'कार्तिक पूर्णिमा (त्रिपुरारी पूर्णिमा)',
      nakshatraHindi: 'रोहिणी नक्षत्र (अमृत सिद्धि)',
      yogaHindi: 'शिव योग',
      lagnaHindi: 'कुंभ स्थिर लग्न (दोपहर 01:25 PM से 02:55 PM)',
      choghadiyaHindi: 'लाभ एवं अमृत चौघड़िया',
      moonPhase: 'कार्तिक पूर्णिमा',
      moonIcon: '🌕',
      shastricSignificance: 'शत्रुंजय महातीर्थ की यात्रा प्रारंभ होने का परम पावन दिवस। इस दिन मंदिर प्रवेश से कोटि पापों का शमन होता है।',
      auspiciousScore: 97,
      specialNotes: 'शिखर पर ध्वजारोहण एवं कपाट उद्घाटन हेतु विशेष प्रशंसित दिवस।'
    },
    {
      id: 'margashirsha-shukla-panchami-2026',
      title: 'मार्गशीर्ष शुक्ल पंचमी शिलान्यास एवं नींव खनन',
      eventType: 'shilanyas',
      eventTypeHindi: 'शिलान्यास एवं निर्माण प्रारंभ',
      lunarCategory: 'kartik-margashirsha',
      lunarCategoryHindi: 'कार्तिक-मार्गशीर्ष काल (Dec 2026)',
      targetDate: '2026-12-14',
      displayDate: '14 दिसंबर 2026',
      dayHindi: 'सोमवार (चंद्र वार)',
      tithiHindi: 'मार्गशीर्ष शुक्ल पंचमी',
      nakshatraHindi: 'धनिष्ठा नक्षत्र',
      yogaHindi: 'वृद्धि योग',
      lagnaHindi: 'धनु द्विस्वभाव लग्न (प्रातः 08:30 AM से 10:45 AM)',
      choghadiyaHindi: 'अमृत चौघड़िया',
      moonPhase: 'शुक्ल पंचमी',
      moonIcon: '🌓',
      shastricSignificance: 'प्रथम आधारशिला स्थापन हेतु अत्यंत स्थिर एवं मंगलकारी योग। नींव में नवरत्न व स्वर्ण शलाका स्थापन शुभ।',
      auspiciousScore: 95,
      specialNotes: 'ईशान कोण में प्रथम खनन का समय प्रातः 08:45 AM निर्धारित।'
    },
    {
      id: 'magh-shukla-panchami-2027',
      title: 'माघ वसंत पंचमी प्राण प्रतिष्ठा महामहोत्सव',
      eventType: 'pran-pratishtha',
      eventTypeHindi: 'प्राण प्रतिष्ठा एवं अंजनशलाका',
      lunarCategory: 'magh-uttarayana',
      lunarCategoryHindi: 'माघ उत्तरायण काल (Jan-Feb 2027)',
      targetDate: '2027-02-11',
      displayDate: '11 फरवरी 2027',
      dayHindi: 'गुरुवार (बृहस्पतिवार - सर्वोत्तम)',
      tithiHindi: 'माघ शुक्ल पंचमी (श्री वसंत पंचमी)',
      nakshatraHindi: 'रेवती नक्षत्र (अमृत योग)',
      yogaHindi: 'सिद्ध योग एवं पुष्य संयोग',
      lagnaHindi: 'मीन लग्न (प्रातः 06:40 AM से 08:05 AM)',
      choghadiyaHindi: 'शुभ चौघड़िया',
      moonPhase: 'शुक्ल पंचमी',
      moonIcon: '🌔',
      shastricSignificance: 'सूर्य के उत्तरायण में प्रवेश उपरांत वसंत पंचमी को सरस्वती व जिनवाणी आराधना का महामुहूर्त। प्रतिष्ठा हेतु वर्ष का सर्वोत्तम समय।',
      auspiciousScore: 100,
      specialNotes: 'अंजनशलाका ब्रह्म मुहूर्त प्रातः 04:30 AM तथा सिंहासनारोहण 07:15 AM।'
    },
    {
      id: 'magh-shukla-dashami-2027',
      title: 'माघ शुक्ल दशमी जिनप्रासाद ध्वजारोहण एवं कलश स्थापन',
      eventType: 'dhwajarohan',
      eventTypeHindi: 'ध्वजारोहण एवं स्वर्ण कलश',
      lunarCategory: 'magh-uttarayana',
      lunarCategoryHindi: 'माघ उत्तरायण काल (Feb 2027)',
      targetDate: '2027-02-16',
      displayDate: '16 फरवरी 2027',
      dayHindi: 'मंगलवार',
      tithiHindi: 'माघ शुक्ल दशमी',
      nakshatraHindi: 'मृगशिरा नक्षत्र',
      yogaHindi: 'ऐन्द्र योग',
      lagnaHindi: 'वृषभ लग्न (प्रातः 10:15 AM से 12:10 PM)',
      choghadiyaHindi: 'लाभ चौघड़िया',
      moonPhase: 'शुक्ल दशमी',
      moonIcon: '🌔',
      shastricSignificance: 'शिखर पर 11 हाथ ऊंचे ध्वजादंड एवं स्वर्ण कलश स्थापन का सर्वश्रेष्ठ योग।',
      auspiciousScore: 96,
      specialNotes: 'पवन की दिशा ईशान-पूर्व में उत्तम रहने का ज्योतिषीय योग।'
    },
    {
      id: 'phalguna-shukla-troyodashi-2027',
      title: 'फाल्गुन शुक्ल त्रयोदशी अंजनशलाका एवं वेदी प्रतिष्ठा',
      eventType: 'pran-pratishtha',
      eventTypeHindi: 'प्राण प्रतिष्ठा एवं अंजनशलाका',
      lunarCategory: 'phalguna-vasant',
      lunarCategoryHindi: 'फाल्गुन वसंत महोत्सव (March 2027)',
      targetDate: '2027-03-20',
      displayDate: '20 मार्च 2027',
      dayHindi: 'शनिवार (स्थिर प्रभाव)',
      tithiHindi: 'फाल्गुन शुक्ल त्रयोदशी (तेरस)',
      nakshatraHindi: 'उत्तराफाल्गुनी नक्षत्र (ध्रुव संज्ञक)',
      yogaHindi: 'धृति योग एवं रवि योग',
      lagnaHindi: 'सिंह स्थिर लग्न (दोपहर 01:45 PM से 04:00 PM)',
      choghadiyaHindi: 'अमृत चौघड़िया',
      moonPhase: 'शुक्ल त्रयोदशी',
      moonIcon: '🌕',
      shastricSignificance: "फाल्गुन मास में श्री शत्रुंजय महातीर्थ पर छ'री पालित संघ प्रतिष्ठा के समान पुण्यकारी योग।",
      auspiciousScore: 98,
      specialNotes: 'मूलनायक पार्श्वनाथ अथवा महावीर स्वामी जिनालय हेतु विशेष प्रशस्त।'
    },
    {
      id: 'vaishakha-akshaya-tritiya-2027',
      title: 'अक्षय तृतीया (आखा तीज) सर्वसिद्धि अबूझ प्रतिष्ठा महामुहूर्त',
      eventType: 'pran-pratishtha',
      eventTypeHindi: 'प्राण प्रतिष्ठा एवं अंजनशलाका',
      lunarCategory: 'vaishakha-akshaya',
      lunarCategoryHindi: 'वैशाख अक्षय काल (May 2027)',
      targetDate: '2027-05-09',
      displayDate: '09 मई 2027',
      dayHindi: 'रविवार (सूर्य वार)',
      tithiHindi: 'वैशाख शुक्ल तृतीया (अक्षय तृतीया / आखा तीज)',
      nakshatraHindi: 'रोहिणी नक्षत्र (सर्वोच्च ध्रुव अमृत)',
      yogaHindi: 'सर्वार्थसिद्धि योग एवं अमृतसिद्धि महायोग',
      lagnaHindi: 'वृषभ स्थिर लग्न (प्रातः 06:10 AM से 08:15 AM)',
      choghadiyaHindi: 'अमृत महाचौघड़िया',
      moonPhase: 'अक्षय तृतीया',
      moonIcon: '🌙',
      shastricSignificance: 'भगवान ऋषभदेव (आदिनाथ प्रभु) के प्रथम इक्षुरस पारणा का दिन। इस दिन किसी भी ग्रह दोष का विचार किए बिना किया गया कार्य अनंत काल तक अक्षय फल देता है।',
      auspiciousScore: 100,
      specialNotes: 'वर्ष का सबसे बड़ा अबूझ महामुहूर्त। मंदिर प्रवेश, ध्वजारोहण व प्रतिष्ठा तीनों एक साथ संपन्न किए जा सकते हैं।'
    }
  ];

  // Calculate days remaining from reference date
  const getDaysRemaining = (targetDateStr: string): number => {
    const target = new Date(targetDateStr + 'T00:00:00');
    const diffTime = target.getTime() - currentDate.getTime();
    return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  };

  const filteredMuhurats = UPCOMING_MUHURATS.filter((m) => {
    const matchesCat = selectedLunarCat === 'all' || m.lunarCategory === selectedLunarCat;
    const matchesType = selectedEventType === 'all' || m.eventType === selectedEventType;
    return matchesCat && matchesType;
  });

  return (
    <div className="bg-white rounded-3xl border-2 border-amber-300 p-5 sm:p-7 lg:p-9 shadow-md space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-amber-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-200 to-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300 shadow-2xs">
            <Moon className="w-4 h-4 text-amber-800" />
            <span>चांद्र मास एवं पर्वानुसार प्रतिष्ठा पंचांग</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-jain text-stone-900">
            आगामी प्राण प्रतिष्ठा एवं मंदिर प्रवेश महामुहूर्त (Upcoming Dashboard)
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
            जैन श्वेतांबर परंपरा के आगामी पावन चांद्र पर्वों (कार्तिक, माघ उत्तरायण, फाल्गुन वसंत एवं वैशाख अक्षय तृतीया) पर शास्त्रोक्त अंजनशलाका, ध्वजारोहण एवं मंदिर प्रवेश की आगामी तिथियां।
          </p>
        </div>

        <div className="bg-amber-50 p-3 rounded-2xl border border-amber-300 text-center shrink-0 min-w-[150px]">
          <span className="text-[10px] font-bold text-amber-800 uppercase block">वर्तमान पंचांग संवत</span>
          <strong className="text-lg font-serif-jain text-amber-950 font-bold block">विक्रम संवत २०८३</strong>
          <span className="text-[11px] text-stone-600">शुद्ध नक्षत्र शुद्धि युक्त</span>
        </div>
      </div>

      {/* Filter Strip: Lunar Events & Event Types */}
      <div className="space-y-3 bg-stone-50/80 p-4 rounded-2xl border border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Lunar Event Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-stone-700 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-700" />
              <span>चांद्र पर्व (Lunar Event):</span>
            </span>
            {[
              { id: 'all', name: 'सभी पर्व (All Seasons)' },
              { id: 'kartik-margashirsha', name: 'कार्तिक-मार्गशीर्ष 2026' },
              { id: 'magh-uttarayana', name: 'माघ उत्तरायण 2027' },
              { id: 'phalguna-vasant', name: 'फाल्गुन वसंत 2027' },
              { id: 'vaishakha-akshaya', name: 'वैशाख अक्षय तृतीया 2027' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedLunarCat(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedLunarCat === cat.id
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'bg-white hover:bg-amber-100 text-stone-700 border border-stone-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Event Type Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-stone-700">अनुष्ठान प्रकार:</span>
            <select
              value={selectedEventType}
              onChange={(e) => setSelectedEventType(e.target.value)}
              className="text-xs p-1.5 rounded-lg bg-white border border-stone-300 text-stone-800 font-medium focus:ring-1 focus:ring-amber-500 focus:outline-none"
            >
              <option value="all">सभी अनुष्ठान (All Events)</option>
              <option value="pran-pratishtha">प्राण प्रतिष्ठा / अंजनशलाका</option>
              <option value="mandir-pravesh">मंदिर प्रवेश / तोरण उद्घाटन</option>
              <option value="dhwajarohan">ध्वजारोहण एवं कलश</option>
              <option value="shilanyas">शिलान्यास एवं नींव खनन</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid of Dynamic Muhurat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMuhurats.map((m) => {
          const daysLeft = getDaysRemaining(m.targetDate);

          return (
            <div
              key={m.id}
              className="bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-md p-5 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700" />

              <div>
                {/* Event Type & Days Left */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 uppercase">
                    {m.eventTypeHindi}
                  </span>

                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    <span>{daysLeft} दिन शेष</span>
                  </span>
                </div>

                {/* Moon Phase & Gregorian Date */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xl" title={m.moonPhase}>{m.moonIcon}</span>
                  <div>
                    <h3 className="font-serif-jain font-bold text-lg text-amber-950 group-hover:text-amber-800 transition-colors">
                      {m.displayDate}
                    </h3>
                    <span className="text-xs text-stone-500 font-medium">{m.dayHindi} • {m.lunarCategoryHindi}</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-bold text-xs sm:text-sm text-stone-800 mt-2 mb-3 line-clamp-2">
                  {m.title}
                </h4>

                {/* Technical Muhurat Specs */}
                <div className="space-y-1.5 text-xs text-stone-700 bg-amber-50/50 p-3 rounded-xl border border-amber-100 mb-4">
                  <div className="flex items-start gap-1.5">
                    <span className="text-amber-800 font-bold shrink-0">तिथि:</span>
                    <span className="font-semibold text-stone-900">{m.tithiHindi}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-amber-800 font-bold shrink-0">नक्षत्र:</span>
                    <span className="font-semibold text-emerald-800">{m.nakshatraHindi}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-amber-800 font-bold shrink-0">श्रेष्ठ लग्न:</span>
                    <span className="font-semibold text-stone-900">{m.lagnaHindi}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-amber-800 font-bold shrink-0">चौघड़िया:</span>
                    <span className="text-stone-700">{m.choghadiyaHindi}</span>
                  </div>
                </div>

                {/* Significance summary */}
                <p className="text-[11px] text-stone-600 line-clamp-2 italic mb-3">
                  "{m.shastricSignificance}"
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalEvent(m)}
                  className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
                >
                  <span>विस्तृत लग्न शुद्धि</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20हमें%20'${encodeURIComponent(
                    m.title
                  )}'%20दिनांक%20${encodeURIComponent(
                    m.displayDate
                  )}%20हेतु%20ट्रस्ट%20की%20कुंडली%20मिलान%20व%20मुहूर्त%20आरक्षण%20करवाना%20है।`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>आरक्षण करवाएं</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Shastric Guidance Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 text-white rounded-2xl p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              वैयक्तिक मुहूर्त शोधन सेवा (Personalized Kundali & Muhurat Matching)
            </span>
            <h4 className="text-lg sm:text-xl font-bold font-serif-jain text-amber-100">
              क्या आपके मंदिर ट्रस्ट अथवा नगर में विशेष तिथि पर प्रतिष्ठा विचारणीय है?
            </h4>
            <p className="text-xs text-amber-200 max-w-2xl">
              ट्रस्टियों के नामाक्षर, शिलान्यास कर्ता एवं मुख्य लाभार्थियों की जन्मपत्रिका से सूक्ष्म लग्न शुद्धि, त्रिपुष्कर दोष परिहार एवं अष्टम भाव शुद्धि आवश्यक है।
            </p>
          </div>

          <a
            href="tel:9509061075"
            className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm shrink-0"
          >
            संजीव सिपानी जी से सीधे बात करें
          </a>
        </div>
      </div>

      {/* Modal for In-depth Muhurat Inspection */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border-2 border-amber-300 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer"
            >
              ✕
            </button>

            <div className="pr-6 mb-4">
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200 inline-block mb-1">
                {activeModalEvent.eventTypeHindi} • {activeModalEvent.lunarCategoryHindi}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-jain text-amber-950">
                {activeModalEvent.title}
              </h3>
              <div className="text-sm font-semibold text-stone-700 mt-1">
                तारीख: <strong className="text-amber-900">{activeModalEvent.displayDate} ({activeModalEvent.dayHindi})</strong>
              </div>
            </div>

            {/* Shastric details */}
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-700 bg-amber-50/60 p-4 rounded-2xl border border-amber-200 mb-5">
              <div className="flex justify-between border-b border-amber-200/60 pb-1.5">
                <span className="font-semibold text-stone-600">तिथि (Tithi):</span>
                <span className="font-bold text-stone-900">{activeModalEvent.tithiHindi}</span>
              </div>
              <div className="flex justify-between border-b border-amber-200/60 pb-1.5">
                <span className="font-semibold text-stone-600">नक्षत्र (Nakshatra):</span>
                <span className="font-bold text-emerald-800">{activeModalEvent.nakshatraHindi}</span>
              </div>
              <div className="flex justify-between border-b border-amber-200/60 pb-1.5">
                <span className="font-semibold text-stone-600">शुभ योग (Yoga):</span>
                <span className="font-bold text-stone-900">{activeModalEvent.yogaHindi}</span>
              </div>
              <div className="flex justify-between border-b border-amber-200/60 pb-1.5">
                <span className="font-semibold text-stone-600">लग्न (Lagna):</span>
                <span className="font-bold text-amber-950">{activeModalEvent.lagnaHindi}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-stone-600">चौघड़िया (Choghadiya):</span>
                <span className="font-bold text-stone-900">{activeModalEvent.choghadiyaHindi}</span>
              </div>
            </div>

            {/* Shastric notes */}
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 mb-5">
              <strong className="block text-amber-950 mb-1">विशेष ज्योतिषीय टिप्पणियां:</strong>
              {activeModalEvent.specialNotes}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-amber-200">
              <a
                href="tel:9509061075"
                className="w-full sm:w-auto px-4 py-2 bg-amber-800 text-white rounded-xl text-xs font-bold hover:bg-amber-900 text-center"
              >
                फोन पर परामर्श लें (9509061075)
              </a>

              <a
                href={`https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20हमें%20'${encodeURIComponent(
                  activeModalEvent.title
                )}'%20दिनांक%20${encodeURIComponent(
                  activeModalEvent.displayDate
                )}%20के%20मुहूर्त%20का%20सटीक%20समय%20व%20विधि%20विधान%20जानना%20है।`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>व्हाट्सएप पर विवरण प्राप्त करें</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
