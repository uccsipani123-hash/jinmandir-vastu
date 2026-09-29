import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle, Printer, MessageCircle, RotateCcw } from 'lucide-react';

interface AuditQuestion {
  id: string;
  question: string;
  category: string;
  idealAnswer: 'yes' | 'no';
  explanation: string;
}

const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: 'q1',
    question: 'क्या मूलनायक तीर्थंकर भगवान की वेदी पूर्वाभिमुख (East) अथवा उत्तराभिमुख (North) स्थापित है?',
    category: 'गर्भगृह',
    idealAnswer: 'yes',
    explanation: 'भगवान का मुख पूर्व या उत्तर में होने से सूर्य व चुंबकीय सकारात्मक ऊर्जा का सीधा प्रवाह होता है।'
  },
  {
    id: 'q2',
    question: 'क्या मंदिर का भूमिगत जलकुंड (Underground Tank / बोरवेल) केवल ईशान कोण (North-East) में स्थित है?',
    category: 'जल व्यवस्था',
    idealAnswer: 'yes',
    explanation: 'ईशान कोण में जल तत्व होने से संघ में शांति, ज्ञान और अक्षय पुण्य की वृद्धि होती है।'
  },
  {
    id: 'q3',
    question: 'क्या छत पर रखी भारी ओवरहेड पानी की टंकी नैऋत्य कोण (South-West) अथवा पश्चिम में है?',
    category: 'जल व्यवस्था',
    idealAnswer: 'yes',
    explanation: 'नैऋत्य भाग भारी (Heavy) होने से मंदिर का स्थायित्व और आर्थिक संतुलन मजबूत रहता है।'
  },
  {
    id: 'q4',
    question: 'क्या मंदिर का मुख्य प्रवेश द्वार (सिंहद्वार / तोरण द्वार) पूर्व अथवा उत्तर दिशा में है?',
    category: 'मुख्य द्वार',
    idealAnswer: 'yes',
    explanation: 'पूर्व व उत्तर का महाद्वार भक्तों के लिए असीम सकारात्मक ऊर्जा और मंगलकारी आगमन लाता है।'
  },
  {
    id: 'q5',
    question: 'क्या श्री नाकोड़ा भैरव जी की प्रतिमा मूल गर्भगृह से अलग, आग्नेय कोण (SE) अथवा दक्षिण रक्षक वेदी में है?',
    category: 'देव प्रतिमा',
    idealAnswer: 'yes',
    explanation: 'भैरव जी शासन रक्षक देव हैं। उनका स्थान आग्नेय/दक्षिण में स्वतंत्र होने से कोई उपद्रव नहीं होता।'
  },
  {
    id: 'q6',
    question: 'क्या दादागुरुदेव (जिनदत्त सूरि, कुशल सूरि, राजेंद्र सूरि) की पादुका/वेदी ईशान या उत्तर दिशा में है?',
    category: 'देव प्रतिमा',
    idealAnswer: 'yes',
    explanation: 'ईशान व उत्तर गुरु व ज्ञान की दिशा है, जिससे संघ में एकता व धर्म प्रभावना बनी रहती है।'
  },
  {
    id: 'q7',
    question: 'क्या वीर मणिभद्र बाबा का स्थान वायव्य कोण (North-West) अथवा मुख्य रक्षक द्वार पर है?',
    category: 'देव प्रतिमा',
    idealAnswer: 'yes',
    explanation: 'मणिभद्र वीर वायव्य कोण में वायु तत्व और संपदा की रक्षा करते हैं।'
  },
  {
    id: 'q8',
    question: 'क्या मंदिर का शिखर एवं कलश परिसर के अन्य सभी भवनों व कमरों की तुलना में सर्वोच्च (Highest) है?',
    category: 'शिखर वास्तु',
    idealAnswer: 'yes',
    explanation: 'शिखर के ऊपर किसी का निर्माण नहीं होना चाहिए, शिखर ही ब्रह्मांडीय ऊर्जा का सर्वोच्च शिखर है।'
  },
  {
    id: 'q9',
    question: 'क्या मंदिर परिसर का शौचालय मुख्य मंदिर से दूर, बाह्य सीमा में वायव्य (NW) या दक्षिण में है?',
    category: 'शुद्धि एवं स्वच्छता',
    idealAnswer: 'yes',
    explanation: 'ईशान, पूर्व या गर्भगृह के पास शौचालय होना महादोष है। इसे दूर वायव्य में ही होना चाहिए।'
  },
  {
    id: 'q10',
    question: 'क्या भगवान के अभिषेक एवं प्रक्षाल का पवित्र जल (गंधोदक) अलग पवित्र भूगर्भ कुंड में संचित होता है?',
    category: 'प्रक्षाल मर्यादा',
    idealAnswer: 'yes',
    explanation: 'पवित्र प्रक्षाल जल सामान्य सीवर या गंदी नाली में कभी नहीं मिलना चाहिए। यह घोर आशातना है।'
  },
  {
    id: 'q11',
    question: 'क्या मंदिर की भोजन शाला (रसोई) आग्नेय कोण (South-East) में और रसोइए का मुख पूर्व में है?',
    category: 'भोजन शाला',
    idealAnswer: 'yes',
    explanation: 'आग्नेय कोण में शुद्ध सात्विक पाकशाला होने से अन्न में पवित्रता और आरोग्य रहता है।'
  },
  {
    id: 'q12',
    question: 'क्या पूज्य साधु-साध्वी जी का उपाश्रय शांत वातावरण में नैऋत्य (SW) अथवा पश्चिम में है?',
    category: 'उपाश्रय',
    idealAnswer: 'yes',
    explanation: 'नैऋत्य दिशा पृथ्वी तत्व की स्थिरता देकर संयम, त्याग और समाधि भाव को पुष्ट करती है।'
  },
  {
    id: 'q13',
    question: 'क्या मंदिर की ऊपरी मंजिल जाने वाली सीढ़ियां दक्षिण अथवा पश्चिम दीवार के सहारे दक्षिणावर्त हैं?',
    category: 'सीढ़ियां',
    idealAnswer: 'yes',
    explanation: 'ईशान में सीढ़ी नहीं होनी चाहिए। दक्षिण-पश्चिम में विषम संख्या वाली सीढ़ियां शुभ होती हैं।'
  },
  {
    id: 'q14',
    question: 'क्या प्राचीन जैनागम, ज्ञान भंडार व स्वाध्याय कक्ष उत्तर दिशा (North) अथवा ईशान में हैं?',
    category: 'ज्ञान भंडार',
    idealAnswer: 'yes',
    explanation: 'उत्तर बुध व सरस्वती की दिशा है, जिससे जिनवाणी का स्वाध्याय संघ को तत्वज्ञान देता है।'
  }
];

export const VastuAuditTool: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, 'yes' | 'no' | null>>({});

  const handleSelect = (qId: string, val: 'yes' | 'no') => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const resetAudit = () => {
    setAnswers({});
  };

  const answeredCount = Object.keys(answers).length;
  const compliantCount = Object.entries(answers).filter(
    ([id, val]) => {
      const q = AUDIT_QUESTIONS.find(item => item.id === id);
      return q && val === q.idealAnswer;
    }
  ).length;

  const scorePercentage = answeredCount > 0 ? Math.round((compliantCount / AUDIT_QUESTIONS.length) * 100) : 0;

  return (
    <div className="bg-white rounded-2xl border-2 border-amber-300 p-5 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-amber-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase mb-2">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>जिनालय वास्तु मूल्यांकन प्रपत्र</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-jain text-stone-900">
            जैन श्वेतांबर मंदिर वास्तु स्कोरकार्ड (Audit Tool)
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            ट्रस्ट पदाधिकारी एवं निर्माण समिति नीचे दिए गए 14 प्रश्नों के उत्तर देकर अपने मंदिर का वास्तु अनुपालन स्कोर जांचें:
          </p>
        </div>

        {/* Score Badge */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-400 p-4 rounded-2xl text-center min-w-[160px] shrink-0 shadow-xs">
          <div className="text-xs font-bold text-amber-900 uppercase">वास्तु स्कोर</div>
          <div className="text-3xl sm:text-4xl font-extrabold font-serif-jain text-amber-950 my-1">
            {scorePercentage}%
          </div>
          <div className="text-[11px] text-stone-600">
            {compliantCount} / {AUDIT_QUESTIONS.length} मानक शास्त्रानुकूल
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4 my-6">
        {AUDIT_QUESTIONS.map((q, idx) => {
          const currentVal = answers[q.id];
          const isCompliant = currentVal === q.idealAnswer;
          const isNonCompliant = currentVal && currentVal !== q.idealAnswer;

          return (
            <div
              key={q.id}
              className={`p-4 rounded-xl border transition-all ${
                isCompliant
                  ? 'bg-emerald-50/40 border-emerald-300'
                  : isNonCompliant
                  ? 'bg-rose-50/40 border-rose-300'
                  : 'bg-stone-50/70 border-stone-200 hover:border-amber-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                      {q.category}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">मानक #{idx + 1}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                    {q.question}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 italic">
                    वास्तु फल: {q.explanation}
                  </p>
                </div>

                {/* Yes / No buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleSelect(q.id, 'yes')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      currentVal === 'yes'
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
                    }`}
                  >
                    हाँ (Yes)
                  </button>
                  <button
                    onClick={() => handleSelect(q.id, 'no')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      currentVal === 'no'
                        ? 'bg-rose-700 text-white shadow-xs'
                        : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
                    }`}
                  >
                    नहीं (No)
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Actions and WhatsApp Remediation */}
      <div className="pt-4 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={resetAudit}
            className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 p-2 rounded-lg bg-stone-100 hover:bg-stone-200 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>पुनः जांचें (Reset)</span>
          </button>

          <button
            onClick={() => window.print()}
            className="no-print flex items-center gap-1.5 text-xs text-amber-900 hover:text-amber-950 p-2 rounded-lg bg-amber-100 hover:bg-amber-200 cursor-pointer font-medium"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>ऑडिट रिपोर्ट प्रिंट करें</span>
          </button>
        </div>

        <a
          href={`https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20हमारे%20जैन%20मंदिर%20का%20वास्तु%20स्कोर%20${scorePercentage}%25%20आया%20है।%20कृपया%20बिना%20तोड़फोड़%20दोष%20निवारण%20हेतु%20मार्गदर्शन%20दें।`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>बिना तोड़फोड़ दोष निवारण हेतु संजीव जी से संपर्क करें</span>
        </a>
      </div>
    </div>
  );
};
