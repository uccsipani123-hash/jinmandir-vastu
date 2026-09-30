import React, { useState } from 'react';
import { Sparkles, Shield, Flame, BookOpen, Crown, ChevronRight, Check, AlertCircle, Compass } from 'lucide-react';

export const DeityVastuSection: React.FC = () => {
  const [activeDeity, setActiveDeity] = useState<number>(0);

  const DEITIES = [
    {
      id: 'moolnayak',
      name: 'मूलनायक तीर्थंकर भगवान प्रतिमा व वेदी',
      subtitle: 'श्री आदिनाथ, शांतिनाथ, पार्श्वनाथ, महावीर स्वामी आदि 24 तीर्थंकर',
      icon: Sparkles,
      idealDirection: 'मध्य-पश्चिम में वेदी, भगवान की दृष्टि पूर्वाभिमुख (सर्वोत्तम) अथवा उत्तराभिमुख',
      color: 'amber',
      badge: 'सर्वोच्च देवाधिदेव पद',
      summary: 'जिनालय का प्राण केंद्र। वीतराग प्रभु की प्रतिमा निर्विकार, नासाग्र दृष्टि, पद्मासन अथवा कायोत्सर्ग मुद्रा में मकराना श्वेत संगमरमर या उत्तम पाषाण पर स्थापित हो।',
      coreRules: [
        'गर्भगृह के केंद्र से किंचित् पश्चिम की ओर ठोस वेदी पर सिंहासनारोहण।',
        'प्रतिमा के ऊपर छत्रत्रय (3 छत्र), पीछे प्रभा-भामंडल, दोनों ओर चंवर-ढोरते इंद्रों का शिल्प।',
        'वेदी की ऊंचाई रंगमंडप से कम से कम 21 से 31 अंगुल ऊंची होनी चाहिए ताकि दर्शक को नासाग्र दर्शन सुलभ हो।',
        'भगवान के प्रक्षाल जल (गंधोदक) की परनालिका केवल और केवल ईशान (North-East) में भूगर्भ कुंड में जाए।',
        'परिक्रमा पथ (प्रदक्षिणा पथ) कम से कम 3 से 5 फीट चौड़ा, स्वच्छ एवं प्रकाशयुक्त होना चाहिए।'
      ],
      strictGuidelines: [
        'प्रतिमा के ठीक पीछे दीवार में खिड़की या सीधा द्वार न हो।',
        'वेदी के सीधे ऊपर कोई बीम (धरन) या लोहे का संवाहक नहीं होना चाहिए।',
        'अंजनशलाका व प्रतिष्ठा सुविहित आचार्य भगवंतों द्वारा ब्रह्म मुहूर्त में नक्षत्र शुद्धि के साथ ही हो।'
      ]
    },
    {
      id: 'nakoda-bhairav',
      name: 'श्री नाकोड़ा भैरव जी प्रतिमा वास्तु',
      subtitle: 'कलिकल्पतरु, विघ्नहर्ता, जैन शासन रक्षक देव (नाकोड़ा तीर्थ परंपरा)',
      icon: Flame,
      idealDirection: 'आग्नेय कोण (South-East) अथवा दक्षिण सीमा पर स्थित रक्षक देवकुलिका',
      color: 'rose',
      badge: 'शासन रक्षक देव',
      summary: 'श्री नाकोड़ा भैरव जी की आराधना से संपूर्ण संघ व मंदिर की समस्त संकटों व उपद्रवों से रक्षा होती है। इनकी स्थापना मूल गर्भगृह से अलग स्वतंत्र वेदी में की जाती है।',
      coreRules: [
        'भैरव जी की वेदी की ऊंचाई मूलनायक भगवान की वेदी से सदैव नीचे (कम ऊंचाई पर) होनी चाहिए।',
        'भैरव जी का मुख उत्तर अथवा पूर्व की ओर रहे ताकि दर्शनार्थी दक्षिण/पश्चिम मुखी होकर अर्पण कर सकें।',
        'अखंड तेल/घी का दीपक आग्नेय कोण में जालीदार वेंटिलेटेड कैबिनेट में प्रज्वलित हो।',
        'नैवेद्य (सुखड़ी, श्रीफल) व सिंदूर/वरख अर्पण हेतु पृथक पवित्र स्थान की व्यवस्था हो।',
        'धूप-दीप के धुएं की निकासी हेतु स्वतंत्र चिमनी की व्यवस्था की जाए ताकि गर्भगृह धूमिल न हो।'
      ],
      strictGuidelines: [
        'मूल तीर्थंकर भगवान की मुख्य वेदी पर भैरव जी को कदापि न बिठाएं।',
        'ईशान कोण में भैरव जी की स्थापना शास्त्र निषिद्ध है।'
      ]
    },
    {
      id: 'dadagurudev',
      name: 'श्री दादागुरुदेव प्रतिमा व चरण पादुका वास्तु',
      subtitle: 'श्री जिनदत्त सूरि, जिनकुशल सूरि, मणिधारी जिनचंद्र सूरि, राजेंद्र सूरि आदि',
      icon: BookOpen,
      idealDirection: 'ईशान कोण (North-East) अथवा उत्तर-वायव्य (दादावाड़ी शैली)',
      color: 'emerald',
      badge: 'युगप्रधान गुरु भगवंत',
      summary: 'दादागुरुदेव की कृपा से संघ में एकता, धर्म प्रभावना व ज्ञान की वृद्धि होती है। गुरु मंदिर अथवा पादुका की स्थापना ईशान/उत्तर में ज्ञान ऊर्जा के प्रवाह को जागृत करती है।',
      coreRules: [
        'दादागुरुदेव की प्रतिमा के साथ उनके पावन चरण पादुका की प्रतिष्ठा पूर्वाभिमुख या उत्तराभिमुख हो।',
        'दादावाड़ी अथवा गुरु वेदी का शिखर मुख्य मंदिर के शिखर से मर्यादापूर्वक नीचा होना चाहिए।',
        'गुरुदेव के समक्ष इकतीसा पाठ, गुरु वंदना, आरती एवं सामयिक करने हेतु प्रशस्त हॉल हो।',
        'चरण पादुका पर नित्य केसर-अक्षत पूजा हेतु पवित्र जल निकास की उत्तम व्यवस्था हो।'
      ],
      strictGuidelines: [
        'गुरु प्रतिमा को मूल तीर्थंकर के सिंहासन पर बराबर में न रखें; गुरु का आदर स्वतंत्र वेदी में होता है।',
        'गुरु मंदिर के ऊपर कोई शौचालय, भारी स्टोर या पानी की टंकी न बनाएं।'
      ]
    },
    {
      id: 'yaksh-yakshini',
      name: 'यक्ष एवं यक्षिणी प्रतिमा वास्तु',
      subtitle: 'माता चक्रेश्वरी, पद्मावती, धरणेंद्र, गोमुख, अंबिका देवी आदि शासन रक्षक',
      icon: Shield,
      idealDirection: 'गर्भगृह के दोनों पार्श्व (यक्ष: भगवान के दाहिने, यक्षिणी: भगवान के बाएं)',
      color: 'purple',
      badge: 'शासन देव-देवी',
      summary: 'प्रत्येक तीर्थंकर के शासन की रक्षा हेतु सम्यग्दृष्टि यक्ष-यक्षिणी नियुक्त होते हैं। इनकी सममित (Symmetrical) स्थिति मंदिर के रक्षा कवच को अभेद्य बनाती है।',
      coreRules: [
        'जब दर्शनार्थी भगवान के सम्मुख खड़े हों: दर्शनार्थी के बाईं ओर यक्ष (धरणेंद्र/गोमुख) और दाईं ओर यक्षिणी (पद्मावती/चक्रेश्वरी) की स्थापना।',
        'यदि स्वतंत्र देवकुलिका में स्थापित करें तो पद्मावती/चक्रेश्वरी माता की वेदी उत्तर अथवा आग्नेय कोण में शुभ है।',
        'यक्ष-यक्षिणी की दृष्टि तीर्थंकर प्रभु के श्रीचरणों की ओर विनीत भाव में होनी चाहिए।',
        'माता पद्मावती व चक्रेश्वरी देवी के लिए चुनरी, श्रृंगार व कुमकुम पूजा की शास्त्रोक्त मर्यादा रखी जाए।'
      ],
      strictGuidelines: [
        'यक्ष-यक्षिणी की प्रतिमा का आकार तीर्थंकर प्रतिमा से बड़ा या बराबर नहीं होना चाहिए (सामान्यतः 1/3 या 1/4 अनुपात)।',
        'उन्हें मूल वेदी के मुख्य सिंहासन पर कभी न बिठाएं।'
      ]
    },
    {
      id: 'veer-manibhadra',
      name: 'वीर मणिभद्र बाबा प्रतिमा वास्तु',
      subtitle: 'मगरवाड़ा तीर्थ परंपरा के महाप्रतापी रक्षक देव, ऐरावत वाहन',
      icon: Crown,
      idealDirection: 'वायव्य कोण (North-West) अथवा मुख्य सिंहद्वार का रक्षक मंडप',
      color: 'blue',
      badge: 'तीव्र विघ्नहर्ता वीर',
      summary: 'श्री मणिभद्र वीर मंदिर, यात्रियों एवं तीर्थ की संपत्ति की रक्षा करते हैं। वायव्य कोण में वायु तत्व के नियंत्रण हेतु इनकी स्थापना संघ में स्थिरता लाती है।',
      coreRules: [
        'मणिभद्र जी का वाहन ऐरावत हाथी होता है। प्रतिमा में वीर रस युक्त अभय मुद्रा, गदा/खड्ग का विधान है।',
        'मंदिर के बाह्य परकोटे, सिंहद्वार के निकट अथवा वायव्य कोण के रक्षक कक्ष में स्थापना सर्वोत्तम है।',
        'सुखड़ी (गुड़, गेहूं का आटा, शुद्ध देसी घी) का महाप्रसाद बनाने एवं भोग लगाने का शुद्ध कक्ष समीप हो।',
        'रविवार और शुक्ल पक्ष की पंचमी/चौदस को विशेष धूप-दीप अर्पण की व्यवस्था हो।'
      ],
      strictGuidelines: [
        'सुखड़ी का प्रसाद मंदिर परिसर की सीमा से बाहर ले जाना निषिद्ध है, अतः परिसर में ही वितरण की व्यवस्था हो।',
        'मूल तीर्थंकर के गर्भगृह के भीतर मणिभद्र वीर की स्थापना कभी न करें।'
      ]
    },
    {
      id: 'ghantakarna-mahavir',
      name: 'श्री घंटाकर्ण महावीर देव प्रतिमा व वेदी वास्तु',
      subtitle: 'महुडी तीर्थ परंपरा के कलिकल्पतरु, 30वें वीर, धनुष-बाण एवं घंटाधारी महाप्रतापी रक्षक देव',
      icon: Shield,
      idealDirection: 'वायव्य कोण (North-West) अथवा उत्तर दिशा में स्वतंत्र रक्षक वेदी (पूर्वाभिमुख या उत्तराभिमुख)',
      color: 'amber',
      badge: 'कलिकल्पतरु 30वें वीर',
      summary: 'श्री घंटाकर्ण महावीर देव जैन श्वेतांबर शासन के सर्वोच्च संकटमोचक रक्षक देव हैं। महुडी तीर्थ की पावन परंपरा अनुसार इनकी स्थापना से वास्तुदोष, ग्रहदोष, शत्रु भय, रोग एवं व्यापारिक रुकावटों का तत्काल नाश होता है।',
      coreRules: [
        'वेदी की स्थिति: मूल गर्भगृह से अलग, बाह्य रंगमंडप अथवा परिसर के वायव्य कोण (NW) या उत्तर-वायव्य भाग में स्वतंत्र उप-वेदी।',
        'प्रतिमा शिल्प: हाथ में ऊर्ध्वमुखी सधा हुआ धनुष-बाण, गदा, मस्तक पर मुकुट एवं चरणों के समीप मंगलकारी घंटा (Bell)।',
        'सुखड़ी महाभोग मर्यादा: शुद्ध गाय का देसी घी, देशी गुड़ व गेहूं के आटे से बनी गरमा-गरम सुखड़ी का भोग। सुखड़ी मंदिर परिसर में ही भक्तों में वितरित कर ग्रहण करना अनिवार्य है; बाहर ले जाना निषिद्ध है।',
        'श्री घंटाकर्ण यंत्र स्थापना: सिद्ध प्राण-प्रतिष्ठित तांबे, चांदी या अष्टधातु यंत्र को पूर्व अथवा उत्तर दीवार पर नेत्र-ऊंचाई पर स्थापित करें।',
        'अष्टधातु घंटा वास्तु: वेदी के समक्ष अष्टधातु या कांस्य का भारी घंटा लगाएं, जिसकी ध्वनि तरंगें संपूर्ण परिसर के सूक्ष्म वास्तुदोषों का शमन करती हैं।',
        'साधना व हवन दिवस: प्रत्येक रविवार, शुक्ल पक्ष की चौदस एवं आश्विन वद चौदस (काली चौदस/धनतेरस) को गुग्गल, लोबान व शुद्ध घी से हवन व दीप प्रज्वलन।'
      ],
      strictGuidelines: [
        'मूल तीर्थंकर परमात्मा के मुख्य सिंहासन पर घंटाकर्ण देव को कदापि स्थापित न करें; यह शासन रक्षक देव की स्वतंत्र उप-वेदी है।',
        'सुखड़ी का प्रसाद किसी भी दशा में मंदिर परिसर की चारदीवारी से बाहर न ले जाएं।',
        'अशुद्ध अवस्था, चमड़े की वस्तु या अशौच में प्रतिमा या यंत्र का स्पर्श पूर्णतः वर्जित है।'
      ]
    }
  ];

  const current = DEITIES[activeDeity];

  return (
    <div className="bg-gradient-to-b from-amber-50/50 to-white rounded-2xl border border-amber-200/90 p-4 sm:p-6 lg:p-8 shadow-sm">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-amber-700" />
          <span>श्वेतांबर आगम एवं प्रतिष्ठा सारोद्धार विधान</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif-jain text-stone-900">
          देव प्रतिमा एवं वेदी वास्तु स्थापत्य
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2">
          तीर्थंकर मूलनायक, नाकोड़ा भैरव जी, दादागुरुदेव, यक्ष-यक्षिणी एवं मणिभद्र वीर की शास्त्र सम्मत स्थापना दिशा, वेदी ऊंचाई व पूजा मर्यादा।
        </p>
      </div>

      {/* Tabs / Selector */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {DEITIES.map((deity, idx) => {
          const Icon = deity.icon;
          const isSelected = activeDeity === idx;
          return (
            <button
              key={deity.id}
              onClick={() => setActiveDeity(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-amber-800 text-white shadow-md border-amber-900 ring-2 ring-amber-300'
                  : 'bg-white hover:bg-amber-100 text-stone-700 border border-amber-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-amber-700'}`} />
              <span>{deity.name.split('प्रतिमा')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Feature Display */}
      <div className="bg-white rounded-2xl border-2 border-amber-300 p-5 sm:p-8 shadow-md">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-amber-200">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                {current.badge}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-jain text-amber-950">
              {current.name}
            </h3>
            <p className="text-stone-600 text-sm font-medium">
              {current.subtitle}
            </p>
          </div>

          <div className="bg-amber-50/90 border border-amber-300 p-3.5 rounded-xl text-xs sm:text-sm max-w-md shrink-0">
            <div className="flex items-center gap-1.5 font-bold text-amber-950 mb-1">
              <Compass className="w-4 h-4 text-amber-700" />
              <span>शास्त्रोक्त आदर्श दिशा (Direction):</span>
            </div>
            <div className="text-stone-800 font-semibold">
              {current.idealDirection}
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="text-stone-700 text-sm sm:text-base my-5 leading-relaxed bg-amber-50/30 p-3.5 rounded-xl border border-amber-100">
          {current.summary}
        </p>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Core Rules */}
          <div className="bg-emerald-50/40 rounded-xl p-4 sm:p-5 border border-emerald-200">
            <h4 className="font-bold text-emerald-900 text-sm sm:text-base flex items-center gap-2 mb-3">
              <Check className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>अनिवार्य स्थापत्य एवं वेदी नियम (Must Follow):</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
              {current.coreRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Strict Prohibitions */}
          <div className="bg-rose-50/40 rounded-xl p-4 sm:p-5 border border-rose-200">
            <h4 className="font-bold text-rose-900 text-sm sm:text-base flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>सख्त वर्जनाएं एवं मर्यादा (Strict Caution):</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
              {current.strictGuidelines.map((guideline, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold mt-0.5">✕</span>
                  <span className="text-stone-800">{guideline}</span>
                </li>
              ))}
            </ul>

            {/* Consultation Note */}
            <div className="mt-4 pt-3 border-t border-rose-200 text-xs text-rose-900">
              <strong>परामर्श सूत्र:</strong> प्रतिमा के अंग प्रमाण, सिंहासन की ऊंचाई और प्रतिष्ठा मुहूर्त निर्धारण हेतु <strong>संजीव सिपानी (9509061075)</strong> से व्यक्तिगत मार्गदर्शन अवश्य लें।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
