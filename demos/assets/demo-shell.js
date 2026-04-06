(function initDemoShell(global) {
  'use strict';

  function byId(id) {
    return document.getElementById(id);
  }

  function staticCircuitSvg(questionId) {
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
      '<text x="356" y="120" class="stem-label">L1</text>' +
      '<text x="184" y="168" class="stem-label">E1</text>' +
      '</svg>'
    );
  }

  function createQuestionCard(question, answerValue) {
    function renderStemVisual() {
      if (question.image) {
        return (
          '<img class="stem-photo" src="' +
          question.image +
          '" alt="' +
          question.id +
          ' 题图" loading="lazy" style="width:100%;height:auto;display:block;object-fit:contain;border-radius:6px;" />'
        );
      }
      return staticCircuitSvg(question.id);
    }

    var optionsMarkup = question.options
      .map(function eachOption(optionText, idx) {
        var optionKey = ['A', 'B', 'C', 'D'][idx] || String.fromCharCode(65 + idx);
        var checked = answerValue === optionKey ? 'checked' : '';
        return (
          '<label class="option-item">' +
          '<input type="radio" name="answer-' + question.id + '" data-question-id="' + question.id + '" value="' + optionKey + '" ' + checked + ' />' +
          '<span class="option-key">' + optionKey + '</span>' +
          '<span class="option-text">' + optionText.replace(/^[A-D]\.\s*/, '') + '</span>' +
          '</label>'
        );
      })
      .join('');

    var sourceMeta = '';
    if (
      question.explain &&
      question.explain.params &&
      question.explain.params.source &&
      question.explain.params.sourceNo
    ) {
      sourceMeta =
        '<div class="source-meta">题源：' +
        question.explain.params.source +
        ' · 原题号 ' +
        question.explain.params.sourceNo +
        '</div>';
    }

    return (
      '<article class="question-card">' +
      '<header class="card-head">' +
      '<span class="qid">' + question.id + '</span>' +
      '<span class="chapter">' + question.chapter + '</span>' +
      '</header>' +
      sourceMeta +
      '<p class="stem-text">' + question.stem + '</p>' +
      '<div class="stem-image">' + renderStemVisual() + '</div>' +
      '<div class="options-group">' + optionsMarkup + '</div>' +
      '</article>'
    );
  }

  function init(config) {
    var engine = global.QuizEngine;
    var questions = global.QuestionBank40 || [];

    if (!engine || !Array.isArray(questions) || questions.length === 0) {
      throw new Error('DemoShell initialization failed: missing QuizEngine or QuestionBank40');
    }

    var state = {
      themeName: (config && config.themeName) || 'Demo',
      mode: 'student',
      page: 1,
      pageSize: 4,
      answersById: {},
      submittedPages: {},
      scoreByPage: {},
      timerSeconds: 45 * 60,
      timerId: null,
      switchClosed: true,
      lastScore: null
    };

    var questionList = byId('questionList');
    var pageInfo = byId('pageInfo');
    var summaryLabel = byId('summaryLabel');
    var scoreLabel = byId('scoreLabel');
    var timerLabel = byId('timerLabel');
    var modeLabel = byId('modeLabel');
    var teacherHint = byId('teacherHint');
    var switchStateLabel = byId('switchStateLabel');
    var analysisStage = document.querySelector('.analysis-stage');
    var analysisControls = document.querySelector('.analysis-controls');
    var analysisSwitchBlade = byId('analysisSwitchBlade');
    var analysisLamp = byId('analysisLamp');
    var analysisFlow = byId('analysisFlow');
    var analysisGateNotice = byId('analysisGateNotice');

    if (!analysisGateNotice && analysisStage && analysisStage.parentNode) {
      analysisGateNotice = document.createElement('div');
      analysisGateNotice.id = 'analysisGateNotice';
      analysisGateNotice.style.border = '1px dashed #c9b08f';
      analysisGateNotice.style.background = '#fff6e9';
      analysisGateNotice.style.borderRadius = '10px';
      analysisGateNotice.style.padding = '9px 10px';
      analysisGateNotice.style.marginBottom = '10px';
      analysisGateNotice.style.fontSize = '13px';
      analysisGateNotice.textContent = '请先完成本页作答并点击“提交本页”，再查看解析演示。';
      analysisStage.parentNode.insertBefore(analysisGateNotice, analysisStage);
    }

    function answersFor(items) {
      return items.reduce(function collect(acc, question) {
        acc[question.id] = state.answersById[question.id];
        return acc;
      }, {});
    }

    function formatScoreText(result) {
      return (
        '本页得分：' +
        result.correct +
        '/' +
        result.total +
        '（正确率 ' +
        result.scoreRate +
        '%）'
      );
    }

    function setAnalysisGate(locked) {
      if (analysisGateNotice) {
        analysisGateNotice.hidden = !locked;
      }
      if (analysisStage) {
        analysisStage.style.opacity = locked ? '0.28' : '1';
        analysisStage.style.filter = locked ? 'grayscale(0.65)' : 'none';
        analysisStage.style.pointerEvents = locked ? 'none' : 'auto';
      }
      if (analysisControls) {
        analysisControls.style.display = locked ? 'none' : 'flex';
      }
    }

    function renderQuestions() {
      var pageData = engine.paginate(questions, state.page, state.pageSize);
      state.page = pageData.page;

      questionList.innerHTML = pageData.items
        .map(function mapCard(question) {
          return createQuestionCard(question, state.answersById[question.id]);
        })
        .join('');

      pageInfo.textContent = '第 ' + pageData.page + ' / ' + pageData.totalPages + ' 页';
      byId('prevBtn').disabled = pageData.page <= 1;
      byId('nextBtn').disabled = pageData.page >= pageData.totalPages;

      questionList.querySelectorAll('input[type="radio"]').forEach(function bindOption(inputEl) {
        inputEl.addEventListener('change', function onChange(event) {
          var target = event.target;
          state.answersById[target.dataset.questionId] = target.value;
          updateSummary();
        });
      });

      byId('submitPageBtn').onclick = function submitPage() {
        var result = engine.scoreBatch(pageData.items, answersFor(pageData.items));
        state.lastScore = result;
        state.submittedPages[String(pageData.page)] = true;
        state.scoreByPage[String(pageData.page)] = result;
        scoreLabel.textContent = formatScoreText(result);
        scoreLabel.classList.add('score-visible');
        setAnalysisGate(false);
      };

      if (engine.canViewAnalysis(state.submittedPages, pageData.page)) {
        var savedScore = state.scoreByPage[String(pageData.page)];
        if (savedScore) {
          scoreLabel.textContent = formatScoreText(savedScore);
          scoreLabel.classList.add('score-visible');
        } else {
          scoreLabel.textContent = '本页得分：已提交';
          scoreLabel.classList.remove('score-visible');
        }
        setAnalysisGate(false);
      } else {
        scoreLabel.textContent = '本页得分：待提交';
        scoreLabel.classList.remove('score-visible');
        setAnalysisGate(true);
      }

      updateSummary();
    }

    function updateSummary() {
      var answered = engine.countAnswered(questions, state.answersById);
      summaryLabel.textContent =
        state.themeName + ' · 已作答 ' + answered + '/' + questions.length + ' 题 · 每页 4 题';
    }

    function updateMode() {
      modeLabel.textContent = engine.getModeLabel(state.mode);
      byId('modeStudentBtn').classList.toggle('active', state.mode === 'student');
      byId('modeTeacherBtn').classList.toggle('active', state.mode === 'teacher');
      teacherHint.hidden = state.mode !== 'teacher';
    }

    function updateAnalysis() {
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

    function tickTimer() {
      state.timerSeconds = Math.max(0, state.timerSeconds - 1);
      timerLabel.textContent = engine.formatTimer(state.timerSeconds);
      if (state.timerSeconds === 0) {
        clearInterval(state.timerId);
        state.timerId = null;
      }
    }

    byId('prevBtn').addEventListener('click', function prevPage() {
      state.page -= 1;
      renderQuestions();
    });

    byId('nextBtn').addEventListener('click', function nextPage() {
      state.page += 1;
      renderQuestions();
    });

    byId('modeStudentBtn').addEventListener('click', function toStudent() {
      state.mode = 'student';
      updateMode();
    });

    byId('modeTeacherBtn').addEventListener('click', function toTeacher() {
      state.mode = 'teacher';
      updateMode();
    });

    byId('toggleAnimBtn').addEventListener('click', function toggleSwitch() {
      state.switchClosed = !state.switchClosed;
      updateAnalysis();
    });

    timerLabel.textContent = engine.formatTimer(state.timerSeconds);
    renderQuestions();
    updateMode();
    updateAnalysis();

    state.timerId = setInterval(tickTimer, 1000);
  }

  global.DemoShell = {
    init: init
  };
})(typeof window !== 'undefined' ? window : globalThis);
