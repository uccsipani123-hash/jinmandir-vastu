import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  XCircle, 
  Wrench, 
  Sparkles, 
  Printer, 
  MessageCircle, 
  HelpCircle,
  Filter
} from 'lucide-react';

interface VastuDoshItem {
  id: string;
  name: string;
  location: string;
  severity: 'घोर महादोष' | 'मध्यम दोष' | 'सामान्य दोष';
  negativeImpact: string;
  shastricReason: string;
  remedyWithoutDemolition: string;
}

export const VastuDoshChecklist: React.FC = () => {
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [checkedDoshas, setCheckedDoshas] = useState<Record<string, boolean>>({});

  const VASTU_DOSHAS: VastuDoshItem[] = [
    {
      id: 'dosh-ishan-toilet',
      name: 'ईशान कोण (North-East) में शौचालय अथवा सीवर होना',
      location: 'ईशान कोण (NE)',
      severity: 'घोर महादोष',
      negativeImpact: 'मंदिर का आध्यात्मिक प्रभाव नष्ट होना, संघ में फूट, साधु-संतों का प्रवास न रुकना, भारी विघ्न।',
      shastricReason: 'ईशान वास्तु पुरुष का मस्तक और देवत्व का केंद्र है। यहां मलमूत्र विसर्जन साक्षात धर्म की आशातना है।',
      remedyWithoutDemolition: 'शौचालय का उपयोग तुरंत बंद करें। वहां तांबे का स्वस्तिक, पिरामिड, चांदी की शलाका स्थापित करें और वहां शुद्ध जल का फव्वारा या तुलसी/पुष्प वाटिका बनाएं।'
    },
    {
      id: 'dosh-nairitya-underground',
      name: 'नैऋत्य कोण (South-West) में भूमिगत जलकुंड, कुआं या बोरवेल',
      location: 'नैऋत्य कोण (SW)',
      severity: 'घोर महादोष',
      negativeImpact: 'मंदिर ट्रस्ट में भारी वित्तीय अस्थिरता, प्रमुख दानदाताओं की आर्थिक क्षति, अचानक कलह व मुकदमेबाजी।',
      shastricReason: 'नैऋत्य पृथ्वी तत्व का भारी व ऊंचा क्षेत्र है। यहां गड्ढा होने से स्थिरता का संपूर्ण नाश होता है।',
      remedyWithoutDemolition: 'उस बोरवेल/टैंक को यथासंभव बंद कर ईशान में नया टैंक बनाएं। नैऋत्य में 9 फीट ऊंचा पीतल का ध्वज, भारी पाषाण अथवा छत पर भारी ओवरहेड टैंक रखकर भार संतुलन करें।'
    },
    {
      id: 'dosh-agneya-water',
      name: 'आग्नेय कोण (South-East) में भूमिगत पानी का संचय या बोरवेल',
      location: 'आग्नेय कोण (SE)',
      severity: 'घोर महादोष',
      negativeImpact: 'आकस्मिक अग्नि दुर्घटनाएं, मंदिर पदाधिकारियों में उग्र विवाद, रोग-व्याधि एवं धन हानि।',
      shastricReason: 'अग्नि और जल का प्रत्यक्ष शत्रु भाव है। आग्नेय में जल होने से अग्नि बुझती है और अनिष्ट होता है।',
      remedyWithoutDemolition: 'आग्नेय में बोरवेल को ढकें, उसके पास अखंड तांबे का दीपक अथवा विद्युत कक्ष का भार बढ़ाएं। लाल पत्थर या मूंगा रत्न की पट्टिका लगाएं।'
    },
    {
      id: 'dosh-beam-over-vedi',
      name: 'मूल वेदी अथवा भगवान की प्रतिमा के ठीक ऊपर बीम (धरन) आना',
      location: 'गर्भगृह छत',
      severity: 'घोर महादोष',
      negativeImpact: 'देव ऊर्जा का संपीड़न, दर्शनार्थियों को मानसिक भारीपन, मंदिर की ऊर्जा का अवरुद्ध होना।',
      shastricReason: 'बीम अधोगामी गुरुत्वाकर्षण भार डालता है, जबकि गर्भगृह से ऊर्जा ऊर्ध्वमुखी शिखर की ओर जानी चाहिए।',
      remedyWithoutDemolition: 'बीम के नीचे श्वेत मकराना संगमरमर का फॉल्स सीलिंग (झूठी छत) या कमल पुष्प का नक्काशीदार अष्टदल बनाकर बीम को पूरी तरह ढकें।'
    },
    {
      id: 'dosh-shikhar-surpassed',
      name: 'मंदिर के शिखर से ऊंचा पानी का टैंक, टावर या पड़ोसी भवन होना',
      location: 'ऊर्ध्व दिशा',
      severity: 'घोर महादोष',
      negativeImpact: 'मंदिर के प्रभाव क्षेत्र का संकुचित होना, आसपास नकारात्मक ऊर्जा का प्रभाव बढ़ना।',
      shastricReason: 'प्रसाद लक्षण अनुसार शिखर संपूर्ण परिसर में सर्वोच्च होना अनिवार्य है। शिखर से ऊंचा निर्माण शिखर की छाया दोष उत्पन्न करता है।',
      remedyWithoutDemolition: 'शिखर पर ध्वजादंड की ऊंचाई 7 या 9 हाथ बढ़ाकर उस पर विशाल पंचरंगी ध्वजा फहराएं, जिससे ध्वजा सर्वोच्च रहे।'
    },
    {
      id: 'dosh-dwarvedh',
      name: 'मुख्य सिंहद्वार के ठीक सामने खंभा, पेड़ या बिजली का ट्रांसफार्मर (द्वारवेध)',
      location: 'मुख्य प्रवेश द्वार',
      severity: 'मध्यम दोष',
      negativeImpact: 'मंदिर में श्रद्धालुओं के आवागमन में अवरोध, विकास कार्यों में निरंतर रुकावटें।',
      shastricReason: 'द्वारवेध से सकारात्मक प्राण ऊर्जा का प्रवेश खंडित होकर विक्षेपित हो जाता है।',
      remedyWithoutDemolition: 'द्वार की चौखट के दोनों ओर मंगल कलश, अष्टमंगल पट्टिका, तांबे का सूर्य एवं तोरण द्वार पर दर्पण इस प्रकार लगाएं कि वेध का परावर्तन हो।'
    },
    {
      id: 'dosh-prakshal-drainage',
      name: 'भगवान के पवित्र प्रक्षाल जल (गंधोदक) का सामान्य सीवर या गंदी नाली में बहना',
      location: 'ड्रेनेज व्यवस्था',
      severity: 'घोर महादोष',
      negativeImpact: 'समस्त संघ को घोर पाप (आशातना), मंदिर का तेज क्षीण होना, नगर में अशांति।',
      shastricReason: 'प्रक्षाल जल तीर्थंकर परमात्मा का पावन गंधोदक है। इसे सामान्य नाली में बहाना अत्यंत निंदनीय है।',
      remedyWithoutDemolition: 'वेदी की परनालिका को तुरंत अलग करके सीधे उत्तर/ईशान में एक ढके हुए शुद्ध भूगर्भ गंधोदक कुंड में जोड़ें, जिसका जल केवल वृक्षों में जाए।'
    },
    {
      id: 'dosh-south-entry',
      name: 'मंदिर का एकमात्र प्रवेश द्वार दक्षिण दिशा में होना',
      location: 'दक्षिण महाद्वार',
      severity: 'मध्यम दोष',
      negativeImpact: 'अस्थिरता, भय का वातावरण, श्रद्धालुओं की संख्या में निरंतर कमी।',
      shastricReason: 'दक्षिण दिशा यम की दिशा है। जिनमंदिर का मुख्य द्वार पूर्व या उत्तर में होना ही विहित है।',
      remedyWithoutDemolition: 'उत्तर या पूर्व दिशा में एक नया तोरण द्वार/भद्र द्वार खोलें। दक्षिण द्वार पर पंचमुखी हनुमान/रक्षक भैरव यंत्र व तांबे की पट्टी लगाएं।'
    },
    {
      id: 'dosh-stairs-ishan',
      name: 'ईशान कोण में भारी सीढ़ियां (Staircase) बनी होना',
      location: 'ईशान कोण (NE)',
      severity: 'घोर महादोष',
      negativeImpact: 'मंदिर की बौद्धिक व आध्यात्मिक उन्नति रुकना, बच्चों में ज्ञान का अभाव, संघ में दरिद्रता।',
      shastricReason: 'ईशान को हल्का व खुला होना चाहिए। सीढ़ियों का भारी बोझ मस्तक पर भार के समान है।',
      remedyWithoutDemolition: 'सीढ़ियों के नीचे का भाग पूरी तरह खुला व प्रकाशयुक्त रखें। वहां कभी कबाड़ न रखें। सीढ़ियों के प्रथम पायदान पर चांदी का तार स्थापित करें।'
    },
    {
      id: 'dosh-singhmukhi-land',
      name: 'मंदिर की भूमि सिंहमुखी (आगे चौड़ी और पीछे संकरी) होना',
      location: 'भूखंड आकार',
      severity: 'मध्यम दोष',
      negativeImpact: 'मंदिर की प्रतिष्ठा में उतार-चढ़ाव, व्यय अधिक और आय कम रहना।',
      shastricReason: 'सिंहमुखी भूमि व्यापार हेतु ठीक है, परंतु शांत देव मंदिर हेतु गोमुखी (आगे संकरी, पीछे चौड़ी) या वर्गाकार ही शुभ है।',
      remedyWithoutDemolition: 'कंपाउंड वॉल बनाते समय आगे के अतिरिक्त हिस्से को काट कर वर्गाकार या समकोण करें। शेष भाग में बगीचा या पार्किंग बनाएं।'
    },
    {
      id: 'dosh-dark-garbhagriha',
      name: 'गर्भगृह में अत्यधिक सीलन, अंधेरा या दुर्गंध होना',
      location: 'गर्भगृह वातावरण',
      severity: 'मध्यम दोष',
      negativeImpact: 'नकारात्मक ऊर्जा का वास, पूजा में मन एकाग्र न होना, प्रतिमा की चमक क्षीण होना।',
      shastricReason: 'गर्भगृह चैतन्य ऊर्जा का केंद्र है। यहां कपूर, चंदन व घी के दीप की पवित्र सुगंध व मंद प्रकाश होना चाहिए।',
      remedyWithoutDemolition: 'प्राकृतिक वेंटिलेशन हेतु निकास जाली लगाएं। नित्य भीमसेनी कपूर व धूप खेवे। सीलन रोधी पाषाण लेप लगाएं।'
    },
    {
      id: 'dosh-irregular-pradakshina',
      name: 'परिक्रमा पथ (Pradakshina Path) का संकरा या अवरुद्ध होना',
      location: 'परिक्रमा पथ',
      severity: 'सामान्य दोष',
      negativeImpact: 'परिक्रमा में बाधा, दर्शनार्थियों को धक्का-मुक्की, ऊर्जा प्रवाह में रुकावट।',
      shastricReason: 'प्रदक्षिणा भगवान के चारों ओर सकारात्मक चुंबकीय चक्रव्यूह बनाती है। इसका निर्बाध होना अनिवार्य है।',
      remedyWithoutDemolition: 'परिक्रमा पथ से सभी अनावश्यक अलमारियां, बक्से व सामान हटाएं। मार्ग को कम से कम 3.5 से 4 फीट निर्बाध और श्वेत संगमरमर युक्त रखें।'
    }
  ];

  const handleToggleCheck = (id: string) => {
    setCheckedDoshas(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDoshas = VASTU_DOSHAS.filter(d => {
    if (selectedSeverity === 'all') return true;
    return d.severity === selectedSeverity;
  });

  const checkedCount = Object.values(checkedDoshas).filter(Boolean).length;

  return (
    <div className="bg-white rounded-3xl border-2 border-amber-300 p-5 sm:p-7 lg:p-9 shadow-md space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-amber-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider mb-2 border border-rose-300">
            <ShieldAlert className="w-4 h-4 text-rose-700" />
            <span>जिनालय वास्तु दोष निदान एवं बिना तोड़फोड़ निवारण</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-jain text-stone-900">
            जैन मंदिर वास्तु दोष चेकलिस्ट एवं उपाय (Vastu Dosh Checklist)
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
            मंदिर में आने वाले प्रमुख 12 वास्तु दोषों की जांच करें। प्रत्येक दोष का शास्त्रोक्त कारण, प्रभाव एवं बिना तोड़फोड़ वैदिक-जैनागमोक्त निवारण विधि देखें।
          </p>
        </div>

        {/* Severity Count Badge */}
        <div className="bg-rose-50 border-2 border-rose-300 p-3 rounded-2xl text-center shrink-0 min-w-[150px]">
          <span className="text-[10px] font-bold text-rose-800 uppercase block">चिह्नित दोष</span>
          <strong className="text-2xl font-serif-jain text-rose-950 font-bold block">{checkedCount} / {VASTU_DOSHAS.length}</strong>
          <span className="text-[11px] text-stone-600">सुधार हेतु विचारणीय</span>
        </div>
      </div>

      {/* Filter Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-stone-50 p-3.5 rounded-2xl border border-stone-200">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-stone-700 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-amber-700" />
            <span>तीव्रता अनुसार फ़िल्टर:</span>
          </span>
          {[
            { id: 'all', name: 'सभी दोष (All)' },
            { id: 'घोर महादोष', name: 'घोर महादोष (Critical)' },
            { id: 'मध्यम दोष', name: 'मध्यम दोष (Moderate)' },
            { id: 'सामान्य दोष', name: 'सामान्य दोष (Mild)' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedSeverity(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedSeverity === f.id
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => window.print()}
          className="no-print px-3.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs font-bold flex items-center gap-1.5 cursor-pointer border border-amber-300"
        >
          <Printer className="w-4 h-4" />
          <span>चेकलिस्ट प्रिंट करें</span>
        </button>
      </div>

      {/* Checklist Grid */}
      <div className="space-y-4">
        {filteredDoshas.map((dosh) => {
          const isChecked = !!checkedDoshas[dosh.id];

          return (
            <div
              key={dosh.id}
              className={`p-4 sm:p-5 rounded-2xl border-2 transition-all ${
                isChecked
                  ? 'bg-rose-50/50 border-rose-300 shadow-sm'
                  : 'bg-white border-stone-200 hover:border-amber-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                {/* Left Info */}
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        dosh.severity === 'घोर महादोष'
                          ? 'bg-rose-100 text-rose-900 border-rose-300'
                          : dosh.severity === 'मध्यम दोष'
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : 'bg-blue-100 text-blue-900 border-blue-300'
                      }`}
                    >
                      {dosh.severity}
                    </span>

                    <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      स्थान: <strong>{dosh.location}</strong>
                    </span>
                  </div>

                  <h3 className="font-serif-jain font-bold text-base sm:text-lg text-stone-900">
                    {dosh.name}
                  </h3>

                  {/* Negative Impact */}
                  <div className="text-xs text-rose-950 bg-rose-50/80 p-2.5 rounded-xl border border-rose-200/60">
                    <strong>दुष्प्रभाव:</strong> {dosh.negativeImpact}
                  </div>

                  {/* Shastric Reason */}
                  <p className="text-xs text-stone-600 italic">
                    शास्त्रीय कारण: {dosh.shastricReason}
                  </p>

                  {/* Remedy without demolition */}
                  <div className="text-xs text-emerald-950 bg-emerald-50/80 p-3 rounded-xl border border-emerald-200">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-1">
                      <Wrench className="w-4 h-4 text-emerald-700" />
                      <span>बिना तोड़फोड़ निवारण उपाय (Remedy Without Demolition):</span>
                    </div>
                    <span>{dosh.remedyWithoutDemolition}</span>
                  </div>
                </div>

                {/* Right Action / Checkbox */}
                <div className="shrink-0 flex flex-col items-end gap-2 self-start sm:self-center">
                  <button
                    onClick={() => handleToggleCheck(dosh.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-rose-700 text-white shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-300'
                    }`}
                  >
                    {isChecked ? (
                      <>
                        <XCircle className="w-4 h-4" />
                        <span>दोष मौजूद है (Checked)</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-stone-400" />
                        <span>यह दोष चिह्नित करें</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20हमारे%20मंदिर%20में%20'${encodeURIComponent(
                      dosh.name
                    )}'%20दोष%20है।%20कृपया%20बिना%20तोड़फोड़%20निवारण%20हेतु%20मार्गदर्शन%20दें।`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>उपाय पूछें</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Advice Strip */}
      <div className="bg-amber-50 p-4 rounded-2xl border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-700">
        <div>
          <strong>संजीव सिपानी जी का परामर्श:</strong> मंदिर में किसी भी दोष के निवारण हेतु हड़बड़ाहट में तोड़फोड़ न करें। 
          90% दोष ऊर्जा संतुलन, पिरामिड, धातु शलाका एवं दिशा संरेखण से बिना तोड़फोड़ ठीक किए जा सकते हैं।
        </div>
        <a
          href="tel:9509061075"
          className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-xl font-bold shrink-0 shadow-2xs"
        >
          कॉल: 9509061075
        </a>
      </div>
    </div>
  );
};
