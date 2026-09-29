import React, { useState } from 'react';
import { Header } from './components/Header';
import { MandirCompassVisualizer } from './components/MandirCompassVisualizer';
import { DeityVastuSection } from './components/DeityVastuSection';
import { VastuCategoryView } from './components/VastuCategoryView';
import { MuhuratCalculator } from './components/MuhuratCalculator';
import { VastuAuditTool } from './components/VastuAuditTool';
import { VastuDimensionCalculator } from './components/VastuDimensionCalculator';
import { DailyPujaSchedule } from './components/DailyPujaSchedule';
import { BathroomVastuSection } from './components/BathroomVastuSection';
import { UpcomingPratishthaDashboard } from './components/UpcomingPratishthaDashboard';
import { VastuDoshChecklist } from './components/VastuDoshChecklist';
import { PratishthaVidhiGuide } from './components/PratishthaVidhiGuide';
import { MandirSamagriList } from './components/MandirSamagriList';
import { InteractiveVastuPDF } from './components/InteractiveVastuPDF';
import { DownloadCenterModal } from './components/DownloadCenterModal';
import { ConsultantProfile } from './components/ConsultantProfile';
import { Footer } from './components/Footer';
import { 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Calendar, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  ArrowRight, 
  Flame, 
  Award, 
  Ruler, 
  Clock, 
  ShowerHead,
  Moon,
  ShieldAlert,
  Package,
  FileText,
  Download
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('all-vastu');
  const [isDownloadCenterOpen, setIsDownloadCenterOpen] = useState<boolean>(false);

  const scrollToAudit = () => {
    setActiveTab('audit');
    const el = document.getElementById('audit-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-jain-pattern flex flex-col selection:bg-amber-200 selection:text-amber-950">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAudit={scrollToAudit}
        onOpenDownloadCenter={() => setIsDownloadCenterOpen(true)}
      />

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/90 via-amber-50/70 to-transparent py-8 sm:py-12 border-b border-amber-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/80 text-amber-950 text-xs font-bold uppercase tracking-wider border border-amber-300 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>जैन श्वेतांबर शास्त्रोक्त शिल्पकला एवं मुहूर्त निर्देशिका</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-jain text-stone-900 leading-tight">
                जैन श्वेतांबर मंदिर <span className="gold-gradient-text">वास्तु शास्त्र</span> एवं प्रतिष्ठा मुहूर्त
              </h1>

              <p className="text-stone-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                वेदी वास्तु, मूलनायक प्रतिमा, नाकोड़ा भैरव जी, दादागुरुदेव, यक्ष-यक्षिणी, वीर मणिभद्र बाबा, शिखर ऊंचाई, ध्वजादंड, तोरण द्वार, भूमि चयन, भूमिगत टैंक, उपाश्रय, तप-कक्ष, ड्रेनेज व प्रतिष्ठा मुहूर्त का संपूर्ण आगमोक्त प्रामाणिक संकलन।
              </p>

              {/* Founder Tagline */}
              <div className="p-3.5 rounded-xl bg-amber-100/70 border border-amber-300 text-xs sm:text-sm text-stone-800 flex flex-col sm:flex-row items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-800 text-amber-100 flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  卐
                </div>
                <div>
                  <span className="font-bold text-amber-950">मार्गदर्शन एवं परामर्श:</span> <strong>संजीव सिपानी</strong> (संस्थापक: सिपानी जैन एजुकेशन एंड एस्ट्रोलॉजी कंसल्टेंट सेंटर, मानसरोवर, जयपुर) | 
                  <span className="font-semibold text-stone-900 ml-1">मो. 9509061075</span> | 
                  <span className="font-semibold text-emerald-800 ml-1">व्हाट्सएप: 9660870376</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => setIsDownloadCenterOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ring-2 ring-amber-400 active:scale-95"
                >
                  <Download className="w-4 h-4 text-amber-200 animate-bounce" />
                  <span>📥 डाउनलोड केंद्र (PDF / ZIP)</span>
                </button>

                <button
                  onClick={() => setActiveTab('compass-map')}
                  className="px-4 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-amber-300" />
                  <span>अष्टदिशा चक्र व साधु प्रवाह</span>
                </button>

                <button
                  onClick={() => setActiveTab('dimensions')}
                  className="px-4 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Ruler className="w-4 h-4 text-amber-200" />
                  <span>माप कैलकुलेटर</span>
                </button>

                <button
                  onClick={() => setActiveTab('puja-schedule')}
                  className="px-4 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>दैनिक पूजा समय</span>
                </button>

                <button
                  onClick={() => setActiveTab('bathroom')}
                  className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-900 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <ShowerHead className="w-4 h-4 text-emerald-300" />
                  <span>बाथरूम वास्तु</span>
                </button>

                <button
                  onClick={() => setActiveTab('dosh-checklist')}
                  className="px-4 py-2.5 rounded-xl bg-red-900 hover:bg-red-950 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <ShieldAlert className="w-4 h-4 text-red-300" />
                  <span>दोष चेकलिस्ट (12 दोष)</span>
                </button>

                <button
                  onClick={() => setActiveTab('pratishtha-vidhi')}
                  className="px-4 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>प्रतिष्ठा विधि (7 दिवस)</span>
                </button>

                <button
                  onClick={() => setActiveTab('mandir-samagri')}
                  className="px-4 py-2.5 rounded-xl bg-stone-700 hover:bg-stone-800 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Package className="w-4 h-4 text-amber-300" />
                  <span>सामग्री सूची</span>
                </button>

                <button
                  onClick={() => setActiveTab('vastu-pdf')}
                  className="px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-emerald-200" />
                  <span>वास्तु सर्टिफिकेट PDF</span>
                </button>

                <button
                  onClick={() => setActiveTab('muhurat')}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-amber-100 text-stone-900 border border-amber-300 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-amber-700" />
                  <span>शुभ मुहूर्त</span>
                </button>

                <button
                  onClick={() => setActiveTab('upcoming-pratishtha')}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-900 to-amber-950 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Moon className="w-4 h-4 text-amber-300" />
                  <span>आगामी प्रतिष्ठा पंचांग</span>
                </button>

                <button
                  onClick={() => setActiveTab('audit')}
                  className="px-4 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-400 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-800" />
                  <span>वास्तु स्कोरकार्ड</span>
                </button>
              </div>
            </div>

            {/* Right Card: Quick Key Summary */}
            <div className="lg:col-span-4 bg-white/95 rounded-2xl border-2 border-amber-300 p-5 shadow-md">
              <div className="flex items-center gap-2 pb-3 border-b border-amber-200">
                <Award className="w-5 h-5 text-amber-700" />
                <h3 className="font-serif-jain font-bold text-stone-900 text-base">
                  जिनालय वास्तु के 5 स्वर्णिम सूत्र
                </h3>
              </div>

              <div className="space-y-2.5 mt-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2 bg-amber-50/60 p-2 rounded-lg border border-amber-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ईशान (NE):</strong> गर्भगृह, मूल वेदी, भूमिगत जलकुंड, ध्यान केंद्र व ज्ञान भंडार।</span>
                </div>

                <div className="flex items-start gap-2 bg-amber-50/60 p-2 rounded-lg border border-amber-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>आग्नेय (SE):</strong> श्री नाकोड़ा भैरव जी वेदी, भोजन शाला (रसोई) एवं दीप स्थान।</span>
                </div>

                <div className="flex items-start gap-2 bg-amber-50/60 p-2 rounded-lg border border-amber-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>नैऋत्य (SW):</strong> साधु-साध्वी उपाश्रय, भारी ओवरहेड टैंक, सीढ़ियां व भारी भंडार।</span>
                </div>

                <div className="flex items-start gap-2 bg-amber-50/60 p-2 rounded-lg border border-amber-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>वायव्य (NW):</strong> वीर मणिभद्र बाबा वेदी एवं परिसर से दूर बाह्य शौचालय।</span>
                </div>

                <div className="flex items-start gap-2 bg-amber-50/60 p-2 rounded-lg border border-amber-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>पूर्व / उत्तर:</strong> मुख्य सिंहद्वार, तोरण द्वार, खुली जगह व प्रकाश ढलान।</span>
                </div>
              </div>

              {/* Direct Query WhatsApp */}
              <a
                href="https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20जैन%20मंदिर%20वास्तु%20नक्शा%20दिखाना%20है।"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>नक्शा भेजकर विशेषज्ञ राय लें</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Content Sections */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 w-full">
        {/* Render Tab 1: Complete Vastu Encyclopedia */}
        {activeTab === 'all-vastu' && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-300 pb-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif-jain text-stone-900">
                  जैन श्वेतांबर मंदिर वास्तु विषय-संग्रह
                </h2>
                <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                  वेदी, प्रतिमा, भैरव, दादागुरुदेव, मणिभद्र, शिखर ऊंचाई, जल, ड्रेनेज, उपाश्रय, तप-कक्ष सहित 26 विषयों का विस्तृत विवरण
                </p>
              </div>
              <button
                onClick={() => setActiveTab('compass-map')}
                className="text-xs font-bold text-amber-900 hover:underline flex items-center gap-1 shrink-0"
              >
                <span>नक्शे पर दिशाएं देखें →</span>
              </button>
            </div>

            <VastuCategoryView />
          </section>
        )}

        {/* Render Tab 2: Compass & Floor Layout */}
        {activeTab === 'compass-map' && (
          <section className="space-y-6">
            <MandirCompassVisualizer />
          </section>
        )}

        {/* Render Tab: Vastu Dimension Calculator */}
        {activeTab === 'dimensions' && (
          <section className="space-y-6">
            <VastuDimensionCalculator />
          </section>
        )}

        {/* Render Tab: Vastu Dosh Checklist */}
        {activeTab === 'dosh-checklist' && (
          <section className="space-y-6">
            <VastuDoshChecklist />
          </section>
        )}

        {/* Render Tab: Pratishtha Vidhi Guide */}
        {activeTab === 'pratishtha-vidhi' && (
          <section className="space-y-6">
            <PratishthaVidhiGuide />
          </section>
        )}

        {/* Render Tab: Mandir Samagri List */}
        {activeTab === 'mandir-samagri' && (
          <section className="space-y-6">
            <MandirSamagriList />
          </section>
        )}

        {/* Render Tab: Interactive Vastu PDF */}
        {activeTab === 'vastu-pdf' && (
          <section className="space-y-6">
            <InteractiveVastuPDF />
          </section>
        )}

        {/* Render Tab: Daily Puja Schedule */}
        {activeTab === 'puja-schedule' && (
          <section className="space-y-6">
            <DailyPujaSchedule />
          </section>
        )}

        {/* Render Tab: Bathroom Vastu Section */}
        {activeTab === 'bathroom' && (
          <section className="space-y-6">
            <BathroomVastuSection />
          </section>
        )}

        {/* Render Tab 3: Deities Vastu */}
        {activeTab === 'deities' && (
          <section className="space-y-6">
            <DeityVastuSection />
          </section>
        )}

        {/* Render Tab 4: Muhurat Guide */}
        {activeTab === 'muhurat' && (
          <section className="space-y-6">
            <MuhuratCalculator />
          </section>
        )}

        {/* Render Tab: Upcoming Pratishtha Dashboard */}
        {activeTab === 'upcoming-pratishtha' && (
          <section className="space-y-6">
            <UpcomingPratishthaDashboard />
          </section>
        )}

        {/* Render Tab 5: Vastu Audit */}
        {activeTab === 'audit' && (
          <section id="audit-section" className="space-y-6">
            <VastuAuditTool />
          </section>
        )}

        {/* Render Tab 6: Contact & Consultant Profile */}
        {activeTab === 'contact' && (
          <section className="space-y-6">
            <ConsultantProfile />
          </section>
        )}

        {/* Permanent Highlight: Consultant Profile Card shown on all main pages for user clarity */}
        {activeTab !== 'contact' && (
          <div className="pt-6">
            <ConsultantProfile />
          </div>
        )}
      </main>

      {/* Floating Sticky Mobile Quick Action Bar */}
      <div className="no-print fixed bottom-3 left-1/2 -translate-x-1/2 z-40 bg-stone-900/95 backdrop-blur-md text-white rounded-full px-4 py-2 border border-amber-500/50 shadow-xl flex items-center gap-3 sm:hidden">
        <button
          onClick={() => setIsDownloadCenterOpen(true)}
          className="flex items-center gap-1 text-xs font-bold text-amber-400 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>डाउनलोड</span>
        </button>
        <span className="text-stone-600">|</span>
        <a
          href="tel:9509061075"
          className="flex items-center gap-1.5 text-xs font-bold text-amber-300"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>कॉल करें</span>
        </a>
        <span className="text-stone-600">|</span>
        <a
          href="https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20जैन%20मंदिर%20वास्तु%20परामर्श%20चाहिए।"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-bold text-emerald-300"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>व्हाट्सएप</span>
        </a>
      </div>

      {/* Download Center Modal */}
      <DownloadCenterModal
        isOpen={isDownloadCenterOpen}
        onClose={() => setIsDownloadCenterOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
