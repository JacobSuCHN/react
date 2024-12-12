# React

- public 和 assets 区别：public 内的文件不会被打包，会被放入根目录

- tsx 语法

  - 插值语句 {} 字符串 数字 数组（普通类型） 元素 三元表达式 API 调用

  - 插值语句支持对象怎么弄 JSON.stringify()

  - 事件添加 onClick，如果需要传参使用箭头函数，不需要就直接使用函数

  - 像支持泛型函数，将\<T\>（会被认为\<div\>），纠正为\<T,\>

  - 如何去绑定属性 id class 等等 id {} class 特殊 className

  - 绑定多个 class，使用模板语法

  - 绑定 style {}

  - 添加 html 代码片段 类似 v-html

  - 如何遍历数组 类似 v-for

    ```react
    let text = "点击我";
    let fn = <T,>(parmas: T) => {
      console.log(parmas);
    };
    let id = "123123";
    let cls = "test";
    let styles = { cursor: "pointer" };
    let html = `<section><h1>我是H1</h1></section>`;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <>
        <div
          id={id}
          style={styles}
          className={`${cls} aa bb cc`}
          onClick={(e) => fn(123)}
        >
          {text}
        </div>
        <div style={{ color: "blue" }}>{"blue"}</div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        <div>
          {arr.map((v) => {
            return (
              <div id={String(v)} key={v}>
                {v}
              </div>
            );
          })}
        </div>
      </>
    );
    ```

- Babel
  - 
