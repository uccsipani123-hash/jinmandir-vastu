import React, { useState } from 'react';
import { 
  Clock, 
  Sun, 
  Sunset, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar, 
  Flame, 
  BookOpen, 
  Bell, 
  Printer, 
  MessageCircle 
} from 'lucide-react';

interface PujaTimeSlot {
  id: string;
  name: string;
  timing: string;
  period: string;
  prahara: string;
  icon: any;
  purpose: string;
  itemsUsed: string[];
  mantras: string[];
  rules: string[];
  prohibitions: string[];
}

export const DailyPujaSchedule: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<string>('morning-kesar');

  const PUJA_SCHEDULE: PujaTimeSlot[] = [
    {
      id: 'morning-prakshal',
      name: '१. प्रातःकालीन पावन प्रक्षाल (Prakshal Vidhi)',
      timing: 'प्रातः 6:00 AM से 7:30 AM',
      period: 'सूर्योदय वेला (ब्रह्म मुहूर्त उपरांत)',
      prahara: 'प्रथम प्रहर (Daybreak)',
      icon: Sun,
      purpose: 'तीर्थंकर परमात्मा के पाषाण/धातु बिंब का शुद्ध, छने हुए प्रासुक जल एवं केसर-दूध से पावन अभिषेक।',
      itemsUsed: ['जीवदया युक्त छना जल', 'शुद्ध केसर', 'कपूर', 'सुगंधित अत्तर', 'शुद्ध सूती परिमार्जन वस्त्र (अंगूंछा)'],
      mantras: ['नवकार महामंत्र (णमोकार)', 'स्नात्र पूजा स्तोत्र', 'लघु शांति स्तोत्र', 'उवसग्गहरं स्तोत्र'],
      rules: [
        'पूजा के वस्त्र (सफेद धोती, दुपट्टा/खेस) पहनकर ही वेदी में प्रवेश करें।',
        'मुख पर मुखकोष (मुखपत्ती) बांधें ताकि श्वासोच्छ्वास भगवान के श्रीअंग को न छुए।',
        'प्रक्षाल का पवित्र गंधोदक सीधे ईशान कोण के भूगर्भ कुंड में ही प्रवाहित हो।'
      ],
      prohibitions: [
        'सचित्त (अछना) जल प्रयोग न करें।',
        'चमड़े की बेल्ट, घड़ी, मोबाइल या पर्स पहनकर वेदी में प्रवेश महादोष है।'
      ]
    },
    {
      id: 'morning-kesar',
      name: '२. नवांगी एवं अष्टप्रकारी पूजा (Navangi & Ashta Prakari Puja)',
      timing: 'प्रातः 7:30 AM से 10:00 AM',
      period: 'पूर्वाह्न (Morning)',
      prahara: 'प्रथम-द्वितीय प्रहर',
      icon: Sparkles,
      purpose: 'भगवान के 9 अंगों पर केसर-चंदन अर्चन एवं 8 प्रकार के द्रव्यों से अष्टप्रकारी महापूजा।',
      itemsUsed: [
        'जल (शुद्धता)', 'चंदन (शीतलता)', 'पुष्प (सुगंध)', 'धूप (दुर्गंधनाश)', 
        'दीप (ज्ञान प्रकाश)', 'अक्षत (अक्षय पद)', 'नैवेद्य (अनाहारी पद)', 'फल (मोक्ष फल)'
      ],
      mantras: [
        'अंगुष्ठ जानु कर अंस सीस भाल कंठ हिये नाभि (नवांगी छंद)',
        'अष्टप्रकारी पूजा दोहा',
        'नमुत्थुणं अरिहंताणं भगवंताणं'
      ],
      rules: [
        'नवांगी पूजा क्रम: 1. दोनों अंगूठे 2. दोनों घुटने 3. दोनों कलाइयां 4. दोनों कंधे 5. मस्तक (शिखा) 6. ललाट (तिलक) 7. कंठ 8. हृदय 9. नाभि।',
        'वेदी के सम्मुख पाटे पर स्वस्तिक (साथिया), तीन पुंज (रत्नत्रय) व सिद्धशिला अक्षत से बनाएं।'
      ],
      prohibitions: [
        'दोपहर 11:00 बजे के पश्चात केसर पूजा (अंगपूजा) शास्त्र सम्मत नहीं मानी जाती।',
        'बासी या मुरझाए हुए फूलों का प्रयोग कदापि न करें।'
      ]
    },
    {
      id: 'chaityavandan-midday',
      name: '३. चैत्यवंदन, स्तुति एवं दोपहर स्वाध्याय (Chaityavandan & Swadhyay)',
      timing: 'प्रातः 10:00 AM से 11:30 AM',
      period: 'मध्याह्न पूर्व',
      prahara: 'द्वितीय प्रहर',
      icon: BookOpen,
      purpose: 'भाव-पूजा, चैत्यवंदन, जय वीयराय, थुई, स्तवन एवं जिनवाणी स्वाध्याय।',
      itemsUsed: ['शुद्ध चरवला/आसन', 'धार्मिक ग्रंथ (आगम/प्रवचन)', 'माला (नवकार जाप)'],
      mantras: ['जय वीयराय सूत्र', 'अरिहंत चेइयाणं', 'तिजयपहवर सूत्र', 'वृहद् शांति स्तोत्र'],
      rules: [
        'रंगमंडप में पूर्वाभिमुख अथवा उत्तराभिमुख होकर आसन पर बैठें।',
        'तीन बार खमासमण देकर चैत्यवंदन संपन्न करें।',
        'पूज्य मुनिराजों एवं साध्वी जी भगवंतों के दर्शन व वंदना का यह सर्वोत्तम समय है।'
      ],
      prohibitions: [
        'चैत्यवंदन के समय संसार की गपशप या मोबाइल का प्रयोग न करें।'
      ]
    },
    {
      id: 'evening-aarti',
      name: '४. सांध्यकालीन महाआरती एवं मंगलदीपक (Sandhya Aarti & Mangal Deepak)',
      timing: 'सूर्यास्त के समय (संध्या 6:15 PM से 7:30 PM)',
      period: 'गोधूलि वेला / संधिकाल',
      prahara: 'तृतीय-चतुर्थ प्रहर संधिकाल',
      icon: Sunset,
      purpose: 'समस्त अंधकार, कर्ममल एवं विघ्नों के नाश हेतु 108 या 5 दीपों की आरती एवं मंगलदीपक।',
      itemsUsed: ['विशुद्ध देसी घी के दीपक', 'कर्पूर', 'आरती थाल', 'घंटा, घड़ियाल, शंख एवं ढोल-नगाड़े'],
      mantras: [
        'जय जय आरती आदि जिणंदा, नाभिराया कुल बाल गोविंदा',
        'दीपक जोवो रे जीवड़ा दीपक जोवो रे',
        'वीर प्रभु की आरती',
        'नाकोड़ा भैरव जी आरती'
      ],
      rules: [
        'आरती ठीक सूर्यास्त के समय प्रारंभ होनी चाहिए।',
        'आरती के उपरांत मंगलदीपक घुमाया जाए और अक्षत व दक्षिणा थाली में समर्पित की जाए।',
        'आरती के समय सभी श्रावक-श्राविकाएं खड़े होकर ताली वादन व जयघोष करें।'
      ],
      prohibitions: [
        'सूर्यास्त के पश्चात भगवान की प्रतिमा का स्पर्श (अंगपूजा) या प्रक्षाल पूर्णतः निषिद्ध है।',
        'आरती के दीपक में कृत्रिम मोम या अपवित्र तेल का उपयोग वर्जित है।'
      ]
    },
    {
      id: 'shayan-dwar',
      name: '५. शयन दर्शन एवं द्वार मंगल (Night Rest & Gates Closing)',
      timing: 'रात्रि 7:30 PM से 8:30 PM',
      period: 'रात्रि प्रारंभ',
      prahara: 'रात्रि प्रथम प्रहर',
      icon: Bell,
      purpose: 'सूर्यास्त उपरांत जिनमंदिर के कपाट मंगल (बंद) करना एवं रात्रि शांति।',
      itemsUsed: ['पवित्र धूप', 'कपाट ताला', 'सुरक्षा दीप'],
      mantras: ['णमोकार महामंत्र (27 नवकार)', 'चार शरण सूत्र (चत्तारि सरणं पव्वज्जामि)'],
      rules: [
        'मंदिर के सभी दीपक जालीदार सुरक्षित कैबिनेट में हों ताकि अग्नि का कोई खतरा न रहे।',
        'गर्भ गृह के कपाट आदरपूर्वक जयकारों के साथ बंद किए जाएं।'
      ],
      prohibitions: [
        'रात्रि में मंदिर के अंदर किसी भी प्रकार का शोरगुल, भोजन या निवास (पुजारी/चौकीदार को छोड़कर) वर्जित है।'
      ]
    }
  ];

  const current = PUJA_SCHEDULE.find(s => s.id === selectedSlot) || PUJA_SCHEDULE[1];

  return (
    <div className="bg-white rounded-3xl border-2 border-amber-300 p-5 sm:p-7 lg:p-9 shadow-md space-y-8">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-amber-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
            <Clock className="w-4 h-4 text-amber-700" />
            <span>जैन श्वेतांबर नित्य आराधना समय सारणी</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-jain text-stone-900">
            दैनिक पूजा-पाठ एवं आरती समय चक्र (Daily Puja Schedule)
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
            प्रातः प्रक्षाल, नवांगी केसर पूजा, अष्टप्रकारी पूजा, चैत्यवंदन, सांध्य महाआरती एवं मंगलदीपक का शास्त्रोक्त प्रामाणिक समय एवं विधान।
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="no-print self-start md:self-auto px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs font-bold rounded-xl border border-amber-300 flex items-center gap-1.5 cursor-pointer shadow-2xs"
        >
          <Printer className="w-4 h-4" />
          <span>समय सारणी प्रिंट करें</span>
        </button>
      </div>

      {/* Time Slot Horizontal Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {PUJA_SCHEDULE.map((slot) => {
          const Icon = slot.icon;
          const isSelected = selectedSlot === slot.id;
          return (
            <button
              key={slot.id}
              onClick={() => setSelectedSlot(slot.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-800 text-white border-amber-900 shadow-md ring-2 ring-amber-300 scale-102'
                  : 'bg-white hover:bg-amber-50 text-stone-800 border-amber-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-amber-300' : 'text-amber-800'}`}>
                    {slot.prahara}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-amber-700'}`} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold line-clamp-2">
                  {slot.name.split('(')[0]}
                </h4>
              </div>

              <div className={`mt-3 pt-2 border-t text-[11px] font-semibold ${isSelected ? 'border-amber-700 text-amber-200' : 'border-stone-100 text-stone-600'}`}>
                {slot.timing}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Slot Detailed Display */}
      <div className="bg-gradient-to-br from-amber-50/70 via-white to-amber-100/40 rounded-2xl border-2 border-amber-300 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-amber-200 gap-3">
          <div>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200 inline-block mb-1">
              {current.period}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-jain text-amber-950">
              {current.name}
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              शास्त्र सम्मत समय: <strong className="text-amber-900">{current.timing}</strong>
            </p>
          </div>

          <div className="bg-white/90 border border-amber-200 px-3.5 py-2 rounded-xl text-xs text-stone-700 max-w-xs shrink-0 shadow-2xs">
            <span className="text-stone-500 block text-[10px] font-bold uppercase">आध्यात्मिक उद्देश्य:</span>
            <span className="font-medium text-stone-800">{current.purpose}</span>
          </div>
        </div>

        {/* 3 Columns: Puja Items, Mantras, Rules & Prohibitions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
          {/* Col 1: Items & Preparation */}
          <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-2xs">
            <h4 className="text-xs sm:text-sm font-bold text-amber-950 flex items-center gap-1.5 mb-3">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>पूजन सामग्री एवं द्रव्य:</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {current.itemsUsed.map((item, idx) => (
                <span key={idx} className="text-xs bg-amber-50 border border-amber-200 text-amber-950 px-2.5 py-1 rounded-lg font-medium">
                  {item}
                </span>
              ))}
            </div>

            <h4 className="text-xs sm:text-sm font-bold text-amber-950 flex items-center gap-1.5 mt-5 mb-2.5">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>पठनीय मंत्र एवं स्तोत्र:</span>
            </h4>
            <ul className="space-y-1 text-xs text-stone-700">
              {current.mantras.map((m, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Mandatory Rules (विधि) */}
          <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200 shadow-2xs">
            <h4 className="text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-1.5 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>अनिवार्य पूजा विधि एवं आचार नियम:</span>
            </h4>
            <ul className="space-y-2 text-xs text-stone-700">
              {current.rules.map((r, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white/80 p-2 rounded-lg border border-emerald-100">
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Strict Prohibitions (निषेध) */}
          <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-200 shadow-2xs">
            <h4 className="text-xs sm:text-sm font-bold text-rose-950 flex items-center gap-1.5 mb-3">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>सख्त वर्जनाएं (Strict Prohibitions):</span>
            </h4>
            <ul className="space-y-2 text-xs text-stone-700">
              {current.prohibitions.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white/80 p-2 rounded-lg border border-rose-100">
                  <span className="text-rose-600 font-bold mt-0.5">✕</span>
                  <span className="text-stone-800">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-rose-200 text-[11px] text-rose-900 leading-relaxed">
              <strong>आगम मर्यादा:</strong> सूर्यास्त के पश्चात जिनमंदिर में भगवान का अभिषेक, केसर पूजा या सुगंधित द्रव्यों से स्पर्श सर्वथा निषिद्ध है। केवल भाव-पूजा एवं आरती की जाती है।
            </div>
          </div>
        </div>
      </div>

      {/* Special Weekly & Monthly Puja Schedule (नाकोड़ा भैरव, मणिभद्र वीर, ज्ञान पंचमी) */}
      <div className="bg-stone-50 rounded-2xl border border-stone-200 p-5 sm:p-6">
        <h4 className="font-serif-jain font-bold text-base sm:text-lg text-stone-900 mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-amber-700" />
          <span>साप्ताहिक एवं मासिक विशेष पूजा-पाठ समय (Special Occasions)</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-stone-700">
          <div className="bg-white p-3.5 rounded-xl border border-stone-200">
            <div className="font-bold text-amber-950 mb-1">श्री नाकोड़ा भैरव जी विशेष पूजा</div>
            <p className="text-stone-600">प्रत्येक रविवार एवं शुक्ल पक्ष की अष्टमी/चौदस को मध्याह्न 12:39 बजे विशेष तेल, सिंदूर, अत्तर एवं सुखड़ी भोग।</p>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-stone-200">
            <div className="font-bold text-amber-950 mb-1">वीर मणिभद्र बाबा आराधना</div>
            <p className="text-stone-600">प्रत्येक शुक्ल पक्ष की पंचमी व चौदस को प्रातः 9:00 बजे सुखड़ी प्रसाद, श्रीफल व ध्वज अर्पण (मगरवाड़ा परंपरा)।</p>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-stone-200">
            <div className="font-bold text-amber-950 mb-1">दादागुरुदेव इकतीसा व आरती</div>
            <p className="text-stone-600">प्रत्येक गुरुवार एवं पूर्णिमा को सांध्य आरती उपरांत दादा जिनदत्त व जिनकुशल सूरि जी का सामूहिक इकतीसा पाठ।</p>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-stone-200">
            <div className="font-bold text-amber-950 mb-1">पर्युषण व ओली जी आराधना</div>
            <p className="text-stone-600">भाद्रपद पर्युषण महापर्व में प्रातः 6:30 से कल्पसूत्र वाचन एवं चैत्र-आश्विन में नवपद ओली जी आयंबिल पूजा।</p>
          </div>
        </div>
      </div>
    </div>
  );
};
