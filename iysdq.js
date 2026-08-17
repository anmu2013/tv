var rule = {
    title: '影视大全',
    host: 'https://iysdq.tv',
    url: '/vodshow/fyclass/page/fypage.html',
    searchUrl: '/vodsearch/page/fypage/wd/fyfilter.html',
    searchable: 2, // 开启全局搜索
    quickSearch: 1, // 开启快速搜索
    filterable: 0, // 暂不开启高级筛选
    
    // 分类对应的ID（根据目标网站导航栏抓取）
    class_name: '电影&电视剧&综艺&动漫',
    class_url: '1&2&3&4',

    // 推荐/首页视频采集规则 (CSS选择器)
    推荐: '.vod-list-item;a&&title;img&&data-original;.remarks&&Text;a&&href',
    
    // 分类页视频列表采集规则
    一级: '.vod-list-item;a&&title;img&&data-original;.remarks&&Text;a&&href',
    
    // 详情页采集规则
    二级: {
        "title": "h1&&Text;.vod-detail-info&&span:eq(1)&&Text", // 标题和分类
        "img": ".vod-detail-pic&&img&&src", // 封面图
        "desc": ".vod-detail-content&&Text", // 简介
        "tabs": ".playlist-tab&&li", // 播放线路（如果有多个线路标签）
        "lists": ".playlist&&ul:eq(#id)&&li" // 播放剧集列表
    },
    
    // 搜索结果采集规则
    搜索: '.search-result-item;a&&title;img&&src;.remarks&&Text;a&&href',
}
