import React from 'react';
import { Phone, MessageCircle, MapPin, Heart, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Sacred Jain Shloka */}
        <div className="text-center max-w-2xl mx-auto border-b border-stone-800 pb-8">
          <div className="text-xl sm:text-2xl font-serif-jain text-amber-400 font-bold mb-2">
            मंगलं भगवान वीरो मंगलं गौतमो गणी।
            <br />
            मंगलं स्थूलभद्राद्या जैनधर्मोऽस्तु मंगलम्॥
          </div>
          <p className="text-xs text-stone-400">
            जैन श्वेतांबर जिनालय स्थापत्य, शिल्पकला एवं मुहूर्त शोधन मार्गदर्शिका
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-sm">
          {/* Col 1: About Centre */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-amber-400 font-serif-jain">
              सिपानी जैन एजुकेशन एंड एस्ट्रोलॉजी सेंटर
            </h4>
            <p className="text-stone-400 leading-relaxed text-xs">
              संस्थापक <strong>संजीव सिपानी</strong> द्वारा संचालित यह केंद्र जैन श्वेतांबर जिनालय निर्माण, वास्तु परीक्षण, देव प्रतिमा विन्यास, और शास्त्रोक्त अंजनशलाका-प्रतिष्ठा मुहूर्त शोधन हेतु समर्पित है।
            </p>
            <div className="text-stone-400 text-xs flex items-center gap-1.5 pt-1">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
              <span>मानसरोवर, जयपुर (राजस्थान)</span>
            </div>
          </div>

          {/* Col 2: Core Expertise */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-amber-400 font-serif-jain">
              प्रमुख वास्तु एवं मुहूर्त विषय
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>• मूलनायक वेदी, गर्भगृह, परिक्रमा पथ व दृष्टि संरेखण</li>
              <li>• श्री नाकोड़ा भैरव जी, दादागुरुदेव व मणिभद्र बाबा वेदी</li>
              <li>• शिखर की ऊंचाई (प्रसाद लक्षण), ध्वजादंड व कलश वास्तु</li>
              <li>• भूमिगत जलकुंड (ईशान) एवं ओवरहेड भारी टंकी (नैऋत्य)</li>
              <li>• शिलान्यास, प्राण प्रतिष्ठा एवं मंदिर प्रवेश महामुहूर्त</li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-amber-400 font-serif-jain">
              सीधा संपर्क सूत्र
            </h4>
            <p className="text-xs text-stone-400">
              संपूर्ण भारतवर्ष में जिनमंदिर निर्माण समिति एवं ट्रस्टियों हेतु व्यक्तिगत साइट विजिट एवं ऑनलाइन नक्शा मार्गदर्शन उपलब्ध है।
            </p>

            <div className="space-y-2 pt-1">
              <a
                href="tel:9509061075"
                className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="font-bold">मोबाइल: 9509061075</span>
              </a>

              <a
                href="https://wa.me/919660870376?text=जय%20जिनेन्द्र%20संजीव%20जी"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="font-bold">व्हाट्सएप: 9660870376</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 border-t border-stone-800 text-center text-xs text-stone-500 space-y-1">
          <div>
            वेबसाइट निर्माता एवं परामर्शक: <strong>संजीव सिपानी</strong> | संस्थापक: सिपानी जैन एजुकेशन एंड एस्ट्रोलॉजी कंसल्टेंट सेंटर, मानसरोवर, जयपुर
          </div>
          <div className="text-[11px] text-stone-600">
            शास्त्र संदर्भ: वास्तुमण्डन, दीपार्णव, अपराजितपृच्छा, प्रतिष्ठा सारोद्धार एवं श्वेतांबर आगम परंपरा।
          </div>
        </div>
      </div>
    </footer>
  );
};
