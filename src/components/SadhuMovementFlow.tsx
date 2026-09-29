import React, { useState } from 'react';
import { 
  Footprints, 
  Compass, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  ShieldCheck, 
  Sparkles,
  Users,
  Eye,
  Heart
} from 'lucide-react';

interface MovementStep {
  step: number;
  id: string;
  title: string;
  zone: string;
  direction: string;
  sutraRef: string;
  summary: string;
  agamicRules: string[];
  strictMaryada: string[];
  coordinates: { x: number; y: number }; // Coordinates on SVG canvas
}

export const SadhuMovementFlow: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [selectedTradition, setSelectedTradition] = useState<'sadhu' | 'sadhvi' | 'both'>('both');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const MOVEMENT_STEPS: MovementStep[] = [
    {
      step: 1,
      id: 'upashraya-departure',
      title: 'उपाश्रय प्रस्थान एवं ईर्यासमिति (Ascetic Origin)',
      zone: 'उपाश्रय परिसर (साधु / साध्वी अलग पौषधशाला)',
      direction: 'नैऋत्य कोण (South-West) अथवा पश्चिम',
      sutraRef: 'आचारांग सूत्र (प्रथम श्रुतस्कंध) एवं ईर्यासमिति कल्प',
      summary: 'उपाश्रय से जिनालय की ओर प्रस्थान करते समय पूज्य मुनिराज एवं साध्वी जी भगवंत हाथ में रजोहरण (ओघा) और मुखवस्त्रिका (मुखपत्ती) धारण कर चार हाथ आगे भूमि का ईर्यासमिति पूर्वक निरीक्षण करते हुए प्रस्थान करते हैं।',
      agamicRules: [
        'चलते समय दृष्टि केवल आगे चार हाथ (लगभग 6 फीट) भूमि पर सूक्ष्म जीवों की रक्षा हेतु केंद्रित रहे।',
        'मार्ग में रजोहरण से धीरे-धीरे कोमलता पूर्वक मार्ग का प्रमार्जन (शोधन) किया जाता है।',
        'साधु भगवंत एवं साध्वी जी भगवंतों के उपाश्रय एक दूसरे से पूर्णतः अलग और पृथक मर्यादा में स्थित होते हैं।',
        'रास्ते में किसी भी सांसारिक व्यक्ति, वाहन या कोलाहल से सर्वथा अनासक्त रहकर मौन या नवकार जाप करते हैं।'
      ],
      strictMaryada: [
        'बिना रजोहरण या मुखपत्ती के जिनालय गमन निषिद्ध है।',
        'जूते-चप्पल, छाता या चमड़े की किसी भी वस्तु का पूर्ण त्याग होता है (सदा पदविहारी)।'
      ],
      coordinates: { x: 18, y: 78 }
    },
    {
      step: 2,
      id: 'nissahi-entry',
      title: 'प्रथम "निस्सहि" एवं जिनालय प्रवेश (Nissahi & Entrance)',
      zone: 'मंदिर महाद्वार / तोरण द्वार (उत्तर अथवा पूर्व महाद्वार)',
      direction: 'उत्तर दिशा (North) अथवा पूर्व दिशा (East)',
      sutraRef: 'आवश्यक सूत्र एवं चैत्यवंदन विधि भाष्य',
      summary: 'मंदिर की परिधि में प्रवेश करते ही प्रथम "निस्सहि" का उच्चारण किया जाता है। "निस्सहि" का अर्थ है - संसार और उपाश्रय के सांसारिक विचारों का त्याग कर पूर्ण वीतरागी भाव में प्रवेश करना।',
      agamicRules: [
        'देहरी (उंबरो) को लांघकर प्रवेश किया जाता है, देहरी पर पैर रखना शास्त्र निषिद्ध है।',
        'प्रवेश करते समय उच्च स्वर में "निस्सहि" बोलकर जिनालय की देव ऊर्जा को प्रणाम किया जाता है।',
        'साधु-साध्वी भगवंतों हेतु तोरण द्वार के किनारे से निर्बाध व एकांत मार्ग प्रशस्त होना चाहिए।'
      ],
      strictMaryada: [
        'संसार के लेन-देन, धन-वैभव अथवा सांसारिक चर्चा मंदिर द्वार लांघते ही सर्वथा त्याज्य हैं।',
        'प्रवेश द्वार पर किसी भी प्रकार का जल-स्पर्श या अशुद्धि नहीं होनी चाहिए।'
      ],
      coordinates: { x: 82, y: 50 }
    },
    {
      step: 3,
      id: 'rangmandap-darshan',
      title: 'रंगमंडप में देवदर्शन व मर्यादा (Chaityavandan Zone)',
      zone: 'रंगमंडप / नवचौकी (मूल गर्भगृह के सम्मुख सुरक्षित फासला)',
      direction: 'मध्य-पश्चिम (Brahmasthan से गर्भगृह की सीध)',
      sutraRef: 'दशवैकालिक सूत्र एवं प्रतिष्ठा सारोद्धार',
      summary: 'साधु-साध्वी भगवंत वीतराग तीर्थंकर प्रभु के सम्मुख रंगमंडप में खड़े होकर नासाग्र दृष्टि से दर्शन करते हैं। वे द्रव्य-पूजा (केसर, पुष्प, अक्षत, जल) नहीं करते, बल्कि केवल परम सात्विक भाव-पूजा एवं स्तुति करते हैं।',
      agamicRules: [
        'भगवान के सिंहासन से उचित मर्यादापूर्ण दूरी (कम से कम 9 से 12 फीट) पर खड़े होकर चैत्यवंदन करते हैं।',
        'रजोहरण को भूमि पर कोमलता से रखकर दोनों हाथ जोड़कर "नमुत्थुणं" (अरिहंत चेइयाणं) पाठ करते हैं।',
        'मुखपत्ती को मुख पर बांधकर या हाथ में रखकर जिनवाणी का पावन उच्चारण करते हैं।'
      ],
      strictMaryada: [
        'साधु-साध्वी भगवंत सचित्त जल, केसर या पुष्पों से प्रतिमा का स्पर्श (अंगपूजा) नहीं करते, क्योंकि वे पूर्ण अपरिग्रही व अहिंसक महाव्रती हैं। द्रव्य पूजा श्रावकों का धर्म है।',
        'गर्भगृह के अति निकट या वेदी पर अनावश्यक प्रवेश नहीं करते।'
      ],
      coordinates: { x: 50, y: 50 }
    },
    {
      step: 4,
      id: 'pradakshina-flow',
      title: 'त्रिक प्रदक्षिणा प्रक्रम (Auspicious Clockwise Pradakshina)',
      zone: 'गर्भगृह के चारों ओर परिक्रमा पथ (Pradakshina Path)',
      direction: 'पूर्व → आग्नेय → दक्षिण → नैऋत्य → पश्चिम → वायव्य → उत्तर',
      sutraRef: 'बृहत्कल्प सूत्र एवं जिनप्रासाद प्रदक्षिणा विधि',
      summary: 'तीर्थंकर भगवान के गर्भगृह की तीन बार दक्षिणावर्त (Clockwise) परिक्रमा की जाती है। यह तीन परिक्रमाएं सम्यग्दर्शन, सम्यग्ज्ञान और सम्यक्चारित्र (रत्नत्रय) की आराधना का प्रतीक हैं।',
      agamicRules: [
        'परिक्रमा सदैव दक्षिणावर्त (घड़ी की सुई की दिशा में) ही होनी चाहिए, जिससे भगवान सदैव साधक के दाहिने हाथ की ओर रहें।',
        'परिक्रमा करते समय मन में नवकार महामंत्र, उवसग्गहरं स्तोत्र अथवा तीर्थंकर स्तुति का निरंतर जाप रहे।',
        'परिक्रमा पथ कम से कम 3 से 5 फीट चौड़ा, समतल और श्वेत संगमरमर से निर्मित होना चाहिए।'
      ],
      strictMaryada: [
        'परिक्रमा के दौरान कभी भी पीछे की ओर (उल्टी दिशा में) नहीं घूमा जाता।',
        'परिक्रमा करते हुए आपस में वार्तालाप या सांसारिक संकेत करना निषिद्ध है।'
      ],
      coordinates: { x: 35, y: 35 }
    },
    {
      step: 5,
      id: 'guru-mandir-vandan',
      title: 'दादागुरुदेव व गुरु पादुका वंदन (Dadagurudev Vandan)',
      zone: 'गुरु मंदिर / दादावाड़ी / गुरु वेदी',
      direction: 'ईशान कोण (North-East) अथवा उत्तर दिशा',
      sutraRef: 'गुरु पारतंत्र्य कल्प एवं खरतर-तपागच्छ गुरु परंपरा',
      summary: 'मूल जिनालय की परिक्रमा के उपरांत पूज्य साधु-साध्वी भगवंत ईशान अथवा उत्तर में स्थित दादागुरुदेव (जिनदत्त सूरि, कुशल सूरि, राजेंद्र सूरि) की पादुका व गुरु मूर्ति के दर्शन कर गुरु वंदना व खमासमण देते हैं।',
      agamicRules: [
        'गुरुदेव के समक्ष "इच्छामि खमासमणो... वंदिउं जावणिज्जाए" का उच्चारण कर पंचांग प्रणिपात करते हैं।',
        'गुरु के चरणों में संयम की दृढ़ता, आगम ज्ञान की वृद्धि और चतुर्विध संघ के कल्याण की प्रार्थना करते हैं।',
        'गुरु पादुका के समक्ष कुछ क्षण कायोत्सर्ग (काउस्सग्ग) ध्यान करते हैं।'
      ],
      strictMaryada: [
        'गुरु वेदी तीर्थंकर वेदी से नीची और अलग मर्यादा में होती है, इसका आदरपूर्वक ध्यान रखा जाता है।'
      ],
      coordinates: { x: 75, y: 25 }
    },
    {
      step: 6,
      id: 'deshna-pravachan-pat',
      title: 'प्रवचन सभा मंडप एवं धर्म देशना (Pravachan Hall)',
      zone: 'व्याख्यान मंडप / प्रवचन हॉल (Auditorium)',
      direction: 'पश्चिम (West) अथवा उत्तर-पश्चिम (वायव्य)',
      sutraRef: 'समवशरण रचना कल्प एवं उत्तराध्ययन सूत्र',
      summary: 'पूज्य आचार्य, मुनिराज अथवा विदुषी साध्वी जी भगवंत व्याख्यान मंडप में ऊंचे काष्ठ के पाट (व्यासपीठ) पर विराजमान होकर चतुर्विध संघ (साधु, साध्वी, श्रावक, श्राविका) को धर्म देशना प्रदान करते हैं।',
      agamicRules: [
        'गुरु भगवंत का आसन दक्षिण या पश्चिम में इस प्रकार हो कि उनका मुख उत्तर अथवा पूर्व की ओर रहे।',
        'सभा मंडप में साधु एवं साध्वी भगवंतों के बैठने की स्वतंत्र, मर्यादापूर्ण अलग-अलग विंग होती है।',
        'श्रावक (पुरुष) एक तरफ तथा श्राविका (महिलाएं) दूसरी तरफ अलग पंक्तियों में मर्यादित वस्त्रों में बैठते हैं।',
        'प्रवचन प्रारंभ से पूर्व मांगलिक स्तुति एवं नवकार महामंत्र का समवेत उच्चारण होता है।'
      ],
      strictMaryada: [
        'गुरु पाट पर कभी भी चमड़ा, गद्दा या विलासी आसन नहीं होता, केवल शुद्ध श्वेत काष्ठ पाट व शुद्ध सूती आवरण होता है।',
        'प्रवचन के दौरान किसी भी प्रकार की अनुशासनहीनता या मोबाइल का प्रयोग वर्जित होता है।'
      ],
      coordinates: { x: 22, y: 35 }
    },
    {
      step: 7,
      id: 'gochari-path',
      title: 'गोचरी गमन एवं विशुद्ध आहार चर्या (Gochari Circulation)',
      zone: 'परिसर बाह्य निकास मार्ग (श्रावक गृहों की ओर)',
      direction: 'उत्तर अथवा पश्चिम बाह्य द्वार',
      sutraRef: 'पिंडैषणा अध्ययन (दशवैकालिक सूत्र)',
      summary: 'दोपहर पूर्व के समय मुनिराज एवं साध्वी जी भगवंत गोचरी (अाहार) हेतु श्रावकों के गृहों की ओर प्रस्थान करते हैं। गोचरी भ्रमर (मधुमक्खी) की तरह होती है, जो किसी भी गृहस्थ को कष्ट दिए बिना केवल निर्दोष, प्रसुक (छना व उबला) सात्विक आहार ही ग्रहण करते हैं।',
      agamicRules: [
        'साधु सदैव दो या अधिक की संख्या में (युगल रूप में) ही गोचरी जाते हैं, एकाकी गमन निषिद्ध है।',
        'भोजन शाला (रसोई) जहां सचित्त अग्नि जल रही हो, वहां अंदर प्रवेश नहीं करते; बाहर देहरी पर खड़े होकर ही शुद्ध गोचरी स्वीकारते हैं।',
        'काष्ठ पात्रों (पात्रों) में ही आहार ग्रहण किया जाता है।'
      ],
      strictMaryada: [
        'अपने लिए विशेष रूप से बनवाया गया (आधाकर्मी) भोजन स्वीकार नहीं करते।',
        'पैसा, सोना, चांदी या किसी भी प्रकार का मूल्यवान उपहार छूना भी महापाप माना गया है।'
      ],
      coordinates: { x: 48, y: 88 }
    },
    {
      step: 8,
      id: 'sadhvi-maryada',
      title: 'साध्वी जी भगवंत विशेष गमनागमन मर्यादा (Sadhvi Sacred Maryada)',
      zone: 'स्वतंत्र साध्वी उपाश्रय एवं पृथक आरक्षित गलियारा (Dedicated Corridor)',
      direction: 'पश्चिम-नैऋत्य का पृथक एकांत संकुल',
      sutraRef: 'बृहत्कल्प सूत्र (साध्वी आचार कल्प) एवं निशीथ सूत्र',
      summary: 'श्वेतांबर परंपरा में साध्वी जी भगवंतों (श्रमणी वृंद) की ब्रह्मचर्य, शील और सुरक्षा मर्यादा अत्यंत कठोर और पवित्र है। जिनालय परिसर में उनके आने-जाने के मार्ग, उपाश्रय और बैठने के स्थान साधु वृंद से पूर्णतः पृथक होते हैं।',
      agamicRules: [
        'साध्वी जी कभी भी अकेली गमन नहीं करतीं, सदैव कम से कम दो या तीन साध्वी जी एक साथ चलती हैं।',
        'साध्वी उपाश्रय का प्रवेश द्वार और साधु उपाश्रय का प्रवेश द्वार विपरीत दिशाओं में अथवा दृष्टि-ओझल दूरी पर होना चाहिए।',
        'मंदिर में देवदर्शन एवं व्याख्यान श्रवण के समय साध्वी जी की पंक्ति साधु भगवंतों के पीछे मर्यादापूर्ण अंतर पर होती है।',
        'रात्रि के समय जिनालय परिसर से बाहर निकलना अथवा अंधेरे में गमन पूर्णतः वर्जित होता है।'
      ],
      strictMaryada: [
        'साधु एवं साध्वी जी के कक्ष कभी भी आमने-सामने या सीधे संलग्न (Connected) नहीं होने चाहिए।',
        'किसी भी गृहस्थ पुरुष का साध्वी उपाश्रय में अकेले प्रवेश करना शास्त्र निषिद्ध है।'
      ],
      coordinates: { x: 12, y: 65 }
    }
  ];

  const currentStep = MOVEMENT_STEPS[activeStepIndex];

  // Auto-play steps timer simulation
  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      const nextIdx = (activeStepIndex + 1) % MOVEMENT_STEPS.length;
      setActiveStepIndex(nextIdx);
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50/70 via-white to-amber-100/50 rounded-2xl border-2 border-amber-300 p-4 sm:p-6 lg:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-amber-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/80 text-amber-950 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
            <Footprints className="w-4 h-4 text-amber-800" />
            <span>श्वेतांबर आगम सम्मत चारित्र एवं गमनागमन विज्ञान</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-jain text-stone-900">
            पूज्य साधु-साध्वी गमनागमन प्रवाह एवं मर्यादा विन्यास
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
            जिनालय परिसर में निर्ग्रंथ मुनिराज एवं साध्वी जी भगवंतों के उपाश्रय प्रस्थान, निस्सहि प्रवेश, चैत्यवंदन, त्रिक प्रदक्षिणा, गुरु वंदन, प्रवचन पाट व गोचरी का शास्त्रोक्त पदविहार नक्शा।
          </p>
        </div>

        {/* Tradition Selector */}
        <div className="flex items-center gap-2 bg-amber-100/70 p-1.5 rounded-xl border border-amber-300 shrink-0">
          <button
            onClick={() => setSelectedTradition('both')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedTradition === 'both' ? 'bg-amber-800 text-white shadow-xs' : 'text-stone-700 hover:text-amber-900'
            }`}
          >
            समग्र प्रवाह (All)
          </button>
          <button
            onClick={() => setSelectedTradition('sadhu')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedTradition === 'sadhu' ? 'bg-amber-700 text-white shadow-xs' : 'text-stone-700 hover:text-amber-900'
            }`}
          >
            साधु मार्ग (मुनिराज)
          </button>
          <button
            onClick={() => setSelectedTradition('sadhvi')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedTradition === 'sadhvi' ? 'bg-emerald-800 text-white shadow-xs' : 'text-stone-700 hover:text-emerald-900'
            }`}
          >
            साध्वी मर्यादा मार्ग
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Map (Left) + Detail Panel (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Architectural Schematic SVG Map */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full bg-white rounded-3xl border-2 border-amber-300 p-3 sm:p-4 shadow-md relative overflow-hidden">
            {/* Direction Labels on Map edges */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-amber-900 uppercase bg-amber-100/90 px-2 py-0.5 rounded border border-amber-300 z-10">
              उत्तर (NORTH) ↑
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-stone-600 uppercase bg-stone-100 px-2 py-0.5 rounded border border-stone-300 z-10">
              दक्षिण (SOUTH) ↓
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-amber-900 uppercase bg-amber-100/90 px-1.5 py-1 rounded border border-amber-300 z-10 rotate-90">
              पूर्व (EAST) →
            </div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-stone-600 uppercase bg-stone-100 px-1.5 py-1 rounded border border-stone-300 z-10 -rotate-90">
              ← पश्चिम (WEST)
            </div>

            {/* SVG Temple Floor Plan and Movement Vectors */}
            <div className="w-full aspect-[4/3] relative mt-4 mb-2">
              <svg viewBox="0 0 100 100" className="w-full h-full select-none">
                {/* Temple Outer Boundary Wall */}
                <rect x="5" y="5" width="90" height="90" rx="4" fill="#fffdfa" stroke="#d97706" strokeWidth="0.8" strokeDasharray="2 1" />
                
                {/* Zones Layout */}
                {/* 1. Garbhagriha & Shikhar (Center-West) */}
                <rect x="25" y="35" width="22" height="30" rx="2" fill="#fef3c7" stroke="#b45309" strokeWidth="1.2" />
                {/* Moolnayak Vedi */}
                <rect x="27" y="44" width="8" height="12" rx="1" fill="#fbbf24" stroke="#92400e" strokeWidth="0.8" />
                <text x="31" y="51" fontSize="2.8" textAnchor="middle" fill="#78350f" fontWeight="bold">मूल वेदी</text>
                
                {/* Pradakshina Path (Around Garbhagriha) */}
                <rect x="22" y="32" width="28" height="36" rx="3" fill="none" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
                <text x="36" y="30" fontSize="2.2" textAnchor="middle" fill="#b45309">त्रिक प्रदक्षिणा पथ</text>

                {/* 2. Rangmandap (Assembly Hall in Center) */}
                <circle cx="58" cy="50" r="13" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
                <text x="58" y="48" fontSize="2.8" textAnchor="middle" fill="#854d0e" fontWeight="bold">रंगमंडप</text>
                <text x="58" y="52" fontSize="2.1" textAnchor="middle" fill="#a16207">चैत्यवंदन मर्यादा</text>

                {/* 3. Toran Dwar / Simhadwar (East) */}
                <rect x="80" y="42" width="8" height="16" rx="1.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
                <text x="84" y="50" fontSize="2.3" textAnchor="middle" fill="#854d0e" fontWeight="bold">तोरण</text>
                <text x="84" y="54" fontSize="2.0" textAnchor="middle" fill="#713f12">महाद्वार</text>

                {/* 4. Dadagurudev / Guru Mandir (North-East) */}
                <rect x="68" y="16" width="18" height="15" rx="2" fill="#ecfdf5" stroke="#059669" strokeWidth="1" />
                <text x="77" y="23" fontSize="2.5" textAnchor="middle" fill="#065f46" fontWeight="bold">दादागुरुदेव</text>
                <text x="77" y="27" fontSize="2.0" textAnchor="middle" fill="#047857">पादुका कक्ष (NE)</text>

                {/* 5. Pravachan Hall (Theater in West/NW) */}
                <rect x="12" y="15" width="24" height="18" rx="2" fill="#fff7ed" stroke="#ea580c" strokeWidth="1" />
                <text x="24" y="22" fontSize="2.5" textAnchor="middle" fill="#9a3412" fontWeight="bold">प्रवचन सभा मंडप</text>
                <text x="24" y="26" fontSize="2.0" textAnchor="middle" fill="#c2410c">व्यासपीठ (गुरु पाट)</text>

                {/* 6. Upashraya Complexes (South-West) */}
                {/* Sadhu Upashraya */}
                <rect x="12" y="70" width="18" height="16" rx="2" fill="#fef3c7" stroke="#d97706" strokeWidth="1.2" />
                <text x="21" y="77" fontSize="2.4" textAnchor="middle" fill="#92400e" fontWeight="bold">साधु उपाश्रय</text>
                <text x="21" y="81" fontSize="1.9" textAnchor="middle" fill="#b45309">मुनिराज निवास</text>

                {/* Sadhvi Upashraya (Separate Isolated Wing) */}
                <rect x="33" y="72" width="16" height="14" rx="2" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.2" />
                <text x="41" y="78" fontSize="2.4" textAnchor="middle" fill="#065f46" fontWeight="bold">साध्वी उपाश्रय</text>
                <text x="41" y="82" fontSize="1.8" textAnchor="middle" fill="#047857">मर्यादा संकुल</text>

                {/* Separation Barrier Line between Sadhu & Sadhvi Quarters */}
                <line x1="31" y1="69" x2="31" y2="88" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="1 1" />

                {/* Dynamic Movement Path Vectors (Arrows connecting steps) */}
                {/* Path 1: From Sadhu Upashraya to Main Entrance/Corridor */}
                <path
                  d="M 21 70 Q 21 64 50 64 T 80 50"
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="1.5"
                  strokeDasharray="2 1.5"
                  className="animate-pulse"
                />

                {/* Path 2: Entry from Toran Dwar to Rangmandap */}
                <path
                  d="M 80 50 L 68 50"
                  fill="none"
                  stroke="#b45309"
                  strokeWidth="1.8"
                />

                {/* Path 3: Pradakshina Path (Looping clockwise around Garbhagriha) */}
                <path
                  d="M 52 46 C 45 40 45 32 36 32 C 24 32 24 66 36 66 C 44 66 48 56 52 52"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="1.8"
                />

                {/* Path 4: From Rangmandap to Guru Mandir (NE) */}
                <path
                  d="M 64 44 Q 72 38 75 32"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="1.5"
                  strokeDasharray="1.5 1.5"
                />

                {/* Path 5: From Guru Mandir to Pravachan Hall */}
                <path
                  d="M 68 22 L 36 22"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1.5"
                  strokeDasharray="2 1"
                />

                {/* Path 6: Gochari Exit Path (North/West perimeter to outside) */}
                <path
                  d="M 24 33 Q 35 48 48 86"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />

                {/* Sadhvi Separate Restricted Corridor Path (in Emerald) */}
                {(selectedTradition === 'sadhvi' || selectedTradition === 'both') && (
                  <path
                    d="M 41 72 Q 41 62 56 60 T 60 56"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="1.6"
                    strokeDasharray="2 1"
                  />
                )}

                {/* Interactive Points on Canvas for all 8 Steps */}
                {MOVEMENT_STEPS.map((st, idx) => {
                  const isCurrent = activeStepIndex === idx;
                  return (
                    <g key={st.id} className="cursor-pointer" onClick={() => setActiveStepIndex(idx)}>
                      {isCurrent && (
                        <circle
                          cx={st.coordinates.x}
                          cy={st.coordinates.y}
                          r="4.5"
                          fill="none"
                          stroke="#b45309"
                          strokeWidth="0.8"
                          className="animate-ping opacity-75"
                        />
                      )}
                      <circle
                        cx={st.coordinates.x}
                        cy={st.coordinates.y}
                        r={isCurrent ? "3.2" : "2.4"}
                        fill={isCurrent ? "#9a3412" : "#b45309"}
                        stroke="#ffffff"
                        strokeWidth="0.7"
                      />
                      <text
                        x={st.coordinates.x}
                        y={st.coordinates.y + 0.9}
                        fontSize="2.2"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontWeight="bold"
                      >
                        {st.step}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Legend */}
            <div className="pt-2 border-t border-amber-200/80 flex flex-wrap items-center justify-between text-[11px] text-stone-600 gap-2">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-700 inline-block" />
                  <span>साधु प्रवाह (Sadhu Flow)</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 inline-block" />
                  <span>साध्वी पृथक मर्यादा (Sadhvi Maryada)</span>
                </span>
              </div>
              <span className="text-amber-900 font-medium">
                किसी भी संख्या बिंदु (1 से 8) पर क्लिक करें
              </span>
            </div>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="w-full mt-4 flex items-center justify-between gap-2">
            <button
              onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : MOVEMENT_STEPS.length - 1))}
              className="px-3 py-1.5 bg-white border border-stone-300 hover:bg-stone-50 rounded-lg text-xs font-semibold text-stone-700 flex items-center gap-1 cursor-pointer"
            >
              ← पिछला चरण
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {MOVEMENT_STEPS.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center transition-all cursor-pointer ${
                    activeStepIndex === idx
                      ? 'bg-amber-800 text-white shadow-xs scale-110'
                      : 'bg-amber-100 text-amber-950 hover:bg-amber-200'
                  }`}
                  title={s.title}
                >
                  {s.step}
                </button>
              ))}
            </div>

            <button
              onClick={() => setActiveStepIndex((prev) => (prev < MOVEMENT_STEPS.length - 1 ? prev + 1 : 0))}
              className="px-3 py-1.5 bg-amber-800 hover:bg-amber-900 rounded-lg text-xs font-semibold text-white flex items-center gap-1 cursor-pointer"
            >
              अगला चरण →
            </button>
          </div>
        </div>

        {/* Right Column: Step Detail Card */}
        <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-amber-300 p-5 sm:p-6 shadow-sm">
          {/* Step Badge */}
          <div className="flex items-center justify-between gap-2 border-b border-amber-200 pb-3 mb-4 flex-wrap">
            <div>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200 inline-block mb-1">
                चरण #{currentStep.step} : {currentStep.zone}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-serif-jain text-amber-950">
                {currentStep.title}
              </h4>
            </div>
            <div className="text-right">
              <span className="text-xs text-stone-600 block">वास्तु दिशा:</span>
              <strong className="text-xs text-amber-900 font-bold">{currentStep.direction}</strong>
            </div>
          </div>

          {/* Shastric Sutra Reference */}
          <div className="bg-amber-50/80 p-2.5 rounded-lg border border-amber-200/80 text-xs text-amber-950 flex items-center gap-1.5 mb-3.5">
            <BookOpen className="w-4 h-4 text-amber-700 shrink-0" />
            <span><strong>आगम प्रमाण:</strong> {currentStep.sutraRef}</span>
          </div>

          {/* Summary Text */}
          <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-4">
            {currentStep.summary}
          </p>

          {/* Agamic Rules (Must Follow) */}
          <div className="mb-4">
            <h5 className="text-xs sm:text-sm font-bold text-emerald-900 flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>अनिवार्य आचार संहिता एवं पदविहार नियम:</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {currentStep.agamicRules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-1.5 bg-emerald-50/40 p-2 rounded-lg border border-emerald-100">
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Strict Maryada (निषेध) */}
          <div className="mb-4">
            <h5 className="text-xs sm:text-sm font-bold text-rose-900 flex items-center gap-1.5 mb-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>सख्त साधु मर्यादा एवं वर्जनाएं (Strict Prohibitions):</span>
            </h5>
            <ul className="space-y-1 text-xs text-stone-700">
              {currentStep.strictMaryada.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5 bg-rose-50/50 p-2 rounded-lg border border-rose-200/70">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span className="text-stone-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Expert Advice note */}
          <div className="pt-3 border-t border-amber-200 flex items-center justify-between gap-2 text-xs text-stone-600">
            <span>उपाश्रय एवं साध्वी संकुल नक्शा प्रमाणन:</span>
            <a
              href="https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20हमें%20मंदिर%20परिसर%20में%20उपाश्रय%20व%20साधु-साध्वी%20गमनागमन%20वास्तु%20मर्यादा%20हेतु%20परामर्श%20चाहिए।"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 font-bold hover:underline"
            >
              संजीव सिपानी जी से सलाह लें →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
