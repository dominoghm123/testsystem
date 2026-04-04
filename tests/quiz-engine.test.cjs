const test = require('node:test');
const assert = require('node:assert/strict');

const engine = require('../demos/assets/quiz-engine.js');

test('paginate should clamp page bounds and slice items', () => {
  const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  const pageData = engine.paginate(items, 99, 4);

  assert.equal(pageData.page, 2);
  assert.equal(pageData.totalPages, 2);
  assert.deepEqual(pageData.items, ['e', 'f', 'g']);
});

test('paginate should handle invalid input safely', () => {
  const pageData = engine.paginate(null, -1, 0);

  assert.equal(pageData.page, 1);
  assert.equal(pageData.pageSize, 4);
  assert.equal(pageData.totalPages, 1);
  assert.equal(pageData.totalItems, 0);
  assert.deepEqual(pageData.items, []);
});

test('scoreBatch should calculate correct, wrong and unanswered', () => {
  const questions = [
    { id: 'Q001', answer: 'A' },
    { id: 'Q002', answer: 'B' },
    { id: 'Q003', answer: 'C' }
  ];
  const result = engine.scoreBatch(questions, { Q001: 'A', Q002: 'D' });

  assert.equal(result.total, 3);
  assert.equal(result.correct, 1);
  assert.equal(result.wrong, 1);
  assert.equal(result.unanswered, 1);
  assert.equal(result.scoreRate, 33);
  assert.deepEqual(result.wrongIds, ['Q002']);
  assert.deepEqual(result.unansweredIds, ['Q003']);
});

test('timer and answered helpers should work', () => {
  assert.equal(engine.formatTimer(3661), '01:01:01');
  assert.equal(engine.formatTimer(-1), '00:00:00');

  const questions = [{ id: 'Q001' }, { id: 'Q002' }, { id: 'Q003' }];
  const answered = engine.countAnswered(questions, { Q001: 'A', Q003: 'C' });
  assert.equal(answered, 2);
});

test('getModeLabel should map teacher and fallback to student', () => {
  assert.equal(engine.getModeLabel('teacher'), '教师模式');
  assert.equal(engine.getModeLabel('student'), '学生模式');
  assert.equal(engine.getModeLabel('unknown'), '学生模式');
});

test('canViewAnalysis should require submitted state per page', () => {
  assert.equal(engine.canViewAnalysis({}, 1), false);
  assert.equal(engine.canViewAnalysis({ '1': true }, 1), true);
  assert.equal(engine.canViewAnalysis({ '2': true }, 1), false);
  assert.equal(engine.canViewAnalysis(null, 1), false);
});
