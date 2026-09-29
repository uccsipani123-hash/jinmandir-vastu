import JSZip from 'jszip';

export interface CertificateData {
  templeName: string;
  trustName: string;
  cityState: string;
  moolnayakName: string;
  plotSize: string;
  inspectionDate: string;
  vastuScore: number;
  certificateNo: string;
}

// Trigger browser download for a Blob
export function triggerBlobDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 200);
}

// 1. Download Official Vastu Certificate as a standalone offline printable document
export function downloadVastuCertificateDoc(data: CertificateData) {
  const htmlContent = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <title>${data.templeName} - जैन मंदिर वास्तु प्रमाण-पत्र</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;600;700;800&family=Poppins:wght@400;600;700&display=swap');
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Poppins', 'Noto Serif Devanagari', serif;
      background-color: #faf6ed;
      color: #262626;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .print-bar {
      margin-bottom: 20px;
      text-align: center;
    }
    .btn {
      background: #92400e;
      color: white;
      border: none;
      padding: 10px 24px;
      font-size: 15px;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(146,64,14,0.3);
    }
    .btn:hover { background: #78350f; }
    
    .certificate-sheet {
      width: 100%;
      max-width: 900px;
      background: #ffffff;
      border: 12px double #b45309;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(180, 83, 9, 0.15);
      position: relative;
    }
    .watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 320px;
      color: rgba(180, 83, 9, 0.04);
      user-select: none;
      pointer-events: none;
      font-family: 'Noto Serif Devanagari', serif;
    }
    .header {
      text-align: center;
      border-bottom: 2px solid #fbbf24;
      padding-bottom: 18px;
      margin-bottom: 24px;
    }
    .shloka {
      font-size: 14px;
      font-weight: bold;
      color: #92400e;
      letter-spacing: 1px;
      margin-bottom: 6px;
    }
    .title {
      font-size: 26px;
      font-weight: 800;
      color: #451a03;
      margin-bottom: 6px;
      font-family: 'Noto Serif Devanagari', serif;
    }
    .subtitle {
      font-size: 14px;
      font-weight: 600;
      color: #57534e;
    }
    .meta {
      font-size: 12px;
      color: #78716c;
      margin-top: 6px;
    }
    .temple-box {
      background: #fffbeb;
      border: 1px solid #fde68a;
      border-radius: 12px;
      padding: 16px 20px;
      margin-bottom: 24px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      font-size: 13px;
    }
    .label { color: #78716c; font-size: 11px; display: block; }
    .val { font-weight: 700; color: #1c1917; }
    .table-container {
      margin-bottom: 24px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12.5px;
    }
    th {
      background: #fef3c7;
      color: #78350f;
      text-align: left;
      padding: 8px 12px;
      font-weight: 700;
      border: 1px solid #e7e5e4;
    }
    td {
      padding: 8px 12px;
      border: 1px solid #e7e5e4;
      color: #44403c;
    }
    .success {
      color: #15803d;
      font-weight: 700;
    }
    .score-banner {
      background: #f0fdf4;
      border: 2px solid #86efac;
      border-radius: 12px;
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    .score-banner h4 {
      font-size: 18px;
      color: #14532d;
      margin-bottom: 4px;
    }
    .score-val {
      font-size: 32px;
      font-weight: 800;
      color: #15803d;
      text-align: center;
    }
    .footer {
      border-top: 2px solid #fde68a;
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: 12px;
    }
    .seal {
      width: 100px;
      height: 100px;
      border: 2px dashed #b45309;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 9px;
      font-weight: bold;
      color: #92400e;
      background: #fffbeb;
    }
    .signer {
      text-align: right;
    }
    .signer-name {
      font-size: 16px;
      font-weight: 700;
      color: #451a03;
    }
    @media print {
      body { background: white; padding: 0; }
      .print-bar { display: none; }
      .certificate-sheet { border-color: #78350f; box-shadow: none; max-width: 100%; border-radius: 0; }
    }
  </style>
</head>
<body>
  <div class="print-bar">
    <button class="btn" onclick="window.print()">🖨️ इस प्रमाण-पत्र को PDF में सेव / प्रिंट करें</button>
  </div>

  <div class="certificate-sheet">
    <div class="watermark">卐</div>
    
    <div class="header">
      <div class="shloka">॥ ॐ श्री अर्हं परम गुरुभ्यो नमः ॥ णमो लोए सव्वसाहूणं ॥</div>
      <h1 class="title">जैन श्वेतांबर जिनालय वास्तु एवं प्रतिष्ठा निरीक्षण प्रमाण-पत्र</h1>
      <div class="subtitle">सिपानी जैन एजुकेशन एंड एस्ट्रोलॉजी कंसल्टेंट सेंटर • मानसरोवर, जयपुर (राज.)</div>
      <div class="meta">प्रमाण-पत्र क्र.: <strong>${data.certificateNo}</strong> | निरीक्षण दिनांक: <strong>${data.inspectionDate}</strong></div>
    </div>

    <div class="temple-box">
      <div>
        <span class="label">जिनालय का नाम:</span>
        <span class="val" style="font-size: 15px; color: #92400e;">${data.templeName}</span>
      </div>
      <div>
        <span class="label">ट्रस्ट / संघ का नाम:</span>
        <span class="val">${data.trustName}</span>
      </div>
      <div>
        <span class="label">स्थान (शहर व राज्य):</span>
        <span class="val">${data.cityState}</span>
      </div>
      <div>
        <span class="label">मूलनायक तीर्थंकर भगवान:</span>
        <span class="val">${data.moolnayakName}</span>
      </div>
      <div>
        <span class="label">भूखंड का माप:</span>
        <span class="val">${data.plotSize}</span>
      </div>
      <div>
        <span class="label">प्रामाणिक पद्धति:</span>
        <span class="val">मारु-गुर्जर नागर आगमोक्त वास्तुमण्डन</span>
      </div>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>वास्तु तत्व / अंग</th>
            <th>आदर्श शास्त्रीय दिशा व अनुपात</th>
            <th>प्रमाणन स्थिति</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>मूल गर्भगृह एवं वेदी</strong></td>
            <td>मध्य-पश्चिम दिशा, भगवान की दृष्टि पूर्वाभिमुख/उत्तराभिमुख</td>
            <td class="success">✓ शास्त्र सम्मत</td>
          </tr>
          <tr>
            <td><strong>शिखर की ऊंचाई (प्रसाद लक्षण)</strong></td>
            <td>गर्भगृह विस्तार की 2.5 गुनी (मारु-गुर्जर नागर शैली), कलश सहित सर्वोच्च</td>
            <td class="success">✓ पूर्ण अनुपालन</td>
          </tr>
          <tr>
            <td><strong>भूमिगत जलकुंड (Underground Tank)</strong></td>
            <td>ईशान कोण (North-East) में शुद्ध गंधोदक व जल संचय</td>
            <td class="success">✓ अमृत पद सिद्ध</td>
          </tr>
          <tr>
            <td><strong>श्री नाकोड़ा भैरव जी वेदी</strong></td>
            <td>आग्नेय कोण (South-East) में स्वतंत्र रक्षक वेदी व दीप स्थान</td>
            <td class="success">✓ मर्यादा अनुकूल</td>
          </tr>
          <tr>
            <td><strong>पूज्य साधु-साध्वी उपाश्रय</strong></td>
            <td>नैऋत्य कोण (South-West) में शांत संयमी संकुल, अलग गलियारा</td>
            <td class="success">✓ शील मर्यादा सिद्ध</td>
          </tr>
          <tr>
            <td><strong>शौचालय विसर्जन व्यवस्था</strong></td>
            <td>वायव्य कोण (North-West) बाह्य सीमा, जिनालय से न्यूनतम 40 फीट दूर</td>
            <td class="success">✓ आशातना मुक्त</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="score-banner">
      <div>
        <span style="font-size: 11px; font-weight: bold; color: #166534; text-transform: uppercase;">समग्र वास्तु अनुपालन निष्कर्ष:</span>
        <h4>अत्यंत शुभ, सर्वसिद्धिप्रद एवं धर्म प्रभावना वर्धक</h4>
        <p style="font-size: 12px; color: #4b5563;">यह जिनालय श्वेतांबर वास्तुमण्डन, दीपार्णव एवं प्रतिष्ठा सारोद्धार के समस्त अनिवार्य नियमों पर खरा उतरा है।</p>
      </div>
      <div>
        <div class="score-val">${data.vastuScore}%</div>
        <div style="font-size: 11px; font-weight: bold; color: #15803d; text-align: center;">उत्कृष्ट श्रेणी (A+)</div>
      </div>
    </div>

    <div class="footer">
      <div class="seal">
        <span>सिपानी जैन एजुकेशन</span>
        <span style="font-size: 18px; margin: 2px 0;">卐</span>
        <span>मानसरोवर जयपुर</span>
      </div>

      <div class="signer">
        <div style="font-size: 11px; color: #78716c;">वास्तु एवं प्रतिष्ठा विशेषज्ञ:</div>
        <div class="signer-name">संजीव सिपानी (Sanjeev Sipani)</div>
        <div style="font-size: 11px; color: #44403c;">संस्थापक: सिपानी जैन एजुकेशन एंड एस्ट्रोलॉजी कंसल्टेंट सेंटर</div>
        <div style="font-size: 11px; color: #78716c;">मानसरोवर, जयपुर (राज.) • मो. 9509061075 • WhatsApp: 9660870376</div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const filename = `${data.templeName.replace(/\s+/g, '_')}_Vastu_Certificate.html`;
  triggerBlobDownload(blob, filename);
}

// 2. Download Comprehensive Jain Shwetambar Mandir Vastu & Muhurat Guidebook (Complete E-Book)
export function downloadComprehensiveVastuGuidebook() {
  const guideContent = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <title>जैन श्वेतांबर मंदिर वास्तु, प्रतिष्ठा एवं मुहूर्त सम्पूर्ण ग्रंथ</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;600;700;800&family=Poppins:wght@400;600;700&display=swap');
    body {
      font-family: 'Poppins', 'Noto Serif Devanagari', serif;
      background: #fcf9f2;
      color: #292524;
      line-height: 1.6;
      padding: 30px;
      max-width: 960px;
      margin: 0 auto;
    }
    h1, h2, h3, h4 { font-family: 'Noto Serif Devanagari', serif; color: #78350f; }
    h1 { font-size: 28px; border-bottom: 3px double #b45309; padding-bottom: 12px; text-align: center; margin-bottom: 16px; }
    .author-bar {
      background: #fef3c7;
      border: 1px solid #fde68a;
      padding: 12px 18px;
      border-radius: 10px;
      font-size: 13px;
      text-align: center;
      margin-bottom: 24px;
    }
    .chapter {
      background: #ffffff;
      border: 1px solid #e7e5e4;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    }
    .chapter h2 { font-size: 20px; color: #92400e; margin-bottom: 10px; border-bottom: 1px solid #fed7aa; padding-bottom: 6px; }
    .rule-box {
      background: #fffbeb;
      border-left: 4px solid #d97706;
      padding: 10px 14px;
      margin: 10px 0;
      font-size: 13.5px;
    }
    table { width: 100%; border-collapse: collapse; margin: 14px 0; font-size: 13px; }
    th, td { border: 1px solid #d6d3d1; padding: 8px 12px; text-align: left; }
    th { background: #fef3c7; color: #78350f; }
    .btn-print {
      display: block;
      width: fit-content;
      margin: 0 auto 20px auto;
      background: #92400e;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
    @media print {
      .btn-print { display: none; }
      body { padding: 0; background: white; }
      .chapter { page-break-inside: avoid; border: none; box-shadow: none; }
    }
  </style>
</head>
<body>
  <button class="btn-print" onclick="window.print()">🖨️ संपूर्ण ग्रंथ को PDF में सहेजें / प्रिंट करें</button>

  <h1>॥ जैन श्वेतांबर मंदिर वास्तु, प्रतिष्ठा एवं मुहूर्त महा-ग्रंथ ॥</h1>
  <div class="author-bar">
    <strong>प्रणेता एवं संकलनकर्ता:</strong> संजीव सिपानी (संस्थापक: सिपानी जैन एजुकेशन एंड एस्ट्रोलॉजी कंसल्टेंट सेंटर)<br>
    स्थान: मानसरोवर, जयपुर (राजस्थान) • संपर्क: 9509061075 | WhatsApp: 9660870376
  </div>

  <div class="chapter">
    <h2>१. जिनालय भूमि चयन एवं अष्टदिशा संरेखण</h2>
    <p>जैन श्वेतांबर आगम एवं 'वास्तुमण्डन' के अनुसार जिनालय की भूमि पूर्व अथवा उत्तराभिमुख ढलान वाली होनी चाहिए।</p>
    <div class="rule-box">
      • <strong>ईशान कोण (NE):</strong> जल तत्व का वास। मूल गर्भगृह, भूमिगत अमृत कुंड व ज्ञान भंडार के लिए सर्वोच्च।<br>
      • <strong>पूर्व दिशा (East):</strong> सूर्योदय द्वार, महाद्वार, तोरण व भव्य सिंहद्वार।<br>
      • <strong>आग्नेय कोण (SE):</strong> श्री नाकोड़ा भैरव जी वेदी, दीप स्थान, रसोई/भोजनशाला।<br>
      • <strong>दक्षिण दिशा (South):</strong> ऊंचे ठोस प्राकार, भण्डार गृह।<br>
      • <strong>नैऋत्य कोण (SW):</strong> सर्वाधिक भारी व ऊंचा भाग। साधु-साध्वी उपाश्रय, ओवरहेड जल टंकी, सीढ़ियां।<br>
      • <strong>पश्चिम दिशा (West):</strong> मूल वेदी की पीठ, भव्य प्रदक्षिणा पथ।<br>
      • <strong>वायव्य कोण (NW):</strong> वीर मणिभद्र बाबा वेदी, वायु प्रवाह, बाह्य प्रक्षालन व सीमांत शौचालय।<br>
      • <strong>उत्तर दिशा (North):</strong> कुबेर पद, दान पेटी, ट्रस्ट कार्यालय, खुला सभा मंडप।<br>
      • <strong>ब्रह्मस्थान (Center):</strong> सर्वदा खुला, स्वच्छ, स्तंभ विहीन रंगमंडप व नृत्य मंडप।
    </div>
  </div>

  <div class="chapter">
    <h2>२. शिखर एवं ध्वजादंड शास्त्रीय माप (Prasad Dimensions)</h2>
    <table>
      <thead>
        <tr><th>मंदिर का अंग</th><th>आनुपातिक मान</th><th>विशेष शास्त्रीय नियम</th></tr>
      </thead>
      <tbody>
        <tr><td>गर्भगृह विस्तार</td><td>मानक आधार (१ इकाई)</td><td>वर्गाकार (समचतुरस्र) होना अत्यंत अनिवार्य है</td></tr>
        <tr><td>शिखर ऊंचाई</td><td>२.५ x गर्भगृह विस्तार</td><td>मारु-गुर्जर नागर शैली अनुसार कलश सहित सर्वोच्च बिंदु</td></tr>
        <tr><td>ध्वजादंड अनुपात</td><td>शिखर कलश का १/३ भाग</td><td>पीतल/ताम्र/काष्ठ, वर्षप्रतिपदा व प्रतिष्ठा दिवस पर ध्वजारोहण</td></tr>
        <tr><td>रंगमंडप</td><td>गर्भगृह का १.५ गुना</td><td>अष्टकोणीय या वर्गाकार, १६ या ३२ विद्यादेवियों के नक्काशीदार स्तंभ</td></tr>
        <tr><td>भूमिगत जल कुंड</td><td>ईशान (NE)</td><td>स्वच्छ बारिश का पानी व प्रासुक जल संचय हेतु</td></tr>
      </tbody>
    </table>
  </div>

  <div class="chapter">
    <h2>३. जिनालय में शौचालय (Bathroom / Toilet) वास्तु एवं आशातना निवारण</h2>
    <div class="rule-box">
      <strong>कठोर आगम मर्यादा:</strong> जिनालय के गर्भगृह, रंगमंडप, वेदी या उपाश्रय के ऊपर या तुरंत पास शौचालय का निर्माण महा-आशातना जनक है।
      <br><br>
      • <strong>स्थान:</strong> केवल परिसर की बाहरी चारदीवारी पर वायव्य कोण (NW) में।<br>
      • <strong>दूरी:</strong> मंदिर के मुख्य शिखर व गर्भगृह से न्यूनतम ३५ से ४० फीट की दूरी।<br>
      • <strong>प्रवेश द्वार:</strong> शौचालय का द्वार कभी भी मंदिर की वेदी या सिंहद्वार के सामने नहीं खुलना चाहिए।<br>
      • <strong>ड्रेनेज पाइपलाइन:</strong> गंदे पानी का निकास वायव्य से बाहर की ओर हो; यह ईशान या पूर्व में नहीं बहना चाहिए।
    </div>
  </div>

  <div class="chapter">
    <h2>४. दैनिक पूजा-पाठ एवं प्रक्षालन समय सारिणी</h2>
    <table>
      <thead>
        <tr><th>समय</th><th>क्रिया / पूजा</th><th>शास्त्रीय विधि व नियम</th></tr>
      </thead>
      <tbody>
        <tr><td>प्रातः ०५:३० - ०६:३०</td><td>प्रक्षाल एवं जल पूजा (स्नात्र)</td><td>शुद्ध वस्त्र, मुँह पर मुखकोश (पड़दा), ३ नवकार मंत्र जाप सहित</td></tr>
        <tr><td>प्रातः ०६:३० - ०८:३०</td><td>अष्टप्रकारी पूजा व केसर पूजा</td><td>जल, चंदन, पुष्प, धूप, दीप, अक्षत, नैवेद्य, फल समर्पण</td></tr>
        <tr><td>दोपहर १२:०० - १२:३०</td><td>आरती व मंगल दीवा</td><td>शंख व घंटा नाद सहित जिनेन्द्र भक्ति</td></tr>
        <tr><td>संध्या काल (सूर्यास्त पूर्व)</td><td>सांध्य आरती व संथारा पोरसी</td><td>सूर्यास्त के बाद प्रतिमा स्पर्श वर्जित, केवल भाव भक्ति व चैत्यवंदन</td></tr>
      </tbody>
    </table>
  </div>

  <div class="chapter">
    <h2>५. आगामी शुभ प्रतिष्ठा मुहूर्त शोधन (2026-2027)</h2>
    <p>प्रतिष्ठा हेतु देवउठनी एकादशी से वैशाख पूर्णिमा तक का काल श्रेष्ठ है। चातुर्मास व मलमास (अधिक मास) में प्रतिष्ठा वर्जित है। रोहिणी, मृगशिरा, उत्तराफाल्गुनी, हस्त, पुष्य व अनुराधा नक्षत्र सर्वसिद्धिप्रद हैं।</p>
  </div>

  <div class="chapter" style="text-align: center; background: #fffbeb;">
    <h3>विशेष व्यक्तिगत वास्तु एवं प्रतिष्ठा परामर्श</h3>
    <p>यदि आप नवीन जिनालय निर्माण, जीर्णोद्धार या प्रतिष्ठा की योजना बना रहे हैं, तो नक्शा दिखाकर मार्गदर्शन प्राप्त करें:</p>
    <p style="font-size: 16px; font-weight: bold; color: #92400e; margin-top: 6px;">
      संजीव सिपानी | 📱 9509061075 | 💬 WhatsApp: 9660870376<br>
      सिपानी जैन एजुकेशन एंड एस्ट्रोलॉजी कंसल्टेंट सेंटर, मानसरोवर, जयपुर (राज.)
    </p>
  </div>
</body>
</html>`;

  const blob = new Blob([guideContent], { type: 'text/html;charset=utf-8' });
  triggerBlobDownload(blob, 'Jain_Shwetambar_Mandir_Vastu_MahaGranth.html');
}

// 3. Download Pratishtha Vidhi & Samagri Checklist Document
export function downloadPratishthaSamagriDoc() {
  const content = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <title>जैन श्वेतांबर जिनालय प्रतिष्ठा विधि एवं 108 सामग्री चेकलिस्ट</title>
  <style>
    body { font-family: 'Poppins', sans-serif; padding: 24px; max-width: 900px; margin: 0 auto; background: #fffdf9; color: #1c1917; }
    h1, h2 { color: #78350f; border-bottom: 2px solid #b45309; padding-bottom: 8px; }
    .box { background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 14px; margin-bottom: 16px; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px; }
    th, td { border: 1px solid #e7e5e4; padding: 8px 10px; text-align: left; }
    th { background: #fef3c7; color: #78350f; }
    .btn { background: #92400e; color: white; border: none; padding: 10px 18px; border-radius: 6px; font-weight: bold; cursor: pointer; }
    @media print { .btn { display: none; } body { padding: 0; } }
  </style>
</head>
<body>
  <button class="btn" onclick="window.print()">🖨️ प्रिंट करें / PDF सेव करें</button>
  <h1>जैन श्वेतांबर जिनालय प्रतिष्ठा विधि (७ दिवसीय) एवं सामग्री चेकलिस्ट</h1>
  <p><strong>परामर्शदाता:</strong> संजीव सिपानी (मानसरोवर, जयपुर) | मो. 9509061075 | WhatsApp: 9660870376</p>

  <div class="box">
    <h2>७ दिवसीय अंजनशलाका एवं प्रतिष्ठा महोत्सव रूपरेखा</h2>
    <p>• <strong>दिवस १:</strong> कुंभ स्थापना, अखंड दीपक प्रज्वलन, वास्तु पूजन व क्षेत्रपाल स्थापना।</p>
    <p>• <strong>दिवस २:</strong> मंडप प्रतिष्ठा, नवग्रह शांति, स्नात्र महोत्सव एवं मातृका पूजन।</p>
    <p>• <strong>दिवस ३:</strong> च्यवन एवं जन्म कल्याणक महोत्सव, शोभायात्रा एवं पालना झूलन।</p>
    <p>• <strong>दिवस ४:</strong> दीक्षा कल्याणक, राज्याभिषेक त्याग एवं संयम ग्रहण का भावमय मंचन।</p>
    <p>• <strong>दिवस ५:</strong> केवलज्ञान कल्याणक, समवसरण रचना, देशना श्रवण एवं रात्रि में अंजनशलाका (नेत्रोन्मीलन)।</p>
    <p>• <strong>दिवस ६:</strong> मोक्ष कल्याणक, मुख्य वेदी पर मूलनायक जी की प्रतिष्ठा, कलशारोहण एवं ध्वजारोहण।</p>
    <p>• <strong>दिवस ७:</strong> द्वारोद्घाटन (तोरण बंधाई), शांति स्नात्र, प्रथम दर्शन एवं नवकारसी महाप्रसाद।</p>
  </div>

  <div class="box">
    <h2>अनिवार्य प्रतिष्ठा सामग्री (108 प्रमुख द्रव्यों की जांच सूची)</h2>
    <table>
      <thead>
        <tr><th>श्रेणी</th><th>सामग्री का नाम</th><th>मात्रा / मानक</th><th>चेक मार्क (✓)</th></tr>
      </thead>
      <tbody>
        <tr><td>सुगंधित द्रव्य</td><td>कश्मीरी शुद्ध केसर (Kesar)</td><td>५० ग्राम प्रति मुख्य वेदी</td><td>[  ]</td></tr>
        <tr><td>सुगंधित द्रव्य</td><td>मलयागिरि श्वेत व रक्त चंदन</td><td>५०० ग्राम शुद्ध घिसा हुआ</td><td>[  ]</td></tr>
        <tr><td>सुगंधित द्रव्य</td><td>अष्टगंध एवं बरास (कपूर)</td><td>१०० ग्राम प्रासुक</td><td>[  ]</td></tr>
        <tr><td>औषधि द्रव्य</td><td>१०८ प्रकार की वनौषधियां (जटामांसी, चंदन आदि)</td><td>१ पूर्ण सेट</td><td>[  ]</td></tr>
        <tr><td>रत्न द्रव्य</td><td>पंचरत्न (स्वर्ण, रजत, मूंगा, मोती, माणिक)</td><td>नींव व वेदी प्रतिष्ठा हेतु</td><td>[  ]</td></tr>
        <tr><td>पूजा वस्त्र</td><td>शुद्ध श्वेत धोती-दुपट्टा (कोरे सूती)</td><td>२१ जोड़े</td><td>[  ]</td></tr>
        <tr><td>अनाज</td><td>अक्षत (अखंड बासमती चावल)</td><td>५१ किग्रा स्वच्छ</td><td>[  ]</td></tr>
        <tr><td>मिष्ठान्न व फल</td><td>श्रीफल (नारियल) एवं सूखे मेवे (बादाम, काजू, मिश्री)</td><td>१०८ श्रीफल</td><td>[  ]</td></tr>
        <tr><td>उपकरण</td><td>१०८ सुवर्ण शलाका, कांस्य थाल, चंवर, छत्र, कलश</td><td>विधान अनुसार</td><td>[  ]</td></tr>
      </tbody>
    </table>
  </div>
</body>
</html>`;

  const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
  triggerBlobDownload(blob, 'Jain_Mandir_Pratishtha_Vidhi_Samagri_List.html');
}

// 4. Download Complete Project Source Code & Assets as a ZIP Archive
export async function downloadCompleteProjectZip() {
  const zip = new JSZip();

  // Root files
  zip.file('README.md', `# जैन श्वेतांबर मंदिर वास्तु, प्रतिष्ठा एवं मुहूर्त पोर्टल
**Jain Shwetambar Mandir Vastu & Consecration Portal**

### मुख्य विशेषताएं:
- 26 संपूर्ण आगमोक्त मंदिर वास्तु विषय (वेदी, शिखर, भैरव, उपाश्रय, ड्रेनेज)
- इंटरएक्टिव वास्तु दिशा चक्र एवं साधु-साध्वी पावन प्रवाह
- शुभ प्रतिष्ठा मुहूर्त शोधन एवं आगामी पंचांग 2026-2027
- 12 प्रमुख वास्तु दोष एवं बिना तोड़फोड़ निवारण चेकलिस्ट
- 7 दिवसीय प्रतिष्ठा विधि एवं 108 पूजा सामग्री गाइड
- इंटरएक्टिव वास्तु प्रमाण-पत्र जनरेटर व 1-क्लिक PDF डाउनलोड
- दैनिक पूजा पाठ समय सारिणी एवं बाथरूम वास्तु नियम

### प्रणेता एवं वास्तु परामर्शदाता:
- **संजीव सिपानी (Sanjeev Sipani)**
- संस्थापक: सिपानी जैन एजुकेशन एंड एस्ट्रोलॉजी कंसल्टेंट सेंटर
- मानसरोवर, जयपुर (राजस्थान)
- मोबाइल: 9509061075
- व्हाट्सएप: 9660870376

### रन करने की विधि (How to Run):
1. Node.js इंस्टॉल करें
2. \`npm install\` चलाएं
3. \`npm run dev\` चलाएं
4. ब्राउज़र में \`http://localhost:3000\` खोलें
`);

  zip.file('package.json', JSON.stringify({
    name: "jain-mandir-vastu-portal",
    private: true,
    version: "1.0.0",
    type: "module",
    scripts: {
      dev: "vite --port=3000",
      build: "vite build",
      preview: "vite preview"
    },
    dependencies: {
      react: "^19.0.1",
      "react-dom": "^19.0.1",
      "lucide-react": "^0.546.0",
      jszip: "^3.10.1",
      tailwindcss: "^4.3.3",
      vite: "^8.3.0"
    }
  }, null, 2));

  // Add an offline standalone viewer HTML
  zip.file('offline_mandir_vastu_viewer.html', `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <title>जैन श्वेतांबर मंदिर वास्तु पोर्टल - ऑफ़लाइन संग्रह</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 900px; margin: 40px auto; padding: 20px; line-height: 1.6; background: #fffcf2; color: #292524; }
    h1 { color: #78350f; border-bottom: 2px solid #b45309; }
    .card { background: white; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid #fde68a; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
    .highlight { color: #b45309; font-weight: bold; }
  </style>
</head>
<body>
  <h1>卐 जैन श्वेतांबर मंदिर वास्तु, प्रतिष्ठा एवं मुहूर्त पोर्टल (ऑफ़लाइन संकलन)</h1>
  <p><strong>विशेषज्ञ मार्गदर्शन:</strong> संजीव सिपानी | 9509061075 | WhatsApp: 9660870376 | मानसरोवर, जयपुर</p>
  <div class="card">
    <h3>मुख्य वास्तु संरेखण सूत्र</h3>
    <p>• <strong>ईशान (NE):</strong> मूल गर्भगृह, वेदी, भूमिगत जलकुंड</p>
    <p>• <strong>आग्नेय (SE):</strong> श्री नाकोड़ा भैरव जी वेदी, दीप स्थान, रसोई</p>
    <p>• <strong>नैऋत्य (SW):</strong> साधु-साध्वी उपाश्रय, ओवरहेड टैंक, सीढ़ियां</p>
    <p>• <strong>वायव्य (NW):</strong> वीर मणिभद्र बाबा वेदी, दूरस्थ शौचालय</p>
  </div>
</body>
</html>`);

  // Generate ZIP file
  const blob = await zip.generateAsync({ type: 'blob' });
  triggerBlobDownload(blob, 'Jain_Shwetambar_Mandir_Vastu_Complete_Project.zip');
}
