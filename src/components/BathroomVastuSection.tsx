import React, { useState } from 'react';
import { 
  ShowerHead, 
  Ban, 
  CheckCircle2, 
  AlertTriangle, 
  Compass, 
  Droplets, 
  Flame, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  Info 
} from 'lucide-react';

export const BathroomVastuSection: React.FC = () => {
  const [selectedDirection, setSelectedDirection] = useState<string>('east');

  const DIRECTION_EVALUATIONS: Record<string, {
    status: 'सर्वोत्तम' | 'शुभ' | 'मध्यम' | 'महादोष (निषिद्ध)';
    snanagarVerdict: string;
    toiletVerdict: string;
    color: string;
    doshaReason: string;
    remedy: string;
  }> = {
    'east': {
      status: 'सर्वोत्तम',
      snanagarVerdict: 'स्नानागार (बिना टॉयलेट) हेतु सर्वोत्तम। प्रातः सूर्य किरणों के साथ शुद्धि स्नान से ओज और आरोग्यता की वृद्धि होती है।',
      toiletVerdict: 'शौचालय हेतु सख्त निषिद्ध। पूर्व में टॉयलेट होने से यश की हानि, संतानों में अशांति और आध्यात्मिक पतन होता है।',
      color: 'emerald',
      doshaReason: 'पूर्व दिशा इंद्र और सूर्य की दिशा है। यहां केवल शुद्धि स्नान शुभ है, गंदगी विसर्जन महादोष है।',
      remedy: 'यदि पूर्व में टॉयलेट बन चुका है, तो उसे तत्काल बंद करें या वायव्य कोण में स्थानांतरित करें।'
    },
    'north': {
      status: 'शुभ',
      snanagarVerdict: 'स्नानागार हेतु अति शुभ। उत्तर दिशा कुबेर व जल तत्व की है, यहां स्नान कक्ष पवित्रता बनाए रखता है।',
      toiletVerdict: 'शौचालय हेतु पूर्णतः वर्जित। उत्तर में टॉयलेट होने से मंदिर ट्रस्ट की वित्तीय स्थिति डांवाडोल होती है।',
      color: 'emerald',
      doshaReason: 'उत्तर दिशा चुंबकीय सकारात्मक ऊर्जा का प्रवेश द्वार है।',
      remedy: 'उत्तर दिशा को स्वच्छ, खुला और केवल स्नान/जल संचयन हेतु ही प्रयोग करें।'
    },
    'north-east': {
      status: 'महादोष (निषिद्ध)',
      snanagarVerdict: 'ईशान कोण में केवल भूमिगत जलकुंड व प्रक्षाल कुंड शुभ है। बंद बाथरूम बनाने से बचें, हल्का खुला जलस्थान रखें।',
      toiletVerdict: 'घोर महादोष। ईशान कोण में शौचालय बनाना जिनालय का सबसे विनाशकारी वास्तु दोष है, जिससे मंदिर वीरान हो सकता है।',
      color: 'rose',
      doshaReason: 'ईशान कोण वास्तु पुरुष का मस्तक और साक्षात शिव/तीर्थंकर देवत्व का स्थान है।',
      remedy: 'ईशान के शौचालय को बिना विलंब तुरंत ध्वस्त करके वहां पवित्र गंगाजल या केसर जल छिड़कें और भूमिगत जलकुंड बनाएं।'
    },
    'north-west': {
      status: 'सर्वोत्तम',
      snanagarVerdict: 'स्नानागार हेतु मध्यम। यहां अतिथि अथवा सामान्य उपयोग का स्नान कक्ष बनाया जा सकता है।',
      toiletVerdict: 'शौचालय ब्लॉक हेतु शास्त्र सम्मत सर्वोत्तम दिशा। वायु तत्व अपशिष्ट और दुर्गंध को शीघ्र विसर्जित करता है।',
      color: 'emerald',
      doshaReason: 'वायव्य दिशा विसर्जन ऊर्जा की स्वामी है, जिससे मंदिर के मूल परिसर में पवित्रता बनी रहती है।',
      remedy: 'टॉयलेट का मुख उत्तर-दक्षिण रखें और पर्याप्त एग्जॉस्ट पंखा लगाएं।'
    },
    'south-east': {
      status: 'मध्यम',
      snanagarVerdict: 'स्नानागार हेतु मध्यम, किंतु गीजर व वॉटर हीटर लगाने हेतु सर्वोत्तम कोण।',
      toiletVerdict: 'शौचालय हेतु निषिद्ध। आग्नेय में टॉयलेट होने से अग्नि तत्व दूषित होता है, जिससे ट्रस्ट में कलह व दुर्घटनाएं हो सकती हैं।',
      color: 'amber',
      doshaReason: 'अग्नि और जल का प्रत्यक्ष विरोध है।',
      remedy: 'आग्नेय कोण में केवल भट्टी, जनरेटर, मीटर व गीजर ही स्थापित करें।'
    },
    'south': {
      status: 'मध्यम',
      snanagarVerdict: 'स्नानागार हेतु सामान्य। जल का निकास उत्तर की ओर होना चाहिए।',
      toiletVerdict: 'शौचालय हेतु बाह्य सीमा पर उपयुक्त। मुख्य मंदिर से दूर दक्षिण दीवार के सहारे शौचालय बनाया जा सकता है।',
      color: 'stone',
      doshaReason: 'दक्षिण दिशा पृथ्वी व यम की दिशा है।',
      remedy: 'शौचालय का दरवाजा कभी भी मुख्य मंदिर की ओर न खुले।'
    },
    'south-west': {
      status: 'महादोष (निषिद्ध)',
      snanagarVerdict: 'स्नानागार हेतु अनुचित। नैऋत्य में अधिक जल प्रवाह से पृथ्वी तत्व कमजोर होता है।',
      toiletVerdict: 'शौचालय हेतु भारी दोष। नैऋत्य में टॉयलेट होने से मंदिर के मुख्य दानदाताओं और साधु भगवंतों के स्वास्थ्य पर विपरीत असर पड़ता है।',
      color: 'rose',
      doshaReason: 'नैऋत्य स्थिरता और नेतृत्व का कोना है, यहां गड्ढा या मलमूत्र विसर्जन वर्जित है।',
      remedy: 'नैऋत्य में साधु उपाश्रय, ओवरहेड टैंक या भारी स्टोर ही बनाएं।'
    },
    'west': {
      status: 'शुभ',
      snanagarVerdict: 'स्नानागार हेतु शुभ। वरुण देव की दिशा होने से जल का उपयोग सामान्य है।',
      toiletVerdict: 'शौचालय हेतु पश्चिम का वायव्य भाग उपयुक्त है।',
      color: 'blue',
      doshaReason: 'पश्चिम दिशा सूर्यास्त और वरुण की है।',
      remedy: 'फर्श का ढलान उत्तर या पूर्व की ओर रखें।'
    }
  };

  const currentEval = DIRECTION_EVALUATIONS[selectedDirection] || DIRECTION_EVALUATIONS['east'];

  return (
    <div className="bg-white rounded-3xl border-2 border-amber-300 p-5 sm:p-7 lg:p-9 shadow-md space-y-8">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-amber-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
            <ShowerHead className="w-4 h-4 text-amber-700" />
            <span>जैन जिनालय शुद्धि एवं स्वच्छता विज्ञान</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-jain text-stone-900">
            बाथरूम एवं स्नानागार वास्तु निर्देशिका (Temple Bathroom Vastu)
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
            पूजा पूर्व शुद्धि स्नान गृह, केसर पूजा वस्त्र धारण कक्ष, गीजर दिशा, दर्पण, ड्रेनेज ढलान एवं शौचालय (Toilet) से पृथकता के आगमोक्त नियम।
          </p>
        </div>

        <a
          href="https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20मंदिर%20में%20बाथरूम%20व%20टॉयलेट%20वास्तु%20दोष%20निवारण%20हेतु%20सलाह%20चाहिए।"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-2xs transition-colors shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          <span>संजीव सिपानी जी से राय लें</span>
        </a>
      </div>

      {/* Critical Highlight: Snanagar vs Toilet Difference */}
      <div className="bg-gradient-to-r from-amber-50 via-amber-100/50 to-amber-50 p-5 rounded-2xl border-2 border-amber-400">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-800 text-amber-100 flex items-center justify-center shrink-0 font-bold">
            !
          </div>
          <div className="space-y-1.5">
            <h3 className="font-serif-jain font-bold text-base sm:text-lg text-amber-950">
              मूलभूत शास्त्रीय अंतर: पूजा स्नानागार (Bathroom) बनाम शौचालय (Toilet)
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              जैन श्वेतांबर जिनालय में <strong>पूजा पूर्व स्नान गृह (शुद्धि स्नानागार)</strong> और <strong>शौचालय (मल-मूत्र विसर्जन)</strong> को एक साथ कंबाइंड बनाना <strong>घोर महादोष और आशातना</strong> है। 
              स्नानागार सात्विक शुद्धि का स्थान है जिसे <strong>पूर्व (East) या उत्तर (North)</strong> में होना चाहिए, जबकि शौचालय विसर्जन का स्थान है जिसे मुख्य मंदिर से दूर बाह्य परिसर में <strong>वायव्य (North-West)</strong> में होना अनिवार्य है।
            </p>
          </div>
        </div>
      </div>

      {/* 2 Comparison Cards: Snanagar Rules vs Toilet Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Snanagar Card */}
        <div className="bg-emerald-50/40 rounded-2xl border-2 border-emerald-300 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                सात्विक शुद्धि कक्ष
              </span>
              <ShowerHead className="w-5 h-5 text-emerald-700" />
            </div>

            <h4 className="font-serif-jain font-bold text-xl text-emerald-950 mb-2">
              १. पूजा पूर्व शुद्धि स्नानागार (Bathroom)
            </h4>
            <p className="text-xs text-stone-600 mb-4">
              केसर पूजा (अंगपूजा) से पूर्व शरीर शुद्धि एवं पूजा के श्वेत वस्त्र धारण करने का पावन कक्ष
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>आदर्श दिशा:</strong> पूर्व दिशा (East) अथवा उत्तर दिशा (North) का स्वच्छ कक्ष।</span>
              </li>
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>स्नान करते समय मुख:</strong> सदैव पूर्व (East) या उत्तर (North) की ओर रहे।</span>
              </li>
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>गीजर / वॉटर हीटर:</strong> बाथरूम के आग्नेय कोण (South-East - अग्नि तत्व) में ही लगाएं।</span>
              </li>
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>दर्पण (Mirror):</strong> पूर्व अथवा उत्तर की दीवार पर लगाना शुभ है।</span>
              </li>
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>पूजा वस्त्र कक्ष:</strong> स्नानागार के पास धूपदार, स्वच्छ वस्त्र सुखाने व धोती-दुपट्टा पहनने का अलग सूखा कक्ष हो।</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-200 text-xs text-emerald-900 font-medium">
            ✓ इसमें टॉयलेट सीट (कमोड) कभी भी नहीं होनी चाहिए।
          </div>
        </div>

        {/* Toilet Card */}
        <div className="bg-rose-50/40 rounded-2xl border-2 border-rose-300 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-300">
                बाह्य विसर्जन ब्लॉक
              </span>
              <Ban className="w-5 h-5 text-rose-700" />
            </div>

            <h4 className="font-serif-jain font-bold text-xl text-rose-950 mb-2">
              २. शौचालय वास्तु एवं मर्यादा (Toilet Block)
            </h4>
            <p className="text-xs text-stone-600 mb-4">
              मंदिर भवन से पूर्णतः पृथक, बाह्य परिसर की सीमा में स्थापित मलमूत्र विसर्जन व्यवस्था
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-rose-100">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>आदर्श दिशा:</strong> केवल वायव्य कोण (North-West) अथवा दक्षिण दिशा की बाहरी बाउंड्री।</span>
              </li>
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-rose-100">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>कमोड सीट अक्ष:</strong> उत्तर-दक्षिण दिशा में (शौच करते समय मुख उत्तर या दक्षिण में रहे, पूर्व-पश्चिम नहीं)।</span>
              </li>
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-rose-100">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>दूरी नियम:</strong> मुख्य गर्भगृह, वेदी व उपाश्रय से कम से कम 30 से 50 फीट की दूरी पर हो।</span>
              </li>
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-rose-100">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>सीवर पाइपलाइन:</strong> मंदिर के मुख्य भवन या गर्भगृह के नीचे से सीवर पाइप कभी न गुजारें।</span>
              </li>
              <li className="flex items-start gap-2 bg-white/80 p-2.5 rounded-xl border border-rose-100">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>आचमन कुंड:</strong> शौचालय से बाहर निकलने पर हाथ-पैर धोने व आचमन हेतु अलग जल स्थान हो।</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-rose-200 text-xs text-rose-900 font-medium">
            ✕ ईशान, पूर्व या ब्रह्मस्थान में शौचालय बनाना महादोष है।
          </div>
        </div>
      </div>

      {/* Interactive Direction Suitability Checker for Bathrooms */}
      <div className="bg-stone-50 rounded-2xl border border-amber-300 p-5 sm:p-7 shadow-xs">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h3 className="font-serif-jain font-bold text-lg sm:text-xl text-stone-900">
            दिशा अनुसार स्नानागार व शौचालय पात्रता चेकर (Direction Evaluator)
          </h3>
          <p className="text-stone-600 text-xs mt-1">
            किसी भी दिशा का चयन करें और देखें कि वहां बाथरूम या टॉयलेट बनाना शास्त्र सम्मत है या नहीं:
          </p>
        </div>

        {/* Direction Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {[
            { id: 'east', name: 'पूर्व (East)' },
            { id: 'north', name: 'उत्तर (North)' },
            { id: 'north-east', name: 'ईशान (North-East)' },
            { id: 'north-west', name: 'वायव्य (North-West)' },
            { id: 'south-east', name: 'आग्नेय (South-East)' },
            { id: 'south', name: 'दक्षिण (South)' },
            { id: 'south-west', name: 'नैऋत्य (South-West)' },
            { id: 'west', name: 'पश्चिम (West)' },
          ].map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDirection(d.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedDirection === d.id
                  ? 'bg-amber-800 text-white shadow-md border-amber-900 ring-2 ring-amber-300'
                  : 'bg-white hover:bg-amber-100 text-stone-700 border border-stone-300'
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>

        {/* Evaluation Result Card */}
        <div className="bg-white rounded-2xl border-2 border-amber-300 p-5 shadow-sm max-w-3xl mx-auto">
          <div className="flex items-center justify-between border-b border-amber-200 pb-3 mb-4 flex-wrap gap-2">
            <div>
              <span className="text-xs text-stone-500 font-medium">चयनित दिशा:</span>
              <h4 className="text-lg font-bold font-serif-jain text-amber-950">
                {DIRECTION_EVALUATIONS[selectedDirection] ? selectedDirection.toUpperCase() : ''}
              </h4>
            </div>
            <div>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  currentEval.status.includes('सर्वोत्तम') || currentEval.status.includes('शुभ')
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                    : currentEval.status.includes('महादोष')
                    ? 'bg-rose-100 text-rose-900 border-rose-300'
                    : 'bg-amber-100 text-amber-900 border-amber-300'
                }`}
              >
                पात्रता: {currentEval.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm mb-4">
            <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-200">
              <span className="font-bold text-emerald-950 block mb-1">स्नानागार (Bathroom) विचार:</span>
              <p className="text-stone-700">{currentEval.snanagarVerdict}</p>
            </div>

            <div className="bg-rose-50/50 p-3 rounded-xl border border-rose-200">
              <span className="font-bold text-rose-950 block mb-1">शौचालय (Toilet) विचार:</span>
              <p className="text-stone-700">{currentEval.toiletVerdict}</p>
            </div>
          </div>

          <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs text-stone-700">
            <span className="font-bold text-stone-900 block mb-0.5">शास्त्रीय कारण एवं उपाय:</span>
            <p className="text-stone-600 mb-1">{currentEval.doshaReason}</p>
            <p className="text-amber-900 font-semibold">{currentEval.remedy}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
