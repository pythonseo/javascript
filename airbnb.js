//常量和变量
/*
const foo=1;
let bar=foo;
bar=9;
console.log(foo,bar)
*/
//常量的指针不能修改，但包含的可变对象可以修改
/*
const foo=[1,2];
const bar=foo
bar[0]=9
console.log(foo[0],bar[0])
*/
//使用let替代var
/*
let count=1;
if (true) {
	count+=1;
}
console.log(count)
*/
//对象
/*
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
console.log(atom.value,atom.addValue(2))
*/
