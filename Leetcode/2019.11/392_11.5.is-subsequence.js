/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * 指针
 * 14/14 cases passed (68 ms)
 * Your runtime beats 67.73 % of javascript submissions
 * Your memory usage beats 33.33 % of javascript submissions (39.7 MB)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (!s) return true;
  let p = 0;
  let pointS = s.charAt(p);
  for (let i = 0; i < t.length; i++) {
    if (pointS === t[i]) {
      p++;
      pointS = s.charAt(p);
    }
    if (p === s.length) return true;
  }

  return false;
};
// console.log(isSubsequence('abc', 'ahbgdc')); //true
// console.log(isSubsequence('axc', 'ahbgdc')); //false
// console.log(
//   isSubsequence(
//     'pppsppuppppbsppppppppppppppppppppepppppppppppqpupppepppppppppppppppnpppppppcppppppppppppeppppppppppp',
//     'gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
//   )
// );
// @lc code=end
