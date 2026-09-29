import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  MessageCircle, 
  RotateCcw,
  Building,
  Award,
  BookOpen
} from 'lucide-react';
import { 
  downloadVastuCertificateDoc, 
  downloadComprehensiveVastuGuidebook 
} from '../utils/downloadHelpers';

export const InteractiveVastuPDF: React.FC = () => {
  const [templeName, setTempleName] = useState<string>('श्री चिंतामणि पार्श्वनाथ श्वेतांबर जैन मंदिर');
  const [trustName, setTrustName] = useState<string>('श्री जैन श्वेतांबर मूर्तिपूजक संघ ट्रस्ट');
  const [cityState, setCityState] = useState<string>('जयपुर, राजस्थान');
  const [moolnayakName, setMoolnayakName] = useState<string>('श्री पार्श्वनाथ भगवान');
  const [plotSize, setPlotSize] = useState<string>('60 फीट x 40 फीट (2400 वर्गफुट)');
  const [inspectionDate, setInspectionDate] = useState<string>('29 सितंबर 2026');
  const [vastuScore, setVastuScore] = useState<number>(94);
  const [certificateNo, setCertificateNo] = useState<string>('SJEA/MJV/2026-89');
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const currentData = {
    templeName,
    trustName,
    cityState,
    moolnayakName,
    plotSize,
    inspectionDate,
    vastuScore,
    certificateNo
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDirectDownload = () => {
    downloadVastuCertificateDoc(currentData);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Controls & Customization Panel (Hidden in Print) */}
      <div className="no-print bg-white rounded-3xl border-2 border-amber-300 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 border-b border-amber-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-1.5 border border-amber-300">
              <FileText className="w-4 h-4 text-amber-700" />
              <span>प्रमाणित वास्तु निरीक्षण प्रपत्र जनरेटर</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-jain text-stone-900">
              इंटरएक्टिव मंदिर वास्तु प्रमाण-पत्र (Interactive Vastu PDF)
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              अपने मंदिर का विवरण भरें और नीचे तैयार आधिकारिक 'वास्तु प्रमाण-पत्र एवं ऑडिट रिपोर्ट' को पीडीएफ (PDF) या फ़ाइल के रूप में 1-क्लिक में डाउनलोड करें।
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={handleDirectDownload}
              className="px-4 py-2.5 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-sm cursor-pointer active:scale-95 transition-all"
              title="प्रमाण-पत्र फ़ाइल डाउनलोड करें"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>प्रमाण-पत्र फ़ाइल डाउनलोड करें</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs sm:text-sm rounded-xl border border-amber-400 flex items-center gap-1.5 shadow-2xs cursor-pointer active:scale-95 transition-all"
              title="ब्राउज़र से सीधे प्रिंट या PDF सेव करें"
            >
              <Printer className="w-4 h-4 text-amber-800" />
              <span>प्रिंट / PDF सेव</span>
            </button>

            <button
              onClick={() => downloadComprehensiveVastuGuidebook()}
              className="px-3.5 py-2.5 bg-stone-100 hover:bg-amber-50 text-stone-800 font-semibold text-xs rounded-xl border border-stone-300 flex items-center gap-1.5 cursor-pointer"
              title="संपूर्ण 26 अध्यायों की वास्तु ई-बुक डाउनलोड करें"
            >
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span className="hidden sm:inline">वास्तु ग्रन्थ डाउनलोड</span>
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>वास्तु प्रमाण-पत्र सफलतापूर्वक आपकी डिवाइस में डाउनलोड हो गया है!</span>
          </div>
        )}

        {/* Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 text-xs">
          <div>
            <label className="block font-bold text-stone-700 mb-1">मंदिर / जिनालय का नाम:</label>
            <input
              type="text"
              value={templeName}
              onChange={(e) => setTempleName(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 font-medium focus:bg-white focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">ट्रस्ट / संघ का नाम:</label>
            <input
              type="text"
              value={trustName}
              onChange={(e) => setTrustName(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 font-medium focus:bg-white focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">शहर एवं राज्य:</label>
            <input
              type="text"
              value={cityState}
              onChange={(e) => setCityState(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 font-medium focus:bg-white focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">मूलनायक भगवान:</label>
            <input
              type="text"
              value={moolnayakName}
              onChange={(e) => setMoolnayakName(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 font-medium focus:bg-white focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">भूखंड का माप:</label>
            <input
              type="text"
              value={plotSize}
              onChange={(e) => setPlotSize(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 font-medium focus:bg-white focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">निरीक्षण दिनांक:</label>
            <input
              type="text"
              value={inspectionDate}
              onChange={(e) => setInspectionDate(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 font-medium focus:bg-white focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">वास्तु स्कोर (%):</label>
            <input
              type="number"
              min="50"
              max="100"
              value={vastuScore}
              onChange={(e) => setVastuScore(Number(e.target.value))}
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 font-bold text-amber-900 focus:bg-white focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">सर्टिफिकेट नंबर:</label>
            <input
              type="text"
              value={certificateNo}
              onChange={(e) => setCertificateNo(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-300 font-medium focus:bg-white focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Printable Certificate Sheet (Optimized for PDF Printing) */}
      <div 
        id="vastu-certificate" 
        className="bg-amber-50/20 border-8 border-double border-amber-600 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl max-w-4xl mx-auto relative overflow-hidden bg-white text-stone-900 print:border-amber-800 print:shadow-none print:p-8"
      >
        {/* Subtle Jain Watermark Icon in background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-4 pointer-events-none select-none text-[280px] font-serif-jain text-amber-800">
          卐
        </div>

        {/* Certificate Top Sacred Shloka */}
        <div className="text-center border-b-2 border-amber-400 pb-5 mb-6">
          <div className="text-amber-800 text-xs sm:text-sm font-bold font-serif-jain tracking-wider mb-1">
            ॥ ॐ श्री अर्हं परम गुरुभ्यो नमः ॥ णमो लोए सव्वसाहूणं ॥
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif-jain text-amber-950 tracking-tight">
            जैन श्वेतांबर जिनालय वास्तु एवं प्रतिष्ठा निरीक्षण प्रमाण-पत्र
          </h1>
          <div className="text-xs sm:text-sm font-semibold text-stone-700 mt-1">
            सिपानी जैन एजुकेशन एंड एस्ट्रोलॉजी कंसल्टेंट सेंटर • मानसरोवर, जयपुर (राज.)
          </div>
          <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500 mt-1">
            <span>प्रमाण-पत्र क्र.: <strong>{certificateNo}</strong></span>
            <span>•</span>
            <span>दिनांक: <strong>{inspectionDate}</strong></span>
          </div>
        </div>

        {/* Temple & Trust Info Header Box */}
        <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-300 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div>
            <span className="text-stone-500 block text-[11px]">जिनालय का नाम:</span>
            <strong className="text-base text-amber-950 font-bold">{templeName}</strong>
          </div>
          <div>
            <span className="text-stone-500 block text-[11px]">ट्रस्ट / संस्था:</span>
            <strong className="text-sm text-stone-900 font-bold">{trustName}</strong>
          </div>
          <div>
            <span className="text-stone-500 block text-[11px]">स्थान (City, State):</span>
            <span className="text-stone-800 font-semibold">{cityState}</span>
          </div>
          <div>
            <span className="text-stone-500 block text-[11px]">मूलनायक तीर्थंकर:</span>
            <span className="text-stone-800 font-bold">{moolnayakName}</span>
          </div>
        </div>

        {/* Audit Findings Table */}
        <div className="space-y-4 mb-6">
          <h3 className="font-serif-jain font-bold text-base sm:text-lg text-amber-950 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-700" />
            <span>शास्त्रीय वास्तु निरीक्षण एवं मानक संरेखण विवरण (Vastu Audit Record)</span>
          </h3>

          <div className="border border-stone-300 rounded-xl overflow-hidden text-xs sm:text-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-amber-100/80 text-amber-950 border-b border-stone-300 text-[11px] uppercase">
                  <th className="p-2.5 font-bold">वास्तु तत्व / अंग</th>
                  <th className="p-2.5 font-bold">आदर्श दिशा / अनुपात</th>
                  <th className="p-2.5 font-bold">प्रमाणन स्थिति</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700 text-xs">
                <tr>
                  <td className="p-2.5 font-semibold text-stone-900">मूल गर्भगृह एवं वेदी</td>
                  <td className="p-2.5">मध्य-पश्चिम में वेदी, भगवान की दृष्टि पूर्वाभिमुख/उत्तराभिमुख</td>
                  <td className="p-2.5 text-emerald-700 font-bold">✓ शास्त्र सम्मत</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-stone-900">शिखर की ऊंचाई (प्रसाद लक्षण)</td>
                  <td className="p-2.5">गर्भगृह विस्तार की 2.5 गुनी (मारु-गुर्जर नागर शैली), कलश सहित सर्वोच्च</td>
                  <td className="p-2.5 text-emerald-700 font-bold">✓ पूर्ण अनुपालन</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-stone-900">भूमिगत जलकुंड (Underground Tank)</td>
                  <td className="p-2.5">ईशान कोण (North-East) में शुद्ध गंधोदक व जल संचय</td>
                  <td className="p-2.5 text-emerald-700 font-bold">✓ अमृत पद सिद्ध</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-stone-900">श्री नाकोड़ा भैरव जी वेदी</td>
                  <td className="p-2.5">आग्नेय कोण (South-East) में स्वतंत्र रक्षक वेदी व दीप स्थान</td>
                  <td className="p-2.5 text-emerald-700 font-bold">✓ मर्यादा अनुकूल</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-stone-900">पूज्य साधु-साध्वी उपाश्रय</td>
                  <td className="p-2.5">नैऋत्य कोण (South-West) में शांत संयमी संकुल, अलग गलियारा</td>
                  <td className="p-2.5 text-emerald-700 font-bold">✓ शील मर्यादा सिद्ध</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-stone-900">शौचालय विसर्जन व्यवस्था</td>
                  <td className="p-2.5">वायव्य कोण (North-West) बाह्य सीमा, मंदिर से 40 फीट दूर</td>
                  <td className="p-2.5 text-emerald-700 font-bold">✓ आशातना मुक्त</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Score & Verdict Banner */}
        <div className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 p-4 rounded-2xl border-2 border-emerald-400 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-bold text-emerald-900 uppercase">समग्र वास्तु अनुपालन निष्कर्ष:</span>
            <h4 className="text-lg sm:text-xl font-bold font-serif-jain text-emerald-950">
              अत्यंत शुभ, सर्वसिद्धिप्रद एवं धर्म प्रभावना वर्धक
            </h4>
            <p className="text-xs text-stone-600 mt-0.5">
              यह जिनालय श्वेतांबर वास्तुमण्डन, दीपार्णव एवं प्रतिष्ठा सारोद्धार के समस्त अनिवार्य मानकों पर खरा उतरा है।
            </p>
          </div>

          <div className="text-center bg-white px-5 py-3 rounded-2xl border border-emerald-300 shadow-2xs shrink-0">
            <span className="text-[10px] font-bold text-stone-500 uppercase">वास्तु शुद्धि स्कोर</span>
            <div className="text-3xl font-extrabold font-serif-jain text-emerald-800">{vastuScore}%</div>
            <span className="text-[10px] font-bold text-emerald-700">उत्कृष्ट श्रेणी (A+)</span>
          </div>
        </div>

        {/* Official Seal and Consultant Signature Block */}
        <div className="pt-6 border-t-2 border-amber-300 grid grid-cols-1 sm:grid-cols-2 items-end justify-between gap-6 text-xs">
          <div>
            <div className="text-stone-500 text-[11px] mb-1">आधिकारिक मुहर एवं पंजीयन:</div>
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-amber-600 flex flex-col items-center justify-center p-2 text-center text-[9px] text-amber-900 font-bold bg-amber-50/50">
              <span>सिपानी जैन एजुकेशन</span>
              <span className="text-base my-0.5">卐</span>
              <span>मानसरोवर जयपुर</span>
            </div>
          </div>

          <div className="sm:text-right space-y-1">
            <div className="text-stone-500 text-[11px]">वास्तु एवं प्रतिष्ठा विशेषज्ञ:</div>
            <div className="font-serif-jain text-lg font-bold text-amber-950">
              संजीव सिपानी (Sanjeev Sipani)
            </div>
            <div className="text-stone-700 font-medium text-[11px]">
              संस्थापक: सिपानी जैन एजुकेशन एंड एस्ट्रोलॉजी कंसल्टेंट सेंटर
            </div>
            <div className="text-stone-600 text-[11px]">
              मानसरोवर, जयपुर (राज.) • मो. 9509061075 • WhatsApp: 9660870376
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
