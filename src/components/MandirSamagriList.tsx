import React, { useState } from 'react';
import { 
  Package, 
  CheckSquare, 
  Square, 
  Printer, 
  MessageCircle, 
  Sparkles, 
  Layers, 
  Droplets, 
  RotateCcw,
  Search,
  Filter
} from 'lucide-react';

interface SamagriCategory {
  id: string;
  categoryName: string;
  items: {
    id: string;
    name: string;
    quantity: string;
    usage: string;
    importance: 'अनिवार्य' | 'शुभ' | 'ऐच्छिक';
  }[];
}

export const MandirSamagriList: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const SAMAGRI_CATEGORIES: SamagriCategory[] = [
    {
      id: 'daily-puja',
      categoryName: '१. नित्य देव पूजा द्रव्य एवं सामग्री (Daily Puja)',
      items: [
        { id: 'kesar', name: 'कश्मीरी शुद्ध केसर (Kesar)', quantity: '50 से 100 ग्राम', usage: 'प्रतिमा जी की नवांगी अंगपूजा एवं प्रक्षाल', importance: 'अनिवार्य' },
        { id: 'chandan', name: 'मलयागिरि सफेद चंदन की लकड़ी/पाउडर', quantity: '250 ग्राम', usage: 'केसर के साथ घिसकर अंगार्चन', importance: 'अनिवार्य' },
        { id: 'baras', name: 'भीमसेनी शुद्ध कपूर व बरास', quantity: '100 ग्राम', usage: 'प्रक्षाल जल एवं धूप प्रज्वलन', importance: 'अनिवार्य' },
        { id: 'attar', name: 'प्राकृतिक गुलाब / मोगरा अत्तर (Attar - अल्कोहल रहित)', quantity: '2 शीशी', usage: 'भगवान के श्रीअंग पर सुवास', importance: 'अनिवार्य' },
        { id: 'dhoop', name: 'शुद्ध दशांग धूप / अगरबत्ती (अहिंसक)', quantity: '1 पैकेट', usage: 'गर्भगृह में धूप खेवना', importance: 'अनिवार्य' },
        { id: 'ghee', name: 'विशुद्ध गाय का देसी घी', quantity: '2 से 5 किलोग्राम', usage: 'अखंड दीप एवं आरती प्रज्वलन', importance: 'अनिवार्य' },
        { id: 'akshat', name: 'साबुत बासमती चावल (अक्षत - अखंडित)', quantity: '5 किलोग्राम', usage: 'साथिया, तीन पुंज व सिद्धशिला निर्माण', importance: 'अनिवार्य' },
        { id: 'naivedya', name: 'शुद्ध मोदक / मिश्री / सूखे मेवे (बादाम, काजू, पिस्ता)', quantity: '1 किलोग्राम', usage: 'नैवेद्य पूजा अर्पण', importance: 'अनिवार्य' },
        { id: 'fruits', name: 'ऋतुफल (सेब, अनार, नारियल, मोसंबी)', quantity: 'यथाशक्ति', usage: 'फल पूजा अर्पण', importance: 'अनिवार्य' },
        { id: 'flowers', name: 'शुद्ध ताजे सुगंधित पुष्प (गुलाब, मोगरा, चंपा)', quantity: 'ताजे नित्य', usage: 'अष्टप्रकारी पुष्प पूजा', importance: 'अनिवार्य' },
        { id: 'prasuk-water', name: 'जीवदया युक्त छना हुआ प्रासुक जल', quantity: 'प्रतिदिन ताजा', usage: 'प्रक्षाल एवं चरणामृत', importance: 'अनिवार्य' }
      ]
    },
    {
      id: 'vedi-utensils',
      categoryName: '२. वेदी, गर्भगृह उपकरण एवं धातु पात्र (Vedi Utensils)',
      items: [
        { id: 'puja-thal', name: 'चांदी अथवा पीतल की बड़ी पूजा थालियां', quantity: '5 से 11 नग', usage: 'अष्टप्रकारी द्रव्य अर्पण', importance: 'अनिवार्य' },
        { id: 'katori-lotas', name: 'चांदी/पीतल की कटोरियां व आचमन लोटे', quantity: '11 से 21 नग', usage: 'केसर, चंदन, अक्षत व जल पात्र', importance: 'अनिवार्य' },
        { id: 'snatra-patra', name: 'स्नात्र पूजा थाल एवं मेरु पर्वत प्रतिकृति', quantity: '1 सेट', usage: 'स्नात्र महोत्सव एवं अभिषेक', importance: 'अनिवार्य' },
        { id: 'chamvar-pair', name: 'शुद्ध रेशमी चंवर युगल (Chamvar Pair)', quantity: '2 या 4 नग', usage: 'भगवान के दोनों पार्श्वों में चंवर ढोरना', importance: 'अनिवार्य' },
        { id: 'chhatratraya', name: 'स्वर्ण/रजत आच्छादित तीन छत्र (छत्रत्रय)', quantity: '1 सेट (मूलनायक हेतु)', usage: 'प्रतिमा के शीर्ष पर छत्र प्रतिष्ठा', importance: 'अनिवार्य' },
        { id: 'bhamandal', name: 'स्वर्ण अथवा नक्काशीदार रजत भामंडल (प्रभामंडल)', quantity: '1 नग', usage: 'प्रतिमा के पृष्ठ भाग पर ऊर्जा चक्र', importance: 'अनिवार्य' },
        { id: 'ashtamangal-set', name: 'अष्टमंगल धातु पट्टिका (स्वस्तिक, श्रीवत्स, कलश आदि)', quantity: '1 सेट', usage: 'वेदी व तोरण द्वार पर स्थापन', importance: 'अनिवार्य' },
        { id: 'aarti-lamps', name: '108 दीप अथवा 5 दीप की भव्य महाआरती थालियां', quantity: '2 सेट', usage: 'सांध्यकालीन आरती', importance: 'अनिवार्य' },
        { id: 'mangal-deepak', name: 'मंगलदीपक धातु पात्र एवं काष्ठ स्टैंड', quantity: '2 नग', usage: 'आरती उपरांत मंगलदीपक', importance: 'अनिवार्य' },
        { id: 'bells-ghanta', name: 'पीतल का विशाल महाघंटा एवं घड़ियाल', quantity: '1-1 नग', usage: 'आरती एवं पूजा नाद', importance: 'अनिवार्य' },
        { id: 'shankh', name: 'दक्षिणावर्ती पवित्र शंख', quantity: '1 नग', usage: 'मंगल शंखनाद', importance: 'शुभ' }
      ]
    },
    {
      id: 'pratishtha-samagri',
      categoryName: '३. प्राण प्रतिष्ठा, अंजनशलाका एवं ध्वजा सामग्री (Pratishtha)',
      items: [
        { id: 'navratna', name: 'नवरत्न एवं सुवर्ण-रजत शलाकाएं', quantity: '1 सेट', usage: 'वेदी आधारशिला एवं अंजन संस्कार', importance: 'अनिवार्य' },
        { id: '108-kalash', name: 'तांबे/पीतल के 108 पावन मंगल कलश', quantity: '108 नग', usage: 'महा शांतिस्नान एवं कुंभ स्थापन', importance: 'अनिवार्य' },
        { id: 'pancharangi-dhwaja', name: 'पंचरंगी रेशमी जैन ध्वजा (5 रंगों वाली)', quantity: '2 से 5 नग', usage: 'शिखर पर ध्वजारोहण', importance: 'अनिवार्य' },
        { id: 'dhwajadand', name: 'सागवान अथवा अष्टधातु का 9 या 11 हाथ का ध्वजादंड', quantity: '1 नग', usage: 'शिखर पर ध्वजादंड प्रतिष्ठा', importance: 'अनिवार्य' },
        { id: 'swarn-kalash', name: 'शिखर हेतु स्वर्ण आवरण युक्त पूर्ण कलश', quantity: '1 नग', usage: 'शिखर शीर्ष पर स्थापन', importance: 'अनिवार्य' },
        { id: 'puja-vastra', name: 'शुद्ध श्वेत सूती धोती, दुपट्टा एवं मुखपत्ती', quantity: '21 से 51 सेट', usage: 'प्रतिष्ठा लाभार्थी श्रावकों हेतु', importance: 'अनिवार्य' },
        { id: 'sukhadi-samagri', name: 'देसी घी, गुड़ एवं गेहूं का आटा (सुखड़ी महाप्रसाद)', quantity: '50 से 100 किग्रा', usage: 'नाकोड़ा भैरव एवं मणिभद्र वीर भोग', importance: 'अनिवार्य' }
      ]
    }
  ];

  const handleToggle = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    setCheckedItems({});
  };

  const filteredCategories = SAMAGRI_CATEGORIES.map(cat => {
    if (selectedCat !== 'all' && cat.id !== selectedCat) return null;
    const items = cat.items.filter(item => 
      searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.usage.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, items };
  }).filter(Boolean) as SamagriCategory[];

  const totalItemsCount = SAMAGRI_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="bg-white rounded-3xl border-2 border-amber-300 p-5 sm:p-7 lg:p-9 shadow-md space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-amber-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
            <Package className="w-4 h-4 text-amber-700" />
            <span>श्वेतांबर जिनालय पूजन एवं प्रतिष्ठा सामग्री भंडार</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-jain text-stone-900">
            जैन मंदिर सामग्री सूची एवं चेकलिस्ट (Mandir Samagri List)
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
            नित्य प्रक्षाल, अष्टप्रकारी पूजा, वेदी उपकरण, चंवर-छत्रत्रय, महाआरती एवं प्रतिष्ठा अनुष्ठान हेतु आवश्यक संपूर्ण सामग्री की प्रामाणिक सूची।
          </p>
        </div>

        {/* Progress & Print */}
        <div className="flex items-center gap-3">
          <div className="bg-amber-50 border border-amber-300 px-3.5 py-2 rounded-2xl text-center">
            <span className="text-[10px] font-bold text-amber-800 uppercase block">सामग्री उपलब्धता</span>
            <strong className="text-xl font-serif-jain text-amber-950 font-bold block">{checkedCount} / {totalItemsCount}</strong>
          </div>

          <button
            onClick={() => window.print()}
            className="no-print px-4 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs font-bold flex items-center gap-1.5 cursor-pointer border border-amber-300 shadow-2xs"
          >
            <Printer className="w-4 h-4" />
            <span>सूची प्रिंट करें</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-stone-700 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-amber-700" />
            <span>श्रेणी:</span>
          </span>
          {[
            { id: 'all', name: 'सभी सामग्री (All)' },
            { id: 'daily-puja', name: 'नित्य पूजा द्रव्य' },
            { id: 'vedi-utensils', name: 'वेदी व धातु उपकरण' },
            { id: 'pratishtha-samagri', name: 'प्रतिष्ठा व ध्वजा सामग्री' },
          ].map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCat(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCat === c.id
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'bg-white hover:bg-amber-100 text-stone-700 border border-stone-300'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="w-full sm:w-64">
          <input
            type="text"
            placeholder="सामग्री खोजें (उदा. केसर, चंवर)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs p-2 rounded-xl bg-white border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Categories & Items List */}
      <div className="space-y-6">
        {filteredCategories.map(cat => (
          <div key={cat.id} className="bg-white rounded-2xl border-2 border-amber-200 p-5 shadow-xs">
            <h3 className="font-serif-jain font-bold text-base sm:text-lg text-amber-950 pb-3 border-b border-amber-200 mb-4">
              {cat.categoryName}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cat.items.map(item => {
                const isChecked = !!checkedItems[item.id];

                return (
                  <div
                    key={item.id}
                    onClick={() => handleToggle(item.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      isChecked
                        ? 'bg-emerald-50/60 border-emerald-300 shadow-2xs'
                        : 'bg-stone-50/70 border-stone-200 hover:border-amber-300'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 text-stone-600">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Square className="w-4 h-4 text-stone-400" />
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className={`text-xs sm:text-sm font-bold ${isChecked ? 'line-through text-stone-500' : 'text-stone-900'}`}>
                            {item.name}
                          </h4>
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-200">
                            {item.quantity}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-600 mt-0.5">
                          {item.usage}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full shrink-0">
                      {item.importance}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Reset & WhatsApp consultation button */}
      <div className="pt-4 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>सभी टिक रीसेट करें</span>
        </button>

        <a
          href="https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20हमें%20मंदिर%20प्रतिष्ठा%20हेतु%20शुद्ध%20सामग्री%20व%20उपकरणों%20के%20प्रमाणन%20की%20आवश्यकता%20है।"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-emerald-700 font-bold hover:underline"
        >
          <MessageCircle className="w-4 h-4" />
          <span>सामग्री परीक्षण हेतु संजीव सिपानी जी से परामर्श लें →</span>
        </a>
      </div>
    </div>
  );
};
