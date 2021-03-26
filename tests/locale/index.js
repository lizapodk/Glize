import * as assert from 'assert';
import * as locale from '../../src/locale/index.js';

const runTests = () => {
  testGetWeekNames();
  testGetMonthNames();
  testGetMonthName();
  testGetMonthByName();
};

const testGetWeekNames = () => {
  const expect = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const result = locale.getWeekNames();
  assert.equal(expect.length, result.length);
  assert.equal(expect.toString(), result.toString());
};

const testGetMonthNames = () => {
  const expect = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November',
                  'December'];
  const result = locale.getMonthNames();
  assert.equal(expect.length, result.length);
  assert.equal(expect.toString(), result.toString());
};

const testGetMonthName = () => {
  const expect = 'June';
  const result = locale.getMonthName(new Date(2013, 5, 1));
  assert.equal(expect.length, result.length);
  assert.equal(expect.toString(), result.toString());
};

const testGetMonthByName = () => {
  const expect = 5;
  const result = locale.getMonthByName('June');
  assert.equal(expect, result);
};

runTests();
