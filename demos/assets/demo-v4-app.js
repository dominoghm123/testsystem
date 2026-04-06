(function initDemoV4App(global) {
  'use strict';

  var SCORE_RULES = {
    'single-choice': 2,
    'true-false': 1,
    'short-answer': 10
  };

  var TYPE_LABELS = {
    'single-choice': '选择题',
    'true-false': '判断题',
    'short-answer': '简答题'
  };
  var ANSWER_CHOICES = {
    A: true,
    B: true,
    C: true,
    D: true
  };

  function isChoiceAnswer(value) {
    if (typeof value !== 'string') {
      return false;
    }
    return Boolean(ANSWER_CHOICES[value.toUpperCase()]);
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function clampText(str, size) {
    var text = (str || '').trim();
    if (text.length <= size) {
      return text;
    }
    return text.slice(0, size) + '...';
  }

  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function optionTextMap(question) {
    var map = {};
    (question.options || []).forEach(function eachOption(opt, idx) {
      var key = ['A', 'B', 'C', 'D'][idx] || String.fromCharCode(65 + idx);
      map[key] = String(opt || '').replace(/^[A-D]\.\s*/, '').trim();
    });
    return map;
  }

  function createStaticCircuitSvg(questionId) {
    return (
      '<svg viewBox="0 0 420 180" class="stem-svg" aria-label="' + questionId + ' 静态题图">' +
      '<rect x="8" y="8" width="404" height="164" rx="12" class="stem-board" />' +
      '<line x1="56" y1="42" x2="124" y2="42" class="stem-wire" />' +
      '<line x1="176" y1="42" x2="250" y2="42" class="stem-wire" />' +
      '<line x1="306" y1="42" x2="366" y2="42" class="stem-wire" />' +
      '<line x1="366" y1="42" x2="366" y2="134" class="stem-wire" />' +
      '<line x1="366" y1="134" x2="220" y2="134" class="stem-wire" />' +
      '<line x1="178" y1="134" x2="56" y2="134" class="stem-wire" />' +
      '<line x1="56" y1="134" x2="56" y2="42" class="stem-wire" />' +
      '<line x1="124" y1="42" x2="176" y2="42" class="stem-switch" />' +
      '<polyline points="250,42 258,34 266,50 274,34 282,50 290,34 298,50 306,42" class="stem-resistor" />' +
      '<circle cx="366" cy="90" r="20" class="stem-lamp" />' +
      '<line x1="352" y1="76" x2="380" y2="104" class="stem-lamp-cross" />' +
      '<line x1="380" y1="76" x2="352" y2="104" class="stem-lamp-cross" />' +
      '<line x1="178" y1="120" x2="178" y2="148" class="stem-battery-short" />' +
      '<line x1="220" y1="114" x2="220" y2="154" class="stem-battery-long" />' +
      '<text x="110" y="30" class="stem-label">S1</text>' +
      '<text x="274" y="30" class="stem-label">R1</text>' +
      '<text x="386" y="93" class="stem-label stem-label-lamp">L1</text>' +
      '<text x="184" y="168" class="stem-label">E1</text>' +
      '</svg>'
    );
  }

  function normalizeBaseQuestion(raw, idx) {
    var options = Array.isArray(raw.options) ? raw.options : [];
    var source =
      raw &&
      raw.explain &&
      raw.explain.params &&
      raw.explain.params.source
        ? raw.explain.params.source
        : '未标注题源';
    var sourceNo =
      raw &&
      raw.explain &&
      raw.explain.params &&
      raw.explain.params.sourceNo
        ? raw.explain.params.sourceNo
        : idx + 1;
    var rawAnswer = typeof raw.answer === 'string' ? raw.answer.toUpperCase() : '';
    var answer = isChoiceAnswer(rawAnswer) ? rawAnswer : null;

    return {
      id: raw.id || 'Q' + String(idx + 1).padStart(3, '0'),
      chapter: raw.chapter || '未分章',
      source: source,
      sourceNo: sourceNo,
      type: 'single-choice',
      stem: String(raw.stem || ''),
      options: options.map(function clean(opt) {
        return String(opt).replace(/^[A-D]\.\s*/, '');
      }),
      answer: answer,
      gradable: Boolean(answer),
      image: raw.image || null,
      explainText:
        (answer
          ? '正确答案：' +
            answer +
            '。' +
            (raw.chapter ? '本题主要考查「' + raw.chapter + '」。' : '请结合题源复核原卷答案。')
          : '该题暂缺标准答案，建议教师端补录后再用于学生正式计分。')
    };
  }

  function buildTrueFalseFromSingle(single, idx) {
    var optionMap = optionTextMap(single);
    var claimedAnswer = idx % 2 === 0 ? single.answer : ['A', 'B', 'C', 'D'].filter(function keep(v) {
      return v !== single.answer;
    })[idx % 3];
    var isTrue = claimedAnswer === single.answer;

    return {
      id: single.id + '-J',
      chapter: single.chapter,
      source: single.source,
      sourceNo: single.sourceNo,
      type: 'true-false',
      stem: '判断：该题正确选项是 ' + claimedAnswer + '。',
      options: ['正确', '错误'],
      answer: isTrue ? 'T' : 'F',
      image: single.image,
      relatedBaseId: single.id,
      explainText:
        '原题正确选项为 ' +
        single.answer +
        '（' +
        (optionMap[single.answer] || '见原题选项') +
        '）。因此本判断题答案是 ' +
        (isTrue ? '正确' : '错误') +
        '。'
    };
  }

  function pickKeywords(optionText) {
    var text = String(optionText || '').replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g, ' ');
    return text
      .split(/\s+/)
      .filter(function keep(v) {
        return v && v.length >= 2;
      })
      .slice(0, 3);
  }

  function buildShortFromSingle(single) {
    var optionMap = optionTextMap(single);
    var targetText = optionMap[single.answer] || '';
    var keywords = pickKeywords(targetText);

    return {
      id: single.id + '-S',
      chapter: single.chapter,
      source: single.source,
      sourceNo: single.sourceNo,
      type: 'short-answer',
      stem: '简答：请写出本题正确选项，并简述依据（20~80字）。',
      answer: single.answer,
      answerText: targetText,
      keywords: keywords,
      image: single.image,
      relatedBaseId: single.id,
      explainText:
        '参考答案要点：正确选项为 ' +
        single.answer +
        '，关键词可围绕「' +
        (keywords.length ? keywords.join('、') : targetText || '题干条件') +
        '」展开。'
    };
  }

  function buildExtendedBank(baseSingles) {
    // Current rollout keeps all parsed sources as single-choice for stable grading.
    return baseSingles.slice();
  }

  function loadJsonStorage(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) {
        return fallback;
      }
      return JSON.parse(raw);
    } catch (_err) {
      return fallback;
    }
  }

  function saveJsonStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (_err) {
      return;
    }
  }

  function formatRate(stats) {
    if (!stats || !stats.attempts) {
      return '0%';
    }
    return Math.round((stats.correct / stats.attempts) * 100) + '%';
  }

  function normalizeAnswerDisplay(question, value) {
    if (question.type === 'short-answer') {
      return value ? String(value).trim() : '未作答';
    }
    if (!value) {
      return '未作答';
    }
    if (question.type === 'true-false') {
      return value === 'T' ? '正确' : '错误';
    }
    return value;
  }

  function getQuestionMaxScore(question) {
    if (question.type === 'single-choice' && question.gradable === false) {
      return 0;
    }
    return SCORE_RULES[question.type] || 0;
  }

  function hasAnswered(question, value) {
    if (question.type === 'short-answer') {
      return typeof value === 'string' && value.trim().length > 0;
    }
    return typeof value === 'string' && value.length > 0;
  }

  function scoreShortAnswer(question, value) {
    var content = String(value || '').trim();
    if (!content) {
      return {
        score: 0,
        correct: false,
        correctAnswerDisplay: question.answer + '（' + (question.answerText || '见参考答案') + '）'
      };
    }

    var score = 0;
    var upper = content.toUpperCase();
    if (upper.indexOf(question.answer) >= 0) {
      score += 4;
    }
    var keywordHits = (question.keywords || []).filter(function hit(word) {
      return content.indexOf(word) >= 0;
    }).length;
    if (keywordHits >= 2) {
      score += 6;
    } else if (keywordHits === 1) {
      score += 3;
    } else if (content.length >= 24) {
      score += 2;
    }
    if (score > 10) {
      score = 10;
    }
    return {
      score: score,
      correct: score >= 8,
      correctAnswerDisplay: question.answer + '（' + (question.answerText || '见参考答案') + '）'
    };
  }

  function scoreQuestion(question, answerValue) {
    var max = getQuestionMaxScore(question);
    var correctAnswerDisplay = '';
    var score = 0;
    var correct = false;
    var hasKey = question.answer && question.gradable !== false;

    if (question.type === 'single-choice') {
      if (!hasKey) {
        score = 0;
        correct = false;
        correctAnswerDisplay = '待录入标答';
      } else {
        score = answerValue === question.answer ? max : 0;
        correct = score === max;
        correctAnswerDisplay = question.answer;
      }
    } else if (question.type === 'true-false') {
      score = answerValue === question.answer ? max : 0;
      correct = score === max;
      correctAnswerDisplay = question.answer === 'T' ? '正确' : '错误';
    } else if (question.type === 'short-answer') {
      var scored = scoreShortAnswer(question, answerValue);
      score = scored.score;
      correct = scored.correct;
      correctAnswerDisplay = scored.correctAnswerDisplay;
    }

    return {
      id: question.id,
      type: question.type,
      score: score,
      maxScore: max,
      correct: correct,
      studentAnswer: answerValue || '',
      studentAnswerDisplay: normalizeAnswerDisplay(question, answerValue),
      correctAnswerDisplay: correctAnswerDisplay,
      explainText: question.explainText || '暂无解析',
      stem: question.stem,
      source: question.source,
      sourceNo: question.sourceNo
    };
  }

  function evaluatePaper(paperQuestions, answersById) {
    var items = paperQuestions.map(function eachQuestion(question) {
      return scoreQuestion(question, answersById[question.id]);
    });
    var total = items.reduce(function sum(acc, item) {
      return acc + item.score;
    }, 0);
    var maxTotal = items.reduce(function sum(acc, item) {
      return acc + item.maxScore;
    }, 0);
    return {
      totalScore: total,
      maxScore: maxTotal,
      items: items
    };
  }

  function buildDocHtml(questions) {
    var rows = questions.map(function eachQuestion(question, idx) {
      var optionLines = '';
      if (question.type === 'short-answer') {
        optionLines = '<p>作答要求：请写出正确选项并简述依据。</p>';
      } else if (question.type === 'true-false') {
        optionLines = '<p>A. 正确&nbsp;&nbsp;B. 错误</p>';
      } else {
        optionLines = (question.options || [])
          .map(function mapOpt(opt, i) {
            var key = ['A', 'B', 'C', 'D'][i] || String.fromCharCode(65 + i);
            return key + '. ' + opt;
          })
          .join('<br/>');
      }
      return (
        '<div style="margin:0 0 16px 0;">' +
        '<p><strong>' +
        (idx + 1) +
        '. [' +
        TYPE_LABELS[question.type] +
        '] ' +
        question.stem +
        '</strong></p>' +
        '<p style="color:#444;margin:4px 0;">题源：' +
        question.source +
        ' · 原题号 ' +
        question.sourceNo +
        '</p>' +
        '<div>' +
        optionLines +
        '</div>' +
        '</div>'
      );
    });
    return (
      '<html><head><meta charset="utf-8"><title>题库导出</title></head><body>' +
      '<h1>电子电工题库导出</h1>' +
      rows.join('') +
      '</body></html>'
    );
  }

  function downloadBlob(filename, blob) {
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function init(config) {
    var engine = global.QuizEngine;
    var rawBank = global.QuestionBank40 || [];
    if (!engine || !Array.isArray(rawBank) || rawBank.length === 0) {
      throw new Error('DemoV4App initialization failed: missing QuizEngine or QuestionBank40');
    }

    var baseSingles = rawBank.map(normalizeBaseQuestion);
    var allBank = buildExtendedBank(baseSingles);
    var questionById = allBank.reduce(function mapById(acc, q) {
      acc[q.id] = q;
      return acc;
    }, {});

    var sourceFilterSelect = byId('sourceFilterSelect');
    var paperSlotIds = ['paperSlot1', 'paperSlot2', 'paperSlot3', 'paperSlot4'];
    var summaryLabel = byId('summaryLabel');
    var scoreLabel = byId('scoreLabel');
    var modeLabel = byId('modeLabel');
    var pageInfo = byId('pageInfo');
    var questionList = byId('questionList');
    var teacherHint = byId('teacherHint');
    var teacherWorkbench = byId('teacherWorkbench');
    var teacherStatsBar = byId('teacherStatsBar');
    var studentResultCard = byId('studentResultCard');
    var teacherInsightPanel = byId('teacherInsightPanel');
    var analysisGateNotice = byId('analysisGateNotice');
    var analysisControls = byId('analysisControls');
    var analysisStage = byId('analysisStage');
    var analysisQuestionTabs = byId('analysisQuestionTabs');
    var analysisContext = byId('analysisContext');
    var analysisList = byId('analysisList');
    var importStatus = byId('importStatus');
    var importFileInput = byId('importFileInput');
    var analysisSwitchBlade = byId('analysisSwitchBlade');
    var analysisLamp = byId('analysisLamp');
    var analysisFlow = byId('analysisFlow');
    var analysisCurrentLabel = byId('analysisCurrentLabel');
    var switchStateLabel = byId('switchStateLabel');
    var submitBtn = byId('submitPaperBtn');
    var resetBtn = byId('resetPaperBtn');

    var state = {
      themeName: (config && config.themeName) || 'V4 真实题库展示版',
      mode: 'student',
      sourceFilter: 'all',
      paperIds: [],
      answersById: {},
      submitted: false,
      result: null,
      selectedAnalysisQuestionId: null,
      switchClosed: true,
      statsByQuestion: loadJsonStorage('demo_v4_stats', {}),
      importedFiles: loadJsonStorage('demo_v4_import_files', []),
      composeCursor: 0
    };

    function filteredPool() {
      if (state.sourceFilter === 'all') {
        return allBank.slice();
      }
      return allBank.filter(function bySource(question) {
        return question.source === state.sourceFilter;
      });
    }

    function paperQuestions() {
      return state.paperIds
        .map(function mapId(id) {
          return questionById[id];
        })
        .filter(Boolean);
    }

    function makeUniqueSourceList() {
      var seen = {};
      var list = [];
      allBank.forEach(function each(question) {
        if (seen[question.source]) {
          return;
        }
        seen[question.source] = true;
        list.push(question.source);
      });
      return list;
    }

    function importedSourceList() {
      var seen = {};
      var list = [];
      state.importedFiles.forEach(function each(file) {
        var name = String(file.name || '').trim();
        if (!name || seen[name]) {
          return;
        }
        seen[name] = true;
        list.push(name);
      });
      return list;
    }

    function fillSourceFilterOptions() {
      var parsedSources = makeUniqueSourceList();
      var importedSources = importedSourceList().filter(function pending(src) {
        return parsedSources.indexOf(src) === -1;
      });

      var html =
        '<option value="all"' +
        (state.sourceFilter === 'all' ? ' selected' : '') +
        '>全部题源</option>' +
        parsedSources
          .map(function mapSource(src) {
            var selected = src === state.sourceFilter ? 'selected' : '';
            return '<option value="' + escapeHtml(src) + '" ' + selected + '>' + escapeHtml(src) + '</option>';
          })
          .join('');

      if (importedSources.length) {
        html +=
          '<optgroup label="已导入待解析">' +
          importedSources
            .map(function mapPending(src) {
              var value = '__pending__:' + src;
              var selected = value === state.sourceFilter ? 'selected' : '';
              return (
                '<option value="' +
                escapeHtml(value) +
                '" ' +
                selected +
                '>' +
                escapeHtml(src) +
                '（待解析）</option>'
              );
            })
            .join('') +
          '</optgroup>';
      }

      sourceFilterSelect.innerHTML = html;
    }

    function fillSlotOptions() {
      var pool = filteredPool();
      var optionsByType = {
        'single-choice': [],
        'true-false': [],
        'short-answer': []
      };

      pool.forEach(function eachQuestion(question) {
        optionsByType[question.type].push(question);
      });

      paperSlotIds.forEach(function eachSlot(slotId, idx) {
        var select = byId(slotId);
        if (!select) {
          return;
        }
        var html = '<option value="">请选择题目</option>';
        ['single-choice', 'true-false', 'short-answer'].forEach(function eachType(type) {
          if (!optionsByType[type].length) {
            return;
          }
          html += '<optgroup label="' + TYPE_LABELS[type] + '">';
          html += optionsByType[type]
            .map(function mapQuestion(question) {
              var status = question.gradable === false ? '（待标答）' : '';
              return (
                '<option value="' +
                question.id +
                '">' +
                question.id +
                ' · ' +
                clampText(question.stem, 26) +
                status +
                '</option>'
              );
            })
            .join('');
          html += '</optgroup>';
        });
        select.innerHTML = html;
        select.value = state.paperIds[idx] || '';
      });
    }

    function pickFromPool(pool, count, chosen, used) {
      var added = 0;
      for (var i = 0; i < pool.length && added < count; i += 1) {
        var candidate = pool[(state.composeCursor + i) % pool.length];
        if (!candidate || used[candidate.id]) {
          continue;
        }
        used[candidate.id] = true;
        chosen.push(candidate.id);
        added += 1;
      }
    }

    function autoComposePaper() {
      var pool = filteredPool();
      var singles = pool.filter(function f(q) {
        return q.type === 'single-choice' && q.gradable !== false;
      });
      var chosen = [];
      var used = {};

      pickFromPool(singles, 4, chosen, used);

      if (chosen.length < 4) {
        var fallbackSingles = pool.filter(function f(q) {
          return q.type === 'single-choice';
        });
        pickFromPool(fallbackSingles, 4 - chosen.length, chosen, used);
      }
      if (chosen.length < 4) {
        pickFromPool(pool, 4 - chosen.length, chosen, used);
      }
      while (chosen.length < 4 && allBank.length) {
        chosen.push(allBank[chosen.length % allBank.length].id);
      }

      state.composeCursor += 1;
      return chosen.slice(0, 4);
    }

    function clearStudentAttempt() {
      state.answersById = {};
      state.submitted = false;
      state.result = null;
      state.selectedAnalysisQuestionId = null;
      scoreLabel.classList.remove('score-visible');
    }

    function applyPaper(ids) {
      var finalIds = ids.slice(0, 4);
      if (finalIds.length < 4) {
        finalIds = autoComposePaper();
      }
      state.paperIds = finalIds;
      clearStudentAttempt();
      fillSlotOptions();
      renderAll();
    }

    function collectSlotPaperIds() {
      var ids = paperSlotIds
        .map(function getValue(slotId) {
          var select = byId(slotId);
          return select ? select.value : '';
        })
        .filter(function keep(v) {
          return Boolean(v);
        });
      var seen = {};
      return ids.filter(function unique(v) {
        if (seen[v]) {
          return false;
        }
        seen[v] = true;
        return true;
      });
    }

    function buildTypeSummary(result) {
      var base = {
        'single-choice': { score: 0, max: 0 },
        'true-false': { score: 0, max: 0 },
        'short-answer': { score: 0, max: 0 }
      };
      if (!result) {
        return base;
      }
      result.items.forEach(function each(item) {
        base[item.type].score += item.score;
        base[item.type].max += item.maxScore;
      });
      return base;
    }

    function renderStudentResultCard() {
      if (!state.submitted || !state.result) {
        studentResultCard.innerHTML =
          '<div class="result-tip"><strong>学生端说明：</strong>每次仅需完成 4 题，提交后显示总分。</div>';
        return;
      }
      var breakdown = buildTypeSummary(state.result);
      var hasOnlySingle = breakdown['true-false'].max === 0 && breakdown['short-answer'].max === 0;
      studentResultCard.innerHTML =
        '<h3>本次提交总分：' +
        state.result.totalScore +
        ' / ' +
        state.result.maxScore +
        '</h3>' +
        (hasOnlySingle
          ? '<p>选择题：' +
            breakdown['single-choice'].score +
            '/' +
            breakdown['single-choice'].max +
            '</p>'
          : '<p>选择题：' +
            breakdown['single-choice'].score +
            '/' +
            breakdown['single-choice'].max +
            ' · 判断题：' +
            breakdown['true-false'].score +
            '/' +
            breakdown['true-false'].max +
            ' · 简答题：' +
            breakdown['short-answer'].score +
            '/' +
            breakdown['short-answer'].max +
            '</p>') +
        '<p class="result-note">学生端不展示单题解析，请切换到教师端查看。</p>';
    }

  function deriveCircuitMeta(question) {
      var ans = typeof question.answer === 'string' ? question.answer.toUpperCase() : '';
      if (!(ans === 'A' || ans === 'B' || ans === 'C' || ans === 'D' || ans === 'T' || ans === 'F')) {
        return {
          closed: true,
          clockwise: true
        };
      }
      var closed = ans === 'A' || ans === 'B' || ans === 'T';
      var clockwise = ans === 'A' || ans === 'C' || ans === 'T';
      return {
        closed: closed,
        clockwise: clockwise
      };
    }

    function updateAnalysisCircuit(selectedQuestion) {
      if (!selectedQuestion) {
        return;
      }
      var meta = deriveCircuitMeta(selectedQuestion);
      if (state.switchClosed !== true && state.switchClosed !== false) {
        state.switchClosed = meta.closed;
      }

      if (analysisCurrentLabel) {
        analysisCurrentLabel.textContent =
          selectedQuestion.id +
          ' · ' +
          TYPE_LABELS[selectedQuestion.type] +
          ' · 正确答案：' +
          (selectedQuestion.type === 'true-false'
            ? selectedQuestion.answer === 'T'
              ? '正确'
              : '错误'
            : selectedQuestion.answer || '待录入标答');
      }

      if (analysisFlow) {
        analysisFlow.setAttribute(
          'd',
          meta.clockwise
            ? 'M 26 64 C 66 18, 142 18, 176 64'
            : 'M 176 64 C 142 18, 66 18, 26 64'
        );
      }

      if (state.switchClosed) {
        switchStateLabel.textContent = '开关状态：闭合';
        analysisSwitchBlade.setAttribute('x2', '118');
        analysisSwitchBlade.setAttribute('y2', '50');
        analysisLamp.classList.add('lamp-on');
        analysisFlow.classList.add('flow-on');
      } else {
        switchStateLabel.textContent = '开关状态：断开';
        analysisSwitchBlade.setAttribute('x2', '106');
        analysisSwitchBlade.setAttribute('y2', '40');
        analysisLamp.classList.remove('lamp-on');
        analysisFlow.classList.remove('flow-on');
      }
    }

    function renderTeacherInsight() {
      if (state.mode !== 'teacher') {
        teacherInsightPanel.hidden = true;
        analysisControls.style.display = 'none';
        analysisGateNotice.hidden = false;
        analysisGateNotice.textContent = '学生端不展示每道题解析。请切换教师端查看。';
        analysisStage.style.opacity = '0.3';
        analysisList.innerHTML = '';
        analysisQuestionTabs.innerHTML = '';
        analysisContext.innerHTML = '';
        return;
      }

      teacherInsightPanel.hidden = false;
      if (!state.submitted || !state.result) {
        analysisControls.style.display = 'none';
        analysisGateNotice.hidden = false;
        analysisGateNotice.textContent = '教师端：请等待学生提交后查看四道题的正确率与详细解析。';
        analysisStage.style.opacity = '0.3';
        analysisList.innerHTML = '';
        analysisQuestionTabs.innerHTML = '';
        analysisContext.innerHTML = '<p class="result-note">尚无提交记录。</p>';
        return;
      }

      analysisGateNotice.hidden = true;
      analysisStage.style.opacity = '1';
      analysisControls.style.display = 'flex';

      var paper = paperQuestions();
      if (!state.selectedAnalysisQuestionId && paper.length) {
        state.selectedAnalysisQuestionId = paper[0].id;
      }

      analysisQuestionTabs.innerHTML = paper
        .map(function mapTab(question) {
          var active = state.selectedAnalysisQuestionId === question.id ? 'active' : '';
          return (
            '<button class="analysis-tab ' +
            active +
            '" data-analysis-id="' +
            question.id +
            '">' +
            question.id +
            '</button>'
          );
        })
        .join('');

      analysisQuestionTabs.querySelectorAll('.analysis-tab').forEach(function bindTab(btn) {
        btn.addEventListener('click', function onTab() {
          state.selectedAnalysisQuestionId = btn.dataset.analysisId;
          var selected = questionById[state.selectedAnalysisQuestionId];
          var derived = deriveCircuitMeta(selected);
          state.switchClosed = derived.closed;
          updateAnalysisCircuit(selected);
          renderTeacherInsight();
        });
      });

      var selectedQuestion = questionById[state.selectedAnalysisQuestionId];
      updateAnalysisCircuit(selectedQuestion);

      var selectedResult = state.result.items.find(function findItem(item) {
        return item.id === state.selectedAnalysisQuestionId;
      });
      var selectedStats = state.statsByQuestion[state.selectedAnalysisQuestionId] || {
        attempts: 0,
        correct: 0
      };

      analysisContext.innerHTML =
        '<h4>' +
        selectedQuestion.id +
        ' · ' +
        TYPE_LABELS[selectedQuestion.type] +
        '</h4>' +
        '<p>学生作答：' +
        selectedResult.studentAnswerDisplay +
        ' ｜ 正确答案：' +
        selectedResult.correctAnswerDisplay +
        '</p>' +
        '<p>得分：' +
        selectedResult.score +
        '/' +
        selectedResult.maxScore +
        ' ｜ 历史正确率：' +
        formatRate(selectedStats) +
        '（' +
        selectedStats.correct +
        '/' +
        selectedStats.attempts +
        '）</p>' +
        '<p class="analysis-explain">解析：' +
        selectedResult.explainText +
        '</p>';

      analysisList.innerHTML =
        '<h4>四题详细解析</h4>' +
        '<ul>' +
        state.result.items
          .map(function mapItem(item) {
            var q = questionById[item.id];
            var stats = state.statsByQuestion[item.id] || { attempts: 0, correct: 0 };
            return (
              '<li class="analysis-item">' +
              '<div class="analysis-item-head">' +
              '<strong>' +
              item.id +
              ' · ' +
              TYPE_LABELS[item.type] +
              '</strong>' +
              '<span>' +
              item.score +
              '/' +
              item.maxScore +
              '</span>' +
              '</div>' +
              '<p>题干：' +
              clampText(q.stem, 80) +
              '</p>' +
              '<p>学生答案：' +
              item.studentAnswerDisplay +
              ' ｜ 正确答案：' +
              item.correctAnswerDisplay +
              ' ｜ 正确率：' +
              formatRate(stats) +
              '</p>' +
              '<p>解析：' +
              item.explainText +
              '</p>' +
              '</li>'
            );
          })
          .join('') +
        '</ul>';
    }

    function renderTeacherStatsBar() {
      var paper = paperQuestions();
      var byType = {
        'single-choice': 0,
        'true-false': 0,
        'short-answer': 0
      };
      paper.forEach(function each(question) {
        byType[question.type] += 1;
      });
      teacherStatsBar.textContent =
        '当前组卷：选择题 ' +
        byType['single-choice'] +
        ' 题 · 判断题 ' +
        byType['true-false'] +
        ' 题 · 简答题 ' +
        byType['short-answer'] +
        ' 题（共 4 题）';
    }

    function renderQuestionCard(question) {
      var answerValue = state.answersById[question.id] || '';
      var locked = state.mode !== 'student' || state.submitted;
      var typeLabel = TYPE_LABELS[question.type] + ' · ' + getQuestionMaxScore(question) + '分';

      function renderImage() {
        if (question.image) {
          return (
            '<img class="stem-photo" src="' +
            question.image +
            '" alt="' +
            question.id +
            ' 题图" loading="lazy" />'
          );
        }
        return createStaticCircuitSvg(question.id);
      }

      function renderAnswerInputs() {
        if (question.type === 'short-answer') {
          return (
            '<textarea class="answer-textarea" data-question-id="' +
            question.id +
            '" ' +
            (locked ? 'disabled' : '') +
            ' placeholder="请输入简答内容（20~80字）">' +
            (answerValue || '') +
            '</textarea>'
          );
        }

        var options = [];
        if (question.type === 'true-false') {
          options = [
            { key: 'T', text: '正确' },
            { key: 'F', text: '错误' }
          ];
        } else {
          options = (question.options || []).map(function mapOption(text, idx) {
            return {
              key: ['A', 'B', 'C', 'D'][idx] || String.fromCharCode(65 + idx),
              text: text
            };
          });
        }

        return options
          .map(function eachOption(opt) {
            var checked = answerValue === opt.key ? 'checked' : '';
            return (
              '<label class="option-item">' +
              '<input class="answer-radio" type="radio" name="answer-' +
              question.id +
              '" value="' +
              opt.key +
              '" data-question-id="' +
              question.id +
              '" ' +
              checked +
              ' ' +
              (locked ? 'disabled' : '') +
              ' />' +
              '<span class="option-key">' +
              opt.key +
              '</span>' +
              '<span class="option-text">' +
              opt.text +
              '</span>' +
              '</label>'
            );
          })
          .join('');
      }

      return (
        '<article class="question-card">' +
        '<header class="card-head">' +
        '<div class="card-head-left">' +
        '<span class="qid">' +
        question.id +
        '</span>' +
        '<span class="type-chip">' +
        typeLabel +
        '</span>' +
        '</div>' +
        '<span class="chapter">' +
        question.chapter +
        '</span>' +
        '</header>' +
        '<div class="source-meta">题源：' +
        question.source +
        ' · 原题号 ' +
        question.sourceNo +
        '</div>' +
        '<p class="stem-text">' +
        question.stem +
        '</p>' +
        '<div class="stem-image">' +
        renderImage() +
        '</div>' +
        '<div class="options-group">' +
        renderAnswerInputs() +
        '</div>' +
        '</article>'
      );
    }

    function bindQuestionInputs() {
      questionList.querySelectorAll('.answer-radio').forEach(function bindRadio(input) {
        input.addEventListener('change', function onRadio() {
          state.answersById[input.dataset.questionId] = input.value;
          renderSummary();
        });
      });

      questionList.querySelectorAll('.answer-textarea').forEach(function bindTextArea(textarea) {
        textarea.addEventListener('input', function onInput() {
          state.answersById[textarea.dataset.questionId] = textarea.value;
          renderSummary();
        });
      });
    }

    function renderQuestionList() {
      questionList.innerHTML = paperQuestions().map(renderQuestionCard).join('');
      bindQuestionInputs();
    }

    function renderSummary() {
      var paper = paperQuestions();
      var answered = paper.reduce(function count(acc, question) {
        return hasAnswered(question, state.answersById[question.id]) ? acc + 1 : acc;
      }, 0);
      var allSingle = paper.length > 0
        ? paper.every(function each(question) {
            return question.type === 'single-choice';
          })
        : true;
      summaryLabel.textContent =
        state.themeName +
        ' · 已作答 ' +
        answered +
        '/4 题 · 计分规则：选择2分 / 判断1分 / 简答10分';
      if (allSingle) {
        summaryLabel.textContent =
          state.themeName + ' · 已作答 ' + answered + '/4 题 · 计分规则：选择2分（本卷全为选择题）';
      }

      pageInfo.textContent = '固定试卷 · 4 题';
      modeLabel.textContent = state.mode === 'teacher' ? '教师模式' : '学生模式';
      byId('modeStudentBtn').classList.toggle('active', state.mode === 'student');
      byId('modeTeacherBtn').classList.toggle('active', state.mode === 'teacher');
    }

    function updateScoreLabel() {
      if (state.submitted && state.result) {
        scoreLabel.textContent =
          '本次总分：' + state.result.totalScore + '/' + state.result.maxScore;
        scoreLabel.classList.add('score-visible');
      } else {
        scoreLabel.textContent = '本次总分：待提交';
        scoreLabel.classList.remove('score-visible');
      }
    }

    function renderImportStatus() {
      if (!state.importedFiles.length) {
        importStatus.textContent = '导入状态：暂无文件。支持 .doc/.docx/.pdf';
        return;
      }
      var recent = state.importedFiles
        .slice(0, 3)
        .map(function mapFile(item) {
          return item.name;
        })
        .join('；');
      importStatus.textContent =
        '已接收 ' +
        state.importedFiles.length +
        ' 个文件（demo记录）：' +
        recent +
        '。新题源会显示在筛选下拉中（待解析标记）。';
    }

    function renderModePanels() {
      var teacher = state.mode === 'teacher';
      teacherHint.hidden = !teacher;
      teacherWorkbench.hidden = !teacher;
      submitBtn.hidden = !(!state.submitted && state.mode === 'student');
      resetBtn.hidden = !(state.mode === 'student');
      renderStudentResultCard();
      renderTeacherStatsBar();
      renderTeacherInsight();
    }

    function renderAll() {
      renderQuestionList();
      renderSummary();
      updateScoreLabel();
      renderModePanels();
      renderImportStatus();
    }

    function updateStats(result) {
      result.items.forEach(function eachItem(item) {
        if (!state.statsByQuestion[item.id]) {
          state.statsByQuestion[item.id] = { attempts: 0, correct: 0 };
        }
        state.statsByQuestion[item.id].attempts += 1;
        if (item.correct) {
          state.statsByQuestion[item.id].correct += 1;
        }
      });
      saveJsonStorage('demo_v4_stats', state.statsByQuestion);
    }

    function submitPaper() {
      if (state.mode !== 'student' || state.submitted) {
        return;
      }
      var paper = paperQuestions();
      var pendingKey = paper.filter(function findPendingKey(question) {
        return question.type === 'single-choice' && question.gradable === false;
      });
      if (pendingKey.length) {
        alert('当前试卷含待标答题，请在教师端重新组卷后再提交。');
        return;
      }
      var unanswered = paper.filter(function findUnanswered(question) {
        return !hasAnswered(question, state.answersById[question.id]);
      });
      if (unanswered.length) {
        alert('请先完成全部 4 道题后再提交。');
        return;
      }
      state.result = evaluatePaper(paper, state.answersById);
      state.submitted = true;
      state.selectedAnalysisQuestionId = paper[0] ? paper[0].id : null;
      state.switchClosed = undefined;
      updateStats(state.result);
      renderAll();
    }

    function resetPaper() {
      clearStudentAttempt();
      renderAll();
    }

    function importFiles() {
      var files = Array.prototype.slice.call(importFileInput.files || []);
      if (!files.length) {
        alert('请先选择要导入的 .doc/.docx/.pdf 文件。');
        return;
      }
      var accepted = files.filter(function filterFile(file) {
        return /\.(doc|docx|pdf)$/i.test(file.name);
      });
      if (!accepted.length) {
        alert('当前仅支持 .doc/.docx/.pdf 文件。');
        return;
      }
      accepted.forEach(function pushFile(file) {
        state.importedFiles.unshift({
          name: file.name,
          size: file.size,
          importedAt: new Date().toISOString()
        });
      });
      state.importedFiles = state.importedFiles.slice(0, 30);
      saveJsonStorage('demo_v4_import_files', state.importedFiles);
      importFileInput.value = '';
      fillSourceFilterOptions();
      renderImportStatus();
    }

    function exportDoc() {
      var html = buildDocHtml(allBank);
      var blob = new Blob([html], {
        type: 'application/msword'
      });
      downloadBlob('电子电工题库导出.doc', blob);
    }

    function exportPdf() {
      var paper = paperQuestions();
      var html =
        '<html><head><meta charset="utf-8"><title>组卷导出 PDF</title></head><body>' +
        '<h1>电子电工四题组卷（教师端）</h1>' +
        buildDocHtml(paper) +
        '<p>注：点击打印后可选择“另存为 PDF”。</p>' +
        '</body></html>';
      var win = window.open('', '_blank');
      if (!win) {
        alert('浏览器拦截了弹窗，请允许后重试导出 PDF。');
        return;
      }
      win.document.write(html);
      win.document.close();
      win.focus();
      win.print();
    }

    byId('modeStudentBtn').addEventListener('click', function toStudent() {
      state.mode = 'student';
      renderAll();
    });

    byId('modeTeacherBtn').addEventListener('click', function toTeacher() {
      state.mode = 'teacher';
      renderAll();
    });

    byId('applyFilterBtn').addEventListener('click', function applyFilter() {
      var selected = sourceFilterSelect.value || 'all';
      if (selected.indexOf('__pending__:') === 0) {
        alert('该题源已导入，但尚未解析为题目。当前先使用已解析题源。');
        state.sourceFilter = 'all';
        sourceFilterSelect.value = 'all';
      } else {
        state.sourceFilter = selected;
      }
      fillSlotOptions();
      var autoIds = autoComposePaper();
      paperSlotIds.forEach(function setSlot(slotId, idx) {
        byId(slotId).value = autoIds[idx] || '';
      });
    });

    byId('autoAssembleBtn').addEventListener('click', function autoAssemble() {
      var autoIds = autoComposePaper();
      paperSlotIds.forEach(function setSlot(slotId, idx) {
        byId(slotId).value = autoIds[idx] || '';
      });
    });

    byId('applyPaperBtn').addEventListener('click', function applyPaperBtn() {
      applyPaper(collectSlotPaperIds());
    });

    byId('importBtn').addEventListener('click', importFiles);
    byId('exportDocBtn').addEventListener('click', exportDoc);
    byId('exportPdfBtn').addEventListener('click', exportPdf);

    submitBtn.addEventListener('click', submitPaper);
    resetBtn.addEventListener('click', resetPaper);

    byId('toggleAnimBtn').addEventListener('click', function toggleSwitch() {
      state.switchClosed = !state.switchClosed;
      var selected = questionById[state.selectedAnalysisQuestionId];
      if (selected) {
        updateAnalysisCircuit(selected);
      }
    });

    fillSourceFilterOptions();
    var initialPaper = autoComposePaper();
    state.paperIds = initialPaper;
    fillSlotOptions();
    renderAll();
  }

  global.DemoV4App = {
    init: init
  };
})(typeof window !== 'undefined' ? window : globalThis);
