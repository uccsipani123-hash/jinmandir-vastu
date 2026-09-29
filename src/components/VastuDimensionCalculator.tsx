import React, { useState } from 'react';
import { 
  Ruler, 
  Calculator, 
  Building2, 
  ArrowUp, 
  CheckCircle2, 
  AlertTriangle, 
  Printer, 
  MessageCircle, 
  RotateCcw, 
  Sparkles,
  Layers,
  Compass,
  Info
} from 'lucide-react';

type UnitType = 'feet' | 'gaj' | 'meter' | 'hasta';

export const VastuDimensionCalculator: React.FC = () => {
  // Plot inputs (default 60 ft x 40 ft = 2400 sq ft)
  const [length, setLength] = useState<number>(60);
  const [breadth, setBreadth] = useState<number>(40);
  const [unit, setUnit] = useState<UnitType>('feet');
  const [shikharStyle, setShikharStyle] = useState<'standard' | 'grand' | 'maru_gurjar'>('maru_gurjar');
  const [facingDirection, setFacingDirection] = useState<'east' | 'north'>('east');

  // Conversion factor to feet
  const toFeet = (val: number, u: UnitType): number => {
    switch (u) {
      case 'feet': return val;
      case 'gaj': return val * 3; // 1 gaj = 3 feet
      case 'meter': return val * 3.28084;
      case 'hasta': return val * 1.5; // 1 hasta = 1.5 feet (24 angul)
      default: return val;
    }
  };

  const fromFeet = (valInFeet: number, targetUnit: UnitType): number => {
    switch (targetUnit) {
      case 'feet': return Math.round(valInFeet * 10) / 10;
      case 'gaj': return Math.round((valInFeet / 3) * 10) / 10;
      case 'meter': return Math.round((valInFeet / 3.28084) * 10) / 10;
      case 'hasta': return Math.round((valInFeet / 1.5) * 10) / 10;
      default: return valInFeet;
    }
  };

  const lengthInFeet = toFeet(length, unit);
  const breadthInFeet = toFeet(breadth, unit);
  const totalAreaSqFeet = lengthInFeet * breadthInFeet;
  const ratio = lengthInFeet > 0 && breadthInFeet > 0 ? (lengthInFeet / breadthInFeet).toFixed(2) : '1.00';

  // Traditional Shwetambar Calculations:
  // 1. Garbhagriha Inner Span (गर्भगृह अंतः विस्तार):
  // According to Diparnava & Vastu Mandana:
  // For temple plot, the inner Garbhagriha is ideally ~ 22% to 26% of plot width (समचतुरस्र / वर्गाकार).
  const garbhagrihaInnerFeet = Math.max(7, Math.round(breadthInFeet * 0.24 * 10) / 10);
  // Wall thickness (भित्ति जाड़ाई): ~ 1/4th of Garbhagriha inner span or min 2.25 ft
  const wallThicknessFeet = Math.max(2.25, Math.round((garbhagrihaInnerFeet * 0.25) * 10) / 10);
  const garbhagrihaOuterFeet = Math.round((garbhagrihaInnerFeet + (wallThicknessFeet * 2)) * 10) / 10;

  // 2. Mool Vedi Dimensions (मूल वेदी):
  // Vedi width is ideally 1/3 to 2/5 of Garbhagriha inner width
  const vediWidthFeet = Math.round((garbhagrihaInnerFeet * 0.38) * 10) / 10;
  const vediDepthFeet = Math.round((garbhagrihaInnerFeet * 0.26) * 10) / 10;
  // Vedi height (पीठिका ऊंचाई) - 21 to 31 Angul (1 Angul = 0.75 in = 0.0625 ft) -> typically 3.25 to 4.25 ft
  const vediHeightFeet = Math.round(Math.min(4.5, Math.max(3.0, garbhagrihaInnerFeet * 0.32)) * 10) / 10;
  const vediHeightAngul = Math.round(vediHeightFeet * 12 / 0.75);

  // Clear Pradakshina Path (परिक्रमा पथ):
  const pradakshinaClearanceFeet = Math.round(((garbhagrihaInnerFeet - vediWidthFeet) / 2) * 10) / 10;

  // 3. Recommended Moolnayak Tirthankar Pratima Height (प्रतिमा अंगुल प्रमाण):
  // Based on odd auspicious Angul (31, 35, 41, 51, 61, 71 Angul)
  let pratimaAngul = 31;
  if (garbhagrihaInnerFeet >= 16) pratimaAngul = 61;
  else if (garbhagrihaInnerFeet >= 13) pratimaAngul = 51;
  else if (garbhagrihaInnerFeet >= 10) pratimaAngul = 41;
  else pratimaAngul = 31;
  const pratimaHeightInches = Math.round(pratimaAngul * 0.75);

  // 4. Shikhar Height (प्रसाद लक्षण - शिखर ऊंचाई):
  // In Maru-Gurjar Shwetambar style:
  // Standard = 2x Garbhagriha outer width
  // Grand = 2.25x (सवा दो गुनी)
  // Maru-Gurjar classical = 2.5x (ढाई गुनी)
  let shikharMultiplier = 2.5;
  if (shikharStyle === 'standard') shikharMultiplier = 2.0;
  else if (shikharStyle === 'grand') shikharMultiplier = 2.25;

  const shikharTotalHeightFeet = Math.round((garbhagrihaOuterFeet * shikharMultiplier) * 10) / 10;
  const kalashHeightFeet = Math.round((shikharTotalHeightFeet * 0.16) * 10) / 10;
  const dhwajadandLengthHasta = shikharTotalHeightFeet > 40 ? 11 : 9; // 9 or 11 Hasta
  const dhwajadandLengthFeet = dhwajadandLengthHasta * 1.5;

  // 5. Rangmandap (रंगमंडप / सभामंडप):
  const rangmandapWidthFeet = Math.round((garbhagrihaOuterFeet * 1.6) * 10) / 10;
  const rangmandapLengthFeet = Math.round((garbhagrihaOuterFeet * 1.8) * 10) / 10;

  // 6. Open Spaces (उत्तर-पूर्व बनाम दक्षिण-पश्चिम प्रांगण):
  const northEastOpenSpaceRatio = '65%';
  const southWestOpenSpaceRatio = '35%';

  // 7. Ayadi Shadvarga Indicator (आयादि षड्वर्ग):
  // Pind = Length * Breadth in Hasta
  const lengthHasta = lengthInFeet / 1.5;
  const breadthHasta = breadthInFeet / 1.5;
  const pind = Math.round(lengthHasta * breadthHasta);
  const ayaRemainder = (pind * 8) % 12;
  const yoniRemainder = (pind * 3) % 8;

  const YONI_NAMES: Record<number, { name: string; quality: string; auspicious: boolean }> = {
    1: { name: 'ध्वज योनि (पूर्व - सर्वोत्तम)', quality: 'अक्षय कीर्ति, श्रीवृद्धि एवं धर्म प्रभावना', auspicious: true },
    2: { name: 'धूम्र योनि (आग्नेय - मध्यम)', quality: 'अग्नि शांति आवश्यक', auspicious: false },
    3: { name: 'सिंह योनि (दक्षिण - शुभ)', quality: 'अभेद्य रक्षा, पराक्रम एवं विजय', auspicious: true },
    4: { name: 'श्वान योनि (नैऋत्य - त्याज्य)', quality: 'अस्थिरता', auspicious: false },
    5: { name: 'वृषभ योनि (पश्चिम - सर्वोत्तम)', quality: 'स्थिर समृद्धि, धन-धान्य एवं संघ ऐक्य', auspicious: true },
    6: { name: 'खर योनि (वायव्य - त्याज्य)', quality: 'व्यय अधिक', auspicious: false },
    7: { name: 'गज योनि (उत्तर - सर्वोत्तम)', quality: 'ज्ञान, ऐश्वर्य, कुबेर कृपा एवं मोक्ष मार्ग', auspicious: true },
    0: { name: 'ध्वांक योनि (त्याज्य)', quality: 'कलह कारक', auspicious: false },
  };

  const currentYoni = YONI_NAMES[yoniRemainder] || YONI_NAMES[1];

  const resetDefaults = () => {
    setLength(60);
    setBreadth(40);
    setUnit('feet');
    setShikharStyle('maru_gurjar');
    setFacingDirection('east');
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-amber-300 p-5 sm:p-7 lg:p-9 shadow-md space-y-8">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-amber-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
            <Calculator className="w-4 h-4 text-amber-700" />
            <span>दीपार्णव एवं वास्तुमण्डन प्रसाद लक्षण विज्ञान</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-jain text-stone-900">
            जैन मंदिर वास्तु माप एवं अनुपात कैलकुलेटर (Vastu Dimension Calculator)
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
            अपने मंदिर भूखंड (Plot) की लंबाई व चौड़ाई दर्ज करें। यह टूल श्वेतांबर जैन आगम एवं मारु-गुर्जर शिल्पशास्त्र अनुसार गर्भगृह, मूल वेदी, शिखर ऊंचाई व कलश का शुद्ध अनुपात स्वतः निकालेगा।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={resetDefaults}
            className="p-2 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-600 text-xs font-semibold flex items-center gap-1 cursor-pointer"
            title="रीसेट करें"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">रीसेट</span>
          </button>

          <button
            onClick={() => window.print()}
            className="no-print px-3.5 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-950 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>माप शीट प्रिंट करें</span>
          </button>
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="bg-gradient-to-br from-amber-50/70 via-white to-amber-100/40 p-5 sm:p-6 rounded-2xl border border-amber-300 shadow-inner">
        <h3 className="font-serif-jain font-bold text-base sm:text-lg text-amber-950 mb-4 flex items-center gap-2">
          <Ruler className="w-5 h-5 text-amber-700" />
          <span>भूखंड इनपुट एवं माप प्रणाली (Plot Parameters)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {/* Length */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              भूखंड की लंबाई (Length) *
            </label>
            <div className="relative">
              <input
                type="number"
                min="10"
                max="500"
                value={length}
                onChange={(e) => setLength(Math.max(1, Number(e.target.value)))}
                className="w-full text-sm font-bold p-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 uppercase">
                {unit}
              </span>
            </div>
          </div>

          {/* Breadth */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              भूखंड की चौड़ाई (Breadth) *
            </label>
            <div className="relative">
              <input
                type="number"
                min="10"
                max="500"
                value={breadth}
                onChange={(e) => setBreadth(Math.max(1, Number(e.target.value)))}
                className="w-full text-sm font-bold p-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 uppercase">
                {unit}
              </span>
            </div>
          </div>

          {/* Unit Selector */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              माप इकाई (Unit)
            </label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as UnitType)}
              className="w-full text-xs font-semibold p-2.5 rounded-xl bg-white border border-stone-300 text-stone-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            >
              <option value="feet">फुट (Feet - प्रचलित)</option>
              <option value="gaj">गज (Gaj - 3 ft)</option>
              <option value="hasta">हाथ / हस्त (Hasta - 1.5 ft)</option>
              <option value="meter">मीटर (Meters)</option>
            </select>
          </div>

          {/* Shikhar Style Ratio */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              शिखर स्थापत्य शैली
            </label>
            <select
              value={shikharStyle}
              onChange={(e) => setShikharStyle(e.target.value as any)}
              className="w-full text-xs font-semibold p-2.5 rounded-xl bg-white border border-stone-300 text-stone-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            >
              <option value="maru_gurjar">मारु-गुर्जर शैली (2.5x - सर्वोत्तम)</option>
              <option value="grand">सवा दो गुनी ऊंचाई (2.25x)</option>
              <option value="standard">मानक नागर शैली (2.0x)</option>
            </select>
          </div>

          {/* Facing Direction */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              मंदिर का मुख्य मुख
            </label>
            <select
              value={facingDirection}
              onChange={(e) => setFacingDirection(e.target.value as any)}
              className="w-full text-xs font-semibold p-2.5 rounded-xl bg-white border border-stone-300 text-stone-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            >
              <option value="east">पूर्वाभिमुख (East Facing - सर्वोत्तम)</option>
              <option value="north">उत्तराभिमुख (North Facing - शुभ)</option>
            </select>
          </div>
        </div>

        {/* Plot Proportion Analysis Strip */}
        <div className="mt-4 pt-3 border-t border-amber-200/80 flex flex-wrap items-center justify-between text-xs text-stone-700 gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span>
              कुल क्षेत्रफल: <strong className="text-amber-950 font-bold">{Math.round(totalAreaSqFeet)} वर्गफुट</strong> ({Math.round(totalAreaSqFeet / 9)} वर्गगज)
            </span>
            <span>
              लंबाई-चौड़ाई अनुपात: <strong className="text-amber-950 font-bold">{ratio}:1</strong>
            </span>
            <span>
              भूखंड आकृति: {Number(ratio) <= 1.25 ? (
                <span className="text-emerald-700 font-bold">समचतुरस्र / वर्गाकार (सर्वोत्तम)</span>
              ) : Number(ratio) <= 2.0 ? (
                <span className="text-blue-700 font-bold">आयताकार (शुभ)</span>
              ) : (
                <span className="text-amber-800 font-bold">अत्यधिक लंबा (वास्तु विभाजन आवश्यक)</span>
              )}
            </span>
          </div>

          {/* Ayadi Yoni */}
          <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1 rounded-full border border-amber-200 shadow-2xs">
            <span className="text-stone-500 font-medium">आयादि योनि:</span>
            <strong className={currentYoni.auspicious ? 'text-emerald-700 font-bold' : 'text-amber-800 font-bold'}>
              {currentYoni.name}
            </strong>
          </div>
        </div>
      </div>

      {/* 4 Core Calculation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Garbhagriha */}
        <div className="bg-gradient-to-br from-amber-50/60 to-white rounded-2xl border-2 border-amber-300 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                हृदय कमल
              </span>
              <Building2 className="w-4 h-4 text-amber-700" />
            </div>
            <h4 className="font-serif-jain font-bold text-lg text-amber-950">
              1. गर्भगृह माप (Sanctum)
            </h4>
            <p className="text-[11px] text-stone-600 mb-3">
              समचतुरस्र (वर्गाकार) अंतः विस्तार एवं भित्ति जाड़ाई
            </p>

            <div className="space-y-2 text-xs text-stone-800 bg-white/80 p-3 rounded-xl border border-amber-100">
              <div className="flex justify-between">
                <span>अंतः विस्तार (चौड़ाई):</span>
                <strong className="text-amber-900 font-bold">
                  {fromFeet(garbhagrihaInnerFeet, unit)} {unit} ({garbhagrihaInnerFeet} ft)
                </strong>
              </div>
              <div className="flex justify-between">
                <span>भित्ति मोटाई (दीवार):</span>
                <strong className="text-stone-900 font-bold">
                  {fromFeet(wallThicknessFeet, unit)} {unit} ({wallThicknessFeet} ft)
                </strong>
              </div>
              <div className="flex justify-between border-t border-stone-100 pt-1.5">
                <span>बाह्य विस्तार (Outer):</span>
                <strong className="text-amber-950 font-bold">
                  {fromFeet(garbhagrihaOuterFeet, unit)} {unit} ({garbhagrihaOuterFeet} ft)
                </strong>
              </div>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-stone-500 italic">
            नियम: गर्भगृह का अंतः विस्तार समचतुरस्र (1:1) होना चाहिए।
          </div>
        </div>

        {/* Card 2: Mool Vedi */}
        <div className="bg-gradient-to-br from-amber-50/60 to-white rounded-2xl border-2 border-amber-300 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                सिंहासन पीठिका
              </span>
              <Layers className="w-4 h-4 text-amber-700" />
            </div>
            <h4 className="font-serif-jain font-bold text-lg text-amber-950">
              2. मूल वेदी माप (Vedi)
            </h4>
            <p className="text-[11px] text-stone-600 mb-3">
              मकराना संगमरमर वेदी व परिक्रमा निकासी
            </p>

            <div className="space-y-2 text-xs text-stone-800 bg-white/80 p-3 rounded-xl border border-amber-100">
              <div className="flex justify-between">
                <span>वेदी की चौड़ाई (Front):</span>
                <strong className="text-amber-900 font-bold">
                  {fromFeet(vediWidthFeet, unit)} {unit} ({vediWidthFeet} ft)
                </strong>
              </div>
              <div className="flex justify-between">
                <span>वेदी की गहराई (Depth):</span>
                <strong className="text-stone-900 font-bold">
                  {fromFeet(vediDepthFeet, unit)} {unit} ({vediDepthFeet} ft)
                </strong>
              </div>
              <div className="flex justify-between">
                <span>वेदी ऊंचाई (Height):</span>
                <strong className="text-amber-900 font-bold">
                  {vediHeightFeet} ft ({vediHeightAngul} अंगुल)
                </strong>
              </div>
              <div className="flex justify-between border-t border-stone-100 pt-1.5">
                <span>परिक्रमा निकासी:</span>
                <strong className="text-emerald-700 font-bold">
                  {pradakshinaClearanceFeet} ft निर्बाध पथ
                </strong>
              </div>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-stone-500 italic">
            नियम: वेदी रंगमंडप से 21 से 31 अंगुल ऊंची होनी चाहिए।
          </div>
        </div>

        {/* Card 3: Moolnayak Pratima */}
        <div className="bg-gradient-to-br from-amber-50/60 to-white rounded-2xl border-2 border-amber-300 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                शास्त्रोक्त अंगुल
              </span>
              <Sparkles className="w-4 h-4 text-amber-700" />
            </div>
            <h4 className="font-serif-jain font-bold text-lg text-amber-950">
              3. प्रतिमा प्रमाण (Pratima)
            </h4>
            <p className="text-[11px] text-stone-600 mb-3">
              पद्मासन/कायोत्सर्ग नासाग्र दृष्टि माप
            </p>

            <div className="space-y-2 text-xs text-stone-800 bg-white/80 p-3 rounded-xl border border-amber-100">
              <div className="flex justify-between">
                <span>आदर्श अंगुल प्रमाण:</span>
                <strong className="text-amber-900 font-bold text-sm">
                  {pratimaAngul} अंगुल (विषम प्रमाण)
                </strong>
              </div>
              <div className="flex justify-between">
                <span>प्रतिमा की ऊंचाई:</span>
                <strong className="text-stone-900 font-bold">
                  लगभग {pratimaHeightInches} इंच ({(pratimaHeightInches / 12).toFixed(1)} ft)
                </strong>
              </div>
              <div className="flex justify-between border-t border-stone-100 pt-1.5">
                <span>दृष्टि संरेखण:</span>
                <strong className="text-emerald-700 font-bold">
                  {facingDirection === 'east' ? 'पूर्वाभिमुख (East)' : 'उत्तराभिमुख (North)'}
                </strong>
              </div>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-stone-500 italic">
            नियम: प्रतिमा का नाप सदैव 31, 35, 41, 51 आदि विषम अंगुल में हो।
          </div>
        </div>

        {/* Card 4: Shikhar & Kalash */}
        <div className="bg-gradient-to-br from-amber-50/60 to-white rounded-2xl border-2 border-amber-300 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                सर्वोच्च शिखर
              </span>
              <ArrowUp className="w-4 h-4 text-amber-700" />
            </div>
            <h4 className="font-serif-jain font-bold text-lg text-amber-950">
              4. शिखर एवं कलश (Shikhar)
            </h4>
            <p className="text-[11px] text-stone-600 mb-3">
              प्रसाद लक्षण, आमलक एवं ध्वजादंड
            </p>

            <div className="space-y-2 text-xs text-stone-800 bg-white/80 p-3 rounded-xl border border-amber-100">
              <div className="flex justify-between">
                <span>कुल शिखर ऊंचाई:</span>
                <strong className="text-amber-900 font-bold text-sm">
                  {shikharTotalHeightFeet} ft ({fromFeet(shikharTotalHeightFeet, unit)} {unit})
                </strong>
              </div>
              <div className="flex justify-between">
                <span>स्वर्ण कलश ऊंचाई:</span>
                <strong className="text-stone-900 font-bold">
                  {kalashHeightFeet} ft (आमलसार सहित)
                </strong>
              </div>
              <div className="flex justify-between border-t border-stone-100 pt-1.5">
                <span>ध्वजादंड लंबाई:</span>
                <strong className="text-amber-950 font-bold">
                  {dhwajadandLengthHasta} हाथ ({dhwajadandLengthFeet} ft)
                </strong>
              </div>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-stone-500 italic">
            नियम: शिखर गर्भगृह विस्तार की {shikharMultiplier}x गुनी ऊंचाई का हो।
          </div>
        </div>
      </div>

      {/* Visual Architectural Proportional Diagram */}
      <div className="bg-white rounded-2xl border border-amber-200 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h4 className="font-serif-jain font-bold text-lg sm:text-xl text-stone-900">
              प्रसाद लक्षण रेखाचित्र (Architectural Elevation Diagram)
            </h4>
            <p className="text-stone-600 text-xs mt-0.5">
              कैलकुलेट किए गए अनुपातों का ऊर्ध्वाकार (Vertical Elevation) एवं अनुप्रस्थ (Plan) दृश्य:
            </p>
          </div>
          <span className="text-xs font-semibold text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 shrink-0">
            शैली: {shikharStyle === 'maru_gurjar' ? 'मारु-गुर्जर (2.5x)' : shikharStyle === 'grand' ? 'सवा दो गुनी (2.25x)' : 'मानक नागर (2.0x)'}
          </span>
        </div>

        {/* SVG Schematic Elevation */}
        <div className="w-full max-w-2xl mx-auto aspect-[16/9] bg-gradient-to-b from-amber-50/50 to-stone-50 rounded-2xl border border-amber-200 p-4 relative flex items-center justify-center">
          <svg viewBox="0 0 400 240" className="w-full h-full select-none">
            {/* Ground Line */}
            <line x1="20" y1="215" x2="380" y2="215" stroke="#78350f" strokeWidth="2.5" />
            <text x="35" y="228" fontSize="8" fill="#78350f" fontWeight="bold">धरातल (Ground Level)</text>

            {/* Rangmandap (Front lower dome) */}
            <rect x="210" y="145" width="110" height="70" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
            {/* Rangmandap Samvarna (Roof Pyramid) */}
            <polygon points="265,110 205,145 325,145" fill="#fde68a" stroke="#b45309" strokeWidth="1.5" />
            <text x="265" y="175" fontSize="9" textAnchor="middle" fill="#78350f" fontWeight="bold">रंगमंडप</text>
            <text x="265" y="188" fontSize="7.5" textAnchor="middle" fill="#92400e">{rangmandapWidthFeet} ft चौड़ाई</text>

            {/* Garbhagriha Lower Sanctum Cube */}
            <rect x="70" y="130" width="115" height="85" fill="#fef9c3" stroke="#92400e" strokeWidth="2" />
            <text x="127" y="175" fontSize="10" textAnchor="middle" fill="#78350f" fontWeight="bold">गर्भगृह</text>
            <text x="127" y="188" fontSize="8" textAnchor="middle" fill="#92400e">{garbhagrihaOuterFeet} ft विस्तार</text>

            {/* Mool Vedi Inside Garbhagriha */}
            <rect x="105" y="180" width="45" height="35" fill="#fbbf24" stroke="#b45309" strokeWidth="1.2" />
            <text x="127" y="200" fontSize="7.5" textAnchor="middle" fill="#78350f" fontWeight="bold">मूल वेदी ({vediHeightFeet} ft)</text>

            {/* Shikhar (Curvilinear spire above Garbhagriha) */}
            <path
              d="M 70 130 C 82 85, 110 40, 127 30 C 144 40, 172 85, 185 130 Z"
              fill="url(#shikharGoldGrad)"
              stroke="#b45309"
              strokeWidth="2"
            />

            {/* Urushringa (Miniature spires) */}
            <path d="M 70 130 C 76 105, 90 85, 98 80 C 104 95, 105 115, 105 130 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
            <path d="M 185 130 C 179 105, 165 85, 157 80 C 151 95, 150 115, 150 130 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />

            {/* Amalasara (Amlaka) */}
            <ellipse cx="127" cy="30" rx="14" ry="4.5" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />

            {/* Kalash */}
            <path d="M 122 30 C 122 23, 132 23, 132 30 Z" fill="#d97706" stroke="#78350f" strokeWidth="1.2" />
            <ellipse cx="127" cy="22" rx="4" ry="2" fill="#fbbf24" stroke="#78350f" strokeWidth="1" />

            {/* Dhwajadand and Dhwaja */}
            <line x1="127" y1="20" x2="127" y2="4" stroke="#92400e" strokeWidth="1.8" />
            <polygon points="127,5 155,10 127,15" fill="#ea580c" stroke="#c2410c" strokeWidth="0.8" />
            <text x="145" y="9" fontSize="6.5" fill="#ffffff" fontWeight="bold">卐</text>

            {/* Height Indicator Dimension Line on Left */}
            <line x1="45" y1="215" x2="45" y2="20" stroke="#b45309" strokeWidth="1.2" strokeDasharray="3 2" />
            <polygon points="45,18 42,24 48,24" fill="#b45309" />
            <polygon points="45,217 42,211 48,211" fill="#b45309" />
            <text x="40" y="115" fontSize="8.5" textAnchor="end" fill="#9a3412" fontWeight="bold">
              शिखर: {shikharTotalHeightFeet} ft
            </text>

            {/* Definition for gold gradient */}
            <defs>
              <linearGradient id="shikharGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Dimension Table & Shastric Reference */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
          <div className="bg-amber-50/60 p-3.5 rounded-xl border border-amber-200">
            <h5 className="font-bold text-amber-950 mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>श्वेतांबर प्रासाद अनुपात सारांश (Summary):</span>
            </h5>
            <ul className="space-y-1">
              <li>• गर्भगृह अंतः विस्तार: <strong>{garbhagrihaInnerFeet} ft x {garbhagrihaInnerFeet} ft (समचतुरस्र)</strong></li>
              <li>• मूल वेदी: <strong>{vediWidthFeet} ft चौड़ी, {vediHeightFeet} ft ऊंची ({vediHeightAngul} अंगुल)</strong></li>
              <li>• परिक्रमा निर्बाध निकासी: <strong>{pradakshinaClearanceFeet} फीट</strong> चारों ओर</li>
              <li>• शिखर सर्वोच्च ऊंचाई: <strong>{shikharTotalHeightFeet} फीट</strong> (गर्भगृह का {shikharMultiplier} गुना)</li>
              <li>• ध्वजादंड: <strong>{dhwajadandLengthHasta} हस्त</strong> ({dhwajadandLengthFeet} फीट)</li>
            </ul>
          </div>

          <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
            <h5 className="font-bold text-stone-900 mb-1.5 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-700" />
              <span>संजीव सिपानी जी की शास्त्रीय सम्मति:</span>
            </h5>
            <p className="leading-relaxed text-[11px] text-stone-600">
              "यदि भूखंड का आकार गोमुखी हो अथवा कोई कोना बढ़ा हुआ हो, तो निर्माण प्रारंभ से पूर्व नक्शे का रेखांकन शुद्ध समकोण पर होना चाहिए। शिखर की छाया जहां तक जाती है, वह पूरा क्षेत्र पवित्र देवभूमि माना जाता है।"
            </p>
            <div className="mt-2 text-right">
              <a
                href={`https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मेरे%20भूखंड%20(${length}x${breadth}%20${unit})%20का%20गर्भगृह%20विस्तार%20${garbhagrihaInnerFeet}ft%20तथा%20शिखर%20ऊंचाई%20${shikharTotalHeightFeet}ft%20आई%20है।%20कृपया%20नक्शा%20प्रमाणित%20करें।`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-700 font-bold hover:underline text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>यह माप व्हाट्सएप पर भेजकर प्रमाणित करवाएं →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
