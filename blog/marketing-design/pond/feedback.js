// 定义数据模型
// let feedback = {
//     // 反馈类型
//     type: null,
//     // 反馈消息
//     message: null
// }

// 缓存数据
let feedbackArr = []

class Feedback {

    // 设置限制的一项值
    setFeedback(options) {
        feedbackArr.push({
            type: options.type,
            message: options.message
        })
    }

    getFeedback() {
        console.log('>>>', feedbackArr)
        return feedbackArr;
    }

}

module.exports = Feedback;