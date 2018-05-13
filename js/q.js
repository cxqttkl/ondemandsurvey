var qwords="";
var qString="https://nominatim.openstreetmap.org/search?q="+qwords+"&format=json&viewbox=118,27,123,32&countrycodes=cn&bounded=1";


function queryOSM(){
    var input_key =$("#keyWords");
    qwords = $("#keyWords").val();
    qString="https://nominatim.openstreetmap.org/search?q="+qwords+"&format=json&viewbox=118,27,123,32&countrycodes=cn&bounded=1";
    alert(qString);
}