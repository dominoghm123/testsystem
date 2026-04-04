(function initQuizEngine(global) {
  'use strict';

  function normalizePage(page, totalPages) {
    if (!Number.isFinite(page)) {
      return 1;
    }
    if (page < 1) {
      return 1;
    }
    if (page > totalPages) {
      return totalPages;
    }
    return Math.floor(page);
  }

  function paginate(items, page, pageSize) {
    var safeItems = Array.isArray(items) ? items : [];
    var safePageSize = pageSize > 0 ? Math.floor(pageSize) : 4;
    var totalPages = Math.max(1, Math.ceil(safeItems.length / safePageSize));
    var safePage = normalizePage(page, totalPages);
    var start = (safePage - 1) * safePageSize;
    var end = start + safePageSize;

    return {
      page: safePage,
      pageSize: safePageSize,
      totalPages: totalPages,
      totalItems: safeItems.length,
      items: safeItems.slice(start, end)
    };
  }

  function scoreBatch(questions, answersById) {
    var safeQuestions = Array.isArray(questions) ? questions : [];
    var safeAnswers = answersById || {};
    var correct = 0;
    var wrongIds = [];
    var unansweredIds = [];

    safeQuestions.forEach(function eachQuestion(question) {
      var answer = safeAnswers[question.id];
      if (!answer) {
        unansweredIds.push(question.id);
        return;
      }

      if (answer === question.answer) {
        correct += 1;
      } else {
        wrongIds.push(question.id);
      }
    });

    return {
      total: safeQuestions.length,
      correct: correct,
      wrong: wrongIds.length,
      unanswered: unansweredIds.length,
      scoreRate: safeQuestions.length === 0 ? 0 : Math.round((correct / safeQuestions.length) * 100),
      wrongIds: wrongIds,
      unansweredIds: unansweredIds
    };
  }

  function formatTimer(totalSeconds) {
    var safe = Math.max(0, Number.isFinite(totalSeconds) ? Math.floor(totalSeconds) : 0);
    var hour = String(Math.floor(safe / 3600)).padStart(2, '0');
    var minute = String(Math.floor((safe % 3600) / 60)).padStart(2, '0');
    var second = String(safe % 60).padStart(2, '0');
    return hour + ':' + minute + ':' + second;
  }

  function countAnswered(questions, answersById) {
    var safeQuestions = Array.isArray(questions) ? questions : [];
    var safeAnswers = answersById || {};
    return safeQuestions.reduce(function count(acc, question) {
      return safeAnswers[question.id] ? acc + 1 : acc;
    }, 0);
  }

  function getModeLabel(mode) {
    if (mode === 'teacher') {
      return '教师模式';
    }
    return '学生模式';
  }

  function canViewAnalysis(submittedPagesByPage, page) {
    if (!submittedPagesByPage) {
      return false;
    }
    return submittedPagesByPage[String(page)] === true;
  }

  var api = {
    paginate: paginate,
    scoreBatch: scoreBatch,
    formatTimer: formatTimer,
    countAnswered: countAnswered,
    getModeLabel: getModeLabel,
    canViewAnalysis: canViewAnalysis
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }

  global.QuizEngine = api;
})(typeof window !== 'undefined' ? window : globalThis);
