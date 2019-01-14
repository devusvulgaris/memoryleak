const mapItems = [
    {
      "lat": 62.288764,
      "lng": 25.739676,
      "image": "https://files.srv.fi/srv_kotisivutesti/20171114140859_867651_DSC02427.jpg",
      "tag": "Palokka",
      "slug": "jyvaskylan-oloneuvos",
      "link": "https://dev.srv.motley.fi/asuminen/jyvaskylan-oloneuvos/",
      "name": "Jyväskylän Oloneuvos"
    },
    {
      "lat": 60.432291853238304,
      "lng": 22.230749130249023,
      "image": "https://files.srv.fi/srv_kotisivutesti/20160909090500_471327_Edit-050916-12-12.jpg",
      "tag": "Telakkaranta",
      "slug": "turun-tyyrpuuri",
      "link": "https://dev.srv.motley.fi/asuminen/turun-tyyrpuuri/",
      "name": "Turun Tyyrpuuri"
    },
    {
      "lat": 60.406892,
      "lng": 22.367972,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180201121928_002645_Lukkari_310118_rajattu.jpg",
      "tag": "Keskusta",
      "slug": "kaarinan-lukkarinrinne",
      "link": "https://dev.srv.motley.fi/asuminen/kaarinan-lukkarinrinne/",
      "name": "Kaarinan Lukkarinrinne"
    },
    {
      "lat": 60.399458,
      "lng": 25.105869,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20160405130608_karbemumma.jpg",
      "tag": "Alikerava",
      "slug": "keravan-kardemumma",
      "link": "https://dev.srv.motley.fi/asuminen/keravan-kardemumma/",
      "name": "Keravan Kardemumma"
    },
    {
      "lat": 65.03363852784196,
      "lng": 25.432695150375366,
      "image": "https://files.srv.fi/srv_kotisivutesti/20171031135104_059315_Masto_ulkokuvia_nettikoko-003.jpg",
      "tag": "Toppilansalmi",
      "slug": "satamarannan-masto-oulu",
      "link": "https://dev.srv.motley.fi/asuminen/satamarannan-masto-oulu/",
      "name": "Satamarannan Masto, Oulu"
    },
    {
      "lat": 61.50642300693294,
      "lng": 23.78291130065918,
      "image": "https://files.srv.fi/srv_kotisivutesti/image13_20150803141735_C10_yhti_lle_olohuone.jpg",
      "tag": "Tammela",
      "slug": "tampereen-osmonkieppi",
      "link": "https://dev.srv.motley.fi/asuminen/tampereen-osmonkieppi/",
      "name": "Tampereen Osmonkieppi"
    },
    {
      "lat": 60.43241891289809,
      "lng": 22.231285572052002,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20160909084732_Edit-050916-9-12.jpg",
      "tag": "Telakkaranta",
      "slug": "turun-paapuuri",
      "link": "https://dev.srv.motley.fi/asuminen/turun-paapuuri/",
      "name": "Turun Paapuuri"
    },
    {
      "lat": 60.250247451750596,
      "lng": 25.11028289794922,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180426132041_714875_Julkisivu2_SRV_Vantaan_Kaarna_4-2018.jpg",
      "tag": "Rajakylä",
      "slug": "vantaan-kaarna",
      "link": "https://dev.srv.motley.fi/asuminen/vantaan-kaarna/",
      "name": "Vantaan Kaarna"
    },
    {
      "lat": 60.455808,
      "lng": 22.292337,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20160606144606_Kirkkotie_Rak1.jpg",
      "tag": "Nummi",
      "slug": "turun-olympia",
      "link": "https://dev.srv.motley.fi/asuminen/turun-olympia/",
      "name": "Turun Olympia"
    },
    {
      "lat": 61.498848,
      "lng": 23.749233,
      "image": "https://files.srv.fi/srv_kotisivutesti/image2_20170711104008_PDX_Julkkari2.jpg",
      "tag": "Amuri",
      "slug": "tampereen-metsonkulma",
      "link": "https://dev.srv.motley.fi/asuminen/tampereen-metsonkulma/",
      "name": "Tampereen Metsonkulma"
    },
    {
      "lat": 60.39922,
      "lng": 25.108591,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20170504080910_Katuvisu__2_.jpg",
      "tag": "Alikerava",
      "slug": "keravan-korianteri",
      "link": "https://dev.srv.motley.fi/asuminen/keravan-korianteri/",
      "name": "Keravan Korianteri"
    },
    {
      "lat": 60.18775054888988,
      "lng": 24.97987775655929,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180201144726_532896_CAM-3h_kk-Black_White-Living-Room-V2_pieni.jpg",
      "tag": "Kalasatama",
      "slug": "helsingin-redin-majakka",
      "link": "https://dev.srv.motley.fi/asuminen/helsingin-redin-majakka/",
      "name": "Helsingin REDIn Majakka"
    },
    {
      "lat": 60.296042539555515,
      "lng": 25.03288507461548,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20160711104704_3D_-_SRV_160614_1.jpg",
      "tag": "Tikkurila",
      "slug": "vantaan-sokeriherne",
      "link": "https://dev.srv.motley.fi/asuminen/vantaan-sokeriherne/",
      "name": "Vantaan Sokeriherne"
    },
    {
      "lat": 60.316578417348076,
      "lng": 24.82738494873047,
      "image": "https://files.srv.fi/srv_kotisivutesti/image3_20160415101523_SRV_Maalisuora_c017_puisto_sRGB_1_.jpg",
      "tag": "Keimolanmäki, Keimola",
      "slug": "vantaan-maalisuora",
      "link": "https://dev.srv.motley.fi/asuminen/vantaan-maalisuora/",
      "name": "Vantaan Maalisuora"
    },
    {
      "lat": 60.21480381930814,
      "lng": 24.826912879943848,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180320122956_243024_Perkkaa_51002_nakyma_lounaasta.jpg",
      "tag": "Leppävaara, Perkkaa, Vermonniitty",
      "slug": "espoon-piruetti",
      "link": "https://dev.srv.motley.fi/asuminen/espoon-piruetti/",
      "name": "Espoon Piruetti"
    },
    {
      "lat": 62.24482,
      "lng": 25.747821,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180515140320_359215_3D_HQ.jpg",
      "tag": "Keskusta",
      "slug": "jyvaskylan-holvi",
      "link": "https://dev.srv.motley.fi/asuminen/jyvaskylan-holvi/",
      "name": "Jyväskylän Holvi"
    },
    {
      "lat": 60.290317,
      "lng": 25.033511,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180326105524_057456_Nakyma_Neilikkatielta_STARLET_rajattu.jpg",
      "tag": "Tikkurila",
      "slug": "vantaan-tikkurilan-starlet",
      "link": "https://dev.srv.motley.fi/asuminen/vantaan-tikkurilan-starlet/",
      "name": "Vantaan Tikkurilan Starlet"
    },
    {
      "lat": 65.032237,
      "lng": 25.439987,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180328131801_857923_www_Aalto_keittio.jpg",
      "tag": "Toppilansalmi",
      "slug": "satamarannan-aalto-oulu",
      "link": "https://dev.srv.motley.fi/asuminen/satamarannan-aalto-oulu/",
      "name": "Satamarannan Aalto, Oulu"
    },
    {
      "lat": 60.319606685832525,
      "lng": 24.825947284698486,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20180131161927_SRV_KeimolanOiva_pihalta.jpg",
      "tag": "Keimolanmäki",
      "slug": "vantaan-varikonaarre",
      "link": "https://dev.srv.motley.fi/asuminen/vantaan-varikonaarre/",
      "name": "Vantaan Varikonaarre"
    },
    {
      "lat": 60.399245,
      "lng": 25.1083,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20171205100259_Basilika_talokuva.jpg",
      "tag": "",
      "slug": "keravan-basilika",
      "link": "https://dev.srv.motley.fi/asuminen/keravan-basilika/",
      "name": "Keravan Basilika"
    },
    {
      "lat": 65.035098,
      "lng": 25.437395,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180328134459_833479_www_Tyrsky_OH.jpg",
      "tag": "Toppilansalmi",
      "slug": "satamarannan-tyrsky-oulu",
      "link": "https://dev.srv.motley.fi/asuminen/satamarannan-tyrsky-oulu/",
      "name": "Satamarannan Tyrsky, Oulu"
    },
    {
      "lat": 65.032237,
      "lng": 25.439987,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180328135113_595969_www_Ruori_OH.jpg",
      "tag": "Toppilansalmi",
      "slug": "satamarannan-ruori-oulu",
      "link": "https://dev.srv.motley.fi/asuminen/satamarannan-ruori-oulu/",
      "name": "Satamarannan Ruori, Oulu"
    },
    {
      "lat": 60.281493,
      "lng": 24.846625,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20171117122328_214_SRV_Raiviosuonm_ki_-_Sis_piha.jpg",
      "tag": "Martinlaakso",
      "slug": "vantaan-neulansilma",
      "link": "https://dev.srv.motley.fi/asuminen/vantaan-neulansilma/",
      "name": "Vantaan Neulansilmä"
    },
    {
      "lat": 60.207517,
      "lng": 24.88161,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20171005102644_aluekuva1.PNG",
      "tag": "Munkkiniemi",
      "slug": "lapinmaentie-1",
      "link": "https://dev.srv.motley.fi/asuminen/lapinmaentie-1/",
      "name": "Lapinmäentie 1"
    },
    {
      "lat": 60.165305,
      "lng": 24.737021,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180103104653_022078_olarista_pain.PNG",
      "tag": "Piispankallio",
      "slug": "piispankallio",
      "link": "https://dev.srv.motley.fi/asuminen/piispankallio/",
      "name": "Piispankallio"
    },
    {
      "lat": 60.155389584558506,
      "lng": 24.919309616088867,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180308143000_406533_Bunkkeri_ulkoa_1.jpg",
      "tag": "Jätkäsaari",
      "slug": "bunkkeri",
      "link": "https://dev.srv.motley.fi/asuminen/bunkkeri/",
      "name": "Bunkkeri"
    },
    {
      "lat": 60.173912751263835,
      "lng": 24.828203592718182,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180309103641_149169_1.jpg",
      "tag": "Tapiola",
      "slug": "espoon-keilaniemi",
      "link": "https://dev.srv.motley.fi/asuminen/espoon-keilaniemi/",
      "name": "Espoon Keilaniemi"
    },
    {
      "lat": 65.034479,
      "lng": 25.434097,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20180412104011_Auto_nettikuva.jpg",
      "tag": "Toppilansalmi",
      "slug": "oulun-satamaranta-1",
      "link": "https://dev.srv.motley.fi/asuminen/oulun-satamaranta-1/",
      "name": "Oulun Satamaranta 1"
    },
    {
      "lat": 60.215166,
      "lng": 24.87,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20180412104043_Auto_nettikuva.jpg",
      "tag": "Pitäjänmäki",
      "slug": "helsingin-sandra",
      "link": "https://dev.srv.motley.fi/asuminen/helsingin-sandra/",
      "name": "Helsingin Sandra"
    },
    {
      "lat": 60.1695,
      "lng": 24.921434,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180320123526_906460_Moottoripyora-isokuva.jpg",
      "tag": "Etu-Töölö",
      "slug": "helsingin-emmy",
      "link": "https://dev.srv.motley.fi/asuminen/helsingin-emmy/",
      "name": "Helsingin Emmy"
    },
    {
      "lat": 60.186498,
      "lng": 24.803416,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20180412104202_Auto_nettikuva.jpg",
      "tag": "Tapiola",
      "slug": "espoon-taitaja",
      "link": "https://dev.srv.motley.fi/asuminen/espoon-taitaja/",
      "name": "Espoon Taitaja"
    },
    {
      "lat": 60.191276,
      "lng": 24.955742,
      "image": "https://files.srv.fi/srv_kotisivutesti/20180411131028_592147_Auto_nettikuva.jpg",
      "tag": "Vallila",
      "slug": "helsingin-lieska",
      "link": "https://dev.srv.motley.fi/asuminen/helsingin-lieska/",
      "name": "Helsingin Lieska"
    },
    {
      "lat": 60.24118,
      "lng": 24.871066,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20180412103404_Auto_nettikuva.jpg",
      "tag": "Kannelmäki",
      "slug": "helsingin-tampuriini",
      "link": "https://dev.srv.motley.fi/asuminen/helsingin-tampuriini/",
      "name": "Helsingin Tampuriini"
    },
    {
      "lat": 60.24118,
      "lng": 24.871066,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20180412103522_Auto_nettikuva.jpg",
      "tag": "Kannelmäki",
      "slug": "helsingin-pelimanni",
      "link": "https://dev.srv.motley.fi/asuminen/helsingin-pelimanni/",
      "name": "Helsingin Pelimanni"
    },
    {
      "lat": 60.406892,
      "lng": 22.367972,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20180412104129_Auto_nettikuva.jpg",
      "tag": "Keskusta",
      "slug": "kaarinan-suntionpuisto",
      "link": "https://dev.srv.motley.fi/asuminen/kaarinan-suntionpuisto/",
      "name": "Kaarinan Suntionpuisto"
    },
    {
      "lat": 60.191291,
      "lng": 24.9548,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20180412103632_Auto_nettikuva.jpg",
      "tag": "Vallila",
      "slug": "helsingin-kesaheila",
      "link": "https://dev.srv.motley.fi/asuminen/helsingin-kesaheila/",
      "name": "Helsingin Kesäheila"
    },
    {
      "lat": 61.471722056228806,
      "lng": 23.725061416625977,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20180412103821_Auto_nettikuva.jpg",
      "tag": "Härmälänranta",
      "slug": "tampereen-harmalanrannan-kaunotar",
      "link": "https://dev.srv.motley.fi/asuminen/tampereen-harmalanrannan-kaunotar/",
      "name": "Tampereen Härmälänrannan Kaunotar"
    },
    {
      "lat": 61.5064025337218,
      "lng": 23.782525062561035,
      "image": "https://files.srv.fi/srv_kotisivutesti/20160811101924_582649_Julkisivu_Kaupista2_PDX.jpg",
      "tag": "Tammela",
      "slug": "tampereen-pohjankieppi",
      "link": "https://dev.srv.motley.fi/asuminen/tampereen-pohjankieppi/",
      "name": "Tampereen Pohjankieppi"
    },
    {
      "lat": 60.17066682194956,
      "lng": 24.76393461227417,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20180412103716_Auto_nettikuva.jpg",
      "tag": "Niittykumpu",
      "slug": "kiinteisto-oy-niittykummun-huippuparkki",
      "link": "https://dev.srv.motley.fi/asuminen/kiinteisto-oy-niittykummun-huippuparkki/",
      "name": "Kiinteistö Oy Niittykummun Huippuparkki"
    },
    {
      "lat": 60.2505029924474,
      "lng": 25.11049747467041,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20180412103744_Auto_nettikuva.jpg",
      "tag": "Rajakylä",
      "slug": "vantaan-neulanen",
      "link": "https://dev.srv.motley.fi/asuminen/vantaan-neulanen/",
      "name": "Vantaan Neulanen"
    },
    {
      "lat": 60.331524,
      "lng": 24.336085,
      "image": "https://files.srv.fi/srv_kotisivutesti/image1_20180412103901_Auto_nettikuva.jpg",
      "tag": "Nummela",
      "slug": "nummelan-ridalinhelmi",
      "link": "https://dev.srv.motley.fi/asuminen/nummelan-ridalinhelmi/",
      "name": "Nummelan Ridalinhelmi"
    }
];

export default mapItems;
