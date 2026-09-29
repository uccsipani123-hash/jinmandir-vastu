import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Flame, 
  BookOpen, 
  Crown, 
  Sun, 
  Moon, 
  Printer, 
  MessageCircle,
  HelpCircle,
  Layers,
  Award
} from 'lucide-react';

interface PratishthaDay {
  dayNumber: number;
  title: string;
  theme: string;
  subTitle: string;
  timing: string;
  icon: any;
  coreRituals: string[];
  mantras: string[];
  trusteeInstructions: string[];
}

export const PratishthaVidhiGuide: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

  const PRATISHTHA_DAYS: PratishthaDay[] = [
    {
      dayNumber: 1,
      title: 'प्रथम दिवस: कुंभ स्थापना, अखंड दीप एवं मंडल पूजन',
      theme: 'आवाहन एवं वेदी शुद्धि',
      subTitle: 'विघ्नविनाशक श्री नाकोड़ा भैरव जी, क्षेत्रपाल एवं 16 विद्यादेवियों की आराधना',
      timing: 'प्रातः 07:15 AM से मध्याह्न 12:30 PM',
      icon: Flame,
      coreRituals: [
        'मंगल कलश एवं कुंभ स्थापना: 108 तीर्थों के जल, नवरत्न, स्वर्ण एवं पवित्र औषधियों से कुंभ प्रतिष्ठा।',
        'अखंड दीपक प्रज्वलन: आग्नेय कोण में प्रतिष्ठा समाप्ति तक निरंतर प्रज्वलित रहने वाले अखंड महादीप की स्थापना।',
        'मातृका पूजन एवं 16 विद्यादेवी आराधना: समस्त दसों दिशाओं के दिग्पालों को रक्षा सूत्र निवेदन।',
        'श्री नाकोड़ा भैरव एवं क्षेत्रपाल पूजन: महोत्सव में किसी भी प्रकार के विघ्न निवारण हेतु रक्षा मंडप स्थापन।'
      ],
      mantras: [
        'ॐ ह्रीं श्रीं अर्हं णमो अरिहंताणं कुंभं प्रतिष्ठापयामि नमः स्वाहा',
        'श्री नाकोड़ा भैरव रक्षा मंत्र',
        'अधिष्ठायक देव वंदना सूत्र'
      ],
      trusteeInstructions: [
        'यज्ञमंडप (प्रतिष्ठा मंडप) में केवल पूजा के शुद्ध धोती-दुपट्टा पहने श्रावकों को ही बैठने की अनुमति दें।',
        'अखंड दीपक हेतु पर्याप्त शुद्ध देसी घी एवं जालीदार कैबिनेट की व्यवस्था रखें।'
      ]
    },
    {
      dayNumber: 2,
      title: 'द्वितीय दिवस: गर्भ कल्याणक महोत्सव एवं 14 महास्वप्न दर्शन',
      theme: 'तीर्थंकर अवतार पूर्व संकेत',
      subTitle: 'माता त्रिशला / मरुदेवी के 14 शुभ महास्वप्नों की मंगल बोली एवं फल वर्णन',
      timing: 'प्रातः 08:30 AM से दोपहर 01:30 PM',
      icon: Moon,
      coreRituals: [
        'गर्भ कल्याणक पूजन: तीर्थंकर प्रभु के माता के गर्भ में अवतरण का पावन स्मरण।',
        '14 महास्वप्न दर्शन: गज (हाथी), वृषभ (बैल), सिंह, लक्ष्मी, पुष्पमाला, पूर्णचंद्र, सूर्य, ध्वजा, पूर्ण कुंभ, पद्म सरोवर, क्षीरसागर, देवविमान, रत्नराशि एवं निर्धूम अग्नि के प्रतीकों का पूजन।',
        'स्वप्नों की मंगल बोलियां एवं माता-पिता बने श्रावक-श्राविका का बहुमान।',
        'गर्भ शुद्धि महाअभिषेक एवं शांति स्तोत्र पाठ।'
      ],
      mantras: [
        'ॐ ह्रीं श्रीं गर्भकल्याणक प्राप्ताय अर्हते नमः',
        'चउद्दस महासुमिणा पाठ',
        'शांतिधारा स्तोत्र'
      ],
      trusteeInstructions: [
        '14 स्वप्नों के रजत/स्वर्ण प्रतीकों को अत्यंत सावधानी व सुरक्षा के साथ मंच पर प्रदर्शित करें।',
        'महिला मंडल द्वारा मंगल बधाई गीतों की व्यवस्था रखें।'
      ]
    },
    {
      dayNumber: 3,
      title: 'तृतीय दिवस: जन्म कल्याणक महोत्सव एवं मेरु जन्माभिषेक',
      theme: 'त्रिभुवन आनंदोत्सव',
      subTitle: 'सौधर्म इंद्र द्वारा सुमेरु पर्वत पर 1008 कलशों से भगवान का जन्माभिषेक',
      timing: 'प्रातः 06:45 AM से दोपहर 12:30 PM',
      icon: Sun,
      coreRituals: [
        'जन्म कल्याणक उद्घोष: शंखनाद, भेरी, नगाड़े एवं घंटानाद के साथ प्रभु जन्म का मंगल समाचार।',
        'इंद्र सभा एवं ऐरावत हाथी पर प्रभु को लेकर सुमेरु पर्वत प्रस्थान का भव्य जुलूस (शोभायात्रा)।',
        'मेरु पर्वत पर पाण्डुक शिला पर 1008 कलशों से वृहद् शांतिस्नान एवं अभिषेक।',
        'पालना झुलाना: सभी श्रावक-श्राविकाओं द्वारा प्रभु के पालने को झुलाने का लाभ।'
      ],
      mantras: [
        'ॐ ह्रीं श्रीं जन्मकल्याणक प्राप्ताय श्री जिनेन्द्राय नमः स्वाहा',
        'स्नात्र पूजा महाकाव्य',
        '1008 कलश अभिषेक मंत्र'
      ],
      trusteeInstructions: [
        'अभिषेक जल के निष्कासन हेतु सुरक्षित तांबे की पाइपलाइन व गंधोदक संचयन कुंड तैयार रखें।',
        'विशाल जनसमूह हेतु सुगम दर्शन एवं प्रसाद वितरण की व्यवस्था करें।'
      ]
    },
    {
      dayNumber: 4,
      title: 'चतुर्थ दिवस: दीक्षा कल्याणक एवं केवलज्ञान समवशरण रचना',
      theme: 'वैराग्य एवं सर्वज्ञता',
      subTitle: 'राजसी वैभव का त्याग, लोकांतिक देव वंदना, केशलोच एवं केवलज्ञान देशना',
      timing: 'प्रातः 07:30 AM से दोपहर 01:00 PM',
      icon: BookOpen,
      coreRituals: [
        'वरसीदान (वर्षीतप दान): प्रभु द्वारा एक वर्ष तक प्रतिदिन एक करोड़ आठ लाख सुवर्ण मुद्राओं का मुक्तहस्त दान।',
        'दीक्षा अंगीकार: राजसी आभूषणों का त्याग, श्वेत वस्त्र एवं रजोहरण-मुखवस्त्रिका स्वीकार।',
        'केशलोच विधान: पंचमुष्टि केशलोच का भावपूर्ण मंचन।',
        'केवलज्ञान प्राप्ति एवं समवशरण रचना: चारों दिशाओं में चतुर्मुख भगवान के दर्शन, समवशरण में देशना श्रवण।'
      ],
      mantras: [
        'ॐ ह्रीं श्रीं दीक्षाकल्याणक प्राप्ताय नमः',
        'ॐ ह्रीं केवलज्ञान कल्पाय नमः',
        'समवशरण जयमाल'
      ],
      trusteeInstructions: [
        'दीक्षा के समय अत्यधिक शांति एवं वैराग्यमय वातावरण रखें, अनावश्यक कोलाहल न हो।',
        'समवशरण में साधु-साध्वी एवं श्रावक-श्राविका हेतु पृथक विंग रखें।'
      ]
    },
    {
      dayNumber: 5,
      title: 'पंचम दिवस (महामुहूर्त): अंजनशलाका विधान (नेत्रोन्मीलन)',
      theme: 'पाषाण से परमात्मा बनने का क्षण',
      subTitle: 'मध्यरात्रि उपरांत ब्रह्म मुहूर्त में पूज्य आचार्यों द्वारा स्वर्ण शलाका से अंजन संस्कार',
      timing: 'मध्यरात्रि 03:00 AM से प्रातः 06:30 AM (अति गोपनीय एवं पवित्र)',
      icon: Sparkles,
      coreRituals: [
        'अंजनशलाका संस्कार: केवल पूर्ण दीक्षित पूज्य गच्छाधिपति/आचार्य भगवंतों द्वारा ही यह महासंस्कार संपन्न होता है।',
        'अंधकारमय एकांत गर्भगृह में मंत्रोक्त औषधियों, स्वर्ण, कस्तूरी व केशर युक्त अंजन से नेत्रों का उन्मीलन।',
        'प्रतिमा में साक्षात वीतरागी तीर्थंकर के चैतन्य प्राणों की प्रतिष्ठा।',
        'नेत्रोन्मीलन के पश्चात सर्वप्रथम प्रतिमा के सम्मुख दर्पण (कांच) रखा जाता है, ताकि प्रभु के नेत्रों का प्रथम तेज दर्पण में समाए।'
      ],
      mantras: [
        'गुप्त अंजनशलाका महामंत्र (केवल आचार्यों द्वारा उच्चारित)',
        'णमोकार महामंत्र 108 जाप',
        'उवसग्गहरं स्तोत्र अखंड पाठ'
      ],
      trusteeInstructions: [
        'अंजनशलाका के समय गर्भगृह के कपाट पूर्णतः बंद रहते हैं, किसी भी अनाधिकृत व्यक्ति या कैमरे का प्रवेश पूर्णतः वर्जित है।',
        'गर्भगृह के बाहर अखंड मौन एवं नवकार जाप का वातावरण बनाए रखें।'
      ]
    },
    {
      dayNumber: 6,
      title: 'षष्ठ दिवस: सिंहासनारोहण, वेदी प्रतिष्ठा एवं 108 कलश शांतिस्नान',
      theme: 'मूल गर्भगृह में स्थिर वास',
      subTitle: 'मूलनायक वेदी पर प्रभु का स्थायी सिंहासनारोहण एवं वृहद् शांतिधारा',
      timing: 'प्रातः 07:15 AM से मध्याह्न 12:45 PM',
      icon: Crown,
      coreRituals: [
        'सिंहासनारोहण: शुभ स्थिर लग्न (वृषभ/सिंह) में प्रभु की पावन प्रतिमा को गर्भगृह की मूल वेदी पर स्थापित करना।',
        'वेदी के नीचे नवरत्न, स्वर्ण शलाका, ताम्र पत्र, कछुआ व पवित्र औषधियों का भूमिगत स्थापन।',
        'अष्ट प्रातिहार्य (छत्रत्रय, भामंडल, चंवर, सिंहासन आदि) का यथोचित संरेखण।',
        '108 स्वर्ण एवं रजत कलशों से संपूर्ण जिनालय का महा शांतिस्नान एवं शांतिधारा।'
      ],
      mantras: [
        'ॐ ह्रीं श्रीं मूलनायक वेदी प्रतिष्ठापनाय नमः',
        'वृहद् शांति स्तोत्र (मानतुंग सूरि रचित)',
        'अष्टमंगल स्थापना मंत्र'
      ],
      trusteeInstructions: [
        'वेदी पर प्रतिमा चढ़ाते समय केवल शुद्ध वस्त्र धारी लाभार्थी ही वेदी में रहें।',
        'प्रतिमा के पीछे कम से कम 2 से 3 इंच का अंतर रखें ताकि पीठ दीवार से न सटे।'
      ]
    },
    {
      dayNumber: 7,
      title: 'सप्तम दिवस: ध्वजारोहण, तोरण उद्घाटन एवं प्रथम मंदिर प्रवेश',
      theme: 'शासन विजय पताका एवं द्वारोद्घाटन',
      subTitle: 'शिखर पर स्वर्ण कलश व पंचरंगी ध्वजा फहराना तथा निस्सहि बोलकर प्रथम प्रवेश',
      timing: 'प्रातः 08:30 AM से दोपहर 01:15 PM',
      icon: Award,
      coreRituals: [
        'कलश एवं ध्वजादंड स्थापन: शिखर के शीर्ष पर पूर्ण स्वर्ण कलश एवं 11 हाथ ऊंचे ध्वजादंड की प्रतिष्ठा।',
        'पंचरंगी ध्वजारोहण: जयकारों के साथ धर्म ध्वजा का गगनचुंबी फहराव।',
        'सिंहद्वार एवं तोरण उद्घाटन: मुख्य द्वार पर श्रीफल वंदन, मंगल फीता कर्तन व कुमकुम स्वस्तिक।',
        'प्रथम मंदिर प्रवेश: तीन बार "निस्सहि" बोलकर संपूर्ण चतुर्विध संघ का गर्भगृह में प्रवेश व प्रथम चैत्यवंदन।'
      ],
      mantras: [
        'ॐ ह्रीं श्रीं धर्मध्वजां आरोपयामि स्वाहा',
        'तोरण उद्घाटन मंगल पाठ',
        'जय जय आरती आदि जिणंदा'
      ],
      trusteeInstructions: [
        'ध्वजारोहण के समय शिखर पर चढ़ने वाले श्रावक अत्यंत अनुभवी व सुरक्षा बेल्ट से युक्त हों।',
        'द्वारोद्घाटन के समय भीड़ नियंत्रण हेतु स्वयंसेवकों की पंक्तिबद्ध व्यवस्था रखें।'
      ]
    }
  ];

  const current = PRATISHTHA_DAYS[selectedDayIndex];

  return (
    <div className="bg-white rounded-3xl border-2 border-amber-300 p-5 sm:p-7 lg:p-9 shadow-md space-y-8">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-amber-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>श्वेतांबर आगमोक्त प्रतिष्ठा कल्प विधि</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-jain text-stone-900">
            जैन श्वेतांबर प्रतिष्ठा महोत्सव विधि विधान (7-Day Pratishtha Guide)
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
            कुंभ स्थापना से लेकर अंजनशलाका, वेदी सिंहासनारोहण एवं ध्वजारोहण तक सातों दिवस की संपूर्ण पूजा विधि, मंत्रोच्चार एवं आयोजक ट्रस्ट हेतु निर्देश।
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="no-print self-start md:self-auto px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs font-bold rounded-xl border border-amber-300 flex items-center gap-1.5 cursor-pointer shadow-2xs"
        >
          <Printer className="w-4 h-4" />
          <span>प्रतिष्ठा विधि प्रिंट करें</span>
        </button>
      </div>

      {/* 7-Day Stepper Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {PRATISHTHA_DAYS.map((day, idx) => {
          const isSelected = selectedDayIndex === idx;
          const Icon = day.icon;

          return (
            <button
              key={day.dayNumber}
              onClick={() => setSelectedDayIndex(idx)}
              className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                isSelected
                  ? 'bg-amber-800 text-white border-amber-900 shadow-md ring-2 ring-amber-300 scale-102'
                  : 'bg-white hover:bg-amber-50 text-stone-800 border-amber-200'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className={`text-[10px] font-bold uppercase ${isSelected ? 'text-amber-300' : 'text-amber-800'}`}>
                  दिवस {day.dayNumber}
                </span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-amber-700'}`} />
              </div>

              <span className="text-[11px] font-bold line-clamp-2 mt-1">
                {day.theme}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Day Main Display */}
      <div className="bg-gradient-to-br from-amber-50/70 via-white to-amber-100/40 rounded-2xl border-2 border-amber-300 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-amber-200 gap-3">
          <div>
            <span className="text-[11px] font-bold text-amber-900 bg-amber-200/80 px-2.5 py-0.5 rounded-full border border-amber-300 inline-block mb-1">
              प्रतिष्ठा अनुष्ठान • दिवस #{current.dayNumber}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-jain text-amber-950">
              {current.title}
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5 font-medium">
              {current.subTitle}
            </p>
          </div>

          <div className="bg-white/90 border border-amber-200 px-3.5 py-2 rounded-xl text-xs text-stone-700 max-w-xs shrink-0 shadow-2xs">
            <span className="text-stone-500 block text-[10px] font-bold uppercase">शास्त्र सम्मत समय:</span>
            <span className="font-bold text-amber-950">{current.timing}</span>
          </div>
        </div>

        {/* 3 Columns: Core Rituals, Mantras, Trustee Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
          {/* Col 1: Core Rituals */}
          <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-2xs">
            <h4 className="text-xs sm:text-sm font-bold text-amber-950 flex items-center gap-1.5 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>मुख्य शास्त्रोक्त क्रियाएं (Core Rituals):</span>
            </h4>
            <ul className="space-y-2 text-xs text-stone-700">
              {current.coreRituals.map((r, i) => (
                <li key={i} className="flex items-start gap-2 bg-amber-50/40 p-2.5 rounded-lg border border-amber-100">
                  <span className="text-amber-800 font-bold mt-0.5">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Sacred Mantras */}
          <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-2xs">
            <h4 className="text-xs sm:text-sm font-bold text-amber-950 flex items-center gap-1.5 mb-3">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>पठनीय महामंत्र एवं स्तोत्र:</span>
            </h4>
            <ul className="space-y-2 text-xs text-stone-700">
              {current.mantras.map((m, i) => (
                <li key={i} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                  <span className="text-emerald-600 font-bold mt-0.5">卐</span>
                  <span className="font-medium text-stone-900">{m}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-950">
              <strong>नोट:</strong> मंत्रोच्चार केवल सुविहित पूज्य आचार्य भगवंतों अथवा अधिकृत विधिकारक पंडित जी द्वारा ही संपन्न कराया जाता है।
            </div>
          </div>

          {/* Col 3: Trustee & Organizer Instructions */}
          <div className="bg-emerald-50/40 p-4 rounded-xl border border-emerald-200 shadow-2xs">
            <h4 className="text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-1.5 mb-3">
              <Award className="w-4 h-4 text-emerald-700" />
              <span>ट्रस्ट एवं आयोजक समिति हेतु निर्देश:</span>
            </h4>
            <ul className="space-y-2 text-xs text-stone-700">
              {current.trusteeInstructions.map((ins, i) => (
                <li key={i} className="flex items-start gap-2 bg-white/90 p-2.5 rounded-lg border border-emerald-100">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>{ins}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-emerald-200 text-[11px] text-emerald-900">
              प्रतिष्ठा अनुष्ठान मार्गदर्शन हेतु <strong>संजीव सिपानी (9509061075)</strong> से पूर्ण रूपरेखा तैयार करवाएं।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
