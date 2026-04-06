(function initQuestionBank(global) {
  'use strict';

  var questions = [
  {
    "id": "Q001",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "某正弦电流 i  10 2 sin(100t  60 )A ,当它通过 2Ω电阻时,其功率是( 。 )W",
    "options": [
      "A. 200",
      "B. 100",
      "C. 50",
      "D. 100 2  "
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 1
      }
    }
  },
  {
    "id": "Q002",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "已知正弦交流电流 i1  5 2 sin(314t  45 )A , i2  5 2 sin(314t  135 )A , 则 i  i1  i 2  A。 ",
    "options": [
      "A. 10 sin(314t  90 )",
      "B. 10 sin 314t ",
      "C. 5 2 sin(314t  75 )",
      "D. 10 sin(314t  90 )"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 2
      }
    }
  },
  {
    "id": "Q003",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "在全电路中,端电压随着负载电流的增大而",
    "options": [
      "A. 增大",
      "B. 减小",
      "C. 不变",
      "D. 无法判断"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 3
      }
    }
  },
  {
    "id": "Q004",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "如图所示,已知 I 1  3A , I 2  2A , I 3  8A , I 4  4 A ,则 I 5 的大小为 A",
    "options": [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. 6 1 / 10"
    ],
    "answer": null,
    "image": "./assets/source-images/1-bb70e0/img-000.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 4
      }
    }
  },
  {
    "id": "Q005",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "一平行板电容器 C 与电源相连,开关闭合后,电容器极板间的电压为 U,极板上的电荷量 为 Q。在不断开电源的条件下,把两极板间的距离缩小一倍,则",
    "options": [
      "A. U 不变,Q 和 C 都增大一倍",
      "B. U 不变,C 减小一半 ,Q 增大一倍",
      "C. U 和 Q 不变,C 增大一倍",
      "D. Q 不变,U 和 C 都增大一倍"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 5
      }
    }
  },
  {
    "id": "Q006",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "R1 和 R2 为两个并联电阻,已知 R1 = 3R2,若电路消耗的总功率为 20 W,则 R2 上消耗的功 率为",
    "options": [
      "A. 5",
      "B. 15",
      "C. 10",
      "D. 20"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 6
      }
    }
  },
  {
    "id": "Q007",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "如图所示的电路中,电阻的均值为 R = 10Ω,当开关 S 打开时 A、B 两端的等效电 阻 RAB 是 Ω",
    "options": [
      "A. 5",
      "B. 6",
      "C. 10",
      "D. 15"
    ],
    "answer": null,
    "image": "./assets/source-images/1-bb70e0/img-001.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 7
      }
    }
  },
  {
    "id": "Q008",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "如图所示的电路中,在开关 S 断开时电路处于 RLC 串联谐振状态,则 S 闭合时电路性质为",
    "options": [
      "A. 电阻性",
      "B. 电容性",
      "C. 电感性",
      "D. 无法确定"
    ],
    "answer": null,
    "image": "./assets/source-images/1-bb70e0/img-002.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 8
      }
    }
  },
  {
    "id": "Q009",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "在 RLC 串联交流电路中,谐振频率为 1000HZ, 通频带为 50HZ, 则电路的品质因数为",
    "options": [
      "A. 10",
      "B. 20",
      "C. 50",
      "D. 100"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 9
      }
    }
  },
  {
    "id": "Q010",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "如图所示的电路中,a,b 之间的开路电压 Uab 为 V",
    "options": [
      "A. 20",
      "B. -20",
      "C. 12",
      "D. -12"
    ],
    "answer": null,
    "image": "./assets/source-images/1-bb70e0/img-003.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 10
      }
    }
  },
  {
    "id": "Q011",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "如图所示电路,V1、V2 的工作状态是",
    "options": [
      "A. V1、V2 均导通",
      "B. V1 V2 均截止",
      "C. V1 截止 V2 导通",
      "D. V1 导通、V2 截止"
    ],
    "answer": null,
    "image": "./assets/source-images/1-bb70e0/img-004.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 11
      }
    }
  },
  {
    "id": "Q012",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "如图所示电路,设二极管为理想元件,其正向导通压降为 0V,当 Ui=3V 时,则 Uo 的值 为 。 2 / 10",
    "options": [
      "A. 等于 3.5V",
      "B. 等于 0",
      "C. 等于 5V",
      "D. 等于 3V"
    ],
    "answer": null,
    "image": "./assets/source-images/1-bb70e0/img-005.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 12
      }
    }
  },
  {
    "id": "Q013",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "在一块正常放大的电路板上,测得三极管 1、2、3 脚对地电压分别为-15V、-14.3V、-3V, 下列关于该三极管叙述不对的是",
    "options": [
      "A. 该管是 PNP 型",
      "B. 该三极管是硅三极管",
      "C. 1 脚是发射极",
      "D. 2 脚是基极"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 13
      }
    }
  },
  {
    "id": "Q014",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "将单相半波整流电容滤波电路、全波整流电容滤波电路和桥式整流电容滤波电路分别接 到相同的交流电源上,已知半波整流电路中二极管所承受的最大反向电压为 U,则全波整流 电路、桥式整流电路中二极管承受的最大反向电压分别为",
    "options": [
      "A. 2U U",
      "B. U 1/2 U",
      "C. 2U U",
      "D. 2U 2U"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 14
      }
    }
  },
  {
    "id": "Q015",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "由 NPN 三极管组成的分压式偏置共射放大电路中,由于原来三极管损坏更换了一只放大 系数更大(其他参数基本一致)三极管,则下列说法正确到是",
    "options": [
      "A. IBQ 变小",
      "B. 静态工作点 Q 沿直流负载线下移",
      "C. 静态工作点 Q 沿直流负载线上移",
      "D. ICQ 变大"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 15
      }
    }
  },
  {
    "id": "Q016",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "电路如图所示,设 A 为理想运算放大器,Dz 为理想稳压管,R1=2KΩ,R2=2KΩ, R3=2KΩ,稳压值为 Vz=5V,Vi=7V,则 VO 值为",
    "options": [
      "A. 7V",
      "B. 10V",
      "C. 5V",
      "D. 14V"
    ],
    "answer": null,
    "image": "./assets/source-images/1-bb70e0/img-006.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 16
      }
    }
  },
  {
    "id": "Q017",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "如图所示,在三极管的输出特性曲线中,静态工作点 Q3 所处的位置,对应的是",
    "options": [
      "A. 甲类功放",
      "B. 乙类功放",
      "C. 丙类功放",
      "D. 甲乙类功放"
    ],
    "answer": null,
    "image": "./assets/source-images/1-bb70e0/img-007.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 17
      }
    }
  },
  {
    "id": "Q018",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "在调试如图(a)所示放大电路时,出现图 (b)的输出波形,则应将 Rb ,才能使其不 失真",
    "options": [
      "A. 增大",
      "B. 减小",
      "C. 不变",
      "D. 无法确定 (a) (b) 3 / 10"
    ],
    "answer": null,
    "image": "./assets/source-images/1-bb70e0/img-008.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 18
      }
    }
  },
  {
    "id": "Q019",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "设计一个运放组成的信号放大电路,对传感器信号进行放大,而传感器输出的是电压信 号,并且内阻比较大能输出的电流比较小,那么我们应该选用哪种方式组成到运算放大电路",
    "options": [
      "A. 反相比例运算放大电路",
      "B. 同相比例运算放大电路",
      "C. 减法运算放大电路",
      "D. 加法运算放大电路"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 19
      }
    }
  },
  {
    "id": "Q020",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "在放大电路中,如果希望带负载能力强,同时对信号源的影响也要小,则需引入负反馈 的类型是",
    "options": [
      "A. 电压串联",
      "B. 电压并联",
      "C. 电流串联",
      "D. 电流并联 二.填空题(本大题共 10 小题,第 26、27 题每空格 1 分,其余每题 2 分,共 20 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 20
      }
    }
  },
  {
    "id": "Q021",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "如图所示,当控制变量 A 为 1 时,电路为 进制计数器",
    "options": [
      "A. 十二进制计数器",
      "B. 十进制计数器",
      "C. 九进制计数器",
      "D. 十三进制计数器"
    ],
    "answer": null,
    "image": "./assets/source-images/1-bb70e0/img-009.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 34
      }
    }
  },
  {
    "id": "Q022",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "在逻辑代数中,下列推断正确的是",
    "options": [
      "A. 如果 A+B=A+C,则 B=C",
      "B. 如果 AB=AC,则 B=C",
      "C. 如果 A+1=1,则 A=0",
      "D. 如果 A+A=1,则 A=1"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 35
      }
    }
  },
  {
    "id": "Q023",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "如图所示触发器电路中,设初态为 000, 在第 36 个 CP 脉冲作用后, Q2Q1Q0 的状态为",
    "options": [
      "A. 100",
      "B. 011",
      "C. 101",
      "D. 000"
    ],
    "answer": null,
    "image": "./assets/source-images/1-bb70e0/img-010.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 36
      }
    }
  },
  {
    "id": "Q024",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "用八位二进制能表示的最大的十进制数是",
    "options": [
      "A. 99",
      "B. 254",
      "C. 256",
      "D. 255 6 / 10"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 37
      }
    }
  },
  {
    "id": "Q025",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "七段显示译码器,当译码器 7 个输出端状态为 abcdefg=1101101 时(高电平有效), 译码器输人状态(8421BCD)码应为",
    "options": [
      "A. 0010",
      "B. 0011",
      "C. 0100",
      "D. 0110 五.填空题(本大题共 8 小题,每空格 3 分,共 24 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q026",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "家用洗衣机中使用的电动机是",
    "options": [
      "A. 三相异步电动机",
      "B. 单相异步电动机",
      "C. 直流电动机",
      "D. 同步电动机"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 33
      }
    }
  },
  {
    "id": "Q027",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "为防止漏电,线路的对地电阻不应小于",
    "options": [
      "A. 0.5 MΩ",
      "B. 1 MΩ",
      "C. 1.5 MΩ",
      "D. 2 MΩ"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 34
      }
    }
  },
  {
    "id": "Q028",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "电流互感器运行时,接近",
    "options": [
      "A. 空载状态,二次绕组不准开路",
      "B. 空载状态,二次绕组不准短路",
      "C. 短路状态,二次绕组不准开路",
      "D. 短路状态,二次绕组不准短路"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 35
      }
    }
  },
  {
    "id": "Q029",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "三相笼型异步电动机的制动方式有机械制动和 两类",
    "options": [
      "A. 反接制动",
      "B. 能耗制动",
      "C. 电力制动",
      "D. 电磁抱闸制动"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 36
      }
    }
  },
  {
    "id": "Q030",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "如图所示三相交流电路中,各相负载的电阻相等,电 压表读数为 220V,当负载 R3 因故短路时,电压表的读数 是",
    "options": [
      "A. 380V",
      "B. 220V",
      "C. 190V",
      "D. 0V"
    ],
    "answer": null,
    "image": "./assets/source-images/1-bb70e0/img-011.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 37
      }
    }
  },
  {
    "id": "Q031",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "一般的速度继电器,当转轴的速度低于 r/min 时触点自动复位",
    "options": [
      "A. 0",
      "B. 80",
      "C. 120",
      "D. 100"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 38
      }
    }
  },
  {
    "id": "Q032",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "设三相异步电动机 I N  10A ,Δ形连接,用热继电器做过载及缺相保护,热继电器型 号可选",
    "options": [
      "A. JR36-20/3D",
      "B. JR36-20/3",
      "C. JR36-40/3D",
      "D. JR36-40/3"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q033",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "容量较小的交流接触器采用的灭弧方式是",
    "options": [
      "A. 栅片灭弧装置",
      "B. 纵缝灭弧装置",
      "C. 双断口结构的电动力灭弧装置",
      "D. 以上灭弧装置均可"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q034",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "下列低压电器中是低压配电电器的是",
    "options": [
      "A. 按钮",
      "B. 熔断器",
      "C. 交流接触器",
      "D. 时间继电器"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 41
      }
    }
  },
  {
    "id": "Q035",
    "chapter": "1.宁波市电子电工专业理论模…",
    "type": "single-choice",
    "stem": "M7130 平面磨床中,退磁电流的大小可通过 进行调节",
    "options": [
      "A. R1",
      "B. R2",
      "C. R3",
      "D. 以上都不对 8 / 10 五.填空题(本大题共 5 小题,每小题 3 分,共 15 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "1.宁波市电子电工专业理论模拟考（试题卷）.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q036",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "答题时,请按照答题纸上“注意事项”的要 求,在 答 题 纸 相 应 的 位 置 上 规 范 作 答,在 本 试",
    "options": [
      "A. I1R1 -I3R2 -I4R3 =E1 +E2",
      "B. I1R1 -I2R2 -I3R3 =E1 +E2 题卷上的作答一律无效",
      "C. I1R1 +I3R2 +I4R3 =E1 +E2",
      "D. I1R1 -I3R2 -I4R3 =-E1 -E2"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 2
      }
    }
  },
  {
    "id": "Q037",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "如图所示, 当开关 S 闭合时, 电源供电电流 I ab 两端的电压 Uab变化情况,正确的是 和 第一部分 基础理论(必做题,满分 90 分)",
    "options": [
      "A. I 增大, Uab减小",
      "B. I 减小, Uab增大",
      "C. I 增大, Uab增大",
      "D. I 减小, Uab减小 一、单项选择题(本大题共 20 小题,每小题 2 分,共 40 分) 在每小题列出 的 四 个 备 选 答 案 中,只 有 一 个 是 符 合 题 目 要 求 的。 错 涂、多 涂 或 未 涂 均 无分"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-6e43ef/img-000.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 7
      }
    }
  },
  {
    "id": "Q038",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "有一个额定值为10Ω、 2 W 的电阻连接到电压1. 5V 的直流电源上,则实际流过电阻的电流 I 和电阻的电功率 P ,下面正确的是",
    "options": [
      "A. 15A, I=0. P <2 W",
      "B. 15A, I=0. P >2 W",
      "C. 2 A, I=0. P =2 W",
      "D. 15A, I=0. P =2 W"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 1
      }
    }
  },
  {
    "id": "Q039",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "三个阻值均为 R 的电阻串联或并联后,接在相 同 电 压 U 的 电 源 上,假 设 串 联 后 电 阻 总 功 率 为 P 串 ,并联后电阻总功率为 P 并 ,则不同连接方式时,电阻的总功率之比 P 串/P 并 为",
    "options": [
      "A. 9∶1",
      "B. 3∶1 10.如图所示,是 RLC 负载电路的电压与电流波形,则对该负载电路描述正确的是",
      "C. 1∶9",
      "D. 1∶3 A. 电路呈容性,电压相位超前电流相位"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 4
      }
    }
  },
  {
    "id": "Q040",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "可调式三端集成稳压器 CW337 的 1 脚是",
    "options": [
      "A. 输入端",
      "B. 输出端",
      "C. 调整端",
      "D. 直接接地端"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 18
      }
    }
  },
  {
    "id": "Q041",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "如图所示电路中,二极管的导通情况是",
    "options": [
      "A. VD1 导通, VD2 截止",
      "B. VD1 截止, VD2 导通 VD1 、",
      "C. VD2 都导通 VD1 、",
      "D. VD2 都截止"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-6e43ef/img-001.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 11
      }
    }
  },
  {
    "id": "Q042",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "单相交流电通过半波整流电路后输出的是",
    "options": [
      "A. 交流电",
      "B. 脉动直流电 19.在乙类互补对称 OCL 功率放大电路中,引起交越失真的原因是",
      "C. 稳恒直流电",
      "D. 平滑直流电 A. 输入信号过大 B.电源电压过高"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 12
      }
    }
  },
  {
    "id": "Q043",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "如图所示为三极管输出特性曲线,估算该三极管的交、直流电流放大系数分别为 C.功放管的基极静态电流为零 D.功放管的电流过大 100,",
    "options": [
      "A. 50 50,",
      "B. 100 20.如图所示电路,变压 器 次 级 交 流 电 压 为 15 V,则 电 容 C1 耐 压 及 三 端 集 成 稳 压 器 输 出 电 100,",
      "C. 100 50,",
      "D. 50 压是 16V, A. 12V 25V, B. 12V 16V,-12V C. 25V,-12V D. 二、填空题(本大题共 10 小题,每小题 2 分,共 20 分)"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-6e43ef/img-002.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 13
      }
    }
  },
  {
    "id": "Q044",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "检测电路中的三极管是否饱和,较为简单可靠的方法是测量",
    "options": [
      "A. 基极电流IB",
      "B. 集电极电流IC",
      "C. 基极与发射极的极间电压 UBE",
      "D. 集电极与发射极的极间电压 UCE"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 14
      }
    }
  },
  {
    "id": "Q045",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "如图所示,已知 Rb1 =80kΩ, Rb2 =40kΩ, Rc=Re =RL =2kΩ, UCC =12 V, UBEQ ≈0, β= 50,估算电路的静态工作点 UCEQ 为",
    "options": [
      "A. 8V",
      "B. 6V 23.减小 RLC 串联电路中电容值C ,其余参数不变,则电路的品质因数 Q (填“不变”",
      "C. 4V",
      "D. 2V “增大”或“减小”)"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-6e43ef/img-003.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 15
      }
    }
  },
  {
    "id": "Q046",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "已知电阻 R =10Ω,流过电阻电流i= 2s t+ ÷ A,则加在电阻两端电压的有效值 æç",
    "options": [
      "A. 变为 0",
      "B. 减小 in3 14 è 3ø",
      "C. 不变",
      "D. 增大 U= V"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 24
      }
    }
  },
  {
    "id": "Q047",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "如图所示电感器中,空心电感器是 42.如图所示的组合逻辑电路,为使输出端Y =1,则输入 A 、 B、C、 D 端有",
    "options": [
      "A. 4 种组合",
      "B. 3 种组合",
      "C. 2 种组合",
      "D. 1 种组合"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-6e43ef/img-004.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 35
      }
    }
  },
  {
    "id": "Q048",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "如图所示 74161 为同步四位二进制计数器,循环计数时输出端有 种状态",
    "options": [
      "A. 2个",
      "B. 4个 第 48 题表 74161 功能表",
      "C. 6个",
      "D. 8个 CP RD LD EP ET D3 D2 D1 D0 Q3Q2Q1Q0"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-6e43ef/img-005.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 48
      }
    }
  },
  {
    "id": "Q049",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "对 12 个信号进行二进制编码,至少需要几位二进制数才能满足要求 保持 × 1 1 × 0 × × × ×",
    "options": [
      "A. 2",
      "B. 3 ↑ 1 1 1 1 × × × × 计数",
      "C. 4",
      "D. 5 电子与电工类试题卷 第 7 页(共 14 页) 电子与电工类试题卷 第 8 页(共 14 页) 六、综合题(本大题共 1 题,共 15 分) B.电工基础、工厂电气控制设备(电工类考生做,满分 60 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q050",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "如图所示由两个 555 时基电路组成两级多谐振荡电路。请完成下列问题: 四、单项选择题(本大题共 10 小题,每小题 3 分,共 30 分) ( 1)填写表中的空格; 在每小题列出 的 四 个 备 选 答 案 中,只 有 一 个 是 符 合 题 目 要 求 的。 错 涂、多 涂 或 未 涂 均 ( 2)简单说明电路中连接 5 脚电容 C0 的作用; 无分。 ( 3)分别计算输出信号 uo1 、 uo2 的振荡周期 T1 、 T2 ; 34.在三相四线制中性点接地供电系统中,线电压指的是 ( 4)画出输出信号 uo1 和输出信号 uo2 的波形示意图",
    "options": [
      "A. 相线对地间的电压",
      "B. 零线对地间的电压",
      "C. 相线对零线间的电压",
      "D. 相线之间的电压"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-6e43ef/img-006.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 49
      }
    }
  },
  {
    "id": "Q051",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "星形连接的对称三相电源,则星形连接的三相负载不能正常 工作的是",
    "options": [
      "A. 对称负载,接中线",
      "B. 对称负载,不接中线",
      "C. 不对称负载,不接中线",
      "D. 不对称负载,接中线 1)所示对称三相负载电路,线电压 为 380V,各 表 读 数 均 为 8."
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 35
      }
    }
  },
  {
    "id": "Q052",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "66A 3 3 2 1 C. 15A D. 10A > UDD > UDD 0 导通 3 3 37.低压断路器中,热脱扣器承担的保护作用是 2 1",
    "options": [
      "A. 短路保护",
      "B. 过载保护 < UDD UDD 1 保持 3 3",
      "C. 欠压保护",
      "D. 失压保护"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 8
      }
    }
  },
  {
    "id": "Q053",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "交流接触器 E 形铁芯中柱端面留有 0. 1~0. 2 mm 的气隙是为了",
    "options": [
      "A. 减小剩磁影响",
      "B. 减小铁芯振动",
      "C. 减小噪声",
      "D. 散热"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 38
      }
    }
  },
  {
    "id": "Q054",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "如图所示为某三速电动机的两套定子绕组,低速运转时定子绕组出线端的连接方式为 48.如图所示小车自动往返示意图中,若 SQ1、 SQ2 位置装反,则可能出现的现象是 。 U2、",
    "options": [
      "A. V2、W2 分别接入三相电源, U1、 V1、W1、 YY” U3 并接在一起,连接方式为“ U2、",
      "B. V2、W2 分别接入三相电源, U3、W1 并接在一起,连接方式为“△ ” U4、",
      "C. V4、W4 分别接入三相电源,连接方式为“ Y” U1、",
      "D. V1、W1 分别接入三相电源, U3、W1 并接在一起,连接方式为“△ ”"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-6e43ef/img-007.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q055",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "定子绕组串接电阻降压起动之后,为使电动机在额定电压下正常运行,要将串接电阻",
    "options": [
      "A. 开路",
      "B. 短接",
      "C. 并接",
      "D. 串接"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 41
      }
    }
  },
  {
    "id": "Q056",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "当改变三相交流异步电动机定子绕组的电 源 相 序,定 子 绕 组 产 生 反 向 旋 转 磁 场,从 而 使 转 子受到与原旋转磁场方向相反的制动力矩而迅速停车的制动方式是 第 47、 48 题图",
    "options": [
      "A. 电容制动",
      "B. 能耗制动",
      "C. 反接制动",
      "D. 回馈制动"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-6e43ef/img-008.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q057",
    "chapter": "2019年浙江电子电工-正文",
    "type": "single-choice",
    "stem": "M7130 平面磨床砂轮电动机在加工运行过程中",
    "options": [
      "A. 需要调速",
      "B. 不需要调速",
      "C. 是否需要调速与电磁吸盘吸力有关",
      "D. 是否需要调速与液压泵起停有关 五、填空题(本大题共 5 小题,每小题 3 分,共 15 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江电子电工-正文.pdf",
        "sourceNo": 13
      }
    }
  },
  {
    "id": "Q058",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如图所示,由四节干电池组成的电路,闭合开关 S 后,电压表示数为 6V,电流表示数为 0,则 可能的故障原因是 断路",
    "options": [
      "A. L1 灯",
      "B. L2 灯",
      "C. 电流表",
      "D. 电压表"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-db0a32/img-000.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 2
      }
    }
  },
  {
    "id": "Q059",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "有两个电容器,它们的容量分别为 C1 =30μF,C2 =50μF,耐压都是 12V,若将它们串联后 接到 24V 的电源上,则",
    "options": [
      "A. 两个电容器都能正常工作",
      "B. 两个电容器都被击穿",
      "C. C1 击穿, C2 正常工作",
      "D. C2 击穿, C1 正常工作"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 5
      }
    }
  },
  {
    "id": "Q060",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "某电源的外特性曲线如图所示,则此电源的电动势 E 等于",
    "options": [
      "A. 10V",
      "B. 11V",
      "C. 12V",
      "D. 13V 传"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-db0a32/img-001.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 6
      }
    }
  },
  {
    "id": "Q061",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "在感抗 XL =100Ω 的纯电感两端,加正弦交流电压 u=220 2s in1 00π è 6ø 的瞬时电流为 。 æç 2πö æç πö",
    "options": [
      "A. i=2. 2 2s in1 t- ÷ A 00π",
      "B. i=220 2s in1 t- ÷ A 00π è 3ø è 6ø æç πö æç πö",
      "C. i=2. 2 2s in1 t- ÷ A 00π",
      "D. i=2. 2 2s in1 t+ ÷ A 00π è 6ø è 3ø"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 9
      }
    }
  },
  {
    "id": "Q062",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "在 RLC 串联电路中,当外加电源频 率 为 10kHz 时,电 路 发 生 谐 振,现 将 电 源 的 频 率 调 高 到 12kHz,电源电压有效值不变,则电路中的阻抗 Z 和电流I 将",
    "options": [
      "A. Z 变大, I 变小",
      "B. Z 变大, I 变大",
      "C. Z 变小, I 变大",
      "D. Z 变小, I 变小 电子电工类试卷 第 2 页(共 12 页)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 10
      }
    }
  },
  {
    "id": "Q063",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如图所示电路,已知输 入 电 压 Ui =15 V,稳 压 二 极 管 UZ = 6V,则流过稳压二极管的电流IZ 为",
    "options": [
      "A. 6 mA",
      "B. 20 mA",
      "C. 24 mA",
      "D. 30 mA"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-db0a32/img-002.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 12
      }
    }
  },
  {
    "id": "Q064",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "描述放大器对信号电压的放大能力,通常使用的性能指标是 D.无法判断",
    "options": [
      "A. 电流放大倍数",
      "B. 功率放大倍数",
      "C. 电流增益",
      "D. 电压放大倍数"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 16
      }
    }
  },
  {
    "id": "Q065",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "下列关于固定偏置式基本放大电路的说法,错误的是",
    "options": [
      "A. 输出电压与输入电压反相",
      "B. 采用共发射极连接方式",
      "C. 具有电压放大的作用",
      "D. 电压放大倍数略小于 1"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 17
      }
    }
  },
  {
    "id": "Q066",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "在分压式偏置放大电路中,除去射极电阻 RE 的旁路电容 CE ,将导致",
    "options": [
      "A. 电压放大倍数减小",
      "B. 静态工作点改变",
      "C. 电压放大倍数增大",
      "D. 输出电阻变化"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 18
      }
    }
  },
  {
    "id": "Q067",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "电压并联负反馈放大器可以",
    "options": [
      "A. 提高输入电阻和输出电阻",
      "B. 提高输入电阻、降低输出电阻",
      "C. 降低输入电阻和输出电阻",
      "D. 降低输入电阻、提高输出电阻 电子电工类试卷 第 3 页(共 12 页)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 19
      }
    }
  },
  {
    "id": "Q068",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如 图 所 示 功 率 放 大 器 在 正 常 工 作 时,已 知 电 源 电 压 为 12 V,则 其输出端中点电压为",
    "options": [
      "A. 0",
      "B. 6V",
      "C. 12V",
      "D. 24V 二、填空题(本大题共 10 小题,每小题 2 分,共 20 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 20
      }
    }
  },
  {
    "id": "Q069",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如图所示的贴片三极管,上方的单极为 极",
    "options": [
      "A. c",
      "B. b",
      "C. e",
      "D. 无法判断"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-db0a32/img-003.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 33
      }
    }
  },
  {
    "id": "Q070",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "符合如表所示真值表所表示的逻辑关系的是 门电路",
    "options": [
      "A. 与",
      "B. 或非",
      "C. 与非",
      "D. 与或非"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 37
      }
    }
  },
  {
    "id": "Q071",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "某电路输入 AB 和输出 F 波形如图所示,则该电路实现的功能是",
    "options": [
      "A. F =AB",
      "B. F =A +B",
      "C. F =A ☉B",
      "D. F =A ⊕ B 电子电工类试卷 第 6 页(共 12 页)"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-db0a32/img-004.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 38
      }
    }
  },
  {
    "id": "Q072",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如果一个寄存器的数码是“同时输入,同时输出”,则该寄存器是采用",
    "options": [
      "A. 串行输入,串行输出",
      "B. 串行输入,并行输出",
      "C. 并行输入,串行输出",
      "D. 并行输入,并行输出"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q073",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "欲 对 全 班 43 个 学 生 以 二 进 制 代 码 编 码 表 示 ,最 少 需 要 二 进 制 码 的 位 数 是",
    "options": [
      "A. 5",
      "B. 6",
      "C. 8",
      "D. 43"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q074",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如图所示为光电耦合器,输出端应该接在 之间",
    "options": [
      "A. 1与2",
      "B. 3 与 4",
      "C. 1 与 3",
      "D. 2 与 4 传 媒"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-db0a32/img-005.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 41
      }
    }
  },
  {
    "id": "Q075",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "集成芯片 555 构成的电路如图所示,电路实现的功能是",
    "options": [
      "A. 化",
      "B. 施密特触发器 。 多谐振荡器",
      "C. 单稳态触发器 文",
      "D. 定时器 博 五、填空题(本大题共 5 小题,每小题 3 分,共 15 分)"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-db0a32/img-006.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q076",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "电 路 如 图 所 示,三 相 交 流 电 源 电 压 为 380 V,各 相 负 载对称且均为 10Ω。S1 断 开、 S2 闭 合 和 S1 闭 合、 S2 断开时,电流表 A3 的示数分别为 。 38A,",
    "options": [
      "A. 38A 38A,",
      "B. 66A 57A,",
      "C. 38A 57A,",
      "D. 66A 电子电工类试卷 第 8 页(共 12 页)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 34
      }
    }
  },
  {
    "id": "Q077",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "下列关于中性线的说法,正确的是",
    "options": [
      "A. 只要三相负载作星形连接,必须有中线",
      "B. 当三相负载越接近对称时,中线电流越大",
      "C. 三相对称负载作星形连接时,中线可以去掉",
      "D. 一般来说,三相照明线路作星形连接时的中线可以去掉"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 35
      }
    }
  },
  {
    "id": "Q078",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "对于容量较大的交流接触器,多采用的灭弧装置是",
    "options": [
      "A. 磁吹式灭弧装置",
      "B. 栅片灭弧装置",
      "C. 纵缝灭弧装置",
      "D. 双断口结构电动力灭弧装置"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 36
      }
    }
  },
  {
    "id": "Q079",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "M7130 平面磨床电气控制线路中欠电流继电器主要为电磁吸盘提供 保护",
    "options": [
      "A. 短路",
      "B. 过载",
      "C. 欠压",
      "D. 弱磁"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 37
      }
    }
  },
  {
    "id": "Q080",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "具有制动要求迅速、能量损耗小、设备简单的特点的制动方法是",
    "options": [
      "A. 反接制动",
      "B. 能耗制动",
      "C. 电容制动",
      "D. 回馈制动 传"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 38
      }
    }
  },
  {
    "id": "Q081",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "当三相异步电动机采用Y -△ 降压启动时,启动时每相定子绕组的电流是全 压 运 行 时 电 流 的",
    "options": [
      "A. 2倍",
      "B. 3倍媒 1",
      "C. 倍 3 化 1",
      "D. 倍 3"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q082",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "C. 250kVA 东 X62W 万能铣床左右进给正常,但前后不能进给,其故障范围是 D. 315kVA",
    "options": [
      "A. 主电路正常,控制电路故障",
      "B. 主电路故障,控制电路正常",
      "C. 主电路、控制电路都有故障",
      "D. 主电路、控制电路以外的故障"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 41
      }
    }
  },
  {
    "id": "Q083",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "T68 镗床的主轴是",
    "options": [
      "A. 圆工作台的旋转运动",
      "B. 镗轴的旋转运动与平旋盘的旋转运动",
      "C. 镗轴的旋转运动和轴向进给",
      "D. 镗轴的轴向进给 五、填空题(本大题共 5 小题,每小题 3 分,共 15 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第三次联合考试 电子电工-试卷.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q084",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如图所示,当开关 S 闭合时, b 点的电位是",
    "options": [
      "A. 7V",
      "B. 5V",
      "C. -6V",
      "D. 6V 电子电工类试卷 第 1 页(共 12 页)"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-257c27/img-000.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 3
      }
    }
  },
  {
    "id": "Q085",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如图所示,已知 E =12V, r=1Ω, R1 =1Ω, R2 =R3 =4Ω,当开关 S 闭合时,电压表的读数为",
    "options": [
      "A. 12V",
      "B. 8V",
      "C. 6V",
      "D. 4V"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-257c27/img-001.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 4
      }
    }
  },
  {
    "id": "Q086",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如图所示,已知I1 =2A, I5 =5A,则I6 的大小为",
    "options": [
      "A. 7A",
      "B. -7A",
      "C. 3A",
      "D. -3A"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-257c27/img-002.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 5
      }
    }
  },
  {
    "id": "Q087",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "在 RLC 串联电路中,当电路两端的电压与电路中的电流同相时,下列关系式正确的是",
    "options": [
      "A. ωL C =1 2",
      "B. ω LC =1 2",
      "C. ωLC =1",
      "D. ω=LC"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 10
      }
    }
  },
  {
    "id": "Q088",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "稳压二极管是利用二极管的 特性制作而成的",
    "options": [
      "A. 正向导通",
      "B. 反向截止",
      "C. 反向击穿",
      "D. 以上都不是"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 11
      }
    }
  },
  {
    "id": "Q089",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "在如图 所 示 的 电 路 中, 情况下的输出 电压最大",
    "options": [
      "A. 正常",
      "B. 二极管 VD2 开路",
      "C. 电容 C 开路",
      "D. 负载 RL 开路"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-257c27/img-003.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 12
      }
    }
  },
  {
    "id": "Q090",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "测得某基本放大电路中三极管各极电位分别是 0V、-6V、-0. 2 V,则 该 三 极 管 的 三 个 电 极分别是 e,",
    "options": [
      "A. c, b c,",
      "B. b, e b,",
      "C. c, e e,",
      "D. b, c 电子电工类试卷 第 2 页(共 12 页)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 13
      }
    }
  },
  {
    "id": "Q091",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "为了提升放大器的带负载能力,一般引入 负反馈",
    "options": [
      "A. 电流",
      "B. 电压",
      "C. 串联",
      "D. 并联"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 15
      }
    }
  },
  {
    "id": "Q092",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "在如图所示的放大电路中,下列说法不正确的是",
    "options": [
      "A. 有电流放大作用,没有电压放大作用",
      "B. 输入电阻大,输出电阻大",
      "C. 这是一种共集电极接法的放大器",
      "D. 引入了电压串联负反馈 传"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-257c27/img-004.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 16
      }
    }
  },
  {
    "id": "Q093",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "某三端集成稳压器的型号为 CW7912,则其输出电压为",
    "options": [
      "A. 12V",
      "B. -12V",
      "C. 9V",
      "D. 5V 东 二、填空题(本大题共 10 小题,每小题 2 分,共 20 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 20
      }
    }
  },
  {
    "id": "Q094",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "为了提高三极管的热稳定性,应重点考虑三极管参数中的",
    "options": [
      "A. 交流电流放大倍数β",
      "B. 集电极最大允许电流ICM",
      "C. 集—射极反向击穿电压 UBR(CEO)",
      "D. 穿透电流ICEO"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 33
      }
    }
  },
  {
    "id": "Q095",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "十进制数 31 转换为 8421BCD 码为",
    "options": [
      "A. 100000",
      "B. 11111",
      "C. 00110001",
      "D. 11001000"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 37
      }
    }
  },
  {
    "id": "Q096",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "在下图的逻辑电路中,能实现的逻辑功能是",
    "options": [
      "A. 与非",
      "B. 或非",
      "C. 同或",
      "D. 异或 电子电工类试卷 第 6 页(共 12 页)"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-257c27/img-005.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 38
      }
    }
  },
  {
    "id": "Q097",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "译码、显示(共阳极数码管)电路如图所 示,当 Q0Q1Q2 =101时,应 显 示 数 字 5,此 时 译 码 器 的输出 abcde fg为",
    "options": [
      "A. 1011011",
      "B. 0100100",
      "C. 0000000",
      "D. 1111111"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-257c27/img-006.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q098",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如图所示电路具有的功能是",
    "options": [
      "A. 置0",
      "B. 置1 传",
      "C. 保持",
      "D. 计数 媒 化 文 博 东"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-257c27/img-007.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 41
      }
    }
  },
  {
    "id": "Q099",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "关于如图所示电路的名称和功能,下列说法正确的是",
    "options": [
      "A. 自激多谐振荡器,用于产生多谐波",
      "B. 施密特触发器,用于脉冲整形",
      "C. 单稳态电路,用于定时、延时",
      "D. 计数器,用于统计脉冲个数 五、填空题(本大题共 5 小题,每小题 3 分,共 15 分)"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-257c27/img-008.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q100",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "某电动机的铭牌如图所示,下列说法不正确的是",
    "options": [
      "A. 这是一台三相笼型异步电动机",
      "B. 该电动机的磁极数是 2",
      "C. 额定状态下,该电动机输出的机械功率是 4. 5kW",
      "D. 该电动机的机座长度为中机座 传"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-257c27/img-009.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 33
      }
    }
  },
  {
    "id": "Q101",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如果交流接触器衔铁吸合不紧,工作气隙较大,将导致",
    "options": [
      "A. 铁心涡流增大",
      "B. 线圈电感增大",
      "C. 线圈电流增大",
      "D. 铁心涡流减小"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 36
      }
    }
  },
  {
    "id": "Q102",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "欲使接触器 KM1 吸合后,接触器 KM2 才能吸合,则需要",
    "options": [
      "A. 在 KM1 的线圈回路中串入 KM2 的动合触点",
      "B. 在 KM1 的线圈回路中串入 KM2 的动断触点",
      "C. 在 KM2 的线圈回路中串入 KM1 的动合触点",
      "D. 在 KM2 的线圈回路中串入 KM1 的动断触点 电子电工类试卷 第 9 页(共 12 页)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 38
      }
    }
  },
  {
    "id": "Q103",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如图所示的主电路,应是 控制电路的主电路",
    "options": [
      "A. 反接制动",
      "B. 定子绕组串电阻降压启动",
      "C. Y-△ 降压启动",
      "D. 转子绕组串电阻启动 传"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-257c27/img-010.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q104",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "能耗制动是指当电动机切断交流电源后,立即在",
    "options": [
      "A. 转子绕组 直流电 媒",
      "B. 定子绕组 的任意两相中接入 交流电 ( 。 )",
      "C. 转子绕组 交流电 化",
      "D. 定子绕组"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q105",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "东 V1,W1 并接在一起, U2, V2,W2 接三相电源 CA6140 型卧式车床电气控制线路图中,控制电路和照明电路的电压分别为 24V,",
    "options": [
      "A. 6V 6V,",
      "B. 24V 110V,",
      "C. 24V 6V,",
      "D. 110V 五、填空题(本大题共 5 小题,每小题 3 分,共 15 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q106",
    "chapter": "2019年浙江省高职考试研究…",
    "type": "single-choice",
    "stem": "如图所示是 M7130 型平面磨床电气控制线路原理图,根据电路回答下列问题: 传 媒 ( 1)根据型号 M7130 可知,该平面磨床工作台面宽为 化 。 ( 2)M7130 型平面磨床电气控制线路中有 ( 文 3)在 M7130 型平面磨床的电气控制线路原理图中, YH 是 个接触器。 。 ( 博 4)M7130 型 平 面 磨 床 中,要 求 砂 轮 电 动 机 M1 与 冷 却 泵 电 动 机 M2 之 间 能 够 实 现 控制。 ( 东 5)M7130 型平面磨床控制线路中,两个热继电器动断触点的连接方法是 ( 6)M7130 型平面磨床中,砂轮电动机和液压泵电动机都采用了 控制电路。 。 ( 7)M7130 型平面磨床中,控制电路的供电电压是 。 ( 8)M7130 型平面磨床中,照明电路由 作短路保护。 ( 9)M7130 型平面磨床电气控制线路中,电阻 R1 和电容 C 串联后组成阻容吸收电路,用以 吸收电磁吸盘交流侧过电压和直流侧通断时产生的浪涌电压,对整流器进行 。 ( 10)M7130 型平面磨床中,经过 整流器 VC 后 输 出 110 V 的 直 流 电 压,作 为 电 磁 吸盘的直流电源。 ( 11)M7130 型平面磨床中, 可以调节退磁 电 流 的 大 小,这 样 既 能 充 分 退 磁 又 不 至 于反向充磁。 ( 12)若桥式整流器 VC 空载时 输 出 电 压 正 常,带 负 载 时 输 出 电 压 远 远 低 于 110 V,则 表 明 已局部短路。 ( 13)M7130 型平面磨床中,电磁 吸 盘 退 磁 不 好 使 工 件 取 下 困 难,但 退 磁 电 路 正 常,退 磁 电 电子电工类试卷 第11页(共 12 页) 压也正常,则需要检查和调整",
    "options": [
      "A. 退磁时间",
      "B. 退磁频率",
      "C. 退磁电流",
      "D. 退磁功率 ( 14)M7130 型平面磨床中,若砂 轮 电 动 机 的 热 继 电 器 经 常 动 作,但 轴 承 正 常,砂 轮 进 给 量 正常,则需要检查和调整 。 A. 照明变压器 B.整流变压器 C.热继电器 D.液压泵电动机 ( 15)M7130 型平面磨床的三台电动机都不能启动的原因之一是 。 A. 接触器 KM2 损坏 B.接插器 X1 损坏 C.接触器 KM1 损坏 D.欠电流继电器 KA 的触点接触不良 传 媒 化 文 博 东 电子电工类试卷 第12页(共 12 页)"
    ],
    "answer": null,
    "image": "./assets/source-images/2019-257c27/img-011.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2019年浙江省高职考试研究联合体第二次联合考试 电子电工-试卷.pdf",
        "sourceNo": 48
      }
    }
  },
  {
    "id": "Q107",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "电流的方向规定是(▲)",
    "options": [
      "A. 正电荷定向移动方向",
      "B. 负电荷定向移动方向",
      "C. 电荷定向移动的方向",
      "D. 以上都不对"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 1
      }
    }
  },
  {
    "id": "Q108",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "如图所示,当可调电阻 R 的触点上移时,电流表和电压表的读数将 A (▲)",
    "options": [
      "A. 电流表读数将增大,电压表读数将增大 V R",
      "B. 电流表读数将减小,电压表读数将增大",
      "C. 电流表读数将增大,电压表读数将减小 第2题",
      "D. 电流表读数将减小,电压表读数将减小"
    ],
    "answer": null,
    "image": "./assets/source-images/2020-1-b282c5/img-000.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 2
      }
    }
  },
  {
    "id": "Q109",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "有一个直流电源,测得开路电压为 100V,短路电流为 10A,当外接 10Ω的负载时,负载电流为(▲)",
    "options": [
      "A. 5A",
      "B. 10A",
      "C. 20A",
      "D. 215A"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 3
      }
    }
  },
  {
    "id": "Q110",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "为扩大电压表的量程,下列说法正确的是(▲)",
    "options": [
      "A. 可通过并联电阻分流的方法",
      "B. 可通过串联电阻分流的方法",
      "C. 可通过并联电阻分压的方法",
      "D. 可通过串联电阻分压的方法"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 4
      }
    }
  },
  {
    "id": "Q111",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "如图,A 点电位 VA=E-IR 对应的电路是(▲)。 E R E R",
    "options": [
      "A. A",
      "B. A I I E R E R",
      "C. A",
      "D. A I I"
    ],
    "answer": null,
    "image": "./assets/source-images/2020-1-b282c5/img-001.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 5
      }
    }
  },
  {
    "id": "Q112",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "R 1 、R 2 为两个并联电阻,已知R 1 =2 R 2 ,两个电阻消耗的总功率为 9W,则R 1 上 消 耗 的 功 率 为 (▲)",
    "options": [
      "A. 1W",
      "B. .2W",
      "C. 3W",
      "D. 4W"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 6
      }
    }
  },
  {
    "id": "Q113",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "如图所示电路中,已知 E=12V,R 1 =1Ω,R 2 =2Ω,R 3 =5Ω,C 是电容器,则 R 3 两端电压是(▲)",
    "options": [
      "A. 0V",
      "B. 4V",
      "C. 8V",
      "D. 12V"
    ],
    "answer": null,
    "image": "./assets/source-images/2020-1-b282c5/img-002.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 7
      }
    }
  },
  {
    "id": "Q114",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "某正弦交流电压 u=10 2 sin(100πt+50°)V,其表述正确的是(▲)",
    "options": [
      "A. Um=10V,f=50Hz,Φ= 50°",
      "B. Um=10 2 V,f=100Hz,Φ= 50°",
      "C. Um=10V,f=50Hz,Φ= -50°",
      "D. Um=10 2 V,f=50Hz,Φ= 50°"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 8
      }
    }
  },
  {
    "id": "Q115",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "在 RL 串联电路中,不正确的功率因数表达式是(▲)。 R UR UL P",
    "options": [
      "A. cos  ",
      "B. cos  ",
      "C. cos  ",
      "D. cos   Z U U S"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 9
      }
    }
  },
  {
    "id": "Q116",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "如图所示电路中,交流电流表的读数分别是 A1 为 10A,A2 为 10A,A3 为 10A,则 A 的读数为(▲)",
    "options": [
      "A. 10A",
      "B. 20A",
      "C. 30A",
      "D. 10 2 A R R2 11 R3 E 2 C"
    ],
    "answer": null,
    "image": "./assets/source-images/2020-1-b282c5/img-003.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 10
      }
    }
  },
  {
    "id": "Q117",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "当万用表不同欧姆档去测量二极管正向电阻时,获得的结果差异较大,这是因为 (▲)",
    "options": [
      "A. 该管已坏",
      "B. 万用表各电阻档有差异",
      "C. 二极管的电阻可变",
      "D. 二极管的伏安特性是非线性"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 11
      }
    }
  },
  {
    "id": "Q118",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "为了稳定放大电路的输出电流并提高输入电阻,应采用(▲)",
    "options": [
      "A. 电压串联负反馈",
      "B. 电流并联负反馈",
      "C. 电流串联负反馈",
      "D. 电压并联负反馈"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 13
      }
    }
  },
  {
    "id": "Q119",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "用万用表测得 NPN 型晶体三极管各极对地的电位是 UB=3.7V,UC=3.3V,UE=3.0V,则该晶体三极管 的工作状态和材料分别是(▲)",
    "options": [
      "A. 放大 、硅管",
      "B. 截止、锗管",
      "C. 饱和、硅管",
      "D. 饱和、 锗管"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 14
      }
    }
  },
  {
    "id": "Q120",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "下列三极管接法中,有电流放大、没有电压放大的电路是(▲)",
    "options": [
      "A. 共射极",
      "B. 共集电极",
      "C. 共基极",
      "D. 都没有"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 15
      }
    }
  },
  {
    "id": "Q121",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "NPN 型固定偏置放大电路放大正弦交流信号时,其输出信号为负半周平顶,则应调节基极电阻使其 (▲),避免输出波形失真",
    "options": [
      "A. 增大",
      "B. 减小",
      "C. 不变",
      "D. 无法确定"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 16
      }
    }
  },
  {
    "id": "Q122",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "如图所示电路中,已知输入电压为 12V,硅稳压管 VZ 的稳压值为 6V,RL=300Ω,R=200Ω,则电路 输出电压为(▲)",
    "options": [
      "A. 6V",
      "B. 12V",
      "C. 4.8V",
      "D. 7.2V"
    ],
    "answer": null,
    "image": "./assets/source-images/2020-1-b282c5/img-004.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 17
      }
    }
  },
  {
    "id": "Q123",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "如图所示电路的名称为(▲)",
    "options": [
      "A. 甲类 OCL 功率放大电路",
      "B. 乙类 OTL 功率放大电路",
      "C. 甲乙类 OCL 功率放大电路",
      "D. 甲乙类 OTL 功率放大电路"
    ],
    "answer": null,
    "image": "./assets/source-images/2020-1-b282c5/img-005.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 18
      }
    }
  },
  {
    "id": "Q124",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "串联型可调式稳压电源的调整管工作状态是 (▲)",
    "options": [
      "A. 放大",
      "B. 开关",
      "C. 截止",
      "D. 饱和"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 19
      }
    }
  },
  {
    "id": "Q125",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "在直流稳压电源电路中,要求输出电压为-12V,集成稳压器应合理选用(▲)",
    "options": [
      "A. CW7812",
      "B. CW7912",
      "C. LM337",
      "D. LM317 二、填空题(本大题共 10 小题,每小题 2 分,共 20 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 20
      }
    }
  },
  {
    "id": "Q126",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "三极管 8050 的材料和类型分别是(▲)",
    "options": [
      "A. 硅材料、NPN 型",
      "B. 锗材料、PNP 型",
      "C. 硅材料、PNP 型",
      "D. 锗材料、NPN 型"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 36
      }
    }
  },
  {
    "id": "Q127",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "下列四个逻辑函数表达式中,表示同或门的是(▲)。  ",
    "options": [
      "A. Y  A  B",
      "B. Y  AB  A B",
      "C. Y  A  B",
      "D. Y  AB  AB"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 37
      }
    }
  },
  {
    "id": "Q128",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "如图所示电路,若开关闭合为 1,断开为 0;灯亮为 1,,灯灭为 0。则 Y 的表达式是(▲)",
    "options": [
      "A. Y=A·B·C",
      "B. Y=(A+B)·C",
      "C. Y=(A+B)·C",
      "D. Y=(A·B)· C"
    ],
    "answer": null,
    "image": "./assets/source-images/2020-1-b282c5/img-006.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 38
      }
    }
  },
  {
    "id": "Q129",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "在下列逻辑电路中,无记忆功能的逻辑电路是(▲)",
    "options": [
      "A. 计数器",
      "B. 编码器",
      "C. 触发器",
      "D. 寄存器"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q130",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "化简逻辑表达式 F =A B +B+BCD 的最简结果是(▲)",
    "options": [
      "A. F  A B  B",
      "B. F  A B",
      "C. F=A+B",
      "D. F  B"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q131",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "环形振荡器的振荡周期的计算公式是(▲)",
    "options": [
      "A. T=0.7RC",
      "B. T=1.1RC",
      "C. T=1.4RC",
      "D. T=2.2RC"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 41
      }
    }
  },
  {
    "id": "Q132",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "要求 JK 触发器工作在计数状态时,则输入信号应为(▲)",
    "options": [
      "A. J=K=1",
      "B. J=0,K=1",
      "C. J=1,K=0",
      "D. J=K=0"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q133",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "下列四种电路中,具有二两稳定状态的电路是(▲)",
    "options": [
      "A. 施密特触发器",
      "B. 多谐振荡器",
      "C. 单稳态触发器",
      "D. 环形振荡器 五、填空题(本大题共 5 小题,每小题 3 分,共 15 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 43
      }
    }
  },
  {
    "id": "Q134",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "电源变压器的一次绕组与二次绕组的匝数比为 11:1,电源变压器的一次绕组接在 220V 的交流电源 上,则二次绕组的输出电压为( ▲ )",
    "options": [
      "A. 交流 20V",
      "B. 直流 20V",
      "C. 交流 220V",
      "D. 直流 220V 0 0"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 35
      }
    }
  },
  {
    "id": "Q135",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "已知 i1=3 2 sin(314t-30 )A,i2=4 2 sin(314t+60 )A,则 i=i1+i2 是( ▲ )。 0 0",
    "options": [
      "A. i=3 2 sin(314t+23.1 )A",
      "B. i=4 2 sin(314t+23.1 )A 0 0",
      "C. i=5 2 sin(314t+23.1 )A",
      "D. i=7 2 sin(314t+23.1 )A"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 36
      }
    }
  },
  {
    "id": "Q136",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "保护晶闸管,可选用的熔断器是( ▲ )",
    "options": [
      "A. RLS1",
      "B. RC1A",
      "C. RT0",
      "D. RL1"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 37
      }
    }
  },
  {
    "id": "Q137",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "低压断路器中的电磁脱扣器作用是( ▲ )",
    "options": [
      "A. 欠电压保护",
      "B. 短路保护",
      "C. 过载保护",
      "D. 断相保护"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 38
      }
    }
  },
  {
    "id": "Q138",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "电气互锁的作用是( ▲ )",
    "options": [
      "A. 加快控制电路动作的速度",
      "B. 维持电动机长动",
      "C. 防止两只接触器同时得电动作",
      "D. 防止电动机出现点动"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q139",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "在接触器联锁正反转控制电路中,要使电动机从正转变为反转,正确的方法是( ▲ )",
    "options": [
      "A. 直接按下反转起动按钮",
      "B. 直接按下正转起动按钮",
      "C. 心须先按下停止按钮,再按下反转起动按钮",
      "D. 以上三种方法都可以"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q140",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "双速电动机处于低速时,其绕组的联接方式是( ▲ )",
    "options": [
      "A. Y",
      "B. △",
      "C. YY",
      "D. △△"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 41
      }
    }
  },
  {
    "id": "Q141",
    "chapter": "2020.1电子电工类专业基…",
    "type": "single-choice",
    "stem": "T68 型卧式镗床的主轴电动机是( ▲ )",
    "options": [
      "A. 三相笼型异步电动机",
      "B. 定子绕组接成△/Y",
      "C. 绕线转子异步电动机",
      "D. 双速笼型异步电动机"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2020.1电子电工类专业基础理论.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q142",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "电能的单位是 .",
    "options": [
      "A. 瓦特",
      "B. 伏特",
      "C. 度",
      "D. 安培"
    ],
    "answer": "C",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 1
      }
    }
  },
  {
    "id": "Q143",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "如图所示的电路中,已知 R1 =R2 =2Ω, R3 =R4 =R5 =10Ω, 假设 Uab=12V,则电阻 R3 消耗的功率为 .",
    "options": [
      "A. 4W",
      "B. 6W",
      "C. 8W",
      "D. 10 W"
    ],
    "answer": "D",
    "image": "./assets/source-images/2026-5f9779/img-000.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 2
      }
    }
  },
  {
    "id": "Q144",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "已知交流电压u=10s in( 314 °)V,交流电流i=5s t+60 in( 628 °)A,则u 与i 的相位 t+30 关系是 .",
    "options": [
      "A. u 滞后i30 °",
      "B. u 超前i30 °",
      "C. u 滞后i90 °",
      "D. 无法比较"
    ],
    "answer": "D",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 4
      }
    }
  },
  {
    "id": "Q145",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "某 RLC 串联 电 路 中,所 接 电 源 电 压 为 u =20s in( 314 °)V,已 知 R =40 Ω, t+30 XL = 30Ω, X C =60Ω,则通过它的瞬时电流为 .",
    "options": [
      "A. i=0. 4s in( 314 °)A t-7",
      "B. i=0. 4s in( 314 °)A t+67",
      "C. i=0. 4s in( 314 °)A t-23",
      "D. i=0. 4s in( 314 °)A t-83"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 5
      }
    }
  },
  {
    "id": "Q146",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "有两个电容器,已知 C1 的额定值为30μF/120V, C2 的额定值为60μF/120V,若将它们 串联起来,则允许加的最大电压是 .",
    "options": [
      "A. 60V",
      "B. 120V",
      "C. 180V",
      "D. 240V"
    ],
    "answer": "C",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 6
      }
    }
  },
  {
    "id": "Q147",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "关于三极管的基本结构,下列说法正确的是 .",
    "options": [
      "A. 三极管的发射结和集电结面积相同,因此两个结可以互换使用",
      "B. 基区的厚度很薄且掺杂浓度低,这有利于实现电流的放大作用",
      "C. 三极管的集电区掺杂浓度最高,以便有效收集从发射区注入的载流子",
      "D. PNP 型和 NPN 型三极管半导体类型不同,内部三个区域的掺杂浓度也是不相同的"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 9
      }
    }
  },
  {
    "id": "Q148",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "某 NPN 硅三极管在电路中的实测电位为: 5 V, VB=2. 8 V, VE =1. VC =8V.据 此 可 判 断该三极管工作在输出特性曲线的 .",
    "options": [
      "A. 截止区",
      "B. 饱和区",
      "C. 放大区",
      "D. 击穿区"
    ],
    "answer": "C",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 10
      }
    }
  },
  {
    "id": "Q149",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "在单相桥式整流电路中接入电容滤波后,下列说法正确的是 .",
    "options": [
      "A. 输出电压的纹波增大,但输出电压的平均值降低",
      "B. 滤波电容应与负载串联,其容量越大滤波效果越好",
      "C. 滤波电路的主要作用是抑制输入电压中的高频噪声",
      "D. 接入滤波电容后,整流二极管的导通时间会缩短"
    ],
    "answer": "D",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 11
      }
    }
  },
  {
    "id": "Q150",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "在固定偏置放大电路中,基极电阻 Rb 的主要作用是 .",
    "options": [
      "A. 提供基极电流,确定静态工作点",
      "B. 引入交流负反馈",
      "C. 稳定集电极电流",
      "D. 实现电压放大"
    ],
    "answer": "A",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 12
      }
    }
  },
  {
    "id": "Q151",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "在分压式偏置放大电路实验中,用示波器观察到输出电压波形出 现 了 底 部 削 平 的 失 真. 其中 RB1 、 RB2 分 别 为 基 极 上 偏 置 电 阻 和 下 偏 置 电 阻, RC 为 集 电 极 电 阻,为 消 除 这 种 失 真,应 .",
    "options": [
      "A. 调小 RB1",
      "B. 调大 RB1",
      "C. 调小 RC",
      "D. 调大 RB2"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 13
      }
    }
  },
  {
    "id": "Q152",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "如图所示的放大电路中,电容 CE 出现断路,则 该 电 路 所 引 入 反 馈 的 类 型 及 其 对 电 路 输 入电阻的影响是 .",
    "options": [
      "A. 电压并联负反馈,使输入电阻减小",
      "B. 电流串联负反馈,使输入电阻增大",
      "C. 电压串联负反馈,使输入电阻增大",
      "D. 电流并联负反馈,使输入电阻减小"
    ],
    "answer": "B",
    "image": "./assets/source-images/2026-5f9779/img-001.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 14
      }
    }
  },
  {
    "id": "Q153",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "关于三极管 3DD15A,下列说法正确的是 .",
    "options": [
      "A. 硅材料、 NPN 型,低频大功率",
      "B. 硅材料、 PNP 型,低频小功率",
      "C. 锗材料、 PNP 型,高频小功率",
      "D. 锗材料、 NPN 型,高频大功率"
    ],
    "answer": "A",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q154",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "关于普通晶闸管( .",
    "options": [
      "A. 阳极与阴极间加正向电压",
      "B. 门极与阴极间加反向电压",
      "C. 阳极电流大于维持电流",
      "D. 门极触发电流需达到阈值 4)"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 41
      }
    }
  },
  {
    "id": "Q155",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "将十进制数( 8 转化为余 3 码是 .",
    "options": [
      "A. 10010110. 0111",
      "B. 01100111. 0111",
      "C. 10000100. 1000",
      "D. 01010001. 1000"
    ],
    "answer": "C",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q156",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "已知二变量逻辑门电路的输入 A、 B 和输出Y 的波形如图所示, 则其逻辑关系为 .",
    "options": [
      "A. 或非",
      "B. 与非",
      "C. 同或",
      "D. 异或"
    ],
    "answer": "D",
    "image": "./assets/source-images/2026-5f9779/img-002.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 43
      }
    }
  },
  {
    "id": "Q157",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "根 据 74LS138 集 成 组 成 的 组 合 逻 辑 电 路 如 图 所 示 ,最 简 的 逻 辑 表 达 式 是 .",
    "options": [
      "A. Y =AC +AB",
      "B. Y =AC +AB",
      "C. Y =AC +AB",
      "D. Y =AC +AB"
    ],
    "answer": "D",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 44
      }
    }
  },
  {
    "id": "Q158",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "如图所示,当 A =1, B =0 时,该触发器具有的功能为 .",
    "options": [
      "A. 置 0",
      "B. 置 1",
      "C. 计数",
      "D. 保持"
    ],
    "answer": "C",
    "image": "./assets/source-images/2026-5f9779/img-003.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 45
      }
    }
  },
  {
    "id": "Q159",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "一个四位左移移位寄存器,在移位脉冲的作用下,从输入端按高位到低位的顺序分别送入 数码 11101011,则第 6 个移位脉冲到来后,移位寄存器内的数码为 .",
    "options": [
      "A. 1010",
      "B. 1110",
      "C. 1101",
      "D. 0110"
    ],
    "answer": "A",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 46
      }
    }
  },
  {
    "id": "Q160",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "若十六进制加法型计数器经过 87 个时钟 脉 冲 后,计 数 器 的 状 态 为 0011,则 该 计 数 器 的 初态为 .",
    "options": [
      "A. 1010",
      "B. 1100",
      "C. 1101",
      "D. 0110 555 时基电路,当 R =2kΩ,C0 =0."
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 47
      }
    }
  },
  {
    "id": "Q161",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "如图所示为某三相异步电动机的铭牌,下列说法正确的是 .",
    "options": [
      "A. 磁极对数为 6 对",
      "B. 工作方式为连续工作,不允许多次断续重复使用",
      "C. 允许绝缘等级为 B 级,耐热温度 120 °C",
      "D. 电动机的额定功率为 4kW,为输入功率"
    ],
    "answer": "A",
    "image": "./assets/source-images/2026-5f9779/img-004.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q162",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "如图 所 示,金 属 导 轨 AB、 CD 被 固 定,金 属 棒 EF、 GH 放 置 横 向 导 轨 上 方,接 触 良 好 无 摩 擦,若 将 条 形 磁 铁 的 N 极 垂 直 于 水 平 面 插 入 框 内,则 金属棒 EF、 GH 将 .",
    "options": [
      "A. 金属棒 EF 向上运行,金属棒 GH 向上运行",
      "B. 金属棒 EF 向上运行,金属棒 GH 向下运行",
      "C. 金属棒 EF 向下运行,金属棒 GH 向上运行",
      "D. 金属棒 EF 向下运行,金属棒 GH 向下运行"
    ],
    "answer": "C",
    "image": "./assets/source-images/2026-5f9779/img-005.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q163",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "已知 PLC 的型号为 FX3U -48MR,其输出接口的类型是 .",
    "options": [
      "A. 晶体管输出",
      "B. 双向晶闸管输出",
      "C. 继电器输出",
      "D. 无法判断"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 41
      }
    }
  },
  {
    "id": "Q164",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "已知时间继电器的型号为 JS7-3A,则该型号中的“ 3”表示 .",
    "options": [
      "A. 通电延时型,有瞬时触点",
      "B. 通电延时型,无瞬时触点",
      "C. 断电延时型,有瞬时触点",
      "D. 断电延时型,无瞬时触点"
    ],
    "answer": "C",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q165",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "如图所示电路中,当按下按钮 SB1 时,小车向前运行,则电路中 1234 处的位置开 关, 分别对应的位置开关是 . SQ4、",
    "options": [
      "A. SQ2、 SQ1、 SQ3 SQ3、",
      "B. SQ1、 SQ2、 SQ4 SQ4、",
      "C. SQ2、 SQ3、 SQ1 SQ3、",
      "D. SQ1、 SQ4、 SQ2"
    ],
    "answer": "D",
    "image": "./assets/source-images/2026-5f9779/img-006.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 43
      }
    }
  },
  {
    "id": "Q166",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "如图所示电路原理图,下列分析错误的是 .",
    "options": [
      "A. 电路具有失压、欠压保护",
      "B. 电路有接触器联锁控制功能",
      "C. 电路具有反接制动功能",
      "D. 电路具有能耗制动功能"
    ],
    "answer": "D",
    "image": "./assets/source-images/2026-5f9779/img-007.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 44
      }
    }
  },
  {
    "id": "Q167",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "X62W 型卧式万能铣床使用圆形 工 作 台 工 作 时,其 控 制 回 路 需 要 经 过 位 置 开 关 的 数 量 是 .",
    "options": [
      "A. 2个",
      "B. 4个",
      "C. 5个",
      "D. 6个"
    ],
    "answer": "A",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 46
      }
    }
  },
  {
    "id": "Q168",
    "chapter": "2026年浙江电子电工第一次…",
    "type": "single-choice",
    "stem": "三菱 FX3U -48MT 型 PLC,当 PLC 处于 STOP 状态时,扫 描 工 作 过 程 中 需 要 执 行 的 工 作是 .",
    "options": [
      "A. 输入采样",
      "B. 程序执行",
      "C. 输出刷新",
      "D. 内部处理 六、判断题(本大题共 5 小题,每小题 1 分,共 5 分) 将电力系统中的变压器低压侧中性点接地. ("
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026年浙江电子电工第一次调研考试（东航）.pdf",
        "sourceNo": 48
      }
    }
  },
  {
    "id": "Q169",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "电路中,没有电流通过的状态是 .",
    "options": [
      "A. 开路",
      "B. 通路",
      "C. 短路",
      "D. 前三项均正确"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 1
      }
    }
  },
  {
    "id": "Q170",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "新疆“风力绿电”跨越4000 公里点亮杭州亚运会.已知某台大型风力发电机的额定功率 为 6000kW,转速为 10 圈/分钟,单圈发电量为 10 度.计算该风力发电机在额定风速下 24 小时)的发电量为 一天( .",
    "options": [
      "A. 4000 度",
      "B. 6000 度",
      "C. 100000 度",
      "D. 144000 度"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 2
      }
    }
  },
  {
    "id": "Q171",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "电工师傅急需 27kΩ 的电 阻,他 手 头 只 有 20kΩ、30kΩ、15kΩ 三 种 规 格 的 电 阻 器 若 干 只, 才能得到需要的电阻.",
    "options": [
      "A. 将 15kΩ 与 30kΩ 电阻并联后再与 20kΩ 电阻串联",
      "B. 将 20kΩ 与 30kΩ 电阻并联后再与 15kΩ 电阻串联",
      "C. 将 20kΩ 与 30kΩ 电阻串联后再与 15kΩ 电阻并联",
      "D. 将 20kΩ 与 15kΩ 电阻串联后再与 30kΩ 电阻并联"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 3
      }
    }
  },
  {
    "id": "Q172",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "为扩大电流表的量程,下列说法正确的是 .",
    "options": [
      "A. 可通过串联电阻分压的方法",
      "B. 可通过串联电阻分流的方法",
      "C. 可通过并联电阻分压的方法",
      "D. 可通过并联电阻分流的方法"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 4
      }
    }
  },
  {
    "id": "Q173",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "如图所示电路中的节点与回路分别是 . 4,",
    "options": [
      "A. 3 3,",
      "B. 4 2,",
      "C. 6 2,",
      "D. 5 A 点电位 VA =E -IR 对应的电路是"
    ],
    "answer": null,
    "image": "./assets/source-images/2026-664fe0/img-000.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 5
      }
    }
  },
  {
    "id": "Q174",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "在 RLC 串联交流电路中,端电压和电流的相量图如图所示,这个电路是 .",
    "options": [
      "A. 电阻性电路",
      "B. 电感性电路",
      "C. 电容性电路",
      "D. 纯电容电路"
    ],
    "answer": null,
    "image": "./assets/source-images/2026-664fe0/img-001.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 7
      }
    }
  },
  {
    "id": "Q175",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "已知u1=50 sin( 314 °) t-45 V, u2 =50s in( 314 °) t+150 V,则 u1、 u2 的 相 位关系是 .",
    "options": [
      "A. u1 比 u2 超前165 °",
      "B. u1 比 u2 滞后195 °",
      "C. u1 比 u2 滞后165 °",
      "D. u1 比 u2 超前195 °"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 8
      }
    }
  },
  {
    "id": "Q176",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "在电子设备的指示灯电路 中,常 使 用 二 极 管.关 于 二 极 管 的 基 本 结 构,下 列 说 法 正 确 的 是 .",
    "options": [
      "A. 二极管由两个 PN 结组成",
      "B. 其核心 PN 结, P 区接正极、 N 区接负极时导通",
      "C. 二极管的 N 区永远接电源正极",
      "D. 二极管没有明显的正负极之分"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 9
      }
    }
  },
  {
    "id": "Q177",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "对于三极管的输入、输出特性曲线,下列理解正确的是 .",
    "options": [
      "A. 输入特性曲线反映集电极电流与基 - 射极电压关系",
      "B. 输出特性曲线中,基极电流一定时,集电极电流与集 - 射极电压无关",
      "C. 输入特性曲线有类似二极管的死区电压",
      "D. 输出特性曲线中不同基极电流曲线重合"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 10
      }
    }
  },
  {
    "id": "Q178",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "制作一个简单的单相半波整流电路为小功率电器供电,已知输入交流电压有效值 220V, 该电路(忽略二极管压降)输出直流电压约为 .",
    "options": [
      "A. 99V",
      "B. 198V",
      "C. 220V",
      "D. 311V"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 11
      }
    }
  },
  {
    "id": "Q179",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "分压式偏置电路中,若射极电阻 Re 被短路,会导致 .",
    "options": [
      "A. 静态工作点更稳定",
      "B. 电压放大倍数降低",
      "C. 静态时电路可能进入饱和状态",
      "D. 输入阻抗显著增大"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 12
      }
    }
  },
  {
    "id": "Q180",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "NPN 三极管构成的固定偏置放 大 电 路 中,若 电 路 输 出 信 号 负 半 周 出 现 幅 度 失 真,则 应 使电路恢复正常.",
    "options": [
      "A. 调大 Rb",
      "B. 调小 Rb",
      "C. 调大 Rc",
      "D. 调小 Rc"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 13
      }
    }
  },
  {
    "id": "Q181",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "同相比例集成运放电路中,反馈网络类型属于 .",
    "options": [
      "A. 电压串联负反馈",
      "B. 电压并联负反馈",
      "C. 电流串联负反馈",
      "D. 电流并联负反馈 LM7806 的 GND 端 输 出 电 流 为 5 mA,输 入 电 压 Ui 为 12 V,输 出 电 压"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 14
      }
    }
  },
  {
    "id": "Q182",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "如图所示电路, Uo为 .",
    "options": [
      "A. 12V",
      "B. 11V",
      "C. 9V",
      "D. 6V 二、判断题(本大题共 10 小题,每小题 1 分,共 10 分) A”,错误的选涂“ 判断下列各题,正确的选涂“ B”.错涂、多涂或未涂均无分."
    ],
    "answer": null,
    "image": "./assets/source-images/2026-664fe0/img-002.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 15
      }
    }
  },
  {
    "id": "Q183",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "某二极管型号为 2DK11,表示的含义是 .",
    "options": [
      "A. P 型锗材料开关二极管",
      "B. N 型锗材料开关二极管",
      "C. N 型硅材料开关二极管",
      "D. P 型硅材料开关二极管"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q184",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "在逻辑代数中,下列推断正确的是 .",
    "options": [
      "A. 若 A +A =1,则 A =1",
      "B. 若 AB =AC ,则 B =C",
      "C. 若 A +1=1,则 A =0",
      "D. 若 A +B =A +C ,则 B =C"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 41
      }
    }
  },
  {
    "id": "Q185",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "电路如图所示,若开关闭合为 1,断开为 0;灯亮为 1,灯灭为 0,则Y 的表达式是 .",
    "options": [
      "A. Y= ( A +BC) D Y= (",
      "B. AC +B ) D Y= (",
      "C. AB +C)D Y= (",
      "D. A +BC)+D"
    ],
    "answer": null,
    "image": "./assets/source-images/2026-664fe0/img-003.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q186",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "编码器 74LS147 的I3 I5 输 入 为 低 电 平,其 余 输 入 端 均 为 高 电 平 时,输 出Y3Y2Y1Y0 = .",
    "options": [
      "A. 1110",
      "B. 0111",
      "C. 1001",
      "D. 1010"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 43
      }
    }
  },
  {
    "id": "Q187",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "如图所 示 CD4511 为 4 线 - 七 段 锁 存 译 码/驱 动 和 数 码 显 示 电 路,当 CD4511 输 入 端 ABCD 的输入分别为 0110 时,数码显示器点亮的笔划是 .",
    "options": [
      "A. cdefg",
      "B. bcdeg",
      "C. abefg",
      "D. abdef"
    ],
    "answer": null,
    "image": "./assets/source-images/2026-664fe0/img-004.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 44
      }
    }
  },
  {
    "id": "Q188",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "如图所示,用 3 线 -8 线译码器 74LS138 和门电路可以实现逻辑函数关系Y = (要求用最小项表达式表示).",
    "options": [
      "A. Y =ABC +ABC +ABC +ABC",
      "B. Y =ABC +ABC +ABC +ABC",
      "C. Y =ABC +ABC +ABC +ABC",
      "D. Y =ABC +ABC +ABC +ABC 由5"
    ],
    "answer": null,
    "image": "./assets/source-images/2026-664fe0/img-005.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 45
      }
    }
  },
  {
    "id": "Q189",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "三相负载 H1 、H2 、 H3 的额定参数分别为: 220V/100 W、220V/60 W、 220V/40 W.若 开关 S1 断开,同时开关 S2 、 S3 闭合,则电路中 .",
    "options": [
      "A. 灯 H1 比灯 H2 、 H3 都要亮",
      "B. 灯 H1 不亮,灯 H2 比 H3 要亮",
      "C. 灯 H3 比灯 H1 、 H2 都要亮",
      "D. 灯 H1 不亮,灯 H2 与 H3 一样亮"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q190",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "如图所示电路,为实现电动机的顺序起动、逆序停止功能,需将接触器 KM2 的动合触 点 增设至控制线路的 .",
    "options": [
      "A. 线号 3-4",
      "B. 线号 3-6",
      "C. 线号 4-5",
      "D. 线号 7-8"
    ],
    "answer": null,
    "image": "./assets/source-images/2026-664fe0/img-006.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q191",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "如图所示为三速异步电动机控制线路的主电路,下列描述正确的是 .",
    "options": [
      "A. 低速时:U1、 V1、W1 接三相电源,U3、W1 并头,其他空着,定子绕组为 Y 形联结 U4、",
      "B. 中速时: V4、W4 分别接三相电源,其他空着,定子绕组为 △ 形联结 U1、",
      "C. 高速时: V1、W1 和 U3 并头, U2、 V2、W2 接三相电源,定子绕组为 YY 形联结",
      "D. 电动机有两套定子绕组,共有九个出线端"
    ],
    "answer": null,
    "image": "./assets/source-images/2026-664fe0/img-007.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 43
      }
    }
  },
  {
    "id": "Q192",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "下列电动机常用制动方式中,适用于 10kW 以上电动机制动需求的是 .",
    "options": [
      "A. 单向起动反接制动",
      "B. 无变压器单相半波整流单向起动能耗制动",
      "C. 有变压器单相桥式整流单向起动能耗制动",
      "D. 电容制动"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 44
      }
    }
  },
  {
    "id": "Q193",
    "chapter": "2026浙江电子电工正文第三…",
    "type": "single-choice",
    "stem": "在 CA6140 型车床主轴电动机运行时,下列元件触点动作而导致其停转的是 .",
    "options": [
      "A. 钥匙开关 SB 动断触点断开",
      "B. 位置开关 SQ2 动断触点断开",
      "C. 位置开关 SQ1 动合触点断开",
      "D. 起动按钮 SB2 动合触点闭合 六、判断题(本大题共 6 小题,每小题 1 分,共 6 分) A”,错误的选涂“ 判断下列各题,正确的选涂“ B”.错涂、多涂或未涂均无分."
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工正文第三次模拟考试（东航）.pdf",
        "sourceNo": 46
      }
    }
  },
  {
    "id": "Q194",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "下列设备中,既是电源又是负载的为 .",
    "options": [
      "A. 发电机",
      "B. 冰箱",
      "C. 蓄电池",
      "D. 电灯"
    ],
    "answer": "C",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 1
      }
    }
  },
  {
    "id": "Q195",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "如图所示的电路中,已 知 R1 =R2 =2 Ω, R3 =R4 =R5 =10 Ω,则 a、 b间的等效电阻为 .",
    "options": [
      "A. 6Ω",
      "B. 4Ω",
      "C. 3Ω",
      "D. 2Ω"
    ],
    "answer": "A",
    "image": "./assets/source-images/2026-2a0a6a/img-000.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 2
      }
    }
  },
  {
    "id": "Q196",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "已知一个四色环电阻,色环顺序为棕、黑、红、金,则该电阻器的阻值为 .",
    "options": [
      "A. 100Ω",
      "B. 1kΩ",
      "C. 10Ω",
      "D. 10kΩ"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 3
      }
    }
  },
  {
    "id": "Q197",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "关于交流电的最大值,下列说法正确的是 .",
    "options": [
      "A. 最大值是有效值的 3倍",
      "B. 有效值是最大值的 2倍",
      "C. 最大值为 311V 的正弦交流电压,就其热效应而言,相当于一个 220V 的直流电压",
      "D. 最大值为 311V 的正弦交流电,可用 220V 的直流电代替"
    ],
    "answer": "C",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 4
      }
    }
  },
  {
    "id": "Q198",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "某 RLC 串联电路中,已知 R =40Ω, X L =40Ω, X C =70Ω,则该电路总阻抗为 .",
    "options": [
      "A. 40Ω",
      "B. 50Ω",
      "C. 70Ω",
      "D. 150Ω"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 5
      }
    }
  },
  {
    "id": "Q199",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "在 RLC 串联谐振电路中,若电源电压不变,当电阻 R 增大时,下列说法正确的是 .",
    "options": [
      "A. 谐振角频率减小",
      "B. 电路品质因数增大",
      "C. 电路总阻抗增大",
      "D. 电路总电流增大"
    ],
    "answer": "C",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 8
      }
    }
  },
  {
    "id": "Q200",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "关于二极管的基本结构,以下描述正确的是 .",
    "options": [
      "A. 二极管的 P 区引出的电极是它的阴极",
      "B. 核心是一个 PN 结,由 P 型半导体和 N 型半导体相结合而成",
      "C. 二极管导通时,其阳极应接电池负极",
      "D. 普通二极管的外壳封装上,色环标记的一侧为正极"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 9
      }
    }
  },
  {
    "id": "Q201",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "关于三极管的输入、输出特性曲线,下列描述正确的是 .",
    "options": [
      "A. 输入特性曲线描述IC 与 UBE 之间的关系,输出特性曲线描述IC 与 UCE 之间的关系",
      "B. 输出特性曲线中可分为截止区、放大区和饱和区",
      "C. UCE 对输入特性曲线有显著影响,曲线会随 UCE 增大而明显移动",
      "D. 在饱和区内,三极管工作在放大状态,满足IC =β IB"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 10
      }
    }
  },
  {
    "id": "Q202",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "技术人员在检修一台电源适配器时,测得 内 部 变 压 器 次 级 交 流 电 压 有 效 值 为 10V.该 适配器采用单相桥式整流并 带 有 电 容 滤 波 电 路.在 接 入 正 常 负 载 的 情 况 下,用 万 用 表 直流电压挡测量整流滤波后的输出端,读数约为 .",
    "options": [
      "A. 10V",
      "B. 9V",
      "C. 14V",
      "D. 12V"
    ],
    "answer": "D",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 11
      }
    }
  },
  {
    "id": "Q203",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "分压式偏置电路中,若射极电容 Ce被断路,会导致 .",
    "options": [
      "A. 静态工作点更稳定",
      "B. 输出阻抗显著增大",
      "C. 电压放大倍数降低",
      "D. 输入阻抗显著减小"
    ],
    "answer": "C",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 12
      }
    }
  },
  {
    "id": "Q204",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "在 NPN 型三极管组成的共发射极基本放大电路实验中,用示波器观察到输出电压 波 形 出现了顶部削平的失真.为消除这种失真,应 .",
    "options": [
      "A. 调小 Rb",
      "B. 调大 Rb",
      "C. 调小 Rc",
      "D. 调大 Rc"
    ],
    "answer": "A",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 13
      }
    }
  },
  {
    "id": "Q205",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "某放大电路引入负反馈后,发现其输出电阻比未引入反馈时显著 减 小,同 时 该 反 馈 使 输 入电阻也有所减小.则该反馈最可能的类型是 .",
    "options": [
      "A. 电压串联负反馈",
      "B. 电流串联负反馈",
      "C. 电压并联负反馈",
      "D. 电流并联负反馈"
    ],
    "answer": "C",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 14
      }
    }
  },
  {
    "id": "Q206",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "下列各项中识读正确的是 . ( a) ( b) ( c) ( d) a)为 100pF",
    "options": [
      "A. 图( b)为 0.",
      "B. 图( 022μF c)为 100Ω",
      "C. 图( d)为 5.",
      "D. 图( 10Ω"
    ],
    "answer": "D",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q207",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "三极管参数“ β 值”是指 .",
    "options": [
      "A. 集电极 - 发射极击穿电压",
      "B. 电流放大系数",
      "C. 最大耗散功率",
      "D. 特征频率"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q208",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "如图所示的图形符号表示 .",
    "options": [
      "A. 光电二极管",
      "B. 光控晶闸管",
      "C. 快速晶闸管",
      "D. 可关断晶闸管"
    ],
    "answer": "B",
    "image": "./assets/source-images/2026-2a0a6a/img-001.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 41
      }
    }
  },
  {
    "id": "Q209",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "将 2001 个 1 连续进行异或运算,结果为 .",
    "options": [
      "A. 0",
      "B. 1",
      "C. 1001",
      "D. 不确定"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q210",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "下列具有记忆功能的电路是 .",
    "options": [
      "A. 比较器",
      "B. 编码器",
      "C. 译码器",
      "D. 触发器"
    ],
    "answer": "D",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 43
      }
    }
  },
  {
    "id": "Q211",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "逻辑函数式的Y =A ( B +C)+A B 化简结果是 .",
    "options": [
      "A. Y =AB +AC +A B Y =A (",
      "B. B +C)+A B",
      "C. Y =A +BC",
      "D. Y =B +AC"
    ],
    "answer": "D",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 44
      }
    }
  },
  {
    "id": "Q212",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "要使 JK 触发器在时钟脉冲作用下状态不断翻转, JK 的取值应为 .",
    "options": [
      "A. 00",
      "B. 11",
      "C. 10",
      "D. 01"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 45
      }
    }
  },
  {
    "id": "Q213",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "若 555 施密特触发器的 VCC =12V,其正向阈值电压约为 .",
    "options": [
      "A. 4V",
      "B. 6V",
      "C. 8V",
      "D. 12V 六、判断题(本大题共 6 小题,每小题 1 分,共 6 分)"
    ],
    "answer": "C",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 46
      }
    }
  },
  {
    "id": "Q214",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "下列现象属于电磁感应现象的是 .",
    "options": [
      "A. 电荷在磁场中定向移动形成电流",
      "B. 通电导体周围存在磁场",
      "C. 磁场对通电导体发生作用",
      "D. 闭合电路的一部分导体做切割磁感线运动时,在电路中产生电流的现象"
    ],
    "answer": "D",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q215",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "判断电流与所产生的磁感应线方向之间的关系用 .",
    "options": [
      "A. 左手定则",
      "B. 右手定则",
      "C. 右手螺旋定则",
      "D. 楞次定律"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q216",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "如图所示 的 三 相 对 称 电 路 中,若 Z1 负 载 断 开,则 电 流 表 和 电 压 表 的 读 数 变 化 分 别 为 .",
    "options": [
      "A. 电流表、电压表读数均不变",
      "B. 电流表读数变小,电压表读数不变",
      "C. 电流表读数变大,电压表读数不变",
      "D. 电流表读数变大,电压表读数变压"
    ],
    "answer": "B",
    "image": "./assets/source-images/2026-2a0a6a/img-002.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q217",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "下列时间继电器的延时范围较短,一般在十几秒以下的是 .",
    "options": [
      "A. 空气阻尼式",
      "B. 电磁式",
      "C. 电动式",
      "D. 晶体管式"
    ],
    "answer": "D",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 43
      }
    }
  },
  {
    "id": "Q218",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "如图所示为接触器联锁正反转控制线路,若电动机正 常 运 行,线 号 4—5 处 与 6—7 处 应 为 .",
    "options": [
      "A. 线号 4—5 处 KM1,线号 6—7 处 KM2",
      "B. 线号 4—5 处 KM2,线号 6—7 处 KM1",
      "C. 线号 4—5 处 SB1,线号 6—7 处 SB2",
      "D. 线号 4—5 处 SB2,线号 6—7 处 SB1"
    ],
    "answer": "D",
    "image": "./assets/source-images/2026-2a0a6a/img-003.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 44
      }
    }
  },
  {
    "id": "Q219",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "某电动机采用 Y-△ 降压起动方式进行降压起动,下列描述正确的是 . U2、",
    "options": [
      "A. 降压运行:定子绕组 Y 形联结, V2、W2 短接, U1、 V1、W1 接三相电源 U1-W2、",
      "B. 降压运行:定子绕组 △ 形联结, V1-U2、W1-V2 连接后与三相电源连接 U1、",
      "C. 全压运行:定子绕组 △ 形联结, V1、W1 接三相电源,其他空着 U1、",
      "D. 全压运行:定子绕组 YY 形联结, V1、W1 短接, U2、 V2、W2 接三相电源"
    ],
    "answer": "B",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 45
      }
    }
  },
  {
    "id": "Q220",
    "chapter": "2026浙江电子电工第二光华…",
    "type": "single-choice",
    "stem": "下列选项中的机床所使用的电动机是双速电动机的是 .",
    "options": [
      "A. CA6140 型车床",
      "B. M7130 型平面磨床",
      "C. X62W 型卧式万能铣床",
      "D. T68 型卧式镗床 六、判断题(本大题共 6 小题,每小题 1 分,共 6 分)"
    ],
    "answer": "C",
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "2026浙江电子电工第二光华模拟考试（东航）.pdf",
        "sourceNo": 46
      }
    }
  },
  {
    "id": "Q221",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "电路如图所示, A 点电位是 10 25",
    "options": [
      "A. 5V",
      "B. 8V",
      "C. V",
      "D. V 3 3"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-000.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 2
      }
    }
  },
  {
    "id": "Q222",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "已知两个元件中的电流和电压方向如图所示,电流I=1A,下列关于功率的叙述正确的是",
    "options": [
      "A. 两个元件发出的功率均为 2 W",
      "B. 两个元件吸收的功率均为 2 W a)中元件消耗 2 W 的功率,图(",
      "C. 图( b)中元件发出 2 W 的功率 b)中元件消耗 2 W 的功率,图(",
      "D. 图( a)中元件发出 2 W 的功率"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-001.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 3
      }
    }
  },
  {
    "id": "Q223",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "电路如图所示,电容器 C 两端的电压 U AB 为",
    "options": [
      "A. E3 +IR3",
      "B. E3 -IR3",
      "C. IR3 -E3",
      "D. - ( E3 +IR3)"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-002.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 5
      }
    }
  },
  {
    "id": "Q224",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "电路如图所示,若电位器 RP 的滑动触点向左移(未滑至最左端),下列判断错误的是",
    "options": [
      "A. 电流表 A 的读数将减小,电压表 V 的读数将增大",
      "B. 电源两端的电压将减小,内阻消耗的功率将增大",
      "C. 电阻 R1 的功率将减小,电源输出的功率将增大",
      "D. 电阻 R2 的功率将减小,内阻消耗的功率将增大"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-003.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 6
      }
    }
  },
  {
    "id": "Q225",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如果从双踪示波器上观察到两个相同频率的正弦交流 电 压 u1 、 u2 的 波 形 如 图 所 示,那 么 这 两个电压之间的相位关系为",
    "options": [
      "A. u1 超前 u2 30 °",
      "B. u1 超前 u2 45 °",
      "C. u1 滞后 u2 60 °",
      "D. u1 滞后 u2 90 °"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 7
      }
    }
  },
  {
    "id": "Q226",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "单相交流电路如图所示,若 u=40s in( 2 °)V, t-45 i=5s in( 2 °)A,则 N 可能是 ( t-45 )",
    "options": [
      "A. 纯电容元件",
      "B. 纯电阻元件",
      "C. 电阻和电感构成的感性元件",
      "D. 纯电感元件"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-004.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 8
      }
    }
  },
  {
    "id": "Q227",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "电路如图所示,电容 C 的作用是提高电路的功率因数。若去掉电容 C,则电流表 A 的读数、 电路的总有功功率、视在功率的变化依次为",
    "options": [
      "A. 变小、变小、变小",
      "B. 变小、不变、变大",
      "C. 变大、变小、不变",
      "D. 变大、不变、变大"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-005.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 9
      }
    }
  },
  {
    "id": "Q228",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "正弦交流电路如图所示,当开关 S 打开时,电路发生谐振。当开关 S 合上时,下列说法错误 的是",
    "options": [
      "A. 灯 HL 将比原来暗",
      "B. 电路的性质为感性",
      "C. 电感 L 两端的电压将减小",
      "D. 电路的视在功率将变大 电子与电工类试卷 第 2 页(共 14 页)"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-006.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 10
      }
    }
  },
  {
    "id": "Q229",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "下列是 NPN 型晶体三极管各电极之间的电压关系,能够满足饱和状态的是 VBE <0,",
    "options": [
      "A. VBE >VCE VBE >0,",
      "B. VBE <VCE VBE =0,",
      "C. VBE <VCE",
      "D. VBE >0, VBE >VCE 5 V,变压器二次侧电压 U2 =10V,则 电 路 正"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 11
      }
    }
  },
  {
    "id": "Q230",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "电路如图所示,已知 R1 =1kΩ, R2 =100kΩ, RL =10kΩ,则当输入 ui=10 2s in( ωt)mV 时,输出电流io 为",
    "options": [
      "A. io=10 2s in( ωt+π)mA",
      "B. io=100 2s in( ωt+π)mA π π",
      "C. io=5 2s inω t+ A (",
      "D. )io= 2si nω t+ A 2 2 a)所示,若将集电极电阻由 4kΩ 改为 6kΩ,则电路的静态工作点 Q 点"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-007.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 13
      }
    }
  },
  {
    "id": "Q231",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "基本放大电路如图( b)的 将移向图(",
    "options": [
      "A. QA 点",
      "B. QB 点",
      "C. QC 点",
      "D. QD 点"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-008.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 14
      }
    }
  },
  {
    "id": "Q232",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "在 OCL 互补对称功放电路中,设负载电阻 RL =8Ω, UCES=0,要求最大输出功率为 16 W, 则要求的电源电压为",
    "options": [
      "A. ±9V",
      "B. ±12V",
      "C. ±16V",
      "D. ±24V"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 18
      }
    }
  },
  {
    "id": "Q233",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "若测得某三极管的两个引脚电流如图所示,则该三极管的电流放大系数为",
    "options": [
      "A. 101",
      "B. 100",
      "C. 102",
      "D. 50"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-009.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 40
      }
    }
  },
  {
    "id": "Q234",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "设矩形脉冲的脉冲幅度为 V m ,则脉冲宽度tp 是指",
    "options": [
      "A. 上升沿 0. 1V m 处到下降沿 0. 9V m 处",
      "B. 上升沿 0. 5V m 处到下降沿 0. 5V m 处",
      "C. 上升沿 0. 1V m 处到上升沿 0. 9V m 处",
      "D. 上升沿 0. 9V m 处到下降沿 0. 1V m 处"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q235",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "由或非门构成的基本 RS 触发器中,当RD =0 和SD =1 时,其输出 Q 与 Q 分别为 0,",
    "options": [
      "A. 1",
      "B. 不变 1,",
      "C. 0",
      "D. 不定"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 43
      }
    }
  },
  {
    "id": "Q236",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "某逻辑 电 路 输 入 信 号 A 、 B、C 和 输 出 信 号 Y 的 波 形 如 图 所 示,若 要 实 现 该 电 路 的 逻 辑 功 能,则需用到与非门的个数为",
    "options": [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 5"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 44
      }
    }
  },
  {
    "id": "Q237",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示,若输出信号 Q2 的频率为 10kHz,则 CP 脉冲的频率为",
    "options": [
      "A. 40kHz",
      "B. 20kHz",
      "C. 10kHz",
      "D. 5kHz 电子与电工类试卷 第 7 页(共 14 页)"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-010.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 45
      }
    }
  },
  {
    "id": "Q238",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示,输出端Y 的最简表达式为",
    "options": [
      "A. F =AB +C",
      "B. F =AB +C",
      "C. F =A +BC",
      "D. F =A 6”,则输入端 A3A2A1A0 等于"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-011.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 46
      }
    }
  },
  {
    "id": "Q239",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示,用 CD4511 驱动七段数码管显示电路,要显示数码“",
    "options": [
      "A. 0100",
      "B. 1010",
      "C. 0010",
      "D. 0110"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-012.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 47
      }
    }
  },
  {
    "id": "Q240",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示为 CT74LS194 构成的环形计数器,设初态 Q3Q2Q1Q0 =0001,则经过 4 个 CP 脉 Q3Q2Q1Q0 等于 冲后,",
    "options": [
      "A. 0011",
      "B. 0111",
      "C. 1111",
      "D. 1110 六、填空题(本大题共 5 小题,每小题 3 分,共 15 分)"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-013.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 48
      }
    }
  },
  {
    "id": "Q241",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "在企业变配电室,安装有变压器,将供电电网电压变为合适电压供给负载。这种变压器是",
    "options": [
      "A. 电力变压器",
      "B. 自耦变压器",
      "C. 电压互感器",
      "D. 高频变压器 电子与电工类试卷 第 9 页(共 14 页)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 39
      }
    }
  },
  {
    "id": "Q242",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "保护接零的安全原理是",
    "options": [
      "A. 降低设备对地电压",
      "B. 增大短路电流,使保护装置动作",
      "C. 消除感应电压",
      "D. 提高设备绝缘水平"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 41
      }
    }
  },
  {
    "id": "Q243",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "已知星形联结的对称三相交流电 源 的 相 电 压 uU =10s in( °)V,相 序 为 U—V— W, wt+60 则线电压 uWU 为",
    "options": [
      "A. uWU =10 3s in( °)V wt+90",
      "B. uWU =10s in( °)V wt+90",
      "C. uWU =10s in( °)V wt-30",
      "D. uWU =10 3s in( °)V wt-150"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 42
      }
    }
  },
  {
    "id": "Q244",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示为三相交流电路,已知线电压为 380V。当分别接入星形和三角形联结的两组电 阻性对称负载时,下列说法正确的是",
    "options": [
      "A. 星形负载的相电流为 22A,三角形负载的相电流为 22A",
      "B. 星形负载的相电流为 22A,三角形负载的线电流为 22A",
      "C. 星形负载的线电流为 22A,三角形负载的相电流为 38A",
      "D. 星形负载的线电流为 38A,三角形负载的线电流为 38A"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-014.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 43
      }
    }
  },
  {
    "id": "Q245",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "PLC 在扫描工作过 程 中,除 了 要 执 行 用 户 程 序 外,还 要 完 成 内 部 处 理、通 信 服 务 等 工 作。 下列对一个扫描过程(也称为扫描周期)的五个阶段排列顺序正确的是",
    "options": [
      "A. 内部处理、输入采样、程序执行、通信服务、输出刷新",
      "B. 内部处理、通信服务、输入采样、程序执行、输出刷新",
      "C. 通信服务、内部处理、输入采样、程序执行、输出刷新",
      "D. 输入采样、内部处理、通信服务、程序执行、输出刷新"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 44
      }
    }
  },
  {
    "id": "Q246",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "交流接触器静铁芯的两个端面安装短路环的作用是",
    "options": [
      "A. 减缓铁芯动作时的冲击力",
      "B. 增大电磁系统的磁通",
      "C. 减少铁芯的磁滞和涡流损耗",
      "D. 消除电磁系统的振动和噪声 电子与电工类试卷 第10页(共 14 页)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 45
      }
    }
  },
  {
    "id": "Q247",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示的小车自动往返控制线路装接完 成 后,在 通 电 试 车 前,先 手 动 模 拟 各 电 器 元 件 的 操作、动作,使用数字式万用表合适的电阻挡进行控制电路通断情况检查。具体操作如下: 0”“ 表笔分别接“ 1”号线处,拨动位置开关 SQ1 后不放。观察万用表的读数,下列叙述正确 的是",
    "options": [
      "A. 显示接触器 KM1 线圈直流电阻值",
      "B. 显示接触器 KM2 线圈直流电阻值",
      "C. 显示接触器 KM1、KM2 线圈串联后的直流电阻值 0”",
      "D. 始终显示为“"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-015.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 46
      }
    }
  },
  {
    "id": "Q248",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "我们常说的“变频技术”,其实质上是通过改变通入电动机电源的 来改变电动机的",
    "options": [
      "A. 转差率 转速",
      "B. 磁极对数",
      "C. 频率 转速 方向",
      "D. 频率 磁场方向"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 47
      }
    }
  },
  {
    "id": "Q249",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示为某电气控制线路原理图,若将“6”—“7”号线间的接触器 KM2 辅助动合触点 改 6”—“ 接到接到“ 8”号线间,其控制的特点是",
    "options": [
      "A. 顺序起动,顺序停止",
      "B. 顺序起动,逆序停止",
      "C. 顺序起动,同时停止",
      "D. 顺序起动,同时停止或 M2 先停止 电子与电工类试卷 第11页(共 14 页) 六、填空题(本大题共 5 小题,每小题 3 分,共 15 分)"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-01eb8d/img-016.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第一次调研考试 电子与电工-正文.pdf",
        "sourceNo": 48
      }
    }
  },
  {
    "id": "Q250",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "电路如图所示,电阻 R 等于",
    "options": [
      "A. 12Ω",
      "B. 8Ω",
      "C. 6Ω",
      "D. 2Ω A、"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-000.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 2
      }
    }
  },
  {
    "id": "Q251",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "电路如图所示,当开关 S 闭合时, B 之间的等效电阻 RAB 等于",
    "options": [
      "A. 1Ω",
      "B. 2Ω",
      "C. 3Ω",
      "D. 4Ω"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-001.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 3
      }
    }
  },
  {
    "id": "Q252",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "电路如图所示,当开关 S 闭合后,电路中I 和 Uab变化情况,正确的是",
    "options": [
      "A. I 减小, Uab增大",
      "B. I 减小, Uab减小",
      "C. I 增大, Uab增大",
      "D. I 增大,Uab减小"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-002.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 4
      }
    }
  },
  {
    "id": "Q253",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "已知一个电容器接到 6V 电源上时,它的电容量为 50μF,则当接到 12V 电源上时,它的电 容量为",
    "options": [
      "A. 25μF",
      "B. 50μF",
      "C. 75μF",
      "D. 100μF"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 5
      }
    }
  },
  {
    "id": "Q254",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "已知五色环电阻器的色环按顺序排列分别为“红、黄、黑、黑、棕”,则该电阻器电阻值、允许误 差分别为 250Ω、±2%",
    "options": [
      "A. 230Ω、±1%",
      "B. 240Ω、±1%",
      "C. 260Ω、±2%",
      "D. 电子与电工类试卷 第 1 页(共 12 页)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 6
      }
    }
  },
  {
    "id": "Q255",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示,正确的 KVL 方程是",
    "options": [
      "A. I1R1 -E1 +I2R2 +E2 +I3R3 =0",
      "B. I1R1 +E1 -I2R2 +E2 -I3R3 =0",
      "C. -I1R1 -E1 -I2R2 -E2 +I3R3 =0",
      "D. -I1R1 +E1 -I2R2 -E2 +I3R3 =0"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-003.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 7
      }
    }
  },
  {
    "id": "Q256",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "已知电容 C1 =100μF、耐压 20V;电容 C2 =20μF、耐压 25V,则两个电容器串联后两端所 加的最大允许电压为",
    "options": [
      "A. 20V",
      "B. 25V",
      "C. 30V",
      "D. 45V"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 8
      }
    }
  },
  {
    "id": "Q257",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "某一正弦交流电压波形如图所示,其瞬时值表达式为 π",
    "options": [
      "A. u=10s in( ωt)V",
      "B. u=-10s inω t- V 2 π",
      "C. u=-10s inω t+ ( V )",
      "D. u=10s in( ωt+π)V 2"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-004.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 9
      }
    }
  },
  {
    "id": "Q258",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "电路如图所示,当开关 S 断开时,电路处于谐振状态,则当开关 S 闭合时,电路的性质为",
    "options": [
      "A. 电阻性",
      "B. 电感性",
      "C. 电容性",
      "D. 中性"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-005.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 10
      }
    }
  },
  {
    "id": "Q259",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "当温度升高时,晶体管的输入特性曲线将向 移,输出特性曲线将向 移,而 且输出特性曲线之间的间隔将拉大",
    "options": [
      "A. 左 下",
      "B. 左 上",
      "C. 右 上",
      "D. 右 下"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 11
      }
    }
  },
  {
    "id": "Q260",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "电路如图所示,设二极管 VD1、 VD2 为理想器件,则输出电压 Uo 为",
    "options": [
      "A. 9V",
      "B. 5V",
      "C. -5V",
      "D. 0"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-006.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 12
      }
    }
  },
  {
    "id": "Q261",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示为整流滤波电路,已 知 u1 =311s in( ωt)V,变 压 器 的 变 比 为 22∶1,则 正 常 情 况 UL 等于 下,",
    "options": [
      "A. 10V",
      "B. 9V",
      "C. 12V",
      "D. 4. 5V"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-007.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 13
      }
    }
  },
  {
    "id": "Q262",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "某放大电路中,已知三极管的引脚如图所示,测得 U AB =-6V, UBC =5.3 V,则该三极管从 左到右三极分别为",
    "options": [
      "A. 集电极、基极、发射极",
      "B. 发射极、集电极、基极",
      "C. 发射极、基极、集电极",
      "D. 集电极、发射极、基极 电子与电工类试卷 第 2 页(共 12 页)"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-008.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 14
      }
    }
  },
  {
    "id": "Q263",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "电路如图所示,若 C2 短路,则输出波形",
    "options": [
      "A. 无变化",
      "B. 上移",
      "C. 下移",
      "D. 以上都不对"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-009.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 15
      }
    }
  },
  {
    "id": "Q264",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示,该电路为",
    "options": [
      "A. 乙类 OCL 功放电路",
      "B. 甲乙类 OCL 功放电路",
      "C. 乙类 OTL 功放电路",
      "D. 甲乙类 OTL 功放电路"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-010.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 16
      }
    }
  },
  {
    "id": "Q265",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "在互补对称 OTL 功放电路中,引起交越失真的原因是",
    "options": [
      "A. 输入信号太大",
      "B. 推挽管的基极偏压不合适",
      "C. 电源电压太高",
      "D. 晶体管β 过大"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 17
      }
    }
  },
  {
    "id": "Q266",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示为放大电路,下列说法正确的是",
    "options": [
      "A. 既没有电流放大作用,也没有电压放大作用",
      "B. 有电流和电压放大作用",
      "C. 有电流放大作用,没有电压放大作用",
      "D. 没有电流放大作用,有电压放大作用"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-011.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 18
      }
    }
  },
  {
    "id": "Q267",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "运算放大器理想化条件为",
    "options": [
      "A. Aud=∞ , ri=∞ , ro=∞ ,K CMR =0 Aud=0,",
      "B. ri=∞ , ro=0, K CMR =∞ Aud=∞ ,",
      "C. ri=∞ , ro=0, K CMR =∞ Aud=∞ ,",
      "D. ri=0, ro=∞ ,K CMR =0 二、填空题(本大题共 10 小题,每小题 2 分,共 20 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 20
      }
    }
  },
  {
    "id": "Q268",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "下列型号中,表示光电耦合器的是",
    "options": [
      "A. 2AP1",
      "B. 9013",
      "C. 2R7",
      "D. 4N35"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 45
      }
    }
  },
  {
    "id": "Q269",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "用指针式万用表检测三极管的引脚与类型 时,任 意 假 定 三 极 管 的 一 个 电 极 是 基 极,用 红 表 笔与之相接,用黑表笔与另外两极相接,则当出现两次电阻都较小时,判断结果正确的是",
    "options": [
      "A. 红表笔所接为 b 极,管型为 NPN",
      "B. 红表笔所接为 c极,管型为 NPN",
      "C. 红表笔所接为 b 极,管型为 PNP",
      "D. 红表笔所接为 c极,管型为 PNP 电子与电工类试卷 第 6 页(共 12 页)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 46
      }
    }
  },
  {
    "id": "Q270",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "74LS148 优先编码器的输入端和输出端都是低电 平 有 效,当I6I3 输 入 为 低 电 平,其 余 输 入 端为高电平时,输出Y2Y1Y0 等于",
    "options": [
      "A. 110",
      "B. 011",
      "C. 001",
      "D. 011"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 48
      }
    }
  },
  {
    "id": "Q271",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "电路如图所示,能实现电路的逻辑功能是",
    "options": [
      "A. Y =AB",
      "B. Y =A +B",
      "C. Y =A ⊕ B",
      "D. Y =A ☉B"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-012.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 49
      }
    }
  },
  {
    "id": "Q272",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "有一四位右移移位寄存器,初态为 Q3 Q2 Q1 Q0 =1001,其串行输入数据为 1101,则在 3 个 移位脉冲 CP 作用下,其输出状态是",
    "options": [
      "A. 1001",
      "B. 0101",
      "C. 1100",
      "D. 1011"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 51
      }
    }
  },
  {
    "id": "Q273",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示为计数电路,已知 74LS161 为模 16 的集成计数器, RD 为异步清零端, LD 为同步 D3 、Q3 为 输 入、输 出 的 高 位 端,D0 、Q0 为 输 入、输 出 的 低 位 端。 若 B =1, 置数端, D3D2D1D0 =0100,则 C 与 A 相连所构成的加法计数器的进制是",
    "options": [
      "A. 六进制",
      "B. 七进制",
      "C. 十进制",
      "D. 十六进制 电子与电工类试卷 第 7 页(共 12 页) 六、填空题(本大题共 5 小题,每小题 3 分,共 15 分)"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-013.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 52
      }
    }
  },
  {
    "id": "Q274",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "螺线管通电后,小磁针静止(如图所示),可判断",
    "options": [
      "A. a端为 N 极, c端为电源正极",
      "B. a端为 N 极,c端为电源负极",
      "C. b 端为 N 极, d 端为电源正极",
      "D. b 端为 N 极, d 端为电源负极"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-014.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 43
      }
    }
  },
  {
    "id": "Q275",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "下列属于电磁感应现象的是",
    "options": [
      "A. 磁铁吸引铁钉",
      "B. 通电导线周围产生磁场",
      "C. 同名磁极相互排斥",
      "D. 闭合回路的一部分导线切割磁感线产生电流"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 44
      }
    }
  },
  {
    "id": "Q276",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "关于热继电器和熔断器,下列说法正确的是",
    "options": [
      "A. 热继电器和熔断器都是利用电流的热效应原理,都可以用作短路保护",
      "B. 电动机起动时电流很大,热继电器会影响电动机的正常起动",
      "C. 热继电器的整定电流是指长期通过发热元件又刚好使热继电器不动作的最大电流值",
      "D. 电动机在正转和反转时需要接入两个热继电器"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 46
      }
    }
  },
  {
    "id": "Q277",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "PLC 相比传统继电器控制系统,最突出的优势是",
    "options": [
      "A. 结构更简单,成本更低",
      "B. 无需编程,直接通过硬件接线实现控制",
      "C. 控制逻辑修改灵活,无需改变硬件接线",
      "D. 仅能实现简单的开关量控制"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 47
      }
    }
  },
  {
    "id": "Q278",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示,电路中 SB1、 SB2 和 FR 的作用分别是",
    "options": [
      "A. 连续起动、点动控制和停止控制",
      "B. 两地起动控制和过载保护",
      "C. 连续起动、点动控制和过载保护",
      "D. 顺序起动控制、点动控制和过载保护"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-015.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 49
      }
    }
  },
  {
    "id": "Q279",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "如图所示为控制小车自动往返 的 电 气 控 制 线 路 和 四 个 位 置 开 关 的 安 装 位 置 示 意 图, KM1 线圈得电代表小车向前运行, KM2 线圈得电代表小车向后运行,则在电气控制线路上的 3 处所对应的位置开关是",
    "options": [
      "A. SQ1",
      "B. SQ2",
      "C. SQ3",
      "D. SQ4"
    ],
    "answer": null,
    "image": "./assets/source-images/20252026-1eee34/img-016.png",
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 51
      }
    }
  },
  {
    "id": "Q280",
    "chapter": "浙江2025—2026学年职…",
    "type": "single-choice",
    "stem": "CA6140 型车床主轴的调速采用",
    "options": [
      "A. 电气调速",
      "B. 机械与电气配合调速",
      "C. 齿轮箱进行机械有级调速",
      "D. 齿轮箱进行机械无级调速 电子与电工类试卷 第10页(共 12 页) 六、填空题(本大题共 5 小题,每小题 3 分,共 15 分)"
    ],
    "answer": null,
    "image": null,
    "explain": {
      "template": "source_pdf",
      "params": {
        "source": "浙江2025—2026学年职教高考研究联合体第二次调研考试 电子与电工-正文.pdf",
        "sourceNo": 52
      }
    }
  }
];

  global.QuestionBank40 = questions;
})(typeof window !== 'undefined' ? window : globalThis);
