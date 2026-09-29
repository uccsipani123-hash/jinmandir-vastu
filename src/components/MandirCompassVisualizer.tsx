import React, { useState } from 'react';
import { MANDIR_DIRECTIONS, DirectionGuide } from '../data/vastuData';
import { Compass, CheckCircle2, XCircle, Info, Sparkles, AlertTriangle, Footprints } from 'lucide-react';
import { SadhuMovementFlow } from './SadhuMovementFlow';

export const MandirCompassVisualizer: React.FC = () => {
  const [activeSubMode, setActiveSubMode] = useState<'compass' | 'movement'>('compass');
  const [selectedDir, setSelectedDir] = useState<DirectionGuide>(MANDIR_DIRECTIONS[0]); // default ईशान

  return (
    <div className="space-y-6">
      {/* Visualizer Mode Toggle */}
      <div className="bg-white rounded-2xl border border-amber-200 p-2 shadow-xs flex items-center justify-center gap-2 max-w-lg mx-auto">
        <button
          onClick={() => setActiveSubMode('compass')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeSubMode === 'compass'
              ? 'bg-amber-800 text-white shadow-sm'
              : 'text-stone-700 hover:bg-amber-50 hover:text-amber-900'
          }`}
        >
          <Compass className="w-4 h-4 text-amber-300" />
          <span>अष्टदिशा वास्तु चक्र (8-Directions)</span>
        </button>

        <button
          onClick={() => setActiveSubMode('movement')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeSubMode === 'movement'
              ? 'bg-amber-800 text-white shadow-sm'
              : 'text-stone-700 hover:bg-amber-50 hover:text-amber-900'
          }`}
        >
          <Footprints className="w-4 h-4 text-amber-300" />
          <span>साधु-साध्वी गमनागमन प्रवाह</span>
        </button>
      </div>

      {/* Mode 1: 8-Direction Mandala */}
      {activeSubMode === 'compass' ? (
        <div className="bg-white rounded-2xl border border-amber-200/90 p-4 sm:p-6 lg:p-8 shadow-sm">
          {/* Title */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4 text-amber-700" />
              <span>अष्टदिशा वास्तु चक्र एवं जिनालय विन्यास</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-jain text-stone-900">
              जैन श्वेतांबर मंदिर दिशा वास्तु चक्र (Interactive 8-Direction Mandala)
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              नीचे दिए गए अष्टदिशा चक्र पर किसी भी दिशा (ईशान, पूर्व, आग्नेय, नैऋत्य आदि) पर क्लिक करें और जानें कि जैन श्वेतांबर जिनालय में वहां क्या होना चाहिए और क्या वर्जित है।
            </p>

            {/* Quick Switch CTA */}
            <div className="mt-3">
              <button
                onClick={() => setActiveSubMode('movement')}
                className="inline-flex items-center gap-1.5 text-xs text-amber-800 font-bold bg-amber-50 hover:bg-amber-100 px-3 py-1 rounded-full border border-amber-300 cursor-pointer transition-colors"
              >
                <Footprints className="w-3.5 h-3.5" />
                <span>नया: पूज्य साधु-साध्वी गमनागमन एवं पदविहार प्रवाह देखें →</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: 8-Direction Mandala Grid */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-amber-50 to-stone-100 p-3 sm:p-4 rounded-3xl border-2 border-amber-300 shadow-inner relative flex flex-col justify-between">
                {/* North Indicator */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-800 text-amber-100 text-[11px] font-bold px-3 py-0.5 rounded-full shadow border border-amber-600">
                  उत्तर (NORTH) ↑
                </div>

                {/* 3x3 Grid representing Vastu Purusha Mandala */}
                <div className="grid grid-cols-3 gap-2 w-full h-full my-auto pt-2">
                  {/* NW */}
                  <button
                    onClick={() => setSelectedDir(MANDIR_DIRECTIONS.find(d => d.dir === 'NW')!)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer text-center ${
                      selectedDir.dir === 'NW'
                        ? 'bg-amber-600 text-white shadow-md border-amber-700 ring-2 ring-amber-300 scale-102'
                        : 'bg-white hover:bg-amber-50 text-stone-800 border-amber-200'
                    }`}
                  >
                    <span className="text-[11px] font-bold text-amber-900 uppercase">वायव्य (NW)</span>
                    <span className={`text-xs font-semibold line-clamp-2 mt-0.5 ${selectedDir.dir === 'NW' ? 'text-amber-100' : 'text-stone-600'}`}>
                      वीर मणिभद्र / शौचालय
                    </span>
                  </button>

                  {/* North */}
                  <button
                    onClick={() => setSelectedDir(MANDIR_DIRECTIONS.find(d => d.dir === 'N')!)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer text-center ${
                      selectedDir.dir === 'N'
                        ? 'bg-amber-600 text-white shadow-md border-amber-700 ring-2 ring-amber-300 scale-102'
                        : 'bg-white hover:bg-amber-50 text-stone-800 border-amber-200'
                    }`}
                  >
                    <span className="text-[11px] font-bold text-amber-900 uppercase">उत्तर (NORTH)</span>
                    <span className={`text-xs font-semibold line-clamp-2 mt-0.5 ${selectedDir.dir === 'N' ? 'text-amber-100' : 'text-stone-600'}`}>
                      ज्ञान भंडार / दादागुरुदेव
                    </span>
                  </button>

                  {/* NE (Ishan) */}
                  <button
                    onClick={() => setSelectedDir(MANDIR_DIRECTIONS.find(d => d.dir === 'NE')!)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer text-center relative overflow-hidden ${
                      selectedDir.dir === 'NE'
                        ? 'bg-amber-700 text-white shadow-md border-amber-800 ring-2 ring-amber-300 scale-102'
                        : 'bg-amber-50 hover:bg-amber-100/80 text-amber-950 border-amber-300'
                    }`}
                  >
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-bl-md" title="अति पवित्र देव स्थान" />
                    <span className="text-[11px] font-bold uppercase">ईशान (NE) ★</span>
                    <span className={`text-xs font-semibold line-clamp-2 mt-0.5 ${selectedDir.dir === 'NE' ? 'text-amber-100' : 'text-amber-900'}`}>
                      गर्भगृह / भूमिगत टैंक
                    </span>
                  </button>

                  {/* West */}
                  <button
                    onClick={() => setSelectedDir(MANDIR_DIRECTIONS.find(d => d.dir === 'W')!)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer text-center ${
                      selectedDir.dir === 'W'
                        ? 'bg-amber-600 text-white shadow-md border-amber-700 ring-2 ring-amber-300 scale-102'
                        : 'bg-white hover:bg-amber-50 text-stone-800 border-amber-200'
                    }`}
                  >
                    <span className="text-[11px] font-bold text-amber-900 uppercase">पश्चिम (WEST)</span>
                    <span className={`text-xs font-semibold line-clamp-2 mt-0.5 ${selectedDir.dir === 'W' ? 'text-amber-100' : 'text-stone-600'}`}>
                      प्रवचन हॉल / रंगमंडप
                    </span>
                  </button>

                  {/* Center (Brahmasthan) */}
                  <button
                    onClick={() => setSelectedDir(MANDIR_DIRECTIONS.find(d => d.dir === 'Center')!)}
                    className={`p-2.5 rounded-xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer text-center relative ${
                      selectedDir.dir === 'Center'
                        ? 'bg-gradient-to-br from-amber-700 to-amber-900 text-white shadow-lg border-amber-950 ring-2 ring-amber-400 scale-105'
                        : 'bg-gradient-to-br from-amber-100 to-amber-200 text-amber-950 border-amber-400 shadow-sm'
                    }`}
                  >
                    <span className="text-lg">卐</span>
                    <span className="text-[11px] font-extrabold uppercase tracking-tight">ब्रह्मस्थान</span>
                    <span className="text-[10px] font-medium opacity-90">खुला मंडप चौक</span>
                  </button>

                  {/* East */}
                  <button
                    onClick={() => setSelectedDir(MANDIR_DIRECTIONS.find(d => d.dir === 'E')!)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer text-center ${
                      selectedDir.dir === 'E'
                        ? 'bg-amber-600 text-white shadow-md border-amber-700 ring-2 ring-amber-300 scale-102'
                        : 'bg-white hover:bg-amber-50 text-stone-800 border-amber-200'
                    }`}
                  >
                    <span className="text-[11px] font-bold text-amber-900 uppercase">पूर्व (EAST)</span>
                    <span className={`text-xs font-semibold line-clamp-2 mt-0.5 ${selectedDir.dir === 'E' ? 'text-amber-100' : 'text-stone-600'}`}>
                      सिंहद्वार / तोरण द्वार
                    </span>
                  </button>

                  {/* SW */}
                  <button
                    onClick={() => setSelectedDir(MANDIR_DIRECTIONS.find(d => d.dir === 'SW')!)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer text-center ${
                      selectedDir.dir === 'SW'
                        ? 'bg-amber-600 text-white shadow-md border-amber-700 ring-2 ring-amber-300 scale-102'
                        : 'bg-white hover:bg-amber-50 text-stone-800 border-amber-200'
                    }`}
                  >
                    <span className="text-[11px] font-bold text-amber-900 uppercase">नैऋत्य (SW)</span>
                    <span className={`text-xs font-semibold line-clamp-2 mt-0.5 ${selectedDir.dir === 'SW' ? 'text-amber-100' : 'text-stone-600'}`}>
                      उपाश्रय / ओवरहेड टैंक
                    </span>
                  </button>

                  {/* South */}
                  <button
                    onClick={() => setSelectedDir(MANDIR_DIRECTIONS.find(d => d.dir === 'S')!)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer text-center ${
                      selectedDir.dir === 'S'
                        ? 'bg-amber-600 text-white shadow-md border-amber-700 ring-2 ring-amber-300 scale-102'
                        : 'bg-white hover:bg-amber-50 text-stone-800 border-amber-200'
                    }`}
                  >
                    <span className="text-[11px] font-bold text-amber-900 uppercase">दक्षिण (SOUTH)</span>
                    <span className={`text-xs font-semibold line-clamp-2 mt-0.5 ${selectedDir.dir === 'S' ? 'text-amber-100' : 'text-stone-600'}`}>
                      सीढ़ियां / भारी दीवार
                    </span>
                  </button>

                  {/* SE */}
                  <button
                    onClick={() => setSelectedDir(MANDIR_DIRECTIONS.find(d => d.dir === 'SE')!)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer text-center ${
                      selectedDir.dir === 'SE'
                        ? 'bg-amber-600 text-white shadow-md border-amber-700 ring-2 ring-amber-300 scale-102'
                        : 'bg-white hover:bg-amber-50 text-stone-800 border-amber-200'
                    }`}
                  >
                    <span className="text-[11px] font-bold text-amber-900 uppercase">आग्नेय (SE)</span>
                    <span className={`text-xs font-semibold line-clamp-2 mt-0.5 ${selectedDir.dir === 'SE' ? 'text-amber-100' : 'text-stone-600'}`}>
                      नाकोड़ा भैरव / रसोई
                    </span>
                  </button>
                </div>

                {/* Bottom Label */}
                <div className="text-center text-[11px] text-stone-500 font-medium pt-2">
                  किसी भी खंड पर टैप करें और विस्तृत शास्त्रोक्त नियम देखें
                </div>
              </div>

              {/* Quick Summary Note */}
              <div className="mt-4 p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-stone-700 flex items-start gap-2 max-w-md">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong>मूल सिद्धांत:</strong> ईशान (NE) और उत्तर को हल्का, नीचा, जलमय और खुला रखें; जबकि नैऋत्य (SW) और दक्षिण को भारी, ऊंचा और ठोस रखें।
                </span>
              </div>
            </div>

            {/* Right: Detailed Direction Analysis Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-amber-50/80 via-white to-amber-100/50 rounded-2xl border border-amber-300 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-amber-200 pb-3 mb-4 flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                    दिशा विश्लेषण (Direction Analysis)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-jain text-amber-950">
                    {selectedDir.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-medium text-stone-600 bg-white/90 border border-amber-200 px-2.5 py-1 rounded-full shadow-xs">
                    तत्व: <strong className="text-amber-900">{selectedDir.element}</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs font-semibold text-stone-600 mb-1">अधिष्ठाता / ऊर्जा क्षेत्र:</div>
                <div className="text-sm font-medium text-stone-800 bg-amber-100/50 px-3 py-1.5 rounded-lg border border-amber-200/80">
                  {selectedDir.deity}
                </div>
              </div>

              {/* Auspicious Mandir Placements */}
              <div className="mb-5">
                <h4 className="text-sm font-bold text-emerald-800 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>जिनालय में इस दिशा हेतु सर्वोत्तम स्थापत्य (Must Haves):</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                  {selectedDir.mandirIdealPlacements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white/80 p-2 rounded-lg border border-emerald-100 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span className="font-medium text-stone-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strict Prohibitions (निषेध) */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-rose-800 flex items-center gap-1.5 mb-2">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>सख्त निषेध एवं वर्जित निर्माण (Strict Prohibitions):</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                  {selectedDir.strictDonts.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-rose-50/60 p-2 rounded-lg border border-rose-200/70">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-rose-950">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation CTA */}
              <div className="pt-3 border-t border-amber-200/80 flex items-center justify-between flex-wrap gap-2 text-xs text-stone-600">
                <span>क्या आपके मंदिर के नक्शे में इस दिशा में कोई संशय है?</span>
                <a
                  href="https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20मंदिर%20के%20नक्शे%20में%20दिशा%20वास्तु%20दोष%20निवारण%20हेतु%20परामर्श%20चाहिए।"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 font-bold hover:underline flex items-center gap-1"
                >
                  <span>संजीव सिपानी जी से पूछें →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Mode 2: Sadhu-Sadhvi Movement Flow Visualizer Module */
        <SadhuMovementFlow />
      )}
    </div>
  );
};

