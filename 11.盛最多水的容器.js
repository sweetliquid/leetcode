/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let area = 0

  while (true) {
    const width = height.length - 1

    if (width < 1) return area

    const left = height[0]
    const right = height[width]
    const current = width * Math.min(left, right)

    area = Math.max(area, current)

    left < right ? height.shift() : height.pop()
  }
}

// const maxArea = height =>
//   Math.max(
//     ...repeat(
//       height =>
//         height[0] < height[height.length - 1]
//           ? height.slice(1)
//           : height.slice(0, -1),
//       height => height.length > 1,
//       height
//     ).map(
//       height =>
//         (height.length - 1) * Math.min(height[0], height[height.length - 1])
//     )
//   )

// const repeat = (gen, pre, value) =>
//   !pre(value) ? [] : [value, ...repeat(gen, pre, gen(value))]

// @lc code=end
