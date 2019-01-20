/* eslint-disable no-undef */
// 被测试的文件
var addNum = require('../src/mytest/index')
// 引入assert的语法
var assert = require('chai').assert

describe('测试index.js', function () {
  describe('测试addNum函数', function () {
    it('两数相加结果为两个数字的和', function () {
      if (addNum(1, 2) !== 3) {
        // throw new Error('两数相加结果不为两个数字的和')
        // expect(addNum(1,2)).to.be.equal(3);
        // 断言知否相等
        assert.equal(addNum(1,2),3);
      }
    })
  })
})
