---
title: Rust学习笔记
category:
  - 日志记录
id: ZUtcF8gwJ98m0jMpeIW1Wi
date: '2024-08-19T19:50:38+08:00'
---



## Cargo 换源

第一种: 编辑 .cargo/config.toml

```toml
[source.crates-io]
replace-with = "ustc"

[source.ustc]
registry = "sparse+https://mirrors.ustc.edu.cn/crates.io-index/"

[net]
git-fetch-with-cli = true
```

第二种：

``` bash
export RUSTUP_DIST_SERVER="https://rsproxy.cn"
export RUSTUP_UPDATE_ROOT="https://rsproxy.cn/rustup"

## ~/.cargo/config
[source.crates-io]
replace-with = 'rsproxy-sparse'
[source.rsproxy]
registry = "https://rsproxy.cn/crates.io-index"
[source.rsproxy-sparse]
registry = "sparse+https://rsproxy.cn/index/"
[registries.rsproxy]
index = "https://rsproxy.cn/crates.io-index"
[net]
git-fetch-with-cli = true
```



## 打包

``` bash
cargo install cross
cross build --release --target x86_64-pc-windows-gnu
cross build --release --target x86_64-apple-darwin
cross build --release --target x86_64-unknown-linux-gnu
```





## 配置

### 应对panic 错误处理

![image-20240724074057138](https://pic.juyovo.com/images/2024/07/24/50d1dad0eb964d9ede7fb1116f1dcaa1.png)

```toml
[profile.release]
panic = "abort"
```

**获得产生panic的回溯信息：**

添加环境变量：`RUST_BACKTRACE=1` | `RUST_BACKTRACE=full`

## 类型部分

![image-20240722082800271](https://pic.juyovo.com/images/2024/07/22/15232d6d799b67385a2f518e5ffe1fb6.png)

![image-20240722082850789](https://pic.juyovo.com/images/2024/07/24/5c749e86b6c54aeea57d65c7607fd051.png)

![image-20240722083045653](https://pic.juyovo.com/images/2024/07/22/f0a12bd10a580c702792e3c569aad6a6.png)

**Tuple例子**：

![image-20240722083118578](https://pic.juyovo.com/images/2024/07/22/5cfb9b758bb8b19e03e06ec376642fb9.png)

**访问Tuple：**

![image-20240722083231575](https://pic.juyovo.com/images/2024/07/22/963a428347069ff440aac67c59f606cd.png)

![image-20240722083333032](https://pic.juyovo.com/images/2024/07/22/1101d364a97594a248fce92373241a0e.png)

### 遍历数组

```rust
let a = [10, 20, 30, 40, 50]
for element in a.iter() {
  println!("value: {}", element)
}
```

## 所有权 Stack、Heap

在一个作用域内变量用完rust会自动drop（删除），将内存自动交还给操作系统。

只有在Heap上才区分深拷贝和浅拷贝。

move：转移所有权（Rust设计原则），旧的不能再使用

copy：将Stack，包括Heap里面的数据Copy一份（自然旧的还可以用）

### Stack的数据

![image-20240722093632981](https://pic.juyovo.com/images/2024/07/22/39a5dc2cd721ceb7c59bfa299e44fce4.png)

![image-20240722093801982](https://pic.juyovo.com/images/2024/07/22/8794e587dc70ba73e572ddf4c2508572.png)

### 函数与所有权

函数传参时会取得参数的所有权，在函数返回时失效

![image-20240722095818266](https://pic.juyovo.com/images/2024/07/24/3386f17f79893255301b1f31ebb69ba8.png)

如何让函数使用某个值，不获得所有权：

麻烦的做法：

```rust
let (s2, len) = get_length(s1)

fn get_length(s: String) -> (String, unsize) {
  let length = s.len();
  (s, length) //返回元组
}
```

## 引用与借用

&变量 &mut 变量

## Struct 结构体

![image-20240723061853823](https://pic.juyovo.com/images/2024/07/23/a2a86b3843e95314821bd6b2997943d9.png)

### Tuple struct

![image-20240723061959305](https://pic.juyovo.com/images/2024/07/23/8b7f5790bb6fba8ab919d73319931da6.png)

### 打印 Struct

![image-20240723063343579](https://pic.juyovo.com/images/2024/07/23/eafed82f0138b3e21245695762e56ad4.png)

![image-20240723063506997](https://pic.juyovo.com/images/2024/07/23/0e0a1a8248923be6208f07492dc7b716.png)

### Struct 定义方法

![image-20240723064139363](https://pic.juyovo.com/images/2024/07/23/ad1a40710882c519857a8bb2e929af9f.png)

### Struct 关联函数

![image-20240723064510572](https://pic.juyovo.com/images/2024/07/23/2a8676754f054724ae2245081666abac.png)

![image-20240723064438300](https://pic.juyovo.com/images/2024/07/23/f91b58d4fa02122d27d0ac0e1f5dcdca.png)

## 枚举

> 枚举也可以定义方法，和struct定义方法一样

![image-20240723064813617](https://pic.juyovo.com/images/2024/07/23/ce67f848fe1c2045624aa0894a97d128.png)

![image-20240723065642365](https://pic.juyovo.com/images/2024/07/23/87e44cb213e466ff5564d26a1368d803.png)

### Rust中 “Null” 的概念

![image-20240723070138703](https://pic.juyovo.com/images/2024/07/23/1efa13915caef90eb03c96b7f23ea9b6.png)

![image-20240723070218217](https://pic.juyovo.com/images/2024/07/23/26a29dc6963a557caf19ae164cb162bc.png)

![image-20240723070723129](https://pic.juyovo.com/images/2024/07/23/1de89bb4ee4c90c3a4719a70e3b6ae13.png)

## Match

![image-20240723071122349](https://pic.juyovo.com/images/2024/07/23/40010bab32deec9b9bd834b3041b8119.png)

匹配Option时，必须写完Some、None，

如果不想每个都匹配，可以使用_通配符，如：

```rust
let a = 3u8;

match a {
	1 => println!("111"),
	2 => println!("222"),
	_ => println!("???")
}
```

## 常用的集合

### Vector

```rust
let v: Vec<i32> = Vec::new();
let v = vec![1, 2, 3];
```

### String

拼接字符串：

`format()`

## ? 运算符

![image-20240724082804686](https://pic.juyovo.com/images/2024/07/24/6dc1f2d59aa2ed8010e8a19292ba3163.png)

## 泛型

**方法中的泛型**

![image-20240724090010344](https://pic.juyovo.com/images/2024/07/24/10cae6483420f6de6ff928eac887a46e.png)
