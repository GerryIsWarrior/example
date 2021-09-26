let limit = {
    // 时间
    time: null,
    // 地点
    address: null,
    // 人群
    people: null,
    // 渠道
    channel: null
}

class Limit {
    // 新增限制
    addLimit(key) {
        limit[key] = null
    }

    // 删除限制
    delLimit(key) {
        delete limit[key]
    }

    // 设置限制的一项值
    setLimitValue(key, value) {
        limit[key] = value
    }

    getLimit() {
        let _output = {}
        for (let key in limit) {
            if (limit[key] !== null) _output[key] = limit[key];
        }
        return _output
    }

}

module.exports = Limit;