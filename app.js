// ── Zone DB  (city / country format) ────────────────────────────
// Each entry: { id, city, country, cityEn, countryEn, flag, search[] }
const ZONE_DB = [

  // ── 中国 ──────────────────────────────────────────────────────
  { id:'Asia/Shanghai',      city:'上海',      country:'中国',     cityEn:'Shanghai',     countryEn:'China',           flag:'🇨🇳', search:['shanghai','beijing','北京','上海','china','中国','chongqing','重庆','wuhan','武汉','guangzhou','广州','shenzhen','深圳','chengdu','成都','hangzhou','杭州','nanjing','南京','xian','西安','tianjin','天津'] },
  { id:'Asia/Hong_Kong',     city:'香港',      country:'中国',     cityEn:'Hong Kong',    countryEn:'China',           flag:'🇭🇰', search:['hong kong','hongkong','hk','香港'] },
  { id:'Asia/Macau',         city:'澳门',      country:'中国',     cityEn:'Macau',        countryEn:'China',           flag:'🇲🇴', search:['macau','macao','澳门'] },
  { id:'Asia/Taipei',        city:'台北',      country:'台湾',     cityEn:'Taipei',       countryEn:'Taiwan',          flag:'🇹🇼', search:['taipei','taiwan','台湾','台北','kaohsiung','高雄','taichung','台中'] },
  { id:'Asia/Urumqi',        city:'乌鲁木齐',  country:'中国',     cityEn:'Urumqi',       countryEn:'China',           flag:'🇨🇳', search:['urumqi','乌鲁木齐','xinjiang','新疆'] },

  // ── 日本 ──────────────────────────────────────────────────────
  { id:'Asia/Tokyo',         city:'东京',      country:'日本',     cityEn:'Tokyo',        countryEn:'Japan',           flag:'🇯🇵', search:['tokyo','japan','osaka','大阪','日本','东京','kyoto','京都','nagoya','名古屋','sapporo','札幌','fukuoka','福冈','hiroshima','广岛'] },

  // ── 韩国 ──────────────────────────────────────────────────────
  { id:'Asia/Seoul',         city:'首尔',      country:'韩国',     cityEn:'Seoul',        countryEn:'South Korea',     flag:'🇰🇷', search:['seoul','korea','busan','釜山','韩国','首尔','incheon','仁川'] },

  // ── 东南亚 ────────────────────────────────────────────────────
  { id:'Asia/Singapore',     city:'新加坡',    country:'新加坡',   cityEn:'Singapore',    countryEn:'Singapore',       flag:'🇸🇬', search:['singapore','sg','新加坡'] },
  { id:'Asia/Bangkok',       city:'曼谷',      country:'泰国',     cityEn:'Bangkok',      countryEn:'Thailand',        flag:'🇹🇭', search:['bangkok','thailand','泰国','曼谷','chiang mai','清迈','phuket','普吉'] },
  { id:'Asia/Ho_Chi_Minh',  city:'胡志明市',  country:'越南',     cityEn:'Ho Chi Minh',  countryEn:'Vietnam',         flag:'🇻🇳', search:['ho chi minh','vietnam','hanoi','越南','河内','胡志明'] },
  { id:'Asia/Jakarta',       city:'雅加达',    country:'印度尼西亚', cityEn:'Jakarta',    countryEn:'Indonesia',       flag:'🇮🇩', search:['jakarta','indonesia','bali','印尼','巴厘岛','雅加达','surabaya','泗水'] },
  { id:'Asia/Makassar',      city:'望加锡',    country:'印度尼西亚', cityEn:'Makassar',   countryEn:'Indonesia',       flag:'🇮🇩', search:['makassar','lombok','望加锡'] },
  { id:'Asia/Jayapura',      city:'查亚普拉',  country:'印度尼西亚', cityEn:'Jayapura',   countryEn:'Indonesia',       flag:'🇮🇩', search:['jayapura','papua','查亚普拉'] },
  { id:'Asia/Kuala_Lumpur',  city:'吉隆坡',    country:'马来西亚', cityEn:'Kuala Lumpur', countryEn:'Malaysia',        flag:'🇲🇾', search:['kuala lumpur','malaysia','kl','马来西亚','吉隆坡','penang','槟城','johor','柔佛'] },
  { id:'Asia/Manila',        city:'马尼拉',    country:'菲律宾',   cityEn:'Manila',       countryEn:'Philippines',     flag:'🇵🇭', search:['manila','philippines','菲律宾','马尼拉','cebu','宿务'] },
  { id:'Asia/Rangoon',       city:'仰光',      country:'缅甸',     cityEn:'Yangon',       countryEn:'Myanmar',         flag:'🇲🇲', search:['yangon','myanmar','burma','缅甸','仰光','naypyidaw','内比都'] },
  { id:'Asia/Phnom_Penh',    city:'金边',      country:'柬埔寨',   cityEn:'Phnom Penh',   countryEn:'Cambodia',        flag:'🇰🇭', search:['phnom penh','cambodia','柬埔寨','金边','siem reap','暹粒'] },
  { id:'Asia/Vientiane',     city:'万象',      country:'老挝',     cityEn:'Vientiane',    countryEn:'Laos',            flag:'🇱🇦', search:['vientiane','laos','老挝','万象'] },
  { id:'Asia/Brunei',        city:'斯里巴加湾', country:'文莱',    cityEn:'Bandar Seri Begawan', countryEn:'Brunei',   flag:'🇧🇳', search:['brunei','文莱','斯里巴加湾'] },
  { id:'Asia/Dili',          city:'帝力',      country:'东帝汶',   cityEn:'Dili',         countryEn:'East Timor',      flag:'🇹🇱', search:['dili','east timor','timor','东帝汶','帝力'] },

  // ── 南亚 ──────────────────────────────────────────────────────
  { id:'Asia/Kolkata',       city:'孟买',      country:'印度',     cityEn:'Mumbai',       countryEn:'India',           flag:'🇮🇳', search:['india','mumbai','delhi','kolkata','新德里','孟买','印度','bangalore','班加罗尔','chennai','金奈','hyderabad','海得拉巴','ahmedabad','艾哈迈达巴德','pune','浦那'] },
  { id:'Asia/Colombo',       city:'科伦坡',    country:'斯里兰卡', cityEn:'Colombo',      countryEn:'Sri Lanka',       flag:'🇱🇰', search:['colombo','sri lanka','斯里兰卡','科伦坡'] },
  { id:'Asia/Dhaka',         city:'达卡',      country:'孟加拉国', cityEn:'Dhaka',        countryEn:'Bangladesh',      flag:'🇧🇩', search:['dhaka','bangladesh','孟加拉','达卡','chittagong','吉大港'] },
  { id:'Asia/Kathmandu',     city:'加德满都',  country:'尼泊尔',   cityEn:'Kathmandu',    countryEn:'Nepal',           flag:'🇳🇵', search:['kathmandu','nepal','尼泊尔','加德满都'] },
  { id:'Asia/Thimphu',       city:'廷布',      country:'不丹',     cityEn:'Thimphu',      countryEn:'Bhutan',          flag:'🇧🇹', search:['thimphu','bhutan','不丹','廷布'] },
  { id:'Asia/Karachi',       city:'卡拉奇',    country:'巴基斯坦', cityEn:'Karachi',      countryEn:'Pakistan',        flag:'🇵🇰', search:['karachi','pakistan','巴基斯坦','卡拉奇','lahore','拉合尔','islamabad','伊斯兰堡'] },
  { id:'Asia/Kabul',         city:'喀布尔',    country:'阿富汗',   cityEn:'Kabul',        countryEn:'Afghanistan',     flag:'🇦🇫', search:['kabul','afghanistan','阿富汗','喀布尔'] },
  { id:'Asia/Male',          city:'马累',      country:'马尔代夫', cityEn:'Malé',         countryEn:'Maldives',        flag:'🇲🇻', search:['male','maldives','马尔代夫','马累'] },

  // ── 中亚 ──────────────────────────────────────────────────────
  { id:'Asia/Tashkent',      city:'塔什干',    country:'乌兹别克斯坦', cityEn:'Tashkent', countryEn:'Uzbekistan',      flag:'🇺🇿', search:['tashkent','uzbekistan','乌兹别克','塔什干'] },
  { id:'Asia/Almaty',        city:'阿拉木图',  country:'哈萨克斯坦', cityEn:'Almaty',    countryEn:'Kazakhstan',       flag:'🇰🇿', search:['almaty','kazakhstan','哈萨克斯坦','阿拉木图','astana','阿斯塔纳'] },
  { id:'Asia/Bishkek',       city:'比什凯克',  country:'吉尔吉斯斯坦', cityEn:'Bishkek', countryEn:'Kyrgyzstan',      flag:'🇰🇬', search:['bishkek','kyrgyzstan','吉尔吉斯','比什凯克'] },
  { id:'Asia/Dushanbe',      city:'杜尚别',    country:'塔吉克斯坦', cityEn:'Dushanbe',  countryEn:'Tajikistan',       flag:'🇹🇯', search:['dushanbe','tajikistan','塔吉克','杜尚别'] },
  { id:'Asia/Ashgabat',      city:'阿什哈巴德', country:'土库曼斯坦', cityEn:'Ashgabat', countryEn:'Turkmenistan',    flag:'🇹🇲', search:['ashgabat','turkmenistan','土库曼','阿什哈巴德'] },
  { id:'Asia/Ulaanbaatar',   city:'乌兰巴托',  country:'蒙古国',   cityEn:'Ulaanbaatar', countryEn:'Mongolia',        flag:'🇲🇳', search:['ulaanbaatar','mongolia','蒙古','乌兰巴托'] },

  // ── 中东 ──────────────────────────────────────────────────────
  { id:'Asia/Dubai',         city:'迪拜',      country:'阿联酋',   cityEn:'Dubai',        countryEn:'UAE',             flag:'🇦🇪', search:['dubai','uae','abu dhabi','阿联酋','迪拜','阿布扎比'] },
  { id:'Asia/Riyadh',        city:'利雅得',    country:'沙特阿拉伯', cityEn:'Riyadh',     countryEn:'Saudi Arabia',    flag:'🇸🇦', search:['riyadh','saudi','jeddah','沙特','利雅得','吉达','mecca','麦加','medina','麦地那'] },
  { id:'Asia/Tehran',        city:'德黑兰',    country:'伊朗',     cityEn:'Tehran',       countryEn:'Iran',            flag:'🇮🇷', search:['tehran','iran','伊朗','德黑兰','isfahan','伊斯法罕'] },
  { id:'Asia/Baghdad',       city:'巴格达',    country:'伊拉克',   cityEn:'Baghdad',      countryEn:'Iraq',            flag:'🇮🇶', search:['baghdad','iraq','伊拉克','巴格达','basra','巴士拉'] },
  { id:'Asia/Kuwait',        city:'科威特城',  country:'科威特',   cityEn:'Kuwait City',  countryEn:'Kuwait',          flag:'🇰🇼', search:['kuwait','科威特','科威特城'] },
  { id:'Asia/Bahrain',       city:'麦纳麦',    country:'巴林',     cityEn:'Manama',       countryEn:'Bahrain',         flag:'🇧🇭', search:['bahrain','manama','巴林','麦纳麦'] },
  { id:'Asia/Qatar',         city:'多哈',      country:'卡塔尔',   cityEn:'Doha',         countryEn:'Qatar',           flag:'🇶🇦', search:['qatar','doha','卡塔尔','多哈'] },
  { id:'Asia/Muscat',        city:'马斯喀特',  country:'阿曼',     cityEn:'Muscat',       countryEn:'Oman',            flag:'🇴🇲', search:['muscat','oman','阿曼','马斯喀特'] },
  { id:'Asia/Aden',          city:'亚丁',      country:'也门',     cityEn:'Aden',         countryEn:'Yemen',           flag:'🇾🇪', search:['aden','yemen','也门','亚丁','sanaa','萨那'] },
  { id:'Asia/Nicosia',       city:'尼科西亚',  country:'塞浦路斯', cityEn:'Nicosia',      countryEn:'Cyprus',          flag:'🇨🇾', search:['nicosia','cyprus','塞浦路斯','尼科西亚'] },
  { id:'Asia/Beirut',        city:'贝鲁特',    country:'黎巴嫩',   cityEn:'Beirut',       countryEn:'Lebanon',         flag:'🇱🇧', search:['beirut','lebanon','黎巴嫩','贝鲁特'] },
  { id:'Asia/Damascus',      city:'大马士革',  country:'叙利亚',   cityEn:'Damascus',     countryEn:'Syria',           flag:'🇸🇾', search:['damascus','syria','叙利亚','大马士革'] },
  { id:'Asia/Amman',         city:'安曼',      country:'约旦',     cityEn:'Amman',        countryEn:'Jordan',          flag:'🇯🇴', search:['amman','jordan','约旦','安曼'] },
  { id:'Asia/Jerusalem',     city:'耶路撒冷',  country:'以色列',   cityEn:'Jerusalem',    countryEn:'Israel',          flag:'🇮🇱', search:['jerusalem','israel','tel aviv','以色列','耶路撒冷','特拉维夫'] },
  { id:'Asia/Baku',          city:'巴库',      country:'阿塞拜疆', cityEn:'Baku',         countryEn:'Azerbaijan',      flag:'🇦🇿', search:['baku','azerbaijan','阿塞拜疆','巴库'] },
  { id:'Asia/Yerevan',       city:'埃里温',    country:'亚美尼亚', cityEn:'Yerevan',      countryEn:'Armenia',         flag:'🇦🇲', search:['yerevan','armenia','亚美尼亚','埃里温'] },
  { id:'Asia/Tbilisi',       city:'第比利斯',  country:'格鲁吉亚', cityEn:'Tbilisi',      countryEn:'Georgia',         flag:'🇬🇪', search:['tbilisi','georgia','格鲁吉亚','第比利斯'] },

  // ── 欧洲西部 ──────────────────────────────────────────────────
  { id:'Europe/London',      city:'伦敦',      country:'英国',     cityEn:'London',       countryEn:'UK',              flag:'🇬🇧', search:['london','uk','england','britain','英国','伦敦','manchester','曼彻斯特','birmingham','伯明翰','edinburgh','爱丁堡','glasgow','格拉斯哥'] },
  { id:'Europe/Dublin',      city:'都柏林',    country:'爱尔兰',   cityEn:'Dublin',       countryEn:'Ireland',         flag:'🇮🇪', search:['dublin','ireland','爱尔兰','都柏林','cork','科克'] },
  { id:'Europe/Lisbon',      city:'里斯本',    country:'葡萄牙',   cityEn:'Lisbon',       countryEn:'Portugal',        flag:'🇵🇹', search:['lisbon','portugal','葡萄牙','里斯本','porto','波尔图'] },
  { id:'Europe/Madrid',      city:'马德里',    country:'西班牙',   cityEn:'Madrid',       countryEn:'Spain',           flag:'🇪🇸', search:['madrid','spain','barcelona','西班牙','马德里','巴塞罗那','seville','塞维利亚','valencia','巴伦西亚'] },
  { id:'Atlantic/Canary',    city:'拉斯帕尔马斯', country:'西班牙（加纳利）', cityEn:'Las Palmas', countryEn:'Spain (Canary)', flag:'🇮🇨', search:['canary','las palmas','tenerife','加纳利','特内里费'] },
  { id:'Europe/Paris',       city:'巴黎',      country:'法国',     cityEn:'Paris',        countryEn:'France',          flag:'🇫🇷', search:['paris','france','法国','巴黎','lyon','里昂','marseille','马赛','nice','尼斯','bordeaux','波尔多'] },
  { id:'Europe/Monaco',      city:'摩纳哥',    country:'摩纳哥',   cityEn:'Monaco',       countryEn:'Monaco',          flag:'🇲🇨', search:['monaco','摩纳哥'] },
  { id:'Europe/Amsterdam',   city:'阿姆斯特丹', country:'荷兰',    cityEn:'Amsterdam',    countryEn:'Netherlands',     flag:'🇳🇱', search:['amsterdam','netherlands','holland','荷兰','阿姆斯特丹','rotterdam','鹿特丹','hague','海牙'] },
  { id:'Europe/Brussels',    city:'布鲁塞尔',  country:'比利时',   cityEn:'Brussels',     countryEn:'Belgium',         flag:'🇧🇪', search:['brussels','belgium','比利时','布鲁塞尔','antwerp','安特卫普'] },
  { id:'Europe/Luxembourg',  city:'卢森堡',    country:'卢森堡',   cityEn:'Luxembourg',   countryEn:'Luxembourg',      flag:'🇱🇺', search:['luxembourg','卢森堡'] },
  { id:'Europe/Berlin',      city:'柏林',      country:'德国',     cityEn:'Berlin',       countryEn:'Germany',         flag:'🇩🇪', search:['berlin','germany','munich','法兰克福','德国','柏林','慕尼黑','frankfurt','hamburg','汉堡','cologne','科隆','stuttgart','斯图加特','dusseldorf','杜塞尔多夫'] },
  { id:'Europe/Zurich',      city:'苏黎世',    country:'瑞士',     cityEn:'Zurich',       countryEn:'Switzerland',     flag:'🇨🇭', search:['zurich','switzerland','swiss','瑞士','苏黎世','geneva','日内瓦','bern','伯尔尼'] },
  { id:'Europe/Vienna',      city:'维也纳',    country:'奥地利',   cityEn:'Vienna',       countryEn:'Austria',         flag:'🇦🇹', search:['vienna','austria','奥地利','维也纳','salzburg','萨尔茨堡'] },
  { id:'Europe/Rome',        city:'罗马',      country:'意大利',   cityEn:'Rome',         countryEn:'Italy',           flag:'🇮🇹', search:['rome','italy','milan','意大利','罗马','米兰','venice','威尼斯','florence','佛罗伦萨','naples','那不勒斯','turin','都灵'] },
  { id:'Europe/Vatican',     city:'梵蒂冈',    country:'梵蒂冈',   cityEn:'Vatican City', countryEn:'Vatican',         flag:'🇻🇦', search:['vatican','梵蒂冈'] },
  { id:'Europe/San_Marino',  city:'圣马力诺',  country:'圣马力诺', cityEn:'San Marino',   countryEn:'San Marino',      flag:'🇸🇲', search:['san marino','圣马力诺'] },
  { id:'Europe/Malta',       city:'瓦莱塔',    country:'马耳他',   cityEn:'Valletta',     countryEn:'Malta',           flag:'🇲🇹', search:['malta','valletta','马耳他','瓦莱塔'] },
  { id:'Europe/Stockholm',   city:'斯德哥尔摩', country:'瑞典',    cityEn:'Stockholm',    countryEn:'Sweden',          flag:'🇸🇪', search:['stockholm','sweden','瑞典','斯德哥尔摩','gothenburg','哥德堡','malmo','马尔默'] },
  { id:'Europe/Oslo',        city:'奥斯陆',    country:'挪威',     cityEn:'Oslo',         countryEn:'Norway',          flag:'🇳🇴', search:['oslo','norway','挪威','奥斯陆','bergen','卑尔根'] },
  { id:'Europe/Copenhagen',  city:'哥本哈根',  country:'丹麦',     cityEn:'Copenhagen',   countryEn:'Denmark',         flag:'🇩🇰', search:['copenhagen','denmark','丹麦','哥本哈根'] },
  { id:'Europe/Helsinki',    city:'赫尔辛基',  country:'芬兰',     cityEn:'Helsinki',     countryEn:'Finland',         flag:'🇫🇮', search:['helsinki','finland','芬兰','赫尔辛基'] },
  { id:'Europe/Tallinn',     city:'塔林',      country:'爱沙尼亚', cityEn:'Tallinn',      countryEn:'Estonia',         flag:'🇪🇪', search:['tallinn','estonia','爱沙尼亚','塔林'] },
  { id:'Europe/Riga',        city:'里加',      country:'拉脱维亚', cityEn:'Riga',         countryEn:'Latvia',          flag:'🇱🇻', search:['riga','latvia','拉脱维亚','里加'] },
  { id:'Europe/Vilnius',     city:'维尔纽斯',  country:'立陶宛',   cityEn:'Vilnius',      countryEn:'Lithuania',       flag:'🇱🇹', search:['vilnius','lithuania','立陶宛','维尔纽斯'] },
  { id:'Europe/Warsaw',      city:'华沙',      country:'波兰',     cityEn:'Warsaw',       countryEn:'Poland',          flag:'🇵🇱', search:['warsaw','poland','波兰','华沙','krakow','克拉科夫'] },
  { id:'Europe/Prague',      city:'布拉格',    country:'捷克',     cityEn:'Prague',       countryEn:'Czech Republic',  flag:'🇨🇿', search:['prague','czech','捷克','布拉格'] },
  { id:'Europe/Bratislava',  city:'布拉迪斯拉发', country:'斯洛伐克', cityEn:'Bratislava', countryEn:'Slovakia',       flag:'🇸🇰', search:['bratislava','slovakia','斯洛伐克','布拉迪斯拉发'] },
  { id:'Europe/Budapest',    city:'布达佩斯',  country:'匈牙利',   cityEn:'Budapest',     countryEn:'Hungary',         flag:'🇭🇺', search:['budapest','hungary','匈牙利','布达佩斯'] },
  { id:'Europe/Ljubljana',   city:'卢布尔雅那', country:'斯洛文尼亚', cityEn:'Ljubljana', countryEn:'Slovenia',        flag:'🇸🇮', search:['ljubljana','slovenia','斯洛文尼亚','卢布尔雅那'] },
  { id:'Europe/Zagreb',      city:'萨格勒布',  country:'克罗地亚', cityEn:'Zagreb',       countryEn:'Croatia',         flag:'🇭🇷', search:['zagreb','croatia','克罗地亚','萨格勒布','split','斯普利特'] },
  { id:'Europe/Sarajevo',    city:'萨拉热窝',  country:'波黑',     cityEn:'Sarajevo',     countryEn:'Bosnia',          flag:'🇧🇦', search:['sarajevo','bosnia','波黑','萨拉热窝'] },
  { id:'Europe/Belgrade',    city:'贝尔格莱德', country:'塞尔维亚', cityEn:'Belgrade',    countryEn:'Serbia',          flag:'🇷🇸', search:['belgrade','serbia','塞尔维亚','贝尔格莱德'] },
  { id:'Europe/Podgorica',   city:'波德戈里察', country:'黑山',    cityEn:'Podgorica',    countryEn:'Montenegro',      flag:'🇲🇪', search:['podgorica','montenegro','黑山','波德戈里察'] },
  { id:'Europe/Tirane',      city:'地拉那',    country:'阿尔巴尼亚', cityEn:'Tirana',     countryEn:'Albania',         flag:'🇦🇱', search:['tirana','albania','阿尔巴尼亚','地拉那'] },
  { id:'Europe/Skopje',      city:'斯科普里',  country:'北马其顿', cityEn:'Skopje',       countryEn:'N. Macedonia',    flag:'🇲🇰', search:['skopje','macedonia','北马其顿','斯科普里'] },
  { id:'Europe/Sofia',       city:'索非亚',    country:'保加利亚', cityEn:'Sofia',        countryEn:'Bulgaria',        flag:'🇧🇬', search:['sofia','bulgaria','保加利亚','索非亚'] },
  { id:'Europe/Bucharest',   city:'布加勒斯特', country:'罗马尼亚', cityEn:'Bucharest',   countryEn:'Romania',         flag:'🇷🇴', search:['bucharest','romania','罗马尼亚','布加勒斯特'] },
  { id:'Europe/Chisinau',    city:'基希讷乌',  country:'摩尔多瓦', cityEn:'Chisinau',     countryEn:'Moldova',         flag:'🇲🇩', search:['chisinau','moldova','摩尔多瓦','基希讷乌'] },
  { id:'Europe/Athens',      city:'雅典',      country:'希腊',     cityEn:'Athens',       countryEn:'Greece',          flag:'🇬🇷', search:['athens','greece','希腊','雅典','thessaloniki','塞萨洛尼基'] },
  { id:'Europe/Istanbul',    city:'伊斯坦布尔', country:'土耳其',   cityEn:'Istanbul',    countryEn:'Turkey',          flag:'🇹🇷', search:['istanbul','turkey','ankara','土耳其','伊斯坦布尔','安卡拉','izmir','伊兹密尔'] },

  // ── 欧洲东部 ──────────────────────────────────────────────────
  { id:'Europe/Moscow',      city:'莫斯科',    country:'俄罗斯',   cityEn:'Moscow',       countryEn:'Russia',          flag:'🇷🇺', search:['moscow','russia','俄罗斯','莫斯科','st petersburg','圣彼得堡'] },
  { id:'Europe/Kaliningrad', city:'加里宁格勒', country:'俄罗斯',  cityEn:'Kaliningrad',  countryEn:'Russia',          flag:'🇷🇺', search:['kaliningrad','加里宁格勒'] },
  { id:'Asia/Yekaterinburg', city:'叶卡捷琳堡', country:'俄罗斯',  cityEn:'Yekaterinburg', countryEn:'Russia',         flag:'🇷🇺', search:['yekaterinburg','叶卡捷琳堡'] },
  { id:'Asia/Novosibirsk',   city:'新西伯利亚', country:'俄罗斯',  cityEn:'Novosibirsk',  countryEn:'Russia',          flag:'🇷🇺', search:['novosibirsk','新西伯利亚'] },
  { id:'Asia/Krasnoyarsk',   city:'克拉斯诺亚尔斯克', country:'俄罗斯', cityEn:'Krasnoyarsk', countryEn:'Russia',      flag:'🇷🇺', search:['krasnoyarsk','克拉斯诺亚尔斯克'] },
  { id:'Asia/Irkutsk',       city:'伊尔库茨克', country:'俄罗斯',  cityEn:'Irkutsk',      countryEn:'Russia',          flag:'🇷🇺', search:['irkutsk','伊尔库茨克','baikal','贝加尔'] },
  { id:'Asia/Yakutsk',       city:'雅库茨克',  country:'俄罗斯',   cityEn:'Yakutsk',      countryEn:'Russia',          flag:'🇷🇺', search:['yakutsk','雅库茨克'] },
  { id:'Asia/Vladivostok',   city:'符拉迪沃斯托克', country:'俄罗斯', cityEn:'Vladivostok', countryEn:'Russia',        flag:'🇷🇺', search:['vladivostok','符拉迪沃斯托克','海参崴'] },
  { id:'Europe/Kiev',        city:'基辅',      country:'乌克兰',   cityEn:'Kyiv',         countryEn:'Ukraine',         flag:'🇺🇦', search:['kyiv','kiev','ukraine','乌克兰','基辅','kharkiv','哈尔科夫','odessa','敖德萨'] },
  { id:'Europe/Minsk',       city:'明斯克',    country:'白俄罗斯', cityEn:'Minsk',        countryEn:'Belarus',         flag:'🇧🇾', search:['minsk','belarus','白俄罗斯','明斯克'] },

  // ── 北美 ──────────────────────────────────────────────────────
  { id:'America/New_York',    city:'纽约',      country:'美国',    cityEn:'New York',     countryEn:'USA',             flag:'🇺🇸', search:['new york','nyc','eastern','美东','纽约','boston','波士顿','washington','华盛顿','miami','迈阿密','atlanta','亚特兰大','philadelphia','费城','detroit','底特律'] },
  { id:'America/Chicago',     city:'芝加哥',    country:'美国',    cityEn:'Chicago',      countryEn:'USA',             flag:'🇺🇸', search:['chicago','central','美中','芝加哥','houston','休斯顿','dallas','达拉斯','minneapolis','明尼阿波利斯','kansas city','堪萨斯城','new orleans','新奥尔良'] },
  { id:'America/Denver',      city:'丹佛',      country:'美国',    cityEn:'Denver',       countryEn:'USA',             flag:'🇺🇸', search:['denver','mountain','美山','丹佛','phoenix','凤凰城','salt lake city','盐湖城'] },
  { id:'America/Los_Angeles', city:'洛杉矶',    country:'美国',    cityEn:'Los Angeles',  countryEn:'USA',             flag:'🇺🇸', search:['los angeles','la','pacific','sf','san francisco','seattle','美西','洛杉矶','旧金山','西雅图','portland','波特兰','las vegas','拉斯维加斯','san diego','圣地亚哥(加州)'] },
  { id:'America/Anchorage',   city:'安克雷奇',  country:'美国',    cityEn:'Anchorage',    countryEn:'USA',             flag:'🇺🇸', search:['anchorage','alaska','阿拉斯加','安克雷奇'] },
  { id:'Pacific/Honolulu',    city:'檀香山',    country:'美国夏威夷', cityEn:'Honolulu',  countryEn:'USA (Hawaii)',     flag:'🇺🇸', search:['honolulu','hawaii','夏威夷','檀香山'] },
  { id:'America/Toronto',     city:'多伦多',    country:'加拿大',  cityEn:'Toronto',      countryEn:'Canada',          flag:'🇨🇦', search:['toronto','canada east','加拿大','多伦多','montreal','蒙特利尔','ottawa','渥太华'] },
  { id:'America/Winnipeg',    city:'温尼伯',    country:'加拿大',  cityEn:'Winnipeg',     countryEn:'Canada',          flag:'🇨🇦', search:['winnipeg','温尼伯'] },
  { id:'America/Edmonton',    city:'埃德蒙顿',  country:'加拿大',  cityEn:'Edmonton',     countryEn:'Canada',          flag:'🇨🇦', search:['edmonton','calgary','卡尔加里','埃德蒙顿'] },
  { id:'America/Vancouver',   city:'温哥华',    country:'加拿大',  cityEn:'Vancouver',    countryEn:'Canada',          flag:'🇨🇦', search:['vancouver','canada west','加拿大','温哥华'] },
  { id:'America/Halifax',     city:'哈利法克斯', country:'加拿大', cityEn:'Halifax',      countryEn:'Canada',          flag:'🇨🇦', search:['halifax','nova scotia','新斯科舍','哈利法克斯'] },
  { id:'America/St_Johns',    city:'圣约翰斯',  country:'加拿大',  cityEn:"St. John's",   countryEn:'Canada',          flag:'🇨🇦', search:['st johns','newfoundland','纽芬兰','圣约翰斯'] },
  { id:'America/Mexico_City', city:'墨西哥城',  country:'墨西哥',  cityEn:'Mexico City',  countryEn:'Mexico',          flag:'🇲🇽', search:['mexico city','mexico','墨西哥','墨西哥城','guadalajara','瓜达拉哈拉','monterrey','蒙特雷','cancun','坎昆'] },
  { id:'America/Tijuana',     city:'蒂华纳',    country:'墨西哥',  cityEn:'Tijuana',      countryEn:'Mexico',          flag:'🇲🇽', search:['tijuana','baja','蒂华纳'] },
  { id:'America/Guatemala',   city:'危地马拉城', country:'危地马拉', cityEn:'Guatemala City', countryEn:'Guatemala',   flag:'🇬🇹', search:['guatemala','危地马拉'] },
  { id:'America/Tegucigalpa', city:'特古西加尔巴', country:'洪都拉斯', cityEn:'Tegucigalpa', countryEn:'Honduras',    flag:'🇭🇳', search:['tegucigalpa','honduras','洪都拉斯'] },
  { id:'America/Managua',     city:'马那瓜',    country:'尼加拉瓜', cityEn:'Managua',     countryEn:'Nicaragua',       flag:'🇳🇮', search:['managua','nicaragua','尼加拉瓜','马那瓜'] },
  { id:'America/Costa_Rica',  city:'圣何塞',    country:'哥斯达黎加', cityEn:'San José',  countryEn:'Costa Rica',      flag:'🇨🇷', search:['san jose','costa rica','哥斯达黎加','圣何塞'] },
  { id:'America/Panama',      city:'巴拿马城',  country:'巴拿马',  cityEn:'Panama City',  countryEn:'Panama',          flag:'🇵🇦', search:['panama','巴拿马','巴拿马城'] },
  { id:'America/Havana',      city:'哈瓦那',    country:'古巴',    cityEn:'Havana',       countryEn:'Cuba',            flag:'🇨🇺', search:['havana','cuba','古巴','哈瓦那'] },
  { id:'America/Santo_Domingo', city:'圣多明各', country:'多米尼加', cityEn:'Santo Domingo', countryEn:'Dominican Republic', flag:'🇩🇴', search:['santo domingo','dominican','多米尼加','圣多明各'] },
  { id:'America/Port-au-Prince', city:'太子港', country:'海地',   cityEn:'Port-au-Prince', countryEn:'Haiti',          flag:'🇭🇹', search:['port-au-prince','haiti','海地','太子港'] },
  { id:'America/Nassau',      city:'拿骚',      country:'巴哈马',  cityEn:'Nassau',       countryEn:'Bahamas',         flag:'🇧🇸', search:['nassau','bahamas','巴哈马','拿骚'] },
  { id:'America/Jamaica',     city:'金斯敦',    country:'牙买加',  cityEn:'Kingston',     countryEn:'Jamaica',         flag:'🇯🇲', search:['kingston','jamaica','牙买加','金斯敦'] },
  { id:'America/Puerto_Rico', city:'圣胡安',    country:'波多黎各', cityEn:'San Juan',    countryEn:'Puerto Rico',     flag:'🇵🇷', search:['san juan','puerto rico','波多黎各','圣胡安'] },

  // ── 南美 ──────────────────────────────────────────────────────
  { id:'America/Bogota',      city:'波哥大',    country:'哥伦比亚', cityEn:'Bogotá',      countryEn:'Colombia',        flag:'🇨🇴', search:['bogota','colombia','哥伦比亚','波哥大','medellin','麦德林'] },
  { id:'America/Lima',        city:'利马',      country:'秘鲁',    cityEn:'Lima',         countryEn:'Peru',            flag:'🇵🇪', search:['lima','peru','秘鲁','利马'] },
  { id:'America/Guayaquil',   city:'瓜亚基尔',  country:'厄瓜多尔', cityEn:'Guayaquil',   countryEn:'Ecuador',         flag:'🇪🇨', search:['guayaquil','ecuador','quito','基多','厄瓜多尔','瓜亚基尔'] },
  { id:'America/Caracas',     city:'加拉加斯',  country:'委内瑞拉', cityEn:'Caracas',     countryEn:'Venezuela',       flag:'🇻🇪', search:['caracas','venezuela','委内瑞拉','加拉加斯'] },
  { id:'America/La_Paz',      city:'拉巴斯',    country:'玻利维亚', cityEn:'La Paz',      countryEn:'Bolivia',         flag:'🇧🇴', search:['la paz','bolivia','玻利维亚','拉巴斯'] },
  { id:'America/Santiago',    city:'圣地亚哥',  country:'智利',    cityEn:'Santiago',     countryEn:'Chile',           flag:'🇨🇱', search:['santiago','chile','智利','圣地亚哥'] },
  { id:'America/Asuncion',    city:'亚松森',    country:'巴拉圭',  cityEn:'Asunción',     countryEn:'Paraguay',        flag:'🇵🇾', search:['asuncion','paraguay','巴拉圭','亚松森'] },
  { id:'America/Montevideo',  city:'蒙得维的亚', country:'乌拉圭',  cityEn:'Montevideo',  countryEn:'Uruguay',         flag:'🇺🇾', search:['montevideo','uruguay','乌拉圭','蒙得维的亚'] },
  { id:'America/Argentina/Buenos_Aires', city:'布宜诺斯艾利斯', country:'阿根廷', cityEn:'Buenos Aires', countryEn:'Argentina', flag:'🇦🇷', search:['buenos aires','argentina','阿根廷','布宜诺斯艾利斯'] },
  { id:'America/Sao_Paulo',   city:'圣保罗',    country:'巴西',    cityEn:'São Paulo',    countryEn:'Brazil',          flag:'🇧🇷', search:['sao paulo','brazil','rio','巴西','圣保罗','里约','brasilia','巴西利亚','manaus','马瑙斯'] },
  { id:'America/Fortaleza',   city:'福塔雷萨',  country:'巴西',    cityEn:'Fortaleza',    countryEn:'Brazil',          flag:'🇧🇷', search:['fortaleza','recife','累西腓','福塔雷萨'] },
  { id:'America/Manaus',      city:'马瑙斯',    country:'巴西',    cityEn:'Manaus',       countryEn:'Brazil',          flag:'🇧🇷', search:['manaus','amazon','马瑙斯','亚马逊'] },
  { id:'America/Guyana',      city:'乔治敦',    country:'圭亚那',  cityEn:'Georgetown',   countryEn:'Guyana',          flag:'🇬🇾', search:['georgetown','guyana','圭亚那','乔治敦'] },
  { id:'America/Paramaribo',  city:'帕拉马里博', country:'苏里南', cityEn:'Paramaribo',   countryEn:'Suriname',        flag:'🇸🇷', search:['paramaribo','suriname','苏里南','帕拉马里博'] },

  // ── 非洲 ──────────────────────────────────────────────────────
  { id:'Africa/Casablanca',   city:'卡萨布兰卡', country:'摩洛哥', cityEn:'Casablanca',   countryEn:'Morocco',         flag:'🇲🇦', search:['casablanca','morocco','摩洛哥','卡萨布兰卡','marrakech','马拉喀什','rabat','拉巴特'] },
  { id:'Africa/Algiers',      city:'阿尔及尔',  country:'阿尔及利亚', cityEn:'Algiers',   countryEn:'Algeria',         flag:'🇩🇿', search:['algiers','algeria','阿尔及利亚','阿尔及尔'] },
  { id:'Africa/Tunis',        city:'突尼斯',    country:'突尼斯',  cityEn:'Tunis',        countryEn:'Tunisia',         flag:'🇹🇳', search:['tunis','tunisia','突尼斯'] },
  { id:'Africa/Tripoli',      city:'的黎波里',  country:'利比亚',  cityEn:'Tripoli',      countryEn:'Libya',           flag:'🇱🇾', search:['tripoli','libya','利比亚','的黎波里'] },
  { id:'Africa/Cairo',        city:'开罗',      country:'埃及',    cityEn:'Cairo',        countryEn:'Egypt',           flag:'🇪🇬', search:['cairo','egypt','埃及','开罗','alexandria','亚历山大'] },
  { id:'Africa/Khartoum',     city:'喀土穆',    country:'苏丹',    cityEn:'Khartoum',     countryEn:'Sudan',           flag:'🇸🇩', search:['khartoum','sudan','苏丹','喀土穆'] },
  { id:'Africa/Addis_Ababa',  city:'亚的斯亚贝巴', country:'埃塞俄比亚', cityEn:'Addis Ababa', countryEn:'Ethiopia',   flag:'🇪🇹', search:['addis ababa','ethiopia','埃塞俄比亚','亚的斯亚贝巴'] },
  { id:'Africa/Nairobi',      city:'内罗毕',    country:'肯尼亚',  cityEn:'Nairobi',      countryEn:'Kenya',           flag:'🇰🇪', search:['nairobi','kenya','肯尼亚','内罗毕','mombasa','蒙巴萨'] },
  { id:'Africa/Kampala',      city:'坎帕拉',    country:'乌干达',  cityEn:'Kampala',      countryEn:'Uganda',          flag:'🇺🇬', search:['kampala','uganda','乌干达','坎帕拉'] },
  { id:'Africa/Dar_es_Salaam', city:'达累斯萨拉姆', country:'坦桑尼亚', cityEn:'Dar es Salaam', countryEn:'Tanzania',  flag:'🇹🇿', search:['dar es salaam','tanzania','坦桑尼亚','达累斯萨拉姆','zanzibar','桑给巴尔'] },
  { id:'Africa/Lagos',        city:'拉各斯',    country:'尼日利亚', cityEn:'Lagos',       countryEn:'Nigeria',         flag:'🇳🇬', search:['lagos','nigeria','尼日利亚','拉各斯','abuja','阿布贾'] },
  { id:'Africa/Accra',        city:'阿克拉',    country:'加纳',    cityEn:'Accra',        countryEn:'Ghana',           flag:'🇬🇭', search:['accra','ghana','加纳','阿克拉'] },
  { id:'Africa/Dakar',        city:'达喀尔',    country:'塞内加尔', cityEn:'Dakar',       countryEn:'Senegal',         flag:'🇸🇳', search:['dakar','senegal','塞内加尔','达喀尔'] },
  { id:'Africa/Abidjan',      city:'阿比让',    country:'科特迪瓦', cityEn:'Abidjan',     countryEn:"Côte d'Ivoire",   flag:'🇨🇮', search:['abidjan','ivory coast','科特迪瓦','阿比让'] },
  { id:'Africa/Kinshasa',     city:'金沙萨',    country:'刚果(金)', cityEn:'Kinshasa',    countryEn:'DR Congo',        flag:'🇨🇩', search:['kinshasa','congo','刚果','金沙萨'] },
  { id:'Africa/Johannesburg', city:'约翰内斯堡', country:'南非',   cityEn:'Johannesburg', countryEn:'South Africa',    flag:'🇿🇦', search:['johannesburg','south africa','南非','约翰内斯堡','cape town','开普敦','durban','德班'] },
  { id:'Africa/Harare',       city:'哈拉雷',    country:'津巴布韦', cityEn:'Harare',      countryEn:'Zimbabwe',        flag:'🇿🇼', search:['harare','zimbabwe','津巴布韦','哈拉雷'] },
  { id:'Africa/Lusaka',       city:'卢萨卡',    country:'赞比亚',  cityEn:'Lusaka',       countryEn:'Zambia',          flag:'🇿🇲', search:['lusaka','zambia','赞比亚','卢萨卡'] },
  { id:'Indian/Mauritius',    city:'路易港',    country:'毛里求斯', cityEn:'Port Louis',  countryEn:'Mauritius',       flag:'🇲🇺', search:['mauritius','port louis','毛里求斯','路易港'] },
  { id:'Indian/Nairobi',      city:'马达加斯加', country:'马达加斯加', cityEn:'Antananarivo', countryEn:'Madagascar',   flag:'🇲🇬', search:['madagascar','antananarivo','马达加斯加'] },

  // ── 大洋洲 ────────────────────────────────────────────────────
  { id:'Australia/Sydney',    city:'悉尼',      country:'澳大利亚', cityEn:'Sydney',      countryEn:'Australia',       flag:'🇦🇺', search:['sydney','australia','墨尔本','澳大利亚','悉尼','melbourne','brisbane','布里斯班','canberra','堪培拉','adelaide','阿德莱德'] },
  { id:'Australia/Perth',     city:'珀斯',      country:'澳大利亚', cityEn:'Perth',       countryEn:'Australia',       flag:'🇦🇺', search:['perth','western australia','珀斯'] },
  { id:'Australia/Darwin',    city:'达尔文',    country:'澳大利亚', cityEn:'Darwin',      countryEn:'Australia',       flag:'🇦🇺', search:['darwin','northern territory','达尔文'] },
  { id:'Pacific/Auckland',    city:'奥克兰',    country:'新西兰',  cityEn:'Auckland',     countryEn:'New Zealand',     flag:'🇳🇿', search:['auckland','new zealand','nz','新西兰','奥克兰','wellington','惠灵顿','christchurch','克莱斯特彻奇'] },
  { id:'Pacific/Fiji',        city:'苏瓦',      country:'斐济',    cityEn:'Suva',         countryEn:'Fiji',            flag:'🇫🇯', search:['fiji','suva','斐济','苏瓦'] },
  { id:'Pacific/Guam',        city:'关岛',      country:'美国关岛', cityEn:'Hagåtña',     countryEn:'Guam (USA)',      flag:'🇬🇺', search:['guam','关岛'] },
  { id:'Pacific/Port_Moresby', city:'莫尔斯比港', country:'巴布亚新几内亚', cityEn:'Port Moresby', countryEn:'Papua New Guinea', flag:'🇵🇬', search:['port moresby','papua new guinea','巴布亚新几内亚','莫尔斯比港'] },
  { id:'Pacific/Noumea',      city:'努美阿',    country:'新喀里多尼亚', cityEn:'Noumea',  countryEn:'New Caledonia',   flag:'🇳🇨', search:['noumea','new caledonia','新喀里多尼亚','努美阿'] },
  { id:'Pacific/Tongatapu',   city:'努瓦洛法',  country:'汤加',    cityEn:"Nuku'alofa",   countryEn:'Tonga',           flag:'🇹🇴', search:['tonga','nuku alofa','汤加','努瓦洛法'] },
  { id:'Pacific/Apia',        city:'阿皮亚',    country:'萨摩亚',  cityEn:'Apia',         countryEn:'Samoa',           flag:'🇼🇸', search:['samoa','apia','萨摩亚','阿皮亚'] },

  // ── UTC ────────────────────────────────────────────────────────
  { id:'UTC',                  city:'UTC',       country:'协调世界时', cityEn:'UTC',       countryEn:'Coordinated Universal Time', flag:'🌐', search:['utc','gmt','协调世界时','格林威治'] },
];

// ── State ────────────────────────────────────────────────────────
let zoneA = { id:'Asia/Shanghai',    ...infoFor('Asia/Shanghai')    };
let zoneB = { id:'America/New_York', ...infoFor('America/New_York') };
let pickerTarget = 'A';
let moreZones = [];
let lockUpdate = false;

function infoFor(id) {
  return ZONE_DB.find(z => z.id === id) || { city: id, country: '', cityEn: id, countryEn: '', flag:'🌍', search:[] };
}

// ── Init ─────────────────────────────────────────────────────────
function init() {
  setNow('A');
  setInterval(refreshAll, 1000);
  setupAddSearch();
  setupPickerSearch();
}

// ── Clock ─────────────────────────────────────────────────────────
function refreshAll() {
  if (!lockUpdate) {
    const now = new Date();
    const aVal = document.getElementById('timeInputA').value;
    if (isNearNow(aVal, zoneA.id)) {
      const utcMs = Date.now();
      updateZoneDisplay('A', now, zoneA.id);
      updateZoneDisplay('B', now, zoneB.id);
      document.getElementById('timeInputA').value = currentLocalStr(zoneA.id);
      document.getElementById('timeInputB').value = currentLocalStr(zoneB.id);
      updateMoreCards(utcMs);
      return;
    }
  }
  updateMoreCards();
}

function isNearNow(dtLocalStr, tzId) {
  if (!dtLocalStr) return false;
  return dtLocalStr.slice(0,16) === currentLocalStr(tzId).slice(0,16);
}

function currentLocalStr(tzId) {
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: tzId,
    year:'numeric', month:'2-digit', day:'2-digit',
    hour:'2-digit', minute:'2-digit', hour12: false
  }).formatToParts(now);
  const get = type => parts.find(p=>p.type===type)?.value || '00';
  return `${get('year')}-${get('month')}-${get('day')}T${get('hour')}:${get('minute')}`;
}

// ── Set Now ───────────────────────────────────────────────────────
function setNow(side) {
  const tz = side === 'A' ? zoneA.id : zoneB.id;
  const val = currentLocalStr(tz);
  document.getElementById('timeInput' + side).value = val;
  onTimeChange(side, val);
}

// ── Time changed ──────────────────────────────────────────────────
function onTimeChange(side, val, propagate = true) {
  if (!val) return;
  lockUpdate = true;
  const srcTz   = side === 'A' ? zoneA.id : zoneB.id;
  const dstSide = side === 'A' ? 'B' : 'A';
  const dstTz   = side === 'A' ? zoneB.id : zoneA.id;
  const utcMs   = localStrToUtcMs(val, srcTz);
  const srcDate = new Date(utcMs);
  updateZoneDisplay(side, srcDate, srcTz);
  if (propagate) {
    document.getElementById('timeInput' + dstSide).value = utcMsToLocalStr(utcMs, dstTz);
    updateZoneDisplay(dstSide, srcDate, dstTz);
  }
  updateMoreCards(utcMs);
  setTimeout(() => { lockUpdate = false; }, 100);
}

// ── Convert helpers ────────────────────────────────────────────────
function localStrToUtcMs(str, tzId) {
  const [datePart, timePart] = str.split('T');
  const [y, mo, d] = datePart.split('-').map(Number);
  const [h, mi] = (timePart||'00:00').split(':').map(Number);
  const naiveUtc = Date.UTC(y, mo-1, d, h, mi, 0);
  const offset = getOffsetMinutes(tzId, new Date(naiveUtc));
  return naiveUtc - offset * 60000;
}

function utcMsToLocalStr(utcMs, tzId) {
  const d = new Date(utcMs);
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: tzId,
    year:'numeric', month:'2-digit', day:'2-digit',
    hour:'2-digit', minute:'2-digit', hour12:false
  }).formatToParts(d);
  const get = t => parts.find(p=>p.type===t)?.value||'00';
  return `${get('year')}-${get('month')}-${get('day')}T${get('hour')}:${get('minute')}`;
}

function getOffsetMinutes(tzId, date) {
  const parts = new Intl.DateTimeFormat('en', {
    timeZone: tzId, timeZoneName:'shortOffset'
  }).formatToParts(date);
  const p = parts.find(x => x.type==='timeZoneName');
  if (!p) return 0;
  const m = p.value.match(/([+-])(\d{1,2})(?::(\d{2}))?/);
  if (!m) return 0;
  return (m[1]==='+'?1:-1) * (parseInt(m[2])*60 + parseInt(m[3]||0));
}

function getOffsetStr(tzId, date) {
  const parts = new Intl.DateTimeFormat('en', {
    timeZone: tzId, timeZoneName:'shortOffset'
  }).formatToParts(date);
  return parts.find(x=>x.type==='timeZoneName')?.value || 'UTC';
}

// ── Update zone display ────────────────────────────────────────────
function updateZoneDisplay(side, date, tzId) {
  const info = side === 'A' ? zoneA : zoneB;
  const time = new Intl.DateTimeFormat('zh-CN', {
    timeZone: tzId, hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false
  }).format(date);
  const dateStr = new Intl.DateTimeFormat('zh-CN', {
    timeZone: tzId, year:'numeric', month:'long', day:'numeric', weekday:'short'
  }).format(date);

  document.getElementById('timeBig'   + side).textContent = time;
  document.getElementById('dateBig'   + side).textContent = dateStr;
  document.getElementById('offset'    + side).textContent = getOffsetStr(tzId, date);
  document.getElementById('flag'      + side).textContent = info.flag;
  document.getElementById('name'      + side).textContent = info.city;
  document.getElementById('country'   + side).textContent = '/ ' + info.country;
  document.getElementById('cityEn'    + side).textContent = info.cityEn + ' / ' + info.countryEn;
}

// ── Swap ───────────────────────────────────────────────────────────
function swapZones() {
  [zoneA, zoneB] = [zoneB, zoneA];
  const utcMs = localStrToUtcMs(document.getElementById('timeInputA').value || currentLocalStr(zoneA.id), zoneA.id);
  const now = new Date(utcMs);
  document.getElementById('timeInputA').value = utcMsToLocalStr(utcMs, zoneA.id);
  document.getElementById('timeInputB').value = utcMsToLocalStr(utcMs, zoneB.id);
  updateZoneDisplay('A', now, zoneA.id);
  updateZoneDisplay('B', now, zoneB.id);
  updateMoreCards(utcMs);
}

// ── Zone Picker ────────────────────────────────────────────────────
function openPicker(side) {
  pickerTarget = side;
  document.getElementById('pickerOverlay').classList.add('open');
  document.getElementById('pickerSearch').value = '';
  renderPickerList('');
  setTimeout(() => document.getElementById('pickerSearch').focus(), 50);
}

function closePicker() {
  document.getElementById('pickerOverlay').classList.remove('open');
}

function setupPickerSearch() {
  document.getElementById('pickerSearch').addEventListener('input', e => {
    renderPickerList(e.target.value.trim().toLowerCase());
  });
}

function renderPickerList(q) {
  const list = document.getElementById('pickerList');
  const hits = q
    ? ZONE_DB.filter(z =>
        z.city.includes(q) || z.country.includes(q) ||
        z.cityEn.toLowerCase().includes(q) || z.countryEn.toLowerCase().includes(q) ||
        z.id.toLowerCase().includes(q) ||
        z.search.some(e => e.includes(q))
      )
    : ZONE_DB;
  list.innerHTML = hits.map(z => `
    <li class="picker-item" data-id="${z.id}">
      <span class="pi-flag">${z.flag}</span>
      <div>
        <div class="pi-zh">${z.city} <span class="pi-country">/ ${z.country}</span></div>
        <div class="pi-id">${z.cityEn} / ${z.countryEn}</div>
      </div>
    </li>
  `).join('');
  list.querySelectorAll('.picker-item').forEach(li => {
    li.addEventListener('click', () => selectZone(li.dataset.id));
  });
}

function selectZone(id) {
  const info = infoFor(id);
  if (pickerTarget === 'A') { zoneA = { id, ...info }; }
  else                       { zoneB = { id, ...info }; }
  const aVal = document.getElementById('timeInputA').value;
  if (aVal) onTimeChange('A', aVal);
  closePicker();
}

// ── More zones ─────────────────────────────────────────────────────
function setupAddSearch() {
  const inp = document.getElementById('addSearch');
  const sug = document.getElementById('addSuggestions');
  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { sug.innerHTML=''; sug.classList.remove('open'); return; }
    const hits = ZONE_DB.filter(z =>
      z.city.includes(q) || z.country.includes(q) ||
      z.cityEn.toLowerCase().includes(q) || z.countryEn.toLowerCase().includes(q) ||
      z.id.toLowerCase().includes(q) || z.search.some(e=>e.includes(q))
    ).slice(0, 7);
    if (!hits.length) {
      sug.innerHTML='<li class="add-sug-item" style="color:var(--muted);cursor:default">没有匹配结果</li>';
      sug.classList.add('open'); return;
    }
    sug.innerHTML = hits.map(z=>`
      <li class="add-sug-item" data-id="${z.id}">
        <span class="sug-flag">${z.flag}</span>
        <span class="sug-zh">${z.city} / ${z.country}</span>
        <span class="sug-en">${z.cityEn}</span>
        ${moreZones.includes(z.id)?'<span class="sug-added">已添加</span>':''}
      </li>
    `).join('');
    sug.classList.add('open');
    sug.querySelectorAll('.add-sug-item[data-id]').forEach(li => {
      li.addEventListener('click', () => {
        if (!moreZones.includes(li.dataset.id)) {
          moreZones.push(li.dataset.id);
          buildMoreCards();
        }
        inp.value = ''; sug.innerHTML=''; sug.classList.remove('open');
      });
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.add-zone-row')) { sug.innerHTML=''; sug.classList.remove('open'); }
  });
  document.getElementById('moreResults').innerHTML =
    '<div class="more-empty">👆 搜索城市或国家来添加更多时区</div>';
}

function buildMoreCards() {
  const aVal = document.getElementById('timeInputA').value;
  const utcMs = aVal ? localStrToUtcMs(aVal, zoneA.id) : Date.now();
  const container = document.getElementById('moreResults');
  if (!moreZones.length) {
    container.innerHTML = '<div class="more-empty">👆 搜索城市或国家来添加更多时区</div>';
    return;
  }
  container.innerHTML = moreZones.map(id => {
    const info = infoFor(id);
    const d = new Date(utcMs);
    const time = new Intl.DateTimeFormat('zh-CN',{timeZone:id,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(d);
    const date = new Intl.DateTimeFormat('zh-CN',{timeZone:id,month:'short',day:'numeric',weekday:'short'}).format(d);
    const offset = getOffsetStr(id, d);
    const safeId = id.replace(/\//g,'-');
    return `
      <div class="more-item">
        <span class="mi-flag">${info.flag}</span>
        <div>
          <div class="mi-name">${info.city} <span class="mi-country">/ ${info.country}</span></div>
          <div class="mi-id">${info.cityEn} / ${info.countryEn}</div>
        </div>
        <div class="mi-right">
          <div class="mi-time" id="mt-${safeId}">${time}</div>
          <div class="mi-date" id="md-${safeId}">${date}</div>
          <div class="mi-offset">${offset}</div>
        </div>
        <button class="mi-remove" onclick="removeMore('${id}')">✕</button>
      </div>`;
  }).join('');
}

function updateMoreCards(utcMs) {
  if (!utcMs) {
    const aVal = document.getElementById('timeInputA').value;
    utcMs = aVal ? localStrToUtcMs(aVal, zoneA.id) : Date.now();
  }
  const d = new Date(utcMs);
  moreZones.forEach(id => {
    const safeId = id.replace(/\//g,'-');
    const tEl = document.getElementById('mt-' + safeId);
    const dEl = document.getElementById('md-' + safeId);
    if (!tEl) return;
    tEl.textContent = new Intl.DateTimeFormat('zh-CN',{timeZone:id,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(d);
    dEl.textContent = new Intl.DateTimeFormat('zh-CN',{timeZone:id,month:'short',day:'numeric',weekday:'short'}).format(d);
  });
}

function removeMore(id) {
  moreZones = moreZones.filter(z => z !== id);
  buildMoreCards();
}

// ── Input events ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  init();
  document.getElementById('timeInputA').addEventListener('change', e => {
    lockUpdate = true; onTimeChange('A', e.target.value);
  });
  document.getElementById('timeInputB').addEventListener('change', e => {
    lockUpdate = true; onTimeChange('B', e.target.value);
  });
});

// ── Timestamp tools ────────────────────────────────────────────────
function tsToTime() {
  const ts = parseInt(document.getElementById('tsInput').value, 10);
  if (isNaN(ts)) { showTs('❌ 请输入有效的 Unix 时间戳'); return; }
  const d = new Date(ts * 1000);
  showTs(`🕐 UTC: ${d.toISOString().replace('T',' ').slice(0,19)} UTC\n📍 上海: ${d.toLocaleString('zh-CN',{timeZone:'Asia/Shanghai'})} CST`);
}
function timeToTs() {
  const raw = document.getElementById('tsDateInput').value.trim();
  if (!raw) { showTs('❌ 请输入日期字符串'); return; }
  const d = new Date(raw);
  if (isNaN(d.getTime())) { showTs('❌ 无法解析，示例: 2024-06-01 12:00:00'); return; }
  showTs(`⚡ Unix (秒): ${Math.floor(d.getTime()/1000)}\n⚡ Unix (毫秒): ${d.getTime()}`);
}
function showTs(t) {
  const el = document.getElementById('tsResult');
  el.textContent = t;
  el.classList.add('show');
}
