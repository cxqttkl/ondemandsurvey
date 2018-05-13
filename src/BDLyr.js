//arcgis api for js 加载百度地图
define(["dojo/_base/declare", "esri/layers/DynamicMapServiceLayer", "esri/geometry/Extent", "esri/SpatialReference", "esri/layers/TileInfo"],
    function (declare, DynamicMapServiceLayer, Extent, SpatialReference, TileInfo) 
       {
        return declare("BDLyr",DynamicMapServiceLayer, {
            // 构造函数
            constructor: function (properties) {
                this.spatialReference = new SpatialReference({
                    wkid: 4326
                });

                // 图层提供的起始显示范围以及整个图层的地理范围
                this.fullExtent = new Extent(-180, 0, 180, 90, this.spatialReference);
                this.initialExtent = new Extent(118,27,123,32, this.spatialReference);

                // 设置图层的loaded属性，并触发onLoad事件
                this.loaded = true;
                this.onLoad(this);
            },

            getImageUrl: function (extent, width, height, callback) {

                //AK:3f89da664985fb5d0370cb34a2d04488
                var url = "http://api.map.baidu.com/staticimage/v2?ak=3f89da664985fb5d0370cb34a2d04488"+
                    "&mcode=666666&"+
                    "bbox="+extent.xmin+","+extent.ymin+","+extent.xmax+","+extent.ymax+"&"+
                    "width="+width+"&"+
                    "height="+width+"&"+"zoom=11";
                return url;
            }
        });
    }
)