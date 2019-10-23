var FeatureUtil = {
	FeatureLists :[
    {
        "layername": "PublicWaterway_A",
        "layerId": 163,
		"professionalType":1,
        "FeatuerAttrs": [
            {
                "name": "BLGCOD",
                "type": "esriFieldTypeString",
                "alias": "所在航道编码",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "BLGNAM",
                "type": "esriFieldTypeString",
                "alias": "所在航道名称",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "CODWAW",
                "type": "esriFieldTypeString",
                "alias": "航道属性",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.天然河流及渠化河段航道;2.限制性航道;3.宽浅河流航道;4.山区急流河段航道;5.湖泊航道;6.水库航道;7.潮汐河口航道;999.其他"
            },
            {
                "name": "NAMIPW",
                "type": "esriFieldTypeString",
                "alias": "航道起点名称",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "NAMTPW",
                "type": "esriFieldTypeString",
                "alias": "航道终点名称",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "LENWAW",
                "type": "esriFieldTypeString",
                "alias": "航道里程",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "LGRWAW",
                "type": "esriFieldTypeString",
                "alias": "航道最低通航水位保证率",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "TRFWAW",
                "type": "esriFieldTypeString",
                "alias": "航道内交通流",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.单向;2.双向"
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "WIDWAW",
                "type": "esriFieldTypeDouble",
                "alias": "航道最小宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CRDWAW",
                "type": "esriFieldTypeDouble",
                "alias": "航道最小弯曲半径",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "SQTECG",
                "type": "esriFieldTypeString",
                "alias": "现状技术等级",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.一级;2.二级;3.三级;4.四级;5.五级;6.六级;7.七级;999.其他"
            },
            {
                "name": "DPTECG",
                "type": "esriFieldTypeString",
                "alias": "发展规划技术等级",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.一级;2.二级;3.三级;4.四级;5.五级;6.六级;7.七级;999.其他"
            },
            {
                "name": "SDWTON",
                "type": "esriFieldTypeString",
                "alias": "通航船舶吨级",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATMNT",
                "type": "esriFieldTypeString",
                "alias": "航道维护类别",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATLAY",
                "type": "esriFieldTypeString",
                "alias": "航道配布类别",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.一类航标配布;2.二类航标配布;3.三类航标配布;4.重点航标配布;5.未配布;6.海标配布"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "航道管理部门",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "MNTDEP",
                "type": "esriFieldTypeString",
                "alias": "航道维护部门",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "SpecialPurposeWaterway_A",
		"professionalType":2,
        "layerId": 179,
        "FeatuerAttrs": [
            {
                "name": "BLGCOD",
                "type": "esriFieldTypeString",
                "alias": "所在航道编码",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "BLGNAM",
                "type": "esriFieldTypeString",
                "alias": "所在航道名称",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "CODWAW",
                "type": "esriFieldTypeString",
                "alias": "航道属性",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.天然河流及渠化河段航道;2.限制性航道;3.宽浅河流航道;4.山区急流河段航道;5.湖泊航道;6.水库航道;7.潮汐河口航道;999.其他"
            },
            {
                "name": "NAMIPW",
                "type": "esriFieldTypeString",
                "alias": "航道起点名称",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "NAMTPW",
                "type": "esriFieldTypeString",
                "alias": "航道终点名称",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "LENWAW",
                "type": "esriFieldTypeString",
                "alias": "航道里程",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "LGRWAW",
                "type": "esriFieldTypeString",
                "alias": "航道最低通航水位保证率",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "TRFWAW",
                "type": "esriFieldTypeString",
                "alias": "航道内交通流",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.单向;2.双向"
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "WIDWAW",
                "type": "esriFieldTypeDouble",
                "alias": "航道最小宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CRDWAW",
                "type": "esriFieldTypeDouble",
                "alias": "航道最小弯曲半径",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "SQTECG",
                "type": "esriFieldTypeString",
                "alias": "现状技术等级",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.一级;2.二级;3.三级;4.四级;5.五级;6.六级;7.七级;999.其他"
            },
            {
                "name": "DPTECG",
                "type": "esriFieldTypeString",
                "alias": "发展规划技术等级",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.一级;2.二级;3.三级;4.四级;5.五级;6.六级;7.七级;999.其他"
            },
            {
                "name": "SDWTON",
                "type": "esriFieldTypeString",
                "alias": "通航船舶吨级",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATMNT",
                "type": "esriFieldTypeString",
                "alias": "航道维护类别",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATLAY",
                "type": "esriFieldTypeString",
                "alias": "航道配布类别",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.一类航标配布;2.二类航标配布;3.三类航标配布;4.重点航标配布;5.未配布;6.海标配布"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "航道管理部门",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "MNTDEP",
                "type": "esriFieldTypeString",
                "alias": "航道维护部门",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "LockWaterway_A",
        "layerId": 151,
        "FeatuerAttrs": [
            {
                "name": "CATLCB",
                "type": "esriFieldTypeString",
                "alias": "船闸引航道类型",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.船闸上引航道;2.船闸下引航道"
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "BLGCOD",
                "type": "esriFieldTypeString",
                "alias": "所在航道编码",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "BLGNAM",
                "type": "esriFieldTypeString",
                "alias": "所在航道名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SQTECG",
                "type": "esriFieldTypeString",
                "alias": "现状技术等级",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.一级;2.二级;3.三级;4.四级;5.五级;6.六级;7.七级;999.其他"
            },
            {
                "name": "DPTECG",
                "type": "esriFieldTypeString",
                "alias": "发展规划技术等级",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.一级;2.二级;3.三级;4.四级;5.五级;6.六级;7.七级;999.其他"
            },
            {
                "name": "SDWTON",
                "type": "esriFieldTypeString",
                "alias": "通航船舶吨级",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATMNT",
                "type": "esriFieldTypeString",
                "alias": "航段维护类别",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATLAY",
                "type": "esriFieldTypeString",
                "alias": "航道配布类别",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.一类航标配布;2.二类航标配布;3.三类航标配布;4.重点航标配布;5.未配布;6.海标配布"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "航段管理部门",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "MNTDEP",
                "type": "esriFieldTypeString",
                "alias": "航段维护部门",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "WaterGauge_P",
        "layerId": 65,
        "FeatuerAttrs": [
            {
                "name": "CATMEA",
                "type": "esriFieldTypeString",
                "alias": "水文观测站类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.水文观测站;;2.水位站"
            },
            {
                "name": "CATGAG",
                "type": "esriFieldTypeString",
                "alias": "水位观读方式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.自动测报;;2.人工观读"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "水文观测站管理部门",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "TELEID",
                "type": "esriFieldTypeString",
                "alias": "水位遥测遥报系统标识符",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "WaterwayCamera_P",
        "layerId": 68,
        "FeatuerAttrs": [
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "监控站管理部门",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "WaterwayAdministration_P",
        "layerId": 67,
        "FeatuerAttrs": [
            {
                "name": "CATWAD",
                "type": "esriFieldTypeString",
                "alias": "航道管理机构类型",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": "1.地方港口管理部门;2.交通部航务管理部门;3.航道管理部门;4.公安管理部门;5.通信管理部门;6.航道（标）测绘所;7.航道（标）站"
            },
            {
                "name": "COMADD",
                "type": "esriFieldTypeString",
                "alias": "航道管理机构通信地址",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "POSCOD",
                "type": "esriFieldTypeString",
                "alias": "航道管理机构邮编",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CONTPN",
                "type": "esriFieldTypeString",
                "alias": "航道管理机构联系人",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CONTNO",
                "type": "esriFieldTypeString",
                "alias": "航道管理机构联系电话",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "WSJWAO",
                "type": "esriFieldTypeString",
                "alias": "航道管理机构所辖航道范围",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "NavigationMark_P",
        "layerId": 33,
        "FeatuerAttrs": [
            {
                "name": "NUMATN",
                "type": "esriFieldTypeDouble",
                "alias": "航标编号",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 18,
                "values": ""
            },
            {
                "name": "CATNGM",
                "type": "esriFieldTypeString",
                "alias": "航行标志类型",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.过河标;2.沿岸标;3.侧面标;4.泛滥标;5.示位标;6.左右通航标;7.桥涵标;8.过渡导标;9.导标;10.首尾导标;11.导标;999.其他"
            },
            {
                "name": "LOCTON",
                "type": "esriFieldTypeString",
                "alias": "设置位置",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.岸标;2.浮标"
            },
            {
                "name": "BNKATN",
                "type": "esriFieldTypeString",
                "alias": "岸别",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.左岸;2.右岸;3.无"
            },
            {
                "name": "SHPATN",
                "type": "esriFieldTypeString",
                "alias": "形状",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.塔型标;2.杆形标;3.标志船;4.浮鼓;5.锥形;6.罐形（圆柱形）;7.方形;8.圆形;9.菱形;999.其他"
            },
            {
                "name": "COLOUR",
                "type": "esriFieldTypeString",
                "alias": "颜色",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.红;2.绿;3.黄;4.白;5.蓝;6.黄蓝;7.白红;999.其他"
            },
            {
                "name": "COLPAT",
                "type": "esriFieldTypeString",
                "alias": "图案",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.横条纹;2.竖条纹;3.斜条纹;4.正方形;5.条纹（方向未知）;6边界条纹;999.其他"
            },
            {
                "name": "TOPCOL",
                "type": "esriFieldTypeString",
                "alias": "顶标颜色",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.白;2.黑;3.红"
            },
            {
                "name": "TOPSHP",
                "type": "esriFieldTypeString",
                "alias": "顶标形状",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.尖向上锥形;2.尖向下锥形;3.球体形;4.双球体;5.圆柱形;6.牌形;7 .X形（圣.安德路十字）;8.竖直十字形（圣.乔治十字）;9.顶上立方体;10.顶点相对双锥体 11.顶点相背双锥体12.菱形（钻石型）;13.顶点朝上双锥体14.顶点朝下双锥体15.顶向上扫帚形（扫帚或杆形）;16.顶向下扫帚形（扫帚或杆形）;17.旗;18.球体在菱形体上19.正方形;20.平放长方形;21.竖放长方形;22.直立梯形;23.倒立梯形;24.尖向上三角形;25.尖向下三角形;26.圆形;27.双十字（一个在另一个之上）;28.T形;29.圆上方的尖朝上三角形;30.竖直十字在圆;31.菱形在圆上;32.圆在三角形顶尖上;999:其他"
            },
            {
                "name": "LITCOL",
                "type": "esriFieldTypeString",
                "alias": "灯色",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.红;2.黄;3.绿;4.无"
            },
            {
                "name": "LITCHR",
                "type": "esriFieldTypeString",
                "alias": "灯质",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.单闪光;2.双闪光;3.三闪光;4.四闪光;5.快闪光"
            },
            {
                "name": "SIGPER",
                "type": "esriFieldTypeString",
                "alias": "闪光周期",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SIGSEQ",
                "type": "esriFieldTypeString",
                "alias": "信号序列",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MARSYS",
                "type": "esriFieldTypeString",
                "alias": "助航标志体系",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.国际航标协会（IALA）A;2. 国际航标协会（IALA）B;3.中国内河航标系统;999其他"
            },
            {
                "name": "RENATN",
                "type": "esriFieldTypeDouble",
                "alias": "航标遥测号码",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 20,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;4.木质结构;;5.金属结构;;6.玻璃钢结构;;999.其他"
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "SignalMark_P",
        "layerId": 52,
        "FeatuerAttrs": [
            {
                "name": "NUMATN",
                "type": "esriFieldTypeDouble",
                "alias": "航标编号",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 18,
                "values": ""
            },
            {
                "name": "CATSGM",
                "type": "esriFieldTypeString",
                "alias": "信号标志类型",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.通行信号标;2.鸣笛标;3.界限标;4.水深信号标;5.横流标;6.节制闸标;7.进出闸信号标;999.其他"
            },
            {
                "name": "LOCTON",
                "type": "esriFieldTypeString",
                "alias": "设置位置",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.岸标;2.浮标"
            },
            {
                "name": "BNKATN",
                "type": "esriFieldTypeString",
                "alias": "岸别",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.左岸;2.右岸;3.无"
            },
            {
                "name": "SHPATN",
                "type": "esriFieldTypeString",
                "alias": "形状",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.塔型标;2.杆形标;3.标志船;4.浮鼓;5.锥形;6.罐形（圆柱形）;7.方形;8.圆形;9.菱形;999.其他"
            },
            {
                "name": "COLOUR",
                "type": "esriFieldTypeString",
                "alias": "颜色",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.红;2.绿;3.黄;4.白;5.蓝;6.黄蓝;7.白红;999.其他"
            },
            {
                "name": "COLPAT",
                "type": "esriFieldTypeString",
                "alias": "图案",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.横条纹;2.竖条纹;3.斜条纹;4.正方形;5.条纹（方向未知）;6边界条纹;999.其他"
            },
            {
                "name": "TOPCOL",
                "type": "esriFieldTypeString",
                "alias": "顶标颜色",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.白;2.黑;3.红"
            },
            {
                "name": "TOPSHP",
                "type": "esriFieldTypeString",
                "alias": "顶标形状",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.尖向上锥形;2.尖向下锥形;3.球体形;4.双球体;5.圆柱形;6.牌形;7 .X形（圣.安德路十字）;8.竖直十字形（圣.乔治十字）;9.顶上立方体;10.顶点相对双锥体 11.顶点相背双锥体12.菱形（钻石型）;13.顶点朝上双锥体14.顶点朝下双锥体15.顶向上扫帚形（扫帚或杆形）;16.顶向下扫帚形（扫帚或杆形）;17.旗;18.球体在菱形体上19.正方形;20.平放长方形;21.竖放长方形;22.直立梯形;23.倒立梯形;24.尖向上三角形;25.尖向下三角形;26.圆形;27.双十字（一个在另一个之上）;28.T形;29.圆上方的尖朝上三角形;30.竖直十字在圆;31.菱形在圆上;32.圆在三角形顶尖上;999:其他"
            },
            {
                "name": "LITCOL",
                "type": "esriFieldTypeString",
                "alias": "灯色",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.红;2.黄;3.绿;4.无"
            },
            {
                "name": "LITCHR",
                "type": "esriFieldTypeString",
                "alias": "灯质",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.单闪光;2.双闪光;3.三闪光;4.四闪光;5.快闪光"
            },
            {
                "name": "SIGPER",
                "type": "esriFieldTypeString",
                "alias": "闪光周期",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SIGSEQ",
                "type": "esriFieldTypeString",
                "alias": "信号序列",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MARSYS",
                "type": "esriFieldTypeString",
                "alias": "助航标志体系",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.国际航标协会（IALA）A;2. 国际航标协会（IALA）B;3.中国内河航标系统;999其他"
            },
            {
                "name": "RENATN",
                "type": "esriFieldTypeDouble",
                "alias": "航标遥测号码",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 20,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;4.木质结构;;5.金属结构;;6.玻璃钢结构;;999.其他"
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "SpecialMark_P",
        "layerId": 56,
        "FeatuerAttrs": [
            {
                "name": "NUMATN",
                "type": "esriFieldTypeDouble",
                "alias": "航标编号",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 18,
                "values": ""
            },
            {
                "name": "CATSPM",
                "type": "esriFieldTypeString",
                "alias": "专用标志类型",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.管线标;2.专用标;999.其他"
            },
            {
                "name": "LOCTON",
                "type": "esriFieldTypeString",
                "alias": "设置位置",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.岸标;2.浮标"
            },
            {
                "name": "BNKATN",
                "type": "esriFieldTypeString",
                "alias": "岸别",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.左岸;2.右岸;3.无"
            },
            {
                "name": "SHPATN",
                "type": "esriFieldTypeString",
                "alias": "形状",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.塔型标;2.杆形标;3.标志船;4.浮鼓;5.锥形;6.罐形（圆柱形）;7.方形;8.圆形;9.菱形;999.其他"
            },
            {
                "name": "COLOUR",
                "type": "esriFieldTypeString",
                "alias": "颜色",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.红;2.绿;3.黄;4.白;5.蓝;6.黄蓝;7.白红;999.其他"
            },
            {
                "name": "COLPAT",
                "type": "esriFieldTypeString",
                "alias": "图案",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.横条纹;2.竖条纹;3.斜条纹;4.正方形;5.条纹（方向未知）;6边界条纹;999.其他"
            },
            {
                "name": "TOPCOL",
                "type": "esriFieldTypeString",
                "alias": "顶标颜色",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.白2.黑3.红"
            },
            {
                "name": "TOPSHP",
                "type": "esriFieldTypeString",
                "alias": "顶标形状",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.尖向上锥形;2.尖向下锥形;3.球体形;4.双球体;5.圆柱形;6.牌形;7 .X形（圣.安德路十字）;8.竖直十字形（圣.乔治十字）;9.顶上立方体;10.顶点相对双锥体 11.顶点相背双锥体12.菱形（钻石型）;13.顶点朝上双锥体14.顶点朝下双锥体15.顶向上扫帚形（扫帚或杆形）;16.顶向下扫帚形（扫帚或杆形）;17.旗;18.球体在菱形体上19.正方形;20.平放长方形;21.竖放长方形;22.直立梯形;23.倒立梯形;24.尖向上三角形;25.尖向下三角形;26.圆形;27.双十字（一个在另一个之上）;28.T形29.圆上方的尖朝上三角形;30.竖直十字在圆;31.菱形在圆上;32.圆在三角形顶尖上;999:其他"
            },
            {
                "name": "LITCOL",
                "type": "esriFieldTypeString",
                "alias": "灯色",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.红;2.黄;3.绿;4.无"
            },
            {
                "name": "LITCHR",
                "type": "esriFieldTypeString",
                "alias": "灯质",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.单闪光;2.双闪光;3.三闪光;4.四闪光;5.快闪光"
            },
            {
                "name": "SIGPER",
                "type": "esriFieldTypeString",
                "alias": "闪光周期",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SIGSEQ",
                "type": "esriFieldTypeString",
                "alias": "信号序列",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MARSYS",
                "type": "esriFieldTypeString",
                "alias": "助航标志体系",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.国际航标协会（IALA）A;2. 国际航标协会（IALA）B;3.中国内河航标系统;999其他"
            },
            {
                "name": "RENATN",
                "type": "esriFieldTypeDouble",
                "alias": "航标遥测号码",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 20,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;6.木质结构;;7.金属结构;;8.玻璃钢结构;;999.其他"
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "IndicationMark_P",
        "layerId": 25,
        "FeatuerAttrs": [
            {
                "name": "NUMATN",
                "type": "esriFieldTypeDouble",
                "alias": "航标编号",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 18,
                "values": ""
            },
            {
                "name": "CATINM",
                "type": "esriFieldTypeString",
                "alias": "提示标志类型",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.通航桥孔左侧标;2.通航桥孔右侧标;3.航道整治建筑物提示标志;4.航道信息提示标牌5.航道里程牌;6.航道指路牌;999.其他"
            },
            {
                "name": "LOCTON",
                "type": "esriFieldTypeString",
                "alias": "设置位置",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.岸标;2.浮标"
            },
            {
                "name": "BNKATN",
                "type": "esriFieldTypeString",
                "alias": "岸别",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.左岸;2.右岸;3.无"
            },
            {
                "name": "SHPATN",
                "type": "esriFieldTypeString",
                "alias": "形状",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.塔型标;2.杆形标;3.标志船;4.浮鼓;5.锥形;6.罐形（圆柱形）;7.方形;8.圆形;9.菱形;999.其他"
            },
            {
                "name": "COLOUR",
                "type": "esriFieldTypeString",
                "alias": "颜色",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.红;2.绿;3.黄;4.白;5.蓝;6.黄蓝;7.白红;999.其他"
            },
            {
                "name": "COLPAT",
                "type": "esriFieldTypeString",
                "alias": "图案",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.横条纹;2.竖条纹;3.斜条纹;4.正方形;5.条纹（方向未知）;6边界条纹;999.其他"
            },
            {
                "name": "TOPCOL",
                "type": "esriFieldTypeString",
                "alias": "顶标颜色",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.白;2.黑;3.红"
            },
            {
                "name": "TOPSHP",
                "type": "esriFieldTypeString",
                "alias": "顶标形状",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.尖向上锥形;2.尖向下锥形;3.球体形;4.双球体;5.圆柱形;6.牌形;7 .X形（圣.安德路十字）;8.竖直十字形（圣.乔治十字）;9.顶上立方体;10.顶点相对双锥体 11.顶点相背双锥体12.菱形（钻石型）;13.顶点朝上双锥体14.顶点朝下双锥体15.顶向上扫帚形（扫帚或杆形）;16.顶向下扫帚形（扫帚或杆形）;17.旗;18.球体在菱形体上19.正方形;20.平放长方形;21.竖放长方形;22.直立梯形;23.倒立梯形;24.尖向上三角形;25.尖向下三角形;26.圆形;27.双十字（一个在另一个之上）;28.T形29.圆上方的尖朝上三角形;30.竖直十字在圆;31.菱形在圆上;32.圆在三角形顶尖上;999:其他"
            },
            {
                "name": "LITCOL",
                "type": "esriFieldTypeString",
                "alias": "灯色",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.红;2.黄;3.绿;4.无"
            },
            {
                "name": "LITCHR",
                "type": "esriFieldTypeString",
                "alias": "灯质",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.单闪光;2.双闪光;3.三闪光;4.四闪光;5.快闪光"
            },
            {
                "name": "SIGPER",
                "type": "esriFieldTypeString",
                "alias": "闪光周期",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SIGSEQ",
                "type": "esriFieldTypeString",
                "alias": "信号序列",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MARSYS",
                "type": "esriFieldTypeString",
                "alias": "助航标志体系",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.国际航标协会（IALA）A;2.国际航标协会（IALA）B;3.中国内河航标系统;999其他"
            },
            {
                "name": "RENATN",
                "type": "esriFieldTypeDouble",
                "alias": "航标遥测号码",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 20,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;4.木质结构;;5.金属结构;;6.玻璃钢结构;;999.其他"
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "WarningMark_P",
        "layerId": 63,
        "FeatuerAttrs": [
            {
                "name": "NUMATN",
                "type": "esriFieldTypeDouble",
                "alias": "航标编号",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 18,
                "values": ""
            },
            {
                "name": "CATWAR",
                "type": "esriFieldTypeString",
                "alias": "警示标志类型",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.禁止抛锚标;2.非通航桥孔标志;3.航道受限标牌;999.其他"
            },
            {
                "name": "LOCTON",
                "type": "esriFieldTypeString",
                "alias": "设置位置",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.岸标;2.浮标"
            },
            {
                "name": "BNKATN",
                "type": "esriFieldTypeString",
                "alias": "岸别",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.左岸;2.右岸;3.无"
            },
            {
                "name": "SHPATN",
                "type": "esriFieldTypeString",
                "alias": "形状",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.塔型标;2.杆形标;3.标志船;4.浮鼓;5.锥形;6.罐形（圆柱形）;7.方形;8.圆形;9.菱形;999.其他"
            },
            {
                "name": "COLOUR",
                "type": "esriFieldTypeString",
                "alias": "颜色",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.红;2.绿;3.黄;4.白;5.蓝;6.黄蓝;7.白红;999.其他"
            },
            {
                "name": "COLPAT",
                "type": "esriFieldTypeString",
                "alias": "图案",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.横条纹;2.竖条纹;3.斜条纹;4.正方形;5.条纹（方向未知）;6边界条纹;999.其他"
            },
            {
                "name": "TOPCOL",
                "type": "esriFieldTypeString",
                "alias": "顶标颜色",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.白;2.黑;3.红"
            },
            {
                "name": "TOPSHP",
                "type": "esriFieldTypeString",
                "alias": "顶标形状",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.尖向上锥形;2.尖向下锥形;3.球体形;4.双球体;5.圆柱形;6.牌形;7 .X形（圣.安德路十字）;8.竖直十字形（圣.乔治十字）;9.顶上立方体;10.顶点相对双锥体 11.顶点相背双锥体12.菱形（钻石型）;13.顶点朝上双锥体14.顶点朝下双锥体15.顶向上扫帚形（扫帚或杆形）;16.顶向下扫帚形（扫帚或杆形）;17.旗;18.球体在菱形体上19.正方形;20.平放长方形;21.竖放长方形;22.直立梯形;23.倒立梯形;24.尖向上三角形;25.尖向下三角形;26.圆形;27.双十字（一个在另一个之上）;28.T形29.圆上方的尖朝上三角形;30.竖直十字在圆;31.菱形在圆上;32.圆在三角形顶尖上;999:其他"
            },
            {
                "name": "LITCOL",
                "type": "esriFieldTypeString",
                "alias": "灯色",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1:红/2:黄/3:绿/4:无"
            },
            {
                "name": "LITCHR",
                "type": "esriFieldTypeString",
                "alias": "灯质",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.单闪光;2.双闪光;3.三闪光;4.四闪光;5.快闪光"
            },
            {
                "name": "SIGPER",
                "type": "esriFieldTypeString",
                "alias": "闪光周期",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SIGSEQ",
                "type": "esriFieldTypeString",
                "alias": "信号序列",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MARSYS",
                "type": "esriFieldTypeString",
                "alias": "助航标志体系",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.国际航标协会（IALA）A;2. 国际航标协会（IALA）B;3.中国内河航标系统;999其他"
            },
            {
                "name": "RENATN",
                "type": "esriFieldTypeDouble",
                "alias": "航标遥测号码",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 20,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;6.木质结构;;7.金属结构;;8.玻璃钢结构;;999.其他"
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "LockBasin_A",
        "layerId": 150,
        "FeatuerAttrs": [
            {
                "name": "LOBLVL",
                "type": "esriFieldTypeString",
                "alias": "船闸级别",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.设计最大船舶吨级为3000T;2.设计最大船舶吨级为2000T;3.设计最大船舶吨级为1000T;4设计最大船舶吨级为500T;5.设计最大船舶吨级为300T;6.设计最大船舶吨级为200T;7.设计最大船舶吨级为100T;8.设计最大船舶吨级小于50T"
            },
            {
                "name": "LOBLIN",
                "type": "esriFieldTypeString",
                "alias": "线数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1．一线;2．二线"
            },
            {
                "name": "EFLLOB",
                "type": "esriFieldTypeDouble",
                "alias": "船闸有效长度",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "EFWLOB",
                "type": "esriFieldTypeDouble",
                "alias": "船闸有效宽度",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "MWDASI",
                "type": "esriFieldTypeDouble",
                "alias": "船闸门槛最小水深",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "NARLOB",
                "type": "esriFieldTypeString",
                "alias": "船闸通航规则",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MASLOB",
                "type": "esriFieldTypeString",
                "alias": "管道设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "ShipLift_P",
        "layerId": 49,
        "FeatuerAttrs": [
            {
                "name": "PATSHL",
                "type": "esriFieldTypeString",
                "alias": "升船机形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.湿运;2.干运"
            },
            {
                "name": "CBLSHL",
                "type": "esriFieldTypeDouble",
                "alias": "升船机厢长",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "CBWSHL",
                "type": "esriFieldTypeDouble",
                "alias": "升船机厢宽",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "DEPSHL",
                "type": "esriFieldTypeDouble",
                "alias": "升船机水深",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PATSHL",
                "type": "esriFieldTypeString",
                "alias": "升船机形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.湿运;2.干运"
            },
            {
                "name": "CBLSHL",
                "type": "esriFieldTypeDouble",
                "alias": "升船机厢长",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "CBWSHL",
                "type": "esriFieldTypeDouble",
                "alias": "升船机厢宽",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "DEPSHL",
                "type": "esriFieldTypeDouble",
                "alias": "升船机水深",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "ShipLift_A",
        "layerId": 49,
        "FeatuerAttrs": [
            {
                "name": "PATSHL",
                "type": "esriFieldTypeString",
                "alias": "升船机形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.湿运;2.干运"
            },
            {
                "name": "CBLSHL",
                "type": "esriFieldTypeDouble",
                "alias": "升船机厢长",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "CBWSHL",
                "type": "esriFieldTypeDouble",
                "alias": "升船机厢宽",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "DEPSHL",
                "type": "esriFieldTypeDouble",
                "alias": "升船机水深",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PATSHL",
                "type": "esriFieldTypeString",
                "alias": "升船机形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.湿运;2.干运"
            },
            {
                "name": "CBLSHL",
                "type": "esriFieldTypeDouble",
                "alias": "升船机厢长",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "CBWSHL",
                "type": "esriFieldTypeDouble",
                "alias": "升船机厢宽",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "DEPSHL",
                "type": "esriFieldTypeDouble",
                "alias": "升船机水深",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "RegulatingDike_P",
        "layerId": 44,
        "FeatuerAttrs": [
            {
                "name": "PATRLS",
                "type": "esriFieldTypeString",
                "alias": "整治建筑物形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.丁坝（对应标准1）;2.顺坝（对应标准4）;3.锁坝（对应标准5）;4.潜坝（对应标准7）"
            },
            {
                "name": "CATTEC",
                "type": "esriFieldTypeString",
                "alias": "技术状况分类",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.一类（良好）;2.二类（少量损坏）3.三类（损坏明显）;4.四类（损坏严重）"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MNTDEP",
                "type": "esriFieldTypeString",
                "alias": "维护部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "HORLEN",
                "type": "esriFieldTypeDouble",
                "alias": "水平长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "HORWID",
                "type": "esriFieldTypeDouble",
                "alias": "水平宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PATRLS",
                "type": "esriFieldTypeString",
                "alias": "整治建筑物形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.丁坝（对应标准1）;2.顺坝（对应标准4）;3.锁坝（对应标准5）;4.潜坝（对应标准7）"
            },
            {
                "name": "CATTEC",
                "type": "esriFieldTypeString",
                "alias": "技术状况分类",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.一类（良好）;2.二类（少量损坏）3.三类（损坏明显）;4.四类（损坏严重）"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MNTDEP",
                "type": "esriFieldTypeString",
                "alias": "维护部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "HORLEN",
                "type": "esriFieldTypeDouble",
                "alias": "水平长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "HORWID",
                "type": "esriFieldTypeDouble",
                "alias": "水平宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PATRLS",
                "type": "esriFieldTypeString",
                "alias": "整治建筑物形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.丁坝（对应标准1）;2.顺坝（对应标准4）;3.锁坝（对应标准5）;4.潜坝（对应标准7）"
            },
            {
                "name": "CATTEC",
                "type": "esriFieldTypeString",
                "alias": "技术状况分类",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.一类（良好）;2.二类（少量损坏）3.三类（损坏明显）;4.四类（损坏严重）"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MNTDEP",
                "type": "esriFieldTypeString",
                "alias": "维护部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "HORLEN",
                "type": "esriFieldTypeDouble",
                "alias": "水平长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "HORWID",
                "type": "esriFieldTypeDouble",
                "alias": "水平宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "RegulatingDike_L",
        "layerId": 44,
        "FeatuerAttrs": [
            {
                "name": "PATRLS",
                "type": "esriFieldTypeString",
                "alias": "整治建筑物形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.丁坝（对应标准1）;2.顺坝（对应标准4）;3.锁坝（对应标准5）;4.潜坝（对应标准7）"
            },
            {
                "name": "CATTEC",
                "type": "esriFieldTypeString",
                "alias": "技术状况分类",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.一类（良好）;2.二类（少量损坏）3.三类（损坏明显）;4.四类（损坏严重）"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MNTDEP",
                "type": "esriFieldTypeString",
                "alias": "维护部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "HORLEN",
                "type": "esriFieldTypeDouble",
                "alias": "水平长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "HORWID",
                "type": "esriFieldTypeDouble",
                "alias": "水平宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PATRLS",
                "type": "esriFieldTypeString",
                "alias": "整治建筑物形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.丁坝（对应标准1）;2.顺坝（对应标准4）;3.锁坝（对应标准5）;4.潜坝（对应标准7）"
            },
            {
                "name": "CATTEC",
                "type": "esriFieldTypeString",
                "alias": "技术状况分类",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.一类（良好）;2.二类（少量损坏）3.三类（损坏明显）;4.四类（损坏严重）"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MNTDEP",
                "type": "esriFieldTypeString",
                "alias": "维护部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "HORLEN",
                "type": "esriFieldTypeDouble",
                "alias": "水平长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "HORWID",
                "type": "esriFieldTypeDouble",
                "alias": "水平宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PATRLS",
                "type": "esriFieldTypeString",
                "alias": "整治建筑物形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.丁坝（对应标准1）;2.顺坝（对应标准4）;3.锁坝（对应标准5）;4.潜坝（对应标准7）"
            },
            {
                "name": "CATTEC",
                "type": "esriFieldTypeString",
                "alias": "技术状况分类",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.一类（良好）;2.二类（少量损坏）3.三类（损坏明显）;4.四类（损坏严重）"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MNTDEP",
                "type": "esriFieldTypeString",
                "alias": "维护部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "HORLEN",
                "type": "esriFieldTypeDouble",
                "alias": "水平长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "HORWID",
                "type": "esriFieldTypeDouble",
                "alias": "水平宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "RegulatingDike_A",
        "layerId": 44,
        "FeatuerAttrs": [
            {
                "name": "PATRLS",
                "type": "esriFieldTypeString",
                "alias": "整治建筑物形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.丁坝（对应标准1）;2.顺坝（对应标准4）;3.锁坝（对应标准5）;4.潜坝（对应标准7）"
            },
            {
                "name": "CATTEC",
                "type": "esriFieldTypeString",
                "alias": "技术状况分类",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.一类（良好）;2.二类（少量损坏）3.三类（损坏明显）;4.四类（损坏严重）"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MNTDEP",
                "type": "esriFieldTypeString",
                "alias": "维护部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "HORLEN",
                "type": "esriFieldTypeDouble",
                "alias": "水平长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "HORWID",
                "type": "esriFieldTypeDouble",
                "alias": "水平宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PATRLS",
                "type": "esriFieldTypeString",
                "alias": "整治建筑物形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.丁坝（对应标准1）;2.顺坝（对应标准4）;3.锁坝（对应标准5）;4.潜坝（对应标准7）"
            },
            {
                "name": "CATTEC",
                "type": "esriFieldTypeString",
                "alias": "技术状况分类",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.一类（良好）;2.二类（少量损坏）3.三类（损坏明显）;4.四类（损坏严重）"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MNTDEP",
                "type": "esriFieldTypeString",
                "alias": "维护部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "HORLEN",
                "type": "esriFieldTypeDouble",
                "alias": "水平长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "HORWID",
                "type": "esriFieldTypeDouble",
                "alias": "水平宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PATRLS",
                "type": "esriFieldTypeString",
                "alias": "整治建筑物形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.丁坝（对应标准1）;2.顺坝（对应标准4）;3.锁坝（对应标准5）;4.潜坝（对应标准7）"
            },
            {
                "name": "CATTEC",
                "type": "esriFieldTypeString",
                "alias": "技术状况分类",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.一类（良好）;2.二类（少量损坏）3.三类（损坏明显）;4.四类（损坏严重）"
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MNTDEP",
                "type": "esriFieldTypeString",
                "alias": "维护部门",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "HORLEN",
                "type": "esriFieldTypeDouble",
                "alias": "水平长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "HORWID",
                "type": "esriFieldTypeDouble",
                "alias": "水平宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Bridge_L",
		"professionalType":10,
        "layerId": 116,
        "FeatuerAttrs": [
            {
                "name": "CATBRG",
                "type": "esriFieldTypeString",
                "alias": "桥梁类型",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.铁路桥（对应标准102）;2.公路桥（对应标准103）;3.公铁两用桥（对应标准109）;4.人行桥（对应标准9）;999.其他（对应标准999）",
                "visiable": true
            },
            {
                "name": "STPBRG",
                "type": "esriFieldTypeString",
                "alias": "桥梁结构形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.拱式桥;2.梁式桥;3.桁架桥;4.索拉桥;999.其他"
            },
            {
                "name": "BRIWID",
                "type": "esriFieldTypeDouble",
                "alias": "桥面宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "BRILEG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NUMPIR",
                "type": "esriFieldTypeDouble",
                "alias": "桥墩个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 2,
                "values": ""
            },
            {
                "name": "NUMSPN",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 2,
                "values": ""
            },
            {
                "name": "DNGBRG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁设计通航保证率",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NSDBRG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁通航安全距离",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 10,
                "values": ""
            },
            {
                "name": "FECBRG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁防撞能力",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 10,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "",
                "visiable": true
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATBRG",
                "type": "esriFieldTypeString",
                "alias": "桥梁类型",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.铁路桥（对应标准102）;2.公路桥（对应标准103）;3.公铁两用桥（对应标准109）;4.人行桥（对应标准9）;999.其他（对应标准999）"
            },
            {
                "name": "STPBRG",
                "type": "esriFieldTypeString",
                "alias": "桥梁结构形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.拱式桥;2.梁式桥;3.桁架桥;4.索拉桥;999.其他"
            },
            {
                "name": "BRIWID",
                "type": "esriFieldTypeDouble",
                "alias": "桥面宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "BRILEG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NUMPIR",
                "type": "esriFieldTypeDouble",
                "alias": "桥墩个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 2,
                "values": ""
            },
            {
                "name": "NUMSPN",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 2,
                "values": ""
            },
            {
                "name": "DNGBRG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁设计通航保证率",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NSDBRG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁通航安全距离",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 10,
                "values": ""
            },
            {
                "name": "FECBRG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁防撞能力",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 10,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Bridge_A",
        "layerId": 75,
        "FeatuerAttrs": [
            {
                "name": "CATBRG",
                "type": "esriFieldTypeString",
                "alias": "桥梁类型",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.铁路桥（对应标准102）;2.公路桥（对应标准103）;3.公铁两用桥（对应标准109）;4.人行桥（对应标准9）;999.其他（对应标准999）"
            },
            {
                "name": "STPBRG",
                "type": "esriFieldTypeString",
                "alias": "桥梁结构形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.拱式桥;2.梁式桥;3.桁架桥;4.索拉桥;999.其他"
            },
            {
                "name": "BRIWID",
                "type": "esriFieldTypeDouble",
                "alias": "桥面宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "BRILEG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NUMPIR",
                "type": "esriFieldTypeDouble",
                "alias": "桥墩个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 2,
                "values": ""
            },
            {
                "name": "NUMSPN",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 2,
                "values": ""
            },
            {
                "name": "DNGBRG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁设计通航保证率",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NSDBRG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁通航安全距离",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 10,
                "values": ""
            },
            {
                "name": "FECBRG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁防撞能力",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 10,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATBRG",
                "type": "esriFieldTypeString",
                "alias": "桥梁类型",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": "1.铁路桥（对应标准102）;2.公路桥（对应标准103）;3.公铁两用桥（对应标准109）;4.人行桥（对应标准9）;999.其他（对应标准999）"
            },
            {
                "name": "STPBRG",
                "type": "esriFieldTypeString",
                "alias": "桥梁结构形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.拱式桥;2.梁式桥;3.桁架桥;4.索拉桥;999.其他"
            },
            {
                "name": "BRIWID",
                "type": "esriFieldTypeDouble",
                "alias": "桥面宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "BRILEG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NUMPIR",
                "type": "esriFieldTypeDouble",
                "alias": "桥墩个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 2,
                "values": ""
            },
            {
                "name": "NUMSPN",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 2,
                "values": ""
            },
            {
                "name": "DNGBRG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁设计通航保证率",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NSDBRG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁通航安全距离",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 10,
                "values": ""
            },
            {
                "name": "FECBRG",
                "type": "esriFieldTypeDouble",
                "alias": "桥梁防撞能力",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 10,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "NavigationOpening_L",
        "layerId": 91,
        "FeatuerAttrs": [
            {
                "name": "NUBRNO",
                "type": "esriFieldTypeString",
                "alias": "通航孔编号",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "NCWBNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航净宽",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "NCHBNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航净高",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "DHNWNO",
                "type": "esriFieldTypeDouble",
                "alias": "设计最高通航水位",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 10,
                "values": ""
            },
            {
                "name": "DLNWNO",
                "type": "esriFieldTypeDouble",
                "alias": "设计最低通航水位",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 10,
                "values": ""
            },
            {
                "name": "UBWTNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔上底宽",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "SHGBNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔侧高",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NUBRNO",
                "type": "esriFieldTypeString",
                "alias": "通航孔编号",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "NCWBNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航净宽",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "NCHBNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航净高",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "DHNWNO",
                "type": "esriFieldTypeDouble",
                "alias": "设计最高通航水位",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 10,
                "values": ""
            },
            {
                "name": "DLNWNO",
                "type": "esriFieldTypeDouble",
                "alias": "设计最低通航水位",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 10,
                "values": ""
            },
            {
                "name": "UBWTNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔上底宽",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "SHGBNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔侧高",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "NavigationOpening_A",
        "layerId": 91,
        "FeatuerAttrs": [
            {
                "name": "NUBRNO",
                "type": "esriFieldTypeString",
                "alias": "通航孔编号",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "NCWBNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航净宽",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "NCHBNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航净高",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "DHNWNO",
                "type": "esriFieldTypeDouble",
                "alias": "设计最高通航水位",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 10,
                "values": ""
            },
            {
                "name": "DLNWNO",
                "type": "esriFieldTypeDouble",
                "alias": "设计最低通航水位",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 10,
                "values": ""
            },
            {
                "name": "UBWTNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔上底宽",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "SHGBNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔侧高",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NUBRNO",
                "type": "esriFieldTypeString",
                "alias": "通航孔编号",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 64,
                "values": ""
            },
            {
                "name": "NCWBNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航净宽",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "NCHBNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航净高",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "DHNWNO",
                "type": "esriFieldTypeDouble",
                "alias": "设计最高通航水位",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 10,
                "values": ""
            },
            {
                "name": "DLNWNO",
                "type": "esriFieldTypeDouble",
                "alias": "设计最低通航水位",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 10,
                "values": ""
            },
            {
                "name": "UBWTNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔上底宽",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "SHGBNO",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔侧高",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "PipelineOverhead_L",
        "layerId": 92,
        "FeatuerAttrs": [
            {
                "name": "TYPPIP",
                "type": "esriFieldTypeString",
                "alias": "管道类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.天然气管道(对应标准2);2.煤气管道(对应标准2);3.原油管道(对应标准1);4.取（排）水管道(对应标准3);999.其它"
            },
            {
                "name": "PIPLEN",
                "type": "esriFieldTypeDouble",
                "alias": "架空管道长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NCWPIP",
                "type": "esriFieldTypeDouble",
                "alias": "管道通航净宽",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "HNWPIP",
                "type": "esriFieldTypeDouble",
                "alias": "管道通航净高",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "HWSPIP",
                "type": "esriFieldTypeDouble",
                "alias": "管道最高通航水位",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "SADPIP",
                "type": "esriFieldTypeDouble",
                "alias": "管道安全间距",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "MASPIP",
                "type": "esriFieldTypeString",
                "alias": "管道设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CONVIS",
                "type": "esriFieldTypeString",
                "alias": "视觉可见",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.视觉显见;2.视觉不显见"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "CableOverhead_L",
        "layerId": 77,
        "FeatuerAttrs": [
            {
                "name": "TYPCAB",
                "type": "esriFieldTypeString",
                "alias": "线缆类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.电缆(对应标准1);2.光缆(对应标准6);3.通信线(对应标准4);999.其它"
            },
            {
                "name": "LENCAB",
                "type": "esriFieldTypeDouble",
                "alias": "线缆长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NCWCAB",
                "type": "esriFieldTypeDouble",
                "alias": "线缆通航净宽",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "HNWPCAB",
                "type": "esriFieldTypeDouble",
                "alias": "线缆通航净高",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "HWSCAB",
                "type": "esriFieldTypeDouble",
                "alias": "线缆最高通航水位",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "SADCAB",
                "type": "esriFieldTypeDouble",
                "alias": "线缆安全间距",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "AOASHC",
                "type": "esriFieldTypeDouble",
                "alias": "线缆实测弧垂高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 10,
                "values": ""
            },
            {
                "name": "MASCAB",
                "type": "esriFieldTypeString",
                "alias": "线缆设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CONVIS",
                "type": "esriFieldTypeString",
                "alias": "视觉可见",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.视觉显见;2.视觉不显见"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Aqueduct_L",
        "layerId": 71,
        "FeatuerAttrs": [
            {
                "name": "AQDWID",
                "type": "esriFieldTypeDouble",
                "alias": "槽面宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "AQDLEN",
                "type": "esriFieldTypeDouble",
                "alias": "渡槽长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NONAQD",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 2,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "AQDWID",
                "type": "esriFieldTypeDouble",
                "alias": "槽面宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "AQDLEN",
                "type": "esriFieldTypeDouble",
                "alias": "渡槽长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NONAQD",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 2,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Aqueduct_A",
        "layerId": 71,
        "FeatuerAttrs": [
            {
                "name": "AQDWID",
                "type": "esriFieldTypeDouble",
                "alias": "槽面宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "AQDLEN",
                "type": "esriFieldTypeDouble",
                "alias": "渡槽长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NONAQD",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 2,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "AQDWID",
                "type": "esriFieldTypeDouble",
                "alias": "槽面宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "AQDLEN",
                "type": "esriFieldTypeDouble",
                "alias": "渡槽长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NONAQD",
                "type": "esriFieldTypeDouble",
                "alias": "通航孔个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 2,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "PipelineSubriver_L",
        "layerId": 93,
        "FeatuerAttrs": [
            {
                "name": "CATCBL",
                "type": "esriFieldTypeString",
                "alias": "管道类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.天然气管道(对应标准2);2.煤气管道(对应标准2);3.原油管道(对应标准1);4.取（排）水管道(对应标准3);999.其它"
            },
            {
                "name": "PIPLEN",
                "type": "esriFieldTypeDouble",
                "alias": "管道长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CBLSAD",
                "type": "esriFieldTypeDouble",
                "alias": "管道安全间距",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DEPPIP",
                "type": "esriFieldTypeDouble",
                "alias": "管道的埋设深度",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL2",
                "type": "esriFieldTypeDouble",
                "alias": "最大水深",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "MASPIP",
                "type": "esriFieldTypeString",
                "alias": "管道设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "CableSubriver_L",
        "layerId": 78,
        "FeatuerAttrs": [
            {
                "name": "CATCBL",
                "type": "esriFieldTypeString",
                "alias": "线缆类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.电缆(对应标准1 );2.光缆(对应标准6);3.通信线(对应标准4);999.其它（999）"
            },
            {
                "name": "CBLLEN",
                "type": "esriFieldTypeDouble",
                "alias": "过河线缆长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CBLSAD",
                "type": "esriFieldTypeDouble",
                "alias": "过河线缆安全间距",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CBLDEP",
                "type": "esriFieldTypeDouble",
                "alias": "线缆的埋设深度",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 5,
                "values": ""
            },
            {
                "name": "MASCBL",
                "type": "esriFieldTypeString",
                "alias": "管道设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.永久的;2.不用的;3.历史的;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Berth_P",
        "layerId": 4,
        "FeatuerAttrs": [
            {
                "name": "BERUSE",
                "type": "esriFieldTypeString",
                "alias": "泊位用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.通用散货泊位（对应标准2）;2.通用杂件货泊位（对应标准10）;3.石油泊位（对应标准3）;4.天燃气泊位（对应标准4）;5.粮食泊位;6.化肥泊位（对应标准5）;7.煤炭泊位;8.木材泊位;9.集装箱泊位（对应标准1）;10.钢铁泊位;11.客运泊位;12.水泥泊位;13.渡口泊位;14.修船泊位;15.工作船泊位;999.其它"
            },
            {
                "name": "CLSDNG",
                "type": "esriFieldTypeString",
                "alias": "危险货物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.可燃物;2.有毒物;3.易爆物;999.其他"
            },
            {
                "name": "CATBRT",
                "type": "esriFieldTypeString",
                "alias": "泊位类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.装卸货泊位;2.临时泊位;999.其它"
            },
            {
                "name": "BERLEG",
                "type": "esriFieldTypeDouble",
                "alias": "泊位长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "BERWID",
                "type": "esriFieldTypeDouble",
                "alias": "泊位宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到水底水深;6.已知最浅深度;7.未知最浅深度;8.报告水深值（经测量）;9.报告水深值（未经测量 ）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "BERUSE",
                "type": "esriFieldTypeString",
                "alias": "泊位用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.通用散货泊位（对应标准2）;2.通用杂件货泊位（对应标准10）;3.石油泊位（对应标准3）;4.天燃气泊位（对应标准4）;5.粮食泊位;6.化肥泊位（对应标准5）;7.煤炭泊位;8.木材泊位;9.集装箱泊位（对应标准1）;10.钢铁泊位;11.客运泊位;12.水泥泊位;13.渡口泊位;14.修船泊位;15.工作船泊位;999.其它"
            },
            {
                "name": "CLSDNG",
                "type": "esriFieldTypeString",
                "alias": "危险货物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.可燃物;2.有毒物;3.易爆物;999.其他"
            },
            {
                "name": "CATBRT",
                "type": "esriFieldTypeString",
                "alias": "泊位类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.装卸货泊位;2.临时泊位;999.其它"
            },
            {
                "name": "BERLEG",
                "type": "esriFieldTypeDouble",
                "alias": "泊位长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "BERWID",
                "type": "esriFieldTypeDouble",
                "alias": "泊位宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到水底水深;6.已知最浅深度;7.未知最浅深度;8.报告水深值（经测量）;9.报告水深值（未经测量 ）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Berth_A",
        "layerId": 4,
        "FeatuerAttrs": [
            {
                "name": "BERUSE",
                "type": "esriFieldTypeString",
                "alias": "泊位用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.通用散货泊位（对应标准2）;2.通用杂件货泊位（对应标准10）;3.石油泊位（对应标准3）;4.天燃气泊位（对应标准4）;5.粮食泊位;6.化肥泊位（对应标准5）;7.煤炭泊位;8.木材泊位;9.集装箱泊位（对应标准1）;10.钢铁泊位;11.客运泊位;12.水泥泊位;13.渡口泊位;14.修船泊位;15.工作船泊位;999.其它"
            },
            {
                "name": "CLSDNG",
                "type": "esriFieldTypeString",
                "alias": "危险货物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.可燃物;2.有毒物;3.易爆物;999.其他"
            },
            {
                "name": "CATBRT",
                "type": "esriFieldTypeString",
                "alias": "泊位类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.装卸货泊位;2.临时泊位;999.其它"
            },
            {
                "name": "BERLEG",
                "type": "esriFieldTypeDouble",
                "alias": "泊位长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "BERWID",
                "type": "esriFieldTypeDouble",
                "alias": "泊位宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到水底水深;6.已知最浅深度;7.未知最浅深度;8.报告水深值（经测量）;9.报告水深值（未经测量 ）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "BERUSE",
                "type": "esriFieldTypeString",
                "alias": "泊位用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.通用散货泊位（对应标准2）;2.通用杂件货泊位（对应标准10）;3.石油泊位（对应标准3）;4.天燃气泊位（对应标准4）;5.粮食泊位;6.化肥泊位（对应标准5）;7.煤炭泊位;8.木材泊位;9.集装箱泊位（对应标准1）;10.钢铁泊位;11.客运泊位;12.水泥泊位;13.渡口泊位;14.修船泊位;15.工作船泊位;999.其它"
            },
            {
                "name": "CLSDNG",
                "type": "esriFieldTypeString",
                "alias": "危险货物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.可燃物;2.有毒物;3.易爆物;999.其他"
            },
            {
                "name": "CATBRT",
                "type": "esriFieldTypeString",
                "alias": "泊位类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.装卸货泊位;2.临时泊位;999.其它"
            },
            {
                "name": "BERLEG",
                "type": "esriFieldTypeDouble",
                "alias": "泊位长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "BERWID",
                "type": "esriFieldTypeDouble",
                "alias": "泊位宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到水底水深;6.已知最浅深度;7.未知最浅深度;8.报告水深值（经测量）;9.报告水深值（未经测量 ）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Terminal_P",
        "layerId": 58,
        "FeatuerAttrs": [
            {
                "name": "TERCAP",
                "type": "esriFieldTypeDouble",
                "alias": "码头靠泊能力",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 7,
                "values": "(吨)"
            },
            {
                "name": "TERTYP",
                "type": "esriFieldTypeString",
                "alias": "码头形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": "1.顺岸码头;2.突堤码头;3.墩式码头;4.栈桥式码头;5.岛式码头;6.离岸式码头"
            },
            {
                "name": "TERUSE",
                "type": "esriFieldTypeString",
                "alias": "码头用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": "1.旅客运输码头（对应标准4）;2.货物运输码头;3.件杂货码头;4.散货码头（对应标准6）;5.散粮码头;6.煤炭码头;7.矿石码头;8.水泥码头;9.石油码头（对应标准3）;10.石化码头;11.钢材码头;12.木材码头;13.专用码头;14.集装箱码头（对应标准5）;15.危险品码头;16.滚装码头（对应标准1）;17.工作船码头;18.船渡码头（对应标准2）;19.修船码头;20.舾装码头;21.航道码头（对应标准7）;22.海事码头（对应标准8）;999.其他（999）"
            },
            {
                "name": "TEBNUM",
                "type": "esriFieldTypeDouble",
                "alias": "码头泊位个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 3,
                "values": ""
            },
            {
                "name": "TERDCC",
                "type": "esriFieldTypeDouble",
                "alias": "码头设计吞吐量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 7,
                "values": ""
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理单位",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "TERCAP",
                "type": "esriFieldTypeDouble",
                "alias": "码头靠泊能力",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 7,
                "values": "(吨)"
            },
            {
                "name": "TERTYP",
                "type": "esriFieldTypeString",
                "alias": "码头形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": "1.顺岸码头;2.突堤码头;3.墩式码头;4.栈桥式码头;5.岛式码头;6.离岸式码头"
            },
            {
                "name": "TERUSE",
                "type": "esriFieldTypeString",
                "alias": "码头用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": "1.旅客运输码头（对应标准4）;2.货物运输码头;3.件杂货码头;4.散货码头（对应标准6）;5.散粮码头;6.煤炭码头;7.矿石码头;8.水泥码头;9.石油码头（对应标准3）;10.石化码头;11.钢材码头;12.木材码头;13.专用码头;14.集装箱码头（对应标准5）;15.危险品码头;16.滚装码头（对应标准1）;17.工作船码头;18.船渡码头（对应标准2）;19.修船码头;20.舾装码头;21.航道码头（对应标准7）;22.海事码头（对应标准8）;999.其他（999）"
            },
            {
                "name": "TEBNUM",
                "type": "esriFieldTypeDouble",
                "alias": "码头泊位个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 3,
                "values": ""
            },
            {
                "name": "TERDCC",
                "type": "esriFieldTypeDouble",
                "alias": "码头设计吞吐量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 7,
                "values": ""
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理单位",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Terminal_A",
        "layerId": 58,
        "FeatuerAttrs": [
            {
                "name": "TERCAP",
                "type": "esriFieldTypeDouble",
                "alias": "码头靠泊能力",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 7,
                "values": "(吨)"
            },
            {
                "name": "TERTYP",
                "type": "esriFieldTypeString",
                "alias": "码头形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": "1.顺岸码头;2.突堤码头;3.墩式码头;4.栈桥式码头;5.岛式码头;6.离岸式码头"
            },
            {
                "name": "TERUSE",
                "type": "esriFieldTypeString",
                "alias": "码头用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": "1.旅客运输码头（对应标准4）;2.货物运输码头;3.件杂货码头;4.散货码头（对应标准6）;5.散粮码头;6.煤炭码头;7.矿石码头;8.水泥码头;9.石油码头（对应标准3）;10.石化码头;11.钢材码头;12.木材码头;13.专用码头;14.集装箱码头（对应标准5）;15.危险品码头;16.滚装码头（对应标准1）;17.工作船码头;18.船渡码头（对应标准2）;19.修船码头;20.舾装码头;21.航道码头（对应标准7）;22.海事码头（对应标准8）;999.其他（999）"
            },
            {
                "name": "TEBNUM",
                "type": "esriFieldTypeDouble",
                "alias": "码头泊位个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 3,
                "values": ""
            },
            {
                "name": "TERDCC",
                "type": "esriFieldTypeDouble",
                "alias": "码头设计吞吐量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 7,
                "values": ""
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理单位",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "TERCAP",
                "type": "esriFieldTypeDouble",
                "alias": "码头靠泊能力",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 7,
                "values": "(吨)"
            },
            {
                "name": "TERTYP",
                "type": "esriFieldTypeString",
                "alias": "码头形式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": "1.顺岸码头;2.突堤码头;3.墩式码头;4.栈桥式码头;5.岛式码头;6.离岸式码头"
            },
            {
                "name": "TERUSE",
                "type": "esriFieldTypeString",
                "alias": "码头用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": "1.旅客运输码头（对应标准4）;2.货物运输码头;3.件杂货码头;4.散货码头（对应标准6）;5.散粮码头;6.煤炭码头;7.矿石码头;8.水泥码头;9.石油码头（对应标准3）;10.石化码头;11.钢材码头;12.木材码头;13.专用码头;14.集装箱码头（对应标准5）;15.危险品码头;16.滚装码头（对应标准1）;17.工作船码头;18.船渡码头（对应标准2）;19.修船码头;20.舾装码头;21.航道码头（对应标准7）;22.海事码头（对应标准8）;999.其他（999）"
            },
            {
                "name": "TEBNUM",
                "type": "esriFieldTypeDouble",
                "alias": "码头泊位个数",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 3,
                "values": ""
            },
            {
                "name": "TERDCC",
                "type": "esriFieldTypeDouble",
                "alias": "码头设计吞吐量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 7,
                "values": ""
            },
            {
                "name": "MANDEP",
                "type": "esriFieldTypeString",
                "alias": "管理单位",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Pontoon_P",
        "layerId": 36,
        "FeatuerAttrs": [
            {
                "name": "PONUSE",
                "type": "esriFieldTypeString",
                "alias": "码头用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.旅客运输码头（对应标准4）;2.货物运输码头;3.件杂货码头;4.散货码头（对应标准6）;5.散粮码头;6.煤炭码头;7.矿石码头;8.水泥码头;9.石油码头（对应标准3）;10.石化码头;11.钢材码头;12.木材码头;13.专用码头;14.集装箱码头（对应标准5）;15.危险品码头;16.滚装码头（对应标准1）;17.工作船码头;18.船渡码头（对应标准2）;19.修船码头;20.舾装码头;21.航道码头（对应标准7）;22.海事码头（对应标准8）;999.其他（999）"
            },
            {
                "name": "VERLEN",
                "type": "esriFieldTypeDouble",
                "alias": "垂直高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;4.木质结构;;5.金属结构;;6.玻璃钢结构;;999.其他"
            },
            {
                "name": "CONVIS",
                "type": "esriFieldTypeString",
                "alias": "视觉可见",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.视觉显见;2.视觉不显见"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PONUSE",
                "type": "esriFieldTypeString",
                "alias": "码头用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.旅客运输码头（对应标准4）;2.货物运输码头;3.件杂货码头;4.散货码头（对应标准6）;5.散粮码头;6.煤炭码头;7.矿石码头;8.水泥码头;9.石油码头（对应标准3）;10.石化码头;11.钢材码头;12.木材码头;13.专用码头;14.集装箱码头（对应标准5）;15.危险品码头;16.滚装码头（对应标准1）;17.工作船码头;18.船渡码头（对应标准2）;19.修船码头;20.舾装码头;21.航道码头（对应标准7）;22.海事码头（对应标准8）;999.其他（999）"
            },
            {
                "name": "VERLEN",
                "type": "esriFieldTypeDouble",
                "alias": "垂直高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;4.木质结构;;5.金属结构;;6.玻璃钢结构;;999.其他"
            },
            {
                "name": "CONVIS",
                "type": "esriFieldTypeString",
                "alias": "视觉可见",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.视觉显见;2.视觉不显见"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Pontoon_A",
        "layerId": 36,
        "FeatuerAttrs": [
            {
                "name": "PONUSE",
                "type": "esriFieldTypeString",
                "alias": "码头用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.旅客运输码头（对应标准4）;2.货物运输码头;3.件杂货码头;4.散货码头（对应标准6）;5.散粮码头;6.煤炭码头;7.矿石码头;8.水泥码头;9.石油码头（对应标准3）;10.石化码头;11.钢材码头;12.木材码头;13.专用码头;14.集装箱码头（对应标准5）;15.危险品码头;16.滚装码头（对应标准1）;17.工作船码头;18.船渡码头（对应标准2）;19.修船码头;20.舾装码头;21.航道码头（对应标准7）;22.海事码头（对应标准8）;999.其他（999）"
            },
            {
                "name": "VERLEN",
                "type": "esriFieldTypeDouble",
                "alias": "垂直高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;4.木质结构;;5.金属结构;;6.玻璃钢结构;;999.其他"
            },
            {
                "name": "CONVIS",
                "type": "esriFieldTypeString",
                "alias": "视觉可见",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.视觉显见;2.视觉不显见"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PONUSE",
                "type": "esriFieldTypeString",
                "alias": "码头用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.旅客运输码头（对应标准4）;2.货物运输码头;3.件杂货码头;4.散货码头（对应标准6）;5.散粮码头;6.煤炭码头;7.矿石码头;8.水泥码头;9.石油码头（对应标准3）;10.石化码头;11.钢材码头;12.木材码头;13.专用码头;14.集装箱码头（对应标准5）;15.危险品码头;16.滚装码头（对应标准1）;17.工作船码头;18.船渡码头（对应标准2）;19.修船码头;20.舾装码头;21.航道码头（对应标准7）;22.海事码头（对应标准8）;999.其他（999）"
            },
            {
                "name": "VERLEN",
                "type": "esriFieldTypeDouble",
                "alias": "垂直高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;4.木质结构;;5.金属结构;;6.玻璃钢结构;;999.其他"
            },
            {
                "name": "CONVIS",
                "type": "esriFieldTypeString",
                "alias": "视觉可见",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.视觉显见;2.视觉不显见"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Trestle_L",
        "layerId": 101,
        "FeatuerAttrs": [
            {
                "name": "TREMTL",
                "type": "esriFieldTypeString",
                "alias": "栈桥材料",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石;;2.混凝土;;3.散石;;4.木质;;5.金属;;6.玻璃钢;;999.其他"
            },
            {
                "name": "TRELEN",
                "type": "esriFieldTypeDouble",
                "alias": "栈桥长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "TREWID",
                "type": "esriFieldTypeDouble",
                "alias": "栈桥宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "TREMTL",
                "type": "esriFieldTypeString",
                "alias": "栈桥材料",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石;;2.混凝土;;3.散石;;4.木质;;5.金属;;6.玻璃钢;;999.其他"
            },
            {
                "name": "TRELEN",
                "type": "esriFieldTypeDouble",
                "alias": "栈桥长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "TREWID",
                "type": "esriFieldTypeDouble",
                "alias": "栈桥宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Trestle_A",
        "layerId": 101,
        "FeatuerAttrs": [
            {
                "name": "TREMTL",
                "type": "esriFieldTypeString",
                "alias": "栈桥材料",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石;;2.混凝土;;3.散石;;4.木质;;5.金属;;6.玻璃钢;;999.其他"
            },
            {
                "name": "TRELEN",
                "type": "esriFieldTypeDouble",
                "alias": "栈桥长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "TREWID",
                "type": "esriFieldTypeDouble",
                "alias": "栈桥宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "TREMTL",
                "type": "esriFieldTypeString",
                "alias": "栈桥材料",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石;;2.混凝土;;3.散石;;4.木质;;5.金属;;6.玻璃钢;;999.其他"
            },
            {
                "name": "TRELEN",
                "type": "esriFieldTypeDouble",
                "alias": "栈桥长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "TREWID",
                "type": "esriFieldTypeDouble",
                "alias": "栈桥宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "FloatDock_P",
        "layerId": 21,
        "FeatuerAttrs": [
            {
                "name": "CATDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.干船坞;2.浮船坞"
            },
            {
                "name": "ELEDOK",
                "type": "esriFieldTypeDouble",
                "alias": "船坞有效长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "WIDDOC",
                "type": "esriFieldTypeDouble",
                "alias": "坞室宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "LIFCAP",
                "type": "esriFieldTypeDouble",
                "alias": "超重能力",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "ONSDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞碍航情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.不碍航;2.部分碍航;3.较严重碍航;4.严重碍航"
            },
            {
                "name": "MASDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ADCDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞管理单位联系方式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.干船坞;2.浮船坞"
            },
            {
                "name": "ELEDOK",
                "type": "esriFieldTypeDouble",
                "alias": "船坞有效长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "WIDDOC",
                "type": "esriFieldTypeDouble",
                "alias": "坞室宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "LIFCAP",
                "type": "esriFieldTypeDouble",
                "alias": "超重能力",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "ONSDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞碍航情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.不碍航;2.部分碍航;3.较严重碍航;4.严重碍航"
            },
            {
                "name": "MASDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ADCDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞管理单位联系方式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "FloatDock_A",
        "layerId": 21,
        "FeatuerAttrs": [
            {
                "name": "CATDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.干船坞;2.浮船坞"
            },
            {
                "name": "ELEDOK",
                "type": "esriFieldTypeDouble",
                "alias": "船坞有效长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "WIDDOC",
                "type": "esriFieldTypeDouble",
                "alias": "坞室宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "LIFCAP",
                "type": "esriFieldTypeDouble",
                "alias": "超重能力",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "ONSDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞碍航情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.不碍航;2.部分碍航;3.较严重碍航;4.严重碍航"
            },
            {
                "name": "MASDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ADCDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞管理单位联系方式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.干船坞;2.浮船坞"
            },
            {
                "name": "ELEDOK",
                "type": "esriFieldTypeDouble",
                "alias": "船坞有效长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "WIDDOC",
                "type": "esriFieldTypeDouble",
                "alias": "坞室宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "LIFCAP",
                "type": "esriFieldTypeDouble",
                "alias": "超重能力",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "ONSDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞碍航情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.不碍航;2.部分碍航;3.较严重碍航;4.严重碍航"
            },
            {
                "name": "MASDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ADCDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞管理单位联系方式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "DryDock_P",
        "layerId": 14,
        "FeatuerAttrs": [
            {
                "name": "CATDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.干船坞;2.浮船坞"
            },
            {
                "name": "ELEDOK",
                "type": "esriFieldTypeDouble",
                "alias": "船坞有效长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "WIDDOC",
                "type": "esriFieldTypeDouble",
                "alias": "坞室宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "ONSDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞碍航情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.不碍航;2.部分碍航;3.较严重碍航;4.严重碍航"
            },
            {
                "name": "MASDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ADCDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞管理单位联系方式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.干船坞;2.浮船坞"
            },
            {
                "name": "ELEDOK",
                "type": "esriFieldTypeDouble",
                "alias": "船坞有效长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "WIDDOC",
                "type": "esriFieldTypeDouble",
                "alias": "坞室宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "ONSDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞碍航情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.不碍航;2.部分碍航;3.较严重碍航;4.严重碍航"
            },
            {
                "name": "MASDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ADCDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞管理单位联系方式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "DryDock_A",
        "layerId": 14,
        "FeatuerAttrs": [
            {
                "name": "CATDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.干船坞;2.浮船坞"
            },
            {
                "name": "ELEDOK",
                "type": "esriFieldTypeDouble",
                "alias": "船坞有效长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "WIDDOC",
                "type": "esriFieldTypeDouble",
                "alias": "坞室宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "ONSDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞碍航情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.不碍航;2.部分碍航;3.较严重碍航;4.严重碍航"
            },
            {
                "name": "MASDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ADCDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞管理单位联系方式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.干船坞;2.浮船坞"
            },
            {
                "name": "ELEDOK",
                "type": "esriFieldTypeDouble",
                "alias": "船坞有效长度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "WIDDOC",
                "type": "esriFieldTypeDouble",
                "alias": "坞室宽度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "ONSDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞碍航情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.不碍航;2.部分碍航;3.较严重碍航;4.严重碍航"
            },
            {
                "name": "MASDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "ADCDOK",
                "type": "esriFieldTypeString",
                "alias": "船坞管理单位联系方式",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "ShipYard_P",
        "layerId": 50,
        "FeatuerAttrs": [
            {
                "name": "NUMRFS",
                "type": "esriFieldTypeInteger",
                "alias": "临河船厂编号",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 0,
                "values": ""
            },
            {
                "name": "CATRFS",
                "type": "esriFieldTypeString",
                "alias": "临河船厂类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.造船厂;2.修船厂;3.拆船厂"
            },
            {
                "name": "LERRES",
                "type": "esriFieldTypeString",
                "alias": "临河船厂法定代表人",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NUMRFS",
                "type": "esriFieldTypeInteger",
                "alias": "临河船厂编号",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 0,
                "values": ""
            },
            {
                "name": "CATRFS",
                "type": "esriFieldTypeString",
                "alias": "临河船厂类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.造船厂;2.修船厂;3.拆船厂"
            },
            {
                "name": "LERRES",
                "type": "esriFieldTypeString",
                "alias": "临河船厂法定代表人",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "ShipYard_A",
        "layerId": 50,
        "FeatuerAttrs": [
            {
                "name": "NUMRFS",
                "type": "esriFieldTypeInteger",
                "alias": "临河船厂编号",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 0,
                "values": ""
            },
            {
                "name": "CATRFS",
                "type": "esriFieldTypeString",
                "alias": "临河船厂类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.造船厂;2.修船厂;3.拆船厂"
            },
            {
                "name": "LERRES",
                "type": "esriFieldTypeString",
                "alias": "临河船厂法定代表人",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NUMRFS",
                "type": "esriFieldTypeInteger",
                "alias": "临河船厂编号",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 0,
                "values": ""
            },
            {
                "name": "CATRFS",
                "type": "esriFieldTypeString",
                "alias": "临河船厂类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.造船厂;2.修船厂;3.拆船厂"
            },
            {
                "name": "LERRES",
                "type": "esriFieldTypeString",
                "alias": "临河船厂法定代表人",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "IntakeOrOutfall_P",
        "layerId": 26,
        "FeatuerAttrs": [
            {
                "name": "NUMIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口编号",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "MASIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NARIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口设通航规则",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "USEIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CODIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口使用时限代码",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.永久;2.长期;3.临时"
            },
            {
                "name": "NADIOF",
                "type": "esriFieldTypeDouble",
                "alias": "取（排）水口可航水深",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NUMIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口编号",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "MASIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NARIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口设通航规则",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "USEIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CODIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口使用时限代码",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.永久;2.长期;3.临时"
            },
            {
                "name": "NADIOF",
                "type": "esriFieldTypeDouble",
                "alias": "取（排）水口可航水深",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "IntakeOrOutfall_A",
        "layerId": 26,
        "FeatuerAttrs": [
            {
                "name": "NUMIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口编号",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "MASIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NARIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口设通航规则",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "USEIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CODIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口使用时限代码",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.永久;2.长期;3.临时"
            },
            {
                "name": "NADIOF",
                "type": "esriFieldTypeDouble",
                "alias": "取（排）水口可航水深",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NUMIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口编号",
                "domain": null,
                "editable": true,
                "nullable": false,
                "length": 32,
                "values": ""
            },
            {
                "name": "MASIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NARIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口设通航规则",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "USEIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口用途",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CODIOF",
                "type": "esriFieldTypeString",
                "alias": "取（排）水口使用时限代码",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.永久;2.长期;3.临时"
            },
            {
                "name": "NADIOF",
                "type": "esriFieldTypeDouble",
                "alias": "取（排）水口可航水深",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Dam_P",
        "layerId": 13,
        "FeatuerAttrs": [
            {
                "name": "CATDAM",
                "type": "esriFieldTypeString",
                "alias": "水坝类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.堰;2.坝;3.防洪闸;100.滚水坝;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "HEIGHT",
                "type": "esriFieldTypeDouble",
                "alias": "高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "VERLEN",
                "type": "esriFieldTypeDouble",
                "alias": "垂直高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;6.木质结构;;7.金属结构;;8.玻璃钢结构;;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATDAM",
                "type": "esriFieldTypeString",
                "alias": "水坝类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.堰;2.坝;3.防洪闸;100.滚水坝;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "HEIGHT",
                "type": "esriFieldTypeDouble",
                "alias": "高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "VERLEN",
                "type": "esriFieldTypeDouble",
                "alias": "垂直高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;6.木质结构;;7.金属结构;;8.玻璃钢结构;;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Dam_A",
        "layerId": 13,
        "FeatuerAttrs": [
            {
                "name": "CATDAM",
                "type": "esriFieldTypeString",
                "alias": "水坝类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.堰;2.坝;3.防洪闸;100.滚水坝;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "HEIGHT",
                "type": "esriFieldTypeDouble",
                "alias": "高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "VERLEN",
                "type": "esriFieldTypeDouble",
                "alias": "垂直高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;6.木质结构;;7.金属结构;;8.玻璃钢结构;;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATDAM",
                "type": "esriFieldTypeString",
                "alias": "水坝类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.堰;2.坝;3.防洪闸;100.滚水坝;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "HEIGHT",
                "type": "esriFieldTypeDouble",
                "alias": "高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "VERLEN",
                "type": "esriFieldTypeDouble",
                "alias": "垂直高度",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;6.木质结构;;7.金属结构;;8.玻璃钢结构;;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "WaterLock_P",
        "layerId": 66,
        "FeatuerAttrs": [
            {
                "name": "CATGAT",
                "type": "esriFieldTypeString",
                "alias": "门类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "2.防洪闸;3.坞门;4.船闸闸门;5.堤坝闸门;6.水闸;7.分水闸;8.进水闸;9.节制闸;10.挡潮闸;11.水闸房屋;999.其他"
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;6.木质结构;;7.金属结构;;8.玻璃钢结构;;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATGAT",
                "type": "esriFieldTypeString",
                "alias": "门类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "2.防洪闸;3.坞门;4.船闸闸门;5.堤坝闸门;6.水闸;7.分水闸;8.进水闸;9.节制闸;10.挡潮闸;11.水闸房屋;999.其他"
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;6.木质结构;;7.金属结构;;8.玻璃钢结构;;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "WaterLock_A",
        "layerId": 66,
        "FeatuerAttrs": [
            {
                "name": "CATGAT",
                "type": "esriFieldTypeString",
                "alias": "门类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "2.防洪闸;3.坞门;4.船闸闸门;5.堤坝闸门;6.水闸;7.分水闸;8.进水闸;9.节制闸;10.挡潮闸;11.水闸房屋;999.其他"
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;6.木质结构;;7.金属结构;;8.玻璃钢结构;;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATGAT",
                "type": "esriFieldTypeString",
                "alias": "门类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "2.防洪闸;3.坞门;4.船闸闸门;5.堤坝闸门;6.水闸;7.分水闸;8.进水闸;9.节制闸;10.挡潮闸;11.水闸房屋;999.其他"
            },
            {
                "name": "DRVAL1",
                "type": "esriFieldTypeDouble",
                "alias": "最小深度值",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NATCON",
                "type": "esriFieldTypeString",
                "alias": "建筑结构性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.砖石结构;;2.混凝土结构;;3.散石结构;;6.木质结构;;7.金属结构;;8.玻璃钢结构;;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "CONDTN",
                "type": "esriFieldTypeString",
                "alias": "状态",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.建造中;2.废弃的;3.改造中;4.无侧翼的;5.计划建造的;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Wreck_P",
        "layerId": 0,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATWRK",
                "type": "esriFieldTypeString",
                "alias": "沉船类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.非危险沉船;2.危险沉船;3.散布的沉船残骸（险恶地）;4.露桅沉船;5.部分船体或上层建筑裸露的沉船;6.深度不明沉船;7.概位沉船;999.其他"
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONVIS",
                "type": "esriFieldTypeString",
                "alias": "视觉可见",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.视觉显见;2.视觉不显见"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATWRK",
                "type": "esriFieldTypeString",
                "alias": "沉船类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.非危险沉船;2.危险沉船;3.散布的沉船残骸（险恶地）;4.露桅沉船;5.部分船体或上层建筑裸露的沉船;6.深度不明沉船;7.概位沉船;999.其他"
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONVIS",
                "type": "esriFieldTypeString",
                "alias": "视觉可见",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.视觉显见;2.视觉不显见"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Wreck_A",
        "layerId": 0,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATWRK",
                "type": "esriFieldTypeString",
                "alias": "沉船类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.非危险沉船;2.危险沉船;3.散布的沉船残骸（险恶地）;4.露桅沉船;5.部分船体或上层建筑裸露的沉船;6.深度不明沉船;7.概位沉船;999.其他"
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONVIS",
                "type": "esriFieldTypeString",
                "alias": "视觉可见",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.视觉显见;2.视觉不显见"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATWRK",
                "type": "esriFieldTypeString",
                "alias": "沉船类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.非危险沉船;2.危险沉船;3.散布的沉船残骸（险恶地）;4.露桅沉船;5.部分船体或上层建筑裸露的沉船;6.深度不明沉船;7.概位沉船;999.其他"
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "CONVIS",
                "type": "esriFieldTypeString",
                "alias": "视觉可见",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.视觉显见;2.视觉不显见"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Reef_P",
        "layerId": 43,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "NATSUR",
                "type": "esriFieldTypeString",
                "alias": "表面性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥2.粘土;3.泥沙4.沙;5.石6.砾石;7.卵石8.中石;9.岩石10.熔岩;11.珊瑚12.贝壳13.圆石999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "NATSUR",
                "type": "esriFieldTypeString",
                "alias": "表面性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥2.粘土;3.泥沙4.沙;5.石6.砾石;7.卵石8.中石;9.岩石10.熔岩;11.珊瑚12.贝壳13.圆石999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Reef_A",
        "layerId": 43,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "NATSUR",
                "type": "esriFieldTypeString",
                "alias": "表面性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥2.粘土;3.泥沙4.沙;5.石6.砾石;7.卵石8.中石;9.岩石10.熔岩;11.珊瑚12.贝壳13.圆石999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "NATSUR",
                "type": "esriFieldTypeString",
                "alias": "表面性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥2.粘土;3.泥沙4.沙;5.石6.砾石;7.卵石8.中石;9.岩石10.熔岩;11.珊瑚12.贝壳13.圆石999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "AnchoredTrees_P",
        "layerId": 3,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "AnchoredTrees_A",
        "layerId": 3,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "FishCorral_P",
        "layerId": 20,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "FishCorral_L",
        "layerId": 20,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "FishCorral_A",
        "layerId": 20,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "STATUS",
                "type": "esriFieldTypeString",
                "alias": "状况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "参见标准A.5.171（P292）"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "SinisterSection_P",
        "layerId": 54,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "NATSUR",
                "type": "esriFieldTypeString",
                "alias": "表面性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥;2.粘土;3.泥沙;4.沙;5.石;6.砾石;7.卵石;8.中石;9.岩石;10.熔岩;11.珊瑚;12.贝壳;13.圆石;999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;100.高于平均水位;101.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "NATSUR",
                "type": "esriFieldTypeString",
                "alias": "表面性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥;2.粘土;3.泥沙;4.沙;5.石;6.砾石;7.卵石;8.中石;9.岩石;10.熔岩;11.珊瑚;12.贝壳;13.圆石;999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;100.高于平均水位;101.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "SinisterSection_A",
        "layerId": 54,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "NATSUR",
                "type": "esriFieldTypeString",
                "alias": "表面性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥;2.粘土;3.泥沙;4.沙;5.石;6.砾石;7.卵石;8.中石;9.岩石;10.熔岩;11.珊瑚;12.贝壳;13.圆石;999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;100.高于平均水位;101.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "CATOBS",
                "type": "esriFieldTypeString",
                "alias": "障碍物类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.沉船;2.沉物（对应标准102）;3.礁石;4.浅滩;5.险恶地段（对应标准6）;6.废弃桩柱;7.捕鱼设备;8.布雷区999.其他"
            },
            {
                "name": "NATSUR",
                "type": "esriFieldTypeString",
                "alias": "表面性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥;2.粘土;3.泥沙;4.沙;5.石;6.砾石;7.卵石;8.中石;9.岩石;10.熔岩;11.珊瑚;12.贝壳;13.圆石;999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;100.高于平均水位;101.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "HinderAnchorage_P",
        "layerId": 23,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NATSUR",
                "type": "esriFieldTypeString",
                "alias": "表面性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥;2.粘土;3.泥沙;4.沙;5.石;6.砾石;7.卵石;8.中石;9.岩石;10.熔岩;11.珊瑚;12.贝壳;13.圆石;999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NATSUR",
                "type": "esriFieldTypeString",
                "alias": "表面性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥;2.粘土;3.泥沙;4.沙;5.石;6.砾石;7.卵石;8.中石;9.岩石;10.熔岩;11.珊瑚;12.贝壳;13.圆石;999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "HinderAnchorage_A",
        "layerId": 23,
        "FeatuerAttrs": [
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NATSUR",
                "type": "esriFieldTypeString",
                "alias": "表面性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥;2.粘土;3.泥沙;4.沙;5.石;6.砾石;7.卵石;8.中石;9.岩石;10.熔岩;11.珊瑚;12.贝壳;13.圆石;999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NATSUR",
                "type": "esriFieldTypeString",
                "alias": "表面性质",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥;2.粘土;3.泥沙;4.沙;5.石;6.砾石;7.卵石;8.中石;9.岩石;10.熔岩;11.珊瑚;12.贝壳;13.圆石;999.其他"
            },
            {
                "name": "WATLEV",
                "type": "esriFieldTypeString",
                "alias": "水位效应",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.高潮时部分淹没;2.高出;3.水下/淹没;4.干出;5.适淹;6.洪水泛滥淹没;7.漂浮;8.高于平均水位;9.低于平均水位;999.其他"
            },
            {
                "name": "EXPSOU",
                "type": "esriFieldTypeString",
                "alias": "水深说明",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.在周围水深区的深度范围内;2.浅于周围水深区的深 度范围;3.深于周围水深区的深度范围;999.其他"
            },
            {
                "name": "QUASOU",
                "type": "esriFieldTypeString",
                "alias": "水深质量",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.已知深度;2.未知深度;3.可疑水深;4.不可靠水深;5.未测到底水深;6.已知浅深度;7.未知浅深度（给出安全富余量）;8.报告水深值（未经测量）;9报告水深值（未经核实）;10.维护水深;11.不定期维护;999.其他"
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Shoal_P",
        "layerId": 51,
        "FeatuerAttrs": [
            {
                "name": "LETSHL",
                "type": "esriFieldTypeDouble",
                "alias": "浅滩滩长",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NCWBNO",
                "type": "esriFieldTypeString",
                "alias": "浅滩类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥质浅滩;2.沙质浅滩;3.卵石浅滩;4.石质浅滩;5.沙、卵石浅滩;6.树木滩;7.芦苇滩;8.丛草滩;999.其他"
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "LETSHL",
                "type": "esriFieldTypeDouble",
                "alias": "浅滩滩长",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NCWBNO",
                "type": "esriFieldTypeString",
                "alias": "浅滩类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥质浅滩;2.沙质浅滩;3.卵石浅滩;4.石质浅滩;5.沙、卵石浅滩;6.树木滩;7.芦苇滩;8.丛草滩;999.其他"
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    },
    {
        "layername": "Shoal_A",
        "layerId": 51,
        "FeatuerAttrs": [
            {
                "name": "LETSHL",
                "type": "esriFieldTypeDouble",
                "alias": "浅滩滩长",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NCWBNO",
                "type": "esriFieldTypeString",
                "alias": "浅滩类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥质浅滩;2.沙质浅滩;3.卵石浅滩;4.石质浅滩;5.沙、卵石浅滩;6.树木滩;7.芦苇滩;8.丛草滩;999.其他"
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "LETSHL",
                "type": "esriFieldTypeDouble",
                "alias": "浅滩滩长",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 5,
                "values": ""
            },
            {
                "name": "NCWBNO",
                "type": "esriFieldTypeString",
                "alias": "浅滩类型",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": "1.泥质浅滩;2.沙质浅滩;3.卵石浅滩;4.石质浅滩;5.沙、卵石浅滩;6.树木滩;7.芦苇滩;8.丛草滩;999.其他"
            },
            {
                "name": "MAROTN",
                "type": "esriFieldTypeString",
                "alias": "碍航物设标情况",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NINFOM",
                "type": "esriFieldTypeString",
                "alias": "中文信息",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "NOBJNM",
                "type": "esriFieldTypeString",
                "alias": "中文名称",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "SCAMIN",
                "type": "esriFieldTypeString",
                "alias": "最小比例尺",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 32,
                "values": ""
            },
            {
                "name": "ISSCRT",
                "type": "esriFieldTypeString",
                "alias": "是否涉密",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            },
            {
                "name": "PICREP",
                "type": "esriFieldTypeString",
                "alias": "图示显示",
                "domain": null,
                "editable": true,
                "nullable": true,
                "length": 64,
                "values": ""
            }
        ]
    }
]}