# Design Doc

## 数学题生成函数输入输出设计

```javascript
function generateQuestion(number, numberOfDigits, allowedTypes){


    return [
        {
            question: '3 + 2',
            correctAnswer: 5,
            selections: [-1, 3, 7]
        }
        ...
    ]
}
```

### 输入

|  字段  | 类型  |  说明 | 示例 |
|  ---- | ----  | ----| ----  |
|  number  |  number|   数字个数 | 2|
|  numberOfDigits  | number |几位数运算（最大几位数）| 3|
|  allowedTypes  | array |  加减乘除的类型| ["add", "del", "mul", "div"] |

### 输出

|  字段  | 类型  |  说明 | 示例 |
|  ---- | ----  | ----| ----  |
|  question  |  string|   题目 | '3 + 2'|
|  correctAnswer  | number | 正确答案 | 5|
|  selections  | array |  迷惑选项，不包含正确选项| [-1, 1, 6] |

### 备注说明

+ 生成函数不需要关心哪种模式，都生成迷惑选项
+ 只是基本的设计，如果有问题可以改文档

## 存储统计内容

每一次答题结束跳转到结果显示页面，把数据存储到localStorage里面

### 上一次答题记录

+ 每一道题的信息
  + 题目
  + 正确答案
  + 用户答案
  + 是否正确
  + 答题用时（ms）
+ 统计信息
  + 答题模式相关信息
    + 模式
    + 类型
    + 几位数
    + 几个数字
  + 正确率
  + 平均用时（ms）

### 历史答题统计

+ 根据每一次的平均用时绘制折线图
+ 根据每一次的正确率绘制折线图
+ 每一个点包含的详细信息
  + 模式
  + 类型
  + 几位数
  + 几个数字
  + 正确率
  + 平均用时
