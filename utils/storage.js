/**
 * 本地存储工具模块
 */

const STORAGE_KEYS = {
  SLEEP_TIP_INDEX: 'sleep_tip_index',
  // 可以添加其他存储键
};

const sleepTips = [
  '成年人每天建议睡眠 7-9 小时，规律作息更重要',
  '睡前 1 小时避免使用电子设备，蓝光会抑制褪黑素分泌',
  '卧室温度保持在 18-22°C 最有利于入睡',
  '午睡时间控制在 20-30 分钟，避免进入深度睡眠',
  '睡前避免咖啡因和大量饮水，减少夜间醒来次数',
  '固定的睡眠时间表能帮助身体建立生物钟',
  '睡前可以进行放松活动，如阅读、冥想或温水浴',
  '如果 20 分钟内无法入睡，起床做些轻松的事再回来',
  '睡眠负债会累积，周末补觉不能完全弥补工作日缺失',
  '深度睡眠主要发生在前半夜，早睡更有利于身体修复',
  '每天同一时间起床，包括周末，有助于稳定生物钟',
  '早晨接受自然光照射 10-30 分钟，帮助调节昼夜节律',
  '睡前 3 小时避免剧烈运动，以免身体过于兴奋',
  '卧室应保持黑暗，可使用遮光窗帘或眼罩',
  '降低噪音干扰，可使用耳塞或白噪音设备',
  '下午 2 点后避免饮用咖啡、浓茶等含咖啡因饮品',
  '晚餐不宜过饱，睡前 2-3 小时完成进食',
  '睡前温水泡脚 15-20 分钟，有助于放松身心',
  '练习深呼吸或渐进式肌肉放松，缓解睡前紧张',
  '将待办事项写在纸上，清空大脑后再上床',
  '规律进行有氧运动，如快走、慢跑、游泳，改善睡眠质量',
  '避免睡前饮酒，酒精会破坏睡眠结构',
  '睡前听轻音乐或白噪音，帮助身心放松',
  '保持卧室通风，新鲜空气有助于睡眠',
  '选择合适的枕头和床垫，支撑颈椎和脊柱',
  '睡前避免激烈讨论或思考复杂问题',
  '建立固定的睡前仪式，让身体知道该休息了',
  '夜间醒来不要看时间，避免增加焦虑',
  '老年人睡眠需求略少，但仍需保证 6-7 小时',
  '青少年需要 8-10 小时睡眠，正处于生长发育期',
  '孕妇睡眠需求增加，建议左侧卧位更舒适',
  '睡前避免大量饮水，减少夜间如厕次数',
  '睡眠环境湿度保持在 40%-60% 最舒适',
  '定期更换床单被罩，保持睡眠环境清洁',
  '睡前避免看刺激性的影视内容或新闻',
  '可以尝试薰衣草精油等助眠香氛',
  '白天小睡不宜超过下午 3 点',
  '睡眠不足会影响记忆力、注意力和情绪',
  '长期睡眠不足增加心血管疾病风险',
  '睡眠不足会导致食欲增加，容易发胖',
  '避免在床上辗转反侧，建立床与睡眠的积极联系',
  '睡前进行轻度拉伸，缓解肌肉紧张',
  '保持卧室整洁有序，减少视觉干扰',
  '睡前可以喝温牛奶，含有助眠的色氨酸',
  '睡眠不足会降低免疫力，容易感冒',
  '好的睡眠是健康的基石，值得每天投资',
  '如果长期失眠，建议就医排查原因'
];

/**
 * 获取随机睡眠小贴士
 * @returns {string} 睡眠小贴士内容
 */
export function getRandomSleepTip() {
  const randomIndex = Math.floor(Math.random() * sleepTips.length);
  // 保存索引到本地
  uni.setStorageSync(STORAGE_KEYS.SLEEP_TIP_INDEX, randomIndex);
  return sleepTips[randomIndex];
}

/**
 * 获取存储的睡眠小贴士
 * @returns {string} 睡眠小贴士内容
 */
export function getStoredSleepTip() {
  const storedIndex = uni.getStorageSync(STORAGE_KEYS.SLEEP_TIP_INDEX);
  if (storedIndex !== null && storedIndex !== undefined && storedIndex < sleepTips.length) {
    return sleepTips[storedIndex];
  }
  // 如果没有存储或索引无效，返回随机一条
  return getRandomSleepTip();
}

/**
 * 切换睡眠小贴士
 * @returns {string} 新的睡眠小贴士内容
 */
export function switchSleepTip() {
  return getRandomSleepTip();
}

export default {
  getRandomSleepTip,
  getStoredSleepTip,
  switchSleepTip,
  STORAGE_KEYS
};