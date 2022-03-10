import{_ as e,c as i,o as d,d as a}from"./app.10932230.js";const u='{"title":"\u4ECB\u7ECD","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"\u662F\u4EC0\u4E48","slug":"\u662F\u4EC0\u4E48"},{"level":2,"title":"\u80FD\u505A\u4EC0\u4E48","slug":"\u80FD\u505A\u4EC0\u4E48"},{"level":2,"title":"\u7279\u6027","slug":"\u7279\u6027"}],"relativePath":"zh/guide/index.md","lastUpdated":1646890851307}',r={},t=a('<h1 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h1><h2 id="\u662F\u4EC0\u4E48" tabindex="-1">\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u4E24\u4EEA\u5C31\u662F\u4E00\u4E2A<strong>\u8F7B\u91CF\u7EA7\u7684 Android \u5BB9\u5668</strong>\u3002\u5B83\u53EF\u4EE5\u5728 Android \u7CFB\u7EDF\u4E0A\u4EE5\u4E00\u4E2A\u666E\u901A App \u7684\u8EAB\u4EFD\uFF08\u514DROOT\uFF09\u6765\u8FD0\u884C\u4E00\u4E2A\u76F8\u5BF9\u5B8C\u6574\u7684 Android \u7CFB\u7EDF\u3002\u5E76\u4E14\u5B83\u652F\u6301 Android 8.1 ~ <strong>12</strong>\u3002</p><h2 id="\u80FD\u505A\u4EC0\u4E48" tabindex="-1">\u80FD\u505A\u4EC0\u4E48 <a class="header-anchor" href="#\u80FD\u505A\u4EC0\u4E48" aria-hidden="true">#</a></h2><ol><li>\u514D ROOT \u4F7F\u7528\u592A\u6781\xB7\u9633\uFF1B\u540E\u7EED\u4E5F\u53EF\u4EE5\u652F\u6301 Xposed\u3001EdXposed \u548C LSPosed \u7B49\u3002</li><li>\u514D ROOT \u8BBE\u5907\u4E0A\u4F7F\u7528 ROOT \u529F\u80FD\u3002</li><li>\u90E8\u5206\u652F\u6301 Magisk \u6A21\u5757\u3002</li><li>\u4E24\u4EEA\u7684 HAL \u5C42\u662F\u53EF\u4EE5\u865A\u62DF\u5316\u7684\uFF1B\u5982\u865A\u62DF\u76F8\u673A\u7B49\u3002</li><li>\u4E24\u4EEA\u8FD8\u80FD\u7528\u4F5C\u5B89\u5168\u7814\u7A76\uFF1B\u5982\u8131\u58F3\u7B49\u3002</li></ol><h2 id="\u7279\u6027" tabindex="-1">\u7279\u6027 <a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a></h2><ol><li>\u4E24\u4EEA\u662F\u4E00\u4E2A\u514D ROOT \u7684 Android \u7CFB\u7EDF\u7EA7\u5BB9\u5668\uFF1B\u5B83\u5185\u90E8\u8FD0\u884C\u4E86\u4E00\u4E2A\u76F8\u5BF9\u5B8C\u6574\u7684 Android \u7CFB\u7EDF\uFF0C\u4E0E\u5916\u90E8\u7684\u7CFB\u7EDF\u53EF\u4EE5\u5F62\u6210\u4E00\u5B9A\u7A0B\u5EA6\u7684\u9694\u79BB\u3002</li><li>\u4E24\u4EEA\u5185\u90E8 Android \u7CFB\u7EDF\u7248\u672C\u4E3A Android 8.1\uFF1B\u540E\u7EED\u4F1A\u652F\u6301 Android 10.</li><li>\u4E24\u4EEA\u7684\u542F\u52A8\u901F\u5EA6\u975E\u5E38\u5FEB\u3002\u9664\u7B2C\u4E00\u6B21\u521D\u59CB\u5316\u7CFB\u7EDF\u8F83\u6162\u4E4B\u5916\uFF0C\u540E\u7EED\u4E24\u4EEA\u57FA\u672C\u4E0A\u53EF\u4EE5\u5728\u4E09\u79D2\u949F\u5DE6\u53F3\u542F\u52A8\u3002</li><li>\u4E24\u4EEA\u5C06\u4F1A\u662F\u4E00\u4E2A\u5F00\u6E90\u9879\u76EE\u3002</li><li>\u4E24\u4EEA\u5185\u90E8\u7684\u7CFB\u7EDF\u5C06\u662F\u5B8C\u5168\u53EF\u5B9A\u5236\u5316\u7684\u3002\u56E0\u4E3A\u5176\u7CFB\u7EDF\u5F00\u6E90\uFF0C\u4F60\u5B8C\u5168\u53EF\u4EE5\u81EA\u5DF1\u62C9\u4E2A\u5206\u652F\u7F16\u8BD1 AOSP\uFF1B\u5BF9\u7CFB\u7EDF\u7EC4\u4EF6\uFF0C\u5982 framework\uFF0CHAL \u505A\u5B9A\u5236\u5316\u5F00\u53D1\uFF1B\u5B9E\u73B0\u865A\u62DF\u76F8\u673A\uFF0C\u865A\u62DF\u4F20\u611F\u5668\u7B49\u7279\u6B8A\u529F\u80FD\u3002</li></ol>',7),l=[t];function o(n,s,h,_,c,p){return d(),i("div",null,l)}var f=e(r,[["render",o]]);export{u as __pageData,f as default};
