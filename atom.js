function foo() {
  // console.log(arguments)
  this.a = 2;
}
// foo `Hello ${name}!`

// mew Foo() 和 new Foo优先级比较
// new Foo.a 会报错
console.log(new foo().a) // 这样不会报错