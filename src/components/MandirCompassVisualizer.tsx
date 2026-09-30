import React, { useState } from 'react';
import { 
  Compass, 
  CheckCircle2, 
  XCircle, 
  Info, 
  Sparkles, 
  AlertTriangle, 
  Footprints,
  RotateCw,
  RotateCcw,
  Layers,
  Eye,
  Sliders,
  Maximize2,
  Building,
  Flame,
  Droplets,
  Shield,
  BookOpen,
  ArrowUp,
  Volume2,
  Phone,
  MessageCircle,
  HelpCircle,
  Award
} from 'lucide-react';
import { SadhuMovementFlow } from './SadhuMovementFlow';

export interface VastuSector {
  dir: 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW' | 'Center';
  code: string;
  name: string;
  angle: number; // degrees 0 = North, 45 = NE, etc.
  element: string;
  deity: string;
  structureCategory: 'temple' | 'fire' | 'heavy' | 'protector' | 'water' | 'knowledge' | 'open';
  highlightColor: string;
  glowColor: string;
  elevationLevel: 'उच्चतम (Highest SW)' | 'उच्च (High S/W)' | 'मध्यम (Moderate SE/NW)' | 'निम्नतम (Lowest/Sunken NE)' | 'शून्य भार (Open Center)';
  idealStructures: string[];
  strictlyProhibited: string[];
  shastricRule: string;
  icon: string;
  architecturalNote: string;
}

export const VASTU_SECTORS: VastuSector[] = [
  {
    dir: 'NE',
    code: 'NE',
    name: 'ईशान कोण (North-East)',
    angle: 45,
    element: 'जल एवं आकाश तत्व (अमृत पद)',
    deity: 'मूल तीर्थंकर वीतराग प्रभु / ईश देवत्व',
    structureCategory: 'temple',
    highlightColor: 'from-amber-400 to-yellow-300 border-amber-400 text-amber-950',
    glowColor: 'rgba(251, 191, 36, 0.4)',
    elevationLevel: 'निम्नतम (Lowest/Sunken NE)',
    idealStructures: [
      'मूल गर्भगृह (Mool Garbhagriha) एवं वेदी',
      'भूमिगत अमृत जलकुंड (Underground Water Tank)',
      'पवित्र प्रक्षाल गंधोदक शोधन कुंड',
      'ध्यान केंद्र एवं प्रासुक जल भंडार'
    ],
    strictlyProhibited: [
      'शौचालय / बाथरूम (घोर महादोष)',
      'भारी सीढ़ियां या ओवरहेड भारी टंकी',
      'रसोईघर या अग्नि प्रज्वलन',
      'कचरा पात्र या जूते-चप्पल'
    ],
    shastricRule: 'ईशान कोण वास्तु पुरुष का मस्तक है। इसे संपूर्ण मंदिर परिसर में सबसे नीचा, अत्यंत स्वच्छ, हल्का और जलमय रखना अनिवार्य है।',
    icon: '🛕',
    architecturalNote: 'गर्भगृह की नींव में नवरत्न, स्वर्ण-रजत शलाका स्थापित कर पूर्वाभिमुख या उत्तराभिमुख भगवान की दृष्टि संरेखित करें।'
  },
  {
    dir: 'E',
    code: 'E',
    name: 'पूर्व दिशा (East)',
    angle: 90,
    element: 'सौर एवं तेजस ऊर्जा (सूर्य किरणें)',
    deity: 'इंद्र देव / ज्ञान का सूर्योदय',
    structureCategory: 'knowledge',
    highlightColor: 'from-orange-400 to-amber-300 border-orange-400 text-amber-950',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    elevationLevel: 'निम्नतम (Lowest/Sunken NE)',
    idealStructures: [
      'मुख्य मंदिर का सिंहद्वार (Main Mahadwar)',
      'भव्य तोरण द्वार एवं मंगल द्वार',
      'भगवान की पूर्वाभिमुख दृष्टि संरेखण',
      'स्वाध्याय एवं जिनवाणी वाचन कक्ष'
    ],
    strictlyProhibited: [
      'ऊंचे भारी निर्माण जो सूर्यप्रकाश रोकें',
      'गंदे पानी का निकास या सीवर लाइन',
      'दक्षिण की ओर जल का ढलान'
    ],
    shastricRule: 'प्रातःकालीन सूर्य की प्रथम किरणें सीधे गर्भगृह व वेदी पर पड़ें, ऐसा संरेखण मंदिर में सात्विक ऊर्जा का संचार करता है।',
    icon: '⛩️',
    architecturalNote: 'तोरण द्वार को मकराना मार्बल से 16 विद्यादेवियों व अष्टमंगल नक्काशी से सुशोभित करें।'
  },
  {
    dir: 'SE',
    code: 'SE',
    name: 'आग्नेय कोण (South-East)',
    angle: 135,
    element: 'अग्नि तत्व (तेजस व ऊर्जा)',
    deity: 'श्री नाकोड़ा भैरव जी / अग्नि देव',
    structureCategory: 'fire',
    highlightColor: 'from-rose-500 to-red-400 border-rose-500 text-white',
    glowColor: 'rgba(244, 63, 94, 0.4)',
    elevationLevel: 'मध्यम (Moderate SE/NW)',
    idealStructures: [
      'मंदिर पाकशाला / रसोई (Bhojanshala)',
      'श्री नाकोड़ा भैरव जी स्वतंत्र रक्षक वेदी',
      'अखंड दीप प्रज्वलन स्थान व धूप कक्ष',
      'मंदिर विद्युत कक्ष (इलेक्ट्रिक मीटर/जनरेटर)'
    ],
    strictlyProhibited: [
      'भूमिगत पानी का टैंक या बोरवेल (विनाशकारी दोष)',
      'मुख्य तीर्थंकर का गर्भगृह',
      'पूज्य साधु-साध्वी जी का शयन कक्ष'
    ],
    shastricRule: 'अग्नि और जल में घोर शत्रुता है। आग्नेय में पानी होने से आग बुझती है और कलह होता है। यहां केवल अग्नि व भैरव स्थान शुभ है।',
    icon: '🔥',
    architecturalNote: 'रसोई व धूप के धुएं की निकासी हेतु स्वतंत्र चिमनी लगाएं ताकि मुख्य गर्भगृह धूमिल न हो।'
  },
  {
    dir: 'S',
    code: 'S',
    name: 'दक्षिण दिशा (South)',
    angle: 180,
    element: 'पृथ्वी एवं भार तत्व (ठोस मर्यादा)',
    deity: 'यम / धर्म मर्यादा एवं अनुशासन',
    structureCategory: 'heavy',
    highlightColor: 'from-stone-600 to-stone-500 border-stone-600 text-white',
    glowColor: 'rgba(120, 113, 108, 0.4)',
    elevationLevel: 'उच्च (High S/W)',
    idealStructures: [
      'ऊपरी मंजिल हेतु सीढ़ियां (Staircase)',
      'भारी पाषाण परकोटा (Compound Wall)',
      'श्रावक धर्मशाला विश्राम गृह',
      'प्रवचन सभा में व्यासपीठ (उत्तर मुखी)'
    ],
    strictlyProhibited: [
      'मंदिर का मुख्य प्रवेश द्वार (यदि संभव हो)',
      'अंडरग्राउंड वॉटर टैंक या बोरवेल',
      'पवित्र गंधोदक का निकास'
    ],
    shastricRule: 'दक्षिण दिशा को ऊंचा, ठोस और भारी रखा जाना चाहिए ताकि उत्तर से आने वाली सकारात्मक ऊर्जा मंदिर परिसर में ही संचित रहे।',
    icon: '🪜',
    architecturalNote: 'सीढ़ियां सदैव दक्षिणावर्त (Clockwise) दिशा में ऊपर की ओर चढ़ने वाली होनी चाहिए।'
  },
  {
    dir: 'SW',
    code: 'SW',
    name: 'नैऋत्य कोण (South-West)',
    angle: 225,
    element: 'पृथ्वी तत्व (स्थिरता व सर्वोच्च भार)',
    deity: 'नैऋत / शील एवं संयम स्थिरता',
    structureCategory: 'heavy',
    highlightColor: 'from-amber-800 to-amber-700 border-amber-900 text-white',
    glowColor: 'rgba(146, 64, 14, 0.5)',
    elevationLevel: 'उच्चतम (Highest SW)',
    idealStructures: [
      'पूज्य साधु-साध्वी जी उपाश्रय कक्ष',
      'छत पर भारी ओवरहेड वॉटर टैंक (Heavy Tank)',
      'भारी सामान का भंडार गृह (बर्तन/मंच सामग्री)',
      'मंदिर ट्रस्टीज व प्रबंधक मुख्य कार्यालय'
    ],
    strictlyProhibited: [
      'भूमिगत टैंक, कुआं या गड्ढा (महा-अस्थिरता दोष)',
      'मंदिर का मुख्य प्रवेश द्वार',
      'रसोईघर या शौचालय'
    ],
    shastricRule: 'नैऋत्य संपूर्ण परिसर का सबसे ऊंचा और सबसे भारी भाग होना चाहिए। यहां गड्ढा होने से ट्रस्ट में फूट व आर्थिक क्षति होती है।',
    icon: '🧘‍♂️',
    architecturalNote: 'उपाश्रय में संयमियों हेतु अलग शांत गलियारा व शुद्ध लकड़ी के पाटे-बाजोट की व्यवस्था हो।'
  },
  {
    dir: 'W',
    code: 'W',
    name: 'पश्चिम दिशा (West)',
    angle: 270,
    element: 'वरुण एवं वायु ऊर्जा (सामाजिक संवाद)',
    deity: 'वरुण देव / लोक संग्रह',
    structureCategory: 'temple',
    highlightColor: 'from-amber-600 to-amber-500 border-amber-700 text-white',
    glowColor: 'rgba(217, 119, 6, 0.4)',
    elevationLevel: 'उच्च (High S/W)',
    idealStructures: [
      'प्रवचन रंगमंडप एवं नृत्य मंडप',
      'साधर्मी वात्सल्य भोजन डाइनिंग हॉल',
      'अन्न भंडार (राशन स्टोर)',
      'मूल वेदी की ठोस पीठ दीवार'
    ],
    strictlyProhibited: [
      'पूर्व दिशा की अपेक्षा नीचा फर्श',
      'ईशान कोण से अधिक खुलापन छोड़ना'
    ],
    shastricRule: 'पश्चिम दिशा में रंगमंडप व प्रवचन हॉल बनाने से साधर्मिक वात्सल्य व संघ की सामाजिक प्रतिष्ठा में भारी वृद्धि होती है।',
    icon: '🏛️',
    architecturalNote: 'रंगमंडप में 16 या 32 विद्यादेवियों के नक्काशीदार स्तंभों की अष्टकोणीय रचना शास्त्र सम्मत है।'
  },
  {
    dir: 'NW',
    code: 'NW',
    name: 'वायव्य कोण (North-West)',
    angle: 315,
    element: 'वायु तत्व (गतिशीलता एवं रक्षा)',
    deity: 'श्री घंटाकर्ण महावीर / वीर मणिभद्र बाबा',
    structureCategory: 'protector',
    highlightColor: 'from-sky-500 to-blue-400 border-sky-500 text-white',
    glowColor: 'rgba(14, 165, 233, 0.4)',
    elevationLevel: 'मध्यम (Moderate SE/NW)',
    idealStructures: [
      'श्री घंटाकर्ण महावीर देव स्वतंत्र उप-वेदी',
      'वीर मणिभद्र बाबा रक्षक वेदी / मंडप',
      'मंदिर परिसर की बाह्य सीमा पर शौचालय ब्लॉक',
      'अतिथि कक्ष एवं सूखा अनाज भंडार (राशन)'
    ],
    strictlyProhibited: [
      'मूल तीर्थंकर परमात्मा का मुख्य गर्भगृह',
      'भारी स्थायी तिजोरी या खजाना (पैसा टिकता नहीं)'
    ],
    shastricRule: 'वायव्य वायु का स्थान है। यहां घंटाकर्ण देव व मणिभद्र वीर की स्थापना से अमंगल वायु तरंगों व नकारात्मक शक्तियों का नाश होता है।',
    icon: '🛡️',
    architecturalNote: 'शौचालय मंदिर के मुख्य शिखर से न्यूनतम 35 से 40 फीट दूर बाह्य परकोटे पर ही बनाएं।'
  },
  {
    dir: 'N',
    code: 'N',
    name: 'उत्तर दिशा (North)',
    angle: 0,
    element: 'जल एवं कुबेर तत्व (ज्ञान व समृद्धि)',
    deity: 'श्री दादागुरुदेव / कुबेर देव',
    structureCategory: 'knowledge',
    highlightColor: 'from-emerald-600 to-teal-500 border-emerald-600 text-white',
    glowColor: 'rgba(5, 150, 105, 0.4)',
    elevationLevel: 'निम्नतम (Lowest/Sunken NE)',
    idealStructures: [
      'ज्ञान भंडार / आगम ग्रंथालय (Library)',
      'श्री दादागुरुदेव वेदी (दादावाड़ी विन्यास)',
      'मंदिर कार्यालय एवं दान पेटी / रसीद काउंटर',
      'उत्तर तोरण द्वार (भद्र द्वार)'
    ],
    strictlyProhibited: [
      'शौचालय या सीवर लाइन',
      'भारी सीढ़ियां या कूड़ा-कचरा',
      'अत्यधिक ऊंची ठोस दीवारें जो उत्तर रोकें'
    ],
    shastricRule: 'उत्तर दिशा बुध एवं कुबेर का पद है। यहां ज्ञान भंडार व दान पेटी होने से संघ में विद्या, धर्म प्रभावना व लक्ष्मी की अखंड वृद्धि होती है।',
    icon: '📜',
    architecturalNote: 'आगम ग्रंथों को रेशमी वेष्ठन में बांधकर कांच की सील अलमारियों में उत्तर दिशा में रखें।'
  },
  {
    dir: 'Center',
    code: 'Center',
    name: 'ब्रह्मस्थान (Brahmasthan / Center)',
    angle: -1,
    element: 'आकाश एवं ब्रह्म ऊर्जा (परिसर का हृदय)',
    deity: 'वीतराग परमात्मा की सर्वव्यापी ऊर्जा',
    structureCategory: 'open',
    highlightColor: 'from-amber-200 to-yellow-100 border-amber-400 text-amber-950',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    elevationLevel: 'शून्य भार (Open Center)',
    idealStructures: [
      'पूर्णतः खुला रंगमंडप चौक (Open Sky Courtyard)',
      'नृत्य मंडप एवं प्रदक्षिणा संगम स्थल',
      'आकाश तत्व का निर्बाध ऊर्जा केंद्र',
      'स्वस्तिक एवं अष्टमंगल मार्बल इनले'
    ],
    strictlyProhibited: [
      'कोई भी खंभा (Column) या भारी बीम',
      'शौचालय, सीवर, बोरवेल या गड्ढा',
      'सीढ़ियां या भारी सामान का ढेर'
    ],
    shastricRule: 'ब्रह्मस्थान मंदिर की नाभि है। इसे सर्वदा स्तंभ-विहीन, खुला, स्वच्छ व प्रकाशयुक्त रखना चाहिए ताकि दिव्य ऊर्जा शिखर से भू-तल पर प्रसारित हो।',
    icon: '卐',
    architecturalNote: 'छत पर स्फटिक झूमर या नक्काशीदार अष्टदल कमल लगाएं जिससे ऊर्जा अधोमुखी न दबे।'
  }
];

export const MandirCompassVisualizer: React.FC = () => {
  const [activeSubMode, setActiveSubMode] = useState<'compass' | 'movement'>('compass');
  const [selectedSector, setSelectedSector] = useState<VastuSector>(VASTU_SECTORS[0]); // Default NE (Garbhagriha)
  const [compassTilt, setCompassTilt] = useState<number>(38); // 3D tilt angle in degrees (0 to 60)
  const [compassRotation, setCompassRotation] = useState<number>(0); // Rotation in degrees (0 to 360)
  const [is3DMode, setIs3DMode] = useState<boolean>(true);
  const [activeFilterCategory, setActiveFilterCategory] = useState<string>('all');

  // Rotate compass by 45 degrees
  const handleRotateCompass = (direction: 'cw' | 'ccw') => {
    setCompassRotation(prev => {
      const step = direction === 'cw' ? 45 : -45;
      return (prev + step + 360) % 360;
    });
  };

  // Filtered sectors based on user tag filter
  const filteredSectors = VASTU_SECTORS.filter(sec => {
    if (activeFilterCategory === 'all') return true;
    if (activeFilterCategory === 'temple' && (sec.dir === 'NE' || sec.dir === 'E' || sec.dir === 'Center')) return true;
    if (activeFilterCategory === 'fire' && (sec.dir === 'SE')) return true;
    if (activeFilterCategory === 'heavy' && (sec.dir === 'SW' || sec.dir === 'S')) return true;
    if (activeFilterCategory === 'protector' && (sec.dir === 'NW' || sec.dir === 'SE')) return true;
    if (activeFilterCategory === 'knowledge' && (sec.dir === 'N' || sec.dir === 'NE')) return true;
    return false;
  });

  return (
    <div className="space-y-6">
      {/* Visualizer Mode Toggle */}
      <div className="bg-white rounded-2xl border border-amber-200 p-2 shadow-xs flex items-center justify-center gap-2 max-w-lg mx-auto">
        <button
          onClick={() => setActiveSubMode('compass')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeSubMode === 'compass'
              ? 'bg-amber-800 text-white shadow-sm ring-2 ring-amber-300'
              : 'text-stone-700 hover:bg-amber-50 hover:text-amber-900'
          }`}
        >
          <Compass className="w-4 h-4 text-amber-300" />
          <span>3D मंदिर वास्तु कंपास (Mandir Compass)</span>
        </button>

        <button
          onClick={() => setActiveSubMode('movement')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeSubMode === 'movement'
              ? 'bg-amber-800 text-white shadow-sm ring-2 ring-amber-300'
              : 'text-stone-700 hover:bg-amber-50 hover:text-amber-900'
          }`}
        >
          <Footprints className="w-4 h-4 text-amber-300" />
          <span>साधु-साध्वी गमनागमन प्रवाह</span>
        </button>
      </div>

      {activeSubMode === 'movement' ? (
        <SadhuMovementFlow />
      ) : (
        <div className="bg-white rounded-3xl border-2 border-amber-300 p-4 sm:p-7 lg:p-9 shadow-md space-y-8">
          {/* Header Title */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-amber-200 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
                <Compass className="w-4 h-4 text-amber-700" />
                <span>इंटरएक्टिव 3D अष्टदिशा चक्र • जिनालय संरचना एवं देव स्थान</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-jain text-stone-900">
                3D मंदिर वास्तु कंपास (3D Mandir Vastu Compass)
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-3xl">
                जिनालय की आठों दिशाओं में कौन सा देव अथवा मंदिर संरचना स्थापित होनी चाहिए (जैसे ईशान में गर्भगृह, आग्नेय में रसोई/भैरव, नैऋत्य में उपाश्रय आदि), इसे 3D दृष्टिकोण से घुमाकर व देखकर समझें।
              </p>
            </div>

            {/* View Mode Toggle Controls */}
            <div className="flex items-center gap-2 flex-wrap self-start lg:self-auto shrink-0">
              <button
                onClick={() => setIs3DMode(!is3DMode)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer border transition-all ${
                  is3DMode
                    ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                    : 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                }`}
                title="3D पर्सपेक्टिव दृश्य चालू या बंद करें"
              >
                <Layers className="w-4 h-4 text-amber-300" />
                <span>{is3DMode ? '3D पर्सपेक्टिव सक्रिय' : '2D समतल दृश्य'}</span>
              </button>

              <button
                onClick={() => handleRotateCompass('ccw')}
                className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 cursor-pointer"
                title="बाईं ओर 45° घुमाएं"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleRotateCompass('cw')}
                className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 cursor-pointer"
                title="दाईं ओर 45° घुमाएं"
              >
                <RotateCw className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCompassRotation(0);
                  setCompassTilt(38);
                }}
                className="px-3 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-600 text-xs font-bold border border-stone-300 cursor-pointer"
                title="मूल स्थिति पर लाएं"
              >
                रीसेट
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
            <span className="font-bold text-stone-500 shrink-0">त्वरित फ़िल्टर:</span>
            {[
              { id: 'all', label: 'सभी 8 दिशाएं (All 8 Directions)' },
              { id: 'temple', label: '🛕 गर्भगृह व वेदी (Garbhagriha - NE/E)' },
              { id: 'fire', label: '🔥 रसोई व दीप (Kitchen - SE)' },
              { id: 'heavy', label: '🧘‍♂️ उपाश्रय व सीढ़ियां (SW/S)' },
              { id: 'protector', label: '🛡️ रक्षक देव (Bhairav & Ghantakarna)' },
              { id: 'knowledge', label: '📜 ज्ञान भंडार व दादागुरुदेव (N/NE)' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilterCategory(tab.id)}
                className={`px-3 py-1.5 rounded-full font-semibold whitespace-nowrap cursor-pointer transition-all ${
                  activeFilterCategory === tab.id
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-amber-50 text-stone-700 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Main Visualizer Area: 3D Compass Stage + Live Inspection Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: 3D-Like Rotating Mandir Vastu Compass Stage */}
            <div className="lg:col-span-7 flex flex-col items-center">
              
              {/* 3D Tilt & Angle Adjuster Sliders (Compact) */}
              <div className="w-full flex items-center justify-between gap-4 px-3 py-2 mb-4 bg-amber-50/60 rounded-2xl border border-amber-200 text-xs">
                <div className="flex items-center gap-2 flex-1">
                  <Sliders className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="font-bold text-stone-700 whitespace-nowrap">3D झुकाव (Tilt):</span>
                  <input
                    type="range"
                    min="0"
                    max="55"
                    value={compassTilt}
                    onChange={(e) => {
                      setCompassTilt(Number(e.target.value));
                      if (!is3DMode) setIs3DMode(true);
                    }}
                    className="w-full accent-amber-800 cursor-pointer"
                  />
                  <span className="font-bold text-amber-900 w-8 text-right">{compassTilt}°</span>
                </div>

                <div className="flex items-center gap-2 flex-1">
                  <RotateCw className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="font-bold text-stone-700 whitespace-nowrap">दिशा घूर्णन:</span>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    step="5"
                    value={compassRotation}
                    onChange={(e) => setCompassRotation(Number(e.target.value))}
                    className="w-full accent-amber-800 cursor-pointer"
                  />
                  <span className="font-bold text-amber-900 w-10 text-right">{compassRotation}°</span>
                </div>
              </div>

              {/* 3D Compass Perspective Viewport */}
              <div 
                className="w-full max-w-[500px] aspect-square relative flex items-center justify-center p-4 select-none"
                style={{ perspective: '1100px' }}
              >
                {/* 3D Rotating Dial Chassis */}
                <div
                  className="w-full h-full rounded-full relative transition-transform duration-300 ease-out"
                  style={{
                    transform: is3DMode
                      ? `rotateX(${compassTilt}deg) rotateZ(${compassRotation}deg)`
                      : `rotateZ(${compassRotation}deg)`,
                    transformStyle: 'preserve-3d',
                    boxShadow: is3DMode 
                      ? '0 30px 60px -15px rgba(120, 53, 15, 0.35), 0 10px 20px -5px rgba(0, 0, 0, 0.15)' 
                      : '0 10px 30px rgba(180, 83, 9, 0.15)'
                  }}
                >
                  {/* Outer Brass / Gold Embossed Rim */}
                  <div className="absolute inset-0 rounded-full border-8 border-amber-600 bg-gradient-to-b from-amber-100 via-amber-50 to-stone-200 shadow-2xl overflow-hidden ring-4 ring-amber-400/80">
                    
                    {/* Concentric Sacred Geometrical Circles */}
                    <div className="absolute inset-4 rounded-full border-2 border-dashed border-amber-500/50" />
                    <div className="absolute inset-12 rounded-full border border-amber-400/40 bg-radial from-white via-amber-50/50 to-amber-100/30" />
                    <div className="absolute inset-24 rounded-full border-2 border-amber-500/40" />

                    {/* Degree Markings on Rim */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                      <div
                        key={deg}
                        className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-3 bg-amber-700 origin-bottom"
                        style={{
                          transform: `rotate(${deg}deg) translateY(6px)`
                        }}
                      />
                    ))}
                  </div>

                  {/* 8 Radial Directional Sectors (Interactive 3D Blocks) */}
                  {VASTU_SECTORS.filter(s => s.dir !== 'Center').map((sector) => {
                    const isSelected = selectedSector.dir === sector.dir;
                    // Calculate position on circumference (radius ~38%)
                    const rad = ((sector.angle - 90) * Math.PI) / 180;
                    const radiusPercent = 37;
                    const left = 50 + radiusPercent * Math.cos(rad);
                    const top = 50 + radiusPercent * Math.sin(rad);

                    return (
                      <button
                        key={sector.dir}
                        onClick={() => setSelectedSector(sector)}
                        className={`absolute w-20 h-20 sm:w-24 sm:h-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 flex flex-col items-center justify-center p-1.5 transition-all duration-200 cursor-pointer shadow-lg z-20 group ${
                          isSelected
                            ? 'bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 text-white border-amber-300 ring-4 ring-amber-400/70 scale-110'
                            : 'bg-white/95 hover:bg-amber-50 text-stone-900 border-amber-300 hover:scale-105'
                        }`}
                        style={{
                          left: `${left}%`,
                          top: `${top}%`,
                          transform: is3DMode
                            ? `translate(-50%, -50%) translateZ(${isSelected ? 35 : 12}px) rotateZ(${-compassRotation}deg)`
                            : `translate(-50%, -50%) rotateZ(${-compassRotation}deg)`
                        }}
                      >
                        <span className="text-xl sm:text-2xl drop-shadow-xs mb-0.5">
                          {sector.icon}
                        </span>
                        <span className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-tight leading-tight text-center ${
                          isSelected ? 'text-amber-200' : 'text-amber-950'
                        }`}>
                          {sector.code} ({sector.dir === 'NE' ? 'ईशान' : sector.dir === 'E' ? 'पूर्व' : sector.dir === 'SE' ? 'आग्नेय' : sector.dir === 'S' ? 'दक्षिण' : sector.dir === 'SW' ? 'नैऋत्य' : sector.dir === 'W' ? 'पश्चिम' : sector.dir === 'NW' ? 'वायव्य' : 'उत्तर'})
                        </span>
                        <span className={`text-[9px] line-clamp-1 font-semibold mt-0.5 ${
                          isSelected ? 'text-white' : 'text-stone-600'
                        }`}>
                          {sector.dir === 'NE' ? 'गर्भगृह' : sector.dir === 'SE' ? 'रसोई/भैरव' : sector.dir === 'SW' ? 'उपाश्रय' : sector.dir === 'NW' ? 'घंटाकर्ण' : sector.dir === 'E' ? 'सिंहद्वार' : sector.dir === 'N' ? 'ज्ञान भंडार' : sector.dir === 'W' ? 'रंगमंडप' : 'सीढ़ियां'}
                        </span>

                        {/* Visual Elevation Badge */}
                        <div className={`absolute -bottom-1.5 px-1.5 py-0.2 rounded-full text-[8px] font-bold ${
                          sector.dir === 'NE' 
                            ? 'bg-emerald-600 text-white' 
                            : sector.dir === 'SW' 
                            ? 'bg-amber-900 text-white' 
                            : 'bg-stone-200 text-stone-800'
                        }`}>
                          {sector.dir === 'NE' ? 'नीचा' : sector.dir === 'SW' ? 'सर्वोच्च' : sector.code}
                        </div>
                      </button>
                    );
                  })}

                  {/* Center Hub: Brahmasthan 3D Golden Altar */}
                  {(() => {
                    const centerSector = VASTU_SECTORS.find(s => s.dir === 'Center')!;
                    const isSelected = selectedSector.dir === 'Center';

                    return (
                      <button
                        onClick={() => setSelectedSector(centerSector)}
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 flex flex-col items-center justify-center p-2 transition-all cursor-pointer shadow-xl z-30 ${
                          isSelected
                            ? 'bg-gradient-to-br from-amber-600 via-amber-800 to-amber-950 text-white border-amber-300 ring-4 ring-amber-400 scale-110'
                            : 'bg-gradient-to-br from-amber-100 via-white to-amber-200 text-amber-950 border-amber-500 hover:scale-105'
                        }`}
                        style={{
                          transform: is3DMode
                            ? `translate(-50%, -50%) translateZ(${isSelected ? 40 : 15}px) rotateZ(${-compassRotation}deg)`
                            : `translate(-50%, -50%) rotateZ(${-compassRotation}deg)`
                        }}
                      >
                        <span className="text-2xl sm:text-3xl font-serif-jain font-bold text-amber-600">卐</span>
                        <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-tight">ब्रह्मस्थान</span>
                        <span className="text-[9px] font-semibold opacity-90">खुला मंडप</span>
                      </button>
                    );
                  })()}

                  {/* 3D Magnetic Compass Needle Pointer */}
                  <div
                    className="absolute inset-0 pointer-events-none flex items-center justify-center z-10"
                    style={{
                      transform: is3DMode ? 'translateZ(25px)' : 'none'
                    }}
                  >
                    {/* North-Pointing Red Tip */}
                    <div className="absolute top-7 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[24px] border-b-red-600 drop-shadow-md" />
                      <span className="text-[10px] font-black text-red-600 bg-white/90 px-1 rounded shadow-xs mt-0.5">N</span>
                    </div>

                    {/* South-Pointing Silver Tip */}
                    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <span className="text-[10px] font-black text-stone-700 bg-white/90 px-1 rounded shadow-xs mb-0.5">S</span>
                      <div className="w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[24px] border-t-stone-600 drop-shadow-md" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 8-Direction Quick-Snap Buttons */}
              <div className="w-full mt-4 flex items-center justify-center gap-1.5 flex-wrap text-xs">
                <span className="text-stone-500 font-bold text-[11px] mr-1">त्वरित स्नैप:</span>
                {VASTU_SECTORS.map((s) => (
                  <button
                    key={s.dir}
                    onClick={() => {
                      setSelectedSector(s);
                      if (s.angle >= 0) {
                        setCompassRotation(360 - s.angle);
                      }
                    }}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      selectedSector.dir === s.dir
                        ? 'bg-amber-800 text-white shadow-xs'
                        : 'bg-stone-100 hover:bg-amber-100 text-stone-700 border border-stone-300'
                    }`}
                  >
                    {s.code}
                  </button>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Live Direction Structure Inspector Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-amber-50/90 via-white to-amber-100/50 rounded-3xl border-2 border-amber-300 p-5 sm:p-6 shadow-md space-y-5">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl p-2 rounded-2xl bg-amber-100 border border-amber-300">
                    {selectedSector.icon}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                      चयनित दिशा विन्यास ({selectedSector.code})
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif-jain text-stone-900">
                      {selectedSector.name}
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-amber-300 text-amber-900 shadow-2xs">
                    {selectedSector.elevationLevel}
                  </span>
                </div>
              </div>

              {/* Element & Deity Box */}
              <div className="bg-amber-100/70 p-3.5 rounded-2xl border border-amber-200/80 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-600 font-semibold">तत्व (Element):</span>
                  <strong className="text-amber-950 font-bold">{selectedSector.element}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-600 font-semibold">अधिष्ठाता देव / शक्ति:</span>
                  <strong className="text-amber-950 font-bold">{selectedSector.deity}</strong>
                </div>
              </div>

              {/* 1. What SHOULD BE Placed Here (Ideal Structures) */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>यहाँ क्या होना चाहिए (आदर्श स्थापना):</span>
                </div>
                <div className="bg-emerald-50/90 rounded-2xl p-3 border border-emerald-200 space-y-1.5">
                  {selectedSector.idealStructures.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-medium text-emerald-950">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. What is STRICTLY PROHIBITED (Strict Donts) */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900 uppercase tracking-wider">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>यहाँ क्या कदापि न बनाएं (सख्त वर्जित):</span>
                </div>
                <div className="bg-rose-50/90 rounded-2xl p-3 border border-rose-200 space-y-1.5">
                  {selectedSector.strictlyProhibited.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-medium text-rose-950">
                      <span className="text-rose-700 font-bold">✗</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Agamic Shastric Rule */}
              <div className="p-3 bg-white rounded-2xl border border-stone-200 text-xs text-stone-700 space-y-1">
                <strong className="text-amber-950 block text-[11px] uppercase">शास्त्रोक्त वास्तुमण्डन नियम:</strong>
                <p className="italic leading-relaxed">{selectedSector.shastricRule}</p>
              </div>

              {/* 4. Architect Guidance */}
              <div className="p-3 bg-amber-50/50 rounded-2xl border border-amber-200/70 text-xs text-stone-700 space-y-1">
                <strong className="text-amber-950 block text-[11px] uppercase">शिल्पकार व ट्रस्टीज हेतु निर्देश:</strong>
                <p className="leading-relaxed">{selectedSector.architecturalNote}</p>
              </div>

              {/* Direct Query to Sanjeev Sipani */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%203D%20कंपास%20में%20'${encodeURIComponent(
                    selectedSector.name
                  )}'%20के%20वेदी%20व%20संरचना%20विन्यास%20के%20बारे%20में%20मार्गदर्शन%20चाहिए।`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>इस दिशा का नक्शा दिखाकर विशेषज्ञ राय लें</span>
                </a>
              </div>
            </div>

          </div>

          {/* Quick 5 Universal Golden Rules Footer Strip */}
          <div className="bg-gradient-to-r from-amber-100/90 via-amber-50 to-amber-100/90 p-4 sm:p-5 rounded-3xl border-2 border-amber-300">
            <h4 className="font-serif-jain font-bold text-amber-950 text-sm sm:text-base mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-800" />
              <span>जिनालय वास्तु के ५ शाश्वत संरेखण सूत्र (Universal Rules)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs text-stone-700">
              <div className="bg-white p-2.5 rounded-xl border border-amber-200">
                <strong className="text-amber-900 block mb-0.5">१. ईशान (NE):</strong>
                गर्भगृह, अमृत जलकुंड व ज्ञान। सदैव हल्का, नीचा व खुला।
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-amber-200">
                <strong className="text-amber-900 block mb-0.5">२. आग्नेय (SE):</strong>
                नाकोड़ा भैरव वेदी, दीप स्थान व रसोई। जल कदापि न रखें।
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-amber-200">
                <strong className="text-amber-900 block mb-0.5">३. नैऋत्य (SW):</strong>
                साधु उपाश्रय, ओवरहेड भारी टंकी। परिसर का सर्वोच्च भाग।
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-amber-200">
                <strong className="text-amber-900 block mb-0.5">४. वायव्य (NW):</strong>
                घंटाकर्ण महावीर, मणिभद्र वीर व बाह्य दूरस्थ शौचालय।
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-amber-200">
                <strong className="text-amber-900 block mb-0.5">५. ब्रह्मस्थान:</strong>
                परिसर का मध्य खुला चौक, शून्य भार, स्तंभ-विहीन नाभि कमल।
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
