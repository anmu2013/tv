var rule = {
    title: '影视大全',
    host: 'https://iysdq.tv',
    url: '/vodshow/fyclass/page/fypage.html',
    searchUrl: '/vodsearch/page/fypage/wd/fyfilter.html',
    searchable: 2,
    quickSearch: 1,
    filterable: 0,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; TVBox) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
        'Referer': 'https://iysdq.tv/'
    },
    class_name: '电影&电视剧&综艺&动漫',
    class_url: '1&2&3&4',
    推荐: '.vod-list-item;a&&title;img&&data-original;.remarks&&Text;a&&href',
    一级: '.vod-list-item;a&&title;img&&data-original;.remarks&&Text;a&&href',
    二级: {
        "title": "h1&&Text;.vod-detail-info&&span:eq(1)&&Text",
        "img": ".vod-detail-pic&&img&&src",
        "desc": ".vod-detail-content&&Text",
        "tabs": ".playlist-tab&&li",
        "lists": ".playlist&&ul:eq(#id)&&li"
    },
    搜索: '.search-result-item;a&&title;img&&src;.remarks&&Text;a&&href',
}
