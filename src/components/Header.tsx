import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Compass, 
  Calendar, 
  BookOpen, 
  ShieldCheck, 
  Shield,
  Printer, 
  Ruler, 
  Clock, 
  ShowerHead, 
  Moon,
  ShieldAlert,
  Sparkles,
  Package,
  FileText,
  Download
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAudit: () => void;
  onOpenDownloadCenter: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeTab, 
  setActiveTab, 
  onOpenAudit,
  onOpenDownloadCenter
}) => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-amber-50/95 via-amber-50/90 to-amber-100/90 backdrop-blur-md border-b border-amber-200/80 shadow-sm">
      {/* Sacred Top Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-amber-100 text-xs sm:text-sm py-1.5 px-4 text-center font-serif-jain tracking-wide flex items-center justify-center gap-2 flex-wrap">
        <span className="text-amber-400 font-bold">॥ ॐ अर्हम् णमो अरिहंताणं णमो सिद्धाणं णमो आयरियाणं णमो उवज्झायाणं णमो लोए सव्वसाहूणं ॥</span>
        <span className="hidden md:inline text-amber-300">|</span>
        <span className="hidden md:inline text-amber-200 text-xs">जैन श्वेतांबर जिनालय स्थापत्य एवं प्रतिष्ठा विज्ञान</span>
      </div>

      {/* Main Brand Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3.5 text-center md:text-left">
          <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-0.5 shadow-md flex items-center justify-center shrink-0 ring-2 ring-amber-300">
            <div className="w-full h-full rounded-full bg-amber-50 flex items-center justify-center border-2 border-amber-500/40">
              <span className="text-2xl sm:text-3xl text-amber-700 font-serif-jain font-bold" title="अहिंसा परमो धर्म:">
                卐
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-xs uppercase font-semibold tracking-wider text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-full border border-amber-300">
                प्रामाणिक आगमोक्त वास्तु
              </span>
              <span className="text-xs text-stone-600 hidden sm:inline flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-700 inline" /> मानसरोवर, जयपुर (राज.)
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-jain text-amber-950 tracking-tight">
              जैन श्वेतांबर मंदिर वास्तु एवं मुहूर्त
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 font-medium">
              सिपानी जैन एजुकेशन एंड एस्ट्रोलॉजी कंसल्टेंट सेंटर • <span className="text-amber-900 font-semibold">संजीव सिपानी (संस्थापक)</span>
            </p>
          </div>
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-wrap justify-center">
          {/* Download Center Prominent Button */}
          <button
            onClick={onOpenDownloadCenter}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg text-xs sm:text-sm font-bold hover:from-amber-700 hover:to-amber-800 transition-all shadow-sm active:scale-95 cursor-pointer ring-2 ring-amber-400/60"
            title="वास्तु प्रमाण-पत्र, ग्रंथ व प्रोजेक्ट डाउनलोड करें"
          >
            <Download className="w-4 h-4 text-amber-200 animate-bounce" />
            <span>📥 डाउनलोड केंद्र</span>
          </button>

          <a
            href="tel:9509061075"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-amber-800 to-amber-900 text-white rounded-lg text-xs sm:text-sm font-medium hover:from-amber-900 hover:to-stone-900 transition-all shadow-sm active:scale-95"
            title="संजीव सिपानी जी से सीधे बात करें"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>9509061075</span>
          </a>

          <a
            href="https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20जैन%20मंदिर%20वास्तु%20व%20मुहूर्त%20के%20संबंध%20में%20परामर्श%20चाहिए।"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-700 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-emerald-800 transition-all shadow-sm active:scale-95"
            title="व्हाट्सएप पर संदेश भेजें"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span className="hidden sm:inline">व्हाट्सएप</span>
          </a>

          <button
            onClick={() => window.print()}
            className="no-print p-2 rounded-lg bg-amber-100/80 hover:bg-amber-200 border border-amber-300 text-amber-900 transition-colors hidden xl:flex items-center gap-1 text-xs cursor-pointer"
            title="मंदिर वास्तु गाइड प्रिंट करें"
          >
            <Printer className="w-4 h-4" />
            <span>प्रिंट</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="border-t border-amber-200/60 bg-white/70 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-1 sm:space-x-2 py-2">
          {[
            { id: 'all-vastu', label: 'मंदिर वास्तु नियम (27 विषय)', icon: BookOpen },
            { id: 'ghantakarna', label: 'श्री घंटाकर्ण महावीर वास्तु', icon: Shield },
            { id: 'dosh-checklist', label: 'वास्तु दोष व निवारण उपाय (Remedies)', icon: ShieldAlert },
            { id: 'download-center', label: '📥 डाउनलोड केंद्र (PDF / ZIP)', icon: Download, isHighlight: true },
            { id: 'compass-map', label: 'दिशा चक्र व साधु प्रवाह', icon: Compass },
            { id: 'dimensions', label: 'माप कैलकुलेटर (Dimensions)', icon: Ruler },
            { id: 'pratishtha-vidhi', label: 'प्रतिष्ठा विधि (7 दिवस)', icon: Sparkles },
            { id: 'mandir-samagri', label: 'मंदिर सामग्री सूची (Items)', icon: Package },
            { id: 'vastu-pdf', label: 'इंटरएक्टिव वास्तु PDF (Certificate)', icon: FileText },
            { id: 'puja-schedule', label: 'दैनिक पूजा समय', icon: Clock },
            { id: 'bathroom', label: 'बाथरूम वास्तु', icon: ShowerHead },
            { id: 'deities', label: 'वेदी व देव प्रतिमाएं', icon: ShieldCheck },
            { id: 'muhurat', label: 'शुभ मुहूर्त शोधन', icon: Calendar },
            { id: 'upcoming-pratishtha', label: 'आगामी प्रतिष्ठा पंचांग', icon: Moon },
            { id: 'audit', label: 'वास्तु स्कोरकार्ड', icon: ShieldCheck },
            { id: 'contact', label: 'विशेषज्ञ परामर्श', icon: Phone },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === 'download-center') {
                    onOpenDownloadCenter();
                    return;
                  }
                  setActiveTab(tab.id);
                  if (tab.id === 'audit') {
                    onOpenAudit();
                  }
                }}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  tab.isHighlight
                    ? 'bg-amber-100 text-amber-950 border border-amber-400 font-bold hover:bg-amber-200'
                    : isActive
                    ? 'bg-amber-800 text-amber-50 shadow-sm border border-amber-900'
                    : 'text-stone-700 hover:text-amber-900 hover:bg-amber-100/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${tab.isHighlight ? 'text-amber-700' : isActive ? 'text-amber-300' : 'text-amber-700'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

