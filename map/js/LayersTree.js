function buildLayerList(layer) {
    //构建图层树形结构
    var layerinfos = layer.layerInfos;
    var treeList = [];//jquery-easyui的tree用到的tree_data.json数组
    var parentnodes = [];//保存所有的父亲节点
    var root = { "id": "rootnode", "text": "所有图层", "children": [] };//增加一个根节点
    var node = {};
    if (layerinfos != null && layerinfos.length > 0) {

        for (var i = 0, j = layerinfos.length; i < j; i++) {
            var info = layerinfos[i];
            if (info.defaultVisibility) {
                visible.push(info.id);
            }
            //node为tree用到的json数据
            node = {
                "id": info.id,
                "text": info.name,
                "pid": info.parentLayerId,
                "checked": info.defaultVisibility ? true : false,
                "children": []
            };
            if (info.parentLayerId == -1) {
                parentnodes.push(node);
                root.children.push(node);
            } else {
                getChildrenNodes(parentnodes, node);
                parentnodes.push(node);
            }
        }
    }
    treeList.push(root);
    //jquery-easyui的树        
    $('#toc').tree({
        data: treeList,
        checkbox: true, //使节点增加选择框
        onCheck: function (node, checked) {//更新显示选择的图层
            var visible = [];

            var nodes = $('#toc').tree("getChecked");
            dojo.forEach(nodes, function (node) {
                visible.push(node.id);
            });
            //if there aren't any layers visible set the array to be -1
            if (visible.length === 0) {
                visible.push(-1);
            }
            layer.setVisibleLayers(visible);
        }
    });


    layer.setVisibleLayers(visible);
    map.addLayer(layer);
}
