import React, { useState } from 'react';
import { VASTU_TOPICS, VASTU_CATEGORIES, VastuTopic } from '../data/vastuData';
import { Search, Compass, CheckCircle, XCircle, BookOpen, ExternalLink, MessageCircle, X } from 'lucide-react';

export const VastuCategoryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalTopic, setActiveModalTopic] = useState<VastuTopic | null>(null);

  const filteredTopics = VASTU_TOPICS.filter((topic) => {
    const matchesCat = selectedCategory === 'all' || topic.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      query === '' ||
      topic.title.toLowerCase().includes(query) ||
      topic.shortDesc.toLowerCase().includes(query) ||
      topic.direction.toLowerCase().includes(query) ||
      topic.detailedText.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Category Pills & Search Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-amber-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 w-full md:w-auto">
          {VASTU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-800 text-white shadow-sm border border-amber-900'
                  : 'bg-amber-50/80 hover:bg-amber-100 text-stone-700 border border-amber-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="खोजें (जैसे: वेदी, भैरव, टॉयलेट, पानी)..."
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all text-stone-800 placeholder-stone-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-stone-600 px-1">
        <span>
          कुल <strong>{filteredTopics.length}</strong> जिनालय वास्तु विषय उपलब्ध हैं
        </span>
        <span className="text-amber-800 font-medium">
          शास्त्र प्रमाण: वास्तुमण्डन, दीपार्णव व जैन प्रतिष्ठा कल्प
        </span>
      </div>

      {/* Grid of Vastu Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTopics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white rounded-xl border border-amber-200 hover:border-amber-400 transition-all hover:shadow-md p-5 flex flex-col justify-between group"
          >
            <div>
              {/* Badge & Direction */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                    topic.importance.includes('Critical')
                      ? 'bg-rose-50 text-rose-800 border-rose-200'
                      : 'bg-amber-50 text-amber-900 border-amber-200'
                  }`}
                >
                  {topic.importance}
                </span>
                <span className="text-xs text-stone-500 flex items-center gap-1 font-medium truncate max-w-[170px]" title={topic.direction}>
                  <Compass className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span className="truncate">{topic.direction}</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif-jain text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors mb-1.5">
                {topic.title}
              </h3>

              <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 mb-3">
                {topic.shortDesc}
              </p>

              {/* Key Rules list snippet */}
              <div className="space-y-1.5 mb-4 text-xs text-stone-700 bg-amber-50/40 p-2.5 rounded-lg border border-amber-100">
                {topic.rules.slice(0, 2).map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-700 font-bold">•</span>
                    <span className="line-clamp-2">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2 text-xs">
              <button
                onClick={() => setActiveModalTopic(topic)}
                className="text-amber-800 font-bold hover:text-amber-950 flex items-center gap-1 cursor-pointer py-1"
              >
                <span>विस्तृत नियम पढ़ें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20'${encodeURIComponent(
                  topic.title
                )}'%20के%20वास्तु%20नियमों%20पर%20परामर्श%20चाहिए।`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1"
                title="व्हाट्सएप पर इस विषय पर चर्चा करें"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>परामर्श लें</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal / Drawer when a topic is clicked */}
      {activeModalTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-7 border-2 border-amber-300 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalTopic(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8 mb-4">
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200 inline-block mb-1">
                {activeModalTopic.importance}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-jain text-stone-900">
                {activeModalTopic.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600 mt-2">
                <span className="flex items-center gap-1 font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  <Compass className="w-3.5 h-3.5" /> {activeModalTopic.direction}
                </span>
                <span>तत्व: <strong>{activeModalTopic.element}</strong></span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="prose text-xs sm:text-sm text-stone-700 leading-relaxed bg-amber-50/40 p-3.5 rounded-xl border border-amber-200/60 mb-5">
              {activeModalTopic.detailedText}
            </div>

            {/* Complete Rules */}
            <div className="mb-5">
              <h4 className="font-bold text-sm sm:text-base text-stone-900 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>शास्त्रोक्त सिद्धांत एवं वास्तु नियम (Shastric Rules):</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                {activeModalTopic.rules.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                    <span className="text-amber-700 font-bold mt-0.5">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Do's and Don'ts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              {/* Dos */}
              <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200">
                <h5 className="font-bold text-emerald-900 text-xs sm:text-sm flex items-center gap-1.5 mb-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>क्या करें (Auspicious):</span>
                </h5>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {activeModalTopic.dos.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Donts */}
              <div className="bg-rose-50/60 p-3.5 rounded-xl border border-rose-200">
                <h5 className="font-bold text-rose-900 text-xs sm:text-sm flex items-center gap-1.5 mb-2">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>क्या न करें (Strictly Prohibited):</span>
                </h5>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {activeModalTopic.donts.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Shastric Reference */}
            <div className="text-[11px] text-stone-500 italic mb-5 border-t border-stone-200 pt-2">
              शास्त्रीय संदर्भ: {activeModalTopic.shastricRef}
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-amber-200">
              <a
                href={`tel:9509061075`}
                className="w-full sm:w-auto px-4 py-2 bg-amber-800 text-white rounded-lg text-xs font-semibold hover:bg-amber-900 text-center"
              >
                संजीव सिपानी जी से फोन पर पूछें (9509061075)
              </a>

              <a
                href={`https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20'${encodeURIComponent(
                  activeModalTopic.title
                )}'%20के%20बारे%20में%20विस्तृत%20परामर्श%20चाहिए।`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 bg-emerald-700 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>व्हाट्सएप पर नक्शा भेजें</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
