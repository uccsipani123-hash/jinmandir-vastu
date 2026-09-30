import React, { useState } from 'react';
import { 
  Shield, 
  Sparkles, 
  Bell, 
  Flame, 
  Building2, 
  Store, 
  Compass, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar, 
  Award, 
  HelpCircle,
  Phone,
  MessageCircle,
  Layers,
  Sun
} from 'lucide-react';

export const GhantakarnaMahavirVastu: React.FC = () => {
  const [activePlacementTab, setActivePlacementTab] = useState<'temple' | 'home' | 'business'>('temple');

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg border-2 border-amber-500/40">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-700/80 text-amber-200 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/40">
            <Shield className="w-4 h-4 text-amber-300" />
            <span>महुडी तीर्थ अधिष्ठायक • 52 वीरों में 30वें महाप्रतापी वीर</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif-jain text-amber-100 mb-2">
            श्री घंटाकर्ण महावीर देव एवं यंत्र वास्तु विज्ञान
          </h2>

          <p className="text-amber-200/90 text-xs sm:text-sm sm:leading-relaxed">
            कलिकल्पतरु श्री घंटाकर्ण महावीर देव की शास्त्र सम्मत वेदी, प्रतिमा, अष्टधातु घंटा, धनुष-बाण संरेखण, यंत्र स्थापत्य, सुखड़ी महाभोग व धूप-हवन विधान। जिनालय, घर के मंदिर एवं व्यापार प्रतिष्ठान में समस्त वास्तुदोषों, भय, रोग व विघ्नों के निवारण हेतु प्रामाणिक निर्देशिका।
          </p>

          <div className="mt-4 pt-4 border-t border-amber-700/60 flex flex-wrap items-center gap-4 text-xs text-amber-300 font-medium">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              आदर्श दिशा: <strong>वायव्य कोण (North-West) / उत्तर</strong>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              आराधना दिवस: <strong>रविवार, काली चौदस व पुष्य नक्षत्र</strong>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Bell className="w-3.5 h-3.5 text-amber-400" />
              ध्वनि तत्व: <strong>अष्टधातु घंटा नाद</strong>
            </span>
          </div>
        </div>
      </div>

      {/* 3-Way Context Switcher (Temple vs Home vs Business) */}
      <div className="bg-white rounded-3xl border-2 border-amber-300 p-5 sm:p-7 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h3 className="text-xl sm:text-2xl font-bold font-serif-jain text-stone-900">
            स्थापना स्थल अनुसार वास्तु नियम चयन करें
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            घंटाकर्ण देव की स्थापना स्थल के अनुसार दिशा, मर्यादा और पूजा विधान में विशिष्ट शास्त्रीय अंतर होता है:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
          <button
            onClick={() => setActivePlacementTab('temple')}
            className={`p-3.5 rounded-2xl border-2 font-bold text-xs sm:text-sm flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
              activePlacementTab === 'temple'
                ? 'bg-amber-800 text-white border-amber-900 shadow-md ring-2 ring-amber-300'
                : 'bg-stone-50 hover:bg-amber-50 text-stone-700 border-stone-200'
            }`}
          >
            <Building2 className={`w-5 h-5 ${activePlacementTab === 'temple' ? 'text-amber-300' : 'text-amber-700'}`} />
            <span>१. जैन जिनालय में वेदी</span>
            <span className="text-[10px] font-normal opacity-90">मंदिर परिसर / उप-वेदी</span>
          </button>

          <button
            onClick={() => setActivePlacementTab('home')}
            className={`p-3.5 rounded-2xl border-2 font-bold text-xs sm:text-sm flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
              activePlacementTab === 'home'
                ? 'bg-amber-800 text-white border-amber-900 shadow-md ring-2 ring-amber-300'
                : 'bg-stone-50 hover:bg-amber-50 text-stone-700 border-stone-200'
            }`}
          >
            <Sparkles className={`w-5 h-5 ${activePlacementTab === 'home' ? 'text-amber-300' : 'text-amber-700'}`} />
            <span>२. घर के मंदिर में स्थापना</span>
            <span className="text-[10px] font-normal opacity-90">गृह रक्षा एवं सुख-शांति</span>
          </button>

          <button
            onClick={() => setActivePlacementTab('business')}
            className={`p-3.5 rounded-2xl border-2 font-bold text-xs sm:text-sm flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
              activePlacementTab === 'business'
                ? 'bg-amber-800 text-white border-amber-900 shadow-md ring-2 ring-amber-300'
                : 'bg-stone-50 hover:bg-amber-50 text-stone-700 border-stone-200'
            }`}
          >
            <Store className={`w-5 h-5 ${activePlacementTab === 'business' ? 'text-amber-300' : 'text-amber-700'}`} />
            <span>३. दुकान / फैक्ट्री / ऑफिस</span>
            <span className="text-[10px] font-normal opacity-90">व्यापार वृद्धि व शत्रु शमन</span>
          </button>
        </div>

        {/* Tab 1: Temple / Jin Mandir Vastu */}
        {activePlacementTab === 'temple' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-300">
              <h4 className="font-serif-jain font-bold text-lg text-amber-950 mb-2 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-800" />
                <span>जिनालय परिसर में श्री घंटाकर्ण महावीर देव वेदी के शास्त्रोक्त नियम</span>
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                जैन श्वेतांबर तीर्थों में अधिष्ठायक देवों का स्थान अत्यंत आदरणीय किंतु मर्यादाबद्ध है। महुडी तीर्थ की अधिष्ठायक परंपरा अनुसार घंटाकर्ण देव मूल तीर्थंकर के शासन रक्षक हैं।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">१. वेदी की दिशा एवं स्थिति</span>
                <p className="text-stone-700">
                  • <strong>सर्वोत्तम दिशा:</strong> मंदिर परिसर के <strong>वायव्य कोण (North-West)</strong> अथवा उत्तर-वायव्य कोने में स्वतंत्र रक्षक मंडप।<br />
                  • <strong>मुख संरेखण:</strong> घंटाकर्ण देव का मुख पूर्वाभिमुख (East) अथवा उत्तराभिमुख (North) होना चाहिए।<br />
                  • <strong>ऊंचाई मर्यादा:</strong> वेदी की ऊंचाई मूलनायक तीर्थंकर भगवान की मुख्य वेदी से कम से कम 1 से 2 फीट नीची होनी चाहिए।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">२. प्रतिमा लक्षण एवं आयुध</span>
                <p className="text-stone-700">
                  • <strong>आयुध स्वरूप:</strong> प्रभु के बाएं हाथ में ऊर्ध्वमुखी प्रत्यंचा चढ़ा धनुष और दाएं हाथ में बाण (तीर) व गदा हो।<br />
                  • <strong>घंटा संरेखण:</strong> प्रतिमा के चरणों के पास पवित्र घंटा उत्कीर्ण होना चाहिए।<br />
                  • <strong>धातु / पाषाण:</strong> शुद्ध श्वेत संगमरमर, कसौटी पाषाण अथवा अष्टधातु/पीतल की प्रतिमा विहित है।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">३. सुखड़ी महाभोग की अखंड मर्यादा</span>
                <p className="text-stone-700">
                  • <strong>भोग सामग्री:</strong> शुद्ध गाय का देसी घी, ऑर्गेनिक देशी गुड़ और गेहूं का मोटा आटा।<br />
                  • <strong>कठोर शास्त्र नियम:</strong> सुखड़ी का भोग मंदिर की चारदीवारी के भीतर ही भक्तों को गर्म-गर्म खाना होता है। इसे मंदिर से बाहर ले जाना <strong>सख्त वर्जित</strong> है।<br />
                  • <strong>रसोई की स्थिति:</strong> सुखड़ी बनाने की पवित्र भट्टी आग्नेय कोण (SE) में होनी चाहिए।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">४. हवन कुंड एवं दीप स्थापना</span>
                <p className="text-stone-700">
                  • <strong>हवन कुंड:</strong> वेदी के सम्मुख आग्नेय कोण में चौकोर हवन कुंड हो, जिसमें केवल गुग्गल, लोबान व शुद्ध घी की आहुति दी जाए।<br />
                  • <strong>अखंड दीपक:</strong> शुद्ध तिल के तेल अथवा गाय के घी का अखंड दीपक आग्नेय में जालीदार सुरक्षा पेटी में रखें।<br />
                  • <strong>धुआं निकास:</strong> हवन व धूप का धुआं मूल गर्भगृह में न जाए, इसके लिए स्वतंत्र चिमनी हो।
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Home Temple Vastu */}
        {activePlacementTab === 'home' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-300">
              <h4 className="font-serif-jain font-bold text-lg text-amber-950 mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-800" />
                <span>घर के मंदिर में श्री घंटाकर्ण महावीर देव एवं यंत्र स्थापना</span>
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                घर में घंटाकर्ण देव की कृपा से नजर दोष, अकाल मृत्यु भय, पारिवारिक कलह व वास्तु दोष दूर होते हैं।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">१. घर के मंदिर में स्थिति</span>
                <p className="text-stone-700">
                  • घर के लकड़ी अथवा संगमरमर के मंदिर में तीर्थंकर प्रभु (आदिनाथ/महावीर आदि) मुख्य मध्य में विराजित होते हैं।<br />
                  • श्री घंटाकर्ण महावीर जी की फोटो या छोटी प्रतिमा को <strong>प्रभु के बाईं ओर (दर्शनार्थी के दाईं ओर)</strong> अथवा मंदिर के वायव्य भाग में रखें।<br />
                  • उनकी ऊंचाई तीर्थंकर प्रभु से किंचित् नीचे रखें।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">२. श्री घंटाकर्ण यंत्र स्थापना</span>
                <p className="text-stone-700">
                  • तांबे या चांदी पर उत्कीर्ण सिद्ध यंत्र को मंदिर की <strong>पूर्व अथवा उत्तर दीवार पर</strong> स्थापित करें।<br />
                  • यंत्र को लाल अथवा पीले रेशमी वस्त्र पर आसन दें।<br />
                  • नित्य केसर-चंदन का तिलक लगाएं और शुद्ध घी का दीपक प्रज्वलित करें।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">३. घरेलू भोग एवं धूप विधान</span>
                <p className="text-stone-700">
                  • घर में प्रत्येक रविवार को शुद्ध गुड़-घी अथवा सुखड़ी का भोग लगाएं और परिवार के सभी सदस्य घर में ही प्रसाद ग्रहण करें।<br />
                  • रविवार संध्या को शुद्ध गुग्गल व कपूर की धूप पूरे घर में घुमाएं; इससे नकारात्मक ऊर्जा व नजर दोष दूर होता है।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">४. दैनिक महामंत्र जाप</span>
                <p className="text-stone-700">
                  • नित्य स्नानोपरांत 27 या 108 बार जाप करें:<br />
                  <span className="font-bold text-amber-950 block mt-1 p-2 bg-amber-100 rounded-lg text-center font-serif-jain">
                    ॥ ॐ ह्रीं श्रीं क्लीं ब्लूं घंटाकर्ण महावीर नमः ॥
                  </span>
                  • यह महामंत्र घर के चारों कोनों में एक सुरक्षा कवच (Aura Shield) निर्मित करता है।
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Business / Shop / Factory Vastu */}
        {activePlacementTab === 'business' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-300">
              <h4 className="font-serif-jain font-bold text-lg text-amber-950 mb-2 flex items-center gap-2">
                <Store className="w-5 h-5 text-amber-800" />
                <span>दुकान, शोरूम, ऑफिस एवं फैक्ट्री में घंटाकर्ण देव वास्तु</span>
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                व्यापार में धन हानि, रुका हुआ पैसा, ग्राहकों का अभाव, कर्मचारियों की चोरी या प्रतिद्वंद्वियों की ईर्ष्या दूर करने हेतु घंटाकर्ण देव की स्थापना अचूक मानी जाती है।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">१. गल्ला / तिजोरी (Cash Box) संरेखण</span>
                <p className="text-stone-700">
                  • गल्ला उत्तर दिशा की ओर खुलना चाहिए (कुबेर स्थान)।<br />
                  • तिजोरी अथवा कैश बॉक्स के ठीक भीतर अथवा उसके ऊपर दीवार पर <strong>"श्री घंटाकर्ण महावीर यंत्र"</strong> स्थापित करें।<br />
                  • यंत्र के दर्शन से व्यर्थ के खर्चे रुकते हैं और आय में निरंतर वृद्धि होती है।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">२. मुख्य प्रवेश द्वार पर घंटा वास्तु</span>
                <p className="text-stone-700">
                  • दुकान या फैक्ट्री के मुख्य द्वार के ठीक ऊपर अंदर की ओर पीतल का घंटा लगाएं।<br />
                  • जब भी ग्राहक या कर्मचारी प्रवेश करे, घंटे की सूक्ष्म ध्वनि से नकारात्मक तरंगें कटती हैं।<br />
                  • द्वार के दोनों ओर स्वास्तिक व ॐ घंटाकर्णाय नमः अंकित करें।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">३. फैक्ट्री में मशीनरी व वायव्य रक्षा</span>
                <p className="text-stone-700">
                  • फैक्ट्री में वायव्य कोण (NW) वायु तत्व का स्थान है, जहां तैयार माल (Finished Goods) रखा जाता है।<br />
                  • वायव्य कोण में घंटाकर्ण देव की तस्वीर लगाने से माल की त्वरित बिक्री होती है और स्टॉक कभी जाम नहीं होता।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">४. धनतेरस व पुष्य नक्षत्र साधना</span>
                <p className="text-stone-700">
                  • प्रत्येक गुरु-पुष्य या रवि-पुष्य नक्षत्र में बही-खाता पूजन के साथ घंटाकर्ण यंत्र का अभिषेक करें।<br />
                  • आश्विन वद चौदस (काली चौदस) को विशेष सुखड़ी का भोग लगाकर प्रतिष्ठान में ही बांटें।
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sacred Key Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-amber-300 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mb-3 font-bold">
              🏹
            </div>
            <h4 className="font-serif-jain font-bold text-stone-900 text-base mb-1">
              धनुष-बाण का ऊर्ध्व संरेखण
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              घंटाकर्ण देव की प्रतिमा में धनुष पर चढ़ा बाण सदैव ऊर्ध्वमुखी (आकाश की ओर 45 डिग्री कोण) होना चाहिए। यह दिशाओं से आने वाले समस्त अदृश्य अमंगल, ग्रहदोष व तांत्रिक उपद्रवों को नष्ट करता है।
            </p>
          </div>
          <span className="mt-3 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full w-fit">
            ✓ अभय व विजय मुद्रा
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-amber-300 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mb-3 font-bold">
              🔔
            </div>
            <h4 className="font-serif-jain font-bold text-stone-900 text-base mb-1">
              अष्टधातु घंटे का नाद विज्ञान
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              घंटाकर्ण देव के नाम में ही 'घंटा' (Bell) समाहित है। इनके मंदिर में बजाया गया घंटा सूक्ष्म वास्तु तरंगों (Vastu Micro-frequencies) को शुद्ध करता है और 108 फीट की परिधि में सकारात्मक प्राण ऊर्जा भरता है।
            </p>
          </div>
          <span className="mt-3 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full w-fit">
            ✓ ध्वनि वास्तु शुद्धि
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-amber-300 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mb-3 font-bold">
              🍲
            </div>
            <h4 className="font-serif-jain font-bold text-stone-900 text-base mb-1">
              सुखड़ी महाप्रसाद की सीमा मर्यादा
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              महुडी तीर्थ परंपरा के अनुसार सुखड़ी का प्रसाद उस परिसर (मंदिर या घर) की सीमा से बाहर नहीं जाता। यह नियम अहंकार का त्याग कराता है और सभी श्रद्धालुओं को एक स्थान पर समभाव से जोड़ता है।
            </p>
          </div>
          <span className="mt-3 text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full w-fit">
            ✓ मर्यादा परिपालन
          </span>
        </div>
      </div>

      {/* Prohibitions & Strict Cautions */}
      <div className="p-5 rounded-2xl bg-red-50 border-2 border-red-300 text-xs sm:text-sm text-stone-800 space-y-3">
        <div className="flex items-center gap-2 text-red-900 font-bold">
          <AlertTriangle className="w-5 h-5 text-red-700 shrink-0" />
          <h4 className="font-serif-jain text-base">घंटाकर्ण देव स्थापना में कदापि न करें ये 4 भूलें:</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3 rounded-xl border border-red-200">
            <strong className="text-red-900 block mb-0.5">१. तीर्थंकर प्रभु के बराबर न रखें:</strong>
            घंटाकर्ण देव शासन रक्षक देव हैं, वीतराग परमात्मा नहीं। इन्हें मुख्य सिंहासन पर कभी न बिठाएं।
          </div>
          <div className="bg-white p-3 rounded-xl border border-red-200">
            <strong className="text-red-900 block mb-0.5">२. सुखड़ी बाहर न ले जाएं:</strong>
            सुखड़ी का प्रसाद किसी डिब्बे में पैक करके मंदिर या परिसर से बाहर ले जाना शास्त्र विरुद्ध है।
          </div>
          <div className="bg-white p-3 rounded-xl border border-red-200">
            <strong className="text-red-900 block mb-0.5">३. दक्षिण दिशा में पीठ न रखें:</strong>
            प्रतिमा का मुख कभी भी दक्षिण दिशा की ओर न रखें। मुख पूर्व अथवा उत्तर ही शुभ है।
          </div>
          <div className="bg-white p-3 rounded-xl border border-red-200">
            <strong className="text-red-900 block mb-0.5">४. अशुद्ध अवस्था में स्पर्श न करें:</strong>
            चमड़े की बेल्ट, पर्स, अशौच अथवा बिना स्नान किए प्रतिमा या यंत्र का स्पर्श न करें।
          </div>
        </div>
      </div>

      {/* Expert Consultation Banner */}
      <div className="bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 p-5 rounded-3xl border-2 border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">व्यक्तिगत मार्गदर्शन:</span>
          <h4 className="text-base sm:text-lg font-bold font-serif-jain text-stone-900">
            क्या आप अपने जिनालय, घर या दुकान में घंटाकर्ण देव व यंत्र स्थापित करना चाहते हैं?
          </h4>
          <p className="text-xs text-stone-600 mt-0.5">
            संजीव सिपानी जी से दिशा शोधन, वेदी नाप, यंत्र सिद्धि एवं मुहूर्त हेतु सीधे परामर्श लें।
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="tel:9509061075"
            className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span>9509061075</span>
          </a>

          <a
            href="https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20श्री%20घंटाकर्ण%20महावीर%20देव%20वास्तु%20व%20यंत्र%20स्थापना%20हेतु%20परामर्श%20चाहिए।"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
            <span>व्हाट्सएप</span>
          </a>
        </div>
      </div>
    </div>
  );
};
