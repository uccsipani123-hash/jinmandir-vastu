import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  BookOpen, 
  Sparkles, 
  Package, 
  ShieldCheck, 
  Printer, 
  FileCode, 
  CheckCircle2, 
  Loader2,
  ExternalLink,
  Phone,
  MessageCircle
} from 'lucide-react';
import { 
  downloadVastuCertificateDoc, 
  downloadComprehensiveVastuGuidebook, 
  downloadPratishthaSamagriDoc, 
  downloadCompleteProjectZip 
} from '../utils/downloadHelpers';

interface DownloadCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
  templeData?: {
    templeName: string;
    trustName: string;
    cityState: string;
    moolnayakName: string;
    plotSize: string;
    inspectionDate: string;
    vastuScore: number;
    certificateNo: string;
  };
}

export const DownloadCenterModal: React.FC<DownloadCenterModalProps> = ({
  isOpen,
  onClose,
  templeData = {
    templeName: 'श्री चिंतामणि पार्श्वनाथ श्वेतांबर जैन मंदिर',
    trustName: 'श्री जैन श्वेतांबर मूर्तिपूजक संघ ट्रस्ट',
    cityState: 'जयपुर, राजस्थान',
    moolnayakName: 'श्री पार्श्वनाथ भगवान',
    plotSize: '60 फीट x 40 फीट (2400 वर्गफुट)',
    inspectionDate: '29 सितंबर 2026',
    vastuScore: 94,
    certificateNo: 'SJEA/MJV/2026-89'
  }
}) => {
  const [downloadingZip, setDownloadingZip] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownloadCertificate = () => {
    downloadVastuCertificateDoc(templeData);
    showNotice('वास्तु प्रमाण-पत्र सफलतापूर्वक डाउनलोड हुआ!');
  };

  const handleDownloadGuide = () => {
    downloadComprehensiveVastuGuidebook();
    showNotice('सम्पूर्ण वास्तु महाग्रंथ सफलतापूर्वक डाउनलोड हुआ!');
  };

  const handleDownloadPratishtha = () => {
    downloadPratishthaSamagriDoc();
    showNotice('प्रतिष्ठा विधि एवं सामग्री चेकलिस्ट डाउनलोड हुई!');
  };

  const handleDownloadZip = async () => {
    try {
      setDownloadingZip(true);
      await downloadCompleteProjectZip();
      showNotice('संपूर्ण प्रोजेक्ट ज़िप (.zip) फाइल डाउनलोड हो गई है!');
    } catch (e) {
      console.error(e);
    } finally {
      setDownloadingZip(false);
    }
  };

  const showNotice = (msg: string) => {
    setDownloadSuccess(msg);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border-2 border-amber-400 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 p-5 sm:p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-700/80 border border-amber-400/60 flex items-center justify-center text-amber-200 shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-300 text-[11px] font-bold uppercase tracking-wider border border-amber-600/60 mb-1">
                <span>॥ ॐ अर्हम् ॥</span>
                <span>•</span>
                <span>डाउनलोड केंद्र</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-jain text-amber-100">
                दस्तावेज, गाइड एवं प्रोजेक्ट डाउनलोड करें
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-amber-800/80 text-amber-300 hover:text-white transition-colors cursor-pointer"
            title="बंद करें"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success Toast */}
        {downloadSuccess && (
          <div className="bg-emerald-600 text-white px-4 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 justify-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0" />
            <span>{downloadSuccess}</span>
          </div>
        )}

        {/* Modal Body: Download Cards */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <p className="text-stone-600 text-xs sm:text-sm">
            नीचे दिए गए किसी भी विकल्प पर क्लिक करके सीधे अपने मोबाइल या कंप्यूटर में ऑफ़लाइन उपयोग हेतु फाइलें डाउनलोड कर सकते हैं:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Card 1: Official Vastu Certificate */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300 hover:border-amber-500 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[11px] font-bold">
                    आधिकारिक प्रमाण-पत्र
                  </span>
                  <FileText className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold font-serif-jain text-base text-stone-900 mb-1">
                  1. जिनालय वास्तु प्रमाण-पत्र (PDF / HTML)
                </h3>
                <p className="text-xs text-stone-600 mb-3">
                  {templeData.templeName} के लिए तैयार किया गया पूर्ण निरीक्षण रिकॉर्ड, स्कोर ({templeData.vastuScore}%) व सिपानी केंद्र की मुहर।
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={handleDownloadCertificate}
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98 transition-transform"
                >
                  <Download className="w-4 h-4 text-amber-300" />
                  <span>प्रमाण-पत्र डाउनलोड करें (.html / print)</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    window.print();
                  }}
                  className="w-full py-1.5 px-3 rounded-xl bg-white hover:bg-amber-100 text-stone-800 border border-stone-300 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-stone-600" />
                  <span>सीधे ब्राउज़र से प्रिंट / PDF सेव करें</span>
                </button>
              </div>
            </div>

            {/* Card 2: Complete Vastu Guidebook */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300 hover:border-amber-500 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[11px] font-bold">
                    सम्पूर्ण ई-बुक
                  </span>
                  <BookOpen className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold font-serif-jain text-base text-stone-900 mb-1">
                  2. सम्पूर्ण मंदिर वास्तु मार्गदर्शिका ग्रन्थ
                </h3>
                <p className="text-xs text-stone-600 mb-3">
                  26 शास्त्रीय वास्तु नियम, शिखर-ध्वजा अनुपात, भूमिगत जल, उपाश्रय, ड्रेनेज, बाथरूम नियम व दैनिक समय सारिणी का विस्तृत संकलन।
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleDownloadGuide}
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98 transition-transform"
                >
                  <Download className="w-4 h-4 text-amber-200" />
                  <span>वास्तु ग्रन्थ डाउनलोड करें (E-Book)</span>
                </button>
              </div>
            </div>

            {/* Card 3: Pratishtha Vidhi & Samagri List */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300 hover:border-amber-500 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[11px] font-bold">
                    प्रतिष्ठा गाइड
                  </span>
                  <Sparkles className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold font-serif-jain text-base text-stone-900 mb-1">
                  3. प्रतिष्ठा विधि (7 दिवस) एवं 108 सामग्री
                </h3>
                <p className="text-xs text-stone-600 mb-3">
                  कुंभ स्थापना से लेकर अंजनशलाका, महाध्वजारोहण व तोरण बंधाई तक 7 दिनों की क्रमवार विधि व ट्रस्ट हेतु जांच चेकलिस्ट।
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleDownloadPratishtha}
                  className="w-full py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98 transition-transform"
                >
                  <Download className="w-4 h-4 text-amber-300" />
                  <span>प्रतिष्ठा व सामग्री सूची डाउनलोड करें</span>
                </button>
              </div>
            </div>

            {/* Card 4: Complete Project Code ZIP */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-100/90 to-amber-200/50 border-2 border-amber-400 hover:border-amber-600 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-900 text-amber-100 text-[11px] font-bold">
                    संपूर्ण वेबसाइट कोड (.ZIP)
                  </span>
                  <FileCode className="w-5 h-5 text-amber-800" />
                </div>
                <h3 className="font-bold font-serif-jain text-base text-amber-950 mb-1">
                  4. संपूर्ण प्रोजेक्ट ज़िप (Full Offline Project)
                </h3>
                <p className="text-xs text-stone-700 mb-3">
                  पूरी वेबसाइट का सोर्स कोड, ऑफ़लाइन दर्शक (Offline HTML Viewer), डेटा फाइलें और पैकेज विन्यास एक ज़िप (.zip) फाइल में।
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleDownloadZip}
                  disabled={downloadingZip}
                  className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-800 to-amber-950 hover:from-amber-900 hover:to-black text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-98 transition-transform disabled:opacity-50"
                >
                  {downloadingZip ? (
                    <>
                      <Loader2 className="w-4 h-4 text-amber-300 animate-spin" />
                      <span>ज़िप फाइल तैयार हो रही है...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-amber-300" />
                      <span>संपूर्ण प्रोजेक्ट ज़िप डाउनलोड करें (.zip)</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Expert Contact Footer inside modal */}
          <div className="mt-5 p-3.5 rounded-2xl bg-amber-100/60 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="text-stone-800">
              <span className="font-bold text-amber-950">मुद्रित (हार्डकॉपी) रिपोर्ट या व्यक्तिगत नक्शा परीक्षण:</span>
              <p className="text-[11px] text-stone-600">संजीव सिपानी (मानसरोवर, जयपुर) से सीधे संपर्क करके मूल सील वाली रिपोर्ट मंगाएं।</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="tel:9509061075"
                className="px-3 py-1.5 rounded-lg bg-amber-800 text-white font-bold flex items-center gap-1 hover:bg-amber-900"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>9509061075</span>
              </a>

              <a
                href="https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20मंदिर%20वास्तु%20की%20हार्डकॉपी%20रिपोर्ट%20व%20परामर्श%20चाहिए।"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-700 text-white font-bold flex items-center gap-1 hover:bg-emerald-800"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                <span>व्हाट्सएप</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
