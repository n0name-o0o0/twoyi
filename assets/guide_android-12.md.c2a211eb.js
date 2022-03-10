import{_ as t,c as i,o as n,a as e,b as o}from"./app.10932230.js";const A='{"title":"Android 12 User Guide","description":"","frontmatter":{},"relativePath":"guide/android-12.md","lastUpdated":1646891857965}',s={},a=e("h1",{id:"android-12-user-guide",tabindex:"-1"},[o("Android 12 User Guide "),e("a",{class:"header-anchor",href:"#android-12-user-guide","aria-hidden":"true"},"#")],-1),r=e("p",null,[o("Since the "),e("a",{href:"https://cs.android.com/android/_/android/platform/frameworks/base/+/157550849f0430181fa53c8e1b63112c59c6937b",target:"_blank",rel:"noopener noreferrer"},"phantom processes"),o(" mechanism introduced by Google on Android 12 affects the operation of Twoyi, you need to use ADB to remove this restriction; please follow these guidelines.")],-1),d=e("iframe",{src:"//player.bilibili.com/player.html?aid=680784467&bvid=BV1LS4y177bG&cid=488098186&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"100%",height:"500",high_quality:"1",danmaku:"1"}," ",-1),c=e("p",null,"The ADB instructions in video\uFF1A",-1),l=e("blockquote",null,[e("p",null,"/system/bin/device_config set_sync_disabled_for_tests persistent; /system/bin/device_config put activity_manager max_phantom_processes 2147483647")],-1),_=e("p",null,"If you no longer use the Twoyi and want to restore the impact of the above command, you can restore it by executing the following command:",-1),u=e("blockquote",null,[e("p",null,"/system/bin/device_config set_sync_disabled_for_tests none; /system/bin/device_config put activity_manager max_phantom_processes 20")],-1),h=e("p",null,"Attention:",-1),p=e("ol",null,[e("li",null,"If you have root privileges, you can execute the above command directly with root privileges; no ADB is required."),e("li",null,"After executing this command, the corresponding auxiliary app (such as the Black Threshold in the video) can be uninstalled.")],-1),m=[a,r,d,c,l,_,u,h,p];function f(b,g,y,v,x,w){return n(),i("div",null,m)}var B=t(s,[["render",f]]);export{A as __pageData,B as default};
