---
title: playwright web自动化框架
date: 2023-10-10
description: 稳定性测试方案
disabled: false
readMins: 20
tags:
  - JavaScript
---

# playwright web自动化框架

## 背景

当前市场上UI自动化覆盖率最广的莫过于Selenium，而且Selenium上手很快，资料丰富，社区活跃。在发现Playwright之前，观远一直使用Selenium作为web自动化框架。但是我们在编写自动化用例的过程中还是发现了Selenium一些问题：

- 依赖各种不同的driver，随着浏览器的不断更新，也需要不断的去维护这些driver
- Selenium IDE录屏代码不稳定
- 稳定性不够好

然后我们发现了Playwright，Playwright 是微软开源的Web自动化操作的框架，它的功能类似于 Selenium、Pyppeteer 等，都可以驱动浏览器进行各种自动化操作，对市面上的主流浏览器都提供了支持。API 功能简洁又强大，仅用一个API即可执行Chromium、Firefox、WebKit等主流浏览器自动化操作，并同时支持以无头模式、有头模式运行。
下面我们将对比Playwright和Selenium优缺点，以及分享我们基于Playwright所产生的一些经验。

## Playwright和Selenium对比

- 支持语言(都支持主流语言)
- Playwright：JavaScript & TypeScript\python\C#\Go\Java
- Selenium：java\python\ruby\C#\C++\JavaScript
- 操作浏览器方式以及性能
- Playwright：通过开发者工具与浏览器交互，安装简洁，不需要安装各种Driver，启动浏览器速度快
- Selenium：需要通过各种WebDriver操作不同浏览器，启动浏览器速度慢
- 支持浏览器
- Playwright：支持所有主流浏览器，Chromium/WebKit/Firefox，不支持IE11
- Selenium：运行在目前所有主流浏览器上（不包括国内套皮的浏览器）
- 快速可靠执行
- Playwright：自动等待(等待元素出现/等待事件发生)、基于Websocket（双向通讯）可自动获取浏览器实际情况。
- Selenium：需要代码中加入等待，甚至元素状态轮训判断，增加运行时间、Selenium基于HTTP协议（单向通讯）
- 代码录屏
- Playwright：可以使用基于css、xpath、text这些常用的元素定位方式进行录制生成代码，能大幅度的减少写代码的时间，同时代码稳定性也可以保证
- Selenium：Selenium IDE录制的代码是基于coordinate 或者DOM 层级结构，所以极其不稳定，也就导致IDE基本无人问津
- 异步方式
- Playwright支持异步方式
- Selenium不支持异步方式
- headless模式
- Playwright和Selenium均支持headless模式，所以在Linux系统或缺少显示设备的场景下也可以跑UI自动化
- 移动端浏览器
- Playwright和Selenium均支持移动端浏览器的模拟测试，不支持真机测试

## Playwright环境搭建

### 前置环境搭建

JDK 8、Git、Maven、TestNg、jUnit等

### pom.xml添加代码

```java
<dependency>
    <groupId>com.microsoft.playwright</groupId>
    <artifactId>playwright</artifactId>
    <version>1.17.0</version>
</dependency>
<dependency>
    <groupId>com.microsoft.playwright</groupId>
    <artifactId>assertions</artifactId>
    <version>1.17.2</version>
</dependency>
```

### Playwright依赖安装

```shell
#首先安装可以支持的浏览器
mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install"
#如果有特殊浏览器需要安装可以先查看
mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install --help"
#安装特殊浏览器
Install WebKit
mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install webkit"
```

### 代码录制

```shell
#打开浏览器进行录屏(保留已经验证的状态)
mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen --load-storage=auth.json https://app.guandata.com"
#如果要模仿手机操作，可以通过 playwright.devices 列表操作
Emulate iPhone 11.
mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='open --device="iPhone 11" https://app.guandata.com'
```

## 实用操作

### 录屏示例

使用playwright 针对固定场景进行录屏回放，观察录屏效果。
通过以下录屏过程和录屏代码可以看到：

- Playwright支持无头浏览器模式，且较为推荐（headless默认值为True）
- 可以使用传统定位方式（CSS，XPATH等），也有自定义的新的定位方式（如文字定位），元素定位和操作方法更加简单
- 操作方法中传入了元素定位，定位和操作同时进行(playwright也提供了单独的定位方法，作为可选) --selenium只能先定位元素，再进行操作
- 不需要为每个浏览器下载webdriver，可以随意切换不同浏览器
- 录屏方式简单

```js
// 输入账号密码登录系统
// 进入数据中心，新建一个test2名称的目录
public class Example {
  public static void main(String[] args) {
    // 实例化page对象
    try (Playwright playwright = Playwright.create()) {
      Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
        .setHeadless(false));
      BrowserContext context = browser.newContext(new Browser.NewContextOptions()
        .setStorageStatePath(Paths.get("auth.json")));
      Page page = context.newPage();
      // 访问BI系统地址
      page.navigate("http://192.168.199.6:8087/auth/index");
      // 输入域名、账号、密码进行登录
      page.click("[placeholder=\"公司域\"]");
      page.fill("[placeholder=\"公司域\"]", "testing");
      page.click("[placeholder=\"邮箱地址\"]");
      page.fill("[placeholder=\"邮箱地址\"]", "test@guandata.com");
      page.click("[placeholder=\"密码\"]");
      page.fill("[placeholder=\"密码\"]", "123456");
      page.waitForNavigation(() -> {
        page.press("[placeholder=\"密码\"]", "Enter");
      });
      // 点击数据中心
      page.waitForNavigation(() -> {
        page.click("#rc-tabs-0-tab-datacenter div:has-text(\"数据中心\")");
      });
      // 点击新建文件夹进行文件夹创建
      page.click("button:has-text(\"新建文件夹\")");
      page.fill("text=文件夹名称文件夹位置:根目录 >> input[type=\"text\"]", "test-playwright");
      page.click("button:has-text(\"确定\")");
    }
  }
}
```

### 切换浏览器以及headless设置

- Playwright支持切换不同的浏览器，在实际的自动化过程中可以进行多个浏览器的兼容性测试。
- 日常自动化用例执行可以采用headless模式(无头模式，浏览器不会打开界面)，提升用例执行效率。而当我们进行用例开发的时候，使用无headless模式方便代码调试(有头模式，浏览器会打开界面)，提升用例编写效率。

```js
// 使用此Browser 对象，可以使用launch()方法启动浏览器实例
Playwright playwright = Playwright.create();
// 使用firefox浏览器，也可以改为webkit浏览器
Browser browser = playwright.firefox().launch();
// false为有头模式(有界面的浏览器)，true为无头模式(没有界面的浏览器)
Browser browser =  playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
```

### 封装父类方法

把共用的方法封装在父类中：浏览器默认为chromium、headless模式、设置浏览器宽和高、环境的默认地址等。 测试类中引用这个父类后，在执行测试用例时会先触发父类中的操作，避免代码重复编写。

```js
public class UiAbstract {
    public static Page page;
    public static BrowserContext context;
    @BeforeSuite
    public void setUp() {
        Playwright playwright = Playwright.create();
        //设置浏览器为chromium，headless模式
        Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(Env.HEADLESS));
        Browser.NewContextOptions contextOptions = new Browser.NewContextOptions();
        // 设置浏览器宽和高
        contextOptions.setViewportSize(1280, 720);
        //设置环境的默认地址
        contextOptions.setBaseURL(Env.TESTSERVER);
        context = browser.newContext(contextOptions);
    }
}
```

### 常用断言方法

介绍一些常用的UI自动化断言的方法，观远中使用最多的是截图对比断言，详见4.5

```js
String content = page.text_content(":nth-match(i, 2)");
Assert.assertEquals(content, expected, "[" + description + "]测试案例失败！");

// 等待元素出现
page.waitForSelector(":nth-match(i, 2)");
// 获取文本内容，进行断言
String content = page.text_content(":nth-match(i, 2)");
Assert.assertEquals(content, expected, "[" + description + "]测试案例失败！");

String text = page.inner_text(":nth-match(i, 2)");
Assert.assertEquals(text, expected, "[" + description + "]测试案例失败！");

String attribute = page.getAttribute("#su", "value");
Assert.assertEquals(attribute, expected, "[" + description + "]测试案例失败！");

boolean visible = page.isVisible('#su');
Assert.assertTrue(visible, expected, description);

boolean enabled = page.isEnabled('#su');
Assert.assertTrue(visible, expected, description);

String title = page.title();
Assert.assertEquals(title, expected, "[" + description + "]测试案例失败！");

String url = page.url();
Assert.assertEquals(url, expected, "[" + description + "]测试案例失败！");

```

### 截图对比断言

由于通过文本方式进行断言工作量也是非常大的，固通过二次开发增加截图与base进行像素对比进行断言，提高UI自动化编写效率。
主要流程：

- 1.编写用例时，把需要断言的页面进行截图，图片上传到Samba服务器相应的路径下
- 2.测试类中引用截图断言方法(可以通过元素定位截图，也可以全屏幕进行截图)，并设置像素相似度(0-1之间)，生成的截图结果会放到Samba服务器对应路径下
- 3.截图断言方法会针对两张图片进行像素比对，会在一张空白图片中画上对比结果，对比成功的画入灰色，对比失败的画入红色
- 4.生成测试报告，报告中含有实际截图、期望截图、对比截图，如下图
- 5.如果是前端正常修改导致的断言失败，通过开发的小工具把实际截图替换期望截图

![这是图片](/img/stickPicture1.png 'Magic Gardens')
截图断言核心代码如下：

```js
public class ImageDiff {
    public static double getDifferencePercent(String actual, String baseline, String diffOut, int threshold, double tolerance) throws IOException {
        // 读取实际图片和base图片的图像
        InputStream actualInputStream = new FileInputStream(actual);
        InputStream baseInputStream = new FileInputStream(baseline);
        try {
            BufferedImage img1 = ImageIO.read(actualInputStream);
            BufferedImage img2 = ImageIO.read(baseInputStream);
            // 获取图片的高和宽
            int width = img1.getWidth();
            int height = img1.getHeight();
            int width2 = img2.getWidth();
            int height2 = img2.getHeight();
            long diffCount = 0;
            // 遍历屏幕截图像素点数据
            for (int y = 0; y < height; y++) {
                for (int x = 0; x < width; x++) {
                    //使用getRGB(w, h)获取该点的颜色值是ARGB
                    //而在实际应用中使用的是RGB，所以需要将ARGB转化成RGB，即bufImg.getRGB(w, h) & 0xFFFFFF。
                    int i = pixelYIQDiff(img1.getRGB(x, y), img2.getRGB(x, y));
                    if (i > threshold) {
                        diffCount++;
                        img1.setRGB(x, y, 0xffff0000);
                    } else {
                        img1.setRGB(x, y, greyPixel(img1.getRGB(x, y)));
                    }
                }
            }
            long maxDiffCount = width * height;
            double diffPct = 100.0 * diffCount / maxDiffCount;
            // 不一致的图片大于精度，则使用图片标出
            if (diffPct > tolerance) {
                ImageIO.write(img1, "png", new File(diffOut));
            }
            return diffPct;
        } catch (FileNotFoundException e) {
            Log.warn(baseline + "文件不存在");
            DistributeController.uploadFile(baseline, actualInputStream);
            //            FileUtils.copyFile(actualFile, baselineFile);
            e.printStackTrace();
        }
        return 0;
    }
    // 分别获取出rgb中的r、g、b的值，并得到不一致数
    private static int pixelYIQDiff(int rgb1, int rgb2) {
         // 对整数直接进行计算得到rgb值
        int r1 = (rgb1 >> 16) & 0xff;
        int g1 = (rgb1 >> 8) & 0xff;
        int b1 = rgb1 & 0xff;
        int r2 = (rgb2 >> 16) & 0xff;
        int g2 = (rgb2 >> 8) & 0xff;
        int b2 = rgb2 & 0xff;

        double yDiff = rgb2y(r1, g1, b1) - rgb2y(r2, g2, b2);
        double iDiff = rgb2i(r1, g1, b1) - rgb2i(r2, g2, b2);
        double qDiff = rgb2q(r1, g1, b1) - rgb2q(r2, g2, b2);

        return (int) (0.5053 * yDiff * yDiff + 0.299 * iDiff * iDiff + 0.1957 * qDiff * qDiff);
    }

    private static double rgb2y(int r, int g, int b) {
        return r * 0.29889531 + g * 0.58662247 + b * 0.11448223;
    }

    private static double rgb2i(int r, int g, int b) {
        return r * 0.59597799 - g * 0.27417610 - b * 0.32180189;
    }

    private static double rgb2q(int r, int g, int b) {
        return r * 0.21147017 - g * 0.52261711 + b * 0.31114694;
    }
    // 像素匹配上绘制灰色
    private static int greyPixel(int rgb1) {
        // 对整数直接进行计算得到rgb值
        int r1 = (rgb1 >> 16) & 0xff;
        int g1 = (rgb1 >> 8) & 0xff;
        int b1 = rgb1 & 0xff;
        int y = (int) rgb2y(r1, g1, b1);
        int gray = (int) (255 + (y - 255) * 0.2);

        return gray << 16 & 0x00ff0000 | gray << 8 & 0x0000ff00 | gray & 0x000000ff | 0xff000000;
    }
}
```

### 其他常用操作

- 下拉选择框：selectOpion
- 文件上传：setInputFiles、单个文件、多个文件、拖放上传
- 鼠标点击：mouse().click、mouse().dblclick
- 鼠标拖动：mouse().down、mouse().up
- 鼠标移动：mouse().move
- 键盘按键：press
- 截屏、录屏：screenshot、video
- 浏览器滚动条滚动到元素位置：querySelector(element).scrollIntoViewIfNeeded()

## 代码实战

```js
/**
 * @description: 测试权限控制功能对订阅计划中的内容是否生效
 * @date: 2021-12-29 18:33
 **/
public class SubscriptionReadTest extends UiAbstract {
    String description = "订阅-查看";
    // 测试类前实例化page对象
    @BeforeTest
    public void beforeTest(){
        // Open new page
        page = context.newPage();
    }
    @Test(dataProvider = "datapro")
    public void subscriptionReadTest(String role, String loginId) {
        page.navigate("/auth/index");
        // 输入域名、账号、密码点击登录
        page.click("[placeholder=\"公司域\"]");
        page.fill("[placeholder=\"公司域\"]", "rbac");
        page.click("[placeholder=\"邮箱地址\"]");
        page.fill("[placeholder=\"邮箱地址\"]", loginId);
        page.click("[placeholder=\"密码\"]");
        page.fill("[placeholder=\"密码\"]", "******");
        page.waitForNavigation(() -> {
            page.click("#loginBtn");
        });

        // 点击九宫格按钮
        page.click(":nth-match(i, 2)");

        // 点击订阅计划，根据元素截图
        page.click("text=订阅计划");
        page.waitForSelector("text=1");
        ScreenshotUtil.screenshotBySelector(page, "div[class='_1HjXw1zf']", description+'-'+role+"卡片订阅");

        // 点击合并订阅，根据元素截图
        page.click("text=合并订阅");
        page.waitForSelector("text=暂无相关数据");
        ScreenshotUtil.screenshotBySelector(page, "div[class='_1HjXw1zf']", description+'-'+role+"合并订阅");

        // 点击页面订阅，根据元素截图
        page.click("text=页面订阅");
        page.waitForSelector("text=1");
        ScreenshotUtil.screenshotBySelector(page, "div[class='_1HjXw1zf']", description+'-'+role+"页面订阅");

        // 点击数据集订阅，根据元素截图
        page.click("text=数据集订阅");
        page.waitForSelector("text=暂无相关数据");
        ScreenshotUtil.screenshotBySelector(page, "div[class='_1HjXw1zf']", description+'-'+role+"数据集订阅");

        // 对上述的测试截图进行断言
        ScreenshotUtil.ScreenshotAssert(description+'-'+role+"卡片订阅");
        ScreenshotUtil.ScreenshotAssert(description+'-'+role+"合并订阅");
        ScreenshotUtil.ScreenshotAssert(description+'-'+role+"页面订阅");
        ScreenshotUtil.ScreenshotAssert(description+'-'+role+"数据集订阅");
    }
    // 测试数据
    @DataProvider
    public Object[][] datapro() {
        return new Object[][]{
                {"普通用户","editor@subscription.read"},
                {"只读用户","participant@subscription.read"}
        };
    }
    // 测试完成后关闭page
    @AfterTest
    public void after(){
        // Close page
        page.close();
    }
}
```

## 其他资料

- [官网文档](https://playwright.dev/java/docs/intro)
- [GitHub](https://github.com/microsoft/playwright-java)
