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
  Filter,
  Layers,
  Compass,
  Search,
  Phone,
  Flame,
  Droplets,
  Shield,
  ArrowRight
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

interface DirectionRemedy {
  id: string;
  direction: string;
  element: string;
  commonProblems: string[];
  remedyTitle: string;
  stepByStepRemedy: string[];
  materialsRequired: string[];
  mantra: string;
  colorTheme: string;
}

export const VastuDoshChecklist: React.FC = () => {
  const [activeTabMode, setActiveTabMode] = useState<'checklist' | 'remedies' | 'finder'>('remedies');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [checkedDoshas, setCheckedDoshas] = useState<Record<string, boolean>>({});
  const [selectedFinderIssue, setSelectedFinderIssue] = useState<string>('ishan-toilet');

  const VASTU_DOSHAS: VastuDoshItem[] = [
    {
      id: 'dosh-ishan-toilet',
      name: 'ईशान कोण (North-East) में शौचालय अथवा सीवर होना',
      location: 'ईशान कोण (NE)',
      severity: 'घोर महादोष',
      negativeImpact: 'मंदिर का आध्यात्मिक प्रभाव नष्ट होना, संघ में फूट, साधु-संतों का प्रवास न रुकना, भारी विघ्न।',
      shastricReason: 'ईशान वास्तु पुरुष का मस्तक और देवत्व का केंद्र है। यहां मलमूत्र विसर्जन साक्षात धर्म की आशातना है।',
      remedyWithoutDemolition: 'शौचालय का उपयोग तुरंत बंद करें। वहां तांबे का स्वस्तिक, 9 पिरामिड, 1 फीट चांदी की शलाका स्थापित करें और वहां शुद्ध जल का फव्वारा या तुलसी/पुष्प वाटिका बनाएं।'
    },
    {
      id: 'dosh-nairitya-underground',
      name: 'नैऋत्य कोण (South-West) में भूमिगत जलकुंड, कुआं या बोरवेल',
      location: 'नैऋत्य कोण (SW)',
      severity: 'घोर महादोष',
      negativeImpact: 'मंदिर ट्रस्ट में भारी वित्तीय अस्थिरता, प्रमुख दानदाताओं की आर्थिक क्षति, अचानक कलह व मुकदमेबाजी।',
      shastricReason: 'नैऋत्य पृथ्वी तत्व का भारी व ऊंचा क्षेत्र है। यहां गड्ढा होने से स्थिरता का संपूर्ण नाश होता है।',
      remedyWithoutDemolition: 'उस बोरवेल/टैंक में सीसे (Lead) की 9 धातु पट्टियां दबाएं। नैऋत्य में 9 फीट ऊंचा पीतल का ध्वज, भारी पाषाण अथवा छत पर भारी ओवरहेड टैंक रखकर भार संतुलन करें।'
    },
    {
      id: 'dosh-agneya-water',
      name: 'आग्नेय कोण (South-East) में भूमिगत पानी का संचय या बोरवेल',
      location: 'आग्नेय कोण (SE)',
      severity: 'घोर महादोष',
      negativeImpact: 'आकस्मिक अग्नि दुर्घटनाएं, मंदिर पदाधिकारियों में उग्र विवाद, रोग-व्याधि एवं धन हानि।',
      shastricReason: 'अग्नि और जल का प्रत्यक्ष शत्रु भाव है। आग्नेय में जल होने से अग्नि बुझती है और अनिष्ट होता है।',
      remedyWithoutDemolition: 'आग्नेय में बोरवेल को ढकें, उसके पास अखंड तांबे का दीपक अथवा विद्युत कक्ष का भार बढ़ाएं। लाल पत्थर, 3 तांबे के पिरामिड व श्री नाकोड़ा भैरव यंत्र लगाएं।'
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
      remedyWithoutDemolition: 'द्वार की चौखट के ऊपर उत्तल दर्पण (Convex Mirror/Reflector) लगाएं ताकि वेध परावर्तित हो। दोनों ओर मंगल कलश, अष्टमंगल पट्टिका व तांबे का सूर्य लगाएं।'
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
      remedyWithoutDemolition: 'सीढ़ियों के नीचे का भाग पूरी तरह खुला व प्रकाशयुक्त रखें। वहां कभी कबाड़ न रखें। सीढ़ियों के प्रथम पायदान पर चांदी का तार व तांबे का स्वास्तिक स्थापित करें।'
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
      remedyWithoutDemolition: 'प्राकृतिक वेंटिलेशन हेतु निकास जाली लगाएं। नित्य भीमसेनी कपूर व दशांग धूप खेवे। सीलन रोधी पाषाण लेप लगाएं।'
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

  // 8-Direction Zero-Demolition Remedies Data
  const DIRECTION_REMEDIES: DirectionRemedy[] = [
    {
      id: 'ishan-remedies',
      direction: 'ईशान कोण (North-East) दोष निवारण',
      element: 'जल एवं देवत्व तत्व (वास्तु पुरुष का मस्तक)',
      commonProblems: ['शौचालय होना', 'भारी सीढ़ियां', 'कचरा या स्टोर', 'कटाव या कम ऊंचाई'],
      remedyTitle: 'अमृत पद ऊर्जा संवर्धन एवं जल शुद्धि विधान',
      stepByStepRemedy: [
        'ईशान कोण में फर्श के नीचे अथवा दहलीज पर १ फीट शुद्ध चांदी की तार (Silver Wire) और तांबे का स्वस्तिक स्थापित करें।',
        'यदि सीढ़ी या भारी निर्माण है, तो उसके नीचे कभी अंधेरा न रखें; २४ घंटे ० वाट का हल्का पीला/श्वेत बल्ब जलाएं।',
        'ईशान में तांबे अथवा कांसे के पात्र में नित्य शुद्ध जल भरकर उसमें गंगाजल/गंधोदक डालकर रखें और नित्य बदलें।',
        'दीवार पर सिद्ध नवकार महामंत्र की संगमरमर पट्टिका अथवा स्फटिक श्रीयंत्र/पिरामिड स्थापित करें।'
      ],
      materialsRequired: ['शुद्ध चांदी की तार', 'तांबे का स्वास्तिक', 'स्फटिक पिरामिड', 'तांबे का जल पात्र'],
      mantra: '॥ ॐ ह्रीं श्रीं अर्हं णमो सिद्धाणं ईशानाधिपतये नमः ॥',
      colorTheme: 'from-amber-50 to-yellow-50 border-amber-300'
    },
    {
      id: 'agneya-remedies',
      direction: 'आग्नेय कोण (South-East) दोष निवारण',
      element: 'अग्नि तत्व (ऊर्जा व तेज)',
      commonProblems: ['भूमिगत पानी का टैंक', 'बोरवेल', 'मुख्य प्रवेश द्वार', 'कट होना'],
      remedyTitle: 'अग्नि संतुलन एवं श्री नाकोड़ा भैरव कवच',
      stepByStepRemedy: [
        'यदि आग्नेय में बोरवेल या जलकुंड है, तो उस स्थान के चारों ओर तांबे के ३ पिरामिड त्रिकोण रूप में स्थापित करें।',
        'आग्नेय कोण में अखंड तिल के तेल का दीपक अथवा लाल रंग का नाइट बल्ब २४ घंटे प्रज्वलित रखें।',
        'श्री नाकोड़ा भैरव जी का प्राण-प्रतिष्ठित तांबे का यंत्र आग्नेय की पूर्व दीवार पर स्थापित करें।',
        'भवन के इस कोने पर लाल जैस्पर रत्न अथवा मूंगा रत्न की पट्टिका फर्श की स्कर्टिंग में लगाएं।'
      ],
      materialsRequired: ['तांबे के पिरामिड', 'श्री नाकोड़ा भैरव यंत्र', 'अखंड तांबे का दीपक', 'लाल जैस्पर'],
      mantra: '॥ ॐ ह्रीं श्रीं भैरवाय नमः अग्नि दोषं निवारय निवारय स्वाहा ॥',
      colorTheme: 'from-rose-50 to-orange-50 border-rose-300'
    },
    {
      id: 'nairitya-remedies',
      direction: 'नैऋत्य कोण (South-West) दोष निवारण',
      element: 'पृथ्वी तत्व (स्थिरता व भार)',
      commonProblems: ['गड्ढा या कुआं', 'ढलान नैऋत्य में होना', 'मुख्य द्वार', 'खिड़कियों की अधिकता'],
      remedyTitle: 'भू-भार संतुलन एवं सीसा (Lead) धातु स्थापन',
      stepByStepRemedy: [
        'नैऋत्य में गड्ढा या बोरवेल होने पर उसमें सीसे (Lead Metal) की ९ शलाकाएं या सीसा पिरामिड स्थापित करें।',
        'नैऋत्य कोने की छत पर भारी पीला पाषाण, भारी वजन या कंक्रीट का ब्लॉक रखकर इस हिस्से को परिसर का सबसे ऊंचा व भारी बनाएं।',
        'खिड़कियां हों तो उन पर मोटे पीले पर्दे लगाएं और उन्हें प्रायः बंद रखें।',
        'कोने में पीतल का ठोस हाथी अथवा राहु यंत्र स्थापित कर पृथ्वी तत्व को सुदृढ़ करें।'
      ],
      materialsRequired: ['सीसा (Lead) धातु शलाकाएं', 'पीला भारी पाषाण', 'पीतल का हाथी', 'राहु शांति यंत्र'],
      mantra: '॥ ॐ ह्रीं श्रीं क्लीं नैऋत्याधिपतये नमः स्थैर्यं कुरु कुरु स्वाहा ॥',
      colorTheme: 'from-amber-100/50 to-stone-100 border-amber-400'
    },
    {
      id: 'vayavya-remedies',
      direction: 'वायव्य कोण (North-West) दोष निवारण',
      element: 'वायु तत्व (गतिशीलता एवं रक्षा)',
      commonProblems: ['रसोईघर आ जाना', 'विस्तार या कटाव', 'बंद वेंटिलेशन', 'गंदगी'],
      remedyTitle: 'श्री घंटाकर्ण महावीर रक्षा कवच एवं पवन संतुलन',
      stepByStepRemedy: [
        'वायव्य कोण में ५ छड़ों वाली शुद्ध धातु की पवन घंटी (Wind Chime) लगाएं, जिसकी मधुर ध्वनि वायु तत्व को शांत करे।',
        'वायव्य की दीवार पर "श्री घंटाकर्ण महावीर यंत्र" अथवा "वीर मणिभद्र यंत्र" स्थापित करें।',
        'यदि यहां कटाव (Cut) है, तो दीवार पर एक बड़ा दर्पण (Mirror) लगाएं ताकि दृष्टिगत विस्तार हो सके।',
        'सफेद संगमरमर अथवा दक्षिणावर्ती शंख में चावल भरकर इस कोने में स्थापित करें।'
      ],
      materialsRequired: ['धातु पवन घंटी (Wind Chime)', 'श्री घंटाकर्ण यंत्र', 'सफेद शंख', 'दर्पण'],
      mantra: '॥ ॐ ह्रीं श्रीं क्लीं ब्लूं घंटाकर्ण महावीर नमः पवन दोषं शमय शमय ॥',
      colorTheme: 'from-sky-50 to-stone-50 border-sky-300'
    },
    {
      id: 'brahmasthan-remedies',
      direction: 'ब्रह्मस्थान (Center) दोष निवारण',
      element: 'आकाश एवं नाभि तत्व (परिसर का हृदय)',
      commonProblems: ['भारी खंभा या बीम', 'शौचालय या सीवर', 'बोरवेल या गड्ढा', 'दीवार होना'],
      remedyTitle: 'आकाश तत्व शुद्धि एवं अष्टधातु घंटा नाद',
      stepByStepRemedy: [
        'ब्रह्मस्थान के चारों ओर फर्श में तांबे की पतली पत्ती (Copper Strip) का चौकोर घेरा बनाकर भूमिगत ऊर्जा को लॉक करें।',
        'छत के केंद्र में अष्टधातु का पवित्र घंटा अथवा स्फटिक का झूमर लगाएं ताकि अधोमुखी भार संतुलित हो।',
        'ब्रह्मस्थान में नित्य सामूहिक नवकार महामंत्र व उवसग्गहरं स्तोत्र का जाप करें।',
        'वहां कभी भारी सामान, कबाड़ या कूड़ेदान न रखें; इसे पूर्णतः प्रकाशमय व स्वच्छ रखें।'
      ],
      materialsRequired: ['तांबे की पत्ती (Copper Strip)', 'अष्टधातु घंटा', 'क्रिस्टल झूमर', 'सुगंधित धूप'],
      mantra: '॥ ॐ नमो अरिहंताणं णमो सिद्धाणं णमो आयरियाणं णमो उवज्झायाणं णमो लोए सव्वसाहूणं ॥',
      colorTheme: 'from-purple-50 to-amber-50 border-purple-300'
    },
    {
      id: 'dwarvedh-remedies',
      direction: 'द्वारवेध (Dwarvedh / Entry Obstacle) निवारण',
      element: 'प्राण ऊर्जा प्रवाह (Energy Entry)',
      commonProblems: ['सामने खंभा होना', 'पेड़ या ट्रांसफार्मर', 'सामने नुकीला कोना', 'सीधा मार्ग वेध (T-Point)'],
      remedyTitle: 'उत्तल दर्पण परावर्तन एवं तोरण रक्षा विधान',
      stepByStepRemedy: [
        'मुख्य द्वार के ठीक ऊपर बाहर की ओर एक उत्तल दर्पण (Convex Mirror) लगाएं, जो सामने के खंभे/वेध की नकारात्मक छाया को वापस मोड़ दे।',
        'द्वार की चौखट पर अष्टमंगल तांबे की पट्टिका अथवा तांबे का सूर्य यंत्र स्थापित करें।',
        'द्वार के दोनों ओर अशोक या तुलसी के पवित्र गमले रखें जो नकारात्मक ऊर्जा को फिल्टर करें।',
        'प्रवेश द्वार की दहलीज के नीचे तांबे का तार अथवा चांदी की पत्ती दबाएं।'
      ],
      materialsRequired: ['उत्तल दर्पण (Convex Reflector)', 'तांबे का सूर्य यंत्र', 'अष्टमंगल पट्टिका', 'चांदी की पत्ती'],
      mantra: '॥ ॐ ह्रीं द्वारपालाय सर्व विघ्न विनाशनाय नमः ॥',
      colorTheme: 'from-emerald-50 to-stone-50 border-emerald-300'
    }
  ];

  // Interactive Quick Finder Items
  const FINDER_ISSUES = [
    { id: 'ishan-toilet', label: '१. ईशान कोण में शौचालय / बाथरूम है', remedyId: 'ishan-remedies' },
    { id: 'nairitya-underground', label: '२. नैऋत्य में भूमिगत गड्ढा / बोरवेल / कुआं है', remedyId: 'nairitya-remedies' },
    { id: 'agneya-water', label: '३. आग्नेय कोण में पानी की टंकी या बोरवेल है', remedyId: 'agneya-remedies' },
    { id: 'dwarvedh', label: '४. मुख्य द्वार के ठीक सामने खंभा / पेड़ / ट्रांसफार्मर है', remedyId: 'dwarvedh-remedies' },
    { id: 'beam-over-vedi', label: '५. वेदी या मंदिर के ठीक ऊपर बीम (धरन) है', remedyId: 'brahmasthan-remedies' },
    { id: 'vayavya-dosh', label: '६. वायव्य कोण में कटाव, विस्तार या गलत रसोई है', remedyId: 'vayavya-remedies' },
    { id: 'brahmasthan-pillar', label: '७. ब्रह्मस्थान (मध्य) में भारी खंभा या दीवार है', remedyId: 'brahmasthan-remedies' },
    { id: 'ishan-stairs', label: '८. ईशान कोण में भारी सीढ़ियां बनी हैं', remedyId: 'ishan-remedies' },
  ];

  const handleToggleCheck = (id: string) => {
    setCheckedDoshas(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDoshas = VASTU_DOSHAS.filter(d => {
    if (selectedSeverity === 'all') return true;
    return d.severity === selectedSeverity;
  });

  const checkedCount = Object.values(checkedDoshas).filter(Boolean).length;
  const currentFinderDosh = FINDER_ISSUES.find(f => f.id === selectedFinderIssue);
  const currentFinderRemedy = DIRECTION_REMEDIES.find(r => r.id === currentFinderDosh?.remedyId) || DIRECTION_REMEDIES[0];

  return (
    <div className="bg-white rounded-3xl border-2 border-amber-300 p-5 sm:p-7 lg:p-9 shadow-md space-y-8">
      {/* Title Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-amber-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider mb-2 border border-rose-300">
            <ShieldAlert className="w-4 h-4 text-rose-700" />
            <span>जिनालय वास्तु दोष निदान एवं बिना तोड़फोड़ निवारण</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-jain text-stone-900">
            जैन मंदिर वास्तु दोष एवं संपूर्ण निवारण उपाय (Remedies)
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-3xl">
            मंदिर अथवा भवन में किसी भी प्रकार के वास्तु दोष के निवारण हेतु तोड़फोड़ की आवश्यकता नहीं होती। 
            वैदिक ऊर्जा संतुलन, तांबे-चांदी की शलाका, यंत्र, पिरामिड व मंत्र साधना द्वारा शत-प्रतिशत शास्त्र सम्मत उपचार।
          </p>
        </div>

        {/* Action Button & Print */}
        <div className="flex items-center gap-2 self-start lg:self-auto shrink-0">
          <button
            onClick={() => window.print()}
            className="no-print px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs font-bold rounded-xl border border-amber-300 flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Printer className="w-4 h-4" />
            <span>उपाय प्रिंट करें</span>
          </button>
        </div>
      </div>

      {/* Main Sub-Tab Switcher */}
      <div className="flex items-center justify-center p-1.5 bg-stone-100 rounded-2xl max-w-2xl mx-auto border border-stone-200">
        <button
          onClick={() => setActiveTabMode('remedies')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTabMode === 'remedies'
              ? 'bg-amber-800 text-white shadow-sm ring-2 ring-amber-300'
              : 'text-stone-700 hover:text-amber-900 hover:bg-white'
          }`}
        >
          <Wrench className="w-4 h-4 text-amber-300" />
          <span>१. दिशा-वार संपूर्ण निवारण उपाय</span>
        </button>

        <button
          onClick={() => setActiveTabMode('finder')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTabMode === 'finder'
              ? 'bg-amber-800 text-white shadow-sm ring-2 ring-amber-300'
              : 'text-stone-700 hover:text-amber-900 hover:bg-white'
          }`}
        >
          <Search className="w-4 h-4 text-amber-300" />
          <span>२. त्वरित दोष-उपाय चयनकर्ता</span>
        </button>

        <button
          onClick={() => setActiveTabMode('checklist')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTabMode === 'checklist'
              ? 'bg-amber-800 text-white shadow-sm ring-2 ring-amber-300'
              : 'text-stone-700 hover:text-amber-900 hover:bg-white'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-amber-300" />
          <span>३. 12 दोष ऑडिट चेकलिस्ट</span>
        </button>
      </div>

      {/* MODE 1: Comprehensive Direction-wise Remedies */}
      {activeTabMode === 'remedies' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-amber-50/70 p-4 sm:p-5 rounded-2xl border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif-jain font-bold text-base sm:text-lg text-amber-950 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-700" />
                <span>जैन शास्त्रोक्त बिना तोड़फोड़ वास्तु दोष निवारण महा-सूत्र (Zero-Demolition Principles)</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 mt-1">
                नीचे प्रत्येक दिशा के विशिष्ट दोष एवं उनके निवारण हेतु आवश्यक सामग्री, शास्त्रीय चरणबद्ध प्रक्रिया व बीज मंत्र दिए गए हैं:
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs shrink-0 border border-emerald-300">
              ✓ 100% बिना तोड़फोड़
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {DIRECTION_REMEDIES.map((remedy) => (
              <div
                key={remedy.id}
                className={`p-5 rounded-3xl border-2 bg-gradient-to-br ${remedy.colorTheme} shadow-sm space-y-4 flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
                    <div>
                      <h4 className="font-serif-jain font-bold text-lg text-stone-900">
                        {remedy.direction}
                      </h4>
                      <span className="text-[11px] font-semibold text-stone-600 block">
                        तत्व: {remedy.element}
                      </span>
                    </div>
                    <Compass className="w-6 h-6 text-amber-700" />
                  </div>

                  {/* Common Problems Tag */}
                  <div>
                    <span className="text-[11px] font-bold text-rose-900 uppercase block mb-1">
                      सामान्य दोष:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {remedy.commonProblems.map((prob, idx) => (
                        <span key={idx} className="text-[11px] bg-white/90 text-stone-800 px-2 py-0.5 rounded-md border border-stone-300">
                          {prob}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Step by step remedies */}
                  <div className="bg-white/90 p-3.5 rounded-2xl border border-stone-200/90 space-y-2">
                    <strong className="text-xs text-amber-950 font-bold block">
                      {remedy.remedyTitle}:
                    </strong>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {remedy.stepByStepRemedy.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials & Mantra */}
                  <div className="space-y-2 text-xs">
                    <div className="bg-amber-100/60 p-2.5 rounded-xl border border-amber-200">
                      <strong className="text-amber-950 block text-[11px] mb-1">आवश्यक वैदिक/जैन सामग्री:</strong>
                      <div className="flex flex-wrap gap-1">
                        {remedy.materialsRequired.map((mat, mIdx) => (
                          <span key={mIdx} className="bg-white text-stone-800 px-2 py-0.5 rounded text-[11px] border border-amber-300">
                            • {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-stone-900 text-amber-200 p-2.5 rounded-xl text-center font-serif-jain text-xs font-bold">
                      {remedy.mantra}
                    </div>
                  </div>
                </div>

                {/* Direct Expert WhatsApp Advice */}
                <a
                  href={`https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20'${encodeURIComponent(
                    remedy.direction
                  )}'%20के%20बिना%20तोड़फोड़%20निवारण%20हेतु%20परामर्श%20चाहिए।`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>इस दिशा का व्यक्तिगत उपाय पूछें</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODE 2: Interactive Quick Remedy Finder */}
      {activeTabMode === 'finder' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-300">
            <h3 className="font-serif-jain font-bold text-lg text-amber-950 mb-1 flex items-center gap-2">
              <Search className="w-5 h-5 text-amber-800" />
              <span>अपनी समस्या का चयन करें और तुरंत सटीक निवारण पाएं</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-700">
              नीचे दी गई सूची में से वह दोष चुनें जो आपके मंदिर, घर या प्रतिष्ठान में मौजूद है:
            </p>
          </div>

          {/* Issue Selector Dropdown / Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {FINDER_ISSUES.map((issue) => (
              <button
                key={issue.id}
                onClick={() => setSelectedFinderIssue(issue.id)}
                className={`p-3 rounded-2xl border-2 text-left text-xs font-bold transition-all cursor-pointer ${
                  selectedFinderIssue === issue.id
                    ? 'bg-amber-800 text-white border-amber-900 shadow-md ring-2 ring-amber-300'
                    : 'bg-white hover:bg-amber-50 text-stone-800 border-stone-200'
                }`}
              >
                {issue.label}
              </button>
            ))}
          </div>

          {/* Result Card for Selected Issue */}
          <div className="p-6 rounded-3xl border-2 border-amber-400 bg-gradient-to-br from-amber-50/60 via-white to-amber-50/40 shadow-md space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-amber-200 pb-4 gap-3">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">चयनित दोष का प्रमाणित समाधान:</span>
                <h4 className="text-xl font-bold font-serif-jain text-stone-900 mt-0.5">
                  {currentFinderRemedy.direction}
                </h4>
              </div>

              <div className="px-3.5 py-1.5 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-full text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>बिना किसी तोड़फोड़ के 100% संभव</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="space-y-3">
                <strong className="text-amber-950 font-bold block text-sm">
                  १. शास्त्रोक्त क्रियान्वयन विधि (Action Plan):
                </strong>
                <ul className="space-y-2 text-stone-700">
                  {currentFinderRemedy.stepByStepRemedy.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                      <span className="w-5 h-5 rounded-full bg-amber-800 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 flex flex-col justify-between">
                <div>
                  <strong className="text-amber-950 font-bold block text-sm mb-2">
                    २. आवश्यक सिद्ध सामग्री:
                  </strong>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {currentFinderRemedy.materialsRequired.map((mat, idx) => (
                      <div key={idx} className="bg-white p-2.5 rounded-xl border border-amber-200 font-semibold text-stone-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{mat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 rounded-2xl bg-stone-900 text-amber-200 text-center font-serif-jain text-xs sm:text-sm font-bold">
                    <span className="text-[10px] text-stone-400 block font-normal uppercase mb-1">दैनिक सिद्ध मंत्र जाप:</span>
                    {currentFinderRemedy.mantra}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20'${encodeURIComponent(
                      currentFinderDosh?.label || ''
                    )}'%20के%20समाधान%20हेतु%20सामग्री%20व%20विधि%20पूछनी%20है।`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                    <span>संजीव सिपानी जी से इस दोष की सामग्री व प्राण-प्रतिष्ठा पूछें</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: 12 Vastu Dosh Checklist */}
      {activeTabMode === 'checklist' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Severity Count Badge & Filter */}
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

            <div className="bg-rose-50 border border-rose-300 px-3 py-1 rounded-xl text-center shrink-0">
              <span className="text-[10px] font-bold text-rose-800 uppercase mr-1">चिह्नित दोष:</span>
              <strong className="text-base font-serif-jain text-rose-950 font-bold">{checkedCount} / {VASTU_DOSHAS.length}</strong>
            </div>
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
        </div>
      )}

      {/* Bottom Advice Strip */}
      <div className="bg-amber-50 p-4 sm:p-5 rounded-3xl border-2 border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-700">
        <div>
          <strong className="text-amber-950 font-bold block text-sm">संजीव सिपानी जी का परामर्श:</strong>
          मंदिर अथवा भवन में किसी भी दोष के निवारण हेतु हड़बड़ाहट में कभी भी तोड़फोड़ न करें। 
          ९०% से अधिक दोष ऊर्जा संतुलन, पिरामिड, तांबे/चांदी की शलाका, शुद्ध गंधोदक कुंड एवं यंत्र संरेखण से बिना तोड़फोड़ शांत किए जा सकते हैं।
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:9509061075"
            className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-xl font-bold flex items-center gap-1 shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span>9509061075</span>
          </a>

          <a
            href="https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20वास्तु%20दोष%20निवारण%20के%20बिना%20तोड़फोड़%20उपाय%20हेतु%20परामर्श%20चाहिए।"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold flex items-center gap-1 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
            <span>व्हाट्सएप</span>
          </a>
        </div>
      </div>
    </div>
  );
};
