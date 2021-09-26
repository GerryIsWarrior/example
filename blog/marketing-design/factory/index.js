/**
 * 组装更灵活可操作的活动
 *  - 该类依赖上游打散的数据集合
 *  - 该类将上游数据进行组合出新的活动类型
 * */

const Limit = require('../pond/limit')
const Rule = require('../pond/rule')
const Benefit = require('../pond/benefit')
const Feedback = require('../pond/feedback')

let _activity = [];

class Activity {
    constructor() {
        this._limit = new Limit();
        this._rule = new Rule();
        this._benefit = new Benefit();
        this._feedback = new Feedback();
        this._cache = {
            limit: {},
            rule: {},
            benefit: {},
            feedback: []
        }
    }

    getLimit() {
        return this._limit;
    }

    setLimit(obj) {
        this._cache.limit = obj;
    }

    getRule() {
        return this._rule
    }

    setRule(obj) {
        this._cache.rule = obj;
    }

    getBenefit() {
        return this._benefit
    }

    setBenefit(obj) {
        this._cache.benefit = obj;
    }

    getFeedback() {
        return this._feedback
    }

    setFeedback(key,obj) {
        _activity[key].feedback = _activity[key].feedback.concat(obj);
    }

    generate(){
        let _temp = Object.assign({}, this._cache);
        _activity.push(_temp);
        this._cache = {};
        return {
            id: _activity.length - 1,
            data: _temp
        };
    }

    getActivityList(){
        return _activity;
    }

}

module.exports = Activity;