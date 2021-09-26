// 运行于调试
const Activity = require('../factory/index')

// case 2
let _case2 = new Activity();
// 设置限制
_case2.getLimit().setLimitValue('time', '2021-09-19');
_case2.getLimit().setLimitValue('address', '哔哩哔哩APP');
_case2.getLimit().setLimitValue('people', '已注册用户');
_case2.getLimit().setLimitValue('channel', '会员购');
_case2.getLimit().addLimit('platform');
_case2.getLimit().setLimitValue('platform', '安卓');
_case2.getLimit().addLimit('scene');
_case2.getLimit().setLimitValue('scene', '主会场');
_case2.getLimit().addLimit('category');
_case2.getLimit().setLimitValue('category', '手办');

_case2.setLimit(_case2.getLimit().getLimit())
// 设置门槛
_case2.getRule().setRuleValue('orderNumber', '10000');
_case2.getRule().addRule('sort');
_case2.getRule().setRuleValue('sort', '100');
_case2.getRule().addRule('payTime');
_case2.getRule().setRuleValue('payTime', '60');
_case2.getRule().setRuleValue('consumption', '1000');
_case2.setRule(_case2.getRule().getRule())

// 设置权益
_case2.getBenefit().setBenefitValue('money', 200);
_case2.getBenefit().addBenefit('coupons');
_case2.getBenefit().setBenefitValue('coupons', '满500-100券');
_case2.setBenefit(_case2.getBenefit().getBenefit())

// 生成活动
let _res = _case2.generate();
// 模拟反馈
_case2.getFeedback().setFeedback({
    type: 'message',
    message: '哇塞，抢到了，不过有点难抢哦！'
})

_case2.setFeedback(_res.id, _case2.getFeedback().getFeedback());

console.log(_case2.getActivityList());
console.log(JSON.stringify(_case2.getActivityList()));