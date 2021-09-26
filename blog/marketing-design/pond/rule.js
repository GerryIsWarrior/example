let rule = {
    // 消费金额
    consumption: null,
    // 订单数量
    orderNumber: null
}

class Rule {
    // 新增限制
    addRule(key) {
        rule[key] = null
    }

    // 删除限制
    delRule(key) {
        delete rule[key]
    }

    // 设置限制的一项值
    setRuleValue(key, value) {
        rule[key] = value
    }

    getRule() {
        let _output = {}
        for (let key in rule) {
            if (rule[key] !== null) _output[key] = rule[key];
        }
        return _output
    }
}

module.exports = Rule;