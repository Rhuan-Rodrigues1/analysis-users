class GlobalUtils {
  constructor() {
    if (!GlobalUtils.instance) {
      GlobalUtils.instance = this;
    }
    return GlobalUtils.instance;
  }

   occurrenceArray(list, item) {
    const occurrence = list.filter(elm => elm === item)
    return occurrence.length
}
}

global._globalUtils = global._globalUtils || new GlobalUtils();

module.exports = global._globalUtils;
