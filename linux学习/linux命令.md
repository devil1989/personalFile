•   ls: 列出目录
•   cd：切换目录
•   pwd：显示目前的目录
•   mkdir：创建一个新的目录
•   rmdir：删除一个空的目录
•   cp: 复制文件或目录
•   rm: 移除文件或目录
•   mv: 移动文件与目录、文件重命名


vi/vim:用于新建，编辑，删除文本文件
yum：用于安装linux系统下的其他软件【是一个shell前端软件包管理器，类似于npm】
•   1.列出所有可更新的软件清单命令：yum check-update
•   2.更新所有软件命令：yum update
•   3.仅安装指定的软件命令：yum install <package_name>
•   4.仅更新指定的软件命令：yum update <package_name>
•   5.列出所有可安裝的软件清单命令：yum list
•   6.删除软件包命令：yum remove <package_name>
•   7.查找软件包 命令：yum search <keyword>
•   8.清除缓存命令:
o   yum clean packages: 清除缓存目录下的软件包
o   yum clean headers: 清除缓存目录下的 headers
o   yum clean oldheaders: 清除缓存目录下旧的 headers
o   yum clean, yum clean all (= yum clean packages; yum clean oldheaders) :清除缓存目录下的软件包及旧的headers

学习资料：https://www.w3cschool.cn/linux/linux-shell.html
Shell 是一个用 C 语言编写的程序，它是用户使用 Linux 的桥梁
Shell 是指一种应用程序，这个应用程序提供了一个界面，用户通过这个界面访问操作系统内核的服务
Shell 脚本（shell script），是一种为 shell 编写的脚本程序。
Shell 编程跟 java、php 编程一样，只要有一个能编写代码的文本编辑器和一个能解释执行的脚本解释器就可以了
•   Linux的shell种类众多，一般用Bourne Again Shell（/bin/bash），由于易用和免费，Bash 在日常工作中被广泛使用。同时，Bash 也是大多数 Linux 系统默认的 Shell。
•   Shell脚本可以用vim创建，后缀名是sh，就是shell的意思【但扩展名sh并不影响脚本的执行】
•   #!/bin/bash
echo "Hello World !"
•   第一行告诉系统用什么解释器来执行下面的代码，echo表示向窗口输出内容



Ubuntu下的相关命令：【我用腾讯云的版本是ubuntu 20.04 64-bit】
curl：curl命令是个功能强大的网络工具，支持通过http、ftp等方式下载文件、上传文件。还可以用来抓取网页、网络监控等方面的开发，解决开发过程中遇到的问题
    curl命令参数很多，这里只列出我曾经用过、特别是在shell脚本中用到过的那些。
-v/--verbose 小写的v参数，用于打印更多信息，包括发送的请求信息，这在调试脚本是特别有用。
-m/--max-time <seconds> 指定处理的最大时长
-H/--header <header> 指定请求头参数
-s/--slient 减少输出的信息，比如进度
--connect-timeout <seconds> 指定尝试连接的最大时长
-x/--proxy <proxyhost[:port]> 指定代理服务器地址和端口，端口默认为1080
-T/--upload-file <file> 指定上传文件路径
-o/--output <file> 指定输出文件名称
-d/--data/--data-ascii <data> 指定POST的内容
--retry <num> 指定重试次数
-e/--referer <URL> 指定引用地址
-I/--head 仅返回头部信息，使用HEAD请求

apt-get：获取软件


如何查看ubuntu的gnome-shell版本：gnome-shell –version  【gnome在3.28的版本之前有内存泄露问题】



查看端口占用情况：netstat -anp | grep 27017
找到进程id后直接删除：sudo kill 进程号






