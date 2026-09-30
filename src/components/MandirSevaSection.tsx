import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Building, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Printer, 
  Download, 
  FileText, 
  Calendar, 
  Clock, 
  Users, 
  Layers, 
  Coins, 
  BookOpen, 
  Flame, 
  Droplets, 
  HelpCircle,
  ArrowRight,
  ExternalLink,
  Info
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  location: string;
  type: 'नूतन जिनालय' | 'प्राचीन जीर्णोद्धार' | 'रक्षक देव वेदी' | 'उपाश्रय व ज्ञान भंडार';
  description: string;
  vastuHighlight: string;
  progressPercent: number;
  targetTimeline: string;
  urgentNeeds: string[];
  suggestedPledges: { label: string; amount: string; description: string }[];
  tagColor: string;
  moolnayak: string;
}

const ONGOING_PROJECTS: Project[] = [
  {
    id: 'proj-jaipur-new',
    title: 'श्री शांतिनाथ श्वेतांबर भव्य नूतन जिनालय निर्माण',
    location: 'मानसरोवर - सांगानेर परिक्षेत्र, जयपुर (राजस्थान)',
    type: 'नूतन जिनालय',
    moolnayak: '16वें तीर्थंकर भगवान श्री शांतिनाथ स्वामी (श्वेत मकराना मार्बल)',
    description: '100% जैन शास्त्र एवं वास्तु सम्मत भव्य नूतन जिनालय का निर्माण। ईशान कोण में मुख्य गर्भगृह, मकराना संगमरमर का 51 फीट ऊंचा कलात्मक शिखर, 16 विद्यादेवियों के तोरण द्वार व अष्टमंगल नक्काशीदार रंगमंडप।',
    vastuHighlight: 'ईशान कोण में गर्भगृह एवं अमृत जलकुंड, आग्नेय में पाकशाला, नैऋत्य में 35 फीट ऊंचा शिखर संरेखण।',
    progressPercent: 68,
    targetTimeline: 'आगामी वैशाख सुदी दशमी (प्रतिष्ठा लक्ष्य)',
    urgentNeeds: [
      'गर्भगृह मूल वेदी हेतु मकराना शुद्ध संगमरमर शिलाएं',
      'मुख्य शिखर हेतु 81 पाषाण शिलाएं',
      'अष्टमंगल नक्काशीदार मुख्य तोरण द्वार स्तंभ',
      'प्रासुक भूमिगत जल शोधन कुंड निर्माण'
    ],
    suggestedPledges: [
      { label: 'मुख्य वेदी पाषाण शिला सेवा', amount: '₹ 51,000', description: 'गर्भगृह की पवित्र नींव व वेदी में आपकी समर्पित शिला' },
      { label: 'शिखर कलश व ध्वजदंड सेवा', amount: '₹ 1,00,000', description: 'जिनालय शिखर पर स्वर्णमयी कलश व ध्वजा का पावन लाभ' },
      { label: 'अष्टमंगल तोरण स्तंभ सेवा', amount: '₹ 31,000', description: 'रंगमंडप के नक्काशीदार कलात्मक स्तंभ पर स्मृति नाम' },
      { label: 'एक पाषाण शिला सेवा (सामान्य)', amount: '₹ 11,000', description: 'मंदिर दीवार या परकोटा हेतु पावन शिला समर्पण' },
    ],
    tagColor: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'proj-rajasthan-heritage',
    title: 'प्राचीन 275 वर्ष पुराने श्री पार्श्वनाथ जिनालय का महा-जीर्णोद्धार',
    location: 'पाली - मारवाड़ परिक्षेत्र (राजस्थान)',
    type: 'प्राचीन जीर्णोद्धार',
    moolnayak: '23वें तीर्थंकर भगवान श्री पार्श्वनाथ प्रभु (प्राचीन चमत्कारी पद्मासन प्रतिमा)',
    description: 'ऐतिहासिक प्राचीन जिनालय की पुरानी वेदी में आए वास्तु दोषों का बिना तोड़फोड़ जीर्णोद्धार, छत से सीलन का स्थायी वैदिक समाधान, प्राचीन भित्तिचित्रों का संरक्षण एवं गंधोदक शोधन कुंड का निर्माण।',
    vastuHighlight: 'प्राचीन मूल संरचना को अक्षुण्ण रखते हुए नैऋत्य भार संतुलन एवं ईशान्य गंधोदक सोक पिट निर्माण।',
    progressPercent: 42,
    targetTimeline: 'कार्तिक पूर्णिमा (कार्य पूर्णता)',
    urgentNeeds: [
      'प्राचीन वेदी का कायाकल्प व रजत पत्र मढ़वाई सेवा',
      'गंधोदक निकास हेतु 3 फीट गहरा वैदिक पाषाण कुंड',
      'मंदिर परकोटे व रंगमंडप का चूना-गुड़-उड़द प्राचीन पद्धति प्लास्टर',
      'सुरक्षा हेतु पीतल की नक्काशीदार जालियां'
    ],
    suggestedPledges: [
      { label: 'गंधोदक शोधन कुंड निर्माण सेवा', amount: '₹ 21,000', description: 'भगवान के पवित्र प्रक्षाल जल की शुद्ध मर्यादा हेतु कुंड' },
      { label: 'प्राचीन वेदी रजत आच्छादन सेवा', amount: '₹ 51,000', description: 'मूल वेदी पर शुद्ध रजत (चांदी) पत्र समर्पण' },
      { label: 'जीर्णोद्धार एक वर्गफुट सेवा', amount: '₹ 5,100', description: 'प्राचीन मंदिर के पाषाण संरक्षण में आंशिक सहयोग' },
    ],
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300'
  },
  {
    id: 'proj-ghantakarna-shrine',
    title: 'श्री घंटाकर्ण महावीर देव एवं नाकोड़ा भैरव जी उप-वेदी संकुल',
    location: 'अहमदाबाद - साबरमती राजमार्ग परिक्षेत्र',
    type: 'रक्षक देव वेदी',
    moolnayak: 'श्री घंटाकर्ण महावीर देव (महुड़ी परंपरा) एवं श्री नाकोड़ा पार्श्वनाथ भैरव जी',
    description: 'शास्त्र सम्मत वायव्य कोण में श्री घंटाकर्ण महावीर देव एवं आग्नेय कोण में श्री नाकोड़ा भैरव जी की स्वतंत्र रक्षा-वेदियों का निर्माण। 108 किलो का पंचधातु महा-घंटा, अखंड दीप कक्ष व सुखड़ी महाभोगशाला का निर्माण।',
    vastuHighlight: 'वायव्य कोण में 108 किलो का महा-घंटा एवं ताम्र यंत्र स्थापना; आग्नेय में स्वतंत्र दीप मंडप।',
    progressPercent: 80,
    targetTimeline: 'आगामी धनतेरस / काली चौदस (शुभ मुहूर्त)',
    urgentNeeds: [
      '108 किलो पंचधातु दिव्य महा-घंटा समर्पण',
      'श्री घंटाकर्ण महायंत्र व ताम्र पत्र आवरण',
      'अखंड दीप प्रज्वलन पीतल का स्तंभ',
      'शुद्ध सुखड़ी महाभोग निर्माण हेतु ताम्र पात्र सेट'
    ],
    suggestedPledges: [
      { label: '108 किलो महा-घंटा समर्पण सेवा', amount: '₹ 1,51,000', description: 'वायव्य कोण में स्थापित होने वाले पवित्र घंटे का मुख्य लाभार्थी' },
      { label: 'सिद्ध घंटाकर्ण महायंत्र स्थापना', amount: '₹ 31,000', description: 'वेदी के पीछे स्थापित ताम्र-स्वर्ण लेपित महायंत्र' },
      { label: 'अखंड दीप स्तंभ समर्पण', amount: '₹ 21,000', description: 'भैरव वेदी के सम्मुख 24 घंटे प्रज्वलित रहने वाला दीप पात्र' },
      { label: 'सुखड़ी महाभोग ताम्र पात्र सेवा', amount: '₹ 11,000', description: 'भोग निर्माण हेतु शुद्ध धातु के कड़ाही व पात्र' },
    ],
    tagColor: 'bg-rose-100 text-rose-900 border-rose-300'
  },
  {
    id: 'proj-upashray-gyanbhandar',
    title: 'पूज्य साधु-साध्वी उपाश्रय एवं आगम ज्ञान भंडार भवन',
    location: 'जोधपुर - पाली मार्ग (राजस्थान)',
    type: 'उपाश्रय व ज्ञान भंडार',
    moolnayak: 'सरस्वती देवी एवं प्राचीन हस्तलिखित आगम ग्रंथ संग्रह',
    description: 'मंदिर परिसर के नैऋत्य कोण में संयमी साधु-साध्वी जी हेतु शांत, प्राकृतिक हवादार उपाश्रय एवं उत्तर दिशा में आगम ग्रंथालय व स्वाध्याय कक्ष। हस्तलिखित प्राचीन पांडुलिपियों के संरक्षण हेतु शीशम काष्ठ अलमारियां।',
    vastuHighlight: 'नैऋत्य में पूर्ण एकांत व संयम मर्यादा, उत्तर में सरस्वती व ज्ञान भंडार ऊर्जा केंद्र।',
    progressPercent: 35,
    targetTimeline: 'आगामी चातुर्मास प्रवेश पूर्व',
    urgentNeeds: [
      'आगम ग्रंथ संरक्षण हेतु 12 शुद्ध शीशम काष्ठ की अलमारियां',
      'उपाश्रय में संयमियों हेतु शुद्ध लकड़ी के पाटे-बाजोट सेट',
      'प्रासुक उबला जल व्यवस्था हेतु सौर्य ऊर्जा शोधन कक्ष',
      'स्वाध्याय भवन का मार्बल फ्लोरिंग व साउंडप्रूफ खिड़कियां'
    ],
    suggestedPledges: [
      { label: 'ज्ञान भंडार शीशम अलमारी सेवा', amount: '₹ 25,000', description: 'आगम ग्रंथों के संरक्षण हेतु एक पूर्ण अलमारी पर नाम पट्टिका' },
      { label: 'उपाश्रय कक्ष निर्माण सेवा', amount: '₹ 1,25,000', description: 'पूज्य मुनिराज विश्राम कक्ष निर्माण का पावन लाभ' },
      { label: 'संयम पाटा-बाजोट सेट समर्पण', amount: '₹ 7,500', description: 'साधु भगवंतों के स्वाध्याय व विश्राम हेतु काष्ठ सामग्री' },
      { label: 'प्रासुक जल शोधन उपकरण सेवा', amount: '₹ 15,000', description: 'संयमियों के आहार-पानी की शुद्धता हेतु प्राकृतिक व्यवस्था' },
    ],
    tagColor: 'bg-blue-100 text-blue-900 border-blue-300'
  }
];

export const MandirSevaSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string>('proj-jaipur-new');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Form State
  const [formData, setFormData] = useState({
    donorName: '',
    fatherOrHusbandName: '',
    gotra: '',
    nativePlace: '',
    currentCity: '',
    mobile: '',
    email: '',
    selectedProjectId: 'proj-jaipur-new',
    sevaType: 'पाषाण शिला सेवा',
    pledgeAmount: '₹ 21,000',
    customAmount: '',
    paymentPreference: 'बैंक ट्रांसफर (NEFT/RTGS / Cheque)',
    dedicationNote: 'सपरिवार सुख-समृद्धि एवं जिन शासन की जय-जयकार हेतु।',
    wantsCertificate: true,
  });

  const [submittedPledge, setSubmittedPledge] = useState<typeof formData | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const currentProjObj = ONGOING_PROJECTS.find(p => p.id === formData.selectedProjectId) || ONGOING_PROJECTS[0];

  const filteredProjects = activeFilter === 'all' 
    ? ONGOING_PROJECTS 
    : ONGOING_PROJECTS.filter(p => p.type === activeFilter);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectProjectAndSeva = (projId: string, sevaTitle: string, amount: string) => {
    setSelectedProject(projId);
    setFormData(prev => ({
      ...prev,
      selectedProjectId: projId,
      sevaType: sevaTitle,
      pledgeAmount: amount
    }));

    // Scroll smoothly to the form
    const formElement = document.getElementById('seva-sankalp-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.donorName.trim() || !formData.mobile.trim()) {
      alert('कृपया अपना नाम और मोबाइल नंबर अवश्य दर्ज करें।');
      return;
    }
    setSubmittedPledge({ ...formData });

    // Open WhatsApp link immediately with formal message
    const msg = generateWhatsAppMessage(formData);
    const waUrl = `https://wa.me/919660870376?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  const generateWhatsAppMessage = (data: typeof formData) => {
    const proj = ONGOING_PROJECTS.find(p => p.id === data.selectedProjectId);
    const effectiveAmount = data.pledgeAmount === 'अन्य राशि (Custom)' ? data.customAmount : data.pledgeAmount;

    return `🙏 जय जिनेन्द्र संजीव जी,
सादर वंदन। मैंने जैन मंदिर वास्तु पोर्टल पर 'सेवा समर्पण केंद्र' के माध्यम से जिनालय निर्माण/जीर्णोद्धार में सेवा संकल्प व्यक्त किया है। विवरण निम्नलिखित है:

📌 चयनित परियोजना: ${proj?.title || 'जिनालय निर्माण'}
📍 स्थान: ${proj?.location || 'राजस्थान'}
👤 नाम: ${data.donorName}
🏛️ गोत्र / मूल निवास: ${data.gotra || 'नहीं दर्शाया'} / ${data.nativePlace || 'नहीं दर्शाया'}
🏙️ वर्तमान शहर: ${data.currentCity || 'नहीं दर्शाया'}
📱 मोबाइल / WhatsApp: ${data.mobile}
💎 सेवा का प्रकार: ${data.sevaType}
💰 संकल्प राशि / स्वरूप: ${effectiveAmount}
💳 भुगतान विधि: ${data.paymentPreference}
📜 भावना / समर्पण संदेश: ${data.dedicationNote || 'सपरिवार सुख-समृद्धि हेतु'}

कृपया मंदिर ट्रस्ट का अधिकृत खाता विवरण (Bank Details) एवं रसीद प्रक्रिया साझा करें।
धन्यवाद!`;
  };

  const handlePrintPledge = () => {
    window.print();
  };

  return (
    <div className="space-y-10">
      {/* Hero Banner with Royal Traditional Jain Aesthetic */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white p-6 sm:p-10 border-2 border-amber-500/60 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>पुण्य संचय का स्वर्णिम अवसर • 100% देवद्रव्य शुद्धि व मर्यादा</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-jain font-bold text-amber-100 tracking-tight leading-tight">
            जिनालय निर्माण एवं जीर्णोद्धार <span className="text-amber-400">सेवा समर्पण केंद्र</span>
          </h1>

          <p className="text-amber-200/90 text-sm sm:text-base leading-relaxed font-sans">
            जैन शास्त्रों में कहा गया है— <em className="font-serif-jain text-amber-300">"जिनेंद्र देव के मंदिर में एक भी शिला लगाने से प्राणी को कोटि-कोटि जन्मों के पापों से मुक्ति और अक्षय पुण्य की प्राप्ति होती है।"</em> चल रही पावन मंदिर निर्माण व जीर्णोद्धार परियोजनाओं में अपनी श्रद्धा अनुसार शिला, वेदी, तोरण, कलश या श्रमदान का संकल्प लें।
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-amber-500/30">
            <div className="bg-black/30 backdrop-blur-xs p-3 rounded-xl border border-amber-400/20 text-center">
              <span className="block text-2xl font-bold text-amber-300">4+</span>
              <span className="text-[11px] text-amber-200/80">सक्रिय पावन परियोजनाएं</span>
            </div>
            <div className="bg-black/30 backdrop-blur-xs p-3 rounded-xl border border-amber-400/20 text-center">
              <span className="block text-2xl font-bold text-amber-300">100%</span>
              <span className="text-[11px] text-amber-200/80">शास्त्र सम्मत वास्तु संरेखण</span>
            </div>
            <div className="bg-black/30 backdrop-blur-xs p-3 rounded-xl border border-amber-400/20 text-center">
              <span className="block text-2xl font-bold text-amber-300">पारदर्शी</span>
              <span className="text-[11px] text-amber-200/80">ट्रस्ट रसीद व प्रगति रिपोर्ट</span>
            </div>
            <div className="bg-black/30 backdrop-blur-xs p-3 rounded-xl border border-amber-400/20 text-center">
              <span className="block text-2xl font-bold text-amber-300">विशेषज्ञ</span>
              <span className="text-[11px] text-amber-200/80">संजीव सिपानी जी का मार्गदर्शन</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200 pb-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif-jain text-stone-900 flex items-center gap-2">
            <Building className="w-6 h-6 text-amber-700" />
            <span>चल रही जिनालय निर्माण एवं जीर्णोद्धार परियोजनाएं</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
            अपनी रुचि के अनुसार परियोजना चुनें और शिला या निर्माण कार्य में सहभागी बनें
          </p>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'सभी परियोजनाएं' },
            { id: 'नूतन जिनालय', label: 'नूतन जिनालय' },
            { id: 'प्राचीन जीर्णोद्धार', label: 'प्राचीन जीर्णोद्धार' },
            { id: 'रक्षक देव वेदी', label: 'रक्षक देव वेदी' },
            { id: 'उपाश्रय व ज्ञान भंडार', label: 'उपाश्रय व ज्ञान भंडार' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-amber-100/70 text-amber-950 hover:bg-amber-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const isSelected = selectedProject === project.id;
          return (
            <div 
              key={project.id}
              className={`rounded-2xl bg-white border-2 transition-all p-5 flex flex-col justify-between shadow-sm hover:shadow-md ${
                isSelected 
                  ? 'border-amber-600 ring-2 ring-amber-400/40 bg-amber-50/20' 
                  : 'border-amber-200'
              }`}
            >
              <div className="space-y-3.5">
                {/* Header Badge */}
                <div className="flex items-start justify-between gap-2">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${project.tagColor}`}>
                    {project.type}
                  </span>
                  <span className="text-xs font-bold text-amber-800 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{project.targetTimeline}</span>
                  </span>
                </div>

                {/* Title & Moolnayak */}
                <div>
                  <h3 className="text-lg font-bold font-serif-jain text-stone-900 group-hover:text-amber-800">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-stone-600 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-900 mt-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>मूलनायक: {project.moolnayak}</span>
                  </div>
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Vastu Highlight Box */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-950 space-y-1">
                  <div className="font-bold flex items-center gap-1 text-amber-900">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                    <span>वास्तु एवं शास्त्र सम्मत विशेषता:</span>
                  </div>
                  <p className="text-[11px] sm:text-xs leading-normal">{project.vastuHighlight}</p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-stone-700">
                    <span>निर्माण प्रगति (Construction Progress)</span>
                    <span className="text-amber-800">{project.progressPercent}% पूर्ण</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-amber-600 to-amber-500 h-2.5 rounded-full transition-all duration-500" 
                      style={{ width: `${project.progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Urgent Needs List */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-bold text-stone-900 block">वर्तमान में आवश्यक सेवा सामग्री / निर्माण अंग:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {project.urgentNeeds.map((need, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-stone-700 bg-stone-50 p-1.5 rounded-md border border-stone-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{need}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seva Options Grid */}
                <div className="space-y-2 pt-2 border-t border-amber-200">
                  <span className="text-xs font-bold text-amber-950 block">पावन सेवा अवसर (Seva Opportunities):</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.suggestedPledges.map((pledge, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => handleSelectProjectAndSeva(project.id, pledge.label, pledge.amount)}
                        className="text-left p-2.5 rounded-xl border border-amber-300 bg-gradient-to-br from-amber-50 to-white hover:border-amber-500 hover:shadow-xs transition-all cursor-pointer group"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-stone-900">
                          <span className="group-hover:text-amber-800">{pledge.label}</span>
                          <span className="text-amber-800 font-extrabold">{pledge.amount}</span>
                        </div>
                        <p className="text-[10px] text-stone-600 mt-0.5 leading-tight">{pledge.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 mt-3 border-t border-stone-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(project.id);
                    setFormData(prev => ({
                      ...prev,
                      selectedProjectId: project.id,
                      sevaType: 'सामान्य पाषाण शिला सेवा',
                      pledgeAmount: '₹ 11,000'
                    }));
                    const formElement = document.getElementById('seva-sankalp-form');
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex-1 py-2 px-3 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                >
                  <Heart className="w-3.5 h-3.5 fill-current text-rose-300" />
                  <span>इस परियोजना में सेवा संकल्प लें</span>
                </button>

                <a
                  href={`https://wa.me/919660870376?text=${encodeURIComponent(`जय जिनेन्द्र, मुझे '${project.title}' (${project.location}) के बारे में अधिक जानकारी व ट्रस्ट खाता विवरण चाहिए।`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  title="व्हाट्सएप पर ट्रस्ट विवरण मांगें"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Seva Sankalp Form & Pledge Generator */}
      <div id="seva-sankalp-form" className="rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-100/50 border-2 border-amber-300 p-6 sm:p-10 shadow-lg">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/70 border border-amber-400 text-amber-950 text-xs font-bold">
              <Heart className="w-4 h-4 fill-current text-rose-600" />
              <span>सेवा संकल्प पत्र (Expression of Interest)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-jain text-stone-900">
              जिनालय सेवा संकल्प एवं इच्छा प्रकटीकरण फॉर्म
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
              यह फॉर्म आपकी श्रद्धा व सेवा भावना को पंजीकृत करता है। फॉर्म सबमिट करते ही आपका विवरण सीधे मंदिर निर्माण विशेषज्ञ संजीव सिपानी जी व संबंधित ट्रस्ट को व्हाट्सएप पर प्रेषित हो जाएगा।
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-amber-200 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Project Selection */}
              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-amber-700" />
                  <span>चयनित जिनालय परियोजना *</span>
                </label>
                <select
                  name="selectedProjectId"
                  value={formData.selectedProjectId}
                  onChange={handleInputChange}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-amber-300 bg-amber-50/40 text-stone-900 font-semibold focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  required
                >
                  {ONGOING_PROJECTS.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.location})
                    </option>
                  ))}
                </select>
              </div>

              {/* Donor Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-800">
                  श्रावक / श्राविका का शुभ नाम (Name) *
                </label>
                <input
                  type="text"
                  name="donorName"
                  value={formData.donorName}
                  onChange={handleInputChange}
                  placeholder="उदा. श्री विमल कुमार जैन"
                  className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              {/* Father / Husband Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-800">
                  पिता / पति का नाम (Father / Husband)
                </label>
                <input
                  type="text"
                  name="fatherOrHusbandName"
                  value={formData.fatherOrHusbandName}
                  onChange={handleInputChange}
                  placeholder="उदा. स्व. श्री शांतिलाल जी जैन"
                  className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Gotra & Native */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-800">
                  गोत्र एवं कुल (Gotra)
                </label>
                <input
                  type="text"
                  name="gotra"
                  value={formData.gotra}
                  onChange={handleInputChange}
                  placeholder="उदा. सिपानी, लोढ़ा, कोठारी, ओसवाल..."
                  className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Native Place */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-800">
                  मूल निवास / वतन (Native Town)
                </label>
                <input
                  type="text"
                  name="nativePlace"
                  value={formData.nativePlace}
                  onChange={handleInputChange}
                  placeholder="उदा. फालना, भीनमाल, जोधपुर, सांगानेर..."
                  className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Mobile / WhatsApp */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-800 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>मोबाइल / WhatsApp नंबर *</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="उदा. 9876543210"
                  className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              {/* Current City */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-800 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  <span>वर्तमान शहर व राज्य (Current City)</span>
                </label>
                <input
                  type="text"
                  name="currentCity"
                  value={formData.currentCity}
                  onChange={handleInputChange}
                  placeholder="उदा. जयपुर, मुंबई, अहमदाबाद, दिल्ली..."
                  className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Seva Type */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-800">
                  सेवा का प्रकार (Seva Category) *
                </label>
                <select
                  name="sevaType"
                  value={formData.sevaType}
                  onChange={handleInputChange}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                >
                  <option value="मुख्य वेदी पाषाण शिला सेवा">मुख्य वेदी पाषाण शिला सेवा</option>
                  <option value="शिखर कलश व ध्वजदंड सेवा">शिखर कलश व ध्वजदंड सेवा</option>
                  <option value="अष्टमंगल तोरण स्तंभ सेवा">अष्टमंगल तोरण स्तंभ सेवा</option>
                  <option value="गंधोदक शोधन कुंड निर्माण सेवा">गंधोदक शोधन कुंड निर्माण सेवा</option>
                  <option value="प्राचीन वेदी जीर्णोद्धार सेवा">प्राचीन वेदी जीर्णोद्धार सेवा</option>
                  <option value="108 किलो महा-घंटा समर्पण सेवा">108 किलो महा-घंटा समर्पण सेवा</option>
                  <option value="घंटाकर्ण / भैरव महायंत्र स्थापना">घंटाकर्ण / भैरव महायंत्र स्थापना</option>
                  <option value="ज्ञान भंडार शीशम अलमारी सेवा">ज्ञान भंडार शीशम अलमारी सेवा</option>
                  <option value="उपाश्रय कक्ष निर्माण सेवा">उपाश्रय कक्ष निर्माण सेवा</option>
                  <option value="वास्तु दोष शांति एवं स्वस्तिक प्रतिष्ठा">वास्तु दोष शांति एवं स्वस्तिक प्रतिष्ठा</option>
                  <option value="श्रमदान एवं तकनीकी/वास्तु सेवा">श्रमदान एवं तकनीकी/वास्तु सेवा</option>
                  <option value="सामान्य पाषाण शिला सेवा">सामान्य पाषाण शिला सेवा</option>
                  <option value="अन्य ऐच्छिक सेवा">अन्य ऐच्छिक सेवा</option>
                </select>
              </div>

              {/* Pledge Amount Selection */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-800 flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5 text-amber-700" />
                  <span>संकल्प राशि (Pledge Tier) *</span>
                </label>
                <select
                  name="pledgeAmount"
                  value={formData.pledgeAmount}
                  onChange={handleInputChange}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 font-bold focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                >
                  <option value="₹ 5,100">₹ 5,100 (शुभ शिला सेवा)</option>
                  <option value="₹ 11,000">₹ 11,000 (पाषाण शिला सेवा)</option>
                  <option value="₹ 21,000">₹ 21,000 (कुंड व यंत्र सेवा)</option>
                  <option value="₹ 31,000">₹ 31,000 (तोरण स्तंभ सेवा)</option>
                  <option value="₹ 51,000">₹ 51,000 (वेदी निर्माण सेवा)</option>
                  <option value="₹ 1,00,000">₹ 1,00,000 (शिखर कलश सेवा)</option>
                  <option value="₹ 1,51,000">₹ 1,51,000 (महा-घंटा समर्पण)</option>
                  <option value="श्रमदान / निःशुल्क वास्तु सेवा">श्रमदान / निःशुल्क सेवा</option>
                  <option value="अन्य राशि (Custom)">अन्य राशि (Custom Amount)</option>
                </select>
              </div>

              {/* Custom Amount if selected */}
              {formData.pledgeAmount === 'अन्य राशि (Custom)' && (
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-stone-800">
                    आपकी ऐच्छिक संकल्प राशि दर्ज करें (₹):
                  </label>
                  <input
                    type="text"
                    name="customAmount"
                    value={formData.customAmount}
                    onChange={handleInputChange}
                    placeholder="उदा. ₹ 75,000 या जो भी आपकी श्रद्धा हो"
                    className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              )}

              {/* Payment Mode Preference */}
              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-bold text-stone-800">
                  भुगतान का सुविधाजनक माध्यम (Payment Preference)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'बैंक ट्रांसफर (NEFT/RTGS / IMPS)',
                    'चेक / ड्राफ्ट (Trust Cheque)',
                    'UPI / QR कोड (Trust Account)'
                  ].map((mode) => (
                    <label 
                      key={mode}
                      className={`text-xs p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                        formData.paymentPreference === mode
                          ? 'border-amber-600 bg-amber-50 font-bold text-amber-950'
                          : 'border-stone-200 bg-stone-50 text-stone-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentPreference"
                        value={mode}
                        checked={formData.paymentPreference === mode}
                        onChange={handleInputChange}
                        className="text-amber-700 focus:ring-amber-500"
                      />
                      <span>{mode}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Dedication Note / In memory of */}
              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-bold text-stone-800 flex items-center justify-between">
                  <span>समर्पण भावना / पूर्वजों की स्मृति (In Memory Of / Dedication)</span>
                  <span className="text-[11px] text-stone-500 font-normal">शिला/पट्टिका पर अंकित करने हेतु</span>
                </label>
                <textarea
                  name="dedicationNote"
                  value={formData.dedicationNote}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="उदा. पूज्य माताजी स्व. श्रीमती ... एवं पिताजी स्व. श्री ... की पावन पुण्य स्मृति में"
                  className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Devdravya Sanctity Agreement */}
            <div className="bg-amber-50/80 border border-amber-300 rounded-xl p-3.5 text-xs text-amber-950 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>जैन शास्त्र सम्मत देवद्रव्य शुद्धि संकल्प:</span>
              </div>
              <p className="text-[11px] leading-relaxed text-stone-700">
                "मैं संकल्प करता हूँ कि यह सेवा समर्पण मेरे न्यायोपार्जित, सात्विक एवं शुद्ध धन से किया जा रहा है। इसका उपयोग केवल चयनित जिनालय निर्माण / जीर्णोद्धार के शास्त्र सम्मत कार्यों में ही किया जाए।"
              </p>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3 px-6 bg-gradient-to-r from-amber-800 to-amber-900 hover:from-amber-900 hover:to-amber-950 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current text-rose-300" />
                <span>सेवा संकल्प दर्ज करें व WhatsApp पर भेजें</span>
              </button>

              <a
                href="tel:9509061075"
                className="w-full sm:w-auto py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-stone-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>सीधे बात करें: 9509061075</span>
              </a>
            </div>
          </form>

          {/* Submitted Pledge Card Preview / Certificate (if submitted) */}
          {submittedPledge && (
            <div className="mt-8 bg-white border-2 border-amber-500 rounded-2xl p-6 shadow-xl space-y-4 print:p-0 print:border-none print:shadow-none">
              <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif-jain font-bold text-stone-900 text-lg">
                      सेवा संकल्प पावन पत्र (Pledge Acknowledgment)
                    </h3>
                    <p className="text-xs text-stone-600">
                      आपका संकल्प सफलतापूर्वक पंजीकृत हो गया है। साधुवाद एवं जिन शासन की जय!
                    </p>
                  </div>
                </div>

                <button
                  onClick={handlePrintPledge}
                  className="no-print px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg text-xs font-bold flex items-center gap-1 border border-amber-300 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>प्रिंट / PDF निकालें</span>
                </button>
              </div>

              {/* Certificate Details */}
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200 text-xs sm:text-sm space-y-2 text-stone-800 font-sans">
                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-amber-200/80">
                  <div>
                    <span className="text-stone-500 text-[11px] block">संकल्पकर्ता का नाम:</span>
                    <strong className="text-stone-900 text-sm">{submittedPledge.donorName}</strong>
                    {submittedPledge.gotra && <span className="text-xs text-stone-600 block">({submittedPledge.gotra} गोत्र)</span>}
                  </div>
                  <div>
                    <span className="text-stone-500 text-[11px] block">चयनित जिनालय:</span>
                    <strong className="text-amber-900 text-sm">{currentProjObj.title}</strong>
                    <span className="text-xs text-stone-600 block">{currentProjObj.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-1">
                  <div>
                    <span className="text-stone-500 text-[11px] block">सेवा स्वरूप:</span>
                    <strong>{submittedPledge.sevaType}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 text-[11px] block">संकल्प राशि:</span>
                    <strong className="text-emerald-700 font-bold">
                      {submittedPledge.pledgeAmount === 'अन्य राशि (Custom)' ? submittedPledge.customAmount : submittedPledge.pledgeAmount}
                    </strong>
                  </div>
                  <div>
                    <span className="text-stone-500 text-[11px] block">संपर्क नंबर:</span>
                    <strong>{submittedPledge.mobile}</strong>
                  </div>
                </div>

                {submittedPledge.dedicationNote && (
                  <div className="pt-2 border-t border-amber-200/80 text-[11px]">
                    <span className="text-stone-500 block">समर्पण भावना:</span>
                    <p className="italic text-stone-800">"{submittedPledge.dedicationNote}"</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600 pt-2">
                <span>वास्तु एवं निर्माण समन्वयक: <strong>संजीव सिपानी</strong> (जयपुर)</span>
                <span className="text-amber-800 font-medium">ट्रस्ट द्वारा अधिकृत रसीद व 80G सर्टिफिकेट प्रेषित किया जाएगा</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Devdravya Rules & Sanctity Guidelines */}
      <div className="rounded-2xl bg-white border border-amber-300 p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 pb-2 border-b border-amber-200">
          <BookOpen className="w-5 h-5 text-amber-700" />
          <h3 className="text-lg font-bold font-serif-jain text-stone-900">
            जैन शास्त्र सम्मत देवद्रव्य शुद्धि एवं दान मर्यादा के 5 स्वर्णिम नियम
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
          <div className="flex items-start gap-2.5 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
            <span className="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
            <div>
              <strong className="text-stone-900 block">न्यायोपार्जित सात्विक धन:</strong>
              जिनालय निर्माण या वेदी सेवा में केवल नीति, सच्चाई व ईमानदारी से अर्जित शुद्ध धन ही समर्पण योग्य माना जाता है।
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
            <span className="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
            <div>
              <strong className="text-stone-900 block">देवद्रव्य का अक्षुण्ण उपयोग:</strong>
              जिस मद (जैसे वेदी, शिला, कलश, ज्ञान भंडार) हेतु सेवा समर्पित की गई है, वह 100% उसी कार्य में खर्च होती है। अन्यत्र उपयोग शास्त्र विरुद्ध है।
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
            <span className="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
            <div>
              <strong className="text-stone-900 block">अहंकार रहित समर्पण:</strong>
              दान का फल तभी अक्षय होता है जब उसमें यश या मान की कामना के स्थान पर केवल जिन शासन की प्रभावना व तीर्थ रक्षा की भावना हो।
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
            <span className="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
            <div>
              <strong className="text-stone-900 block">श्रमदान व ज्ञान सेवा भी श्रेष्ठ दान:</strong>
              यदि आर्थिक सहयोग संभव न हो तो मंदिर निर्माण में वास्तु निरीक्षण, नक्शा जांच, पत्थर नक्काशी परीक्षण या स्वच्छता श्रमदान भी समतुल्य पुण्यकारी है।
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="bg-gradient-to-r from-amber-900 to-stone-900 text-white rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-300" />
            <span>किसी भी परियोजना की वर्तमान स्थिति, ट्रस्ट पंजीयन या बैंक खाते की जानकारी हेतु:</span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="tel:9509061075" 
              className="font-bold text-amber-300 hover:underline"
            >
              📞 9509061075
            </a>
            <span className="text-stone-400">|</span>
            <a 
              href="https://wa.me/919660870376?text=जय%20जिनेन्द्र,%20मुझे%20जिनालय%20निर्माण%20सेवा%20हेतु%20ट्रस्ट%20बैंक%20खाता%20चाहिए।"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 rounded-lg text-white font-bold flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp चैट</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
