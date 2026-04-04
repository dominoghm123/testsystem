(function initQuestionBank(global) {
  'use strict';

  var chapterPool = [
    '模拟电路基础',
    '数字电路基础',
    '逻辑门与组合电路',
    '时序电路',
    '常见测量与故障分析'
  ];

  var answerPool = ['A', 'B', 'C', 'D'];

  var questions = Array.from({ length: 40 }, function buildQuestion(_, idx) {
    var i = idx + 1;
    var answer = answerPool[idx % answerPool.length];
    return {
      id: 'Q' + String(i).padStart(3, '0'),
      chapter: chapterPool[idx % chapterPool.length],
      type: 'single-choice',
      stem: '【示例题】请判断第 ' + i + ' 题电路在当前条件下最合理的结论。',
      options: [
        'A. 电路工作状态稳定',
        'B. 电流方向与设计一致',
        'C. 负载处于异常工作区',
        'D. 需要检查开关与电源极性'
      ],
      answer: answer,
      explain: {
        template: 'series_basic',
        params: {
          switchState: idx % 3 === 0 ? 'open' : 'closed',
          currentDirection: idx % 2 === 0 ? 'clockwise' : 'counter-clockwise',
          lampState: idx % 3 === 0 ? 'off' : 'on'
        }
      }
    };
  });

  global.QuestionBank40 = questions;
})(typeof window !== 'undefined' ? window : globalThis);
