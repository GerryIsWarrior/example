let benefit = {
    // 减免金额
    money: null
}

class Benefit {
    // 新增限制
    addBenefit(key) {
        benefit[key] = null
    }

    // 删除限制
    delBenefit(key) {
        delete benefit[key]
    }

    // 设置限制的一项值
    setBenefitValue(key, value) {
        benefit[key] = value
    }

    getBenefit() {
        let _output = {}
        for (let key in benefit) {
            if (benefit[key] !== null) _output[key] = benefit[key];
        }
        return _output
    }
}

module.exports = Benefit;