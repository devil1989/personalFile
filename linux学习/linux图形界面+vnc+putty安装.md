

Ubuntu在腾讯云安装图形界面【用ubuntu18.04版本，别用20版本，因为该系统软件不够用，同时会有各种软件不兼容的问题】：
//下面4步安装完后重启，就成功安装了ubuntu界面了，可以去web的vnc上登录查看，已经可以进入UI界面了【sudo su root进入root权限，因为有时候安装软件连sudo权限都不够】
sudo apt-get update
sudo apt-get install xinit
sudo apt-get install gdm3
sudo apt-get install ubuntu-desktop

//接下来是修改配置文件
修改ubuntu.conf配置文件，在文件尾加入两行：

vi /usr/share/lightdm/lightdm.conf.d/50-ubuntu.conf

[Seat:*]

user-session=ubuntu

greeter-show-manual-login=true

allow-guest=false

3.修改pam文件，分别注释/etc/pam.d/gdm-autologin跟/etc/pam.d/gdm-password中的两行内容

vi /etc/pam.d/gdm-autologin

#%PAM-1.0
auth requisite pam_nologin.so
#auth required pam_succeed_if.so user != root quiet_success

vi /etc/pam.d/gdm-password

#%PAM-1.0

auth requisite pam_nologin.so

#auth required pam_succeed_if.so user != root quiet_success

4.修改profile文件，修改最后一行

vi /root/.profile

……

tty -s && mesg n || true


接下来是vnc界面搜索x11,安装X11VNC Server，然后launch，设置端口，设置连接帐号：注意，X1NVC Server是最容易装的，其他的vncserver，tightVnc什么的，网上没一个教程是对的，垃圾得要死
设置好X11VNC Server的端口以后，不能勾选后面的ssl和listen on localhost；点击ok
然后又会出现一个勾选列表，必须要勾选Accept Connections，否则无法连接！！！
通过浏览器的vnc界面登录，然后安装X11VNC-server，设置好端口，这个端口必须在腾讯云的防火墙那边放行。

13、去https://www.realvnc.com/en/connect/download/viewer/下载realVNC软件，是一个exe文件，点开就可以用，不需要安装
14、在 VNC Viewer 软件中，输入 云服务器的 IP 地址:5900，按 Enter，按步骤操作就可以访问了






//通过上面的步骤，可以用在window上用VNC view来访问ubuntu的X11VNC Server软件，实现windows下远程访问ubuntu界面，但是没有加密，在上面的基础上，做一些修改，实现用putty软件的ssh访问X11VNC Server，从而实现ssh安全通道，保证数据安全
详见：具体步骤https://blog.csdn.net/lakeside1/article/details/78350022
前提:
1.  ubuntu的ssh必须是开启的，最好先安装apt-get install openssh-server,然后执行/etc/init.d/ssh start来启动ssh服务【这个不一定有用，但是我是做了这个操作】
2.  X11VNC Server软件需要额外勾选listen on localhost，且端口和putty的Tunnels里面的端口保持一致，这里的 listen on localhost和端口号，和putty的Tunnels的数据保持一致，构建ssh通道；
Putty软件的Tunnels里面的destionation是127.0.0.1:5901是表示本地的监听地址，也就是本地vnc view软件访问这个地址，会直接映射到服务器地址；映射的服务器端口是Tunnels里面的Source port，映射的服务器地址是最上面的session里面的Host Name
Session里面的Host Name后面的port是ubuntu服务器端口，只是用于传递数据【这个端口必须是ubuntu防火墙允许的端口】，这个port和映射没有关系，只需要保证能让数据通过
3.  本地的127.0.0.1:5901和127.0.0.1:1都可以访问到服务器，具体的访问流程是：
本地vncviewer访问127.0.0.1:5901 -->  putty拦截127.0.0.1:5901-->本地putty通过Host Name :Tunnel和服务器构建ssh通道 --> VNCServers所在服务器的ssh通道接受数据然后转化解密数据--> VNCServer因为设置了监听localhost的5901端口，（127.0.0.1:5901），所以能第一时间获取解密数据





















