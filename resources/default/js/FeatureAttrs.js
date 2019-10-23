var FeatureUtil = {
		FeatureLists : [{
			layerId:60,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "BRGCOD",
				type: "esriFieldTypeString",
				alias: "桥梁编号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "BRGNAM",
				type: "esriFieldTypeString",
				alias: "桥梁名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 255
			},
			{
				name: "CATBRG",
				type: "esriFieldTypeString",
				alias: "桥梁类别",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "BRGUSE",
				type: "esriFieldTypeString",
				alias: "桥梁用途",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "NSPNNO",
				type: "esriFieldTypeString",
				alias: "通航孔数",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "BRSPNO",
				type: "esriFieldTypeString",
				alias: "桥墩数",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "NAVWID",
				type: "esriFieldTypeDouble",
				alias: "通航净宽",
				domain: null,
				editable: true,
				nullable: true
			},
			{
				name: "NAVHGT",
				type: "esriFieldTypeDouble",
				alias: "通航净高",
				domain: null,
				editable: true,
				nullable: true
			},
			{
				name: "BTMWID",
				type: "esriFieldTypeDouble",
				alias: "上底宽",
				domain: null,
				editable: true,
				nullable: true
			},
			{
				name: "SIDHGT",
				type: "esriFieldTypeDouble",
				alias: "侧高",
				domain: null,
				editable: true,
				nullable: true
			},
			{
				name: "HDSTHY",
				type: "esriFieldTypeDouble",
				alias: "斜边水平距离",
				domain: null,
				editable: true,
				nullable: true
			},
			{
				name: "DHNAVS",
				type: "esriFieldTypeDouble",
				alias: "设计最高通航水位",
				domain: null,
				editable: true,
				nullable: true
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "航道审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 255
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 255
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "建设状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "DELIFE",
				type: "esriFieldTypeString",
				alias: "设计使用年限",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: false,
				length: 255
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			}]
		},{
			layerId:9,
			FeatuerAttrs:[{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "WSGCOD",
				type: "esriFieldTypeString",
				alias: "水位观测站编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "WSGNAM",
				type: "esriFieldTypeString",
				alias: "水位观测站名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "水位观测站管理部门",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "TELEID",
				type: "esriFieldTypeString",
				alias: "水位遥测遥报系统标识符",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 255
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			}]
		},{
			layerId:10,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "VSGCOD",
				type: "esriFieldTypeString",
				alias: "视频监测站编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "VSGNAM",
				type: "esriFieldTypeString",
				alias: "视频监测站名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "视频监测站管理部门",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			}]
		},{
			layerId:14,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "WADCOD",
				type: "esriFieldTypeString",
				alias: "航道管理机构编号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "WADNAM",
				type: "esriFieldTypeString",
				alias: "航道管理机构名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CATWAD",
				type: "esriFieldTypeString",
				alias: "航道管理机构类型",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "COMADD",
				type: "esriFieldTypeString",
				alias: "航道管理机构通信地址",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "POSCOD",
				type: "esriFieldTypeString",
				alias: "航道管理机构邮编",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONTPN",
				type: "esriFieldTypeString",
				alias: "航道管理机构联系人",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONTNO",
				type: "esriFieldTypeString",
				alias: "航道管理机构联系电话",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			}]
		},{
			layerId:18,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "WGTNAM",
				type: "esriFieldTypeString",
				alias: "水闸名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CATWGT",
				type: "esriFieldTypeString",
				alias: "水闸类别",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			}]
		},{
			layerId:28,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "IOONAM",
				type: "esriFieldTypeString",
				alias: "取排水口名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "BNKWTW",
				type: "esriFieldTypeString",
				alias: "岸别",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			}]
		},{
			layerId:29,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "PODNAM",
				type: "esriFieldTypeString",
				alias: "抽排水口名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "BNKWTW",
				type: "esriFieldTypeString",
				alias: "岸别",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: false,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			}]
		},{
			layerId:38,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "CSBCOD",
				type: "esriFieldTypeString",
				alias: "过河线缆编号",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "CSBNAM",
				type: "esriFieldTypeString",
				alias: "过河线缆名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CATCAB",
				type: "esriFieldTypeString",
				alias: "线缆类别",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "TSTDEP",
				type: "esriFieldTypeString",
				alias: "最低弧垂高度",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "航道审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "建设状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			}]
		},{
			layerId:39,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "COVCOD",
				type: "esriFieldTypeString",
				alias: "架空线缆编号",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "COVNAM",
				type: "esriFieldTypeString",
				alias: "架空线缆名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CATCBL",
				type: "esriFieldTypeString",
				alias: "线缆类别",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "CABLNO",
				type: "esriFieldTypeString",
				alias: "线缆数量",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "MINHSG",
				type: "esriFieldTypeString",
				alias: "最低弧垂高度",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "DHNAVS",
				type: "esriFieldTypeDouble",
				alias: "设计最高通航水位",
				domain: null,
				editable: true,
				nullable: true
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "航道审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "建设状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			}]
		},{
			layerId:40,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "PODCOD",
				type: "esriFieldTypeString",
				alias: "架空管道编号",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "PODNAM",
				type: "esriFieldTypeString",
				alias: "架空管道名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CATPIP",
				type: "esriFieldTypeString",
				alias: "管道类别",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "DIAMET",
				type: "esriFieldTypeString",
				alias: "直径（管径）",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MATERI",
				type: "esriFieldTypeString",
				alias: "材质",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "TSTDEP",
				type: "esriFieldTypeString",
				alias: "最低弧垂高度",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "航道审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "建设状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			}]
		},{
			layerId:41,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "PSBCOD",
				type: "esriFieldTypeString",
				alias: "过河管道编号",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "PSBNAM",
				type: "esriFieldTypeString",
				alias: "过河管道名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CATPIP",
				type: "esriFieldTypeString",
				alias: "管道类别",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "DIAMET",
				type: "esriFieldTypeString",
				alias: "直径（管径）",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MATERI",
				type: "esriFieldTypeString",
				alias: "材质",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "TSTDEP",
				type: "esriFieldTypeString",
				alias: "埋设深度",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "航道审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "建设状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			}]
		},{
			layerId:45,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "DACNAM",
				type: "esriFieldTypeString",
				alias: "拦河坝名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			}]
		},{
			layerId:64,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "LOKCOD",
				type: "esriFieldTypeString",
				alias: "船闸编号",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "LOKNAM",
				type: "esriFieldTypeString",
				alias: "船闸名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "LOKLVL",
				type: "esriFieldTypeString",
				alias: "船闸级别",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "NAVCAP",
				type: "esriFieldTypeString",
				alias: "通航能力",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "HORLEN",
				type: "esriFieldTypeDouble",
				alias: "有效长度",
				domain: null,
				editable: true,
				nullable: true
			},
			{
				name: "HORWID",
				type: "esriFieldTypeDouble",
				alias: "有效宽度",
				domain: null,
				editable: true,
				nullable: true
			},
			{
				name: "LTMDEP",
				type: "esriFieldTypeDouble",
				alias: "船闸门槛最小水深",
				domain: null,
				editable: true,
				nullable: true
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理部门",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			}]
		},{
			layerId:65,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "WGTNAM",
				type: "esriFieldTypeString",
				alias: "水闸名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CATWGT",
				type: "esriFieldTypeString",
				alias: "水闸类别",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			}]
		},{
			layerId:69,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "PTNCOD",
				type: "esriFieldTypeString",
				alias: "浮码头编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "PTNNAM",
				type: "esriFieldTypeString",
				alias: "浮码头名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "BNKWTW",
				type: "esriFieldTypeString",
				alias: "岸别",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONUNI",
				type: "esriFieldTypeString",
				alias: "建设单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "建设状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			}]
		},{
			layerId:70,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "TRMCOD",
				type: "esriFieldTypeString",
				alias: "固定码头编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "TRMNAM",
				type: "esriFieldTypeString",
				alias: "固定码头名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CATTRM",
				type: "esriFieldTypeString",
				alias: "固定码头类型",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "BNKWTW",
				type: "esriFieldTypeString",
				alias: "岸别",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "USETRM",
				type: "esriFieldTypeString",
				alias: "固定码头用途",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "BRTHNO",
				type: "esriFieldTypeString",
				alias: "泊位个数",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "CONUNI",
				type: "esriFieldTypeString",
				alias: "建设单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "建设状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "DELIFE",
				type: "esriFieldTypeString",
				alias: "设计使用年限",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			}]
		},{
			layerId:71,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "FLDCOD",
				type: "esriFieldTypeString",
				alias: "浮船坞编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "FLDNAM",
				type: "esriFieldTypeString",
				alias: "浮船坞名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "BNKWTW",
				type: "esriFieldTypeString",
				alias: "岸别",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONUNI",
				type: "esriFieldTypeString",
				alias: "建设单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "建设状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			}]
		},{
			layerId:72,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "SHYCOD",
				type: "esriFieldTypeString",
				alias: "船厂编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "SHYNAM",
				type: "esriFieldTypeString",
				alias: "船厂名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "BNKWTW",
				type: "esriFieldTypeString",
				alias: "岸别",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONUNI",
				type: "esriFieldTypeString",
				alias: "建设单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "建设状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			}]
		},{
			layerId:73,
			FeatuerAttrs:[{
				name: "OBJECTID",
				type: "esriFieldTypeOID",
				alias: "OBJECTID",
				domain: null,
				editable: false,
				nullable: false
			},
			{
				name: "MEADATE",
				type: "esriFieldTypeDate",
				alias: "测绘日期",
				domain: null,
				editable: true,
				nullable: true,
				length: 36
			},
			{
				name: "FEACOD",
				type: "esriFieldTypeString",
				alias: "要素代码",
				domain: null,
				editable: true,
				nullable: true,
				length: 6
			},
			{
				name: "PARTITION",
				type: "esriFieldTypeString",
				alias: "航段编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 10
			},
			{
				name: "DRDCOD",
				type: "esriFieldTypeString",
				alias: "干船坞编码",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "DRDNAM",
				type: "esriFieldTypeString",
				alias: "干船坞名称",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "BNKWTW",
				type: "esriFieldTypeString",
				alias: "岸别",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "APPRNO",
				type: "esriFieldTypeString",
				alias: "审批文号",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONUNI",
				type: "esriFieldTypeString",
				alias: "建设单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "MANDEP",
				type: "esriFieldTypeString",
				alias: "管理单位",
				domain: null,
				editable: true,
				nullable: true,
				length: 64
			},
			{
				name: "CONDTN",
				type: "esriFieldTypeString",
				alias: "建设状态",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			},
			{
				name: "INFORM",
				type: "esriFieldTypeString",
				alias: "备注信息",
				domain: null,
				editable: true,
				nullable: true,
				length: 100
			},
			{
				name: "SCAMIN",
				type: "esriFieldTypeString",
				alias: "最小比例尺",
				domain: null,
				editable: true,
				nullable: true,
				length: 32
			}]
		}],
		SearchLists:[{
			professionalType:1,
			FeatuerAttrs:[{
				name:"C_HANGDBM",
				description:"航段编码",
				alias:"航道编号",
				visiable: true
			},{
				name:"C_HANGDMC",
				description:"航段名称",
				alias:"航道名称",
				visiable: true
			},{
				name:"C_SUOZHD",
				description:"所在航道名称",
				alias:"所在航道"
			},{
				name:"C_HANGDQD",
				description:"航段起点",
				alias:"航道起点"
			},{
				name:"C_HANGDZD",
				description:"航段终点",
				alias:"航道止点"
			},{
				name:"N_HANGDLC",
				description:"航段里程",
				alias:"航道里程（km)"
			},{
				name:"N_SHEBLC",
				description:"设标里程",
				alias:"设标里程(km)"
			},{
				name:"N_WEIHSS",
				description:"航段最小水深",
				alias:"维护水深(m)"
			},{
				name:"N_WEIHKD",
				description:"航段最小宽度",
				alias:"航维护宽度(m)"
			},{
				name:"N_WANQBJ",
				description:"航段最小弯曲半径",
				alias:"弯曲半径(m)"
			},{
				name:"C_JISDJ",
				description:"现状技术等级",
				alias:"技术等级"
			},{
				name:"C_GUIHDJ",
				description:"发展规划技术等级",
				alias:"规划等级"
			},{
				name:"N_TONGHCBDW",
				description:"通航船舶吨级",
				alias:"通航船舶吨位(t)"
			},{
				name:"C_WEIHLB",
				description:"航段维护类别",
				alias:"维护类别"
			},{
				name:"C_NEIHHBPBLB",
				description:"航标配布类别",
				alias:"内河航标配布类别"
			},{
				name:"C_JISDJ",
				description:"现状技术等级",
				alias:"技术等级"
			},{
				name:"C_GUANXDWID",
				description:"航段管理部门",
				alias:"管辖单位ID"
			},{
				name:"C_BEIZ",
				description:"备注信息",
				alias:"备注"
			}]
		},{
			professionalType:2,
			FeatuerAttrs:[{
				name:"C_CHUANZBM",
				description:"船闸编号",
				alias:"船闸编码",
				visiable: true
			},{
				name:"C_CHUANZMC",
				description:"船闸名称",
				alias:"船闸名称",
				visiable: true
			},{
				name:"C_CHUANZJS",
				description:"船闸级别",
				alias:"船闸级数"
			},{
				name:"N_NIANTGNL",
				description:"通航能力",
				alias:"年通过能力"
			},{
				name:"N_CHUANZZSC",
				description:"有效长度",
				alias:"闸室长（m）"
			},{
				name:"N_CHUANZZSK",
				description:"有效宽度",
				alias:"闸室宽（m）"
			},{
				name:"CN_CHUANZMKSH",
				description:"船闸门槛最小水深",
				alias:"船闸门槛水深"
			},{
				name:"C_CHUANZGLDW",
				description:"管理部门",
				alias:"管理单位"
			}]
		},{
			professionalType:3,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"水位观测站编码",
				alias:"编码",
				visiable: true
			},{
				name:"C_SHUIWDMC",
				description:"水位观测站名称",
				alias:"水位点名称",
				visiable: true
			},{
				name:"C_GUANXDWID",
				description:"水位观测站管理部门",
				alias:"管辖单位ID"
			},{
				name:"C_SHIJZRTU",
				description:"水位遥测遥报系统标识符",
				alias:"10进制RTU编号"
			},{
				name:"C_CHUANZGLDW",
				description:"管理部门",
				alias:"管理单位"
			}]
		},{
			professionalType:4,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"视频监测站编码",
				alias:"编码",
				visiable: true
			},{
				name:"C_SPDMC",
				description:"视频监测站名称",
				alias:"视频点名称",
				visiable: true
			},{
				name:"C_GUANXDWID",
				description:"监测站管理部门",
				alias:"管辖单位ID"
			}]
		},{
			professionalType:5,
			FeatuerAttrs:[{
				name:"C_BUMMC",
				description:"航道管理机构名称",
				alias:"部门名称",
				visiable: true
			},{
				name:"C_BUMLX",
				description:"航道管理机构类型",
				alias:"部门类型",
				visiable: true
			}]
		},{
			professionalType:6,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"桥梁编号",
				alias:"编号",
				visiable: true
			},{
				name:"C_QIAOLMC",
				description:"桥梁名称",
				alias:"桥梁名称",
				visiable: true
			},{
				name:"C_YONGTFL",
				description:"桥梁类别",
				alias:"用途分类"
			},{
				name:"N_TONGHKS",
				description:"通航孔数",
				alias:"通航孔数（个）"
			},{
				name:"N_JINGKONE",
				description:"通航净宽",
				alias:"净宽1"
			},{
				name:"N_JINGKTWO",
				description:"通航净宽",
				alias:"净宽2"
			},{
				name:"N_JINGKTHREE",
				description:"通航净宽",
				alias:"净宽3"
			},{
				name:"N_JINGKFOUR",
				description:"通航净宽",
				alias:"净宽4"
			},{
				name:"N_JINGGONE",
				description:"通航净高",
				alias:"净高1"
			},{
				name:"N_JINGGTWO",
				description:"通航净高",
				alias:"净高2"
			},{
				name:"N_JINGGTHREE",
				description:"通航净高",
				alias:"净高3"
			},{
				name:"N_JINGGFOUR",
				description:"通航净高",
				alias:"净高4"
			},{
				name:"N_SHANGDWONE",
				description:"上底宽",
				alias:"上底宽1"
			},{
				name:"N_SHANGDWTWO",
				description:"上底宽",
				alias:"上底宽2"
			},{
				name:"N_SHANGDWTHREE",
				description:"上底宽",
				alias:"上底宽3"
			},{
				name:"N_SHANGDWFOUR",
				description:"上底宽",
				alias:"上底宽4"
			},{
				name:"N_CEGONE",
				description:"侧高",
				alias:"测高1"
			},{
				name:"N_CEGTWO",
				description:"侧高",
				alias:"测高2"
			},{
				name:"N_CEGTHREE",
				description:"侧高",
				alias:"测高3"
			},{
				name:"N_CEGFOUR",
				description:"侧高",
				alias:"测高4"
			},{
				name:"N_ZUIGTHSW",
				description:"设计最高通航水位",
				alias:"设计最高通航水位（米）"
			},{
				name:"C_SHENPWH",
				description:"航道审批文号",
				alias:"审批文号"
			},{
				name:"C_GUANXDWID",
				description:"管理单位",
				alias:"管理单位（不是id）"
			}]
		},{
			professionalType:7,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"架空线缆编码",
				alias:"编号",
				visiable: true
			},{
				name:"C_BUILDINGNAME",
				description:"架空线缆名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"C_FILENUMBER",
				description:"审批文号",
				alias:"批准文号"
			},{
				name:"C_OFFICEID",
				description:"管辖单位",
				alias:"管辖单位"
			},{
				name:"C_ISNEW",
				description:"建设状态",
				alias:"是否新建"
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			}]
		},{
			professionalType:8,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"架空管道编码",
				alias:"编号",
				visiable: true
			},{
				name:"C_BUILDINGNAME",
				description:"架空管道名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"C_FILENUMBER",
				description:"审批文号",
				alias:"批准文号"
			},{
				name:"C_OFFICEID",
				description:"管辖单位",
				alias:"管辖单位"
			},{
				name:"C_ISNEW",
				description:"建设状态",
				alias:"是否新建"
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			},{
				name:"N_GUOHEBUILDINGCLEARHIGHT",
				description:"固定垂直净空",
				alias:"水上过河建筑物净高(m)"
			}]
		},{
			professionalType:9,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"过河管道编码",
				alias:"编号",
				visiable: true
			},{
				name:"C_BUILDINGNAME",
				description:"过河管道名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"C_FILENUMBER",
				description:"审批文号",
				alias:"批准文号"
			},{
				name:"C_OFFICEID",
				description:"管辖单位",
				alias:"管辖单位"
			},{
				name:"C_ISNEW",
				description:"建设状态",
				alias:"是否新建"
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			}]
		},{
			professionalType:10,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"过河线缆编码",
				alias:"编号",
				visiable: true
			},{
				name:"C_BUILDINGNAME",
				description:"过河线缆名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"C_FILENUMBER",
				description:"审批文号",
				alias:"批准文号"
			},{
				name:"C_OFFICEID",
				description:"管辖单位",
				alias:"管辖单位"
			},{
				name:"C_ISNEW",
				description:"建设状态",
				alias:"是否新建"
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			}]
		},{
			professionalType:11,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"拦河坝编码",
				alias:"编号",
				visiable: true
			},{
				name:"C_BUILDINGNAME",
				description:"拦河坝名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			}]
		},{
			professionalType:12,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"水闸编码",
				alias:"编号",
				visiable: true
			},{
				name:"C_BUILDINGNAME",
				description:"水闸名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"C_OFFICEID",
				description:"管辖单位",
				alias:"管辖单位"
			},{
				name:"C_ISNEW",
				description:"状态",
				alias:"是否新建"
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			}]
		},{
			professionalType:13,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"船厂编码",
				alias:"编号",
				visiable: true
			},{
				name:"C_BUILDINGNAME",
				description:"船厂名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"C_BANKSORT",
				description:"岸别",
				alias:"所在航道岸别"
			},{
				name:"C_FILENUMBER",
				description:"审批文号",
				alias:"批准文号"
			},{
				name:"C_BUILDUNIT",
				description:"建设单位",
				alias:"建设单位"
			},{
				name:"C_OFFICEID",
				description:"管辖单位",
				alias:"管辖单位"
			},{
				name:"C_ISNEW",
				description:"建设状态",
				alias:"是否新建"
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			}]
		},{
			professionalType:14,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"取排水站编码",
				alias:"编号",
				visiable: true
			},{
				name:"C_BUILDINGNAME",
				description:"取排水口名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"C_BANKSORT",
				description:"岸别",
				alias:"所在航道岸别"
			},{
				name:"C_FILENUMBER",
				description:"审批文号",
				alias:"批准文号"
			},{
				name:"C_OFFICEID",
				description:"管理单位",
				alias:"管辖单位"
			},{
				name:"C_ISNEW",
				description:"状态",
				alias:"是否新建"
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			}]
		},{
			professionalType:15,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"抽排水站编码",
				alias:"编号",
				visiable: true
			},{
				name:"C_BUILDINGNAME",
				description:"抽排水口名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"C_BANKSORT",
				description:"岸别",
				alias:"所在航道岸别"
			},{
				name:"C_FILENUMBER",
				description:"审批文号",
				alias:"批准文号"
			},{
				name:"C_OFFICEID",
				description:"管理单位",
				alias:"管辖单位"
			},{
				name:"C_ISNEW",
				description:"状态",
				alias:"是否新建"
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			}]
		},{
			professionalType:16,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"编号",
				alias:"浮码头编码",
				visiable: true
			},{
				name:"C_ISNEW",
				description:"状态",
				alias:"是否新建",
				visiable: true
			}]
		},{
			professionalType:17,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"编号",
				alias:"简易固定码头编码",
				visiable: true
			},{
				name:"C_BUILDINGNAME",
				description:"简易固定码头名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"C_BANKSORT",
				description:"岸别",
				alias:"所在航道岸别"
			},{
				name:"C_FILENUMBER",
				description:"审批文号",
				alias:"批准文号"
			},{
				name:"C_BUILDUNIT",
				description:"建设单位",
				alias:"建设单位"
			},{
				name:"C_OFFICEID",
				description:"管辖单位",
				alias:"管辖单位"
			},{
				name:"C_ISNEW",
				description:"建设状态",
				alias:"是否新建"
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			}]
		},{
			professionalType:18,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"编号",
				alias:"固定码头编码",
				visiable: true
			},{
				name:"C_BUILDINGNAME",
				description:"固定码头名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"N_JIEGXS",
				description:"固定码头类型",
				alias:"结构形式"
			},{
				name:"C_BANKSORT",
				description:"岸别",
				alias:"所在航道岸别"
			},{
				name:"C_FILENUMBER",
				description:"审批文号",
				alias:"批准文号"
			},{
				name:"C_BUILDUNIT",
				description:"建设单位",
				alias:"建设单位"
			},{
				name:"C_OFFICEID",
				description:"管辖单位",
				alias:"管辖单位"
			},{
				name:"C_ISNEW",
				description:"建设状态",
				alias:"是否新建"
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			}]
		},{
			professionalType:19,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"浮船坞编码",
				alias:"编号",
				visiable: true
			},{
				name:"C_BUILDINGNAM",
				description:"浮船坞名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"C_BANKSORT",
				description:"岸别",
				alias:"所在航道岸别"
			},{
				name:"C_FILENUMBER",
				description:"审批文号",
				alias:"批准文号"
			},{
				name:"C_BUILDUNIT",
				description:"建设单位",
				alias:"建设单位"
			},{
				name:"C_OFFICEID",
				description:"管辖单位",
				alias:"管辖单位"
			},{
				name:"C_ISNEW",
				description:"建设状态",
				alias:"是否新建"
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			}]
		},{
			professionalType:20,
			FeatuerAttrs:[{
				name:"C_BIANM",
				description:"干船坞编码",
				alias:"编号",
				visiable: true
			},{
				name:"C_HANGDMC",
				description:"干船坞名称",
				alias:"建筑物名称",
				visiable: true
			},{
				name:"C_BANKSORT",
				description:"岸别",
				alias:"所在航道岸别"
			},{
				name:"C_FILENUMBER",
				description:"审批文号",
				alias:"批准文号"
			},{
				name:"C_BUILDUNIT",
				description:"建设单位",
				alias:"建设单位"
			},{
				name:"C_OFFICEID",
				description:"管辖单位",
				alias:"管辖单位"
			},{
				name:"C_ISNEW",
				description:"建设状态",
				alias:"是否新建"
			},{
				name:"C_REMARK",
				description:"备注信息",
				alias:"备注"
			}]
		}]
}