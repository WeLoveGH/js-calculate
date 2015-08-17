JavascriptConvinientCalculate
===================================
		A small useful tool which can convinient calculate in javascript.

### 可方便进行Javascript计算的小工具
		这是一个可以方便地进行Javascript进行计算的小工具。
		在Javascript中，计算精度的丢失是一件很令人伤心的事情，无奈的我们只能是通过给Number对象的prototype上增加方法或者是直接书写新的方法来执行加减乘除四则运算。那么当一个计算式中出现比较复杂的混合运算时代码的可读性就变得非常的差，所以就写出了这么一个工具。

### 使用方法
		调用calc()方法，传入两个参数：
		第一个参数是表达式(expression)，可以将所需计算的公式直接写出来，避免出现了各种计算方法的嵌套，增强了代码可读性。表达式中可以出现标识符，但是不能出现对象的成员或数组元素（即不能有“.”和“[]”）。
		第二个参数是表达式中出现的标识符，需要写成一个对象，对象的成员对应表达式中的标识符，具体可参考下面的例子。

### 例子
		要进行一个混合运算： (apple + _banana * (pear + 4) / (orange - 2)) / 2
		【其中apple=6, _banana=4, pear=2, orange=8； 计算结果应该是(6 + 4 * (2 + 4) / (8 - 2)) / 2 = 5】
		则程序代码如下：
		calc("(apple + _banana * (pear + 4) / (orange - 2)) / 2", {
			apple: 6,
			_banana: 4,
			pear: 2,
			orange: 8
		});
		函数执行完毕后的返回值为5，计算正确，可读性良好。

### 对比
		还是上面的例子，如果使用的是自定义的加减乘除方法numSum()，numSub()，unmMuti()，numDiv()
		最终程序代码就是这样的：
		numDiv(numSum(apple, numDIv(numMulti(_banana,numSum(pear,4)),numSub(orange,2))),2);
		计算结果依然是正确的，但程序可读性非常差，书写时极易出现错误，出现错误后很难排查……
