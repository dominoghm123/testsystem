const test = require('node:test');
const assert = require('node:assert/strict');

delete global.QuestionBank40;
require('../demos/assets/question-bank-40.js');

test('question-bank should expose parsed questions on global', () => {
  assert.ok(Array.isArray(global.QuestionBank40));
  assert.ok(global.QuestionBank40.length >= 40);
});

test('question items should have expected schema and ids', () => {
  const ids = new Set();
  let gradableCount = 0;

  for (const question of global.QuestionBank40) {
    assert.equal(typeof question.id, 'string');
    assert.equal(typeof question.chapter, 'string');
    assert.equal(question.type, 'single-choice');
    assert.equal(typeof question.stem, 'string');
    assert.ok(Array.isArray(question.options));
    assert.equal(question.options.length, 4);
    assert.ok(
      question.answer === null || question.answer === undefined || ['A', 'B', 'C', 'D'].includes(question.answer)
    );
    if (['A', 'B', 'C', 'D'].includes(question.answer)) {
      gradableCount += 1;
    }
    assert.ok(question.explain && typeof question.explain === 'object');
    ids.add(question.id);
  }

  assert.equal(ids.size, global.QuestionBank40.length);
  assert.ok(gradableCount > 0);
  assert.ok(ids.has('Q001'));
  const lastId = `Q${String(global.QuestionBank40.length).padStart(3, '0')}`;
  assert.ok(ids.has(lastId));
});
