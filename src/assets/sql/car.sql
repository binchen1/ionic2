SET NAMES UTF8;
DROP DATABASE IF EXISTS car;
CREATE DATABASE car CHARSET=UTF8;
USE car;

/*用户表*/
CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,/*用户编号*/
    uname VARCHAR(32),      /*邮箱*/
    phone VARCHAR(11),      /*手机号*/
    upwd VARCHAR(32),       /*密码*/
    nickname VARCHAR(32),   /*昵称*/
    sex VARCHAR(1),         /*性别,男-M，女-F*/
    age VARCHAR(3),         /*年龄*/
    edu VARCHAR(32),        /*学历*/
    job VARCHAR(32)         /*职业*/
);
INSERT INTO user VALUES
(1,'admin','13555555555','111111','','','','',''),
(2,'test@126.com','13666666666','123456','','','','','');

/*老师表*/
CREATE TABLE teacher(
    tid INT PRIMARY KEY AUTO_INCREMENT,/*讲师编号*/
    tname VARCHAR(32),          /*讲师姓名*/
    maincourse VARCHAR(32),     /*主讲课程*/
    tpic VARCHAR(64),           /*照片*/
    experience VARCHAR(1024),   /*工作经历*/
    style VARCHAR(1024)         /*授课风格*/
);
INSERT INTO teacher VALUES
(1,'张**','SUV型汽车顾问','img-teacher/g01.jpg','高功版发动机+双离合+quattro组合放在去年都算很有魅力的，而现在我们有了新3系......很好奇A4L换代的时候会拿出什么技术跟3系抗衡。','这款车拥有鲜明的奥迪运动基因，例如3.0升增压发动机、双离合变速箱、quattro全时四驱以及驾驶模式选项，不过它依然是一辆国产加长版，这多少显得有些奇怪，而且高昂的售价注定了这些好东西不可能在市场中大面积普及，多数人还是会买一辆奥迪前驱车，有点悲剧色彩。'),
(2,'李 *','小型汽车顾问','img-teacher/g02.jpg','虽然这代3系已经向舒适性妥协了，但实际测试感受之后你会发现它依然可以称得上同级别的运动冠军，悬架中后段的支撑依然稳健，N20+ZF8AT的动力组合传统效率令人称赞，另外四驱的3系给人的体验确实和后驱不一样，慢慢的会让人喜欢上，要是能便宜点我就买了。','宝马316装备低功率版1.6T发动机 日常使用来说动力基本够用了，配置方面不差，品牌算是它最大的亮点之一了。在动力方面它不可能提供你什么驾驶乐趣，对于我来说算是能接受的范围。'),
(3,'赵 *','中型汽车顾问','img-teacher/g03.jpg','我测试的这辆车，所以在测试过程中看到了一些不愿意看到的问题，比如说涡轮散热不好导致性能衰减，变速箱不爱升挡导致转速偏高等等，这些是我最终不愿意给9分的原因，除此之外，这辆车给我的好感还是不错的，尤其是后排空间，太大了，你想干什么都行。','冠道是一款挺不错的车，内饰看起来气派、豪华，空间也很大。关键是这车开起来也很好，动力够用，换挡平顺。如果非要鸡蛋里挑骨头，唯一让我不太满意的就是底盘在过减速带时稍微有些生硬，还是一贯的国产本田的风格。'),
(4,'王**','SUV型汽车顾问','img-teacher/g04.jpg','如果不是没有配备ESC，我觉得卡罗拉1.6L应该是同级别最值得购买的家用车。可惜它没有。这玩意儿倒不是说非有不可，但关键同级不少对手都全系标配了，卡罗拉没有，肯定会在消费者心目中减分的。','对于混动系统我们已经非常熟悉了，驾驶感受比较平顺，而且市区中驾驶非常省油。其实最大的亮点就是价格，这是混动系统首次在日本以外的国家生产，成本大大降低，使得混动车型比常规动力车型并没有贵太多钱，回本比较轻松！如果经常在市区中行驶，推荐购买'),
(5,'孙**','小型汽车顾问','img-teacher/g05.jpg','全新思域无疑是给了我们一个很大的惊喜，除去外观方面的轿跑化设计，性能方面的提升才是真正令人欣喜之处。日常驾驶的时候有着不错的行驶质感，动力输出十分平顺，在城市拥堵路段能有很好的可控性和舒适性。实测数据则说明这是一台加速性能在同级别中有一定优势的车型，适合追求运动快感的朋友。','全新思域凭借漂亮的外观和7.09秒的加速成绩，思域拿9分是实至名归的，在同级车型中绝对是明星车型。而最后的这1分我是综合了以下几个方面来考虑的。第一，超低的坐姿，同事开玩笑说和86的距离只差一个烟蒂，同级车型中这是独一无二的。第二，6MT车型是全球首发，买手动的都是真爱。第三，我相信手动挡车型很大机会加速时间不到7秒，这驾驶乐趣和性能价格比也没谁了。综合以上三点，我给思域10分。'),
(6,'韩**','中型汽车顾问','img-teacher/g04.jpg','1.2TSI比我想象的要平顺一些，也比我想象中动力更好，比之前的1.6L车型开起来驾驶感受好很多，同时还有着大空间的优势，完全有替代1.6L车型的能力，现在来看朗逸综合实力依然很强劲。','在1.2T这个很小的排量上，大众是为数不多仍在使用四缸结构的厂家。物理结构决定了这款发动机的平顺性优势，实际动力表现上也与1.4TSI非常近似。难能可贵的是，新的7速DSG变速箱和这台发动机的匹配完全可以打90分，这也让朗逸1.2TSI开起来比1.6L车型更有乐趣，也更省油。所以在配置类似的情况下，相比1.6L自然吸气车型，我还是更推荐这台1.2TSI的朗逸。');

/*课程类型表*/
CREATE TABLE type(
    tpid INT PRIMARY KEY AUTO_INCREMENT,/*类型id*/
    tpname VARCHAR(32)      /*类型名称*/
);
INSERT INTO type VALUES
(1,'SUV型'),
(2,'小型汽车'),
(3,'中型汽车');

/*课程表*/
CREATE TABLE course(
    cid INT PRIMARY KEY AUTO_INCREMENT,/*汽车ID*/
    typeId INT,             /*汽车类型ID*/
    title VARCHAR(32),      /*汽车名称*/
    teacherId INT,          /*汽车顾问ID*/
    cLength VARCHAR(32),    /*咨询时长*/
    startTime VARCHAR(32),  /*咨询时间*/
    address VARCHAR(64),    /*销售地址*/
    pic VARCHAR(64),        /*主图片*/
    price FLOAT(8,2),       /*价格*/
    details VARCHAR(2048)   /*汽车详情*/
);
INSERT INTO course VALUES
(NULL,'1','01奥迪A4L','1','1天','每周一至周五','豪华汽车各销售区','img-course/q01.jpg','17','<p>高功版发动机+双离合+quattro组合放在去年都算很有魅力的，而现在我们有了新3系......很好奇A4L换代的时候会拿出什么技术跟3系抗衡。</p><p>奥迪A4L采用了高功率版2.0T发动机、双离合变速箱和quattro全时四驱系统，这让它距离运动化风格更近了一步，也增强了抗衡2013款宝马3系的实力，唯一的问题是这款比较有新意的车型价格也不低，而且已经是全系中最便宜的quattro版本了。</p><p>这款车拥有鲜明的奥迪运动基因，例如3.0升增压发动机、双离合变速箱、quattro全时四驱以及驾驶模式选项，不过它依然是一辆国产加长版，这多少显得有些奇怪，而且高昂的售价注定了这些好东西不可能在市场中大面积普及，多数人还是会买一辆奥迪前驱车，有点悲剧色彩。</p>'),
(NULL,'2','02宝马3系 ','2','1天','每周一至周五','豪华汽车各销售区','img-course/q02.jpg','18.2','<p>宝马316装备低功率版1.6T发动机 日常使用来说动力基本够用了，配置方面不差，品牌算是它最大的亮点之一了。在动力方面它不可能提供你什么驾驶乐趣，对于我来说算是能接受的范围。</p><p>虽然这代3系已经向舒适性妥协了，但实际测试感受之后你会发现它依然可以称得上同级别的运动冠军，悬架中后段的支撑依然稳健，N20+ZF8AT的动力组合传统效率令人称赞，另外四驱的3系给人的体验确实和后驱不一样，慢慢的会让人喜欢上，要是能便宜点我就买了。</p><p>这台3系有着极佳的操控感和车辆稳定性，尤其是M风格的方向盘让人爱不释手，提速相当出色，就是匹配的P7轮胎太逊色，拉了后腿。总体来说这车确实不错，只是价格略贵，如果真是喜欢，看看哪个经销商可以给出超值的优惠幅度吧。</p>'),
(NULL,'3','03本田冠道','3','1天','每周一至周五','豪华汽车各销售区','img-course/q03.jpg','19.3','<p>这车看起来怪怪的，坐进去好感爆棚，特别宽敞，前排中央扶手箱太神奇了，那么多机关，滑动手感也特棒。后排就不用说了，同级别少有空间、舒适度出其右的SUV，舍去第三排的意义就在于此了。开起来，纯舒适风格，少了一点本田的犀利，加速按说不慢，但怎么踩油门都没有突兀的加速感，显然本田刻意营造了这种惬意。总体来说这家伙在5座SUV里真是挺棒的，现在还不知道价格，如果上市价格合理的话，我觉得至少能给到9分。</p><p>我测试的这辆车，所以在测试过程中看到了一些不愿意看到的问题，比如说涡轮散热不好导致性能衰减，变速箱不爱升挡导致转速偏高等等，这些是我最终不愿意给9分的原因，除此之外，这辆车给我的好感还是不错的，尤其是后排空间，太大了，你想干什么都行。</p><p>冠道是一款挺不错的车，内饰看起来气派、豪华，空间也很大。关键是这车开起来也很好，动力够用，换挡平顺。如果非要鸡蛋里挑骨头，唯一让我不太满意的就是底盘在过减速带时稍微有些生硬，还是一贯的国产本田的风格。</p>'),
(NULL,'1','04丰田卡罗拉','4','1天','每周一至周五','豪华汽车各销售区','img-course/q04.jpg','20.5','<p>如果不是没有配备ESC，我觉得卡罗拉1.6L应该是同级别最值得购买的家用车。可惜它没有。这玩意儿倒不是说非有不可，但关键同级不少对手都全系标配了，卡罗拉没有，肯定会在消费者心目中减分的。</p><p>作为一辆主打经济的家用车，卡罗拉双擎的表现非常令人满意，动力虽然不突出，但也能满足市区代步的需求，重点是超强的经济性，让人无可挑剔。综合整体的表现，我觉得卡罗拉双擎拿到九分并不为过。但可惜的是，在大多数地区，卡罗拉双擎并不列入新能源车的补助范围，这点是挺可惜的，因为双擎动力并不需要依赖冲电桩、只需要加油就好，而且有越堵车越省油的优点，而且技术成熟，只能说它有些“生不逢时”。</p><p>对于混动系统我们已经非常熟悉了，驾驶感受比较平顺，而且市区中驾驶非常省油。其实最大的亮点就是价格，这是混动系统首次在日本以外的国家生产，成本大大降低，使得混动车型比常规动力车型并没有贵太多钱，回本比较轻松！如果经常在市区中行驶，推荐购买</p>'),
(NULL,'2','05丰田思域','1','1天','每周一至周五','豪华汽车各销售区','img-course/q05.jpg','21.8','<p>动感的造型、有看点的科技配置、出色的动力加上那些热血的传奇故事，年轻人对这一代思域已经毫无抵抗力。不过年轻人容易头脑发热，但本田却不会，思域还是足够“理智和冷静”，空间实用性和油耗的表现都十分优秀。唯一的不足应该是要说服家里长辈为这个不够稳重的长相买单相对来说比较困难。</p><p>全新思域无疑是给了我们一个很大的惊喜，除去外观方面的轿跑化设计，性能方面的提升才是真正令人欣喜之处。日常驾驶的时候有着不错的行驶质感，动力输出十分平顺，在城市拥堵路段能有很好的可控性和舒适性。实测数据则说明这是一台加速性能在同级别中有一定优势的车型，适合追求运动快感的朋友。</p><p>全新思域凭借漂亮的外观和7.09秒的加速成绩，思域拿9分是实至名归的，在同级车型中绝对是明星车型。而最后的这1分我是综合了以下几个方面来考虑的。第一，超低的坐姿，同事开玩笑说和86的距离只差一个烟蒂，同级车型中这是独一无二的。第二，6MT车型是全球首发，买手动的都是真爱。第三，我相信手动挡车型很大机会加速时间不到7秒，这驾驶乐趣和性能价格比也没谁了。综合以上三点，我给思域10分。</p>'),
(NULL,'3','06大众朗逸','2','1天','每周一至周五','豪华汽车各销售区','img-course/q06.jpg','22.4','<p>全新思域凭借漂亮的外观和7.09秒的加速成绩，思域拿9分是实至名归的，在同级车型中绝对是明星车型。而最后的这1分我是综合了以下几个方面来考虑的。第一，超低的坐姿，同事开玩笑说和86的距离只差一个烟蒂，同级车型中这是独一无二的。第二，6MT车型是全球首发，买手动的都是真爱。第三，我相信手动挡车型很大机会加速时间不到7秒，这驾驶乐趣和性能价格比也没谁了。综合以上三点，我给思域10分。</p><p>全新思域无疑是给了我们一个很大的惊喜，除去外观方面的轿跑化设计，性能方面的提升才是真正令人欣喜之处。日常驾驶的时候有着不错的行驶质感，动力输出十分平顺，在城市拥堵路段能有很好的可控性和舒适性。实测数据则说明这是一台加速性能在同级别中有一定优势的车型，适合追求运动快感的朋友。</p><p>动感的造型、有看点的科技配置、出色的动力加上那些热血的传奇故事，年轻人对这一代思域已经毫无抵抗力。不过年轻人容易头脑发热，但本田却不会，思域还是足够“理智和冷静”，空间实用性和油耗的表现都十分优秀。唯一的不足应该是要说服家里长辈为这个不够稳重的长相买单相对来说比较困难。</p>'),
(NULL,'1','07奥迪A4L','3','1天','每周一至周五','豪华汽车各销售区','img-course/q07.jpg','23.5','<p>1.2TSI比我想象的要平顺一些，也比我想象中动力更好，比之前的1.6L车型开起来驾驶感受好很多，同时还有着大空间的优势，完全有替代1.6L车型的能力，现在来看朗逸综合实力依然很强劲。</p><p>朗逸1.2TSI车型的动力表现可以说超越了我此前对它的预期，日常开着感觉与1.4TSI车型很接近，而且不到10秒的加速成绩也可以令人满意。同时，该车在配置方面也较原来的蓝驱版进行了优化，取舍后的配置更符合大部分消费者的喜好。不过，它也有着不少小排量增压车的通病，就是加速时振动略多。</p><p>全新思域凭借漂亮的外观和7.09秒的加速成绩，思域拿9分是实至名归的，在同级车型中绝对是明星车型。而最后的这1分我是综合了以下几个方面来考虑的。第一，超低的坐姿，同事开玩笑说和86的距离只差一个烟蒂，同级车型中这是独一无二的。第二，6MT车型是全球首发，买手动的都是真爱。第三，我相信手动挡车型很大机会加速时间不到7秒，这驾驶乐趣和性能价格比也没谁了。综合以上三点，我给思域10分。</p>'),
(NULL,'2','08宝马3系','4','1天','每周一至周五','豪华汽车各销售区','img-course/q08.jpg','24.5','<p>高功版发动机+双离合+quattro组合放在去年都算很有魅力的，而现在我们有了新3系......很好奇A4L换代的时候会拿出什么技术跟3系抗衡。</p><p>奥迪A4L采用了高功率版2.0T发动机、双离合变速箱和quattro全时四驱系统，这让它距离运动化风格更近了一步，也增强了抗衡2013款宝马3系的实力，唯一的问题是这款比较有新意的车型价格也不低，而且已经是全系中最便宜的quattro版本了。</p><p>这款车拥有鲜明的奥迪运动基因，例如3.0升增压发动机、双离合变速箱、quattro全时四驱以及驾驶模式选项，不过它依然是一辆国产加长版，这多少显得有些奇怪，而且高昂的售价注定了这些好东西</p>'),
(NULL,'3','09本田冠道','1','1天','每周一至周五','豪华汽车各销售区','img-course/q09.jpg','25.6','<p>宝马316装备低功率版1.6T发动机 日常使用来说动力基本够用了，配置方面不差，品牌算是它最大的亮点之一了。在动力方面它不可能提供你什么驾驶乐趣，对于我来说算是能接受的范围。</p><p>虽然这代3系已经向舒适性妥协了，但实际测试感受之后你会发现它依然可以称得上同级别的运动冠军，悬架中后段的支撑依然稳健，N20+ZF8AT的动力组合传统效率令人称赞，另外四驱的3系给人的体验确实和后驱不一样，慢慢的会让人喜欢上，要是能便宜点我就买了。</p><p>这台3系有着极佳的操控感和车辆稳定性，尤其是M风格的方向盘让人爱不释手，提速相当出色，就是匹配的P7轮胎太</p>'),
(NULL,'1','10丰田卡罗拉','2','1天','每周一至周五','豪华汽车各销售区','img-course/q10.jpg','26.7','<p>舒适度出其右的SUV，舍去第三排的意义就在于此了。开起来，纯舒适风格，少了一点本田的犀利，加速按说不慢，但怎么踩油门都没有突兀的加速感，显然本田刻意营造了这种惬意。总体来说这家伙在5座SUV里真是挺棒的，现在还不知道价格，如果上市价格合理的话，我觉得至少能给到9分。</p><p>这辆车，所以在测试过程中看到了一些不愿意看到的问题，比如说涡轮散热不好导致性能衰减，变速箱不爱升挡导致转速偏高等等，这些是我最终不愿意给9分的原因，除此之外，这辆车给我的好感还是不错的，尤其是后排空间，太大了，你想干什么</p><p>冠道是一款挺不错的车，内饰看起来气派、豪华，空间也很大。关键是这车开起来也很好，动力够用，换挡平顺。如果非要鸡蛋里挑骨头，唯一让我不太满意的就是底盘在过减速带时稍微有些生硬，还是一贯的国产本田的风格。</p>'),
(NULL,'2','11丰田思域','3','1天','每周一至周五','豪华汽车各销售区','img-course/q02.jpg','27.2','<p>如果不是没有配备ESC，我觉得卡罗拉1.6L应该是同级别最值得购买的家用车。可惜它没有。这玩意儿倒不是说非有不可，</p><p>作为一辆主打经济的家用车，卡罗拉双擎的表现非常令人满意，动力虽然不突出，但也能满足市区代步的需求，重点是超强的经济性，让人无可挑剔。综合整体的表现，我觉得卡罗拉双擎拿到九分并不为过。但可惜的是，在大多数地区，卡罗拉双擎并不列入新能源车的补助范围，这点是挺可惜的，因为双擎动力并不需要依赖冲电桩、只需要加油就好，而且有越堵车越省油的优点，而且技术成熟，只能说它有些“生不逢时”。</p><p>对于混动系统我们已经非常熟悉了，驾驶感受比较平顺，而且市区中驾驶非常省油。其实最大的亮点就是价格，这是混动系统首次在日本以外的国家生产，成本大大降低，使得混动车型比常规动力车型并没有贵太多钱，回本比较轻松！如果经常在市区中行驶，推荐购买</p>'),
(NULL,'3','12大众朗逸','4','1天','每周一至周五','豪华汽车各销售区','img-course/q01.jpg','28.1','<p>1.2TSI比我想象的要平顺一些，也比我想象中动力更好，比之前的1.6L车型开起来驾驶感受好很多，同时还有着大空间的优势，完全有替代1.6L车型的能力，现在来看朗逸综合实力依然很强劲。</p><p>全新思域无疑是给了我们一个很大的惊喜，除去外观方面的轿跑化设计，性能方面的提升才是真正令人欣喜之处。日常驾驶的时候有着不错的行驶质感，动力输出十分平顺，在城市拥堵路段能有很好的可控性和舒适性。实测数据则说明这是一台加速性能在同级别中有一定优势的车型，适合追求运动快感的朋友。</p><p>全新思域凭借漂亮的外观和7.09秒的加速成绩，思域拿9分是实至名归的，在同级车型中绝对是明星车型。而最后的这1分我是综合了以下几个方面来考虑的。第一，超低的坐姿，同事开玩笑说和86的距离只差一个烟蒂，同级车型中这是独一无二的。第二，6MT车型是全球首发，买手动的都是真爱。第三，我相信手动挡车型很大机会加速时间不到7秒，这驾驶乐趣和性能价格比也没谁了。综合以上三点，我给思域10分。</p>');

/*购物车表*/
CREATE TABLE cart(
    ctid INT PRIMARY KEY AUTO_INCREMENT,/*购物车id*/
    userId INT      /*用户id*/
);

/*购物车详情表*/
CREATE TABLE cart_detail(
    did INT PRIMARY KEY AUTO_INCREMENT,/*详情id*/
    cartId INT,      /*购物车id*/
    courseId INT    /*汽车id*/
);





