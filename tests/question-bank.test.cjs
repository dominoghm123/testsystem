const test = require('node:test');
const assert = require('node:assert/strict');

delete global.QuestionBank40;
require('../demos/assets/question-bank-40.js');

test('question-bank should expose 40 questions on global', () => {
  assert.ok(Array.isArray(global.QuestionBank40));
  assert.equal(global.QuestionBank40.length, 40);
});

test('question items should have expected schema and ids', () => {
  const ids = new Set();

  for (const question of global.QuestionBank40) {
    assert.equal(typeof question.id, 'string');
    assert.equal(typeof question.chapter, 'string');
    assert.equal(question.type, 'single-choice');
    assert.equal(typeof question.stem, 'string');
    assert.ok(Array.isArray(question.options));
    assert.equal(question.options.length, 4);
    assert.ok(['A', 'B', 'C', 'D'].includes(question.answer));
    assert.ok(question.explain && typeof question.explain === 'object');
    ids.add(question.id);
  }

  assert.equal(ids.size, 40);
  assert.ok(ids.has('Q001'));
  assert.ok(ids.has('Q040'));
});
