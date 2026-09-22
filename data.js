const BOOK_DATA = [
  {
    "year": "2022",
    "quarter": "Q1",
    "total_entries": 48,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "2018 年 9 月，国务院印发《关于推动创新创业高质量发展打造“双创”升级版的意",
          "analysis": "",
          "raw": "【例 1-1】2018 年 9 月，国务院印发《关于推动创新创业高质量发展打造“双创”升级版的意"
        },
        {
          "id": "1-2",
          "error": "作为全国首个经济特区，深圳借助先行先试的发展优势，从小渔村跻身为国际城市。",
          "analysis": "",
          "raw": "【例 1-2】作为全国首个经济特区，深圳借助先行先试的发展优势，从小渔村跻身为国际城市。"
        },
        {
          "id": "1-3",
          "error": "“三全育人”是习近平总书记在全国思想政治教育会议上提出的育人理念，是高校坚",
          "analysis": "",
          "raw": "【例 1-3】“三全育人”是习近平总书记在全国思想政治教育会议上提出的育人理念，是高校坚"
        },
        {
          "id": "1-4",
          "error": "美国第 16 届总统林肯曾是一名辩护律师。（应改为“任”）",
          "analysis": "",
          "raw": "【例 1-4】美国第 16 届总统林肯曾是一名辩护律师。（应改为“任”）"
        },
        {
          "id": "1-5",
          "error": "自 1949 年以来，上海一直都是中国内地经济第一大市。虽然香港后来居上，但在改",
          "analysis": "",
          "raw": "【例 1-5】自 1949 年以来，上海一直都是中国内地经济第一大市。虽然香港后来居上，但在改"
        },
        {
          "id": "1-6",
          "error": "科学传播通常被认为是正确的事情，科学传播的道德德性被普遍地认为是毋庸置疑",
          "analysis": "",
          "raw": "【例 1-6】科学传播通常被认为是正确的事情，科学传播的道德德性被普遍地认为是毋庸置疑"
        },
        {
          "id": "1-7",
          "error": "在社会层面上保持无知一直以来都是被允许的吗？甚至是否是可取的？（应改为“是",
          "analysis": "",
          "raw": "【例 1-7】在社会层面上保持无知一直以来都是被允许的吗？甚至是否是可取的？（应改为“是"
        },
        {
          "id": "1-8",
          "error": "物联网为城市共享服务和运营管理提供基础底层资源，进而不断提高公共服务水平",
          "analysis": "",
          "raw": "【例 1-8】物联网为城市共享服务和运营管理提供基础底层资源，进而不断提高公共服务水平"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "",
          "analysis": "",
          "raw": "【例 2-1】"
        },
        {
          "id": "2-2",
          "error": "",
          "analysis": "",
          "raw": "【例 2-2】"
        },
        {
          "id": "2-3",
          "error": "",
          "analysis": "",
          "raw": "【例 2-3】"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "",
          "analysis": "",
          "raw": "【例 2-5】"
        },
        {
          "id": "2-6",
          "error": "",
          "analysis": "",
          "raw": "【例 2-6】"
        },
        {
          "id": "2-7",
          "error": "",
          "analysis": "",
          "raw": "【例 2-7】"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "",
          "analysis": "",
          "raw": "【例 2-9】"
        },
        {
          "id": "2-10",
          "error": "",
          "analysis": "",
          "raw": "【例 2-10】"
        },
        {
          "id": "2-11",
          "error": "",
          "analysis": "",
          "raw": "【例 2-11】"
        },
        {
          "id": "2-12",
          "error": "",
          "analysis": "",
          "raw": "【例 2-12】"
        },
        {
          "id": "2-13",
          "error": "",
          "analysis": "",
          "raw": "【例 2-13】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "In dreams, a window opens a world where logic is suspended and dead people speak.",
          "analysis": "",
          "raw": "【例 3-1】In dreams, a window opens a world where logic is suspended and dead people speak."
        },
        {
          "id": "3-2",
          "error": "It sounds nice but requires deliberately planning. （应改为“deliberate”）",
          "analysis": "",
          "raw": "【例 3-2】It sounds nice but requires deliberately planning. （应改为“deliberate”）"
        },
        {
          "id": "3-3",
          "error": "The flight attendants on CRJ-200 stands near the boarding gate. （应改为“stand”）",
          "analysis": "",
          "raw": "【例 3-3】The flight attendants on CRJ-200 stands near the boarding gate. （应改为“stand”）"
        },
        {
          "id": "3-4",
          "error": "The passenger may be in a mood when they go aboard. （应改为“passengers”）",
          "analysis": "",
          "raw": "【例 3-4】The passenger may be in a mood when they go aboard. （应改为“passengers”）"
        },
        {
          "id": "3-5",
          "error": "The flight attendants are dedicated to provide good service. （应改为“providing”）",
          "analysis": "",
          "raw": "【例 3-5】The flight attendants are dedicated to provide good service. （应改为“providing”）"
        },
        {
          "id": "3-6",
          "error": "They planed that the two routes would connect. （应改为“planned”）",
          "analysis": "",
          "raw": "【例 3-6】They planed that the two routes would connect. （应改为“planned”）"
        },
        {
          "id": "3-7",
          "error": "Xi’an is the capital of Shanxi Province. （应改为“Shannxi”）",
          "analysis": "",
          "raw": "【例 3-7】Xi’an is the capital of Shanxi Province. （应改为“Shannxi”）"
        },
        {
          "id": "3-8",
          "error": "The aircraft swerves of the runway. （应改为“off”）",
          "analysis": "",
          "raw": "【例 3-8】The aircraft swerves of the runway. （应改为“off”）"
        },
        {
          "id": "3-9",
          "error": "Fight attendants should adjust the light and temperature appropriately. （应改为",
          "analysis": "",
          "raw": "【例 3-9】Fight attendants should adjust the light and temperature appropriately. （应改为"
        },
        {
          "id": "3-10",
          "error": "The preflight briefing is usually organized by the cabin purser, who introduces flight",
          "analysis": "",
          "raw": "【例 3-10】The preflight briefing is usually organized by the cabin purser, who introduces flight"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "“庄生晓梦迷蝴蝶，望帝春心托杜鹃”应为李商隐诗作。",
          "analysis": "",
          "raw": "【例 4-1】“庄生晓梦迷蝴蝶，望帝春心托杜鹃”应为李商隐诗作。"
        },
        {
          "id": "4-2",
          "error": "“硬件系统”应为“软件系统”。",
          "analysis": "",
          "raw": "【例 4-2】“硬件系统”应为“软件系统”。"
        },
        {
          "id": "4-3",
          "error": "词语搭配不当，“速度高”应改为“速度快”。",
          "analysis": "",
          "raw": "【例 4-3】词语搭配不当，“速度高”应改为“速度快”。"
        },
        {
          "id": "4-4",
          "error": "式中“1.8”应为“18”。",
          "analysis": "",
          "raw": "【例 4-4】式中“1.8”应为“18”。"
        },
        {
          "id": "4-5",
          "error": "“1091.094”应为“1019.094”。",
          "analysis": "",
          "raw": "【例 4-5】“1091.094”应为“1019.094”。"
        },
        {
          "id": "4-6",
          "error": "二进制转换成十六进制结果有误，应为“（1C6.C）16”。",
          "analysis": "",
          "raw": "【例 4-6】二进制转换成十六进制结果有误，应为“（1C6.C）16”。"
        },
        {
          "id": "4-7",
          "error": "“ 7”应改为“7”。",
          "analysis": "",
          "raw": "【例 4-7】“ 7”应改为“7”。"
        },
        {
          "id": "4-8",
          "error": "“当员工产出更高是”应为“当员工产出更高时”。",
          "analysis": "",
          "raw": "【例 4-8】“当员工产出更高是”应为“当员工产出更高时”。"
        },
        {
          "id": "4-9",
          "error": "“清楚”应为“清除”。",
          "analysis": "",
          "raw": "【例 4-9】“清楚”应为“清除”。"
        },
        {
          "id": "4-10",
          "error": "“知道”应为“直到”。",
          "analysis": "",
          "raw": "【例 4-10】“知道”应为“直到”。"
        },
        {
          "id": "4-11",
          "error": "“3，4，5”应为“3，4.5”。",
          "analysis": "",
          "raw": "【例 4-11】“3，4，5”应为“3，4.5”。"
        },
        {
          "id": "4-12",
          "error": "“去世”应为“趋势”。",
          "analysis": "",
          "raw": "【例 4-12】“去世”应为“趋势”。"
        },
        {
          "id": "4-13",
          "error": "调用函数 GetString 与定义函数 GetAngle 名称不一致。",
          "analysis": "",
          "raw": "【例 4-13】调用函数 GetString 与定义函数 GetAngle 名称不一致。"
        },
        {
          "id": "4-14",
          "error": "代码重复。",
          "analysis": "",
          "raw": "【例 4-14】代码重复。"
        },
        {
          "id": "4-15",
          "error": "“dbSentQuery”应为“dbSendQuery”，和后面的“语法”列一致。",
          "analysis": "",
          "raw": "【例 4-15】“dbSentQuery”应为“dbSendQuery”，和后面的“语法”列一致。"
        },
        {
          "id": "4-16",
          "error": "“7080%”应为“7080”。",
          "analysis": "",
          "raw": "【例 4-16】“7080%”应为“7080”。"
        },
        {
          "id": "4-17",
          "error": "图中序号有误，有两个③。",
          "analysis": "",
          "raw": "【例 4-17】图中序号有误，有两个③。"
        }
      ]
    }
  },
  {
    "year": "2022",
    "quarter": "Q3",
    "total_entries": 46,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "纵观经济、社会、生态和民生四大领域，经济运行稳中有进，改革开放取得新突破；",
          "analysis": "",
          "raw": "【例 1-1】纵观经济、社会、生态和民生四大领域，经济运行稳中有进，改革开放取得新突破；"
        },
        {
          "id": "1-2",
          "error": "1959—1961 年三年自然灾害时期，对“大跃进”造成的经济失调，党中央试图调整城",
          "analysis": "",
          "raw": "【例 1-2】1959—1961 年三年自然灾害时期，对“大跃进”造成的经济失调，党中央试图调整城"
        },
        {
          "id": "1-3",
          "error": "营造学社以朱启钤任社长，并称当时中国建筑界的“北梁南刘”的梁思成与刘敦桢分",
          "analysis": "",
          "raw": "【例 1-3】营造学社以朱启钤任社长，并称当时中国建筑界的“北梁南刘”的梁思成与刘敦桢分"
        },
        {
          "id": "1-4",
          "error": "习近平总书记“4.19”重要讲话。2016 年 4 月 19 日上午，习近平总书记在京主持召",
          "analysis": "",
          "raw": "【例 1-4】习近平总书记“4.19”重要讲话。2016 年 4 月 19 日上午，习近平总书记在京主持召"
        },
        {
          "id": "1-5",
          "error": "“文化大革命”时期，我国商学理论的研究受到极大的破坏，刚刚开始的对社会主义",
          "analysis": "",
          "raw": "【例 1-5】“文化大革命”时期，我国商学理论的研究受到极大的破坏，刚刚开始的对社会主义"
        },
        {
          "id": "1-6",
          "error": "党的十九大报告指出，农业、农村、农民问题是关系国计民生的根本性问题，必须始",
          "analysis": "",
          "raw": "【例 1-6】党的十九大报告指出，农业、农村、农民问题是关系国计民生的根本性问题，必须始"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "",
          "analysis": "",
          "raw": "【例 2-1】"
        },
        {
          "id": "2-2",
          "error": "",
          "analysis": "",
          "raw": "【例 2-2】"
        },
        {
          "id": "2-3",
          "error": "",
          "analysis": "",
          "raw": "【例 2-3】"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "",
          "analysis": "",
          "raw": "【例 2-5】"
        },
        {
          "id": "2-6",
          "error": "",
          "analysis": "",
          "raw": "【例 2-6】"
        },
        {
          "id": "2-7",
          "error": "",
          "analysis": "",
          "raw": "【例 2-7】"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "",
          "analysis": "",
          "raw": "【例 2-9】"
        },
        {
          "id": "2-10",
          "error": "",
          "analysis": "",
          "raw": "【例 2-10】"
        },
        {
          "id": "2-11",
          "error": "",
          "analysis": "",
          "raw": "【例 2-11】"
        },
        {
          "id": "2-12",
          "error": "",
          "analysis": "",
          "raw": "【例 2-12】"
        },
        {
          "id": "2-13",
          "error": "",
          "analysis": "",
          "raw": "【例 2-13】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "The exporter and the importer signs a dealership agreement and the two sides thus establish a",
          "analysis": "",
          "raw": "【例 3-1】The exporter and the importer signs a dealership agreement and the two sides thus establish a"
        },
        {
          "id": "3-2",
          "error": "The Expo, also known as World’s Fair, which has been organized for 40 times. （应删除",
          "analysis": "",
          "raw": "【例 3-2】The Expo, also known as World’s Fair, which has been organized for 40 times. （应删除"
        },
        {
          "id": "3-3",
          "error": "In the early 1980s, foreign investors provide directly, or on the basis of credit, the machinery",
          "analysis": "",
          "raw": "【例 3-3】In the early 1980s, foreign investors provide directly, or on the basis of credit, the machinery"
        },
        {
          "id": "3-4",
          "error": "It is required that the exporter covers the expense of freight. （应改为“cover”）",
          "analysis": "",
          "raw": "【例 3-4】It is required that the exporter covers the expense of freight. （应改为“cover”）"
        },
        {
          "id": "3-5",
          "error": "He is going to sell 100 bushel of corns to the buyer. （应改为“bushels”）",
          "analysis": "",
          "raw": "【例 3-5】He is going to sell 100 bushel of corns to the buyer. （应改为“bushels”）"
        },
        {
          "id": "3-6",
          "error": "The seller should delivery the cargoes at the point reachable for the tackle of the ship. （应改",
          "analysis": "",
          "raw": "【例 3-6】The seller should delivery the cargoes at the point reachable for the tackle of the ship. （应改"
        },
        {
          "id": "3-7",
          "error": "A third-party trading house buys the form’s counter-purchase credits and sells them to another",
          "analysis": "",
          "raw": "【例 3-7】A third-party trading house buys the form’s counter-purchase credits and sells them to another"
        },
        {
          "id": "3-8",
          "error": "DNA testing is also the latest rage a many passionate genealogists. （应改为“among”）",
          "analysis": "",
          "raw": "【例 3-8】DNA testing is also the latest rage a many passionate genealogists. （应改为“among”）"
        },
        {
          "id": "3-9",
          "error": "原文：But even then he publicly regretted not his actions but only his decision to conduct his",
          "analysis": "",
          "raw": "【例 3-9】原文：But even then he publicly regretted not his actions but only his decision to conduct his"
        },
        {
          "id": "3-10",
          "error": "原文：Rising prices have kept spending up (apples are 15% pricier than a year ago) but that",
          "analysis": "",
          "raw": "【例 3-10】原文：Rising prices have kept spending up (apples are 15% pricier than a year ago) but that"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "“变理声明”应为“变量声明”。",
          "analysis": "",
          "raw": "【例 4-1】“变理声明”应为“变量声明”。"
        },
        {
          "id": "4-2",
          "error": "“金球”应为“全球”。",
          "analysis": "",
          "raw": "【例 4-2】“金球”应为“全球”。"
        },
        {
          "id": "4-3",
          "error": "“竞骋”应为“竞聘”。",
          "analysis": "",
          "raw": "【例 4-3】“竞骋”应为“竞聘”。"
        },
        {
          "id": "4-4",
          "error": "“峰恋重叠”应为“峰峦重叠”。",
          "analysis": "",
          "raw": "【例 4-4】“峰恋重叠”应为“峰峦重叠”。"
        },
        {
          "id": "4-5",
          "error": "“英尺”换算为“米”，41000 英尺应为 12496.8 米。另外，从理论上来说，最大巡",
          "analysis": "",
          "raw": "【例 4-5】“英尺”换算为“米”，41000 英尺应为 12496.8 米。另外，从理论上来说，最大巡"
        },
        {
          "id": "4-6",
          "error": "1.17 应为 1.35。",
          "analysis": "",
          "raw": "【例 4-6】1.17 应为 1.35。"
        },
        {
          "id": "4-7",
          "error": "“巴勒斯坦”应为“巴基斯坦”。",
          "analysis": "",
          "raw": "【例 4-7】“巴勒斯坦”应为“巴基斯坦”。"
        },
        {
          "id": "4-8",
          "error": "从 10 个球中取出 2 个球，可能性总数应为 (10×9) / 2 = 45（是组合数，不是排列数），",
          "analysis": "",
          "raw": "【例 4-8】从 10 个球中取出 2 个球，可能性总数应为 (10×9) / 2 = 45（是组合数，不是排列数），"
        },
        {
          "id": "4-9",
          "error": "帕格尼尼的生卒年应为 1782—1840。",
          "analysis": "",
          "raw": "【例 4-9】帕格尼尼的生卒年应为 1782—1840。"
        },
        {
          "id": "4-10",
          "error": "程序中第 4 行的 Cusor 应为 Cursor。",
          "analysis": "",
          "raw": "【例 4-10】程序中第 4 行的 Cusor 应为 Cursor。"
        },
        {
          "id": "4-11",
          "error": "程序中第 28、29 行的 pannel 应为 panel。",
          "analysis": "",
          "raw": "【例 4-11】程序中第 28、29 行的 pannel 应为 panel。"
        },
        {
          "id": "4-12",
          "error": "程序中第 4 行的 rigde 应为 ridge。",
          "analysis": "",
          "raw": "【例 4-12】程序中第 4 行的 rigde 应为 ridge。"
        },
        {
          "id": "4-13",
          "error": "五音为“宫、商、角、徵、羽”，图中“徽”应为“徵”。",
          "analysis": "",
          "raw": "【例 4-13】五音为“宫、商、角、徵、羽”，图中“徽”应为“徵”。"
        },
        {
          "id": "4-14",
          "error": "表中最大射程与文不对应，4800 千米应为 4800 米。",
          "analysis": "",
          "raw": "【例 4-14】表中最大射程与文不对应，4800 千米应为 4800 米。"
        },
        {
          "id": "4-15",
          "error": "floor 函数、shuffle 函数对应示例有误。",
          "analysis": "",
          "raw": "【例 4-15】floor 函数、shuffle 函数对应示例有误。"
        },
        {
          "id": "4-16",
          "error": "图中“RNA 复制”应为“DNA 复制”。",
          "analysis": "",
          "raw": "【例 4-16】图中“RNA 复制”应为“DNA 复制”。"
        },
        {
          "id": "4-17",
          "error": "图中两处“业务问题”应为“业务目标”。",
          "analysis": "",
          "raw": "【例 4-17】 图中两处“业务问题”应为“业务目标”。"
        }
      ]
    }
  },
  {
    "year": "2022",
    "quarter": "Q2",
    "total_entries": 39,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "据不完全统计，全国已成立的省（自治区）市一级的具有独立社团法人资格的物业",
          "analysis": "",
          "raw": "【例 1-1】据不完全统计，全国已成立的省（自治区）市一级的具有独立社团法人资格的物业"
        },
        {
          "id": "1-2",
          "error": "在卢曼看来，希腊、罗马、中国、伊斯兰、印度、中世纪的欧洲和盎格鲁-撒克逊地",
          "analysis": "",
          "raw": "【例 1-2】在卢曼看来，希腊、罗马、中国、伊斯兰、印度、中世纪的欧洲和盎格鲁-撒克逊地"
        },
        {
          "id": "1-3",
          "error": "其实在为她救治时，科尔夫还顶着另外的压力，因为在德国侵占荷兰期间，她是一",
          "analysis": "",
          "raw": "【例 1-3】其实在为她救治时，科尔夫还顶着另外的压力，因为在德国侵占荷兰期间，她是一"
        },
        {
          "id": "1-4",
          "error": "日出而作，日落而息。（应改为“日入而息”）",
          "analysis": "",
          "raw": "【例 1-4】日出而作，日落而息。（应改为“日入而息”）"
        },
        {
          "id": "1-5",
          "error": "天降大任于斯人也，必先苦其心志，劳其筋骨。（应改为“天将降大任于是人也”）",
          "analysis": "",
          "raw": "【例 1-5】天降大任于斯人也，必先苦其心志，劳其筋骨。（应改为“天将降大任于是人也”）"
        },
        {
          "id": "1-6",
          "error": "皮之不存，毛之焉附？（应改为“毛将焉附”）",
          "analysis": "",
          "raw": "【例 1-6】皮之不存，毛之焉附？（应改为“毛将焉附”）"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "",
          "analysis": "",
          "raw": "【例 2-1】"
        },
        {
          "id": "2-2",
          "error": "",
          "analysis": "",
          "raw": "【例 2-2】"
        },
        {
          "id": "2-3",
          "error": "",
          "analysis": "",
          "raw": "【例 2-3】"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "",
          "analysis": "",
          "raw": "【例 2-5】"
        },
        {
          "id": "2-6",
          "error": "",
          "analysis": "",
          "raw": "【例 2-6】"
        },
        {
          "id": "2-7",
          "error": "",
          "analysis": "",
          "raw": "【例 2-7】"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "",
          "analysis": "",
          "raw": "【例 2-9】"
        },
        {
          "id": "2-10",
          "error": "",
          "analysis": "",
          "raw": "【例 2-10】"
        },
        {
          "id": "2-11",
          "error": "",
          "analysis": "",
          "raw": "【例 2-11】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "In the Qin Dynasty, armored vehicles appeared, which was a four-wheeled vehicle. （应改",
          "analysis": "",
          "raw": "【例 3-1】In the Qin Dynasty, armored vehicles appeared, which was a four-wheeled vehicle. （应改"
        },
        {
          "id": "3-2",
          "error": "A nationwide water transport system were established. （应改为“was”）",
          "analysis": "",
          "raw": "【例 3-2】A nationwide water transport system were established. （应改为“was”）"
        },
        {
          "id": "3-3",
          "error": "When Emperor Wu was in the reign of the Han Dynasty, water transportation developed very",
          "analysis": "",
          "raw": "【例 3-3】When Emperor Wu was in the reign of the Han Dynasty, water transportation developed very"
        },
        {
          "id": "3-4",
          "error": "They acted in an very orderly manner. （应改为“a”）",
          "analysis": "",
          "raw": "【例 3-4】They acted in an very orderly manner. （应改为“a”）"
        },
        {
          "id": "3-5",
          "error": "He An built a two-wheeled vehicle, with a guide wheel in front and a follower wheel behind",
          "analysis": "",
          "raw": "【例 3-5】He An built a two-wheeled vehicle, with a guide wheel in front and a follower wheel behind"
        },
        {
          "id": "3-6",
          "error": "In the Spring and Autumn Period, a cart with a capacity of 50 Dan (1 Dan is equal to 103.5",
          "analysis": "",
          "raw": "【例 3-6】In the Spring and Autumn Period, a cart with a capacity of 50 Dan (1 Dan is equal to 103.5"
        },
        {
          "id": "3-7",
          "error": "In 1980, two large painted chariots were unearthed from the Terra-Cotta Warrior of First",
          "analysis": "",
          "raw": "【例 3-7】In 1980, two large painted chariots were unearthed from the Terra-Cotta Warrior of First"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "“相应比”应为“响应比”，“相应时间”应为“响应时间”。",
          "analysis": "",
          "raw": "【例 4-1】“相应比”应为“响应比”，“相应时间”应为“响应时间”。"
        },
        {
          "id": "4-2",
          "error": "“骰于”应为“骰子”。",
          "analysis": "",
          "raw": "【例 4-2】“骰于”应为“骰子”。"
        },
        {
          "id": "4-3",
          "error": "“手机”应为“手枪”。",
          "analysis": "",
          "raw": "【例 4-3】“手机”应为“手枪”。"
        },
        {
          "id": "4-4",
          "error": "结合上下文，家庭年收入应该是 80000 元。",
          "analysis": "",
          "raw": "【例 4-4】 结合上下文，家庭年收入应该是 80000 元。"
        },
        {
          "id": "4-5",
          "error": "小数部分应当乘以 16 进而取整，而不是乘以 10。",
          "analysis": "",
          "raw": "【例 4-5】小数部分应当乘以 16 进而取整，而不是乘以 10。"
        },
        {
          "id": "4-6",
          "error": "计算结果应为 100 000（元）。",
          "analysis": "",
          "raw": "【例 4-6】计算结果应为 100 000（元）。"
        },
        {
          "id": "4-7",
          "error": "这里“杜曲花光浓似酒”并非杜甫诗句，而是宋代郑文宝的诗句。",
          "analysis": "",
          "raw": "【例 4-7】这里“杜曲花光浓似酒”并非杜甫诗句，而是宋代郑文宝的诗句。"
        },
        {
          "id": "4-8",
          "error": "文件引用错误。文中引用内容是关于“提升学校治理水平”的，而不是“提升信息",
          "analysis": "",
          "raw": "【例 4-8】文件引用错误。文中引用内容是关于“提升学校治理水平”的，而不是“提升信息"
        },
        {
          "id": "4-9",
          "error": "文中介绍的是批发商的优势，图中“零售商”（标红处）错误，应改为“批发商”。",
          "analysis": "",
          "raw": "【例 4-9】文中介绍的是批发商的优势，图中“零售商”（标红处）错误，应改为“批发商”。"
        },
        {
          "id": "4-10",
          "error": "图中将内存容量和存储容量混淆。",
          "analysis": "",
          "raw": "【例 4-10】图中将内存容量和存储容量混淆。"
        },
        {
          "id": "4-11",
          "error": "根据判断条件，代码 02 语句中的 year%100==0 应为 year%400==0。",
          "analysis": "",
          "raw": "【例 4-11】根据判断条件，代码 02 语句中的 year%100==0 应为 year%400==0。"
        },
        {
          "id": "4-12",
          "error": "执行结果中，“组合后”的字符“土耳其”应为“巴西”。",
          "analysis": "",
          "raw": "【例 4-12】执行结果中，“组合后”的字符“土耳其”应为“巴西”。"
        },
        {
          "id": "4-13",
          "error": "表文不一致，文中提到 5 个要求，表中只列出了 4 个。",
          "analysis": "",
          "raw": "【例 4-13】表文不一致，文中提到 5 个要求，表中只列出了 4 个。"
        },
        {
          "id": "4-14",
          "error": "图文不对应。",
          "analysis": "",
          "raw": "【例 4-14】图文不对应。"
        },
        {
          "id": "4-15",
          "error": "表中数据有误，应为 350 万美元。",
          "analysis": "",
          "raw": "【例 4-15】表中数据有误，应为 350 万美元。"
        }
      ]
    }
  },
  {
    "year": "2022",
    "quarter": "Q4",
    "total_entries": 44,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "2019 年 3 月 18 日，习近平总书记在学校思想政治理论课教师座谈会上进一步强调，",
          "analysis": "",
          "raw": "【例 1-1】2019 年 3 月 18 日，习近平总书记在学校思想政治理论课教师座谈会上进一步强调，"
        },
        {
          "id": "1-2",
          "error": "“十三五”规划主要目标任务胜利完成，中国民族伟大复兴向前迈出了新的一大步。",
          "analysis": "",
          "raw": "【例 1-2】“十三五”规划主要目标任务胜利完成，中国民族伟大复兴向前迈出了新的一大步。"
        },
        {
          "id": "1-3",
          "error": "在社会主义现代化建设新征程上，我们要深入学习贯彻习近平总书记重要讲话精神，",
          "analysis": "",
          "raw": "【例 1-3】在社会主义现代化建设新征程上，我们要深入学习贯彻习近平总书记重要讲话精神，"
        },
        {
          "id": "1-4",
          "error": "实现好、维护好、发展好最大广大人民的根本利益，造福劳动者是习近平新时代中",
          "analysis": "",
          "raw": "【例 1-4】实现好、维护好、发展好最大广大人民的根本利益，造福劳动者是习近平新时代中"
        },
        {
          "id": "1-5",
          "error": "新时代大学生作为中国特色社会主义的接班人，作为中国梦的奋斗者、创造者，若",
          "analysis": "",
          "raw": "【例 1-5】新时代大学生作为中国特色社会主义的接班人，作为中国梦的奋斗者、创造者，若"
        },
        {
          "id": "1-6",
          "error": "中国特色社会主义进入新时代，面对纷繁复杂的国际社会和多元的社会意识形态，",
          "analysis": "",
          "raw": "【例 1-6】中国特色社会主义进入新时代，面对纷繁复杂的国际社会和多元的社会意识形态，"
        },
        {
          "id": "1-7",
          "error": "没有任何问题可以置之度外，因为它们彼此关联，失之毫厘，谬以千里。（应改为“置",
          "analysis": "",
          "raw": "【例 1-7】没有任何问题可以置之度外，因为它们彼此关联，失之毫厘，谬以千里。（应改为“置"
        },
        {
          "id": "1-8",
          "error": "有些书籍过于专业性和偏向性，虽然每一次翻阅这些埃及学专著都受益匪浅，但是",
          "analysis": "",
          "raw": "【例 1-8】有些书籍过于专业性和偏向性，虽然每一次翻阅这些埃及学专著都受益匪浅，但是"
        },
        {
          "id": "1-9",
          "error": "早在战国时期，中国人将关于自然界的最基本规律的学问称之为“物理”，泛指万物",
          "analysis": "",
          "raw": "【例 1-9】早在战国时期，中国人将关于自然界的最基本规律的学问称之为“物理”，泛指万物"
        },
        {
          "id": "1-10",
          "error": "这套书能够顺利付梓出版，还是让我得以一偿宿愿。（“付梓”和“出版”应删其一）",
          "analysis": "",
          "raw": "【例 1-10】这套书能够顺利付梓出版，还是让我得以一偿宿愿。（“付梓”和“出版”应删其一）"
        },
        {
          "id": "1-11",
          "error": "我国《精神卫生法》将精神障碍患者的非自愿住院的决定权授予给医疗机构及精神",
          "analysis": "",
          "raw": "【例 1-11】我国《精神卫生法》将精神障碍患者的非自愿住院的决定权授予给医疗机构及精神"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "",
          "analysis": "",
          "raw": "【例 2-1】"
        },
        {
          "id": "2-2",
          "error": "",
          "analysis": "",
          "raw": "【例 2-2】"
        },
        {
          "id": "2-3",
          "error": "",
          "analysis": "",
          "raw": "【例 2-3】"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "",
          "analysis": "",
          "raw": "【例 2-5】"
        },
        {
          "id": "2-6",
          "error": "",
          "analysis": "",
          "raw": "【例 2-6】"
        },
        {
          "id": "2-7",
          "error": "",
          "analysis": "",
          "raw": "【例 2-7】"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "",
          "analysis": "",
          "raw": "【例 2-9】"
        },
        {
          "id": "2-10",
          "error": "",
          "analysis": "",
          "raw": "【例 2-10】"
        },
        {
          "id": "2-11",
          "error": "",
          "analysis": "",
          "raw": "【例 2-11】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "The star on the top of the Christmas tree signifies the special star, in the Bible, which",
          "analysis": "",
          "raw": "【例 3-1】 The star on the top of the Christmas tree signifies the special star, in the Bible, which"
        },
        {
          "id": "3-2",
          "error": "Fengshui is a great treasure of the Chinese traditional culture. It is the cultural symbol of",
          "analysis": "",
          "raw": "【例 3-2】 Fengshui is a great treasure of the Chinese traditional culture. It is the cultural symbol of"
        },
        {
          "id": "3-3",
          "error": "If there is any trade disputes, standard interpretation of price terms can be consulted to judge",
          "analysis": "",
          "raw": "【例 3-3】If there is any trade disputes, standard interpretation of price terms can be consulted to judge"
        },
        {
          "id": "3-4",
          "error": "Some types of source documents is prepared for every transaction.（应改为“are”）",
          "analysis": "",
          "raw": "【例 3-4】Some types of source documents is prepared for every transaction.（应改为“are”）"
        },
        {
          "id": "3-5",
          "error": "The secret of invention in ceaseless effort.（应改为“lies in”）",
          "analysis": "",
          "raw": "【例 3-5】The secret of invention in ceaseless effort.（应改为“lies in”）"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "“020”应为“O2O”。",
          "analysis": "",
          "raw": "【例 4-1】“020”应为“O2O”。"
        },
        {
          "id": "4-2",
          "error": "多字“是”。",
          "analysis": "",
          "raw": "【例 4-2】多字“是”。"
        },
        {
          "id": "4-3",
          "error": "“特点”应为“缺点”。",
          "analysis": "",
          "raw": "【例 4-3】“特点”应为“缺点”。"
        },
        {
          "id": "4-4",
          "error": "“两祖”应为“两组”。",
          "analysis": "",
          "raw": "【例 4-4】“两祖”应为“两组”。"
        },
        {
          "id": "4-5",
          "error": "“ 70～70 分”应为“70～79 分”。",
          "analysis": "",
          "raw": "【例 4-5】“ 70～70 分”应为“70～79 分”。"
        },
        {
          "id": "4-6",
          "error": "“1597－1560 年间”应为“1597－1600 年间”（根据上下文）。",
          "analysis": "",
          "raw": "【例 4-6】“1597－1560 年间”应为“1597－1600 年间”（根据上下文）。"
        },
        {
          "id": "4-7",
          "error": "“𝑠12”应为“𝑠22”。",
          "analysis": "",
          "raw": "【例 4-7】“𝑠12”应为“𝑠22”。"
        },
        {
          "id": "4-8",
          "error": "“飞毛脚”应为“飞毛腿”。",
          "analysis": "",
          "raw": "【例 4-8】“飞毛脚”应为“飞毛腿”。"
        },
        {
          "id": "4-9",
          "error": "《饮酒二十五首之五》应为《饮酒二十首之五》。",
          "analysis": "",
          "raw": "【例 4-9】《饮酒二十五首之五》应为《饮酒二十首之五》。"
        },
        {
          "id": "4-10",
          "error": "定义错误。",
          "analysis": "",
          "raw": "【例 4-10】定义错误。"
        },
        {
          "id": "4-11",
          "error": "“绿化率”“绿地率”概念混淆。",
          "analysis": "",
          "raw": "【例 4-11】“绿化率”“绿地率”概念混淆。"
        },
        {
          "id": "4-12",
          "error": "文中条件是“能同时被 4 和 100 整除”，程序仅满足“被 4 整除”，未满足“被 100",
          "analysis": "",
          "raw": "【例 4-12】文中条件是“能同时被 4 和 100 整除”，程序仅满足“被 4 整除”，未满足“被 100"
        },
        {
          "id": "4-13",
          "error": "“政府工作提出”应为“《政府工作报告》提出”。",
          "analysis": "",
          "raw": "【例 4-13】“政府工作提出”应为“《政府工作报告》提出”。"
        },
        {
          "id": "4-14",
          "error": "圈中的数字应改为“2”，否则不符合题目要求（凑 9 连线）。",
          "analysis": "",
          "raw": "【例 4-14】圈中的数字应改为“2”，否则不符合题目要求（凑 9 连线）。"
        },
        {
          "id": "4-15",
          "error": "“株州”应为“株洲”。",
          "analysis": "",
          "raw": "【例 4-15】“株州”应为“株洲”。"
        },
        {
          "id": "4-16",
          "error": "少字“元”，应为“5000 万美元”。",
          "analysis": "",
          "raw": "【例 4-16】少字“元”，应为“5000 万美元”。"
        },
        {
          "id": "4-17",
          "error": "“a > b”应为“a < b”。",
          "analysis": "",
          "raw": "【例 4-17】“a > b”应为“a < b”。"
        }
      ]
    }
  },
  {
    "year": "2023",
    "quarter": "Q1",
    "total_entries": 53,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "2002 年，江泽民同志在中国共产党第十六次全国人民代表大会上的报告中进一步指",
          "analysis": "",
          "raw": "【例 1-1】2002 年，江泽民同志在中国共产党第十六次全国人民代表大会上的报告中进一步指"
        },
        {
          "id": "1-2",
          "error": "1996 年党的六中全会确定了加强精神文明建设的方针，里面蕴含着大量的要促进信",
          "analysis": "",
          "raw": "【例 1-2】1996 年党的六中全会确定了加强精神文明建设的方针，里面蕴含着大量的要促进信"
        },
        {
          "id": "1-3",
          "error": "一些国家的法律、法规规定高级公职人员必须向专门监督机关申报个人财产，公职",
          "analysis": "",
          "raw": "【例 1-3】一些国家的法律、法规规定高级公职人员必须向专门监督机关申报个人财产，公职"
        },
        {
          "id": "1-4",
          "error": "把生态文明建设融合贯穿到经济、政治、文化、社会建设的各方面和全过程是实现",
          "analysis": "",
          "raw": "【例 1-4】把生态文明建设融合贯穿到经济、政治、文化、社会建设的各方面和全过程是实现"
        },
        {
          "id": "1-5",
          "error": "如今中国大陆通行的简化汉字已经成为中国人生活的一部分，而中国的香港、澳门、",
          "analysis": "",
          "raw": "【例 1-5】如今中国大陆通行的简化汉字已经成为中国人生活的一部分，而中国的香港、澳门、"
        },
        {
          "id": "1-6",
          "error": "微信是使用率最高的交互应用程序之一。国内大陆有智能手机的用户，几乎都会使",
          "analysis": "",
          "raw": "【例 1-6】微信是使用率最高的交互应用程序之一。国内大陆有智能手机的用户，几乎都会使"
        },
        {
          "id": "1-7",
          "error": "在中国长期占统治地位的思想—儒家思想，反对奢侈浪费，推崇朴素而简单的生活。",
          "analysis": "",
          "raw": "【例 1-7】在中国长期占统治地位的思想—儒家思想，反对奢侈浪费，推崇朴素而简单的生活。"
        },
        {
          "id": "1-8",
          "error": "在议题设置方面，政府新闻发布已经形成了“事前预告——事中进度——连续引导",
          "analysis": "",
          "raw": "【例 1-8】在议题设置方面，政府新闻发布已经形成了“事前预告——事中进度——连续引导"
        },
        {
          "id": "1-9",
          "error": "作者 2005-2017 年负责国务院发展研究中心金融所领导的“中国注册金融分析师培养",
          "analysis": "",
          "raw": "【例 1-9】作者 2005-2017 年负责国务院发展研究中心金融所领导的“中国注册金融分析师培养"
        },
        {
          "id": "1-10",
          "error": "这种生活方式难道不会显得太“蚱蜢化”!?（应改为“?!”）",
          "analysis": "",
          "raw": "【例 1-10】这种生活方式难道不会显得太“蚱蜢化”!?（应改为“?!”）"
        },
        {
          "id": "1-11",
          "error": "贝尔.资本主义文化矛盾[M].赵一凡,等译.北京:三联书店出版社,1992.（应改为“生",
          "analysis": "",
          "raw": "【例 1-11】贝尔.资本主义文化矛盾[M].赵一凡,等译.北京:三联书店出版社,1992.（应改为“生"
        },
        {
          "id": "1-12",
          "error": "三浦展.第四消费时代[M].马奈,译.上海:东方出版社,2014.（应改为“北京”）",
          "analysis": "",
          "raw": "【例 1-12】三浦展.第四消费时代[M].马奈,译.上海:东方出版社,2014.（应改为“北京”）"
        },
        {
          "id": "1-13",
          "error": "王永贵.客户关系管理（精要版）[M].北京:高等教育部出版社,2018. （应改为“高",
          "analysis": "",
          "raw": "【例 1-13】王永贵.客户关系管理（精要版）[M].北京:高等教育部出版社,2018. （应改为“高"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "",
          "analysis": "",
          "raw": "【例 2-1】"
        },
        {
          "id": "2-2",
          "error": "",
          "analysis": "",
          "raw": "【例 2-2】"
        },
        {
          "id": "2-3",
          "error": "",
          "analysis": "",
          "raw": "【例 2-3】"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "",
          "analysis": "",
          "raw": "【例 2-5】"
        },
        {
          "id": "2-6",
          "error": "",
          "analysis": "",
          "raw": "【例 2-6】"
        },
        {
          "id": "2-7",
          "error": "",
          "analysis": "",
          "raw": "【例 2-7】"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "",
          "analysis": "",
          "raw": "【例 2-9】"
        },
        {
          "id": "2-10",
          "error": "",
          "analysis": "",
          "raw": "【例 2-10】"
        },
        {
          "id": "2-11",
          "error": "",
          "analysis": "",
          "raw": "【例 2-11】"
        },
        {
          "id": "2-12",
          "error": "",
          "analysis": "",
          "raw": "【例 2-12】"
        },
        {
          "id": "2-13",
          "error": "",
          "analysis": "",
          "raw": "【例 2-13】"
        },
        {
          "id": "2-14",
          "error": "",
          "analysis": "",
          "raw": "【例 2-14】"
        },
        {
          "id": "2-15",
          "error": "",
          "analysis": "",
          "raw": "【例 2-15】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "The big yellow gown wearing by Rihanna made Guo Pei in the spotlight. （应改为 worn）",
          "analysis": "",
          "raw": "【例 3-1】The big yellow gown wearing by Rihanna made Guo Pei in the spotlight. （应改为 worn）"
        },
        {
          "id": "3-2",
          "error": "T-shirts with slogans has been turned into art objects. （应改为 have）",
          "analysis": "",
          "raw": "【例 3-2】T-shirts with slogans has been turned into art objects. （应改为 have）"
        },
        {
          "id": "3-3",
          "error": "In what sense the T-shirt, as a graphic tool, has become a mandatory means of sartorial",
          "analysis": "",
          "raw": "【例 3-3】In what sense the T-shirt, as a graphic tool, has become a mandatory means of sartorial"
        },
        {
          "id": "3-4",
          "error": "In the concluding paragraph, restatement or final comment are required. （应改为 is）",
          "analysis": "",
          "raw": "【例 3-4】In the concluding paragraph, restatement or final comment are required. （应改为 is）"
        },
        {
          "id": "3-5",
          "error": "Once again, the issue about saving money for your future or spend tomorrow’s money for",
          "analysis": "",
          "raw": "【例 3-5】Once again, the issue about saving money for your future or spend tomorrow’s money for"
        },
        {
          "id": "3-6",
          "error": "How would you use your own psychological features as an audience to design your own",
          "analysis": "",
          "raw": "【例 3-6】How would you use your own psychological features as an audience to design your own"
        },
        {
          "id": "3-7",
          "error": "For international sales, wire transfers and credit cards are the most common used",
          "analysis": "",
          "raw": "【例 3-7】For international sales, wire transfers and credit cards are the most common used"
        },
        {
          "id": "3-8",
          "error": "Ms. Cummings asserted that lower fares would attract passengers to board pilotless aircrafts.",
          "analysis": "",
          "raw": "【例 3-8】Ms. Cummings asserted that lower fares would attract passengers to board pilotless aircrafts."
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "康有为于 1898 年开始上书要求变法，不是 1988 年。",
          "analysis": "",
          "raw": "【例 4-1】康有为于 1898 年开始上书要求变法，不是 1988 年。"
        },
        {
          "id": "4-2",
          "error": "碳和氧气发生反应生成二氧化碳，不是二氧化硫。",
          "analysis": "",
          "raw": "【例 4-2】碳和氧气发生反应生成二氧化碳，不是二氧化硫。"
        },
        {
          "id": "4-3",
          "error": "“1990 年秋季”应为“1900 年秋季”。",
          "analysis": "",
          "raw": "【例 4-3】“1990 年秋季”应为“1900 年秋季”。"
        },
        {
          "id": "4-4",
          "error": "二进制转换八进制结果 114.1O 应为 114.4O。",
          "analysis": "",
          "raw": "【例 4-4】二进制转换八进制结果 114.1O 应为 114.4O。"
        },
        {
          "id": "4-5",
          "error": "中值算式（6500+60000）/2 应为（6500+6000）/2。",
          "analysis": "",
          "raw": "【例 4-5】中值算式（6500+60000）/2 应为（6500+6000）/2。"
        },
        {
          "id": "4-6",
          "error": "被除数 161 216 应为 1 161 216，除数 600 应为 6000。",
          "analysis": "",
          "raw": "【例 4-6】被除数 161 216 应为 1 161 216，除数 600 应为 6000。"
        },
        {
          "id": "4-7",
          "error": "除数 10 应为 100。",
          "analysis": "",
          "raw": "【例 4-7】除数 10 应为 100。"
        },
        {
          "id": "4-8",
          "error": "数据引用错误，96 应为 86。",
          "analysis": "",
          "raw": "【例 4-8】数据引用错误，96 应为 86。"
        },
        {
          "id": "4-9",
          "error": "“沈吟”应为“沉吟”。",
          "analysis": "",
          "raw": "【例 4-9】“沈吟”应为“沉吟”。"
        },
        {
          "id": "4-10",
          "error": "“都”应为“多”。",
          "analysis": "",
          "raw": "【例 4-10】“都”应为“多”。"
        },
        {
          "id": "4-11",
          "error": "“买人代理人”应为“买入代理人”。",
          "analysis": "",
          "raw": "【例 4-11】“买人代理人”应为“买入代理人”。"
        },
        {
          "id": "4-12",
          "error": "extermly 应为 extremely。",
          "analysis": "",
          "raw": "【例 4-12】extermly 应为 extremely。"
        },
        {
          "id": "4-13",
          "error": "“搴”注音应为 qiān。",
          "analysis": "",
          "raw": "【例 4-13】“搴”注音应为 qiān。"
        },
        {
          "id": "4-14",
          "error": "“案件 119.8 件”应是“119.8 万件”。",
          "analysis": "",
          "raw": "【例 4-14】“案件 119.8 件”应是“119.8 万件”。"
        },
        {
          "id": "4-15",
          "error": "最大航程单位有误，kg 应为 km，NM 应为 n mile。",
          "analysis": "",
          "raw": "【例 4-15】最大航程单位有误，kg 应为 km，NM 应为 n mile。"
        },
        {
          "id": "4-16",
          "error": "文中讲述针式打印机的保养与维护，此处配图为喷墨打印机，不一致。",
          "analysis": "",
          "raw": "【例 4-16】文中讲述针式打印机的保养与维护，此处配图为喷墨打印机，不一致。"
        },
        {
          "id": "4-17",
          "error": "横坐标年份有误。",
          "analysis": "",
          "raw": "【例 4-17】横坐标年份有误。"
        }
      ]
    }
  },
  {
    "year": "2023",
    "quarter": "Q3",
    "total_entries": 52,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "2016 年 3 月 11 日，全国人大会议的政府工作报告中提到，“发挥大众创业、万众创",
          "analysis": "",
          "raw": "【例 1-1】2016 年 3 月 11 日，全国人大会议的政府工作报告中提到，“发挥大众创业、万众创"
        },
        {
          "id": "1-2",
          "error": "更为难能可贵的是，奈特在很大程度上借助了马克思唯物历史主义作为解码乔姆斯",
          "analysis": "",
          "raw": "【例 1-2】更为难能可贵的是，奈特在很大程度上借助了马克思唯物历史主义作为解码乔姆斯"
        },
        {
          "id": "1-3",
          "error": "从被调查者地域分布来看，地域涵盖北京、上海、天津、重庆四大直辖市，香港与",
          "analysis": "",
          "raw": "【例 1-3】从被调查者地域分布来看，地域涵盖北京、上海、天津、重庆四大直辖市，香港与"
        },
        {
          "id": "1-4",
          "error": "他这才彻底清醒过来，心里不由地想：“我是不是傻啊，看那身打扮就知道是某位老",
          "analysis": "",
          "raw": "【例 1-4】他这才彻底清醒过来，心里不由地想：“我是不是傻啊，看那身打扮就知道是某位老"
        },
        {
          "id": "1-5",
          "error": "这样可以防止大海捞针似地查找或重新渲染图像造成的时间浪费。（应改为“似的”）",
          "analysis": "",
          "raw": "【例 1-5】这样可以防止大海捞针似地查找或重新渲染图像造成的时间浪费。（应改为“似的”）"
        },
        {
          "id": "1-6",
          "error": "你为什么把地上搞得这么乱？你要干嘛？（应改为“干吗”）",
          "analysis": "",
          "raw": "【例 1-6】你为什么把地上搞得这么乱？你要干嘛？（应改为“干吗”）"
        },
        {
          "id": "1-7",
          "error": "下面以长三角地区在人工智能领域方面采取的措施为例，来说明长三角地区对新基",
          "analysis": "",
          "raw": "【例 1-7】下面以长三角地区在人工智能领域方面采取的措施为例，来说明长三角地区对新基"
        },
        {
          "id": "1-8",
          "error": "工业经济时代，不管是直线制、职能制还是事业部制、矩阵制，企业组织结构都像",
          "analysis": "",
          "raw": "【例 1-8】工业经济时代，不管是直线制、职能制还是事业部制、矩阵制，企业组织结构都像"
        },
        {
          "id": "1-9",
          "error": "在现代宪法下，劳动者阶层崛起了，他们也诉求自己的一些权利，已获得宪法认定",
          "analysis": "",
          "raw": "【例 1-9】在现代宪法下，劳动者阶层崛起了，他们也诉求自己的一些权利，已获得宪法认定"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "广东江门的一名 18 岁女孩同吃罗红霉素缓释胶囊和复方甲氧那明胶囊两种感冒药后",
          "analysis": "",
          "raw": "【例 2-1】广东江门的一名 18 岁女孩同吃罗红霉素缓释胶囊和复方甲氧那明胶囊两种感冒药后"
        },
        {
          "id": "2-2",
          "error": "时间是物理学中的七个基本物理量（长度为 m，时间为 s，质量为 kg，热力学温度为",
          "analysis": "",
          "raw": "【例 2-2】时间是物理学中的七个基本物理量（长度为 m，时间为 s，质量为 kg，热力学温度为"
        },
        {
          "id": "2-3",
          "error": "",
          "analysis": "",
          "raw": "【例 2-3】"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "",
          "analysis": "",
          "raw": "【例 2-5】"
        },
        {
          "id": "2-6",
          "error": "通过介绍李兰娟院士创建“李氏人工肝”挽救肝衰竭患者，并获得“联合国科教文",
          "analysis": "",
          "raw": "【例 2-6】通过介绍李兰娟院士创建“李氏人工肝”挽救肝衰竭患者，并获得“联合国科教文"
        },
        {
          "id": "2-7",
          "error": "1956 年，艾华德·丹尼尔·托马斯（Edward Donnall Thomas）成功应用双胞胎间的",
          "analysis": "",
          "raw": "【例 2-7】1956 年，艾华德·丹尼尔·托马斯（Edward Donnall Thomas）成功应用双胞胎间的"
        },
        {
          "id": "2-8",
          "error": "1662 年，日本的竹田近江利用钟表技术发明了自动机器玩偶，并在大阪道顿崛演出。",
          "analysis": "",
          "raw": "【例 2-8】1662 年，日本的竹田近江利用钟表技术发明了自动机器玩偶，并在大阪道顿崛演出。"
        },
        {
          "id": "2-9",
          "error": "DHCP（dynamic host configuration protocol，动态主机配置协议）是 IETF（Internet",
          "analysis": "",
          "raw": "【例 2-9】DHCP（dynamic host configuration protocol，动态主机配置协议）是 IETF（Internet"
        },
        {
          "id": "2-10",
          "error": "德国、法国在高速铁路上开行的高速货物列车最高速度已达到 2000 千米/时。（应",
          "analysis": "",
          "raw": "【例 2-10】德国、法国在高速铁路上开行的高速货物列车最高速度已达到 2000 千米/时。（应"
        },
        {
          "id": "2-11",
          "error": "第二组杂粮的特点是都是长条状、长宽比大于 1:2 且都喜阴凉。（应改为“2:1”）",
          "analysis": "",
          "raw": "【例 2-11】第二组杂粮的特点是都是长条状、长宽比大于 1:2 且都喜阴凉。（应改为“2:1”）"
        },
        {
          "id": "2-12",
          "error": "据传说，三国时期蜀汉军师诸葛亮（180—234 年）是早期无人机的运用者之一。（应",
          "analysis": "",
          "raw": "【例 2-12】据传说，三国时期蜀汉军师诸葛亮（180—234 年）是早期无人机的运用者之一。（应"
        },
        {
          "id": "2-13",
          "error": "GPS BLOCK Ⅲ卫星的首次发射在 2013 年进行。（应改为“2018”）",
          "analysis": "",
          "raw": "【例 2-13】GPS BLOCK Ⅲ卫星的首次发射在 2013 年进行。（应改为“2018”）"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "We might intentionally underestimated the production costs. （应改为 underestimate）",
          "analysis": "",
          "raw": "【例 3-1】 We might intentionally underestimated the production costs. （应改为 underestimate）"
        },
        {
          "id": "3-2",
          "error": "The quality of the translations are unsatisfactory because the translators are not experts in",
          "analysis": "",
          "raw": "【例 3-2】The quality of the translations are unsatisfactory because the translators are not experts in"
        },
        {
          "id": "3-3",
          "error": "The only right of the landlords were to collect rents. （应改为 was）",
          "analysis": "",
          "raw": "【例 3-3】The only right of the landlords were to collect rents. （应改为 was）"
        },
        {
          "id": "3-4",
          "error": "The animals bred most commonly in Jiangnan were fish, sheep, pigs, chickens and goose.",
          "analysis": "",
          "raw": "【例 3-4】The animals bred most commonly in Jiangnan were fish, sheep, pigs, chickens and goose."
        },
        {
          "id": "3-5",
          "error": "As the economic condition throughout the world is constantly changing. It is essential that",
          "analysis": "",
          "raw": "【例 3-5】As the economic condition throughout the world is constantly changing. It is essential that"
        },
        {
          "id": "3-6",
          "error": "Realizing the real-time data replication from the main system to the backup system improve",
          "analysis": "",
          "raw": "【例 3-6】Realizing the real-time data replication from the main system to the backup system improve"
        },
        {
          "id": "3-7",
          "error": "Moreover, because of being closed to the seashores, this area often suffers from typhoons.",
          "analysis": "",
          "raw": "【例 3-7】 Moreover, because of being closed to the seashores, this area often suffers from typhoons."
        },
        {
          "id": "3-8",
          "error": "Songjiang has a long tradition of complication of gazetteers. （应改为 compilation）",
          "analysis": "",
          "raw": "【例 3-8】Songjiang has a long tradition of complication of gazetteers. （应改为 compilation）"
        },
        {
          "id": "3-9",
          "error": "They made a great deal of observations in their private wrings. （应改为 writings）",
          "analysis": "",
          "raw": "【例 3-9】They made a great deal of observations in their private wrings. （应改为 writings）"
        },
        {
          "id": "3-10",
          "error": "I write a record of what I believe is true, hoping to let those who concern about farming",
          "analysis": "",
          "raw": "【例 3-10】 I write a record of what I believe is true, hoping to let those who concern about farming"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "柱体的体积公式没有前面的1。",
          "analysis": "",
          "raw": "【例 4-1】柱体的体积公式没有前面的1。"
        },
        {
          "id": "4-2",
          "error": "除数P54 应为P44。",
          "analysis": "",
          "raw": "【例 4-2】除数P54 应为P44。"
        },
        {
          "id": "4-3",
          "error": "表中计算结果 20%应为 50%。",
          "analysis": "",
          "raw": "【例 4-3】表中计算结果 20%应为 50%。"
        },
        {
          "id": "4-4",
          "error": "算式转换时 5 被错写成 1。",
          "analysis": "",
          "raw": "【例 4-4】算式转换时 5 被错写成 1。"
        },
        {
          "id": "4-5",
          "error": "函数转换时 10 被错写成 5。",
          "analysis": "",
          "raw": "【例 4-5】函数转换时 10 被错写成 5。"
        },
        {
          "id": "4-6",
          "error": "第 3 列后两行数据应调换位置。",
          "analysis": "",
          "raw": "【例 4-6】第 3 列后两行数据应调换位置。"
        },
        {
          "id": "4-7",
          "error": "表中的地址与正文地址不一致，应为修水县。",
          "analysis": "",
          "raw": "【例 4-7】表中的地址与正文地址不一致，应为修水县。"
        },
        {
          "id": "4-8",
          "error": "根据正文叙述，图名应为杀虫剂宣传广告，而不是汽车宣传广告。",
          "analysis": "",
          "raw": "【例 4-8】根据正文叙述，图名应为杀虫剂宣传广告，而不是汽车宣传广告。"
        },
        {
          "id": "4-9",
          "error": "“意外”应为“以外”。",
          "analysis": "",
          "raw": "【例 4-9】“意外”应为“以外”。"
        },
        {
          "id": "4-10",
          "error": "英文全称中后 3 个单词首字母均错。",
          "analysis": "",
          "raw": "【例 4-10】英文全称中后 3 个单词首字母均错。"
        },
        {
          "id": "4-11",
          "error": "“负数”应为“复数”。",
          "analysis": "",
          "raw": "【例 4-11】“负数”应为“复数”。"
        },
        {
          "id": "4-12",
          "error": "文件扩展名少了 j，应为 Program.csproj。",
          "analysis": "",
          "raw": "【例 4-12】文件扩展名少了 j，应为 Program.csproj。"
        },
        {
          "id": "4-13",
          "error": "“新时器”应为“新石器”。",
          "analysis": "",
          "raw": "【例 4-13】“新时器”应为“新石器”。"
        },
        {
          "id": "4-14",
          "error": "“节自”应为“节目”。",
          "analysis": "",
          "raw": "【例 4-14】“节自”应为“节目”。"
        },
        {
          "id": "4-15",
          "error": "多字，删除一组“的卡车”。",
          "analysis": "",
          "raw": "【例 4-15】多字，删除一组“的卡车”。"
        },
        {
          "id": "4-16",
          "error": "多字，应删除“公司”。",
          "analysis": "",
          "raw": "【例 4-16】多字，应删除“公司”。"
        },
        {
          "id": "4-17",
          "error": "上下段重复。",
          "analysis": "",
          "raw": "【例 4-17】上下段重复。"
        },
        {
          "id": "4-18",
          "error": "摄氏度的符号是℃，华氏度的符号是℉，此处应为 34 ℉。",
          "analysis": "",
          "raw": "【例 4-18】摄氏度的符号是℃，华氏度的符号是℉，此处应为 34 ℉。"
        },
        {
          "id": "4-19",
          "error": "序号“（五）”“（五）”“（六）”应改为“（五）”“（六）”“（七）”。",
          "analysis": "",
          "raw": "【例 4-19】序号“（五）”“（五）”“（六）”应改为“（五）”“（六）”“（七）”。"
        },
        {
          "id": "4-20",
          "error": "有两个“（4）”，后一个“（4）”应改为“（5）”。",
          "analysis": "",
          "raw": "【例 4-20】有两个“（4）”，后一个“（4）”应改为“（5）”。"
        }
      ]
    }
  },
  {
    "year": "2023",
    "quarter": "Q2",
    "total_entries": 43,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "当今世界正经历百年未有之大变局，中国特色社会主义进入新时代，人民对美好生",
          "analysis": "",
          "raw": "【例 1-1】当今世界正经历百年未有之大变局，中国特色社会主义进入新时代，人民对美好生"
        },
        {
          "id": "1-2",
          "error": "2013 年 9 月，习近平总书记访问德国，会见德国总理默克尔时，借用物理学“牛顿",
          "analysis": "",
          "raw": "【例 1-2】2013 年 9 月，习近平总书记访问德国，会见德国总理默克尔时，借用物理学“牛顿"
        },
        {
          "id": "1-3",
          "error": "为了强化研究的科学性，作者又作了大面积的问卷调查，调查对象为 1797 名来自全",
          "analysis": "",
          "raw": "【例 1-3】为了强化研究的科学性，作者又作了大面积的问卷调查，调查对象为 1797 名来自全"
        },
        {
          "id": "1-4",
          "error": "美国“次贷危机”引发的全球性经济萧条，经过十多年的洗礼并未完全得到治愈。（可",
          "analysis": "",
          "raw": "【例 1-4】美国“次贷危机”引发的全球性经济萧条，经过十多年的洗礼并未完全得到治愈。（可"
        },
        {
          "id": "1-5",
          "error": "对月球探索的真正的奔月行程是从 20 世纪中旬的美苏太空竞赛开始的。（可改为“中",
          "analysis": "",
          "raw": "【例 1-5】对月球探索的真正的奔月行程是从 20 世纪中旬的美苏太空竞赛开始的。（可改为“中"
        },
        {
          "id": "1-6",
          "error": "笔者调查发现，这方面校长普遍较为薄弱，当然也不乏许多本身就是教学理论家的",
          "analysis": "",
          "raw": "【例 1-6】笔者调查发现，这方面校长普遍较为薄弱，当然也不乏许多本身就是教学理论家的"
        },
        {
          "id": "1-7",
          "error": "很快，通过邮箱分享 PPT 的弊端显露出来，团队很难及时收到会员的阅读反馈，甚",
          "analysis": "",
          "raw": "【例 1-7】很快，通过邮箱分享 PPT 的弊端显露出来，团队很难及时收到会员的阅读反馈，甚"
        },
        {
          "id": "1-8",
          "error": "此研究表明还得出了媒体监督与财务绩效之间呈现出一定程度的倒 U 型关系。（应删",
          "analysis": "",
          "raw": "【例 1-8】此研究表明还得出了媒体监督与财务绩效之间呈现出一定程度的倒 U 型关系。（应删"
        },
        {
          "id": "1-9",
          "error": "焦点咨询提出，建立品牌的两把利器依旧还是公关和广告，但是其运用方法要讲究",
          "analysis": "",
          "raw": "【例 1-9】焦点咨询提出，建立品牌的两把利器依旧还是公关和广告，但是其运用方法要讲究"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "",
          "analysis": "",
          "raw": "【例 2-1】"
        },
        {
          "id": "2-2",
          "error": "",
          "analysis": "",
          "raw": "【例 2-2】"
        },
        {
          "id": "2-3",
          "error": "",
          "analysis": "",
          "raw": "【例 2-3】"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "",
          "analysis": "",
          "raw": "【例 2-5】"
        },
        {
          "id": "2-6",
          "error": "",
          "analysis": "",
          "raw": "【例 2-6】"
        },
        {
          "id": "2-7",
          "error": "",
          "analysis": "",
          "raw": "【例 2-7】"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "",
          "analysis": "",
          "raw": "【例 2-9】"
        },
        {
          "id": "2-10",
          "error": "",
          "analysis": "",
          "raw": "【例 2-10】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "The Air conditioner in the Room 203 fails to start sometimes. （应删除 the）",
          "analysis": "",
          "raw": "【例 3-1】The Air conditioner in the Room 203 fails to start sometimes. （应删除 the）"
        },
        {
          "id": "3-2",
          "error": "I cupped my face in my hands, tears rolling down my cheek. （应改为 cheeks）",
          "analysis": "",
          "raw": "【例 3-2】I cupped my face in my hands, tears rolling down my cheek. （应改为 cheeks）"
        },
        {
          "id": "3-3",
          "error": "When you think of staying safe in your home, you probably think of making sure the doors",
          "analysis": "",
          "raw": "【例 3-3】When you think of staying safe in your home, you probably think of making sure the doors"
        },
        {
          "id": "3-4",
          "error": "",
          "analysis": "",
          "raw": "【例 3-4】"
        },
        {
          "id": "3-5",
          "error": "To be followed are service, environment, and price, with the percentages of 26.8%, 23.8%,",
          "analysis": "",
          "raw": "【例 3-5】To be followed are service, environment, and price, with the percentages of 26.8%, 23.8%,"
        },
        {
          "id": "3-6",
          "error": "原文：Words cannot express how sorry I am that you have such a difficult time.",
          "analysis": "",
          "raw": "【例 3-6】原文：Words cannot express how sorry I am that you have such a difficult time."
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "昭通、镇雄隶属云南省。",
          "analysis": "",
          "raw": "【例 4-1】昭通、镇雄隶属云南省。"
        },
        {
          "id": "4-2",
          "error": "瑞典的官方语言为瑞典语，此处应指瑞士。",
          "analysis": "",
          "raw": "【例 4-2】瑞典的官方语言为瑞典语，此处应指瑞士。"
        },
        {
          "id": "4-3",
          "error": "需求层次理论的提出者是马斯洛，不是马洛斯。",
          "analysis": "",
          "raw": "【例 4-3】需求层次理论的提出者是马斯洛，不是马洛斯。"
        },
        {
          "id": "4-4",
          "error": "此处 USB 应改为 UPS (Uninterruptible Power Supply，不间断电源)。",
          "analysis": "",
          "raw": "【例 4-4】 此处 USB 应改为 UPS (Uninterruptible Power Supply，不间断电源)。"
        },
        {
          "id": "4-5",
          "error": "机身高度数据有误，应该是 4.95 米。",
          "analysis": "",
          "raw": "【例 4-5】机身高度数据有误，应该是 4.95 米。"
        },
        {
          "id": "4-6",
          "error": "按照运算规则，从右往左第 3 位是两个 1 进行“或”运算，结果应该为 1。",
          "analysis": "",
          "raw": "【例 4-6】按照运算规则，从右往左第 3 位是两个 1 进行“或”运算，结果应该为 1。"
        },
        {
          "id": "4-7",
          "error": "按照运算规则，0 和 1 进行“与”运算，结果应该为 0。",
          "analysis": "",
          "raw": "【例 4-7】按照运算规则，0 和 1 进行“与”运算，结果应该为 0。"
        },
        {
          "id": "4-8",
          "error": "答案写反了。（“与”运算规则是两个数位均为 1，结果为 1，否则为 0；“异或”运算",
          "analysis": "",
          "raw": "【例 4-8】答案写反了。（“与”运算规则是两个数位均为 1，结果为 1，否则为 0；“异或”运算"
        },
        {
          "id": "4-9",
          "error": "二进制数 00000111 转换成十进制数是 7，不是 9。",
          "analysis": "",
          "raw": "【例 4-9】二进制数 00000111 转换成十进制数是 7，不是 9。"
        },
        {
          "id": "4-10",
          "error": "A 和 C 选项内容重复。",
          "analysis": "",
          "raw": "【例 4-10】A 和 C 选项内容重复。"
        },
        {
          "id": "4-11",
          "error": "A 和 D 选项内容重复。",
          "analysis": "",
          "raw": "【例 4-11】A 和 D 选项内容重复。"
        },
        {
          "id": "4-12",
          "error": "量为多音字，其与“重”组成词语“重量”时，应读 liànɡ。",
          "analysis": "",
          "raw": "【例 4-12】量为多音字，其与“重”组成词语“重量”时，应读 liànɡ。"
        },
        {
          "id": "4-13",
          "error": "漏字，应为《中华人民共和国民法典》。",
          "analysis": "",
          "raw": "【例 4-13】漏字，应为《中华人民共和国民法典》。"
        },
        {
          "id": "4-14",
          "error": "单词拼写错误，interfasce 应为 interface。",
          "analysis": "",
          "raw": "【例 4-14】单词拼写错误，interfasce 应为 interface。"
        },
        {
          "id": "4-15",
          "error": "“掠读”应为“略读”。",
          "analysis": "",
          "raw": "【例 4-15】“掠读”应为“略读”。"
        },
        {
          "id": "4-16",
          "error": "“标谱”应为“标普”。",
          "analysis": "",
          "raw": "【例 4-16】“标谱”应为“标普”。"
        },
        {
          "id": "4-17",
          "error": "“较验层”应为“校验层”。",
          "analysis": "",
          "raw": "【例 4-17】“较验层”应为“校验层”。"
        },
        {
          "id": "4-18",
          "error": "多字，应删除“的”。",
          "analysis": "",
          "raw": "【例 4-18】多字，应删除“的”。"
        }
      ]
    }
  },
  {
    "year": "2023",
    "quarter": "Q4",
    "total_entries": 51,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "为了表示投身革命的坚定立场，孙中山剪掉了象征满清统治的发辫。（应改为“清朝”）",
          "analysis": "",
          "raw": "【例 1-1】为了表示投身革命的坚定立场，孙中山剪掉了象征满清统治的发辫。（应改为“清朝”）"
        },
        {
          "id": "1-2",
          "error": "目前，164 个世贸组织成员国都接受了这项标准，尽管这项标准在这些国家获得执行",
          "analysis": "",
          "raw": "【例 1-2】目前，164 个世贸组织成员国都接受了这项标准，尽管这项标准在这些国家获得执行"
        },
        {
          "id": "1-3",
          "error": "1955 年 12 月，国务院全体会议第二十一次会议通过《国家机关工作人员退休处理暂",
          "analysis": "",
          "raw": "【例 1-3】1955 年 12 月，国务院全体会议第二十一次会议通过《国家机关工作人员退休处理暂"
        },
        {
          "id": "1-4",
          "error": "该法于 2010 年制定，2011 年 7 月正式实施，根据 2018 年 12 月 29 日党的第十三届",
          "analysis": "",
          "raw": "【例 1-4】该法于 2010 年制定，2011 年 7 月正式实施，根据 2018 年 12 月 29 日党的第十三届"
        },
        {
          "id": "1-5",
          "error": "2022 年胜利召开的中国共产党第二十次代表大会所确定的“中国式现代化”发展战",
          "analysis": "",
          "raw": "【例 1-5】2022 年胜利召开的中国共产党第二十次代表大会所确定的“中国式现代化”发展战"
        },
        {
          "id": "1-6",
          "error": "这些据点原本就在干细胞、再生医学领域取得过丰硕成果，优秀的专家学者大多云",
          "analysis": "",
          "raw": "【例 1-6】这些据点原本就在干细胞、再生医学领域取得过丰硕成果，优秀的专家学者大多云"
        },
        {
          "id": "1-7",
          "error": "原综合科学技术会议成员井村裕夫教授、岸本忠三教授这样的学界重镇也莅临会场",
          "analysis": "",
          "raw": "【例 1-7】原综合科学技术会议成员井村裕夫教授、岸本忠三教授这样的学界重镇也莅临会场"
        },
        {
          "id": "1-8",
          "error": "在我国，就商品的退换所引发的退税问题，海关还没有统一的政策和解决方案，只",
          "analysis": "",
          "raw": "【例 1-8】在我国，就商品的退换所引发的退税问题，海关还没有统一的政策和解决方案，只"
        },
        {
          "id": "1-9",
          "error": "三岛通过乔治·巴塔耶找到了自己与战后思想不相容的根据，而根据的背景就是",
          "analysis": "",
          "raw": "【例 1-9】三岛通过乔治·巴塔耶找到了自己与战后思想不相容的根据，而根据的背景就是"
        },
        {
          "id": "1-10",
          "error": "2020 年在华侨大学第 20 届 5.25 心理健康宣传月之“遇见生命之美”云端剧场决赛",
          "analysis": "",
          "raw": "【例 1-10】2020 年在华侨大学第 20 届 5.25 心理健康宣传月之“遇见生命之美”云端剧场决赛"
        },
        {
          "id": "1-11",
          "error": "我在那时候当然更没有想到那个小孩在二、三十年后还时时留心搜求可以考证《封",
          "analysis": "",
          "raw": "【例 1-11】我在那时候当然更没有想到那个小孩在二、三十年后还时时留心搜求可以考证《封"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "",
          "analysis": "",
          "raw": "【例 2-1】"
        },
        {
          "id": "2-2",
          "error": "",
          "analysis": "",
          "raw": "【例 2-2】"
        },
        {
          "id": "2-3",
          "error": "",
          "analysis": "",
          "raw": "【例 2-3】"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "",
          "analysis": "",
          "raw": "【例 2-5】"
        },
        {
          "id": "2-6",
          "error": "",
          "analysis": "",
          "raw": "【例 2-6】"
        },
        {
          "id": "2-7",
          "error": "",
          "analysis": "",
          "raw": "【例 2-7】"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "",
          "analysis": "",
          "raw": "【例 2-9】"
        },
        {
          "id": "2-10",
          "error": "",
          "analysis": "",
          "raw": "【例 2-10】"
        },
        {
          "id": "2-11",
          "error": "",
          "analysis": "",
          "raw": "【例 2-11】"
        },
        {
          "id": "2-12",
          "error": "",
          "analysis": "",
          "raw": "【例 2-12】"
        },
        {
          "id": "2-13",
          "error": "",
          "analysis": "",
          "raw": "【例 2-13】"
        },
        {
          "id": "2-14",
          "error": "",
          "analysis": "",
          "raw": "【例 2-14】"
        },
        {
          "id": "2-15",
          "error": "",
          "analysis": "",
          "raw": "【例 2-15】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "The book is dividing into 40 sections, each of which addresses a specific issue. （应改为",
          "analysis": "",
          "raw": "【例 3-1】 The book is dividing into 40 sections, each of which addresses a specific issue. （应改为"
        },
        {
          "id": "3-2",
          "error": "The flood affected a great deal of the regions of the middle and lower Yangzi valley.",
          "analysis": "",
          "raw": "【例 3-2】The flood affected a great deal of the regions of the middle and lower Yangzi valley."
        },
        {
          "id": "3-3",
          "error": "It is impossible to know how large the average scale of aquaculture in a peasant family farm.",
          "analysis": "",
          "raw": "【例 3-3】It is impossible to know how large the average scale of aquaculture in a peasant family farm."
        },
        {
          "id": "3-4",
          "error": "I was sent to work as a labor in a remote village. （应改为 laborer）",
          "analysis": "",
          "raw": "【例 3-4】I was sent to work as a labor in a remote village. （应改为 laborer）"
        },
        {
          "id": "3-5",
          "error": "Western academic works have been introduced in China since 1979. （应改为 to）",
          "analysis": "",
          "raw": "【例 3-5】Western academic works have been introduced in China since 1979. （应改为 to）"
        },
        {
          "id": "3-6",
          "error": "In the early nineteenth century, fishing developed professional and became the main",
          "analysis": "",
          "raw": "【例 3-6】In the early nineteenth century, fishing developed professional and became the main"
        },
        {
          "id": "3-7",
          "error": "Seeds and raw cotton had to be brought in the market. （应改为 bought）",
          "analysis": "",
          "raw": "【例 3-7】Seeds and raw cotton had to be brought in the market. （应改为 bought）"
        },
        {
          "id": "3-8",
          "error": "The country is located in the lowest reach of the Huangpu River. （应改为 county）",
          "analysis": "",
          "raw": "【例 3-8】The country is located in the lowest reach of the Huangpu River. （应改为 county）"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "宁夏回族自治区不能称为宁夏市。",
          "analysis": "",
          "raw": "【例 4-1】宁夏回族自治区不能称为宁夏市。"
        },
        {
          "id": "4-2",
          "error": "“前不见古人，后不见来者。”出自《登幽州台歌》。",
          "analysis": "",
          "raw": "【例 4-2】“前不见古人，后不见来者。”出自《登幽州台歌》。"
        },
        {
          "id": "4-3",
          "error": "“没有整数解”应为“没有正整数解”。",
          "analysis": "",
          "raw": "【例 4-3】“没有整数解”应为“没有正整数解”。"
        },
        {
          "id": "4-4",
          "error": "倍数不应有单位。",
          "analysis": "",
          "raw": "【例 4-4】 倍数不应有单位。"
        },
        {
          "id": "4-5",
          "error": "二进制数转换为十六进制数，结果应为 2D.2。",
          "analysis": "",
          "raw": "【例 4-5】二进制数转换为十六进制数，结果应为 2D.2。"
        },
        {
          "id": "4-6",
          "error": "计算结果有误， 50×50×50 的计算结果应为 125000。",
          "analysis": "",
          "raw": "【例 4-6】计算结果有误， 50×50×50 的计算结果应为 125000。"
        },
        {
          "id": "4-7",
          "error": "二进制数转换为十进制数后，最终结果的进制应标为 10。",
          "analysis": "",
          "raw": "【例 4-7】二进制数转换为十进制数后，最终结果的进制应标为 10。"
        },
        {
          "id": "4-8",
          "error": "算式有误，应为 3+5=8。",
          "analysis": "",
          "raw": "【例 4-8】算式有误，应为 3+5=8。"
        },
        {
          "id": "4-9",
          "error": "计算结果有误，100 000/（1+1.5%）×1.5%≈1477.8。",
          "analysis": "",
          "raw": "【例 4-9】计算结果有误，100 000/（1+1.5%）×1.5%≈1477.8。"
        },
        {
          "id": "4-10",
          "error": "文中描述有 11 个节点，但图中只有 9 个节点。",
          "analysis": "",
          "raw": "【例 4-10】文中描述有 11 个节点，但图中只有 9 个节点。"
        },
        {
          "id": "4-11",
          "error": "文中描述与图题不一致，文中为“拳击手”装甲运兵车，图题为“拳师犬”装甲运",
          "analysis": "",
          "raw": "【例 4-11】文中描述与图题不一致，文中为“拳击手”装甲运兵车，图题为“拳师犬”装甲运"
        },
        {
          "id": "4-12",
          "error": "图文不符，文中描述为“图像 f(x,y)输入到编码器中”，图中为解码器。",
          "analysis": "",
          "raw": "【例 4-12】图文不符，文中描述为“图像 f(x,y)输入到编码器中”，图中为解码器。"
        },
        {
          "id": "4-13",
          "error": "谷歌的英文拼写应为 Google。",
          "analysis": "",
          "raw": "【例 4-13】谷歌的英文拼写应为 Google。"
        },
        {
          "id": "4-14",
          "error": "Vicual 应为 Visual。",
          "analysis": "",
          "raw": "【例 4-14】 Vicual 应为 Visual。"
        },
        {
          "id": "4-15",
          "error": "“谁好”应为“堆好”。",
          "analysis": "",
          "raw": "【例 4-15】“谁好”应为“堆好”。"
        },
        {
          "id": "4-16",
          "error": "“架势”应为“架构”。",
          "analysis": "",
          "raw": "【例 4-16】“架势”应为“架构”。"
        },
        {
          "id": "4-17",
          "error": "“关”应为“天”。",
          "analysis": "",
          "raw": "【例 4-17】“关”应为“天”。"
        }
      ]
    }
  },
  {
    "year": "2024",
    "quarter": "Q1",
    "total_entries": 48,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "积极培育和践行社会主义核心价值观，进一步坚定“四个自信”，引导和培养中华民",
          "analysis": "",
          "raw": "【例 1-1】积极培育和践行社会主义核心价值观，进一步坚定“四个自信”，引导和培养中华民"
        },
        {
          "id": "1-2",
          "error": "“以和为贵，求同存异”“共建共享，世界大同”的东方文明，将对建设人类文明共",
          "analysis": "",
          "raw": "【例 1-2】“以和为贵，求同存异”“共建共享，世界大同”的东方文明，将对建设人类文明共"
        },
        {
          "id": "1-3",
          "error": "经济互惠交往，文化交流互动，社会友好往来，是构建全球命运共同体的重要方式",
          "analysis": "",
          "raw": "【例 1-3】经济互惠交往，文化交流互动，社会友好往来，是构建全球命运共同体的重要方式"
        },
        {
          "id": "1-4",
          "error": "作者的资政建议、研究报告被中央有关国家机关、部委采纳或被领导批示。（应改为",
          "analysis": "",
          "raw": "【例 1-4】作者的资政建议、研究报告被中央有关国家机关、部委采纳或被领导批示。（应改为"
        },
        {
          "id": "1-5",
          "error": "2021 年缅甸遭受恐怖袭击的死亡人数增幅最大，从前一年的 24 人增加到 521 人，缅",
          "analysis": "",
          "raw": "【例 1-5】2021 年缅甸遭受恐怖袭击的死亡人数增幅最大，从前一年的 24 人增加到 521 人，缅"
        },
        {
          "id": "1-6",
          "error": "镜头拉开，瓦力和哈尔从垃圾堆起来的巨型“大厦”上拾阶而下。（可改为“蹋阶”）",
          "analysis": "",
          "raw": "【例 1-6】镜头拉开，瓦力和哈尔从垃圾堆起来的巨型“大厦”上拾阶而下。（可改为“蹋阶”）"
        },
        {
          "id": "1-7",
          "error": "近代以来，东西方经济文化交流频仍，这件西洋乐器也随之传入中国，中国人与钢",
          "analysis": "",
          "raw": "【例 1-7】近代以来，东西方经济文化交流频仍，这件西洋乐器也随之传入中国，中国人与钢"
        },
        {
          "id": "1-8",
          "error": "我们可以观察到第一代船长和飞船上的人们体形尚且比较正常。（可改为“尚”）",
          "analysis": "",
          "raw": "【例 1-8】我们可以观察到第一代船长和飞船上的人们体形尚且比较正常。（可改为“尚”）"
        },
        {
          "id": "1-9",
          "error": "他们把成功归咎于自己的能力，把失败归咎于别人的问题，同时做任何事情，都以",
          "analysis": "",
          "raw": "【例 1-9】他们把成功归咎于自己的能力，把失败归咎于别人的问题，同时做任何事情，都以"
        },
        {
          "id": "1-10",
          "error": "国内大多数城市发展普遍存在“重地上、轻地下”的通病，在漂亮的高楼大厦下面",
          "analysis": "",
          "raw": "【例 1-10】国内大多数城市发展普遍存在“重地上、轻地下”的通病，在漂亮的高楼大厦下面"
        },
        {
          "id": "1-11",
          "error": "因为 AI 绘画的作品效果有时候可以堪比大师，所以市场上有一部分人对于优质 AI",
          "analysis": "",
          "raw": "【例 1-11】因为 AI 绘画的作品效果有时候可以堪比大师，所以市场上有一部分人对于优质 AI"
        },
        {
          "id": "1-12",
          "error": "有关罗尔斯正义理论的研究已然形成中外学界的“罗尔斯产业”，经年长盛不衰。（应",
          "analysis": "",
          "raw": "【例 1-12】有关罗尔斯正义理论的研究已然形成中外学界的“罗尔斯产业”，经年长盛不衰。（应"
        },
        {
          "id": "1-13",
          "error": "美国经济增长放缓将减少美国对中国商品和服务的需求，从而进一步降低中国的经",
          "analysis": "",
          "raw": "【例 1-13】美国经济增长放缓将减少美国对中国商品和服务的需求，从而进一步降低中国的经"
        },
        {
          "id": "1-14",
          "error": "进入民国后，已经鲜少有人留着辫子，而他在北京大学讲课时，仍是拖着大辫子，",
          "analysis": "",
          "raw": "【例 1-14】进入民国后，已经鲜少有人留着辫子，而他在北京大学讲课时，仍是拖着大辫子，"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "视网膜由视细胞组成，视细胞分为视干细胞和视锥细胞两种。（应改为“视杆细胞”）",
          "analysis": "",
          "raw": "【例 2-1】视网膜由视细胞组成，视细胞分为视干细胞和视锥细胞两种。（应改为“视杆细胞”）"
        },
        {
          "id": "2-2",
          "error": "",
          "analysis": "",
          "raw": "【例 2-2】"
        },
        {
          "id": "2-3",
          "error": "特征空间内两个特征向量的欧式距离，等于向量差的模长。（应改为“欧氏距离”）",
          "analysis": "",
          "raw": "【例 2-3】特征空间内两个特征向量的欧式距离，等于向量差的模长。（应改为“欧氏距离”）"
        },
        {
          "id": "2-4",
          "error": "希尔伯特第十问题：设计一个算法来判定丢潘图方程是否存在整数解。（应改为“丢",
          "analysis": "",
          "raw": "【例 2-4】希尔伯特第十问题：设计一个算法来判定丢潘图方程是否存在整数解。（应改为“丢"
        },
        {
          "id": "2-5",
          "error": "列文•虎克在蝌蚪的尾巴上看到了血流通过毛细血管的实际循环过程。（应改为“列",
          "analysis": "",
          "raw": "【例 2-5】列文•虎克在蝌蚪的尾巴上看到了血流通过毛细血管的实际循环过程。（应改为“列"
        },
        {
          "id": "2-6",
          "error": "1 微米等于 1 厘米的 1/1000。（应改为“1 毫米的 1/1000”或“1 厘米的 1/10000”）",
          "analysis": "",
          "raw": "【例 2-6】1 微米等于 1 厘米的 1/1000。（应改为“1 毫米的 1/1000”或“1 厘米的 1/10000”）"
        },
        {
          "id": "2-7",
          "error": "2018 年 3 月推出的 2.0 版本是 CMMI 的最新版本。（应改为“2023 年 4 月推出的 3.0",
          "analysis": "",
          "raw": "【例 2-7】2018 年 3 月推出的 2.0 版本是 CMMI 的最新版本。（应改为“2023 年 4 月推出的 3.0"
        },
        {
          "id": "2-8",
          "error": "古希腊的欧几里得（Euclid，公元前 330—275 年）在《几何原本》中提出了计算两",
          "analysis": "",
          "raw": "【例 2-8】古希腊的欧几里得（Euclid，公元前 330—275 年）在《几何原本》中提出了计算两"
        },
        {
          "id": "2-9",
          "error": "但是若输入 a，b，c 的值分别为 3,2,4 时，屏幕上出现了出错信息，程序停止运行，",
          "analysis": "",
          "raw": "【例 2-9】但是若输入 a，b，c 的值分别为 3,2,4 时，屏幕上出现了出错信息，程序停止运行，"
        },
        {
          "id": "2-10",
          "error": "",
          "analysis": "",
          "raw": "【例 2-10】"
        },
        {
          "id": "2-11",
          "error": "下面给出二维卷积的示例，如图 3.18 所示。输入一个 4×4 的二维图像，使用一个卷",
          "analysis": "",
          "raw": "【例 2-11】下面给出二维卷积的示例，如图 3.18 所示。输入一个 4×4 的二维图像，使用一个卷"
        },
        {
          "id": "2-12",
          "error": "CAS-PEAL-R1 人脸数据集是一个包含 1040 个人、99450 张人脸图像的数据集，由",
          "analysis": "",
          "raw": "【例 2-12】CAS-PEAL-R1 人脸数据集是一个包含 1040 个人、99450 张人脸图像的数据集，由"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "This program is not suitable for a 12 year-old boy. （应改为 12-year-old）",
          "analysis": "",
          "raw": "【例 3-1】This program is not suitable for a 12 year-old boy. （应改为 12-year-old）"
        },
        {
          "id": "3-2",
          "error": "Let’s go to the library which was newly open to us. （应改为 opened）",
          "analysis": "",
          "raw": "【例 3-2】Let’s go to the library which was newly open to us. （应改为 opened）"
        },
        {
          "id": "3-3",
          "error": "The writer is a freelance journalist for China Daily. （应改为斜体 China Daily）",
          "analysis": "",
          "raw": "【例 3-3】The writer is a freelance journalist for China Daily. （应改为斜体 China Daily）"
        },
        {
          "id": "3-4",
          "error": "Please sweet the floor and clean the kitchen. （应改为 sweep）",
          "analysis": "",
          "raw": "【例 3-4】Please sweet the floor and clean the kitchen. （应改为 sweep）"
        },
        {
          "id": "3-5",
          "error": "The precious research sample was brought back by China’s Chang’-5 mission. （应改为",
          "analysis": "",
          "raw": "【例 3-5】The precious research sample was brought back by China’s Chang’-5 mission. （应改为"
        },
        {
          "id": "3-6",
          "error": "Houston is a significant inland part, handling a large volume of energy-related cargo. （应",
          "analysis": "",
          "raw": "【例 3-6】Houston is a significant inland part, handling a large volume of energy-related cargo. （应"
        },
        {
          "id": "3-7",
          "error": "原文：He cut in, “That sounds really great, but you can finger-pick it a little more slowly,",
          "analysis": "",
          "raw": "【例 3-7】原文：He cut in, “That sounds really great, but you can finger-pick it a little more slowly,"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "“杰里米·边泌”应为“杰里米·边沁”。杰里米·边沁（Jeremy Bentham）是英国",
          "analysis": "",
          "raw": "【例 4-1】“杰里米·边泌”应为“杰里米·边沁”。杰里米·边沁（Jeremy Bentham）是英国"
        },
        {
          "id": "4-2",
          "error": "卡车长、宽、高的单位明显不符合实际情况，单位“毫米”应改为“米”。",
          "analysis": "",
          "raw": "【例 4-2】卡车长、宽、高的单位明显不符合实际情况，单位“毫米”应改为“米”。"
        },
        {
          "id": "4-3",
          "error": "十六进制中，C 对应的十进制数是 12，12×16-1=0.75。",
          "analysis": "",
          "raw": "【例 4-3】十六进制中，C 对应的十进制数是 12，12×16-1=0.75。"
        },
        {
          "id": "4-4",
          "error": "最终推导结果应为𝐹0。",
          "analysis": "",
          "raw": "【例 4-4】最终推导结果应为𝐹0。"
        },
        {
          "id": "4-5",
          "error": "10-7 应为 2-7。",
          "analysis": "",
          "raw": "【例 4-5】10-7 应为 2-7。"
        },
        {
          "id": "4-6",
          "error": "根据推导，最后一项中的“D1－D1”应为“D2－D1”。",
          "analysis": "",
          "raw": "【例 4-6】根据推导，最后一项中的“D1－D1”应为“D2－D1”。"
        },
        {
          "id": "4-7",
          "error": "A 和 C 选项相同。",
          "analysis": "",
          "raw": "【例 4-7】A 和 C 选项相同。"
        },
        {
          "id": "4-8",
          "error": "B 和 D 选项相同。",
          "analysis": "",
          "raw": "【例 4-8】B 和 D 选项相同。"
        },
        {
          "id": "4-9",
          "error": "“管里员”应为“管理员”。",
          "analysis": "",
          "raw": "【例 4-9】“管里员”应为“管理员”。"
        },
        {
          "id": "4-10",
          "error": "“末满足”应为“未满足”。",
          "analysis": "",
          "raw": "【例 4-10】“末满足”应为“未满足”。"
        },
        {
          "id": "4-11",
          "error": "“觉见”应为“常见”。",
          "analysis": "",
          "raw": "【例 4-11】“觉见”应为“常见”。"
        },
        {
          "id": "4-12",
          "error": "单词拼写错误，G-SATR 应为 G-STAR。",
          "analysis": "",
          "raw": "【例 4-12】单词拼写错误，G-SATR 应为 G-STAR。"
        },
        {
          "id": "4-13",
          "error": "单词拼写错误，breake 应为 break。",
          "analysis": "",
          "raw": "【例 4-13】单词拼写错误，breake 应为 break。"
        },
        {
          "id": "4-14",
          "error": "“正方”应为“正文”。",
          "analysis": "",
          "raw": "【例 4-14】“正方”应为“正文”。"
        },
        {
          "id": "4-15",
          "error": "单词拼写错误，COLUMM 应为 COLUMN。",
          "analysis": "",
          "raw": "【例 4-15】单词拼写错误，COLUMM 应为 COLUMN。"
        }
      ]
    }
  },
  {
    "year": "2024",
    "quarter": "Q3",
    "total_entries": 44,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "当前，中华民族伟大复兴战略全局与世界百年以前所未有之大变局同步交织，“两个",
          "analysis": "",
          "raw": "【例 1-1】当前，中华民族伟大复兴战略全局与世界百年以前所未有之大变局同步交织，“两个"
        },
        {
          "id": "1-2",
          "error": "宋仁宗庆历五年（1045 年）正月，为期不过一年的庆历新政被全面废止，已然疲倦",
          "analysis": "",
          "raw": "【例 1-2】宋仁宗庆历五年（1045 年）正月，为期不过一年的庆历新政被全面废止，已然疲倦"
        },
        {
          "id": "1-3",
          "error": "在第五次反“围剿”时期，中央红军在湘江战役中损失惨重，兵力从 8 万多人锐减",
          "analysis": "",
          "raw": "【例 1-3】在第五次反“围剿”时期，中央红军在湘江战役中损失惨重，兵力从 8 万多人锐减"
        },
        {
          "id": "1-4",
          "error": "在人类历史上，2000 多年前就有了万里长城，1000 多年前就有了都江堰，五六百年",
          "analysis": "",
          "raw": "【例 1-4】在人类历史上，2000 多年前就有了万里长城，1000 多年前就有了都江堰，五六百年"
        },
        {
          "id": "1-5",
          "error": "习近平同志在接待民营企业家时曾说：“要防止一路所向披靡、孤军深入，最后却被",
          "analysis": "",
          "raw": "【例 1-5】习近平同志在接待民营企业家时曾说：“要防止一路所向披靡、孤军深入，最后却被"
        },
        {
          "id": "1-6",
          "error": "中国有 56 个民族，民族不同，其文化传统、生活习性也不相同。金融机构在进行营",
          "analysis": "",
          "raw": "【例 1-6】中国有 56 个民族，民族不同，其文化传统、生活习性也不相同。金融机构在进行营"
        },
        {
          "id": "1-7",
          "error": "宋祁提出“三冗三废”这六大帝国沉疴时，是宝元二年。（应改为“帝国六大沉疴”）",
          "analysis": "",
          "raw": "【例 1-7】宋祁提出“三冗三废”这六大帝国沉疴时，是宝元二年。（应改为“帝国六大沉疴”）"
        },
        {
          "id": "1-8",
          "error": "客房包价是指酒店在出租客房之外搭配其他酒店产品或者酒店外的其他产品及服务，",
          "analysis": "",
          "raw": "【例 1-8】客房包价是指酒店在出租客房之外搭配其他酒店产品或者酒店外的其他产品及服务，"
        },
        {
          "id": "1-9",
          "error": "位于西北地区的甘肃省 2022 年的人均 GDP 为 44950.2 元，城镇居民人均可支配收",
          "analysis": "",
          "raw": "【例 1-9】位于西北地区的甘肃省 2022 年的人均 GDP 为 44950.2 元，城镇居民人均可支配收"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "",
          "analysis": "",
          "raw": "【例 2-1】"
        },
        {
          "id": "2-2",
          "error": "",
          "analysis": "",
          "raw": "【例 2-2】"
        },
        {
          "id": "2-3",
          "error": "",
          "analysis": "",
          "raw": "【例 2-3】"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "",
          "analysis": "",
          "raw": "【例 2-5】"
        },
        {
          "id": "2-6",
          "error": "",
          "analysis": "",
          "raw": "【例 2-6】"
        },
        {
          "id": "2-7",
          "error": "",
          "analysis": "",
          "raw": "【例 2-7】"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "",
          "analysis": "",
          "raw": "【例 2-9】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "This article outlines few tips on making more effective and attractive PowerPoint",
          "analysis": "",
          "raw": "【例 3-1】This article outlines few tips on making more effective and attractive PowerPoint"
        },
        {
          "id": "3-2",
          "error": "People choose to travel by air during holidays are increasing. （应改为 who choose）",
          "analysis": "",
          "raw": "【例 3-2】People choose to travel by air during holidays are increasing. （应改为 who choose）"
        },
        {
          "id": "3-3",
          "error": "The application of BCIs to brain enhancement exists some risks. （本句应改为 Some risks",
          "analysis": "",
          "raw": "【例 3-3】The application of BCIs to brain enhancement exists some risks. （本句应改为 Some risks"
        },
        {
          "id": "3-4",
          "error": "In 1970, China successful launched its first man-made satellite. （应改为 successfully）",
          "analysis": "",
          "raw": "【例 3-4】In 1970, China successful launched its first man-made satellite. （应改为 successfully）"
        },
        {
          "id": "3-5",
          "error": "Their findings laid the groundwork for modem motivation theory. （应改为 modern）",
          "analysis": "",
          "raw": "【例 3-5】Their findings laid the groundwork for modem motivation theory. （应改为 modern）"
        },
        {
          "id": "3-6",
          "error": "Van Gogh painted “Wheatfield With Crows” in July 1890. （应改为 Wheatfield with",
          "analysis": "",
          "raw": "【例 3-6】Van Gogh painted “Wheatfield With Crows” in July 1890. （应改为 Wheatfield with"
        },
        {
          "id": "3-7",
          "error": "原文：The dromedaries stood still in terror, while the merchants drew their caftans over",
          "analysis": "",
          "raw": "【例 3-7】 原文：The dromedaries stood still in terror, while the merchants drew their caftans over"
        },
        {
          "id": "3-8",
          "error": "原文：Don’t you know any story about bacon, or tallow in the storeroom?",
          "analysis": "",
          "raw": "【例 3-8】原文：Don’t you know any story about bacon, or tallow in the storeroom?"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "罗杰·科恩伯格在 2006 年获得的应是诺贝尔化学奖。",
          "analysis": "",
          "raw": "【例 4-1】罗杰·科恩伯格在 2006 年获得的应是诺贝尔化学奖。"
        },
        {
          "id": "4-2",
          "error": "图中文字“蓑羽鹤”与“反嘴鹬”应调换位置。",
          "analysis": "",
          "raw": "【例 4-2】图中文字“蓑羽鹤”与“反嘴鹬”应调换位置。"
        },
        {
          "id": "4-3",
          "error": "10 式主战坦克平均费用应约为 9.54 亿日元。",
          "analysis": "",
          "raw": "【例 4-3】10 式主战坦克平均费用应约为 9.54 亿日元。"
        },
        {
          "id": "4-4",
          "error": "红色方框中的 1000 应为 999。",
          "analysis": "",
          "raw": "【例 4-4】红色方框中的 1000 应为 999。"
        },
        {
          "id": "4-5",
          "error": "“6×7×11×3”的计算结果应为 1386。",
          "analysis": "",
          "raw": "【例 4-5】“6×7×11×3”的计算结果应为 1386。"
        },
        {
          "id": "4-6",
          "error": "1 与 1011 相乘应为 1011。",
          "analysis": "",
          "raw": "【例 4-6】1 与 1011 相乘应为 1011。"
        },
        {
          "id": "4-7",
          "error": "第④条与第⑦条内容重复。",
          "analysis": "",
          "raw": "【例 4-7】第④条与第⑦条内容重复。"
        },
        {
          "id": "4-8",
          "error": "“憋脚”应为“蹩脚”。",
          "analysis": "",
          "raw": "【例 4-8】“憋脚”应为“蹩脚”。"
        },
        {
          "id": "4-9",
          "error": "“年龄型”应为“年轻型”。",
          "analysis": "",
          "raw": "【例 4-9】“年龄型”应为“年轻型”。"
        },
        {
          "id": "4-10",
          "error": "“全城”应为“全球”。",
          "analysis": "",
          "raw": "【例 4-10】“全城”应为“全球”。"
        },
        {
          "id": "4-11",
          "error": "“千斤”应为“千金”。",
          "analysis": "",
          "raw": "【例 4-11】“千斤”应为“千金”。"
        },
        {
          "id": "4-12",
          "error": "“损赠”应为“捐赠”。",
          "analysis": "",
          "raw": "【例 4-12】“损赠”应为“捐赠”。"
        },
        {
          "id": "4-13",
          "error": "“安照”应为“按照”。",
          "analysis": "",
          "raw": "【例 4-13】“安照”应为“按照”。"
        },
        {
          "id": "4-14",
          "error": "OLIP 应为 OLTP。",
          "analysis": "",
          "raw": "【例 4-14】OLIP 应为 OLTP。"
        },
        {
          "id": "4-15",
          "error": "form 应为 from。",
          "analysis": "",
          "raw": "【例 4-15】form 应为 from。"
        },
        {
          "id": "4-16",
          "error": "红色框中文字与后句重复。",
          "analysis": "",
          "raw": "【例 4-16】红色框中文字与后句重复。"
        },
        {
          "id": "4-17",
          "error": "“《诗经）”应为“《诗经》”。",
          "analysis": "",
          "raw": "【例 4-17】“《诗经）”应为“《诗经》”。"
        },
        {
          "id": "4-18",
          "error": "“《香港基本法的》”应为“《香港基本法》的”。",
          "analysis": "",
          "raw": "【例 4-18】“《香港基本法的》”应为“《香港基本法》的”。"
        }
      ]
    }
  },
  {
    "year": "2024",
    "quarter": "Q2",
    "total_entries": 40,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "中国位于亚洲东部、太平洋西岸，是世界第三大国家。（应改为“世界国土面积第三",
          "analysis": "",
          "raw": "【例 1-1】中国位于亚洲东部、太平洋西岸，是世界第三大国家。（应改为“世界国土面积第三"
        },
        {
          "id": "1-2",
          "error": "台湾久为原住民聚居之地，虽然宋、元、明曾在此有不同形式的行政建置，17 世纪",
          "analysis": "",
          "raw": "【例 1-2】台湾久为原住民聚居之地，虽然宋、元、明曾在此有不同形式的行政建置，17 世纪"
        },
        {
          "id": "1-3",
          "error": "当时的政府无力改变中国“亡国灭种”的民族危机，民族矛盾和阶级矛盾始终是这",
          "analysis": "",
          "raw": "【例 1-3】当时的政府无力改变中国“亡国灭种”的民族危机，民族矛盾和阶级矛盾始终是这"
        },
        {
          "id": "1-4",
          "error": "一篇影评写作，在理想化的状态下，应该呈现出观点、信息和判断，在作者余勇可",
          "analysis": "",
          "raw": "【例 1-4】一篇影评写作，在理想化的状态下，应该呈现出观点、信息和判断，在作者余勇可"
        },
        {
          "id": "1-5",
          "error": "法律是成文的良知，道德是约定成俗的良知。（应改为“约定俗成”）",
          "analysis": "",
          "raw": "【例 1-5】法律是成文的良知，道德是约定成俗的良知。（应改为“约定俗成”）"
        },
        {
          "id": "1-6",
          "error": "到了 20 世纪 30 年代中后期，由于国内抗日战争和经济建设的影响，职业教育思潮",
          "analysis": "",
          "raw": "【例 1-6】到了 20 世纪 30 年代中后期，由于国内抗日战争和经济建设的影响，职业教育思潮"
        },
        {
          "id": "1-7",
          "error": "从业务进展、市场开拓方式、成本结构、资本结构到配偶是否支持创业，不一而同。",
          "analysis": "",
          "raw": "【例 1-7】从业务进展、市场开拓方式、成本结构、资本结构到配偶是否支持创业，不一而同。"
        },
        {
          "id": "1-8",
          "error": "1937 年，卢沟桥事变、“八·一三”事变相继爆发，故宫文物分三路向西疏散，存于",
          "analysis": "",
          "raw": "【例 1-8】1937 年，卢沟桥事变、“八·一三”事变相继爆发，故宫文物分三路向西疏散，存于"
        },
        {
          "id": "1-9",
          "error": "该片讲述了“九·一八”事变后，东北沦陷，冷云、胡秀之等抗联女战士为抵抗侵",
          "analysis": "",
          "raw": "【例 1-9】该片讲述了“九·一八”事变后，东北沦陷，冷云、胡秀之等抗联女战士为抵抗侵"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "按照制造业的计算逻辑，毛利率（Gross Profit）=收入－成本，其中的成本就包括服",
          "analysis": "",
          "raw": "【例 2-1】按照制造业的计算逻辑，毛利率（Gross Profit）=收入－成本，其中的成本就包括服"
        },
        {
          "id": "2-2",
          "error": "TSG D0001—2009《压力管道安全技术监察规程》第一百一十三条规定：凡有以下情",
          "analysis": "",
          "raw": "【例 2-2】TSG D0001—2009《压力管道安全技术监察规程》第一百一十三条规定：凡有以下情"
        },
        {
          "id": "2-3",
          "error": "进行复数四则运算时，注意以下几个常见等式：(1+i) =2i，(1－i) =－2i， = −i， = i，",
          "analysis": "",
          "raw": "【例 2-3】进行复数四则运算时，注意以下几个常见等式：(1+i) =2i，(1－i) =－2i， = −i， = i，"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "正五角星的每个内角是 36°，每个外角是 72°。（应改为“108°”）",
          "analysis": "",
          "raw": "【例 2-5】正五角星的每个内角是 36°，每个外角是 72°。（应改为“108°”）"
        },
        {
          "id": "2-6",
          "error": "调光数据：包括 8 位调光信息，00000000 表示 PWM 的占空比为 0%，即为关灯指令；",
          "analysis": "",
          "raw": "【例 2-6】调光数据：包括 8 位调光信息，00000000 表示 PWM 的占空比为 0%，即为关灯指令；"
        },
        {
          "id": "2-7",
          "error": "恩尼格玛密码机的编码转轮结构相当复杂和精密，通过接线板就可以实现 26 个字母",
          "analysis": "",
          "raw": "【例 2-7】恩尼格玛密码机的编码转轮结构相当复杂和精密，通过接线板就可以实现 26 个字母"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "",
          "analysis": "",
          "raw": "【例 2-9】"
        },
        {
          "id": "2-10",
          "error": "",
          "analysis": "",
          "raw": "【例 2-10】"
        },
        {
          "id": "2-11",
          "error": "",
          "analysis": "",
          "raw": "【例 2-11】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "There are a great many classic works in China that have prevail over centuries and still",
          "analysis": "",
          "raw": "【例 3-1】There are a great many classic works in China that have prevail over centuries and still"
        },
        {
          "id": "3-2",
          "error": "The digital world have had a profound impact on how data and information are collected,",
          "analysis": "",
          "raw": "【例 3-2】The digital world have had a profound impact on how data and information are collected,"
        },
        {
          "id": "3-3",
          "error": "E-commerce bring convenience to consumers in online shopping, as well as put significant",
          "analysis": "",
          "raw": "【例 3-3】E-commerce bring convenience to consumers in online shopping, as well as put significant"
        },
        {
          "id": "3-4",
          "error": "Shrinking sea ice forces Polar Bears to spend more time on land, so people and bears can",
          "analysis": "",
          "raw": "【例 3-4】Shrinking sea ice forces Polar Bears to spend more time on land, so people and bears can"
        },
        {
          "id": "3-5",
          "error": "It has been dry for such a long time that the forest could burst into fame at any moment.",
          "analysis": "",
          "raw": "【例 3-5】It has been dry for such a long time that the forest could burst into fame at any moment."
        },
        {
          "id": "3-6",
          "error": "The results of the two analysis are consistent. （应改为 analyses）",
          "analysis": "",
          "raw": "【例 3-6】The results of the two analysis are consistent. （应改为 analyses）"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "应为“可上九天揽月，可下五洋捉鳖”（出自毛泽东词作《水调歌头·重上井冈山》）。",
          "analysis": "",
          "raw": "【例 4-1】应为“可上九天揽月，可下五洋捉鳖”（出自毛泽东词作《水调歌头·重上井冈山》）。"
        },
        {
          "id": "4-2",
          "error": "法条引用错误。第五个条款与第四个条款相同。",
          "analysis": "",
          "raw": "【例 4-2】法条引用错误。第五个条款与第四个条款相同。"
        },
        {
          "id": "4-3",
          "error": "答案错误。根据解析，答案应为 B。",
          "analysis": "",
          "raw": "【例 4-3】答案错误。根据解析，答案应为 B。"
        },
        {
          "id": "4-4",
          "error": "“次数”单位错误。",
          "analysis": "",
          "raw": "【例 4-4】“次数”单位错误。"
        },
        {
          "id": "4-5",
          "error": "画线处应为换行符 “\\n”。",
          "analysis": "",
          "raw": "【例 4-5】画线处应为换行符 “\\n”。"
        },
        {
          "id": "4-6",
          "error": "red 应加双引号。",
          "analysis": "",
          "raw": "【例 4-6】red 应加双引号。"
        },
        {
          "id": "4-7",
          "error": "runif（6,0,2）应为在 0~2 之间产生 6 个均匀分布随机数。",
          "analysis": "",
          "raw": "【例 4-7】runif（6,0,2）应为在 0~2 之间产生 6 个均匀分布随机数。"
        },
        {
          "id": "4-8",
          "error": "表中 100%应为 10%。",
          "analysis": "",
          "raw": "【例 4-8】表中 100%应为 10%。"
        },
        {
          "id": "4-9",
          "error": "20 应为 30。",
          "analysis": "",
          "raw": "【例 4-9】20 应为 30。"
        },
        {
          "id": "4-10",
          "error": "重复。图中圈出部分应删除。",
          "analysis": "",
          "raw": "【例 4-10】重复。图中圈出部分应删除。"
        },
        {
          "id": "4-11",
          "error": "颠倒字。“金融家人们为地”应为“金融家们人为地”。",
          "analysis": "",
          "raw": "【例 4-11】颠倒字。“金融家人们为地”应为“金融家们人为地”。"
        },
        {
          "id": "4-12",
          "error": "漏字。“范是”应为“范围是”。",
          "analysis": "",
          "raw": "【例 4-12】漏字。“范是”应为“范围是”。"
        },
        {
          "id": "4-13",
          "error": "别字。“杠杠”应为“杠杆”。",
          "analysis": "",
          "raw": "【例 4-13】别字。“杠杠”应为“杠杆”。"
        },
        {
          "id": "4-14",
          "error": "别字。“字符中”应为“字符串”。",
          "analysis": "",
          "raw": "【例 4-14】别字。“字符中”应为“字符串”。"
        }
      ]
    }
  },
  {
    "year": "2024",
    "quarter": "Q4",
    "total_entries": 48,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "在第十九次全国代表大会上，习近平总书记专门就“加强创新创业”作出了重要指",
          "analysis": "",
          "raw": "【例 1-1】在第十九次全国代表大会上，习近平总书记专门就“加强创新创业”作出了重要指"
        },
        {
          "id": "1-2",
          "error": "他就是在二战期间下令向日本投掷原子弹、在朝鲜战争中屡次对中国进行核威胁的",
          "analysis": "",
          "raw": "【例 1-2】他就是在二战期间下令向日本投掷原子弹、在朝鲜战争中屡次对中国进行核威胁的"
        },
        {
          "id": "1-3",
          "error": "从开元二年（714）到天宝十四年（755）的四十一年间，玄宗先后出游华清宫三十",
          "analysis": "",
          "raw": "【例 1-3】从开元二年（714）到天宝十四年（755）的四十一年间，玄宗先后出游华清宫三十"
        },
        {
          "id": "1-4",
          "error": "国家卫健委等政府管理机构高度重视健康医疗大数据、“互联网+医疗健康”工作，",
          "analysis": "",
          "raw": "【例 1-4】国家卫健委等政府管理机构高度重视健康医疗大数据、“互联网+医疗健康”工作，"
        },
        {
          "id": "1-5",
          "error": "国家局信息平台通过制定医保数据元规范，实现数据的标准化和数据的规范管理。（可",
          "analysis": "",
          "raw": "【例 1-5】国家局信息平台通过制定医保数据元规范，实现数据的标准化和数据的规范管理。（可"
        },
        {
          "id": "1-6",
          "error": "商代“妇好爵”（现藏于中国历史博物馆），便是此时与西周初期典型饮酒器的代表，",
          "analysis": "",
          "raw": "【例 1-6】商代“妇好爵”（现藏于中国历史博物馆），便是此时与西周初期典型饮酒器的代表，"
        },
        {
          "id": "1-7",
          "error": "瓷釉方面，考古还发现了黄釉酒壶（现藏于河南省博物馆），河南省安阳市出土，为",
          "analysis": "",
          "raw": "【例 1-7】瓷釉方面，考古还发现了黄釉酒壶（现藏于河南省博物馆），河南省安阳市出土，为"
        },
        {
          "id": "1-8",
          "error": "直到贺铸逝去一千多年后的今天，彭城诗社仍然在该地区发挥着文化凝聚的价值。（应",
          "analysis": "",
          "raw": "【例 1-8】直到贺铸逝去一千多年后的今天，彭城诗社仍然在该地区发挥着文化凝聚的价值。（应"
        },
        {
          "id": "1-9",
          "error": "明朝初年的戏曲唱本中有“禄星送子下凡尘”的唱词，很显然早在四五百年前，禄",
          "analysis": "",
          "raw": "【例 1-9】明朝初年的戏曲唱本中有“禄星送子下凡尘”的唱词，很显然早在四五百年前，禄"
        },
        {
          "id": "1-10",
          "error": "从渐进主义的视角看，强基计划作为一项创新政策，在汲取过往拔尖创新人才政策",
          "analysis": "",
          "raw": "【例 1-10】从渐进主义的视角看，强基计划作为一项创新政策，在汲取过往拔尖创新人才政策"
        },
        {
          "id": "1-11",
          "error": "在实际运作中很多业务流程都是需要跨部门协作的，协作的过程中就往往会出现沟",
          "analysis": "",
          "raw": "【例 1-11】在实际运作中很多业务流程都是需要跨部门协作的，协作的过程中就往往会出现沟"
        },
        {
          "id": "1-12",
          "error": "对过去反射性接受的事物作出抉择，而不是陷入自动导航模式，是我们逐渐增强情",
          "analysis": "",
          "raw": "【例 1-12】对过去反射性接受的事物作出抉择，而不是陷入自动导航模式，是我们逐渐增强情"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "这一领域属于与人工智能交叉的研究范畴，与生成式人工智能（Artificial Intelligence",
          "analysis": "",
          "raw": "【例 2-1】这一领域属于与人工智能交叉的研究范畴，与生成式人工智能（Artificial Intelligence"
        },
        {
          "id": "2-2",
          "error": "执行 TOPSIS 法，将决策矩阵进行加权归一化，通过各方案与正、负理想解之间的欧",
          "analysis": "",
          "raw": "【例 2-2】执行 TOPSIS 法，将决策矩阵进行加权归一化，通过各方案与正、负理想解之间的欧"
        },
        {
          "id": "2-3",
          "error": "当 0＜λ＜3.5 时，载荷-扰度曲线单调递增，不会发生屈曲。（应改为“挠度”）",
          "analysis": "",
          "raw": "【例 2-3】当 0＜λ＜3.5 时，载荷-扰度曲线单调递增，不会发生屈曲。（应改为“挠度”）"
        },
        {
          "id": "2-4",
          "error": "在每一个滑动窗口的位置都预设 k 个候选框。这些候选框不是无中生有的，而是预",
          "analysis": "",
          "raw": "【例 2-4】在每一个滑动窗口的位置都预设 k 个候选框。这些候选框不是无中生有的，而是预"
        },
        {
          "id": "2-5",
          "error": "低角度拍摄（也称为虫瞰角度）可以使被拍摄物体或场景显得更加庄重或高大。（应",
          "analysis": "",
          "raw": "【例 2-5】低角度拍摄（也称为虫瞰角度）可以使被拍摄物体或场景显得更加庄重或高大。（应"
        },
        {
          "id": "2-6",
          "error": "采用脉宽调特原理进行测量的优点是频率较低，对周围无射频干扰，稳定性好，线",
          "analysis": "",
          "raw": "【例 2-6】采用脉宽调特原理进行测量的优点是频率较低，对周围无射频干扰，稳定性好，线"
        },
        {
          "id": "2-7",
          "error": "OSI 是 Open System Interconnect 的缩写，意为开放式系统互联，一般称为 OSI 参考",
          "analysis": "",
          "raw": "【例 2-7】OSI 是 Open System Interconnect 的缩写，意为开放式系统互联，一般称为 OSI 参考"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "在计算往返时时延，由于在同一台计算机中统计时间，因此不会出现该问题。（应改",
          "analysis": "",
          "raw": "【例 2-9】在计算往返时时延，由于在同一台计算机中统计时间，因此不会出现该问题。（应改"
        },
        {
          "id": "2-10",
          "error": "波士顿 7S 分析作为一种战略规划工具，旨在协助企业在错综复杂的市场环境中做出",
          "analysis": "",
          "raw": "【例 2-10】波士顿 7S 分析作为一种战略规划工具，旨在协助企业在错综复杂的市场环境中做出"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "Amazon provides varies products such as DVD, computer accessories, clothes, etc. （应改",
          "analysis": "",
          "raw": "【例 3-1】Amazon provides varies products such as DVD, computer accessories, clothes, etc. （应改"
        },
        {
          "id": "3-2",
          "error": "It is one of the biggest worldwide e-commerce company. （应改为 companies）",
          "analysis": "",
          "raw": "【例 3-2】It is one of the biggest worldwide e-commerce company. （应改为 companies）"
        },
        {
          "id": "3-3",
          "error": "Did you have any bad or good experience? If yes, how was it like? （应改为 what was it",
          "analysis": "",
          "raw": "【例 3-3】Did you have any bad or good experience? If yes, how was it like? （应改为 what was it"
        },
        {
          "id": "3-4",
          "error": "A suitable live streaming style would make your live stream stands out from others. （应",
          "analysis": "",
          "raw": "【例 3-4】A suitable live streaming style would make your live stream stands out from others. （应"
        },
        {
          "id": "3-5",
          "error": "Why business niches are so important to us? （应改为 are business niches）",
          "analysis": "",
          "raw": "【例 3-5】Why business niches are so important to us? （应改为 are business niches）"
        },
        {
          "id": "3-6",
          "error": "Some employers practice ageism and refuse to hire the older worker. （应改为 older",
          "analysis": "",
          "raw": "【例 3-6】Some employers practice ageism and refuse to hire the older worker. （应改为 older"
        },
        {
          "id": "3-7",
          "error": "The brain changes improve the new father’s ability to empathize with their children. （应",
          "analysis": "",
          "raw": "【例 3-7】The brain changes improve the new father’s ability to empathize with their children. （应"
        },
        {
          "id": "3-8",
          "error": "In the olded days, people used to make their own clothes by hand. （应改为 olden）",
          "analysis": "",
          "raw": "【例 3-8】In the olded days, people used to make their own clothes by hand. （应改为 olden）"
        },
        {
          "id": "3-9",
          "error": "The direct of operations also works as a data analyst. （应改为 director）",
          "analysis": "",
          "raw": "【例 3-9】The direct of operations also works as a data analyst. （应改为 director）"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "肖申克是监狱的名字，框中“肖申克”应改为主角的名字——安迪。",
          "analysis": "",
          "raw": "【例 4-1】肖申克是监狱的名字，框中“肖申克”应改为主角的名字——安迪。"
        },
        {
          "id": "4-2",
          "error": "十三陵是明朝迁都北京后明成祖朱棣及其以后共计 13 位皇帝陵墓的总称，朱元璋葬",
          "analysis": "",
          "raw": "【例 4-2】十三陵是明朝迁都北京后明成祖朱棣及其以后共计 13 位皇帝陵墓的总称，朱元璋葬"
        },
        {
          "id": "4-3",
          "error": "飞机的各项参数不符合事实：机身长度应为 30.3 米，机身高度应为 7.8 米，翼展应",
          "analysis": "",
          "raw": "【例 4-3】飞机的各项参数不符合事实：机身长度应为 30.3 米，机身高度应为 7.8 米，翼展应"
        },
        {
          "id": "4-4",
          "error": "题目错误，影响做题。数列中的 9 改为 10 才符合解析的规律。",
          "analysis": "",
          "raw": "【例 4-4】题目错误，影响做题。数列中的 9 改为 10 才符合解析的规律。"
        },
        {
          "id": "4-5",
          "error": "前后数字不一致，可将 720ppi 改为 72ppi，表示每英寸包含 72 个像素点。",
          "analysis": "",
          "raw": "【例 4-5】前后数字不一致，可将 720ppi 改为 72ppi，表示每英寸包含 72 个像素点。"
        },
        {
          "id": "4-6",
          "error": "文字与算式不一致，512×512 应改为 480×360。",
          "analysis": "",
          "raw": "【例 4-6】文字与算式不一致，512×512 应改为 480×360。"
        },
        {
          "id": "4-7",
          "error": "相关文字不一致，“刘晓洁”与“小张”的姓氏应一致。",
          "analysis": "",
          "raw": "【例 4-7】 相关文字不一致，“刘晓洁”与“小张”的姓氏应一致。"
        },
        {
          "id": "4-8",
          "error": "试题 4 和试题 5 完全重复。",
          "analysis": "",
          "raw": "【例 4-8】试题 4 和试题 5 完全重复。"
        },
        {
          "id": "4-9",
          "error": "语句表意不明。",
          "analysis": "",
          "raw": "【例 4-9】语句表意不明。"
        },
        {
          "id": "4-10",
          "error": "画线语句前后矛盾，其中一个“计算列”应为 “列计算”。",
          "analysis": "",
          "raw": "【例 4-10】画线语句前后矛盾，其中一个“计算列”应为 “列计算”。"
        },
        {
          "id": "4-11",
          "error": "少字，“度”应为“印度”。",
          "analysis": "",
          "raw": "【例 4-11】 少字，“度”应为“印度”。"
        },
        {
          "id": "4-12",
          "error": "“自苦”应为“自古”。",
          "analysis": "",
          "raw": "【例 4-12】“自苦”应为“自古”。"
        },
        {
          "id": "4-13",
          "error": "“核佻”应为“核桃”。",
          "analysis": "",
          "raw": "【例 4-13】 “核佻”应为“核桃”。"
        },
        {
          "id": "4-14",
          "error": "“四基本的种”应为“四种基本的”。",
          "analysis": "",
          "raw": "【例 4-14】“四基本的种”应为“四种基本的”。"
        },
        {
          "id": "4-15",
          "error": "“厚物载德”应为“厚德载物”。",
          "analysis": "",
          "raw": "【例 4-15】“厚物载德”应为“厚德载物”。"
        },
        {
          "id": "4-16",
          "error": "“为更”应为“变更”。",
          "analysis": "",
          "raw": "【例 4-16】“为更”应为“变更”。"
        },
        {
          "id": "4-17",
          "error": "WS 应为 WL。",
          "analysis": "",
          "raw": "【例 4-17】WS 应为 WL。"
        }
      ]
    }
  },
  {
    "year": "2025",
    "quarter": "Q1",
    "total_entries": 52,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "新中国成立后，中国人民政治协商会议第一届全体会议通过的《中国人民政治协商",
          "analysis": "",
          "raw": "【例 1-1】新中国成立后，中国人民政治协商会议第一届全体会议通过的《中国人民政治协商"
        },
        {
          "id": "1-2",
          "error": "我国西南地区岩溶天生桥景观非常发达，广西省百色市乐业县横跨布柳河之上的天",
          "analysis": "",
          "raw": "【例 1-2】我国西南地区岩溶天生桥景观非常发达，广西省百色市乐业县横跨布柳河之上的天"
        },
        {
          "id": "1-3",
          "error": "1934 年 4 月中旬至下旬，国民党军集中 11 个师进攻广昌，企图打开中央革命根据地",
          "analysis": "",
          "raw": "【例 1-3】1934 年 4 月中旬至下旬，国民党军集中 11 个师进攻广昌，企图打开中央革命根据地"
        },
        {
          "id": "1-4",
          "error": "新中国成立后，特别是改革开放以来，中国经济总量先后超越亚洲四小龙，随后又",
          "analysis": "",
          "raw": "【例 1-4】新中国成立后，特别是改革开放以来，中国经济总量先后超越亚洲四小龙，随后又"
        },
        {
          "id": "1-5",
          "error": "武夷山的“鹰嘴岩”，矗立在丛峰之中，岩石向东南端突出，恰似鹰嘴，整块岩石活",
          "analysis": "",
          "raw": "【例 1-5】武夷山的“鹰嘴岩”，矗立在丛峰之中，岩石向东南端突出，恰似鹰嘴，整块岩石活"
        },
        {
          "id": "1-6",
          "error": "正如高建老师在活动“课述”环节中提到，来自清华科技园和清华经管学院的教师",
          "analysis": "",
          "raw": "【例 1-6】正如高建老师在活动“课述”环节中提到，来自清华科技园和清华经管学院的教师"
        },
        {
          "id": "1-7",
          "error": "前提本身不为真是指我们收集的数据鱼龙混杂，比如我们的学生在检索数据的时候",
          "analysis": "",
          "raw": "【例 1-7】前提本身不为真是指我们收集的数据鱼龙混杂，比如我们的学生在检索数据的时候"
        },
        {
          "id": "1-8",
          "error": "虽然两个人的感情还在，但如胶似膝的浪漫与甜蜜，被柴米油盐等日常琐事所覆盖。",
          "analysis": "",
          "raw": "【例 1-8】虽然两个人的感情还在，但如胶似膝的浪漫与甜蜜，被柴米油盐等日常琐事所覆盖。"
        },
        {
          "id": "1-9",
          "error": "“只要一捧起那些书，我就浑身通畅，感觉自己快活得像天上的小鸟，自由得好比水",
          "analysis": "",
          "raw": "【例 1-9】“只要一捧起那些书，我就浑身通畅，感觉自己快活得像天上的小鸟，自由得好比水"
        },
        {
          "id": "1-10",
          "error": "以数据驱动业务流程再造和组织结构优化，促进跨层级、跨系统、跨部门、跨业务",
          "analysis": "",
          "raw": "【例 1-10】以数据驱动业务流程再造和组织结构优化，促进跨层级、跨系统、跨部门、跨业务"
        },
        {
          "id": "1-11",
          "error": "打开语音信箱，蒂芙尼气若游思的声音断断续续传入耳中。（应改为“气若游丝”）",
          "analysis": "",
          "raw": "【例 1-11】打开语音信箱，蒂芙尼气若游思的声音断断续续传入耳中。（应改为“气若游丝”）"
        },
        {
          "id": "1-12",
          "error": "“动物是通人性的，你喜欢它是你的事，只有认定它也喜欢你，或者至少不怕你，",
          "analysis": "",
          "raw": "【例 1-12】“动物是通人性的，你喜欢它是你的事，只有认定它也喜欢你，或者至少不怕你，"
        },
        {
          "id": "1-13",
          "error": "这些创业者最关心的问题，恰恰也正是创业课最关注的方面。（“恰恰”与“正”应",
          "analysis": "",
          "raw": "【例 1-13】这些创业者最关心的问题，恰恰也正是创业课最关注的方面。（“恰恰”与“正”应"
        },
        {
          "id": "1-14",
          "error": "本章总结选取的一些数学思想理论和数学思维方法，只是庞大数学知识体系中极少",
          "analysis": "",
          "raw": "【例 1-14】本章总结选取的一些数学思想理论和数学思维方法，只是庞大数学知识体系中极少"
        },
        {
          "id": "1-15",
          "error": "直到哈佛大学克里斯坦森教授在其著作中普及了这一术语，“待办任务”才得以广",
          "analysis": "",
          "raw": "【例 1-15】直到哈佛大学克里斯坦森教授在其著作中普及了这一术语，“待办任务”才得以广"
        },
        {
          "id": "1-16",
          "error": "感谢所有给予我信任并允许我和他们一起探索生命旅程的人，以及我生命中最至亲",
          "analysis": "",
          "raw": "【例 1-16】感谢所有给予我信任并允许我和他们一起探索生命旅程的人，以及我生命中最至亲"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "处理过程中不添加任何化学药剂，能有效回收油泥里的石油资源，不产生二次污染，",
          "analysis": "",
          "raw": "【例 2-1】处理过程中不添加任何化学药剂，能有效回收油泥里的石油资源，不产生二次污染，"
        },
        {
          "id": "2-2",
          "error": "假膜性肠炎，表现为长臂坏死、体液渗出、剧烈腹痛，甚至脱水或休克等。（应改为",
          "analysis": "",
          "raw": "【例 2-2】假膜性肠炎，表现为长臂坏死、体液渗出、剧烈腹痛，甚至脱水或休克等。（应改为"
        },
        {
          "id": "2-3",
          "error": "in crash recovery：数据库实例非异常停止后，重新启动，会先进行实例的恢复，在实",
          "analysis": "",
          "raw": "【例 2-3】in crash recovery：数据库实例非异常停止后，重新启动，会先进行实例的恢复，在实"
        },
        {
          "id": "2-4",
          "error": "文档型数据库在数据差序的过程中使用较为复杂的查询条件语句取得目标数据。（应",
          "analysis": "",
          "raw": "【例 2-4】文档型数据库在数据差序的过程中使用较为复杂的查询条件语句取得目标数据。（应"
        },
        {
          "id": "2-5",
          "error": "各种电气设备会因为周边的电磁环境而导致性能降低，功能丧失和损坏，也不会在",
          "analysis": "",
          "raw": "【例 2-5】各种电气设备会因为周边的电磁环境而导致性能降低，功能丧失和损坏，也不会在"
        },
        {
          "id": "2-6",
          "error": "人工智能神经网络（Artificial Neural Network）。（应改为“人工”）",
          "analysis": "",
          "raw": "【例 2-6】人工智能神经网络（Artificial Neural Network）。（应改为“人工”）"
        },
        {
          "id": "2-7",
          "error": "",
          "analysis": "",
          "raw": "【例 2-7】"
        },
        {
          "id": "2-8",
          "error": "同位素的丰度总和通常是 100。（应改为“100%”或“1”）",
          "analysis": "",
          "raw": "【例 2-8】同位素的丰度总和通常是 100。（应改为“100%”或“1”）"
        },
        {
          "id": "2-9",
          "error": "19 世纪著名的荷兰版画家埃舍尔创造了很多美丽的镶嵌图。（应改为“20”）",
          "analysis": "",
          "raw": "【例 2-9】19 世纪著名的荷兰版画家埃舍尔创造了很多美丽的镶嵌图。（应改为“20”）"
        },
        {
          "id": "2-10",
          "error": "因为以太坊的出块速度（912s 左右）远远快于比特币（10min 左右），因此难以避",
          "analysis": "",
          "raw": "【例 2-10】因为以太坊的出块速度（912s 左右）远远快于比特币（10min 左右），因此难以避"
        },
        {
          "id": "2-11",
          "error": "1-范数（1-norm），又称为曼哈顿距离（Manhattan norm）或曼哈顿长度，是向量空",
          "analysis": "",
          "raw": "【例 2-11】1-范数（1-norm），又称为曼哈顿距离（Manhattan norm）或曼哈顿长度，是向量空"
        },
        {
          "id": "2-12",
          "error": "椭圆曲线（elliptic curve）是指由魏尔斯特拉斯（Weierstrass）方程确定的平面。（应",
          "analysis": "",
          "raw": "【例 2-12】椭圆曲线（elliptic curve）是指由魏尔斯特拉斯（Weierstrass）方程确定的平面。（应"
        },
        {
          "id": "2-13",
          "error": "",
          "analysis": "",
          "raw": "【例 2-13】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "Don’t forget to bring you’re notes. （应改为 your）",
          "analysis": "",
          "raw": "【例 3-1】Don’t forget to bring you’re notes. （应改为 your）"
        },
        {
          "id": "3-2",
          "error": "Since the ancient castle was built in the 16th century, it remained a symbol of the city’s",
          "analysis": "",
          "raw": "【例 3-2】Since the ancient castle was built in the 16th century, it remained a symbol of the city’s"
        },
        {
          "id": "3-3",
          "error": "According to this theory, people approach digital texts with a mindset suited to social",
          "analysis": "",
          "raw": "【例 3-3】 According to this theory, people approach digital texts with a mindset suited to social"
        },
        {
          "id": "3-4",
          "error": "Many movies and plays are based on Great Expectations because its story about love,",
          "analysis": "",
          "raw": "【例 3-4】Many movies and plays are based on Great Expectations because its story about love,"
        },
        {
          "id": "3-5",
          "error": "Policies implemented though counties revitalize rural economies. （应改为 through）",
          "analysis": "",
          "raw": "【例 3-5】Policies implemented though counties revitalize rural economies. （应改为 through）"
        },
        {
          "id": "3-6",
          "error": "The report, complied from market trends, predicted an economic downturn. （应改为",
          "analysis": "",
          "raw": "【例 3-6】 The report, complied from market trends, predicted an economic downturn. （应改为"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "时间错误。苏联发射第一颗人造卫星的时间应为 1957 年。",
          "analysis": "",
          "raw": "【例 4-1】时间错误。苏联发射第一颗人造卫星的时间应为 1957 年。"
        },
        {
          "id": "4-2",
          "error": "概念错误。人体基因组的 23 对染色体对应着 46 个 DNA 分子。",
          "analysis": "",
          "raw": "【例 4-2】概念错误。人体基因组的 23 对染色体对应着 46 个 DNA 分子。"
        },
        {
          "id": "4-3",
          "error": "人名错误。晃补之应为晁补之。",
          "analysis": "",
          "raw": "【例 4-3】人名错误。晃补之应为晁补之。"
        },
        {
          "id": "4-4",
          "error": "数据错误。钢琴的 88 个琴键包括 52 个白键、36 个黑键。",
          "analysis": "",
          "raw": "【例 4-4】数据错误。钢琴的 88 个琴键包括 52 个白键、36 个黑键。"
        },
        {
          "id": "4-5",
          "error": "概念错误。十进制的基本符号包括 0~9，不含 10。",
          "analysis": "",
          "raw": "【例 4-5】概念错误。十进制的基本符号包括 0~9，不含 10。"
        },
        {
          "id": "4-6",
          "error": "第 2 行代码中的 4 应为 2。",
          "analysis": "",
          "raw": "【例 4-6】第 2 行代码中的 4 应为 2。"
        },
        {
          "id": "4-7",
          "error": "输出结果中的 verse 应为 num。",
          "analysis": "",
          "raw": "【例 4-7】输出结果中的 verse 应为 num。"
        },
        {
          "id": "4-8",
          "error": "第 3 行代码中的“（a+b）”应为“（a-b）”。",
          "analysis": "",
          "raw": "【例 4-8】第 3 行代码中的“（a+b）”应为“（a-b）”。"
        },
        {
          "id": "4-9",
          "error": "红框中的语句与前面的语句重复。",
          "analysis": "",
          "raw": "【例 4-9】红框中的语句与前面的语句重复。"
        },
        {
          "id": "4-10",
          "error": "“信用”应为“信汇”。",
          "analysis": "",
          "raw": "【例 4-10】“信用”应为“信汇”。"
        },
        {
          "id": "4-11",
          "error": "“组织”应为“阻止”。",
          "analysis": "",
          "raw": "【例 4-11】“组织”应为“阻止”。"
        },
        {
          "id": "4-12",
          "error": "“聊”应为“卿”。",
          "analysis": "",
          "raw": "【例 4-12】“聊”应为“卿”。"
        },
        {
          "id": "4-13",
          "error": "“丝巾”应为“湿巾”。",
          "analysis": "",
          "raw": "【例 4-13】“丝巾”应为“湿巾”。"
        },
        {
          "id": "4-14",
          "error": "56 应为 5G。",
          "analysis": "",
          "raw": "【例 4-14】56 应为 5G。"
        },
        {
          "id": "4-15",
          "error": "“(N-1)服务”应为“(N-1)层”。",
          "analysis": "",
          "raw": "【例 4-15】“(N-1)服务”应为“(N-1)层”。"
        },
        {
          "id": "4-16",
          "error": "“气温/℃”中的“37-10”应为“37-40”。",
          "analysis": "",
          "raw": "【例 4-16】“气温/℃”中的“37-10”应为“37-40”。"
        },
        {
          "id": "4-17",
          "error": "图中文字错误，“保垒”应为“堡垒”。",
          "analysis": "",
          "raw": "【例 4-17】 图中文字错误，“保垒”应为“堡垒”。"
        }
      ]
    }
  },
  {
    "year": "2025",
    "quarter": "Q2",
    "total_entries": 47,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "春秋时期，诸子百家就已经开始探讨美感的普遍性与差异性，如儒家学派的孟子在",
          "analysis": "",
          "raw": "【例 1-1】春秋时期，诸子百家就已经开始探讨美感的普遍性与差异性，如儒家学派的孟子在"
        },
        {
          "id": "1-2",
          "error": "中国古典诗词中有不少以距离制造神秘的佳句，如“千呼万唤始出来，犹抱琵琶半",
          "analysis": "",
          "raw": "【例 1-2】中国古典诗词中有不少以距离制造神秘的佳句，如“千呼万唤始出来，犹抱琵琶半"
        },
        {
          "id": "1-3",
          "error": "魏晋画家宗炳提出“澄怀味象”，其中，“澄怀”二字就是要求审美主体澄清胸怀，",
          "analysis": "",
          "raw": "【例 1-3】魏晋画家宗炳提出“澄怀味象”，其中，“澄怀”二字就是要求审美主体澄清胸怀，"
        },
        {
          "id": "1-4",
          "error": "蛋壳高柄黑陶杯，龙山文化，高 26.5 厘米，公元前 3000—前 2000 年，山东日照东",
          "analysis": "",
          "raw": "【例 1-4】蛋壳高柄黑陶杯，龙山文化，高 26.5 厘米，公元前 3000—前 2000 年，山东日照东"
        },
        {
          "id": "1-5",
          "error": "作者获得美国天普大学 IT 审计与网络安全专业理学硕士学位，现为马来亚-威尔士大",
          "analysis": "",
          "raw": "【例 1-5】作者获得美国天普大学 IT 审计与网络安全专业理学硕士学位，现为马来亚-威尔士大"
        },
        {
          "id": "1-6",
          "error": "2022 年 12 月 20 日，中国发改委发布的文章《完善数据资产新蓝图 释放数据要素",
          "analysis": "",
          "raw": "【例 1-6】2022 年 12 月 20 日，中国发改委发布的文章《完善数据资产新蓝图 释放数据要素"
        },
        {
          "id": "1-7",
          "error": "林则徐严禁地方官员迎接送往，他轻车简从，随行人员不过十来人，而且要求随行",
          "analysis": "",
          "raw": "【例 1-7】林则徐严禁地方官员迎接送往，他轻车简从，随行人员不过十来人，而且要求随行"
        },
        {
          "id": "1-8",
          "error": "当时，商纣王正在跟东夷人作战，打得昏天地暗。就在商朝的主力部队战斗值被严",
          "analysis": "",
          "raw": "【例 1-8】当时，商纣王正在跟东夷人作战，打得昏天地暗。就在商朝的主力部队战斗值被严"
        },
        {
          "id": "1-9",
          "error": "2022 年，故宫博物院推出了一场以“何以中国”为主题的展览，在方寸之间探寻“中",
          "analysis": "",
          "raw": "【例 1-9】2022 年，故宫博物院推出了一场以“何以中国”为主题的展览，在方寸之间探寻“中"
        },
        {
          "id": "1-10",
          "error": "可能很多朋友会以为，只有省市级别的博物馆才能达到一级博物馆的称号。其实，",
          "analysis": "",
          "raw": "【例 1-10】可能很多朋友会以为，只有省市级别的博物馆才能达到一级博物馆的称号。其实，"
        },
        {
          "id": "1-11",
          "error": "心理学发展到今天，心理学家已经发展了很多研究心理现象的方法，如心理测验法、",
          "analysis": "",
          "raw": "【例 1-11】心理学发展到今天，心理学家已经发展了很多研究心理现象的方法，如心理测验法、"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "",
          "analysis": "",
          "raw": "【例 2-1】"
        },
        {
          "id": "2-2",
          "error": "",
          "analysis": "",
          "raw": "【例 2-2】"
        },
        {
          "id": "2-3",
          "error": "",
          "analysis": "",
          "raw": "【例 2-3】"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "",
          "analysis": "",
          "raw": "【例 2-5】"
        },
        {
          "id": "2-6",
          "error": "",
          "analysis": "",
          "raw": "【例 2-6】"
        },
        {
          "id": "2-7",
          "error": "",
          "analysis": "",
          "raw": "【例 2-7】"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "",
          "analysis": "",
          "raw": "【例 2-9】"
        },
        {
          "id": "2-10",
          "error": "",
          "analysis": "",
          "raw": "【例 2-10】"
        },
        {
          "id": "2-11",
          "error": "",
          "analysis": "",
          "raw": "【例 2-11】"
        },
        {
          "id": "2-12",
          "error": "",
          "analysis": "",
          "raw": "【例 2-12】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "For the past years, his high salary is envied by others. （应改为 has been）",
          "analysis": "",
          "raw": "【例 3-1】For the past years, his high salary is envied by others. （应改为 has been）"
        },
        {
          "id": "3-2",
          "error": "National parks generate income through tourism activities, support local economies, and",
          "analysis": "",
          "raw": "【例 3-2】National parks generate income through tourism activities, support local economies, and"
        },
        {
          "id": "3-3",
          "error": "All the applicants must ensure that their personal information forms are filled incorrectly;",
          "analysis": "",
          "raw": "【例 3-3】 All the applicants must ensure that their personal information forms are filled incorrectly;"
        },
        {
          "id": "3-4",
          "error": "The principle challenge we face right now is to reduce the production cost without",
          "analysis": "",
          "raw": "【例 3-4】The principle challenge we face right now is to reduce the production cost without"
        },
        {
          "id": "3-5",
          "error": "Look at that building across the street. That’s the Empire State. （应改为 Empire State",
          "analysis": "",
          "raw": "【例 3-5】Look at that building across the street. That’s the Empire State. （应改为 Empire State"
        },
        {
          "id": "3-6",
          "error": "Before the pandemic, 8 million Argentine received food assistance. （应改为 Argentines）",
          "analysis": "",
          "raw": "【例 3-6】Before the pandemic, 8 million Argentine received food assistance. （应改为 Argentines）"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "引文出处有误，应为《荀子·劝学》。",
          "analysis": "",
          "raw": "【例 4-1】引文出处有误，应为《荀子·劝学》。"
        },
        {
          "id": "4-2",
          "error": "年代错误，19 世纪应为 20 世纪。",
          "analysis": "",
          "raw": "【例 4-2】年代错误，19 世纪应为 20 世纪。"
        },
        {
          "id": "4-3",
          "error": "地名错误，荔坡应为荔波。",
          "analysis": "",
          "raw": "【例 4-3】地名错误，荔坡应为荔波。"
        },
        {
          "id": "4-4",
          "error": "数值错误，tan60°的值应为 。",
          "analysis": "",
          "raw": "【例 4-4】数值错误，tan60°的值应为 。"
        },
        {
          "id": "4-5",
          "error": "年份错误，1920 应为 1991。",
          "analysis": "",
          "raw": "【例 4-5】年份错误，1920 应为 1991。"
        },
        {
          "id": "4-6",
          "error": "num 包含的列表“[6，7，8]”与正文表述的列表“[7，8，9]”应一致。",
          "analysis": "",
          "raw": "【例 4-6】num 包含的列表“[6，7，8]”与正文表述的列表“[7，8，9]”应一致。"
        },
        {
          "id": "4-7",
          "error": "红色框中的“字符串 2”应为“字符串 1”。",
          "analysis": "",
          "raw": "【例 4-7】红色框中的“字符串 2”应为“字符串 1”。"
        },
        {
          "id": "4-8",
          "error": "红色框中的“[”应为“]”。",
          "analysis": "",
          "raw": "【例 4-8】红色框中的“[”应为“]”。"
        },
        {
          "id": "4-9",
          "error": "“犯罪”应为“罪犯”。",
          "analysis": "",
          "raw": "【例 4-9】“犯罪”应为“罪犯”。"
        },
        {
          "id": "4-10",
          "error": "“几”应为“凡”。",
          "analysis": "",
          "raw": "【例 4-10】“几”应为“凡”。"
        },
        {
          "id": "4-11",
          "error": "句末多字，“上采样，320”应删除。",
          "analysis": "",
          "raw": "【例 4-11】句末多字，“上采样，320”应删除。"
        },
        {
          "id": "4-12",
          "error": "漏字，“第 3”应为“第 3 次”。",
          "analysis": "",
          "raw": "【例 4-12】漏字，“第 3”应为“第 3 次”。"
        },
        {
          "id": "4-13",
          "error": "答案 D 应为 C，与解析一致。",
          "analysis": "",
          "raw": "【例 4-13】答案 D 应为 C，与解析一致。"
        },
        {
          "id": "4-14",
          "error": "图文不一致，“A-B-C”应为“A-B-F”，后者符合三点充分连接。",
          "analysis": "",
          "raw": "【例 4-14】图文不一致，“A-B-C”应为“A-B-F”，后者符合三点充分连接。"
        },
        {
          "id": "4-15",
          "error": "图中圈出的“软件计划”应为“软件设计”。",
          "analysis": "",
          "raw": "【例 4-15】图中圈出的“软件计划”应为“软件设计”。"
        },
        {
          "id": "4-16",
          "error": "图文不符（圈出的文字与图无关）。",
          "analysis": "",
          "raw": "【例 4-16】图文不符（圈出的文字与图无关）。"
        },
        {
          "id": "4-17",
          "error": "文中 84 应为 94，与图一致。",
          "analysis": "",
          "raw": "【例 4-17】文中 84 应为 94，与图一致。"
        },
        {
          "id": "4-18",
          "error": "图中圈出的“甲”应为“乙”。",
          "analysis": "",
          "raw": "【例 4-18】图中圈出的“甲”应为“乙”。"
        }
      ]
    }
  },
  {
    "year": "2026",
    "quarter": "Q1",
    "total_entries": 46,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "西南联大诞生于抗战烽火之中，九一八事变后由清华、北大、南开三所大学组成，",
          "analysis": "",
          "raw": "【例 1-1】西南联大诞生于抗战烽火之中，九一八事变后由清华、北大、南开三所大学组成，"
        },
        {
          "id": "1-2",
          "error": "1945 年，此画由末代皇帝爱新觉罗·溥仪带出宫廷并流失到了东北，现在收藏于辽",
          "analysis": "",
          "raw": "【例 1-2】1945 年，此画由末代皇帝爱新觉罗·溥仪带出宫廷并流失到了东北，现在收藏于辽"
        },
        {
          "id": "1-3",
          "error": "截至 2024 年底，“中国农大—腾讯为村乡村 CEO 计划”开发的乡村 CEO 培养方案",
          "analysis": "",
          "raw": "【例 1-3】截至 2024 年底，“中国农大—腾讯为村乡村 CEO 计划”开发的乡村 CEO 培养方案"
        },
        {
          "id": "1-4",
          "error": "甲公司成立于 2018 年，注册于深圳前海自贸区，主营业务为消费电子产品的跨境出",
          "analysis": "",
          "raw": "【例 1-4】甲公司成立于 2018 年，注册于深圳前海自贸区，主营业务为消费电子产品的跨境出"
        },
        {
          "id": "1-5",
          "error": "从 2024 年往前推 365 年，也就是 1659 年，大明永历十三年。（应改为“清顺治十",
          "analysis": "",
          "raw": "【例 1-5】从 2024 年往前推 365 年，也就是 1659 年，大明永历十三年。（应改为“清顺治十"
        },
        {
          "id": "1-6",
          "error": "这些年来，我一直有一个困惑，在课堂上就具体法律规则给学生进行了清晰的讲授，",
          "analysis": "",
          "raw": "【例 1-6】这些年来，我一直有一个困惑，在课堂上就具体法律规则给学生进行了清晰的讲授，"
        },
        {
          "id": "1-7",
          "error": "“妈妈的这身衣服不合格！”听到孩子这么说，当妈的也正好可以义不容辞地去买",
          "analysis": "",
          "raw": "【例 1-7】“妈妈的这身衣服不合格！”听到孩子这么说，当妈的也正好可以义不容辞地去买"
        },
        {
          "id": "1-8",
          "error": "这起似乎正常的诉讼案件，变成一桩令人叹为观止的司法奇案，令人怀疑这一案件",
          "analysis": "",
          "raw": "【例 1-8】这起似乎正常的诉讼案件，变成一桩令人叹为观止的司法奇案，令人怀疑这一案件"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "",
          "analysis": "",
          "raw": "【例 2-1】"
        },
        {
          "id": "2-2",
          "error": "",
          "analysis": "",
          "raw": "【例 2-2】"
        },
        {
          "id": "2-3",
          "error": "",
          "analysis": "",
          "raw": "【例 2-3】"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "",
          "analysis": "",
          "raw": "【例 2-5】"
        },
        {
          "id": "2-6",
          "error": "",
          "analysis": "",
          "raw": "【例 2-6】"
        },
        {
          "id": "2-7",
          "error": "",
          "analysis": "",
          "raw": "【例 2-7】"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "",
          "analysis": "",
          "raw": "【例 2-9】"
        },
        {
          "id": "2-10",
          "error": "",
          "analysis": "",
          "raw": "【例 2-10】"
        },
        {
          "id": "2-11",
          "error": "",
          "analysis": "",
          "raw": "【例 2-11】"
        },
        {
          "id": "2-12",
          "error": "",
          "analysis": "",
          "raw": "【例 2-12】"
        },
        {
          "id": "2-13",
          "error": "",
          "analysis": "",
          "raw": "【例 2-13】"
        },
        {
          "id": "2-14",
          "error": "",
          "analysis": "",
          "raw": "【例 2-14】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "Since you are busy, so I’m going to eat some delicious food by myself. （删除 so）",
          "analysis": "",
          "raw": "【例 3-1】Since you are busy, so I’m going to eat some delicious food by myself. （删除 so）"
        },
        {
          "id": "3-2",
          "error": "The Mid-Autumn Festival is one of the Chinese’s most cherished traditional holidays. （应",
          "analysis": "",
          "raw": "【例 3-2】The Mid-Autumn Festival is one of the Chinese’s most cherished traditional holidays. （应"
        },
        {
          "id": "3-3",
          "error": "It’s glad to hear from you. （应改为 I’m）",
          "analysis": "",
          "raw": "【例 3-3】It’s glad to hear from you. （应改为 I’m）"
        },
        {
          "id": "3-5",
          "error": "Confucius’ arrival in Luoyang shows that Confucianism originated from the Duke of Zhou",
          "analysis": "",
          "raw": "【例 3-5】Confucius’ arrival in Luoyang shows that Confucianism originated from the Duke of Zhou"
        },
        {
          "id": "3-6",
          "error": "Traditional Chinese calligraphy is an ancient art form that dates back to the Han Dynasty",
          "analysis": "",
          "raw": "【例 3-6】Traditional Chinese calligraphy is an ancient art form that dates back to the Han Dynasty"
        },
        {
          "id": "3-7",
          "error": "The Silk Road dates back to the Han Dynasty (207BC-220AD) in ancient China. （应改为",
          "analysis": "",
          "raw": "【例 3-7】The Silk Road dates back to the Han Dynasty (207BC-220AD) in ancient China. （应改为"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "文中“洁厕灵”是产品，并非品牌名，其余框出品牌均不属于宝洁公司。",
          "analysis": "",
          "raw": "【例 4-1】文中“洁厕灵”是产品，并非品牌名，其余框出品牌均不属于宝洁公司。"
        },
        {
          "id": "4-2",
          "error": "此句出自南宋词人辛弃疾的《贺新郎•甚矣吾衰矣》，应为“白发空垂三千丈”。",
          "analysis": "",
          "raw": "【例 4-2】此句出自南宋词人辛弃疾的《贺新郎•甚矣吾衰矣》，应为“白发空垂三千丈”。"
        },
        {
          "id": "4-3",
          "error": "Grok 是由埃隆•马斯克旗下 xAI 公司开发的人工智能大模型，并不是字节跳动内部孵",
          "analysis": "",
          "raw": "【例 4-3】Grok 是由埃隆•马斯克旗下 xAI 公司开发的人工智能大模型，并不是字节跳动内部孵"
        },
        {
          "id": "4-4",
          "error": "“内核态”和“用户态”与其后英文不匹配，应为“内核态(Kernel Mode)”和“用",
          "analysis": "",
          "raw": "【例 4-4】“内核态”和“用户态”与其后英文不匹配，应为“内核态(Kernel Mode)”和“用"
        },
        {
          "id": "4-5",
          "error": "罗伯特·皮尔于 1841 年带领保守党赢得了大选。",
          "analysis": "",
          "raw": "【例 4-5】罗伯特·皮尔于 1841 年带领保守党赢得了大选。"
        },
        {
          "id": "4-6",
          "error": "王国维的出生年为 1877 年。",
          "analysis": "",
          "raw": "【例 4-6】王国维的出生年为 1877 年。"
        },
        {
          "id": "4-7",
          "error": "综合单价计算引用前式的结果 96.56 时出现差错，导致结果有误。",
          "analysis": "",
          "raw": "【例 4-7】 综合单价计算引用前式的结果 96.56 时出现差错，导致结果有误。"
        },
        {
          "id": "4-8",
          "error": "算式计算结果 133 有误，应为 173。",
          "analysis": "",
          "raw": "【例 4-8】算式计算结果 133 有误，应为 173。"
        },
        {
          "id": "4-9",
          "error": "注释语句有误，应为“左键”。",
          "analysis": "",
          "raw": "【例 4-9】注释语句有误，应为“左键”。"
        },
        {
          "id": "4-10",
          "error": "第 3 行文字“困难教育”应为“容易抚育”。",
          "analysis": "",
          "raw": "【例 4-10】第 3 行文字“困难教育”应为“容易抚育”。"
        },
        {
          "id": "4-11",
          "error": "两处“看病难”重复。",
          "analysis": "",
          "raw": "【例 4-11】两处“看病难”重复。"
        },
        {
          "id": "4-12",
          "error": "两行“2020 年山东卷”内容重复。",
          "analysis": "",
          "raw": "【例 4-12】两行“2020 年山东卷”内容重复。"
        },
        {
          "id": "4-13",
          "error": "“乐现”应为“乐观”。",
          "analysis": "",
          "raw": "【例 4-13】“乐现”应为“乐观”。"
        },
        {
          "id": "4-14",
          "error": "“办议”应为“协议”。",
          "analysis": "",
          "raw": "【例 4-14】“办议”应为“协议”。"
        },
        {
          "id": "4-15",
          "error": "根据计算结果，框中文字“大于”应为“小于”。",
          "analysis": "",
          "raw": "【例 4-15】根据计算结果，框中文字“大于”应为“小于”。"
        },
        {
          "id": "4-16",
          "error": "“设别”应为“识别”。",
          "analysis": "",
          "raw": "【例 4-16】“设别”应为“识别”。"
        },
        {
          "id": "4-17",
          "error": "表中第 2 行和第 3 行对应的注释应调换位置。",
          "analysis": "",
          "raw": "【例 4-17】表中第 2 行和第 3 行对应的注释应调换位置。"
        },
        {
          "id": "4-18",
          "error": "图中“效区”应为“郊区”。",
          "analysis": "",
          "raw": "【例 4-18】图中“效区”应为“郊区”。"
        }
      ]
    }
  },
  {
    "year": "2026",
    "quarter": "Q2",
    "total_entries": 51,
    "categories": {
      "文科类": [
        {
          "id": "1-1",
          "error": "党的十八大以来，以习近平总书记为核心的党中央把脱贫攻坚摆在治国理政的突出",
          "analysis": "",
          "raw": "【例 1-1】党的十八大以来，以习近平总书记为核心的党中央把脱贫攻坚摆在治国理政的突出"
        },
        {
          "id": "1-2",
          "error": "1998 年 8 月 7 日，“当代连环漫画原作展”于中国美术馆举行，展出中国内地和香",
          "analysis": "",
          "raw": "【例 1-2】1998 年 8 月 7 日，“当代连环漫画原作展”于中国美术馆举行，展出中国内地和香"
        },
        {
          "id": "1-3",
          "error": "上海、广东、浙江、山东各省低空产业基金规模均超 100 亿元。（可改为“省市”）",
          "analysis": "",
          "raw": "【例 1-3】上海、广东、浙江、山东各省低空产业基金规模均超 100 亿元。（可改为“省市”）"
        },
        {
          "id": "1-4",
          "error": "本组校服设计是基于“五四装”开展的，它象征了爱国、进步、民主、尊崇科学的",
          "analysis": "",
          "raw": "【例 1-4】本组校服设计是基于“五四装”开展的，它象征了爱国、进步、民主、尊崇科学的"
        },
        {
          "id": "1-5",
          "error": "2015 年 11 月 27 日至 28 日，中央扶贫开发工作会议于北京召开，习近平总书记强调：",
          "analysis": "",
          "raw": "【例 1-5】2015 年 11 月 27 日至 28 日，中央扶贫开发工作会议于北京召开，习近平总书记强调："
        },
        {
          "id": "1-6",
          "error": "习近平总书记在全国宣传思想工作会议上指出：“宣传思想工作就是要巩固马克思",
          "analysis": "",
          "raw": "【例 1-6】习近平总书记在全国宣传思想工作会议上指出：“宣传思想工作就是要巩固马克思"
        },
        {
          "id": "1-7",
          "error": "党的二十大报告明确提出“全面推进健康中国建设，健全现代医院管理制度”，为",
          "analysis": "",
          "raw": "【例 1-7】党的二十大报告明确提出“全面推进健康中国建设，健全现代医院管理制度”，为"
        },
        {
          "id": "1-8",
          "error": "我寻求爱情，首先因为爱情给我带来狂喜，它如此强烈，以致我经常愿意为了几小",
          "analysis": "",
          "raw": "【例 1-8】我寻求爱情，首先因为爱情给我带来狂喜，它如此强烈，以致我经常愿意为了几小"
        },
        {
          "id": "1-9",
          "error": "“大跃进”时期，土地实行计划经济，由集体统一经营和管理，采取农民同吃、同",
          "analysis": "",
          "raw": "【例 1-9】“大跃进”时期，土地实行计划经济，由集体统一经营和管理，采取农民同吃、同"
        },
        {
          "id": "1-10",
          "error": "他是个追求完美的人，每年重新备课的时候，总能发现不完美的地方，再加以修缮。",
          "analysis": "",
          "raw": "【例 1-10】他是个追求完美的人，每年重新备课的时候，总能发现不完美的地方，再加以修缮。"
        }
      ],
      "理工类": [
        {
          "id": "2-1",
          "error": "",
          "analysis": "",
          "raw": "【例 2-1】"
        },
        {
          "id": "2-2",
          "error": "",
          "analysis": "",
          "raw": "【例 2-2】"
        },
        {
          "id": "2-3",
          "error": "",
          "analysis": "",
          "raw": "【例 2-3】"
        },
        {
          "id": "2-4",
          "error": "",
          "analysis": "",
          "raw": "【例 2-4】"
        },
        {
          "id": "2-5",
          "error": "",
          "analysis": "",
          "raw": "【例 2-5】"
        },
        {
          "id": "2-6",
          "error": "",
          "analysis": "",
          "raw": "【例 2-6】"
        },
        {
          "id": "2-7",
          "error": "",
          "analysis": "",
          "raw": "【例 2-7】"
        },
        {
          "id": "2-8",
          "error": "",
          "analysis": "",
          "raw": "【例 2-8】"
        },
        {
          "id": "2-9",
          "error": "",
          "analysis": "",
          "raw": "【例 2-9】"
        },
        {
          "id": "2-10",
          "error": "",
          "analysis": "",
          "raw": "【例 2-10】"
        },
        {
          "id": "2-11",
          "error": "",
          "analysis": "",
          "raw": "【例 2-11】"
        },
        {
          "id": "2-12",
          "error": "",
          "analysis": "",
          "raw": "【例 2-12】"
        }
      ],
      "外语类": [
        {
          "id": "3-1",
          "error": "Ordinary people may have a name related with dragons. （应改为 to）",
          "analysis": "",
          "raw": "【例 3-1】Ordinary people may have a name related with dragons. （应改为 to）"
        },
        {
          "id": "3-2",
          "error": "The invention of bronze stand as a milestone in the history of human civilization. （应改",
          "analysis": "",
          "raw": "【例 3-2】The invention of bronze stand as a milestone in the history of human civilization. （应改"
        },
        {
          "id": "3-3",
          "error": "Some written materials preserve only a few myths, while others hold a comparative large",
          "analysis": "",
          "raw": "【例 3-3】 Some written materials preserve only a few myths, while others hold a comparative large"
        },
        {
          "id": "3-4",
          "error": "They continued to search Qu Yuan’s body for days but failed. （应改为 search for）",
          "analysis": "",
          "raw": "【例 3-4】 They continued to search Qu Yuan’s body for days but failed. （应改为 search for）"
        },
        {
          "id": "3-5",
          "error": "Chinese people regard the Moon Festival an occasion of family reunion. （应改为 regard",
          "analysis": "",
          "raw": "【例 3-5】 Chinese people regard the Moon Festival an occasion of family reunion. （应改为 regard"
        },
        {
          "id": "3-6",
          "error": "The Western Zhou Dynasty flourished in relative peace and prosperity for nearly five",
          "analysis": "",
          "raw": "【例 3-6】The Western Zhou Dynasty flourished in relative peace and prosperity for nearly five"
        },
        {
          "id": "3-7",
          "error": "Some of the most notable landmarks in the Forbidden City include the Meridian Gate（午",
          "analysis": "",
          "raw": "【例 3-7】Some of the most notable landmarks in the Forbidden City include the Meridian Gate（午"
        },
        {
          "id": "3-8",
          "error": "Shennong is believed to have introduced the technique of acupuncture. （应改为“Fuxi”）",
          "analysis": "",
          "raw": "【例 3-8】Shennong is believed to have introduced the technique of acupuncture. （应改为“Fuxi”）"
        },
        {
          "id": "3-9",
          "error": "The most popular Door God is Zhong Kui. （应改为“one of the most well-known”）",
          "analysis": "",
          "raw": "【例 3-9】 The most popular Door God is Zhong Kui. （应改为“one of the most well-known”）"
        }
      ],
      "读者反馈": [
        {
          "id": "4-1",
          "error": "“飞鸿”应为“鸿飞”。第一句的“飞鸿”指鸿雁，第二句的“鸿飞”指鸿雁飞走。",
          "analysis": "",
          "raw": "【例 4-1】“飞鸿”应为“鸿飞”。第一句的“飞鸿”指鸿雁，第二句的“鸿飞”指鸿雁飞走。"
        },
        {
          "id": "4-2",
          "error": "正常室温不可能是 200℃，框中 200℃应为 20℃。",
          "analysis": "",
          "raw": "【例 4-2】正常室温不可能是 200℃，框中 200℃应为 20℃。"
        },
        {
          "id": "4-3",
          "error": "词性标注错误，examiner 和 examinee 都是名词，v.应为 n.。",
          "analysis": "",
          "raw": "【例 4-3】词性标注错误，examiner 和 examinee 都是名词，v.应为 n.。"
        },
        {
          "id": "4-4",
          "error": "运算错误，（P-V）·Q 应用分配律结果应为 P·Q -V·Q。",
          "analysis": "",
          "raw": "【例 4-4】运算错误，（P-V）·Q 应用分配律结果应为 P·Q -V·Q。"
        },
        {
          "id": "4-5",
          "error": "三处框出的内容应表述一致，可将后两处改成“<35”“低于 35”或他改。",
          "analysis": "",
          "raw": "【例 4-5】三处框出的内容应表述一致，可将后两处改成“<35”“低于 35”或他改。"
        },
        {
          "id": "4-6",
          "error": "语句“no=no；”应为“no=no1；”。",
          "analysis": "",
          "raw": "【例 4-6】语句“no=no；”应为“no=no1；”。"
        },
        {
          "id": "4-7",
          "error": "框中的程序与上面内容完全重复，应删除。",
          "analysis": "",
          "raw": "【例 4-7】 框中的程序与上面内容完全重复，应删除。"
        },
        {
          "id": "4-8",
          "error": "括号应成对使用，箭头所指语句少了半个括号。",
          "analysis": "",
          "raw": "【例 4-8】括号应成对使用，箭头所指语句少了半个括号。"
        },
        {
          "id": "4-9",
          "error": "语句不通，应删除框中的“我国经济”。",
          "analysis": "",
          "raw": "【例 4-9】语句不通，应删除框中的“我国经济”。"
        },
        {
          "id": "4-10",
          "error": "“然绕”应为“燃烧”。",
          "analysis": "",
          "raw": "【例 4-10】“然绕”应为“燃烧”。"
        },
        {
          "id": "4-11",
          "error": "“民航科技”应为“民航客机”。",
          "analysis": "",
          "raw": "【例 4-11】“民航科技”应为“民航客机”。"
        },
        {
          "id": "4-12",
          "error": "“卸载”应为“下载”。",
          "analysis": "",
          "raw": "【例 4-12】“卸载”应为“下载”。"
        },
        {
          "id": "4-13",
          "error": "弹奏的注音有误，“dàn zòu”应为“tán zòu”。",
          "analysis": "",
          "raw": "【例 4-13】弹奏的注音有误，“dàn zòu”应为“tán zòu”。"
        },
        {
          "id": "4-14",
          "error": "多字，删除框中的“是”。",
          "analysis": "",
          "raw": "【例 4-14】多字，删除框中的“是”。"
        },
        {
          "id": "4-15",
          "error": "“宽期限”应为“宽限期”。",
          "analysis": "",
          "raw": "【例 4-15】“宽期限”应为“宽限期”。"
        },
        {
          "id": "4-16",
          "error": "“传销”应为“促销”。",
          "analysis": "",
          "raw": "【例 4-16】“传销”应为“促销”。"
        },
        {
          "id": "4-17",
          "error": "框中三处计算结果均有误。",
          "analysis": "",
          "raw": "【例 4-17】框中三处计算结果均有误。"
        },
        {
          "id": "4-18",
          "error": "根据正文内容和图题，图 1-1 和图 1-2 框中文字应交换位置。",
          "analysis": "",
          "raw": "【例 4-18】根据正文内容和图题，图 1-1 和图 1-2 框中文字应交换位置。"
        },
        {
          "id": "4-19",
          "error": "根据正文和表格内容，框中和表下的“身高”应为“体重”。",
          "analysis": "",
          "raw": "【例 4-19】根据正文和表格内容，框中和表下的“身高”应为“体重”。"
        },
        {
          "id": "4-20",
          "error": "根据内容可知，图 4.6 的分图（a）和（b）应交换位置。",
          "analysis": "",
          "raw": "【例 4-20】 根据内容可知，图 4.6 的分图（a）和（b）应交换位置。"
        }
      ]
    }
  }
];
