import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Award, CheckCircle, Send, Sparkles, Building, UserCheck } from 'lucide-react';

export const ConsultantProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    mandirName: '',
    cityState: '',
    contactPerson: '',
    phone: '',
    consultationType: 'मंदिर नक्शा वास्तु निरीक्षण (Blueprint Review)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `जय जिनेन्द्र संजीव जी,\n\nमैं जैन श्वेतांबर मंदिर वास्तु व मुहूर्त हेतु परामर्श चाहता हूँ:\n- मंदिर/ट्रस्ट: ${formData.mandirName}\n- स्थान: ${formData.cityState}\n- संपर्क व्यक्ति: ${formData.contactPerson}\n- मोबाइल: ${formData.phone}\n- परामर्श प्रकार: ${formData.consultationType}\n- विवरण: ${formData.message || 'विस्तृत चर्चा हेतु कृपया समय दें।'}`
    );

    window.open(`https://wa.me/919660870376?text=${waText}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100/60 rounded-3xl border-2 border-amber-300 p-6 sm:p-8 lg:p-10 shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Consultant Details */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/70 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
              <Award className="w-4 h-4 text-amber-800" />
              <span>जैन श्वेतांबर मंदिर वास्तु एवं मुहूर्त विशेषज्ञ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-jain text-amber-950">
              संजीव सिपानी (Sanjeev Sipani)
            </h2>
            <p className="text-base sm:text-lg font-semibold text-stone-800 mt-1">
              संस्थापक: सिपानी जैन एजुकेशन एंड एस्ट्रोलॉजी कंसल्टेंट सेंटर
            </p>
            <p className="text-stone-600 text-sm flex items-center gap-1.5 mt-1">
              <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
              <span>मानसरोवर, जयपुर (राजस्थान)</span>
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/90 border border-amber-200 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-amber-700" />
              <span>परामर्श एवं विशेषज्ञता के मुख्य क्षेत्र:</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
              {[
                'जैन श्वेतांबर जिनालय हेतु भूमि चयन, गंध-वर्ण परीक्षण एवं शल्योद्धार।',
                'गर्भगृह, मूल वेदी, परिक्रमा पथ, तोरण द्वार एवं प्रसाद लक्षण शिखर ऊंचाई निर्धारण।',
                'श्री नाकोड़ा भैरव जी, दादागुरुदेव, यक्ष-यक्षिणी एवं वीर मणिभद्र बाबा का शास्त्रोक्त स्थान निर्धारण।',
                'शिलान्यास, अंजनशलाका प्रतिष्ठा, ध्वजारोहण एवं मंदिर प्रथम प्रवेश महामुहूर्त शोधन।',
                'मौजूदा जिनमंदिरों में बिना तोड़फोड़ वास्तु दोष निवारण एवं ऊर्जा संतुलन।'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href="tel:9509061075"
              className="p-3.5 bg-gradient-to-r from-amber-700 to-amber-800 text-white rounded-xl hover:from-amber-800 hover:to-amber-900 transition-all flex items-center gap-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-amber-200" />
              </div>
              <div>
                <div className="text-[11px] text-amber-200 font-medium">सीधा फोन परामर्श</div>
                <div className="text-base font-bold tracking-wide">9509061075</div>
              </div>
            </a>

            <a
              href="https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी,%20मुझे%20जैन%20मंदिर%20वास्तु%20व%20मुहूर्त%20हेतु%20परामर्श%20चाहिए।"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 transition-all flex items-center gap-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <div className="text-[11px] text-emerald-200 font-medium">व्हाट्सएप पर संपर्क</div>
                <div className="text-base font-bold tracking-wide">9660870376</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Consultation Booking Form */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-amber-300 p-5 sm:p-7 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-bold font-serif-jain text-stone-900">
              मंदिर वास्तु एवं मुहूर्त परामर्श अनुरोध प्रपत्र
            </h3>
            <p className="text-stone-600 text-xs mt-1">
              अपने मंदिर का विवरण दर्ज करें। संजीव सिपानी जी स्वयं आपसे शीघ्र संपर्क करेंगे:
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  मंदिर / ट्रस्ट का नाम *
                </label>
                <input
                  type="text"
                  required
                  placeholder="उदा. श्री पार्श्वनाथ श्वेतांबर जैन मंदिर"
                  value={formData.mandirName}
                  onChange={(e) => setFormData({ ...formData, mandirName: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  शहर एवं राज्य *
                </label>
                <input
                  type="text"
                  required
                  placeholder="उदा. जयपुर, राजस्थान"
                  value={formData.cityState}
                  onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  संपर्क व्यक्ति का नाम *
                </label>
                <input
                  type="text"
                  required
                  placeholder="उदा. आपका नाम"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  मोबाइल नंबर *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="उदा. 9509061075"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                परामर्श का मुख्य विषय
              </label>
              <select
                value={formData.consultationType}
                onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                className="w-full text-xs p-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="मंदिर नक्शा वास्तु निरीक्षण (Blueprint Review)">मंदिर नक्शा वास्तु निरीक्षण (Blueprint Review)</option>
                <option value="भूमि चयन एवं शल्योद्धार (Site Selection)">भूमि चयन एवं शल्योद्धार (Site Selection)</option>
                <option value="प्राण प्रतिष्ठा एवं अंजनशलाका मुहूर्त (Pran Pratishtha)">प्राण प्रतिष्ठा एवं अंजनशलाका मुहूर्त (Pran Pratishtha)</option>
                <option value="शिलान्यास एवं निर्माण प्रारंभ मुहूर्त (Construction Muhurat)">शिलान्यास एवं निर्माण प्रारंभ मुहूर्त (Construction Muhurat)</option>
                <option value="नाकोड़ा भैरव / दादागुरुदेव / मणिभद्र वेदी स्थान">नाकोड़ा भैरव / दादागुरुदेव / मणिभद्र वेदी स्थान</option>
                <option value="बिना तोड़फोड़ वास्तु दोष निवारण (Dosha Nivaran)">बिना तोड़फोड़ वास्तु दोष निवारण (Dosha Nivaran)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                अतिरिक्त विवरण अथवा कोई विशेष शंका
              </label>
              <textarea
                rows={3}
                placeholder="मंदिर से संबंधित कोई विशेष प्रश्न या स्थिति लिखें..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-xs p-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-amber-800 to-amber-900 text-white rounded-xl text-xs sm:text-sm font-bold hover:from-amber-900 hover:to-amber-950 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4 text-amber-300" />
              <span>परामर्श अनुरोध भेजें (WhatsApp पर सीधा प्रेषण)</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
