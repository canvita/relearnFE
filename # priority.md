# Expression
  1. Left HandSide
  2. Right HandSide
## Left HandSide: priority 从高到低排序 ， 括号的优先级是最高的
   1. Member
      1. a.b | a[b]
      2. foo `string`
      3. super.a | super[b]
      4. new.target
      5. new Foo() // 带括号的
   2. new Foo // 不带括号的
   3. Call 函数调用
      1. foo()
      2. super()
      3. foo()['b']
      4. foo().b
## Right HandSide Exprssion
  1. Update
     1. a++, a--, ++a, --a
  2. Unary 单目运算
     1. delete a.b
     2. void foo() // void 会将后面的值都变成undefined
     3. typeof a
     4. + a
     5. - a
     6. ~ a
     7. ! a
     8. await a
  3. Expotional ** 唯一一个右结合的
## Tips
  1. void 的使用: 尽量不要使用undefined这个值 直接使用void 0代替
  2. 使用IIFE 的时候可以 使用void function(i) {console.log(i)}(i) 代替(function(i) {console.log(i)})(i)
## Reference
  1. Member 成员访问
  2. 会返回一个内置的Reference的类型
  3. Object
  4. Key
  5. delete | assign 都会触发它的引用