var allTestFiles = []
var TEST_REGEXP = /(spec|test)\.js$/i

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '')
    allTestFiles.push(normalizedTestModule)
  }
})

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
})

/* eslint-disable no-undef */
// 被测试的文件
// var addNum = require('src/mytest/index')
// 引入assert的语法
// var assert = require('chai').assert

describe('测试index.js', function () {
  describe('测试addNum函数', function () {
    it('两数相加结果为两个数字的和', function () {
      if (addNum(1, 2) !== 3) {
        // throw new Error('两数相加结果不为两个数字的和')
        // expect(addNum(1,2)).to.be.equal(3);
        // 断言知否相等
        console.log(1);
        assert.equal(addNum(1, 2), 3)
        }
    })
  })
})
