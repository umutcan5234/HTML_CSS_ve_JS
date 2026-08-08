const burclar = {

    koc: {
        isim: "♈ Koç",
        tarih: "21 Mart - 20 Nisan",
        element: "Ateş 🔥",
        gezegen: "Mars",
        ozellik: "Cesur, enerjik, lider ruhlu ve girişimci.",
        aciklama:
            "Koç burçları genellikle enerjik ve hareketli kişilerdir. " +
            "Yeni şeyler denemeyi severler ve çoğu zaman ilk adımı atmaktan çekinmezler."
    },

    boga: {
        isim: "♉ Boğa",
        tarih: "21 Nisan - 20 Mayıs",
        element: "Toprak 🌍",
        gezegen: "Venüs",
        ozellik: "Sabırlı, güvenilir, kararlı ve sakin.",
        aciklama:
            "Boğa burçları güven ve istikrarı önemser. " +
            "Sabırlı yapıları sayesinde başladıkları işleri tamamlamaya çalışırlar."
    },

    ikizler: {
        isim: "♊ İkizler",
        tarih: "21 Mayıs - 21 Haziran",
        element: "Hava 💨",
        gezegen: "Merkür",
        ozellik: "Meraklı, konuşkan, sosyal ve zeki.",
        aciklama:
            "İkizler burçları iletişim kurmayı ve yeni bilgiler öğrenmeyi sever. " +
            "Değişik konulara ilgi duyabilirler."
    },

    yengec: {
        isim: "♋ Yengeç",
        tarih: "22 Haziran - 22 Temmuz",
        element: "Su 💧",
        gezegen: "Ay",
        ozellik: "Duygusal, koruyucu, sezgisel ve bağlı.",
        aciklama:
            "Yengeç burçları aile ve yakın ilişkilerine önem verir. " +
            "Duygusal ve koruyucu yönleriyle tanınırlar."
    },

    aslan: {
        isim: "♌ Aslan",
        tarih: "23 Temmuz - 22 Ağustos",
        element: "Ateş 🔥",
        gezegen: "Güneş",
        ozellik: "Özgüvenli, yaratıcı, güçlü ve cömert.",
        aciklama:
            "Aslan burçları kendilerini ifade etmeyi ve dikkat çekmeyi sever. " +
            "Yaratıcı yönleri ve özgüvenleri ön plana çıkabilir."
    },

    basak: {
        isim: "♍ Başak",
        tarih: "23 Ağustos - 22 Eylül",
        element: "Toprak 🌍",
        gezegen: "Merkür",
        ozellik: "Düzenli, çalışkan, dikkatli ve analitik.",
        aciklama:
            "Başak burçları ayrıntılara önem verir. " +
            "Planlı ve düzenli hareket etmeyi tercih ederler."
    },

    terazi: {
        isim: "♎ Terazi",
        tarih: "23 Eylül - 22 Ekim",
        element: "Hava 💨",
        gezegen: "Venüs",
        ozellik: "Uyumlu, sosyal, adaletli ve diplomatik.",
        aciklama:
            "Terazi burçları ilişkilerinde denge ve uyuma önem verir. " +
            "İnsanlarla iletişim kurmayı ve huzurlu ortamları severler."
    },

    akrep: {
        isim: "♏ Akrep",
        tarih: "23 Ekim - 21 Kasım",
        element: "Su 💧",
        gezegen: "Plüton",
        ozellik: "Kararlı, tutkulu, gizemli ve güçlü.",
        aciklama:
            "Akrep burçları yoğun duyguları ve güçlü sezgileriyle tanınır. " +
            "Bir konuya odaklandıklarında oldukça kararlı olabilirler."
    },

    yay: {
        isim: "♐ Yay",
        tarih: "22 Kasım - 21 Aralık",
        element: "Ateş 🔥",
        gezegen: "Jüpiter",
        ozellik: "Özgür ruhlu, maceracı, iyimser ve meraklı.",
        aciklama:
            "Yay burçları keşfetmeyi ve yeni deneyimler yaşamayı sever. " +
            "Özgürlüklerine ve yeni fikirlere önem verirler."
    },

    oglak: {
        isim: "♑ Oğlak",
        tarih: "22 Aralık - 20 Ocak",
        element: "Toprak 🌍",
        gezegen: "Satürn",
        ozellik: "Disiplinli, sorumluluk sahibi, sabırlı ve kararlı.",
        aciklama:
            "Oğlak burçları hedeflerine ulaşmak için planlı ve disiplinli çalışabilir. " +
            "Sorumluluklarını ciddiye almalarıyla bilinirler."
    },

    kova: {
        isim: "♒ Kova",
        tarih: "21 Ocak - 18 Şubat",
        element: "Hava 💨",
        gezegen: "Uranüs",
        ozellik: "Yenilikçi, bağımsız, özgün ve meraklı.",
        aciklama:
            "Kova burçları farklı düşüncelere ve yeniliklere açık olabilir. " +
            "Bağımsız hareket etmeyi severler."
    },

    balik: {
        isim: "♓ Balık",
        tarih: "19 Şubat - 20 Mart",
        element: "Su 💧",
        gezegen: "Neptün",
        ozellik: "Duygusal, hayalperest, sezgisel ve yardımsever.",
        aciklama:
            "Balık burçları hayal güçleri ve duyarlılıklarıyla öne çıkar. " +
            "Çevrelerindeki insanların duygularını önemseyebilirler."
    }
};


function burcuGoster() {

    const secilenBurc = document.getElementById("burcSec").value;

    const sonuc = document.getElementById("sonuc");

    if (secilenBurc === "") {

        sonuc.style.display = "block";

        sonuc.innerHTML = `
            <h2>⚠️ Burç Seçilmedi</h2>
            <p>Lütfen önce listeden burcunu seç!</p>
        `;

        return;
    }


    const burc = burclar[secilenBurc];


    sonuc.style.display = "block";

    sonuc.innerHTML = `

        <h2>${burc.isim}</h2>

        <div class="bilgi">
            📅 <strong>Tarih:</strong>
            ${burc.tarih}
        </div>

        <div class="bilgi">
            🌍 <strong>Element:</strong>
            ${burc.element}
        </div>

        <div class="bilgi">
            🪐 <strong>Gezegen:</strong>
            ${burc.gezegen}
        </div>

        <div class="bilgi">
            ⭐ <strong>Öne Çıkan Özellikler:</strong>
            ${burc.ozellik}
        </div>

        <p>
            ${burc.aciklama}
        </p>

    `;
}
