CREATE SCHEMA `survey` DEFAULT CHARACTER SET utf8 ;
CREATE TABLE `survey`.`news` (`标题` text, `时间` datetime, `抓取时间` datetime, `地区` text, `抓取工具` text, `抓取用户` text, `新闻类型` text, `来源` text, `作者` text, `正文` text)
