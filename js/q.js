var qwords = "";
var qString = "https://nominatim.openstreetmap.org/search?q=" + qwords + "&format=json&viewbox=118,27,123,32&countrycodes=cn&bounded=1";
var localBaidu = null;

function queryOSM() {

    var input_key = $("#keyWords");
    qwords = $("#keyWords").val();
    //qString="https://nominatim.openstreetmap.org/search?q="+qwords+"&format=json&viewbox=118,27,123,32&countrycodes=cn&bounded=1";

    //geocoder();
    searchBaidu();
}

function searchBaidu() {
    if (Satellitemap) {
        qwords = $("#keyWords").val();
        if (qwords.length > 0) {
            if (localBaidu) {
                localBaidu.search(qwords);
            } else {
                //初始化Search的过程
                localBaidu = new BMap.LocalSearch(Satellitemap, {
                    renderOptions: {
                        map: Satellitemap
                    }
                });
                localBaidu.search(qwords);
            }


        }
    }

}
