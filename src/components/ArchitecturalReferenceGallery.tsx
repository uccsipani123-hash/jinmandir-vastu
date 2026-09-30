import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
  Ruler, 
  Layers, 
  Eye, 
  Maximize2, 
  Info, 
  CheckCircle2, 
  Download, 
  Printer, 
  Phone, 
  MessageCircle, 
  Award, 
  Compass, 
  ChevronRight,
  ShieldCheck,
  Search,
  ZoomIn,
  X
} from 'lucide-react';

export interface StructureModel {
  id: string;
  nameHindi: string;
  nameEnglish: string;
  category: 'vedi' | 'shikhar' | 'toran' | 'mandap' | 'kund';
  categoryLabel: string;
  directionTag: string;
  materialRecommendation: string;
  proportionalFormula: string;
  description: string;
  shastricRules: string[];
  anatomicalParts: { name: string; position: string; significance: string; idealMeasurement: string }[];
  accentColor: string;
  svgType: 'shikhar' | 'vedi' | 'toran' | 'mandap' | 'kund';
}

const ARCHITECTURAL_MODELS: StructureModel[] = [
  {
    id: 'shikhar-meru-shaili',
    nameHindi: 'मेरु-प्रसाद शैली का भव्य मकराना शिखर',
    nameEnglish: 'Meru-Prasada Style Makrana Marble Shikhar (Spire)',
    category: 'shikhar',
    categoryLabel: 'शिखर स्थापत्य (Spire)',
    directionTag: 'गर्भगृह के ठीक ऊपर (ईशान/मध्य संरेखण)',
    materialRecommendation: 'मकराना श्वेत मार्बल (ग्रेड A1 अलबेटा / चक डूंगरी)',
    proportionalFormula: 'शिखर ऊंचाई = गर्भगृह आंतरिक चौड़ाई × 2.25 से 2.50 गुना',
    description: 'जैन श्वेतांबर जिनालय स्थापत्य की सर्वोच्च गरिमा उसका भव्य शिखर है। मारू-गुर्जर (सोलंकी) शैली में निर्मित इस शिखर में मुख्य शिखर के चारों ओर अनु-शिखर (उरुश्रृंग) होते हैं, जो ऊपर जाकर आमलक, कलश एवं पावन पंचरंगी ध्वजदंड से सुशोभित होते हैं।',
    shastricRules: [
      'शिखर की नींव में लोहा (Iron / Steel Rods) का प्रयोग शास्त्र विरुद्ध है; केवल ताम्र क्लैम्प (Copper Clamps) व सीसा (Lead) का उपयोग करें।',
      'कलश की ऊंचाई संपूर्ण शिखर की कुल ऊंचाई का 1/8 भाग होना अनिवार्य है।',
      'ध्वजदंड सदैव वायव्य-ईशान समकोण में दक्षिण-उत्तर हवा के अनुसार लहराए, ऐसी ऊंचाई रखें।',
      'शिखर पर किसी बाहरी भवन या वृक्ष की छाया (वेध दोष) नहीं पड़नी चाहिए।'
    ],
    anatomicalParts: [
      { name: 'स्वर्ण कलश (Suvarna Kalash)', position: 'शीर्ष भाग', significance: 'देवत्व एवं अमृत कुंभ का प्रतीक, ऊर्जा प्रसारण', idealMeasurement: 'शिखर ऊंचाई का 1/8 वां भाग' },
      { name: 'ध्वजदंड व छत्र (Dhwajadand & Chhatra)', position: 'कलश के ऊपर', significance: 'जिन शासन की सार्वभौम विजय व ध्वजारोहण', idealMeasurement: 'कलश से 3 से 5 फीट ऊपर' },
      { name: 'आमलक शिला (Amalaka Disc)', position: 'कलश के नीचे', significance: 'ब्रह्मांडीय ऊर्जा को गर्भगृह में केंद्रित करना', idealMeasurement: 'शिखर ग्रीवा व्यास का 1.2 गुना' },
      { name: 'उरुश्रृंग (Miniature Spire Cascades)', position: 'मध्य ढलान', significance: 'मेरु पर्वत की सहायक पर्वत श्रृंखलाओं का रूप', idealMeasurement: '4, 8 या 16 की संख्या में सममित' },
      { name: 'जांघा एवं वेदीबंध (Jangha Base)', position: 'शिखर की निचली पीठ', significance: '16 विद्यादेवियों व यक्ष-यक्षी की नक्काशी', idealMeasurement: 'गर्भगृह दीवार की निरंतरता' }
    ],
    accentColor: 'from-amber-500 to-amber-700',
    svgType: 'shikhar'
  },
  {
    id: 'mool-vedi-garbhagriha',
    nameHindi: 'मूल गर्भगृह सिंहासन वेदी (त्रिपदी पीठ)',
    nameEnglish: 'Garbhagriha Mool Nayak Sanctum Altar & Throne',
    category: 'vedi',
    categoryLabel: 'वेदी स्थापत्य (Sanctum Altar)',
    directionTag: 'ईशान कोण (NE) - पूर्वाभिमुख अथवा उत्तराभिमुख',
    materialRecommendation: 'शुद्ध मकराना संगमरमर, रजत (चांदी) पत्र जड़ित नक्काशी',
    proportionalFormula: 'वेदी चौड़ाई = गर्भगृह चौड़ाई का 50% से 60%, ऊंचाई = 36 से 45 इंच',
    description: 'तीर्थंकर परमात्मा की मूल प्रतिमा की प्रतिष्ठा हेतु त्रिपदी अष्टकोणीय व कमलासन सिंहासन वेदी। इसके आधार में कछुआ/कमल पीठ, मध्य में नवग्रह व अष्टमंगल नक्काशी तथा पृष्ठभाग में नक्काशीदार प्रभावली (भामंडल) स्थापित होती है।',
    shastricRules: [
      'वेदी का निर्माण दीवार से न्यूनतम 2 से 3 फीट आगे होना चाहिए ताकि परिक्रमा का शुद्ध मार्ग रहे।',
      'वेदी के नीचे भूमि में नवरत्न, स्वर्ण-रजत शलाका एवं वास्तु यंत्र स्थापित होना अनिवार्य है।',
      'अभिषेक व प्रक्षाल जल (गंधोदक) सीधे बाहर जाने के लिए वेदी में शुद्ध ताम्र अथवा पाषाण प्रणाली (Gomukha Drain) बनी हो।',
      'वेदी के ठीक ऊपर छत पर कोई बीम (Beam) या पंखा नहीं होना चाहिए; केवल नक्काशीदार अष्टदल कमल हो।'
    ],
    anatomicalParts: [
      { name: 'कमलासन पीठ (Lotus Pedestal)', position: 'प्रतिष्ठा तल', significance: 'प्रभु के चरण रखने हेतु 108 पंखुड़ी पाषाण कमल', idealMeasurement: 'प्रतिमा आसन चौड़ाई के अनुरूप' },
      { name: 'प्रभावली / भामंडल (Prabhavali Arch)', position: 'प्रतिष्ठा पृष्ठ', significance: 'तीर्थंकर की दिव्य तेजोमय आभा का प्रतीक', idealMeasurement: 'प्रतिमा ऊंचाई से 1.25 गुना' },
      { name: 'अष्टमंगल पट्टिका (Ashtamangal frieze)', position: 'वेदी मध्य भाग', significance: 'स्वस्तिक, श्रीवत्स, नन्द्यावर्त, कलश, दर्पण आदि', idealMeasurement: 'वेदी के मुख मंडल पर' },
      { name: 'गंधोदक गोमुख प्रणाल (Drain Chute)', position: 'वेदी का ईशान कोना', significance: 'पवित्र प्रक्षाल जल को बिना पैर लगे बाहर ले जाना', idealMeasurement: 'ढलान 15 डिग्री ईशान की ओर' },
      { name: 'सिंहासन चरण व गजपीठ (Simhasana Base)', position: 'निचला आधार', significance: 'धर्म चक्र एवं अष्ट महाप्रतिहार्य का आधार', idealMeasurement: 'फर्श से 21 से 31 इंच ऊंचा' }
    ],
    accentColor: 'from-amber-600 to-yellow-600',
    svgType: 'vedi'
  },
  {
    id: 'ashtamangal-toran-dwar',
    nameHindi: 'अष्टमंगल मकराना तोरण द्वार (महा-प्रवेशिका)',
    nameEnglish: 'Makrana Marble Ashtamangal Toran Entrance Archway',
    category: 'toran',
    categoryLabel: 'तोरण द्वार (Entrance Arch)',
    directionTag: 'मुख्य पूर्वाभिमुख अथवा उत्तराभिमुख महाद्वार',
    materialRecommendation: 'मकराना शुद्ध संगमरमर / अंबाजी पाषाण, बारीक झरोखा कटिंग',
    proportionalFormula: 'तोरण ऊंचाई : चौड़ाई अनुपात = 1 : 1.618 (गोल्डन रेश्यो)',
    description: 'मंदिर के सिंहद्वार पर स्थापित होने वाला भव्य तोरण द्वार। दो भव्य अष्टकोणीय नक्काशीदार स्तंभों पर टिकी अर्धवृत्ताकार लहरदार मकराना तोरण कमान, जिसमें 16 विद्यादेवियों, गंधर्वों, कलहंसों व मंगल घटों की मनोहारी सूक्ष्म नक्काशी होती है।',
    shastricRules: [
      'तोरण द्वार की देहरी (उंबरो/उम्बरा) फर्श से 2 से 3 इंच ऊंची होनी चाहिए, जिस पर पैर रखना वर्जित है।',
      'द्वार के दोनों स्तंभों पर शुभ शकुन हेतु मंगल कलश एवं तोरण के शीर्ष पर जिनेंद्र प्रभु की ध्वजा होनी चाहिए।',
      'द्वार के ठीक सामने कोई सीधा खंभा, पेड़ या बिजली का पोल (द्वारवेध दोष) नहीं होना चाहिए।',
      'तोरण कमान पर घंटा टांगने हेतु मजबूत पाषाण अथवा पीतल का कुंडा शास्त्र सम्मत है।'
    ],
    anatomicalParts: [
      { name: 'तोरण कमान (Cusped Archway)', position: 'शीर्ष महराब', significance: 'मंदिर में प्रवेश करते ही चित्त को एकाग्र करने वाला मंगल तोरण', idealMeasurement: 'व्यास 8 से 12 फीट' },
      { name: '16 विद्यादेवी स्तंभ (Carved Pillars)', position: 'पार्श्व आधार', significance: 'ज्ञान और आत्मिक शक्तियों की रक्षक देवियां', idealMeasurement: 'ऊंचाई 9 से 14 फीट' },
      { name: 'मंगल कलश व कीर्तिमुख (Kalash & Kirtimukh)', position: 'स्तंभ शीर्ष', significance: 'अमंगल ऊर्जा को सोखने व मंगल प्रदात्री शक्ति', idealMeasurement: 'स्तंभ व्यास के आनुपातिक' },
      { name: 'देहरी / उम्बरा (Threshold Curb)', position: 'फर्श तल', significance: 'बाह्य संसार और पवित्र जिनालय के बीच ऊर्जा विभाजन रेखा', idealMeasurement: 'ऊंचाई 2.5 इंच पाषाण' }
    ],
    accentColor: 'from-orange-500 to-amber-600',
    svgType: 'toran'
  },
  {
    id: 'rangmandap-dome-pillars',
    nameHindi: 'सकलंक रंगमंडप एवं नक्काशीदार घुम्मट (वितान)',
    nameEnglish: 'Carved Rangmandap Assembly Hall & Dome Ceiling',
    category: 'mandap',
    categoryLabel: 'रंगमंडप व स्तंभ (Mandap & Dome)',
    directionTag: 'गर्भगृह के सम्मुख (पश्चिम व मध्य संरेखण)',
    materialRecommendation: 'मकराना मार्बल, बारीक जालीदार छतरियां व लटकते पाषाण झुमर (पद्मशिला)',
    proportionalFormula: 'रंगमंडप व्यास = गर्भगृह चौड़ाई का 1.5 से 2 गुना, अष्टकोणीय विन्यास',
    description: 'जिनालय में भक्तों के भक्ति, नृत्य, पूजा व स्वाध्याय हेतु निर्मित भव्य रंगमंडप। अष्टकोणीय योजना में खड़े 8 या 16 नक्काशीदार खंभों पर आधारित संकेंद्रीय वलयाकार वितान (गुंबद) जिसके केंद्र में लटकता हुआ अद्भुत पाषाण कमल (Padma Shila) स्थापित होता है।',
    shastricRules: [
      'गुंबद के छल्ले संकेंद्रीय (Concentric Circles) होने चाहिए जो ब्रह्मांड की परतों को दर्शाते हैं।',
      'खंभों की संख्या सदैव 8, 12, 16, 24 अथवा 32 शास्त्र सम्मत सम संख्या में होनी चाहिए।',
      'रंगमंडप का फर्श गर्भगृह से 2 इंच नीचा होना चाहिए ताकि गर्भगृह की प्रतिष्ठा सर्वोच्च रहे।',
      'गुंबद में प्राकृतिक हवा व प्रकाश हेतु अप्रत्यक्ष झरोखे (Jharokhas) रखे जाएं।'
    ],
    anatomicalParts: [
      { name: 'पद्मशिला झूमर (Lotus Drop Pendant)', position: 'गुंबद का केंद्र', significance: 'सहस्रार चक्र व मोक्ष मार्ग की ऊर्जा का प्रतीक', idealMeasurement: 'छत से 1.5 से 2.5 फीट नीचे लटकता' },
      { name: 'नृत्य अप्सरा ब्रैकेट (Carved Brackets)', position: 'स्तंभ और छत का जोड़', significance: 'देवलोक में प्रभु भक्ति में लीन देव-देवियों का रूप', idealMeasurement: '45 डिग्री कोण पर स्थापित' },
      { name: 'अष्टकोणीय स्तंभ (Octagonal Pillars)', position: 'चारों ओर', significance: 'अष्ट कर्मों के क्षय व स्थिरता का आधार', idealMeasurement: 'व्यास 18 से 24 इंच' }
    ],
    accentColor: 'from-amber-700 to-stone-800',
    svgType: 'mandap'
  },
  {
    id: 'amrit-kund-drainage',
    nameHindi: 'गंधोदक शोधन कुंड एवं अमृत जलकुंड',
    nameEnglish: 'Gandhodak Sacred Purifying Soak Pit & Amrit Kund',
    category: 'kund',
    categoryLabel: 'जलकुंड स्थापत्य (Water Kund)',
    directionTag: 'ईशान कोण (North-East) - भूमिगत',
    materialRecommendation: 'प्राकृतिक पाषाण, कंक्रीट रहित चूना-ईंट-पत्थर अस्तर, ताम्र पाइपिंग',
    proportionalFormula: 'कुंड गहराई = 6 से 9 फीट, आयतन = मंदिर क्षमता के अनुसार',
    description: 'शास्त्रों में भगवान के प्रक्षाल जल (गंधोदक) को नाली या गटर में बहाना महा-दोष माना गया है। इसके लिए ईशान कोण में एक 3-स्तरीय पाषाण गंधोदक शोधन सोक-पिट व अमृत जलकुंड का निर्माण किया जाता है, जिसका जल केवल मंदिर के तुलसी/फूल बाग में समर्पित होता है।',
    shastricRules: [
      'गंधोदक निकास पाइप पूर्णतया तांबे (Copper) या पीतल का होना चाहिए, प्लास्टिक वर्जित है।',
      'कुंड कभी भी मंदिर के आग्नेय, नैऋत्य या वायव्य में नहीं होना चाहिए; केवल ईशान (NE) में ही मान्य है।',
      'कुंड का मुंह हमेशा शुद्ध पाषाण ढक्कन से सुरक्षित रहे ताकि कोई अशुद्धि न गिरे।'
    ],
    anatomicalParts: [
      { name: 'प्रासुक ताम्र जलवाहिका (Copper Conduit)', position: 'वेदी से कुंड तक', significance: 'पवित्र जल की निर्बाध व पवित्र निकासी', idealMeasurement: 'ढलान 1 इंच प्रति 4 फीट' },
      { name: 'त्रि-स्तरीय पाषाण फिल्टर (3-Tier Filtration)', position: 'कुंड का ऊपरी भाग', significance: 'रेत, कंकड़ व चारकोल द्वारा प्राकृतिक शोधन', idealMeasurement: 'गहराई 2.5 फीट' },
      { name: 'अमृत जल संचय तल (Recharge Pit)', position: 'कुंड का तल', significance: 'भूमि को ऊर्जावान व तीर्थ जल से आप्लावित करना', idealMeasurement: 'गहराई 5 से 8 फीट' }
    ],
    accentColor: 'from-sky-600 to-teal-700',
    svgType: 'kund'
  }
];

export const ArchitecturalReferenceGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModel, setActiveModel] = useState<StructureModel>(ARCHITECTURAL_MODELS[0]);
  const [activeCallout, setActiveCallout] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalModel, setModalModel] = useState<StructureModel | null>(null);

  const filteredModels = selectedCategory === 'all'
    ? ARCHITECTURAL_MODELS
    : ARCHITECTURAL_MODELS.filter(m => m.category === selectedCategory);

  const handleOpenDetailModal = (model: StructureModel) => {
    setModalModel(model);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white p-6 sm:p-8 border-2 border-amber-500/50 shadow-xl">
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
            <Building2 className="w-3.5 h-3.5" />
            <span>जैन श्वेतांबर जिनालय स्थापत्य संदर्भ वीथिका (Architectural Reference Models)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif-jain font-bold text-amber-100">
            मंदिर स्थापत्य <span className="text-amber-400">शिल्प व ब्लूप्रिंट संदर्भ दीर्घा</span>
          </h1>

          <p className="text-amber-200/90 text-xs sm:text-sm leading-relaxed max-w-3xl">
            जिनालय निर्माण, वेदी निर्माण, शिखर संरेखण एवं तोरण द्वार की योजना बना रहे ट्रस्टीज, सोमपुरा शिल्पकारों और वास्तुविदों के लिए <strong>शास्त्र सम्मत उच्च-गुणवत्ता वाले स्थापत्य 3D-सदृश रेखाचित्र</strong>, अंग-प्रत्यंग माप एवं निर्माण मानक।
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] sm:text-xs text-amber-300">
            <span className="bg-black/40 px-2.5 py-1 rounded-md border border-amber-500/30">📐 मारू-गुर्जर (सोलंकी) शैली</span>
            <span className="bg-black/40 px-2.5 py-1 rounded-md border border-amber-500/30">🏛️ मकराना श्वेत संगमरमर अनुपात</span>
            <span className="bg-black/40 px-2.5 py-1 rounded-md border border-amber-500/30">✨ बिना लोहे के शुद्ध पाषाण-ताम्र जोड़</span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar border-b border-amber-200 pb-3">
        <div className="flex items-center gap-1.5">
          {[
            { id: 'all', label: 'सभी स्थापत्य अंग (All Models)' },
            { id: 'shikhar', label: 'शिखर व कलश (Shikhar)' },
            { id: 'vedi', label: 'मूल गर्भगृह वेदी (Vedi)' },
            { id: 'toran', label: 'अष्टमंगल तोरण द्वार (Toran)' },
            { id: 'mandap', label: 'रंगमंडप व वितान (Dome & Pillars)' },
            { id: 'kund', label: 'गंधोदक अमृत कुंड (Water Kund)' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-800 text-white shadow-sm ring-1 ring-amber-900'
                  : 'bg-amber-100/70 text-amber-950 hover:bg-amber-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <span className="text-xs text-stone-500 hidden md:inline shrink-0 font-medium">
          {filteredModels.length} संदर्भ मॉडल उपलब्ध
        </span>
      </div>

      {/* Main Interactive Showcase: Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Vector Architectural Elevation Drawing */}
        <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-amber-300 p-5 sm:p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-amber-200 pb-3">
            <div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                {activeModel.categoryLabel}
              </span>
              <h2 className="text-xl font-bold font-serif-jain text-stone-900 mt-1">
                {activeModel.nameHindi}
              </h2>
              <span className="text-xs text-stone-500 font-sans">{activeModel.nameEnglish}</span>
            </div>

            <button
              onClick={() => handleOpenDetailModal(activeModel)}
              className="p-2 rounded-xl bg-amber-100/80 hover:bg-amber-200 text-amber-900 border border-amber-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="पूर्ण स्क्रीन में विस्तृत ब्लूप्रिंट देखें"
            >
              <Maximize2 className="w-4 h-4 text-amber-800" />
              <span className="hidden sm:inline">फुल व्यू</span>
            </button>
          </div>

          {/* Architectural Vector Canvas Rendering Container */}
          <div className="relative rounded-2xl bg-gradient-to-b from-stone-900 via-amber-950/90 to-stone-950 border-2 border-amber-500/40 p-4 sm:p-6 shadow-inner flex flex-col items-center justify-center overflow-hidden min-h-[380px]">
            {/* Grid blueprint lines in background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b10_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b10_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Compass Orientation Tag on Canvas */}
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs border border-amber-400/40 px-2.5 py-1 rounded-md text-[10px] text-amber-300 font-mono flex items-center gap-1">
              <Compass className="w-3 h-3 text-amber-400" />
              <span>{activeModel.directionTag}</span>
            </div>

            <div className="absolute top-3 right-3 bg-amber-900/80 border border-amber-400/40 px-2.5 py-1 rounded-md text-[10px] text-amber-200 font-mono">
              <span>अनुपात: {activeModel.proportionalFormula.split('=')[1] || 'शास्त्रोक्त'}</span>
            </div>

            {/* Render Specific Architectural SVG Model */}
            <div className="relative z-10 w-full flex items-center justify-center max-w-[420px] py-2">
              {activeModel.svgType === 'shikhar' && <ShikharSvgIllustration activeCallout={activeCallout} />}
              {activeModel.svgType === 'vedi' && <VediSvgIllustration activeCallout={activeCallout} />}
              {activeModel.svgType === 'toran' && <ToranSvgIllustration activeCallout={activeCallout} />}
              {activeModel.svgType === 'mandap' && <MandapSvgIllustration activeCallout={activeCallout} />}
              {activeModel.svgType === 'kund' && <KundSvgIllustration activeCallout={activeCallout} />}
            </div>

            {/* Bottom Elevation Scale Bar */}
            <div className="relative z-10 w-full mt-3 pt-2 border-t border-amber-500/30 flex items-center justify-between text-[10px] font-mono text-amber-200/70">
              <span>॥ शास्त्रोक्त सोलंकी मारू-गुर्जर प्रमाण रेखाचित्र ॥</span>
              <span>100% शुद्ध पाषाण स्थापत्य</span>
            </div>
          </div>

          {/* Interactive Callout Selector Pills */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-bold text-stone-800 flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-amber-700" />
              <span>स्थापत्य अंग पर क्लिक करके माप व विवरण देखें (Interactive Anatomy):</span>
            </span>

            <div className="flex flex-wrap gap-1.5">
              {activeModel.anatomicalParts.map((part, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCallout(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeCallout === idx
                      ? 'bg-amber-800 text-white shadow-xs ring-2 ring-amber-400'
                      : 'bg-amber-100/70 hover:bg-amber-200 text-amber-950'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-amber-700/30 text-center text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span>{part.name.split('(')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Callout Deep Dive Card */}
          {activeCallout !== null && activeModel.anatomicalParts[activeCallout] && (
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-xs space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-950 flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-amber-800 text-white text-[10px] flex items-center justify-center">
                    {activeCallout + 1}
                  </span>
                  {activeModel.anatomicalParts[activeCallout].name}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[10px] font-bold">
                  {activeModel.anatomicalParts[activeCallout].position}
                </span>
              </div>
              <p className="text-stone-700 text-[11px] leading-relaxed">
                <strong>शास्त्रिक महत्व:</strong> {activeModel.anatomicalParts[activeCallout].significance}
              </p>
              <div className="text-[11px] text-amber-900 font-semibold bg-white p-2 rounded-lg border border-amber-200">
                📏 <strong>आदर्श माप व अनुपात:</strong> {activeModel.anatomicalParts[activeCallout].idealMeasurement}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Architectural Specifications, Shastric Rules & Action */}
        <div className="lg:col-span-5 space-y-4">
          {/* Quick Model Selector Thumbnails List */}
          <div className="bg-white rounded-2xl border border-amber-300 p-4 shadow-sm space-y-2">
            <span className="text-xs font-bold text-stone-800 block">
              अन्य स्थापत्य संदर्भ चुनें (Select Structure):
            </span>
            <div className="space-y-1.5">
              {filteredModels.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setActiveModel(m);
                    setActiveCallout(0);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${
                    activeModel.id === m.id
                      ? 'border-amber-600 bg-amber-50 font-bold text-amber-950 shadow-2xs'
                      : 'border-stone-200 hover:border-amber-300 text-stone-700 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-700" />
                    <span>{m.nameHindi}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Architectural Specs Card */}
          <div className="bg-white rounded-2xl border-2 border-amber-200 p-5 space-y-3.5 shadow-sm">
            <div className="flex items-center gap-2 pb-2 border-b border-amber-200">
              <Ruler className="w-4 h-4 text-amber-700" />
              <h3 className="font-serif-jain font-bold text-stone-900 text-sm sm:text-base">
                स्थापत्य निर्माण मानक व पाषाण निर्देश
              </h3>
            </div>

            <div className="space-y-2.5 text-xs text-stone-700">
              <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200 space-y-1">
                <span className="font-bold text-amber-900 block">पाषाण (Stone Recommendation):</span>
                <span>{activeModel.materialRecommendation}</span>
              </div>

              <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200 space-y-1">
                <span className="font-bold text-amber-900 block">आनुपातिक सूत्र (Dimension Ratio):</span>
                <span>{activeModel.proportionalFormula}</span>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="font-bold text-stone-900 block">सोमपुरा शिल्पशास्त्र के 4 नियम:</span>
                <div className="space-y-1.5">
                  {activeModel.shastricRules.map((rule, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-1.5 text-[11px] text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar for Sompura / Architect Consultation */}
            <div className="pt-3 border-t border-stone-200 space-y-2">
              <a
                href={`https://wa.me/919660870376?text=${encodeURIComponent(`जय जिनेन्द्र संजीव जी, मुझे '${activeModel.nameHindi}' के स्थापत्य ब्लूप्रिंट एवं माप के संदर्भ में परामर्श चाहिए।`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>संजीव सिपानी जी से नक्शा चर्चा करें</span>
              </a>

              <button
                onClick={() => window.print()}
                className="no-print w-full py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border border-stone-300 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-stone-600" />
                <span>इस मॉडल का स्थापत्य विवरण प्रिंट करें</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Makrana Marble & Stone Selection Matrix for Construction Planning */}
      <div className="rounded-2xl bg-white border border-amber-300 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-amber-200">
          <Award className="w-5 h-5 text-amber-700" />
          <h3 className="font-serif-jain font-bold text-stone-900 text-base sm:text-lg">
            जिनालय निर्माण हेतु पाषाण चयन मार्गदर्शिका (Stone Quality for Planning)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1.5">
            <span className="font-bold text-amber-950 block text-sm">1. मकराना श्वेत संगमरमर (Makrana Pure White)</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              <strong>उपयोग:</strong> मूल गर्भगृह वेदी, तीर्थंकर प्रतिमाएं, तोरण द्वार एवं मुख्य शिखर।
            </p>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              <strong>विशेषता:</strong> 98% कैल्शियम कार्बोनेट, शताब्दियों तक पीला नहीं पड़ता, दूधिया चमक व जल रोधक।
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1.5">
            <span className="font-bold text-amber-950 block text-sm">2. अंबाजी संगमरमर (Ambaji White Stone)</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              <strong>उपयोग:</strong> रंगमंडप के नक्काशीदार स्तंभ, छत के झूमर (वितान) एवं जालियां।
            </p>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              <strong>विशेषता:</strong> अत्यंत कोमल व बारीक नक्काशी (Undercut Carving) हेतु विश्व प्रसिद्ध गुजरात पाषाण।
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1.5">
            <span className="font-bold text-amber-950 block text-sm">3. बंसी पहाड़पुर गुलाबी पाषाण (Bansi Paharpur)</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              <strong>उपयोग:</strong> बाह्य परकोटा, धर्मशाला, तोरण प्रवेश द्वार एवं उपाश्रय भवन।
            </p>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              <strong>विशेषता:</strong> सदियों तक अक्षुण्ण रहने वाला बलुआ पत्थर (Sandstone), भव्य शास्त्रीय लालित्य।
            </p>
          </div>
        </div>
      </div>

      {/* Full-Screen Detailed Blueprint Modal */}
      {isModalOpen && modalModel && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-5 border-2 border-amber-400 shadow-2xl">
            <div className="flex items-center justify-between border-b border-amber-200 pb-3">
              <div>
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                  {modalModel.categoryLabel}
                </span>
                <h2 className="text-2xl font-bold font-serif-jain text-stone-900 mt-1">
                  {modalModel.nameHindi}
                </h2>
                <p className="text-xs text-stone-600">{modalModel.nameEnglish}</p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-stone-100 text-stone-600 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Big Vector Canvas View in Modal */}
            <div className="rounded-2xl bg-stone-950 p-6 flex flex-col items-center justify-center border border-amber-500/50 shadow-inner">
              <div className="w-full max-w-[500px]">
                {modalModel.svgType === 'shikhar' && <ShikharSvgIllustration activeCallout={null} isLarge />}
                {modalModel.svgType === 'vedi' && <VediSvgIllustration activeCallout={null} isLarge />}
                {modalModel.svgType === 'toran' && <ToranSvgIllustration activeCallout={null} isLarge />}
                {modalModel.svgType === 'mandap' && <MandapSvgIllustration activeCallout={null} isLarge />}
                {modalModel.svgType === 'kund' && <KundSvgIllustration activeCallout={null} isLarge />}
              </div>
            </div>

            {/* Anatomical Specs Table in Modal */}
            <div className="space-y-3">
              <h3 className="text-base font-bold font-serif-jain text-stone-900">
                अंग-प्रत्यंग माप एवं शिल्पशास्त्र अनुक्रमणिका
              </h3>

              <div className="border border-stone-200 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-amber-100 text-amber-950 font-bold border-b border-amber-200">
                    <tr>
                      <th className="p-2.5">क्र.</th>
                      <th className="p-2.5">अंग का नाम</th>
                      <th className="p-2.5">स्थिति</th>
                      <th className="p-2.5">आदर्श शास्त्रिक माप</th>
                      <th className="p-2.5">महत्व व उपयोग</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {modalModel.anatomicalParts.map((part, pIdx) => (
                      <tr key={pIdx} className="hover:bg-amber-50/50">
                        <td className="p-2.5 font-bold text-amber-800">{pIdx + 1}</td>
                        <td className="p-2.5 font-semibold text-stone-900">{part.name}</td>
                        <td className="p-2.5 text-stone-600">{part.position}</td>
                        <td className="p-2.5 font-bold text-amber-900">{part.idealMeasurement}</td>
                        <td className="p-2.5 text-stone-700 text-[11px]">{part.significance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-stone-200">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  window.print();
                }}
                className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>प्रिंट निकालें</span>
              </button>

              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold cursor-pointer"
              >
                बंद करें
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// PURE VECTOR ARCHITECTURAL SVG ILLUSTRATIONS
// ==========================================

const ShikharSvgIllustration: React.FC<{ activeCallout: number | null; isLarge?: boolean }> = ({ activeCallout, isLarge }) => {
  const size = isLarge ? 480 : 340;
  return (
    <svg 
      viewBox="0 0 400 520" 
      width={size} 
      height={size * 1.3} 
      className="drop-shadow-2xl transition-all"
    >
      <defs>
        <linearGradient id="marbleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <linearGradient id="flagGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>

      {/* Baseline / Garbhagriha Roof Platform */}
      <rect x="50" y="460" width="300" height="40" rx="4" fill="url(#marbleGrad)" stroke="#b45309" strokeWidth="2.5" />
      <line x1="50" y1="480" x2="350" y2="480" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="200" y="492" textAnchor="middle" fill="#78350f" fontSize="11" fontWeight="bold">गर्भगृह छत पीठिका (Jagati Base)</text>

      {/* Main Shikhar Body (Curvilinear Rekha-Prasad Spire) */}
      <path 
        d="M 90 460 Q 140 260 190 140 L 210 140 Q 260 260 310 460 Z" 
        fill="url(#marbleGrad)" 
        stroke="#92400e" 
        strokeWidth="3" 
      />

      {/* Horizontal Carved Bhumi Tiers */}
      {[420, 380, 340, 300, 260, 220, 180].map((y, i) => (
        <path 
          key={i}
          d={`M ${105 + i * 11} ${y} Q 200 ${y - 12} ${295 - i * 11} ${y}`} 
          stroke="#d97706" 
          strokeWidth="2" 
          fill="none" 
        />
      ))}

      {/* Miniature Urushringa Spires Cascading on Sides */}
      {/* Left Urushringa */}
      <path d="M 85 460 Q 115 360 140 280 L 155 360 Q 130 420 120 460 Z" fill="#f1f5f9" stroke="#b45309" strokeWidth="2" />
      {/* Right Urushringa */}
      <path d="M 315 460 Q 285 360 260 280 L 245 360 Q 270 420 280 460 Z" fill="#f1f5f9" stroke="#b45309" strokeWidth="2" />

      {/* Central Rathika / Niche */}
      <rect x="180" y="360" width="40" height="60" rx="3" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
      <path d="M 180 360 Q 200 340 220 360" fill="none" stroke="#b45309" strokeWidth="2" />
      <circle cx="200" cy="385" r="8" fill="#d97706" />

      {/* Griva (Neck) */}
      <rect x="185" y="125" width="30" height="15" fill="#f8fafc" stroke="#92400e" strokeWidth="2" />

      {/* Amalaka Ribbed Stone Disc */}
      <ellipse cx="200" cy="115" rx="32" ry="12" fill="url(#marbleGrad)" stroke="#92400e" strokeWidth="2.5" />
      {/* Rib lines on Amalaka */}
      {[-24, -16, -8, 0, 8, 16, 24].map((dx, idx) => (
        <line key={idx} x1={200 + dx} y1="105" x2={200 + dx * 0.9} y2="125" stroke="#b45309" strokeWidth="1.5" />
      ))}

      {/* Chandrika Cap */}
      <ellipse cx="200" cy="100" rx="20" ry="7" fill="url(#marbleGrad)" stroke="#92400e" strokeWidth="2" />

      {/* Suvarna Kalash Pinnacle */}
      <path 
        d="M 192 100 Q 185 85 192 75 Q 180 60 200 50 Q 220 60 208 75 Q 215 85 208 100 Z" 
        fill="url(#goldGrad)" 
        stroke="#854d0e" 
        strokeWidth="2.5" 
      />
      <circle cx="200" cy="48" r="5" fill="url(#goldGrad)" stroke="#854d0e" strokeWidth="1.5" />

      {/* Dhwajadand (Sacred Flag Staff) & Flag */}
      <line x1="200" y1="48" x2="200" y2="10" stroke="#facc15" strokeWidth="3" />
      <circle cx="200" cy="8" r="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />

      {/* Fluttering Jain Dhwaja with Sun & Moon */}
      <path 
        d="M 200 12 L 270 28 L 200 44 Z" 
        fill="url(#flagGrad)" 
        stroke="#b91c1c" 
        strokeWidth="1.5" 
      />
      <circle cx="225" cy="28" r="4" fill="#ffffff" />

      {/* Callout Indicator Pin 1: Kalash (Active State) */}
      <circle cx="200" cy="75" r="9" fill={activeCallout === 0 ? '#ef4444' : '#eab308'} stroke="#ffffff" strokeWidth="2" />
      <text x="200" y="79" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">1</text>

      {/* Callout Indicator Pin 2: Dhwaja */}
      <circle cx="235" cy="28" r="7" fill={activeCallout === 1 ? '#ef4444' : '#f97316'} stroke="#ffffff" strokeWidth="2" />
      <text x="235" y="32" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">2</text>

      {/* Callout Indicator Pin 3: Amalaka */}
      <circle cx="160" cy="115" r="8" fill={activeCallout === 2 ? '#ef4444' : '#d97706'} stroke="#ffffff" strokeWidth="2" />
      <text x="160" y="119" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">3</text>

      {/* Callout Indicator Pin 4: Urushringa */}
      <circle cx="115" cy="380" r="8" fill={activeCallout === 3 ? '#ef4444' : '#b45309'} stroke="#ffffff" strokeWidth="2" />
      <text x="115" y="384" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">4</text>

      {/* Callout Indicator Pin 5: Base Jagati */}
      <circle cx="200" cy="460" r="8" fill={activeCallout === 4 ? '#ef4444' : '#78350f'} stroke="#ffffff" strokeWidth="2" />
      <text x="200" y="464" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">5</text>
    </svg>
  );
};

const VediSvgIllustration: React.FC<{ activeCallout: number | null; isLarge?: boolean }> = ({ activeCallout, isLarge }) => {
  const size = isLarge ? 480 : 340;
  return (
    <svg 
      viewBox="0 0 400 480" 
      width={size} 
      height={size * 1.2} 
      className="drop-shadow-2xl transition-all"
    >
      <defs>
        <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* Sanctum Floor Platform */}
      <rect x="30" y="410" width="340" height="50" rx="6" fill="#f8fafc" stroke="#b45309" strokeWidth="3" />
      <text x="200" y="442" textAnchor="middle" fill="#78350f" fontSize="12" fontWeight="bold">गर्भगृह पाषाण धरातल (Sanctum Floor)</text>

      {/* Simhasana Lower Base with Lion / Elephant carvings */}
      <polygon points="60,410 80,340 320,340 340,410" fill="#ffffff" stroke="#92400e" strokeWidth="2.5" />
      
      {/* Ashtamangal Frieze Panels on Vedi Front */}
      <rect x="90" y="348" width="220" height="34" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      {/* Mini Ashtamangal symbols representation */}
      {['卐', 'श्री', 'नंद्या', 'कलश', 'दर्पण', 'मत्स्य', 'वृक्ष'].map((sym, i) => (
        <text key={i} x={105 + i * 30} y="370" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="bold">
          {sym}
        </text>
      ))}

      {/* Middle Lotus Pedestal (Kamalasana) */}
      <polygon points="90,340 110,270 290,270 310,340" fill="#ffffff" stroke="#92400e" strokeWidth="2.5" />
      
      {/* Carved Lotus Petals on Pedestal */}
      {[120, 150, 180, 200, 220, 250, 280].map((cx, i) => (
        <path key={i} d={`M ${cx - 14} 340 Q ${cx} 300 ${cx + 14} 340 Z`} fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
      ))}

      {/* Sacred Gomukha Gandhodak Drain Spout (Right side) */}
      <path d="M 310 330 L 360 335 L 360 355 L 320 350 Z" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
      <circle cx="360" cy="345" r="4" fill="#38bdf8" />
      <path d="M 360 345 Q 365 375 365 410" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" fill="none" />

      {/* Upper Altar Seat */}
      <rect x="120" y="240" width="160" height="30" rx="5" fill="#ffffff" stroke="#92400e" strokeWidth="2.5" />

      {/* Prabhavali (Ornate Halo & Archway in Backdrop) */}
      <path 
        d="M 100 240 Q 100 70 200 60 Q 300 70 300 240 Z" 
        fill="url(#silverGrad)" 
        stroke="#ca8a04" 
        strokeWidth="3" 
      />
      {/* Inner Halo Ring (Bhamandal) */}
      <circle cx="200" cy="150" r="55" fill="#fef9c3" stroke="#f59e0b" strokeWidth="2.5" />
      {/* Radiating Rays */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 200 + Math.cos(rad) * 45;
        const y1 = 150 + Math.sin(rad) * 45;
        const x2 = 200 + Math.cos(rad) * 53;
        const y2 = 150 + Math.sin(rad) * 53;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d97706" strokeWidth="2" />;
      })}

      {/* Silhouette of Sacred Moolnayak Idol on Lotus Throne */}
      <path 
        d="M 175 240 L 175 200 Q 170 170 185 155 Q 185 140 200 135 Q 215 140 215 155 Q 230 170 225 200 L 225 240 Z" 
        fill="#ffffff" 
        stroke="#78350f" 
        strokeWidth="2.5" 
      />
      <circle cx="200" cy="148" r="10" fill="#ffffff" stroke="#78350f" strokeWidth="2" />
      {/* Padmasana crossed legs */}
      <ellipse cx="200" cy="235" rx="35" ry="12" fill="#ffffff" stroke="#78350f" strokeWidth="2" />

      {/* Triple Chhatra (Chhatratraya) over Idol */}
      <path d="M 170 75 Q 200 55 230 75 Z" fill="#fde047" stroke="#a16207" strokeWidth="2" />
      <path d="M 175 62 Q 200 46 225 62 Z" fill="#fde047" stroke="#a16207" strokeWidth="2" />
      <path d="M 180 50 Q 200 38 220 50 Z" fill="#fde047" stroke="#a16207" strokeWidth="2" />
      <line x1="200" y1="75" x2="200" y2="120" stroke="#ca8a04" strokeWidth="2" />

      {/* Callouts */}
      <circle cx="200" cy="265" r="9" fill={activeCallout === 0 ? '#ef4444' : '#ca8a04'} stroke="#ffffff" strokeWidth="2" />
      <text x="200" y="269" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">1</text>

      <circle cx="250" cy="110" r="9" fill={activeCallout === 1 ? '#ef4444' : '#d97706'} stroke="#ffffff" strokeWidth="2" />
      <text x="250" y="114" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">2</text>

      <circle cx="200" cy="365" r="9" fill={activeCallout === 2 ? '#ef4444' : '#b45309'} stroke="#ffffff" strokeWidth="2" />
      <text x="200" y="369" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">3</text>

      <circle cx="345" cy="345" r="9" fill={activeCallout === 3 ? '#ef4444' : '#0284c7'} stroke="#ffffff" strokeWidth="2" />
      <text x="345" y="349" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">4</text>

      <circle cx="100" cy="390" r="9" fill={activeCallout === 4 ? '#ef4444' : '#78350f'} stroke="#ffffff" strokeWidth="2" />
      <text x="100" y="394" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">5</text>
    </svg>
  );
};

const ToranSvgIllustration: React.FC<{ activeCallout: number | null; isLarge?: boolean }> = ({ activeCallout, isLarge }) => {
  const size = isLarge ? 480 : 340;
  return (
    <svg 
      viewBox="0 0 400 480" 
      width={size} 
      height={size * 1.2} 
      className="drop-shadow-2xl transition-all"
    >
      <defs>
        <linearGradient id="marblePillar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>

      {/* Threshold / Umbara Step */}
      <rect x="40" y="420" width="320" height="30" rx="4" fill="#ffffff" stroke="#b45309" strokeWidth="3" />
      <text x="200" y="440" textAnchor="middle" fill="#78350f" fontSize="11" fontWeight="bold">पवित्र देहरी (Stone Threshold)</text>

      {/* Left Pillar Base & Shaft */}
      <rect x="70" y="380" width="55" height="40" rx="3" fill="url(#marblePillar)" stroke="#92400e" strokeWidth="2" />
      <rect x="78" y="160" width="38" height="220" fill="url(#marblePillar)" stroke="#92400e" strokeWidth="2.5" />
      {/* Flutings / Carvings on Left Pillar */}
      {[90, 102].map((x, i) => (
        <line key={i} x1={x} y1="165" x2={x} y2="375" stroke="#cbd5e1" strokeWidth="2" />
      ))}
      {/* Left Capital Bracket */}
      <path d="M 60 160 L 135 160 L 125 130 L 70 130 Z" fill="#ffffff" stroke="#92400e" strokeWidth="2" />

      {/* Right Pillar Base & Shaft */}
      <rect x="275" y="380" width="55" height="40" rx="3" fill="url(#marblePillar)" stroke="#92400e" strokeWidth="2" />
      <rect x="284" y="160" width="38" height="220" fill="url(#marblePillar)" stroke="#92400e" strokeWidth="2.5" />
      {/* Flutings on Right Pillar */}
      {[296, 308].map((x, i) => (
        <line key={i} x1={x} y1="165" x2={x} y2="375" stroke="#cbd5e1" strokeWidth="2" />
      ))}
      {/* Right Capital Bracket */}
      <path d="M 265 160 L 340 160 L 330 130 L 275 130 Z" fill="#ffffff" stroke="#92400e" strokeWidth="2" />

      {/* Arch Support Crossbeam */}
      <rect x="65" y="110" width="270" height="20" rx="3" fill="#ffffff" stroke="#92400e" strokeWidth="2.5" />
      <text x="200" y="124" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="bold">॥ तीर्थंकर परमात्मा महाद्वार तोरण ॥</text>

      {/* Cusped Triple Wave Archway (Cusped Torana Arch) */}
      <path 
        d="M 98 130 Q 150 200 200 130 Q 250 200 302 130" 
        fill="none" 
        stroke="#f59e0b" 
        strokeWidth="6" 
      />
      <path 
        d="M 98 130 Q 150 200 200 130 Q 250 200 302 130" 
        fill="none" 
        stroke="#b45309" 
        strokeWidth="2" 
      />

      {/* Secondary Lower Arch Fringe with Bells */}
      <path 
        d="M 115 135 Q 160 220 200 155 Q 240 220 285 135" 
        fill="none" 
        stroke="#d97706" 
        strokeWidth="3" 
        strokeDasharray="8 6"
      />

      {/* Upper Pediment & Central Kalash Medallion */}
      <polygon points="120,110 200,40 280,110" fill="#ffffff" stroke="#92400e" strokeWidth="2.5" />
      <circle cx="200" cy="80" r="18" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      <text x="200" y="85" textAnchor="middle" fill="#b45309" fontSize="14" fontWeight="bold">卐</text>

      {/* Top Pinnacle on Toran */}
      <path d="M 194 40 L 200 20 L 206 40 Z" fill="#facc15" stroke="#854d0e" strokeWidth="2" />
      <circle cx="200" cy="18" r="4" fill="#facc15" stroke="#854d0e" strokeWidth="1" />

      {/* Hanging Golden Brass Bell from Center */}
      <line x1="200" y1="130" x2="200" y2="190" stroke="#ca8a04" strokeWidth="2" />
      <path d="M 190 190 Q 200 175 210 190 L 214 205 L 186 205 Z" fill="#eab308" stroke="#854d0e" strokeWidth="2" />
      <circle cx="200" cy="208" r="3" fill="#ca8a04" />

      {/* Callouts */}
      <circle cx="200" cy="150" r="9" fill={activeCallout === 0 ? '#ef4444' : '#f59e0b'} stroke="#ffffff" strokeWidth="2" />
      <text x="200" y="154" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">1</text>

      <circle cx="97" cy="250" r="9" fill={activeCallout === 1 ? '#ef4444' : '#d97706'} stroke="#ffffff" strokeWidth="2" />
      <text x="97" y="254" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">2</text>

      <circle cx="200" cy="50" r="9" fill={activeCallout === 2 ? '#ef4444' : '#b45309'} stroke="#ffffff" strokeWidth="2" />
      <text x="200" y="54" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">3</text>

      <circle cx="200" cy="420" r="9" fill={activeCallout === 3 ? '#ef4444' : '#78350f'} stroke="#ffffff" strokeWidth="2" />
      <text x="200" y="424" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">4</text>
    </svg>
  );
};

const MandapSvgIllustration: React.FC<{ activeCallout: number | null; isLarge?: boolean }> = ({ activeCallout, isLarge }) => {
  const size = isLarge ? 480 : 340;
  return (
    <svg 
      viewBox="0 0 400 480" 
      width={size} 
      height={size * 1.2} 
      className="drop-shadow-2xl transition-all"
    >
      {/* Floor Grid */}
      <ellipse cx="200" cy="420" rx="160" ry="40" fill="#ffffff" stroke="#92400e" strokeWidth="2.5" />
      <text x="200" y="430" textAnchor="middle" fill="#78350f" fontSize="11" fontWeight="bold">अष्टकोणीय रंगमंडप नृत्य तल (Assembly Floor)</text>

      {/* 4 Representative Front Pillars in Octagonal Layout */}
      {[70, 150, 250, 330].map((x, idx) => (
        <g key={idx}>
          <rect x={x - 12} y="180" width="24" height="220" rx="3" fill="#f8fafc" stroke="#92400e" strokeWidth="2" />
          <polygon points={`${x - 22},180 ${x + 22},180 ${x},140`} fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
        </g>
      ))}

      {/* Concentric Domed Vitana / Corbelled Ceiling Arch */}
      <path d="M 50 160 Q 200 40 350 160" fill="none" stroke="#92400e" strokeWidth="5" />
      <path d="M 75 160 Q 200 70 325 160" fill="none" stroke="#d97706" strokeWidth="3" />
      <path d="M 100 160 Q 200 95 300 160" fill="none" stroke="#f59e0b" strokeWidth="3" />
      <path d="M 125 160 Q 200 115 275 160" fill="none" stroke="#ca8a04" strokeWidth="2" />

      {/* Hanging Central Padma-Shila Lotus Pendant */}
      <path d="M 180 120 L 220 120 L 205 180 L 195 180 Z" fill="#ffffff" stroke="#92400e" strokeWidth="2" />
      <ellipse cx="200" cy="180" rx="20" ry="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
      <path d="M 190 180 Q 200 215 200 220 Q 200 215 210 180" fill="#fde047" stroke="#a16207" strokeWidth="2" />

      {/* Callouts */}
      <circle cx="200" cy="200" r="9" fill={activeCallout === 0 ? '#ef4444' : '#eab308'} stroke="#ffffff" strokeWidth="2" />
      <text x="200" y="204" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">1</text>

      <circle cx="150" cy="160" r="9" fill={activeCallout === 1 ? '#ef4444' : '#f59e0b'} stroke="#ffffff" strokeWidth="2" />
      <text x="150" y="164" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">2</text>

      <circle cx="70" cy="280" r="9" fill={activeCallout === 2 ? '#ef4444' : '#92400e'} stroke="#ffffff" strokeWidth="2" />
      <text x="70" y="284" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">3</text>
    </svg>
  );
};

const KundSvgIllustration: React.FC<{ activeCallout: number | null; isLarge?: boolean }> = ({ activeCallout, isLarge }) => {
  const size = isLarge ? 480 : 340;
  return (
    <svg 
      viewBox="0 0 400 480" 
      width={size} 
      height={size * 1.2} 
      className="drop-shadow-2xl transition-all"
    >
      {/* Ground Surface */}
      <rect x="20" y="120" width="360" height="20" fill="#d97706" rx="4" />
      <line x1="20" y1="130" x2="380" y2="130" stroke="#78350f" strokeWidth="2" strokeDasharray="4 4" />
      <text x="200" y="112" textAnchor="middle" fill="#78350f" fontSize="12" fontWeight="bold">ईशान कोण भूमि तल (Ground Surface NE)</text>

      {/* Underground Pit Chamber */}
      <rect x="80" y="140" width="240" height="300" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="3" />

      {/* Layer 1: Charcoal & Sand Filter */}
      <rect x="90" y="180" width="220" height="50" rx="4" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="200" y="210" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">प्रथम स्तर: सक्रिय चारकोल व बालू रेत</text>

      {/* Layer 2: Gravel & Stone Filtration */}
      <rect x="90" y="240" width="220" height="60" rx="4" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
      <text x="200" y="275" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">द्वितीय स्तर: प्राकृतिक बजरी व कंकड़</text>

      {/* Layer 3: Pure Sanctified Water Reservoir */}
      <rect x="90" y="310" width="220" height="110" rx="6" fill="#0284c7" fillOpacity="0.7" stroke="#38bdf8" strokeWidth="2" />
      <text x="200" y="360" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">अमृत गंधोदक संचय तल</text>
      <text x="200" y="380" textAnchor="middle" fill="#bae6fd" fontSize="10">केवल तुलसी वाटिका में समर्पण</text>

      {/* Inflow Copper Pipe from Vedi */}
      <path d="M 30 70 L 140 70 L 140 160" fill="none" stroke="#f97316" strokeWidth="6" />
      <polygon points="135,160 145,160 140,170" fill="#f97316" />
      <text x="75" y="60" fill="#b45309" fontSize="10" fontWeight="bold">वेदी से शुद्ध ताम्र पाइप ➔</text>

      {/* Protective Stone Lid on Top */}
      <rect x="70" y="132" width="260" height="16" rx="4" fill="#ffffff" stroke="#92400e" strokeWidth="2" />
      <circle cx="200" cy="140" r="4" fill="#ca8a04" />

      {/* Callouts */}
      <circle cx="90" cy="70" r="9" fill={activeCallout === 0 ? '#ef4444' : '#f97316'} stroke="#ffffff" strokeWidth="2" />
      <text x="90" y="74" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">1</text>

      <circle cx="320" cy="210" r="9" fill={activeCallout === 1 ? '#ef4444' : '#0ea5e9'} stroke="#ffffff" strokeWidth="2" />
      <text x="320" y="214" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">2</text>

      <circle cx="320" cy="360" r="9" fill={activeCallout === 2 ? '#ef4444' : '#0284c7'} stroke="#ffffff" strokeWidth="2" />
      <text x="320" y="364" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">3</text>
    </svg>
  );
};
