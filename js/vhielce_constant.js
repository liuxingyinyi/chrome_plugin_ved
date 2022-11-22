//在售
const ON_SALE = {
    objCode: "car",
    viewCode: "car_on_sale",
    filters: [
        {
            builtIn: false,
            builtInType: "brandSeriesModel",
            code: "car_field_name",
            display: true,
            displayType: "default",
            editable: true,
            inputType: "check_box",
            name: "品牌车型",
            required: true,
            type: "BUILT_IN",
            value: {
                displayValue: "",
                empty: true,
                items: []
            }
        },
        {
            builtIn: false,
            code: "car_field_detection_status",
            display: true,
            displayType: "tag",
            editable: true,
            elements: [
                {
                    code: "wjc",
                    name: "未检测"
                },
                {
                    code: "djc",
                    name: "待检测"
                },
                {
                    code: "jcz",
                    name: "检测中"
                },
                {
                    code: "jcwc",
                    name: "检测完成"
                },
                {
                    code: "jcsb",
                    name: "检测失败"
                }
            ],
            inputType: "check_box",
            name: "检测状态",
            required: false,
            type: "RADIO"
        },
        {
            builtIn: false,
            code: "car_field_weidian_is_upshelf",
            display: true,
            displayType: "tag",
            editable: true,
            elements: [
                {
                    code: "0gqKEZFKYX_option_value_qWgJSVMPmN",
                    name: "未上架"
                },
                {
                    code: "0gqKEZFKYX_option_value_ZWacFiWc1o",
                    name: "已上架"
                }
            ],
            inputType: "check_box",
            name: "微店上架",
            required: false,
            type: "RADIO",
            value: {
                values: []
            }
        },
        {
            builtIn: false,
            code: "car_field_purchase_type",
            display: true,
            displayType: "tag",
            editable: true,
            elements: [
                {
                    code: "fxae00VqZ0_option_value_Luqy8jNt1Q",
                    name: "收购"
                },
                {
                    code: "paimai",
                    name: "拍卖"
                },
                {
                    code: "fxae00VqZ0_option_value_Or8aDqKEGT",
                    name: "实车寄售"
                },
                {
                    code: "fxae00VqZ0_option_value_jiMN9mfBcE",
                    name: "网络寄售"
                },
                {
                    code: "fxae00VqZ0_option_value_M8OahkNXNv",
                    name: "合作"
                },
                {
                    code: "fxae00VqZ0_option_value_aTuUCbBaLE",
                    name: "置换"
                },
                {
                    code: "60",
                    name: "其他"
                }
            ],
            inputType: "check_box",
            name: "采购类型",
            required: false,
            type: "RADIO"
        },
        {
            builtIn: false,
            code: "car_field_stock_status",
            display: true,
            displayType: "tag",
            editable: true,
            elements: [
                {
                    code: "siOa7lSClG_option_value_vZAtYULa31",
                    name: "在途"
                },
                {
                    code: "siOa7lSClG_option_value_RqMLk4UCHS",
                    name: "在厅"
                },
                {
                    code: "siOa7lSClG_option_value_zZQhWpTQKL",
                    name: "整备"
                },
                {
                    code: "siOa7lSC",
                    name: "初检"
                },
                {
                    code: "siOa7lSClG_option_value_NUa4062kJJ",
                    name: "转场"
                },
                {
                    code: "siOa7lSClG_option_value_xp4KaUYCkH",
                    name: "外借"
                },
                {
                    code: "waichu",
                    name: "外出"
                },
                {
                    code: "yichuku",
                    name: "已出库"
                }
            ],
            inputType: "check_box",
            name: "库存状态",
            required: false,
            type: "RADIO"
        },
        {
            builtIn: false,
            code: "car_field_sale_price",
            decimalDigit: 2,
            display: true,
            displayType: "default",
            editable: true,
            inputType: "range_input_box",
            maxValue: "9999.99",
            minValue: "0",
            name: "网络标价",
            required: false,
            type: "CURRENCY",
            unit: "万元",
            value: {
                empty: true
            }
        },
        {
            code: "car_field_assessor_name",
            display: true,
            displayType: "page",
            editable: true,
            inputType: "check_box",
            name: "评估师",
            objCode: "scdo_user",
            required: false,
            targetObjCode: "scdo_user",
            type: "LOOKUP"
        },
        {
            builtIn: false,
            code: "car_field_first_license_plate_date",
            display: true,
            displayType: "date",
            editable: true,
            inputType: "range_input_box",
            name: "首次上牌",
            relativeTimeTags: [
                {
                    code: "car_field_first_license_plate_date_time_IxwvxAkA9O",
                    name: "今年",
                    type: "YEAR"
                },
                {
                    code: "car_field_first_license_plate_date_time_CNaoxV1Wn9",
                    name: "去年",
                    type: "YEAR"
                },
                {
                    code: "car_field_first_license_plate_date_time_zKaglojioP",
                    name: "近三年",
                    type: "YEAR"
                },
                {
                    code: "car_field_first_license_plate_date_time_edMNv1qK6L",
                    name: "近五年",
                    type: "YEAR"
                }
            ],
            required: true,
            type: "DATETIME",
            value: {
                empty: true
            }
        },
        {
            code: "car_field_shop_code",
            display: true,
            displayType: "page",
            editable: true,
            inputType: "check_box",
            name: "门店",
            objCode: "scdo_shop",
            required: true,
            targetObjCode: "scdo_shop",
            type: "LOOKUP",
            value: {
                displayValue: "13811099817",
                empty: false,
                values: [
                    {
                        empty: false,
                        id: "04302535",
                        name: "13811099817"
                    }
                ]
            }
        },
        {
            builtIn: false,
            code: "car_field_car_body",
            display: true,
            displayType: "tag",
            editable: true,
            elements: [
                {
                    code: "CS48KMJ4E7_option_value_g4qULCqs40",
                    name: "客车"
                },
                {
                    code: "CS48KMJ4E7_option_value_6bQpOZPtxR",
                    name: "货车"
                },
                {
                    code: "CS48KMJ4E7_option_value_kOg7h3aDJ8",
                    name: "三厢车"
                },
                {
                    code: "CS48KMJ4E7_option_value_cXcFveWQVI",
                    name: "两厢车"
                },
                {
                    code: "CS48KMJ4E7_option_value_Ju8unONdAK",
                    name: "旅行车"
                },
                {
                    code: "CS48KMJ4E7_option_value_ggK2gTvRtV",
                    name: "皮卡"
                },
                {
                    code: "CS48KMJ4E7_option_value_NFs1JTfIVX",
                    name: "MPV"
                },
                {
                    code: "CS48KMJ4E7_option_value_q4OGfFJ36d",
                    name: "SUV"
                },
                {
                    code: "CS48KMJ4E7_option_value_QPa0HFsLg2",
                    name: "掀背车"
                },
                {
                    code: "CS48KMJ4E7_option_value_UDKkP78g36",
                    name: "软顶敞篷车"
                },
                {
                    code: "CS48KMJ4E7_option_value_Qecbi3PnRg",
                    name: "硬顶敞篷车"
                },
                {
                    code: "CS48KMJ4E7_option_value_PT4uWfris5",
                    name: "硬顶跑车"
                }
            ],
            inputType: "check_box",
            name: "车身结构",
            required: false,
            type: "RADIO"
        },
        {
            builtIn: false,
            code: "car_field_gear_box_type",
            display: true,
            displayType: "tag",
            editable: true,
            elements: [
                {
                    code: "jHAReXtT38_option_value_NFQzb25m37",
                    name: "手自一体"
                },
                {
                    code: "jHAReXtT38_option_value_7MOEGIeGvU",
                    name: "自动变速箱"
                },
                {
                    code: "jHAReXtT38_option_value_YJMr62zpGc",
                    name: "无极变速箱"
                },
                {
                    code: "jHAReXtT38_option_value_93ALzjBVj3",
                    name: "双离合变速箱"
                },
                {
                    code: "jHAReXtT38_option_value_vbaKO1yUE7",
                    name: "手动变速箱"
                },
                {
                    code: "jHAReXtT38_option_value_m0u6Avh7yc",
                    name: "电子无极"
                },
                {
                    code: "jHAReXtT38_option_value_xUwzdOu9iK",
                    name: "机械式自动"
                },
                {
                    code: "jHAReXtT38_option_value_aRaiOev6pw",
                    name: "序列变速箱"
                },
                {
                    code: "jHAReXtT38_option_value_NzwH9LdXl3",
                    name: "ISR变速箱"
                },
                {
                    code: "jHAReXtT38_option_value_HzOSjUUsXr",
                    name: "固定齿比"
                },
                {
                    code: "12",
                    name: "E-CVT+自动"
                },
                {
                    code: "13",
                    name: "国际档"
                }
            ],
            inputType: "check_box",
            name: "变速箱类型",
            required: false,
            type: "RADIO"
        },
        {
            builtIn: false,
            builtInType: "singleCarColour",
            code: "car_field_color",
            display: true,
            displayType: "default",
            editable: true,
            inputType: "check_box",
            name: "车身颜色",
            required: true,
            type: "BUILT_IN",
            value: {
                displayValue: "",
                empty: true,
                values: []
            }
        },
        {
            builtIn: false,
            code: "car_field_mileage",
            decimalDigit: 2,
            display: true,
            displayType: "default",
            editable: true,
            inputType: "range_input_box",
            maxValue: "99.99",
            minValue: "-99.99",
            name: "表显里程",
            required: true,
            type: "NUMBER",
            unit: "万公里",
            value: {
                empty: true
            }
        },
        {
            builtIn: false,
            code: "car_field_emission_standard",
            display: true,
            displayType: "tag",
            editable: true,
            elements: [
                {
                    code: "dFaWk1XCyl_option_value_E86JZJeywo",
                    name: "国一"
                },
                {
                    code: "dFaWk1XCyl_option_value_DtsZnY7NhH",
                    name: "国二"
                },
                {
                    code: "dFaWk1XCyl_option_value_WZaGKP5K3Y",
                    name: "国三"
                },
                {
                    code: "dFaWk1XCyl_option_value_l8sf66FMKY",
                    name: "国四"
                },
                {
                    code: "dFaWk1XCyl_option_value_eXcXmGJktV",
                    name: "国五"
                },
                {
                    code: "dFaWk1XCyl_option_value_YG82uJ6KIo",
                    name: "国六"
                },
                {
                    code: "dFaWk1XCyl_option_value_zn8YSKoIZK",
                    name: "欧一"
                },
                {
                    code: "dFaWk1XCyl_option_value_86c7r7igJh",
                    name: "欧二"
                },
                {
                    code: "dFaWk1XCyl_option_value_fa4w9pBdE3",
                    name: "欧三"
                },
                {
                    code: "dFaWk1XCyl_option_value_KTsfgUe7b5",
                    name: "欧四"
                },
                {
                    code: "dFaWk1XCyl_option_value_s7AZ68eWjQ",
                    name: "欧五"
                },
                {
                    code: "dFaWk1XCyl_option_value_eq6xtCfWRE",
                    name: "欧六"
                }
            ],
            inputType: "check_box",
            name: "排放标准",
            required: false,
            type: "RADIO"
        },
        {
            builtIn: false,
            code: "car_field_operation_phase",
            display: true,
            displayType: "tag",
            editable: true,
            elements: [
                {
                    code: "5j4qm0tNbC_phase_node_dFM1uFKdmI",
                    name: "在售"
                },
                {
                    code: "5j4qm0tNbC_phase_node_ucQvV02Z5v",
                    name: "已预订"
                },
                {
                    code: "5j4qm0tNbC_phase_node_WZgTRtWjBz",
                    name: "已售"
                },
                {
                    code: "5j4qm0tNbC_phase_node_GdOunSGEU1",
                    name: "退库"
                }
            ],
            inputType: "check_box",
            name: "车辆状态",
            required: false,
            type: "RADIO",
            value: {
                empty: false,
                values: [
                    "5j4qm0tNbC_phase_node_dFM1uFKdmI"
                ]
            }
        },
        {
            builtIn: false,
            code: "car_field_car_age",
            decimalDigit: 0,
            display: true,
            displayType: "default",
            editable: true,
            inputType: "range_input_box",
            maxValue: "99999999",
            minValue: "0",
            name: "库龄",
            required: false,
            type: "NUMBER",
            unit: "天",
            value: {
                empty: true
            }
        },
        {
            builtIn: false,
            code: "car_field_source_car",
            display: true,
            displayType: "tag",
            editable: true,
            elements: [
                {
                    code: "TTCL",
                    name: "寄售代销"
                },
                {
                    code: "XDFC",
                    name: "自有库存"
                },
                {
                    code: "LMDX",
                    name: "联盟代销"
                }
            ],
            inputType: "check_box",
            name: "车辆来源",
            required: false,
            type: "RADIO",
            value: {
                empty: false,
                values: [
                    "XDFC"
                ]
            }
        },
        {
            builtIn: false,
            code: "car_field_sfydyjcbg",
            display: true,
            displayType: "tag",
            editable: true,
            elements: [
                {
                    code: "y",
                    name: "是"
                },
                {
                    code: "n",
                    name: "否"
                }
            ],
            inputType: "check_box",
            name: "抖音能否展示",
            required: false,
            type: "RADIO"
        }
    ],
    keywords: "",
    pageNo: 1,
    pageSize: 20,
    sort: {
        chosen: true,
        fieldCode: "car_field_date_create",
        fieldName: "创建时间",
        isBuildIn: true,
        ruleName: "最近创建",
        sortType: "desc"
    }
};
//在售已上架
const yishangjia = {
    objCode: "car",
    viewCode: "car_yishangjia",
    filters: [{
        builtIn: false,
        code: "car_field_stock_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "siOa7lSClG_option_value_vZAtYULa31",
            name: "在途"
        }, {
            code: "siOa7lSClG_option_value_RqMLk4UCHS",
            name: "在厅"
        }, {
            code: "siOa7lSClG_option_value_zZQhWpTQKL",
            name: "整备"
        }, {
            code: "siOa7lSC",
            name: "初检"
        }, {
            code: "siOa7lSClG_option_value_NUa4062kJJ",
            name: "转场"
        }, {
            code: "siOa7lSClG_option_value_xp4KaUYCkH",
            name: "外借"
        }, {
            code: "waichu",
            name: "外出"
        }, {
            code: "yichuku",
            name: "已出库"
        }
        ],
        inputType: "check_box",
        name: "库存状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        builtInType: "brandSeriesModel",
        code: "car_field_name",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "品牌车型",
        required: true,
        type: "BUILT_IN",
        value: {
            displayValue: "",
            empty: true,
            items: []
        }
    }, {
        code: "car_field_shop_code",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "门店",
        objCode: "scdo_shop",
        required: true,
        targetObjCode: "scdo_shop",
        type: "LOOKUP",
        value: {
            displayValue: "13811099817",
            empty: false,
            values: [{
                empty: false,
                id: "04302535",
                name: "13811099817"
            }
            ]
        }
    }, {
        builtIn: false,
        code: "car_field_purchase_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "fxae00VqZ0_option_value_Luqy8jNt1Q",
            name: "收购"
        }, {
            code: "paimai",
            name: "拍卖"
        }, {
            code: "fxae00VqZ0_option_value_Or8aDqKEGT",
            name: "实车寄售"
        }, {
            code: "fxae00VqZ0_option_value_jiMN9mfBcE",
            name: "网络寄售"
        }, {
            code: "fxae00VqZ0_option_value_M8OahkNXNv",
            name: "合作"
        }, {
            code: "fxae00VqZ0_option_value_aTuUCbBaLE",
            name: "置换"
        }, {
            code: "60",
            name: "其他"
        }
        ],
        inputType: "check_box",
        name: "采购类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_sale_price",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "9999.99",
        minValue: "0",
        name: "网络标价",
        required: false,
        type: "CURRENCY",
        unit: "万元",
        value: {
            empty: true
        }
    }, {
        code: "car_field_assessor_name",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "评估师",
        objCode: "scdo_user",
        required: false,
        targetObjCode: "scdo_user",
        type: "LOOKUP"
    }, {
        builtIn: false,
        code: "car_field_first_license_plate_date",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "首次上牌",
        relativeTimeTags: [{
            code: "car_field_first_license_plate_date_time_IxwvxAkA9O",
            name: "今年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_CNaoxV1Wn9",
            name: "去年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_zKaglojioP",
            name: "近三年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_edMNv1qK6L",
            name: "近五年",
            type: "YEAR"
        }
        ],
        required: true,
        type: "DATETIME",
        value: {
            empty: true
        }
    }, {
        builtIn: false,
        code: "car_field_car_body",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "CS48KMJ4E7_option_value_g4qULCqs40",
            name: "客车"
        }, {
            code: "CS48KMJ4E7_option_value_6bQpOZPtxR",
            name: "货车"
        }, {
            code: "CS48KMJ4E7_option_value_kOg7h3aDJ8",
            name: "三厢车"
        }, {
            code: "CS48KMJ4E7_option_value_cXcFveWQVI",
            name: "两厢车"
        }, {
            code: "CS48KMJ4E7_option_value_Ju8unONdAK",
            name: "旅行车"
        }, {
            code: "CS48KMJ4E7_option_value_ggK2gTvRtV",
            name: "皮卡"
        }, {
            code: "CS48KMJ4E7_option_value_NFs1JTfIVX",
            name: "MPV"
        }, {
            code: "CS48KMJ4E7_option_value_q4OGfFJ36d",
            name: "SUV"
        }, {
            code: "CS48KMJ4E7_option_value_QPa0HFsLg2",
            name: "掀背车"
        }, {
            code: "CS48KMJ4E7_option_value_UDKkP78g36",
            name: "软顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_Qecbi3PnRg",
            name: "硬顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_PT4uWfris5",
            name: "硬顶跑车"
        }
        ],
        inputType: "check_box",
        name: "车身结构",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_gear_box_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "jHAReXtT38_option_value_NFQzb25m37",
            name: "手自一体"
        }, {
            code: "jHAReXtT38_option_value_7MOEGIeGvU",
            name: "自动变速箱"
        }, {
            code: "jHAReXtT38_option_value_YJMr62zpGc",
            name: "无极变速箱"
        }, {
            code: "jHAReXtT38_option_value_93ALzjBVj3",
            name: "双离合变速箱"
        }, {
            code: "jHAReXtT38_option_value_vbaKO1yUE7",
            name: "手动变速箱"
        }, {
            code: "jHAReXtT38_option_value_m0u6Avh7yc",
            name: "电子无极"
        }, {
            code: "jHAReXtT38_option_value_xUwzdOu9iK",
            name: "机械式自动"
        }, {
            code: "jHAReXtT38_option_value_aRaiOev6pw",
            name: "序列变速箱"
        }, {
            code: "jHAReXtT38_option_value_NzwH9LdXl3",
            name: "ISR变速箱"
        }, {
            code: "jHAReXtT38_option_value_HzOSjUUsXr",
            name: "固定齿比"
        }, {
            code: "12",
            name: "E-CVT+自动"
        }, {
            code: "13",
            name: "国际档"
        }
        ],
        inputType: "check_box",
        name: "变速箱类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        builtInType: "singleCarColour",
        code: "car_field_color",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "车身颜色",
        required: true,
        type: "BUILT_IN",
        value: {
            displayValue: "",
            empty: true,
            values: []
        }
    }, {
        builtIn: false,
        code: "car_field_mileage",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99.99",
        minValue: "-99.99",
        name: "表显里程",
        required: true,
        type: "NUMBER",
        unit: "万公里",
        value: {
            empty: true
        }
    }, {
        builtIn: false,
        code: "car_field_emission_standard",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "dFaWk1XCyl_option_value_E86JZJeywo",
            name: "国一"
        }, {
            code: "dFaWk1XCyl_option_value_DtsZnY7NhH",
            name: "国二"
        }, {
            code: "dFaWk1XCyl_option_value_WZaGKP5K3Y",
            name: "国三"
        }, {
            code: "dFaWk1XCyl_option_value_l8sf66FMKY",
            name: "国四"
        }, {
            code: "dFaWk1XCyl_option_value_eXcXmGJktV",
            name: "国五"
        }, {
            code: "dFaWk1XCyl_option_value_YG82uJ6KIo",
            name: "国六"
        }, {
            code: "dFaWk1XCyl_option_value_zn8YSKoIZK",
            name: "欧一"
        }, {
            code: "dFaWk1XCyl_option_value_86c7r7igJh",
            name: "欧二"
        }, {
            code: "dFaWk1XCyl_option_value_fa4w9pBdE3",
            name: "欧三"
        }, {
            code: "dFaWk1XCyl_option_value_KTsfgUe7b5",
            name: "欧四"
        }, {
            code: "dFaWk1XCyl_option_value_s7AZ68eWjQ",
            name: "欧五"
        }, {
            code: "dFaWk1XCyl_option_value_eq6xtCfWRE",
            name: "欧六"
        }
        ],
        inputType: "check_box",
        name: "排放标准",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_weidian_is_upshelf",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "0gqKEZFKYX_option_value_qWgJSVMPmN",
            name: "未上架"
        }, {
            code: "0gqKEZFKYX_option_value_ZWacFiWc1o",
            name: "已上架"
        }
        ],
        inputType: "check_box",
        name: "微店上架",
        required: false,
        type: "RADIO",
        value: {
            values: ["0gqKEZFKYX_option_value_ZWacFiWc1o"]
        },
        empty: false
    }, {
        builtIn: false,
        code: "car_field_operation_phase",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "5j4qm0tNbC_phase_node_dFM1uFKdmI",
            name: "在售"
        }, {
            code: "5j4qm0tNbC_phase_node_ucQvV02Z5v",
            name: "已预订"
        }, {
            code: "5j4qm0tNbC_phase_node_WZgTRtWjBz",
            name: "已售"
        }, {
            code: "5j4qm0tNbC_phase_node_GdOunSGEU1",
            name: "退库"
        }
        ],
        inputType: "check_box",
        name: "车辆状态",
        required: false,
        type: "RADIO",
        value: {
            empty: false,
            values: ["5j4qm0tNbC_phase_node_dFM1uFKdmI"]
        }
    }, {
        builtIn: false,
        code: "car_field_detection_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "wjc",
            name: "未检测"
        }, {
            code: "djc",
            name: "待检测"
        }, {
            code: "jcz",
            name: "检测中"
        }, {
            code: "jcwc",
            name: "检测完成"
        }, {
            code: "jcsb",
            name: "检测失败"
        }
        ],
        inputType: "check_box",
        name: "检测状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_source_car",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "TTCL",
            name: "寄售代销"
        }, {
            code: "XDFC",
            name: "自有库存"
        }, {
            code: "LMDX",
            name: "联盟代销"
        }
        ],
        inputType: "check_box",
        name: "车辆来源",
        required: false,
        type: "RADIO",
        value: {
            empty: false,
            values: ["XDFC"]
        }
    }
    ],
    keywords: "",
    pageNo: 1,
    pageSize: 20,
    sort: {
        chosen: true,
        fieldCode: "car_field_date_create",
        fieldName: "创建时间",
        isBuildIn: true,
        ruleName: "最近创建",
        sortType: "desc"
    }
};


//寄售代销
const car_tt_sale = {
    objCode: "car",
    viewCode: "car_tt_sale",
    filters: [{
        builtIn: false,
        builtInType: "brandSeriesModel",
        code: "car_field_name",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "品牌车型",
        required: true,
        type: "BUILT_IN",
        value: {
            displayValue: "",
            empty: true,
            items: []
        }
    }, {
        builtIn: false,
        code: "car_field_weidian_is_upshelf",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "0gqKEZFKYX_option_value_qWgJSVMPmN",
            name: "未上架"
        }, {
            code: "0gqKEZFKYX_option_value_ZWacFiWc1o",
            name: "已上架"
        }
        ],
        inputType: "check_box",
        name: "微店上架",
        required: false,
        type: "RADIO",
        value: {
            values: []
        }
    }, {
        builtIn: false,
        code: "car_field_purchase_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "fxae00VqZ0_option_value_Luqy8jNt1Q",
            name: "收购"
        }, {
            code: "paimai",
            name: "拍卖"
        }, {
            code: "fxae00VqZ0_option_value_Or8aDqKEGT",
            name: "实车寄售"
        }, {
            code: "fxae00VqZ0_option_value_jiMN9mfBcE",
            name: "网络寄售"
        }, {
            code: "fxae00VqZ0_option_value_M8OahkNXNv",
            name: "合作"
        }, {
            code: "fxae00VqZ0_option_value_aTuUCbBaLE",
            name: "置换"
        }, {
            code: "60",
            name: "其他"
        }
        ],
        inputType: "check_box",
        name: "采购类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_stock_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "siOa7lSClG_option_value_vZAtYULa31",
            name: "在途"
        }, {
            code: "siOa7lSClG_option_value_RqMLk4UCHS",
            name: "在厅"
        }, {
            code: "siOa7lSClG_option_value_zZQhWpTQKL",
            name: "整备"
        }, {
            code: "siOa7lSC",
            name: "初检"
        }, {
            code: "siOa7lSClG_option_value_NUa4062kJJ",
            name: "转场"
        }, {
            code: "siOa7lSClG_option_value_xp4KaUYCkH",
            name: "外借"
        }, {
            code: "waichu",
            name: "外出"
        }, {
            code: "yichuku",
            name: "已出库"
        }
        ],
        inputType: "check_box",
        name: "库存状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_sale_price",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "9999.99",
        minValue: "0",
        name: "网络标价",
        required: false,
        type: "CURRENCY",
        unit: "万元",
        value: {
            empty: true
        }
    }, {
        code: "car_field_assessor_name",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "评估师",
        objCode: "scdo_user",
        required: false,
        targetObjCode: "scdo_user",
        type: "LOOKUP"
    }, {
        builtIn: false,
        code: "car_field_first_license_plate_date",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "首次上牌",
        relativeTimeTags: [{
            code: "car_field_first_license_plate_date_time_IxwvxAkA9O",
            name: "今年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_CNaoxV1Wn9",
            name: "去年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_zKaglojioP",
            name: "近三年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_edMNv1qK6L",
            name: "近五年",
            type: "YEAR"
        }
        ],
        required: true,
        type: "DATETIME",
        value: {
            empty: true
        }
    }, {
        code: "car_field_shop_code",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "门店",
        objCode: "scdo_shop",
        required: true,
        targetObjCode: "scdo_shop",
        type: "LOOKUP",
        value: {
            displayValue: "13811099817",
            empty: false,
            values: [{
                empty: false,
                id: "04302535",
                name: "13811099817"
            }
            ]
        }
    }, {
        builtIn: false,
        code: "car_field_car_body",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "CS48KMJ4E7_option_value_g4qULCqs40",
            name: "客车"
        }, {
            code: "CS48KMJ4E7_option_value_6bQpOZPtxR",
            name: "货车"
        }, {
            code: "CS48KMJ4E7_option_value_kOg7h3aDJ8",
            name: "三厢车"
        }, {
            code: "CS48KMJ4E7_option_value_cXcFveWQVI",
            name: "两厢车"
        }, {
            code: "CS48KMJ4E7_option_value_Ju8unONdAK",
            name: "旅行车"
        }, {
            code: "CS48KMJ4E7_option_value_ggK2gTvRtV",
            name: "皮卡"
        }, {
            code: "CS48KMJ4E7_option_value_NFs1JTfIVX",
            name: "MPV"
        }, {
            code: "CS48KMJ4E7_option_value_q4OGfFJ36d",
            name: "SUV"
        }, {
            code: "CS48KMJ4E7_option_value_QPa0HFsLg2",
            name: "掀背车"
        }, {
            code: "CS48KMJ4E7_option_value_UDKkP78g36",
            name: "软顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_Qecbi3PnRg",
            name: "硬顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_PT4uWfris5",
            name: "硬顶跑车"
        }
        ],
        inputType: "check_box",
        name: "车身结构",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_gear_box_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "jHAReXtT38_option_value_NFQzb25m37",
            name: "手自一体"
        }, {
            code: "jHAReXtT38_option_value_7MOEGIeGvU",
            name: "自动变速箱"
        }, {
            code: "jHAReXtT38_option_value_YJMr62zpGc",
            name: "无极变速箱"
        }, {
            code: "jHAReXtT38_option_value_93ALzjBVj3",
            name: "双离合变速箱"
        }, {
            code: "jHAReXtT38_option_value_vbaKO1yUE7",
            name: "手动变速箱"
        }, {
            code: "jHAReXtT38_option_value_m0u6Avh7yc",
            name: "电子无极"
        }, {
            code: "jHAReXtT38_option_value_xUwzdOu9iK",
            name: "机械式自动"
        }, {
            code: "jHAReXtT38_option_value_aRaiOev6pw",
            name: "序列变速箱"
        }, {
            code: "jHAReXtT38_option_value_NzwH9LdXl3",
            name: "ISR变速箱"
        }, {
            code: "jHAReXtT38_option_value_HzOSjUUsXr",
            name: "固定齿比"
        }, {
            code: "12",
            name: "E-CVT+自动"
        }, {
            code: "13",
            name: "国际档"
        }
        ],
        inputType: "check_box",
        name: "变速箱类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        builtInType: "singleCarColour",
        code: "car_field_color",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "车身颜色",
        required: true,
        type: "BUILT_IN",
        value: {
            displayValue: "",
            empty: true,
            values: []
        }
    }, {
        builtIn: false,
        code: "car_field_mileage",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99.99",
        minValue: "-99.99",
        name: "表显里程",
        required: true,
        type: "NUMBER",
        unit: "万公里",
        value: {
            empty: true
        }
    }, {
        builtIn: false,
        code: "car_field_emission_standard",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "dFaWk1XCyl_option_value_E86JZJeywo",
            name: "国一"
        }, {
            code: "dFaWk1XCyl_option_value_DtsZnY7NhH",
            name: "国二"
        }, {
            code: "dFaWk1XCyl_option_value_WZaGKP5K3Y",
            name: "国三"
        }, {
            code: "dFaWk1XCyl_option_value_l8sf66FMKY",
            name: "国四"
        }, {
            code: "dFaWk1XCyl_option_value_eXcXmGJktV",
            name: "国五"
        }, {
            code: "dFaWk1XCyl_option_value_YG82uJ6KIo",
            name: "国六"
        }, {
            code: "dFaWk1XCyl_option_value_zn8YSKoIZK",
            name: "欧一"
        }, {
            code: "dFaWk1XCyl_option_value_86c7r7igJh",
            name: "欧二"
        }, {
            code: "dFaWk1XCyl_option_value_fa4w9pBdE3",
            name: "欧三"
        }, {
            code: "dFaWk1XCyl_option_value_KTsfgUe7b5",
            name: "欧四"
        }, {
            code: "dFaWk1XCyl_option_value_s7AZ68eWjQ",
            name: "欧五"
        }, {
            code: "dFaWk1XCyl_option_value_eq6xtCfWRE",
            name: "欧六"
        }
        ],
        inputType: "check_box",
        name: "排放标准",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_operation_phase",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "5j4qm0tNbC_phase_node_dFM1uFKdmI",
            name: "在售"
        }, {
            code: "5j4qm0tNbC_phase_node_ucQvV02Z5v",
            name: "已预订"
        }, {
            code: "5j4qm0tNbC_phase_node_WZgTRtWjBz",
            name: "已售"
        }, {
            code: "5j4qm0tNbC_phase_node_GdOunSGEU1",
            name: "退库"
        }
        ],
        inputType: "check_box",
        name: "车辆状态",
        required: false,
        type: "RADIO",
        value: {
            empty: false,
            values: ["5j4qm0tNbC_phase_node_dFM1uFKdmI"]
        }
    }, {
        builtIn: false,
        code: "car_field_car_age",
        decimalDigit: 0,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99999999",
        minValue: "0",
        name: "库龄",
        required: false,
        type: "NUMBER",
        unit: "天",
        value: {
            empty: true
        }
    }, {
        builtIn: false,
        code: "car_field_detection_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "wjc",
            name: "未检测"
        }, {
            code: "djc",
            name: "待检测"
        }, {
            code: "jcz",
            name: "检测中"
        }, {
            code: "jcwc",
            name: "检测完成"
        }, {
            code: "jcsb",
            name: "检测失败"
        }
        ],
        inputType: "check_box",
        name: "检测状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_source_car",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "TTCL",
            name: "寄售代销"
        }, {
            code: "XDFC",
            name: "自有库存"
        }, {
            code: "LMDX",
            name: "联盟代销"
        }
        ],
        inputType: "check_box",
        name: "车辆来源",
        required: false,
        type: "RADIO",
        value: {
            empty: false,
            values: ["TTCL"]
        }
    }
    ],
    keywords: "",
    pageNo: 1,
    pageSize: 20,
    sort: {
        chosen: true,
        fieldCode: "car_field_date_create",
        fieldName: "创建时间",
        isBuildIn: true,
        ruleName: "最近创建",
        sortType: "desc"
    }
};

//在售未上架
const car_zaishouweishangjia = {
    objCode: "car",
    viewCode: "car_zaishouweishangjia",
    filters: [{
        builtIn: false,
        code: "car_field_stock_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "siOa7lSClG_option_value_vZAtYULa31",
            name: "在途"
        }, {
            code: "siOa7lSClG_option_value_RqMLk4UCHS",
            name: "在厅"
        }, {
            code: "siOa7lSClG_option_value_zZQhWpTQKL",
            name: "整备"
        }, {
            code: "siOa7lSC",
            name: "初检"
        }, {
            code: "siOa7lSClG_option_value_NUa4062kJJ",
            name: "转场"
        }, {
            code: "siOa7lSClG_option_value_xp4KaUYCkH",
            name: "外借"
        }, {
            code: "waichu",
            name: "外出"
        }, {
            code: "yichuku",
            name: "已出库"
        }
        ],
        inputType: "check_box",
        name: "库存状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        builtInType: "brandSeriesModel",
        code: "car_field_name",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "品牌车型",
        required: true,
        type: "BUILT_IN",
        value: {
            displayValue: "",
            empty: true,
            items: []
        }
    }, {
        code: "car_field_shop_code",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "门店",
        objCode: "scdo_shop",
        required: true,
        targetObjCode: "scdo_shop",
        type: "LOOKUP",
        value: {
            displayValue: "13811099817",
            empty: false,
            values: [{
                empty: false,
                id: "04302535",
                name: "13811099817"
            }
            ]
        }
    }, {
        builtIn: false,
        code: "car_field_purchase_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "fxae00VqZ0_option_value_Luqy8jNt1Q",
            name: "收购"
        }, {
            code: "paimai",
            name: "拍卖"
        }, {
            code: "fxae00VqZ0_option_value_Or8aDqKEGT",
            name: "实车寄售"
        }, {
            code: "fxae00VqZ0_option_value_jiMN9mfBcE",
            name: "网络寄售"
        }, {
            code: "fxae00VqZ0_option_value_M8OahkNXNv",
            name: "合作"
        }, {
            code: "fxae00VqZ0_option_value_aTuUCbBaLE",
            name: "置换"
        }, {
            code: "60",
            name: "其他"
        }
        ],
        inputType: "check_box",
        name: "采购类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_sale_price",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "9999.99",
        minValue: "0",
        name: "网络标价",
        required: false,
        type: "CURRENCY",
        unit: "万元",
        value: {
            empty: true
        }
    }, {
        code: "car_field_assessor_name",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "评估师",
        objCode: "scdo_user",
        required: false,
        targetObjCode: "scdo_user",
        type: "LOOKUP"
    }, {
        builtIn: false,
        code: "car_field_first_license_plate_date",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "首次上牌",
        relativeTimeTags: [{
            code: "car_field_first_license_plate_date_time_IxwvxAkA9O",
            name: "今年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_CNaoxV1Wn9",
            name: "去年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_zKaglojioP",
            name: "近三年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_edMNv1qK6L",
            name: "近五年",
            type: "YEAR"
        }
        ],
        required: true,
        type: "DATETIME",
        value: {
            empty: true
        }
    }, {
        builtIn: false,
        code: "car_field_car_body",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "CS48KMJ4E7_option_value_g4qULCqs40",
            name: "客车"
        }, {
            code: "CS48KMJ4E7_option_value_6bQpOZPtxR",
            name: "货车"
        }, {
            code: "CS48KMJ4E7_option_value_kOg7h3aDJ8",
            name: "三厢车"
        }, {
            code: "CS48KMJ4E7_option_value_cXcFveWQVI",
            name: "两厢车"
        }, {
            code: "CS48KMJ4E7_option_value_Ju8unONdAK",
            name: "旅行车"
        }, {
            code: "CS48KMJ4E7_option_value_ggK2gTvRtV",
            name: "皮卡"
        }, {
            code: "CS48KMJ4E7_option_value_NFs1JTfIVX",
            name: "MPV"
        }, {
            code: "CS48KMJ4E7_option_value_q4OGfFJ36d",
            name: "SUV"
        }, {
            code: "CS48KMJ4E7_option_value_QPa0HFsLg2",
            name: "掀背车"
        }, {
            code: "CS48KMJ4E7_option_value_UDKkP78g36",
            name: "软顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_Qecbi3PnRg",
            name: "硬顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_PT4uWfris5",
            name: "硬顶跑车"
        }
        ],
        inputType: "check_box",
        name: "车身结构",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_gear_box_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "jHAReXtT38_option_value_NFQzb25m37",
            name: "手自一体"
        }, {
            code: "jHAReXtT38_option_value_7MOEGIeGvU",
            name: "自动变速箱"
        }, {
            code: "jHAReXtT38_option_value_YJMr62zpGc",
            name: "无极变速箱"
        }, {
            code: "jHAReXtT38_option_value_93ALzjBVj3",
            name: "双离合变速箱"
        }, {
            code: "jHAReXtT38_option_value_vbaKO1yUE7",
            name: "手动变速箱"
        }, {
            code: "jHAReXtT38_option_value_m0u6Avh7yc",
            name: "电子无极"
        }, {
            code: "jHAReXtT38_option_value_xUwzdOu9iK",
            name: "机械式自动"
        }, {
            code: "jHAReXtT38_option_value_aRaiOev6pw",
            name: "序列变速箱"
        }, {
            code: "jHAReXtT38_option_value_NzwH9LdXl3",
            name: "ISR变速箱"
        }, {
            code: "jHAReXtT38_option_value_HzOSjUUsXr",
            name: "固定齿比"
        }, {
            code: "12",
            name: "E-CVT+自动"
        }, {
            code: "13",
            name: "国际档"
        }
        ],
        inputType: "check_box",
        name: "变速箱类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        builtInType: "singleCarColour",
        code: "car_field_color",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "车身颜色",
        required: true,
        type: "BUILT_IN",
        value: {
            displayValue: "",
            empty: true,
            values: []
        }
    }, {
        builtIn: false,
        code: "car_field_mileage",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99.99",
        minValue: "-99.99",
        name: "表显里程",
        required: true,
        type: "NUMBER",
        unit: "万公里",
        value: {
            empty: true
        }
    }, {
        builtIn: false,
        code: "car_field_emission_standard",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "dFaWk1XCyl_option_value_E86JZJeywo",
            name: "国一"
        }, {
            code: "dFaWk1XCyl_option_value_DtsZnY7NhH",
            name: "国二"
        }, {
            code: "dFaWk1XCyl_option_value_WZaGKP5K3Y",
            name: "国三"
        }, {
            code: "dFaWk1XCyl_option_value_l8sf66FMKY",
            name: "国四"
        }, {
            code: "dFaWk1XCyl_option_value_eXcXmGJktV",
            name: "国五"
        }, {
            code: "dFaWk1XCyl_option_value_YG82uJ6KIo",
            name: "国六"
        }, {
            code: "dFaWk1XCyl_option_value_zn8YSKoIZK",
            name: "欧一"
        }, {
            code: "dFaWk1XCyl_option_value_86c7r7igJh",
            name: "欧二"
        }, {
            code: "dFaWk1XCyl_option_value_fa4w9pBdE3",
            name: "欧三"
        }, {
            code: "dFaWk1XCyl_option_value_KTsfgUe7b5",
            name: "欧四"
        }, {
            code: "dFaWk1XCyl_option_value_s7AZ68eWjQ",
            name: "欧五"
        }, {
            code: "dFaWk1XCyl_option_value_eq6xtCfWRE",
            name: "欧六"
        }
        ],
        inputType: "check_box",
        name: "排放标准",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_weidian_is_upshelf",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "0gqKEZFKYX_option_value_qWgJSVMPmN",
            name: "未上架"
        }, {
            code: "0gqKEZFKYX_option_value_ZWacFiWc1o",
            name: "已上架"
        }
        ],
        inputType: "check_box",
        name: "微店上架",
        required: false,
        type: "RADIO",
        value: {
            values: ["0gqKEZFKYX_option_value_qWgJSVMPmN"]
        },
        empty: false
    }, {
        builtIn: false,
        code: "car_field_operation_phase",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "5j4qm0tNbC_phase_node_dFM1uFKdmI",
            name: "在售"
        }, {
            code: "5j4qm0tNbC_phase_node_ucQvV02Z5v",
            name: "已预订"
        }, {
            code: "5j4qm0tNbC_phase_node_WZgTRtWjBz",
            name: "已售"
        }, {
            code: "5j4qm0tNbC_phase_node_GdOunSGEU1",
            name: "退库"
        }
        ],
        inputType: "check_box",
        name: "车辆状态",
        required: false,
        type: "RADIO",
        value: {
            empty: false,
            values: ["5j4qm0tNbC_phase_node_dFM1uFKdmI"]
        }
    }, {
        builtIn: false,
        code: "car_field_detection_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "wjc",
            name: "未检测"
        }, {
            code: "djc",
            name: "待检测"
        }, {
            code: "jcz",
            name: "检测中"
        }, {
            code: "jcwc",
            name: "检测完成"
        }, {
            code: "jcsb",
            name: "检测失败"
        }
        ],
        inputType: "check_box",
        name: "检测状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_source_car",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "TTCL",
            name: "寄售代销"
        }, {
            code: "XDFC",
            name: "自有库存"
        }, {
            code: "LMDX",
            name: "联盟代销"
        }
        ],
        inputType: "check_box",
        name: "车辆来源",
        required: false,
        type: "RADIO",
        value: {
            empty: false,
            values: ["XDFC"]
        }
    }
    ],
    keywords: "",
    pageNo: 1,
    pageSize: 20,
    sort: {
        chosen: true,
        fieldCode: "car_field_date_create",
        fieldName: "创建时间",
        isBuildIn: true,
        ruleName: "最近创建",
        sortType: "desc"
    }
};

//已售
const car_sold = {
    objCode: "car",
    viewCode: "car_sold",
    filters: [{
        builtIn: false,
        builtInType: "brandSeriesModel",
        code: "car_field_name",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "品牌车型",
        required: true,
        type: "BUILT_IN",
        value: {
            displayValue: "",
            empty: true,
            items: []
        }
    }, {
        code: "car_field_salesperson",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "销售员",
        objCode: "scdo_user",
        required: false,
        targetObjCode: "scdo_user",
        type: "LOOKUP"
    }, {
        builtIn: false,
        code: "car_field_purchase_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "fxae00VqZ0_option_value_Luqy8jNt1Q",
            name: "收购"
        }, {
            code: "paimai",
            name: "拍卖"
        }, {
            code: "fxae00VqZ0_option_value_Or8aDqKEGT",
            name: "实车寄售"
        }, {
            code: "fxae00VqZ0_option_value_jiMN9mfBcE",
            name: "网络寄售"
        }, {
            code: "fxae00VqZ0_option_value_M8OahkNXNv",
            name: "合作"
        }, {
            code: "fxae00VqZ0_option_value_aTuUCbBaLE",
            name: "置换"
        }, {
            code: "60",
            name: "其他"
        }
        ],
        inputType: "check_box",
        name: "采购类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_sale_price",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "9999.99",
        minValue: "0",
        name: "网络标价",
        required: false,
        type: "CURRENCY",
        unit: "万元",
        value: {
            empty: true
        }
    }, {
        code: "car_field_assessor_name",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "评估师",
        objCode: "scdo_user",
        required: false,
        targetObjCode: "scdo_user",
        type: "LOOKUP"
    }, {
        builtIn: false,
        code: "car_field_first_license_plate_date",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "首次上牌",
        relativeTimeTags: [{
            code: "car_field_first_license_plate_date_time_IxwvxAkA9O",
            name: "今年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_CNaoxV1Wn9",
            name: "去年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_zKaglojioP",
            name: "近三年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_edMNv1qK6L",
            name: "近五年",
            type: "YEAR"
        }
        ],
        required: true,
        type: "DATETIME",
        value: {
            empty: true
        }
    }, {
        code: "car_field_shop_code",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "门店",
        objCode: "scdo_shop",
        required: true,
        targetObjCode: "scdo_shop",
        type: "LOOKUP",
        value: {
            displayValue: "13811099817",
            empty: false,
            values: [{
                empty: false,
                id: "04302535",
                name: "13811099817"
            }
            ]
        }
    }, {
        builtIn: false,
        code: "car_field_car_body",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "CS48KMJ4E7_option_value_g4qULCqs40",
            name: "客车"
        }, {
            code: "CS48KMJ4E7_option_value_6bQpOZPtxR",
            name: "货车"
        }, {
            code: "CS48KMJ4E7_option_value_kOg7h3aDJ8",
            name: "三厢车"
        }, {
            code: "CS48KMJ4E7_option_value_cXcFveWQVI",
            name: "两厢车"
        }, {
            code: "CS48KMJ4E7_option_value_Ju8unONdAK",
            name: "旅行车"
        }, {
            code: "CS48KMJ4E7_option_value_ggK2gTvRtV",
            name: "皮卡"
        }, {
            code: "CS48KMJ4E7_option_value_NFs1JTfIVX",
            name: "MPV"
        }, {
            code: "CS48KMJ4E7_option_value_q4OGfFJ36d",
            name: "SUV"
        }, {
            code: "CS48KMJ4E7_option_value_QPa0HFsLg2",
            name: "掀背车"
        }, {
            code: "CS48KMJ4E7_option_value_UDKkP78g36",
            name: "软顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_Qecbi3PnRg",
            name: "硬顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_PT4uWfris5",
            name: "硬顶跑车"
        }
        ],
        inputType: "check_box",
        name: "车身结构",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_gear_box_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "jHAReXtT38_option_value_NFQzb25m37",
            name: "手自一体"
        }, {
            code: "jHAReXtT38_option_value_7MOEGIeGvU",
            name: "自动变速箱"
        }, {
            code: "jHAReXtT38_option_value_YJMr62zpGc",
            name: "无极变速箱"
        }, {
            code: "jHAReXtT38_option_value_93ALzjBVj3",
            name: "双离合变速箱"
        }, {
            code: "jHAReXtT38_option_value_vbaKO1yUE7",
            name: "手动变速箱"
        }, {
            code: "jHAReXtT38_option_value_m0u6Avh7yc",
            name: "电子无极"
        }, {
            code: "jHAReXtT38_option_value_xUwzdOu9iK",
            name: "机械式自动"
        }, {
            code: "jHAReXtT38_option_value_aRaiOev6pw",
            name: "序列变速箱"
        }, {
            code: "jHAReXtT38_option_value_NzwH9LdXl3",
            name: "ISR变速箱"
        }, {
            code: "jHAReXtT38_option_value_HzOSjUUsXr",
            name: "固定齿比"
        }, {
            code: "12",
            name: "E-CVT+自动"
        }, {
            code: "13",
            name: "国际档"
        }
        ],
        inputType: "check_box",
        name: "变速箱类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_weidian_is_upshelf",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "0gqKEZFKYX_option_value_qWgJSVMPmN",
            name: "未上架"
        }, {
            code: "0gqKEZFKYX_option_value_ZWacFiWc1o",
            name: "已上架"
        }
        ],
        inputType: "check_box",
        name: "微店上架",
        required: false,
        type: "RADIO",
        value: {
            values: []
        }
    }, {
        builtIn: false,
        builtInType: "singleCarColour",
        code: "car_field_color",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "车身颜色",
        required: true,
        type: "BUILT_IN",
        value: {
            displayValue: "",
            empty: true,
            values: []
        }
    }, {
        builtIn: false,
        code: "car_field_mileage",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99.99",
        minValue: "-99.99",
        name: "表显里程",
        required: true,
        type: "NUMBER",
        unit: "万公里",
        value: {
            empty: true
        }
    }, {
        builtIn: false,
        code: "car_field_emission_standard",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "dFaWk1XCyl_option_value_E86JZJeywo",
            name: "国一"
        }, {
            code: "dFaWk1XCyl_option_value_DtsZnY7NhH",
            name: "国二"
        }, {
            code: "dFaWk1XCyl_option_value_WZaGKP5K3Y",
            name: "国三"
        }, {
            code: "dFaWk1XCyl_option_value_l8sf66FMKY",
            name: "国四"
        }, {
            code: "dFaWk1XCyl_option_value_eXcXmGJktV",
            name: "国五"
        }, {
            code: "dFaWk1XCyl_option_value_YG82uJ6KIo",
            name: "国六"
        }, {
            code: "dFaWk1XCyl_option_value_zn8YSKoIZK",
            name: "欧一"
        }, {
            code: "dFaWk1XCyl_option_value_86c7r7igJh",
            name: "欧二"
        }, {
            code: "dFaWk1XCyl_option_value_fa4w9pBdE3",
            name: "欧三"
        }, {
            code: "dFaWk1XCyl_option_value_KTsfgUe7b5",
            name: "欧四"
        }, {
            code: "dFaWk1XCyl_option_value_s7AZ68eWjQ",
            name: "欧五"
        }, {
            code: "dFaWk1XCyl_option_value_eq6xtCfWRE",
            name: "欧六"
        }
        ],
        inputType: "check_box",
        name: "排放标准",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_operation_phase",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "5j4qm0tNbC_phase_node_dFM1uFKdmI",
            name: "在售"
        }, {
            code: "5j4qm0tNbC_phase_node_ucQvV02Z5v",
            name: "已预订"
        }, {
            code: "5j4qm0tNbC_phase_node_WZgTRtWjBz",
            name: "已售"
        }, {
            code: "5j4qm0tNbC_phase_node_GdOunSGEU1",
            name: "退库"
        }
        ],
        inputType: "check_box",
        name: "车辆状态",
        required: false,
        type: "RADIO",
        value: {
            empty: false,
            values: ["5j4qm0tNbC_phase_node_WZgTRtWjBz"]
        }
    }, {
        builtIn: false,
        code: "car_field_stock_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "siOa7lSClG_option_value_vZAtYULa31",
            name: "在途"
        }, {
            code: "siOa7lSClG_option_value_RqMLk4UCHS",
            name: "在厅"
        }, {
            code: "siOa7lSClG_option_value_zZQhWpTQKL",
            name: "整备"
        }, {
            code: "siOa7lSC",
            name: "初检"
        }, {
            code: "siOa7lSClG_option_value_NUa4062kJJ",
            name: "转场"
        }, {
            code: "siOa7lSClG_option_value_xp4KaUYCkH",
            name: "外借"
        }, {
            code: "waichu",
            name: "外出"
        }, {
            code: "yichuku",
            name: "已出库"
        }
        ],
        inputType: "check_box",
        name: "库存状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_car_age",
        decimalDigit: 0,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99999999",
        minValue: "0",
        name: "库龄",
        required: false,
        type: "NUMBER",
        unit: "天",
        value: {
            empty: true
        }
    }
    ],
    keywords: "",
    pageNo: 1,
    pageSize: 20,
    sort: {
        chosen: true,
        fieldCode: "car_field_pay_time",
        fieldName: "最近成交",
        isBuildIn: false,
        ruleName: "最近出售",
        sortType: "desc"
    }
};
//已预定
const car_booked = {
    objCode: "car",
    viewCode: "car_booked",
    filters: [{
        builtIn: false,
        builtInType: "brandSeriesModel",
        code: "car_field_name",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "品牌车型",
        required: true,
        type: "BUILT_IN",
        value: {displayValue: "", empty: true, items: []}
    }, {
        code: "car_field_salesperson",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "销售员",
        objCode: "scdo_user",
        required: false,
        targetObjCode: "scdo_user",
        type: "LOOKUP"
    }, {
        builtIn: false,
        code: "car_field_purchase_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{code: "fxae00VqZ0_option_value_Luqy8jNt1Q", name: "收购"}, {
            code: "paimai",
            name: "拍卖"
        }, {
            code: "fxae00VqZ0_option_value_Or8aDqKEGT",
            name: "实车寄售"
        }, {
            code: "fxae00VqZ0_option_value_jiMN9mfBcE",
            name: "网络寄售"
        }, {code: "fxae00VqZ0_option_value_M8OahkNXNv", name: "合作"}, {
            code: "fxae00VqZ0_option_value_aTuUCbBaLE",
            name: "置换"
        }, {code: "60", name: "其他"}],
        inputType: "check_box",
        name: "采购类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_stock_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "siOa7lSClG_option_value_vZAtYULa31",
            name: "在途"
        }, {code: "siOa7lSClG_option_value_RqMLk4UCHS", name: "在厅"}, {
            code: "siOa7lSClG_option_value_zZQhWpTQKL",
            name: "整备"
        }, {code: "siOa7lSC", name: "初检"}, {
            code: "siOa7lSClG_option_value_NUa4062kJJ",
            name: "转场"
        }, {code: "siOa7lSClG_option_value_xp4KaUYCkH", name: "外借"}, {
            code: "waichu",
            name: "外出"
        }, {code: "yichuku", name: "已出库"}],
        inputType: "check_box",
        name: "库存状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_sale_price",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "9999.99",
        minValue: "0",
        name: "网络标价",
        required: false,
        type: "CURRENCY",
        unit: "万元",
        value: {empty: true}
    }, {
        code: "car_field_assessor_name",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "评估师",
        objCode: "scdo_user",
        required: false,
        targetObjCode: "scdo_user",
        type: "LOOKUP"
    }, {
        builtIn: false,
        code: "car_field_first_license_plate_date",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "首次上牌",
        relativeTimeTags: [{
            code: "car_field_first_license_plate_date_time_IxwvxAkA9O",
            name: "今年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_CNaoxV1Wn9",
            name: "去年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_zKaglojioP",
            name: "近三年",
            type: "YEAR"
        }, {code: "car_field_first_license_plate_date_time_edMNv1qK6L", name: "近五年", type: "YEAR"}],
        required: true,
        type: "DATETIME",
        value: {empty: true}
    }, {
        code: "car_field_shop_code",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "门店",
        objCode: "scdo_shop",
        required: true,
        targetObjCode: "scdo_shop",
        type: "LOOKUP",
        value: {
            displayValue: "13811099817",
            empty: false,
            values: [{empty: false, id: "04302535", name: "13811099817"}]
        }
    }, {
        builtIn: false,
        code: "car_field_car_body",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "CS48KMJ4E7_option_value_g4qULCqs40",
            name: "客车"
        }, {code: "CS48KMJ4E7_option_value_6bQpOZPtxR", name: "货车"}, {
            code: "CS48KMJ4E7_option_value_kOg7h3aDJ8",
            name: "三厢车"
        }, {code: "CS48KMJ4E7_option_value_cXcFveWQVI", name: "两厢车"}, {
            code: "CS48KMJ4E7_option_value_Ju8unONdAK",
            name: "旅行车"
        }, {code: "CS48KMJ4E7_option_value_ggK2gTvRtV", name: "皮卡"}, {
            code: "CS48KMJ4E7_option_value_NFs1JTfIVX",
            name: "MPV"
        }, {code: "CS48KMJ4E7_option_value_q4OGfFJ36d", name: "SUV"}, {
            code: "CS48KMJ4E7_option_value_QPa0HFsLg2",
            name: "掀背车"
        }, {
            code: "CS48KMJ4E7_option_value_UDKkP78g36",
            name: "软顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_Qecbi3PnRg",
            name: "硬顶敞篷车"
        }, {code: "CS48KMJ4E7_option_value_PT4uWfris5", name: "硬顶跑车"}],
        inputType: "check_box",
        name: "车身结构",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_gear_box_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "jHAReXtT38_option_value_NFQzb25m37",
            name: "手自一体"
        }, {
            code: "jHAReXtT38_option_value_7MOEGIeGvU",
            name: "自动变速箱"
        }, {
            code: "jHAReXtT38_option_value_YJMr62zpGc",
            name: "无极变速箱"
        }, {
            code: "jHAReXtT38_option_value_93ALzjBVj3",
            name: "双离合变速箱"
        }, {
            code: "jHAReXtT38_option_value_vbaKO1yUE7",
            name: "手动变速箱"
        }, {
            code: "jHAReXtT38_option_value_m0u6Avh7yc",
            name: "电子无极"
        }, {
            code: "jHAReXtT38_option_value_xUwzdOu9iK",
            name: "机械式自动"
        }, {
            code: "jHAReXtT38_option_value_aRaiOev6pw",
            name: "序列变速箱"
        }, {
            code: "jHAReXtT38_option_value_NzwH9LdXl3",
            name: "ISR变速箱"
        }, {code: "jHAReXtT38_option_value_HzOSjUUsXr", name: "固定齿比"}, {
            code: "12",
            name: "E-CVT+自动"
        }, {code: "13", name: "国际档"}],
        inputType: "check_box",
        name: "变速箱类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_weidian_is_upshelf",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "0gqKEZFKYX_option_value_qWgJSVMPmN",
            name: "未上架"
        }, {code: "0gqKEZFKYX_option_value_ZWacFiWc1o", name: "已上架"}],
        inputType: "check_box",
        name: "微店上架",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        builtInType: "singleCarColour",
        code: "car_field_color",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "车身颜色",
        required: true,
        type: "BUILT_IN",
        value: {displayValue: "", empty: true, values: []}
    }, {
        builtIn: false,
        code: "car_field_mileage",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99.99",
        minValue: "-99.99",
        name: "表显里程",
        required: true,
        type: "NUMBER",
        unit: "万公里",
        value: {empty: true}
    }, {
        builtIn: false,
        code: "car_field_emission_standard",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "dFaWk1XCyl_option_value_E86JZJeywo",
            name: "国一"
        }, {code: "dFaWk1XCyl_option_value_DtsZnY7NhH", name: "国二"}, {
            code: "dFaWk1XCyl_option_value_WZaGKP5K3Y",
            name: "国三"
        }, {code: "dFaWk1XCyl_option_value_l8sf66FMKY", name: "国四"}, {
            code: "dFaWk1XCyl_option_value_eXcXmGJktV",
            name: "国五"
        }, {code: "dFaWk1XCyl_option_value_YG82uJ6KIo", name: "国六"}, {
            code: "dFaWk1XCyl_option_value_zn8YSKoIZK",
            name: "欧一"
        }, {code: "dFaWk1XCyl_option_value_86c7r7igJh", name: "欧二"}, {
            code: "dFaWk1XCyl_option_value_fa4w9pBdE3",
            name: "欧三"
        }, {code: "dFaWk1XCyl_option_value_KTsfgUe7b5", name: "欧四"}, {
            code: "dFaWk1XCyl_option_value_s7AZ68eWjQ",
            name: "欧五"
        }, {code: "dFaWk1XCyl_option_value_eq6xtCfWRE", name: "欧六"}],
        inputType: "check_box",
        name: "排放标准",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_operation_phase",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "5j4qm0tNbC_phase_node_dFM1uFKdmI",
            name: "在售"
        }, {code: "5j4qm0tNbC_phase_node_ucQvV02Z5v", name: "已预订"}, {
            code: "5j4qm0tNbC_phase_node_WZgTRtWjBz",
            name: "已售"
        }, {code: "5j4qm0tNbC_phase_node_GdOunSGEU1", name: "退库"}],
        inputType: "check_box",
        name: "车辆状态",
        required: false,
        type: "RADIO",
        value: {empty: false, values: ["5j4qm0tNbC_phase_node_ucQvV02Z5v"]}
    }, {
        builtIn: false,
        code: "car_field_car_age",
        decimalDigit: 0,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99999999",
        minValue: "0",
        name: "库龄",
        required: false,
        type: "NUMBER",
        unit: "天",
        value: {empty: true}
    }],
    keywords: "",
    pageNo: 1,
    pageSize: 20,
    sort: {
        chosen: true,
        fieldCode: "car_field_reserve_time",
        fieldName: "最近预定",
        isBuildIn: false,
        ruleName: "最新预定",
        sortType: "desc"
    }
};

//退库
const car_retreat_from_storage = {
    objCode: "car",
    viewCode: "car_retreat_from_storage",
    filters: [{
        builtIn: false,
        code: "car_field_stock_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "siOa7lSClG_option_value_vZAtYULa31",
            name: "在途"
        }, {code: "siOa7lSClG_option_value_RqMLk4UCHS", name: "在厅"}, {
            code: "siOa7lSClG_option_value_zZQhWpTQKL",
            name: "整备"
        }, {code: "siOa7lSC", name: "初检"}, {
            code: "siOa7lSClG_option_value_NUa4062kJJ",
            name: "转场"
        }, {code: "siOa7lSClG_option_value_xp4KaUYCkH", name: "外借"}, {
            code: "waichu",
            name: "外出"
        }, {code: "yichuku", name: "已出库"}],
        inputType: "check_box",
        name: "库存状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        builtInType: "brandSeriesModel",
        code: "car_field_name",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "品牌车型",
        required: true,
        type: "BUILT_IN",
        value: {displayValue: "", empty: true, items: []}
    }, {
        builtIn: false,
        code: "car_field_purchase_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{code: "fxae00VqZ0_option_value_Luqy8jNt1Q", name: "收购"}, {
            code: "paimai",
            name: "拍卖"
        }, {
            code: "fxae00VqZ0_option_value_Or8aDqKEGT",
            name: "实车寄售"
        }, {
            code: "fxae00VqZ0_option_value_jiMN9mfBcE",
            name: "网络寄售"
        }, {code: "fxae00VqZ0_option_value_M8OahkNXNv", name: "合作"}, {
            code: "fxae00VqZ0_option_value_aTuUCbBaLE",
            name: "置换"
        }, {code: "60", name: "其他"}],
        inputType: "check_box",
        name: "采购类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_sale_price",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "9999.99",
        minValue: "0",
        name: "网络标价",
        required: false,
        type: "CURRENCY",
        unit: "万元",
        value: {empty: true}
    }, {
        code: "car_field_assessor_name",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "评估师",
        objCode: "scdo_user",
        required: false,
        targetObjCode: "scdo_user",
        type: "LOOKUP"
    }, {
        builtIn: false,
        code: "car_field_first_license_plate_date",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "首次上牌",
        relativeTimeTags: [{
            code: "car_field_first_license_plate_date_time_IxwvxAkA9O",
            name: "今年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_CNaoxV1Wn9",
            name: "去年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_zKaglojioP",
            name: "近三年",
            type: "YEAR"
        }, {code: "car_field_first_license_plate_date_time_edMNv1qK6L", name: "近五年", type: "YEAR"}],
        required: true,
        type: "DATETIME",
        value: {empty: true}
    }, {
        code: "car_field_shop_code",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "门店",
        objCode: "scdo_shop",
        required: true,
        targetObjCode: "scdo_shop",
        type: "LOOKUP",
        value: {
            displayValue: "13811099817",
            empty: false,
            values: [{empty: false, id: "04302535", name: "13811099817"}]
        }
    }, {
        builtIn: false,
        code: "car_field_car_body",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "CS48KMJ4E7_option_value_g4qULCqs40",
            name: "客车"
        }, {code: "CS48KMJ4E7_option_value_6bQpOZPtxR", name: "货车"}, {
            code: "CS48KMJ4E7_option_value_kOg7h3aDJ8",
            name: "三厢车"
        }, {code: "CS48KMJ4E7_option_value_cXcFveWQVI", name: "两厢车"}, {
            code: "CS48KMJ4E7_option_value_Ju8unONdAK",
            name: "旅行车"
        }, {code: "CS48KMJ4E7_option_value_ggK2gTvRtV", name: "皮卡"}, {
            code: "CS48KMJ4E7_option_value_NFs1JTfIVX",
            name: "MPV"
        }, {code: "CS48KMJ4E7_option_value_q4OGfFJ36d", name: "SUV"}, {
            code: "CS48KMJ4E7_option_value_QPa0HFsLg2",
            name: "掀背车"
        }, {
            code: "CS48KMJ4E7_option_value_UDKkP78g36",
            name: "软顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_Qecbi3PnRg",
            name: "硬顶敞篷车"
        }, {code: "CS48KMJ4E7_option_value_PT4uWfris5", name: "硬顶跑车"}],
        inputType: "check_box",
        name: "车身结构",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_gear_box_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "jHAReXtT38_option_value_NFQzb25m37",
            name: "手自一体"
        }, {
            code: "jHAReXtT38_option_value_7MOEGIeGvU",
            name: "自动变速箱"
        }, {
            code: "jHAReXtT38_option_value_YJMr62zpGc",
            name: "无极变速箱"
        }, {
            code: "jHAReXtT38_option_value_93ALzjBVj3",
            name: "双离合变速箱"
        }, {
            code: "jHAReXtT38_option_value_vbaKO1yUE7",
            name: "手动变速箱"
        }, {
            code: "jHAReXtT38_option_value_m0u6Avh7yc",
            name: "电子无极"
        }, {
            code: "jHAReXtT38_option_value_xUwzdOu9iK",
            name: "机械式自动"
        }, {
            code: "jHAReXtT38_option_value_aRaiOev6pw",
            name: "序列变速箱"
        }, {
            code: "jHAReXtT38_option_value_NzwH9LdXl3",
            name: "ISR变速箱"
        }, {code: "jHAReXtT38_option_value_HzOSjUUsXr", name: "固定齿比"}, {
            code: "12",
            name: "E-CVT+自动"
        }, {code: "13", name: "国际档"}],
        inputType: "check_box",
        name: "变速箱类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_weidian_is_upshelf",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "0gqKEZFKYX_option_value_qWgJSVMPmN",
            name: "未上架"
        }, {code: "0gqKEZFKYX_option_value_ZWacFiWc1o", name: "已上架"}],
        inputType: "check_box",
        name: "微店上架",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        builtInType: "singleCarColour",
        code: "car_field_color",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "车身颜色",
        required: true,
        type: "BUILT_IN",
        value: {displayValue: "", empty: true, values: []}
    }, {
        builtIn: false,
        code: "car_field_mileage",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99.99",
        minValue: "-99.99",
        name: "表显里程",
        required: true,
        type: "NUMBER",
        unit: "万公里",
        value: {empty: true}
    }, {
        builtIn: false,
        code: "car_field_emission_standard",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "dFaWk1XCyl_option_value_E86JZJeywo",
            name: "国一"
        }, {code: "dFaWk1XCyl_option_value_DtsZnY7NhH", name: "国二"}, {
            code: "dFaWk1XCyl_option_value_WZaGKP5K3Y",
            name: "国三"
        }, {code: "dFaWk1XCyl_option_value_l8sf66FMKY", name: "国四"}, {
            code: "dFaWk1XCyl_option_value_eXcXmGJktV",
            name: "国五"
        }, {code: "dFaWk1XCyl_option_value_YG82uJ6KIo", name: "国六"}, {
            code: "dFaWk1XCyl_option_value_zn8YSKoIZK",
            name: "欧一"
        }, {code: "dFaWk1XCyl_option_value_86c7r7igJh", name: "欧二"}, {
            code: "dFaWk1XCyl_option_value_fa4w9pBdE3",
            name: "欧三"
        }, {code: "dFaWk1XCyl_option_value_KTsfgUe7b5", name: "欧四"}, {
            code: "dFaWk1XCyl_option_value_s7AZ68eWjQ",
            name: "欧五"
        }, {code: "dFaWk1XCyl_option_value_eq6xtCfWRE", name: "欧六"}],
        inputType: "check_box",
        name: "排放标准",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_operation_phase",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "5j4qm0tNbC_phase_node_dFM1uFKdmI",
            name: "在售"
        }, {code: "5j4qm0tNbC_phase_node_ucQvV02Z5v", name: "已预订"}, {
            code: "5j4qm0tNbC_phase_node_WZgTRtWjBz",
            name: "已售"
        }, {code: "5j4qm0tNbC_phase_node_GdOunSGEU1", name: "退库"}],
        inputType: "check_box",
        name: "车辆状态",
        required: false,
        type: "RADIO",
        value: {empty: false, values: ["5j4qm0tNbC_phase_node_GdOunSGEU1"]}
    }],
    keywords: "",
    pageNo: 1,
    pageSize: 20,
    sort: {
        chosen: true,
        fieldCode: "car_field_date_create",
        fieldName: "创建时间",
        isBuildIn: true,
        ruleName: "最近创建",
        sortType: "desc"
    }
};

//交强险30天内
const car_jiaoqiangxiandaoqi_30 = {
    objCode: "car",
    viewCode: "car_jiaoqiangxiandaoqi_30",
    filters: [{
        builtIn: false,
        builtInType: "brandSeriesModel",
        code: "car_field_name",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "品牌车型",
        required: true,
        type: "BUILT_IN",
        value: {displayValue: "", empty: true, items: []}
    }, {
        builtIn: false,
        code: "car_field_operation_phase",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "5j4qm0tNbC_phase_node_dFM1uFKdmI",
            name: "在售"
        }, {code: "5j4qm0tNbC_phase_node_ucQvV02Z5v", name: "已预订"}, {
            code: "5j4qm0tNbC_phase_node_WZgTRtWjBz",
            name: "已售"
        }, {code: "5j4qm0tNbC_phase_node_GdOunSGEU1", name: "退库"}],
        inputType: "check_box",
        name: "车辆状态",
        required: false,
        type: "RADIO",
        value: {empty: false, values: ["5j4qm0tNbC_phase_node_dFM1uFKdmI"]}
    }, {
        builtIn: false,
        code: "car_field_jiaoqiangdaoqiri",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "交强险到期",
        relativeTimeTags: [{
            code: "car_field_jiaoqiangdaoqiri_time_5EMf41Tom0",
            name: "已过期",
            type: "DAY"
        }, {
            code: "car_field_jiaoqiangdaoqiri_time_RbAHtceoZV",
            name: "7天内到期",
            type: "DAY"
        }, {
            code: "car_field_jiaoqiangdaoqiri_time_qqaK0aQ1eW",
            name: "15天内到期",
            type: "DAY"
        }, {code: "car_field_jiaoqiangdaoqiri_time_By6Zbwrocn", name: "30天内到期", type: "DAY"}],
        required: false,
        type: "DATETIME",
        value: {
            begin: "1669132800000",
            empty: false,
            end: "1671724799000",
            relativeTimeCode: "car_field_jiaoqiangdaoqiri_time_By6Zbwrocn"
        }
    }, {
        builtIn: false,
        code: "car_field_stock_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "siOa7lSClG_option_value_vZAtYULa31",
            name: "在途"
        }, {code: "siOa7lSClG_option_value_RqMLk4UCHS", name: "在厅"}, {
            code: "siOa7lSClG_option_value_zZQhWpTQKL",
            name: "整备"
        }, {code: "siOa7lSC", name: "初检"}, {
            code: "siOa7lSClG_option_value_NUa4062kJJ",
            name: "转场"
        }, {code: "siOa7lSClG_option_value_xp4KaUYCkH", name: "外借"}, {
            code: "waichu",
            name: "外出"
        }, {code: "yichuku", name: "已出库"}],
        inputType: "check_box",
        name: "库存状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_purchase_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{code: "fxae00VqZ0_option_value_Luqy8jNt1Q", name: "收购"}, {
            code: "paimai",
            name: "拍卖"
        }, {
            code: "fxae00VqZ0_option_value_Or8aDqKEGT",
            name: "实车寄售"
        }, {
            code: "fxae00VqZ0_option_value_jiMN9mfBcE",
            name: "网络寄售"
        }, {code: "fxae00VqZ0_option_value_M8OahkNXNv", name: "合作"}, {
            code: "fxae00VqZ0_option_value_aTuUCbBaLE",
            name: "置换"
        }, {code: "60", name: "其他"}],
        inputType: "check_box",
        name: "采购类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_sale_price",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "9999.99",
        minValue: "0",
        name: "网络标价",
        required: false,
        type: "CURRENCY",
        unit: "万元",
        value: {empty: true}
    }, {
        code: "car_field_assessor_name",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "评估师",
        objCode: "scdo_user",
        required: false,
        targetObjCode: "scdo_user",
        type: "LOOKUP"
    }, {
        builtIn: false,
        code: "car_field_first_license_plate_date",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "首次上牌",
        relativeTimeTags: [{
            code: "car_field_first_license_plate_date_time_IxwvxAkA9O",
            name: "今年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_CNaoxV1Wn9",
            name: "去年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_zKaglojioP",
            name: "近三年",
            type: "YEAR"
        }, {code: "car_field_first_license_plate_date_time_edMNv1qK6L", name: "近五年", type: "YEAR"}],
        required: true,
        type: "DATETIME",
        value: {empty: true}
    }, {
        code: "car_field_shop_code",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "门店",
        objCode: "scdo_shop",
        required: true,
        targetObjCode: "scdo_shop",
        type: "LOOKUP",
        value: {
            displayValue: "13811099817",
            empty: false,
            values: [{empty: false, id: "04302535", name: "13811099817"}]
        }
    }, {
        builtIn: false,
        code: "car_field_car_body",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "CS48KMJ4E7_option_value_g4qULCqs40",
            name: "客车"
        }, {code: "CS48KMJ4E7_option_value_6bQpOZPtxR", name: "货车"}, {
            code: "CS48KMJ4E7_option_value_kOg7h3aDJ8",
            name: "三厢车"
        }, {code: "CS48KMJ4E7_option_value_cXcFveWQVI", name: "两厢车"}, {
            code: "CS48KMJ4E7_option_value_Ju8unONdAK",
            name: "旅行车"
        }, {code: "CS48KMJ4E7_option_value_ggK2gTvRtV", name: "皮卡"}, {
            code: "CS48KMJ4E7_option_value_NFs1JTfIVX",
            name: "MPV"
        }, {code: "CS48KMJ4E7_option_value_q4OGfFJ36d", name: "SUV"}, {
            code: "CS48KMJ4E7_option_value_QPa0HFsLg2",
            name: "掀背车"
        }, {
            code: "CS48KMJ4E7_option_value_UDKkP78g36",
            name: "软顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_Qecbi3PnRg",
            name: "硬顶敞篷车"
        }, {code: "CS48KMJ4E7_option_value_PT4uWfris5", name: "硬顶跑车"}],
        inputType: "check_box",
        name: "车身结构",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_gear_box_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "jHAReXtT38_option_value_NFQzb25m37",
            name: "手自一体"
        }, {
            code: "jHAReXtT38_option_value_7MOEGIeGvU",
            name: "自动变速箱"
        }, {
            code: "jHAReXtT38_option_value_YJMr62zpGc",
            name: "无极变速箱"
        }, {
            code: "jHAReXtT38_option_value_93ALzjBVj3",
            name: "双离合变速箱"
        }, {
            code: "jHAReXtT38_option_value_vbaKO1yUE7",
            name: "手动变速箱"
        }, {
            code: "jHAReXtT38_option_value_m0u6Avh7yc",
            name: "电子无极"
        }, {
            code: "jHAReXtT38_option_value_xUwzdOu9iK",
            name: "机械式自动"
        }, {
            code: "jHAReXtT38_option_value_aRaiOev6pw",
            name: "序列变速箱"
        }, {
            code: "jHAReXtT38_option_value_NzwH9LdXl3",
            name: "ISR变速箱"
        }, {code: "jHAReXtT38_option_value_HzOSjUUsXr", name: "固定齿比"}, {
            code: "12",
            name: "E-CVT+自动"
        }, {code: "13", name: "国际档"}],
        inputType: "check_box",
        name: "变速箱类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_weidian_is_upshelf",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "0gqKEZFKYX_option_value_qWgJSVMPmN",
            name: "未上架"
        }, {code: "0gqKEZFKYX_option_value_ZWacFiWc1o", name: "已上架"}],
        inputType: "check_box",
        name: "微店上架",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        builtInType: "singleCarColour",
        code: "car_field_color",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "车身颜色",
        required: true,
        type: "BUILT_IN",
        value: {displayValue: "", empty: true, values: []}
    }, {
        builtIn: false,
        code: "car_field_mileage",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99.99",
        minValue: "-99.99",
        name: "表显里程",
        required: true,
        type: "NUMBER",
        unit: "万公里",
        value: {empty: true}
    }, {
        builtIn: false,
        code: "car_field_emission_standard",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "dFaWk1XCyl_option_value_E86JZJeywo",
            name: "国一"
        }, {code: "dFaWk1XCyl_option_value_DtsZnY7NhH", name: "国二"}, {
            code: "dFaWk1XCyl_option_value_WZaGKP5K3Y",
            name: "国三"
        }, {code: "dFaWk1XCyl_option_value_l8sf66FMKY", name: "国四"}, {
            code: "dFaWk1XCyl_option_value_eXcXmGJktV",
            name: "国五"
        }, {code: "dFaWk1XCyl_option_value_YG82uJ6KIo", name: "国六"}, {
            code: "dFaWk1XCyl_option_value_zn8YSKoIZK",
            name: "欧一"
        }, {code: "dFaWk1XCyl_option_value_86c7r7igJh", name: "欧二"}, {
            code: "dFaWk1XCyl_option_value_fa4w9pBdE3",
            name: "欧三"
        }, {code: "dFaWk1XCyl_option_value_KTsfgUe7b5", name: "欧四"}, {
            code: "dFaWk1XCyl_option_value_s7AZ68eWjQ",
            name: "欧五"
        }, {code: "dFaWk1XCyl_option_value_eq6xtCfWRE", name: "欧六"}],
        inputType: "check_box",
        name: "排放标准",
        required: false,
        type: "RADIO"
    }],
    keywords: "",
    pageNo: 1,
    pageSize: 20,
    sort: {
        chosen: true,
        fieldCode: "car_field_jiaoqiangdaoqiri",
        fieldName: "交强险到期",
        isBuildIn: false,
        ruleName: "最快到期",
        sortType: "asc"
    }
};

//商业险到期30天内
const car_shangyexiandaoqi_30 = {
    objCode: "car",
    viewCode: "car_shangyexiandaoqi_30",
    filters: [{
        builtIn: false,
        builtInType: "brandSeriesModel",
        code: "car_field_name",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "品牌车型",
        required: true,
        type: "BUILT_IN",
        value: {displayValue: "", empty: true, items: []}
    }, {
        builtIn: false,
        code: "car_field_operation_phase",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "5j4qm0tNbC_phase_node_dFM1uFKdmI",
            name: "在售"
        }, {code: "5j4qm0tNbC_phase_node_ucQvV02Z5v", name: "已预订"}, {
            code: "5j4qm0tNbC_phase_node_WZgTRtWjBz",
            name: "已售"
        }, {code: "5j4qm0tNbC_phase_node_GdOunSGEU1", name: "退库"}],
        inputType: "check_box",
        name: "车辆状态",
        required: false,
        type: "RADIO",
        value: {empty: false, values: ["5j4qm0tNbC_phase_node_dFM1uFKdmI"]}
    }, {
        builtIn: false,
        code: "car_field_xiancheshangyexiandaoqiri",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "商业险到期",
        relativeTimeTags: [{
            code: "car_field_xiancheshangyexiandaoqiri_time_k3QPhexEpo",
            name: "已到期",
            type: "DAY"
        }, {
            code: "car_field_xiancheshangyexiandaoqiri_time_PheGlMV3ND",
            name: "7天内到期",
            type: "DAY"
        }, {
            code: "car_field_xiancheshangyexiandaoqiri_time_WpaySL3o1e",
            name: "15天内到期",
            type: "DAY"
        }, {code: "car_field_xiancheshangyexiandaoqiri_time_nHwLdp51cn", name: "30天内到期", type: "DAY"}],
        required: false,
        type: "DATETIME",
        value: {
            begin: "1669132800000",
            empty: false,
            end: "1671724799000",
            relativeTimeCode: "car_field_xiancheshangyexiandaoqiri_time_nHwLdp51cn"
        }
    }, {
        builtIn: false,
        code: "car_field_stock_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "siOa7lSClG_option_value_vZAtYULa31",
            name: "在途"
        }, {code: "siOa7lSClG_option_value_RqMLk4UCHS", name: "在厅"}, {
            code: "siOa7lSClG_option_value_zZQhWpTQKL",
            name: "整备"
        }, {code: "siOa7lSC", name: "初检"}, {
            code: "siOa7lSClG_option_value_NUa4062kJJ",
            name: "转场"
        }, {code: "siOa7lSClG_option_value_xp4KaUYCkH", name: "外借"}, {
            code: "waichu",
            name: "外出"
        }, {code: "yichuku", name: "已出库"}],
        inputType: "check_box",
        name: "库存状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_purchase_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{code: "fxae00VqZ0_option_value_Luqy8jNt1Q", name: "收购"}, {
            code: "paimai",
            name: "拍卖"
        }, {
            code: "fxae00VqZ0_option_value_Or8aDqKEGT",
            name: "实车寄售"
        }, {
            code: "fxae00VqZ0_option_value_jiMN9mfBcE",
            name: "网络寄售"
        }, {code: "fxae00VqZ0_option_value_M8OahkNXNv", name: "合作"}, {
            code: "fxae00VqZ0_option_value_aTuUCbBaLE",
            name: "置换"
        }, {code: "60", name: "其他"}],
        inputType: "check_box",
        name: "采购类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_sale_price",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "9999.99",
        minValue: "0",
        name: "网络标价",
        required: false,
        type: "CURRENCY",
        unit: "万元",
        value: {empty: true}
    }, {
        code: "car_field_assessor_name",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "评估师",
        objCode: "scdo_user",
        required: false,
        targetObjCode: "scdo_user",
        type: "LOOKUP"
    }, {
        builtIn: false,
        code: "car_field_first_license_plate_date",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "首次上牌",
        relativeTimeTags: [{
            code: "car_field_first_license_plate_date_time_IxwvxAkA9O",
            name: "今年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_CNaoxV1Wn9",
            name: "去年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_zKaglojioP",
            name: "近三年",
            type: "YEAR"
        }, {code: "car_field_first_license_plate_date_time_edMNv1qK6L", name: "近五年", type: "YEAR"}],
        required: true,
        type: "DATETIME",
        value: {empty: true}
    }, {
        code: "car_field_shop_code",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "门店",
        objCode: "scdo_shop",
        required: true,
        targetObjCode: "scdo_shop",
        type: "LOOKUP",
        value: {
            displayValue: "13811099817",
            empty: false,
            values: [{empty: false, id: "04302535", name: "13811099817"}]
        }
    }, {
        builtIn: false,
        code: "car_field_car_body",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "CS48KMJ4E7_option_value_g4qULCqs40",
            name: "客车"
        }, {code: "CS48KMJ4E7_option_value_6bQpOZPtxR", name: "货车"}, {
            code: "CS48KMJ4E7_option_value_kOg7h3aDJ8",
            name: "三厢车"
        }, {code: "CS48KMJ4E7_option_value_cXcFveWQVI", name: "两厢车"}, {
            code: "CS48KMJ4E7_option_value_Ju8unONdAK",
            name: "旅行车"
        }, {code: "CS48KMJ4E7_option_value_ggK2gTvRtV", name: "皮卡"}, {
            code: "CS48KMJ4E7_option_value_NFs1JTfIVX",
            name: "MPV"
        }, {code: "CS48KMJ4E7_option_value_q4OGfFJ36d", name: "SUV"}, {
            code: "CS48KMJ4E7_option_value_QPa0HFsLg2",
            name: "掀背车"
        }, {
            code: "CS48KMJ4E7_option_value_UDKkP78g36",
            name: "软顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_Qecbi3PnRg",
            name: "硬顶敞篷车"
        }, {code: "CS48KMJ4E7_option_value_PT4uWfris5", name: "硬顶跑车"}],
        inputType: "check_box",
        name: "车身结构",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_gear_box_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "jHAReXtT38_option_value_NFQzb25m37",
            name: "手自一体"
        }, {
            code: "jHAReXtT38_option_value_7MOEGIeGvU",
            name: "自动变速箱"
        }, {
            code: "jHAReXtT38_option_value_YJMr62zpGc",
            name: "无极变速箱"
        }, {
            code: "jHAReXtT38_option_value_93ALzjBVj3",
            name: "双离合变速箱"
        }, {
            code: "jHAReXtT38_option_value_vbaKO1yUE7",
            name: "手动变速箱"
        }, {
            code: "jHAReXtT38_option_value_m0u6Avh7yc",
            name: "电子无极"
        }, {
            code: "jHAReXtT38_option_value_xUwzdOu9iK",
            name: "机械式自动"
        }, {
            code: "jHAReXtT38_option_value_aRaiOev6pw",
            name: "序列变速箱"
        }, {
            code: "jHAReXtT38_option_value_NzwH9LdXl3",
            name: "ISR变速箱"
        }, {code: "jHAReXtT38_option_value_HzOSjUUsXr", name: "固定齿比"}, {
            code: "12",
            name: "E-CVT+自动"
        }, {code: "13", name: "国际档"}],
        inputType: "check_box",
        name: "变速箱类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_weidian_is_upshelf",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "0gqKEZFKYX_option_value_qWgJSVMPmN",
            name: "未上架"
        }, {code: "0gqKEZFKYX_option_value_ZWacFiWc1o", name: "已上架"}],
        inputType: "check_box",
        name: "微店上架",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        builtInType: "singleCarColour",
        code: "car_field_color",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "车身颜色",
        required: true,
        type: "BUILT_IN",
        value: {displayValue: "", empty: true, values: []}
    }, {
        builtIn: false,
        code: "car_field_mileage",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99.99",
        minValue: "-99.99",
        name: "表显里程",
        required: true,
        type: "NUMBER",
        unit: "万公里",
        value: {empty: true}
    }, {
        builtIn: false,
        code: "car_field_emission_standard",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "dFaWk1XCyl_option_value_E86JZJeywo",
            name: "国一"
        }, {code: "dFaWk1XCyl_option_value_DtsZnY7NhH", name: "国二"}, {
            code: "dFaWk1XCyl_option_value_WZaGKP5K3Y",
            name: "国三"
        }, {code: "dFaWk1XCyl_option_value_l8sf66FMKY", name: "国四"}, {
            code: "dFaWk1XCyl_option_value_eXcXmGJktV",
            name: "国五"
        }, {code: "dFaWk1XCyl_option_value_YG82uJ6KIo", name: "国六"}, {
            code: "dFaWk1XCyl_option_value_zn8YSKoIZK",
            name: "欧一"
        }, {code: "dFaWk1XCyl_option_value_86c7r7igJh", name: "欧二"}, {
            code: "dFaWk1XCyl_option_value_fa4w9pBdE3",
            name: "欧三"
        }, {code: "dFaWk1XCyl_option_value_KTsfgUe7b5", name: "欧四"}, {
            code: "dFaWk1XCyl_option_value_s7AZ68eWjQ",
            name: "欧五"
        }, {code: "dFaWk1XCyl_option_value_eq6xtCfWRE", name: "欧六"}],
        inputType: "check_box",
        name: "排放标准",
        required: false,
        type: "RADIO"
    }],
    keywords: "",
    pageNo: 1,
    pageSize: 20,
    sort: {
        chosen: true,
        fieldCode: "car_field_xiancheshangyexiandaoqiri",
        fieldName: "商业险到期",
        isBuildIn: false,
        ruleName: "最快到期",
        sortType: "asc"
    }
};

//年检到期30天内
const car_car_nianjiandaoqi_30 = {
    objCode: "car",
    viewCode: "car_car_nianjiandaoqi_30",
    filters: [{
        builtIn: false,
        builtInType: "brandSeriesModel",
        code: "car_field_name",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "品牌车型",
        required: true,
        type: "BUILT_IN",
        value: {displayValue: "", empty: true, items: []}
    }, {
        builtIn: false,
        code: "car_field_operation_phase",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "5j4qm0tNbC_phase_node_dFM1uFKdmI",
            name: "在售"
        }, {code: "5j4qm0tNbC_phase_node_ucQvV02Z5v", name: "已预订"}, {
            code: "5j4qm0tNbC_phase_node_WZgTRtWjBz",
            name: "已售"
        }, {code: "5j4qm0tNbC_phase_node_GdOunSGEU1", name: "退库"}],
        inputType: "check_box",
        name: "车辆状态",
        required: false,
        type: "RADIO",
        value: {empty: false, values: ["5j4qm0tNbC_phase_node_dFM1uFKdmI"]}
    }, {
        builtIn: false,
        code: "car_field_annual_expires_date",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "年检到期日",
        relativeTimeTags: [{
            code: "car_field_annual_expires_date_time_BZsBhNl3NZ",
            name: "30天内到期",
            type: "DAY"
        }, {
            code: "car_field_annual_expires_date_time_xv4wFxv9rL",
            name: "下个月到期",
            type: "MONTH"
        }, {
            code: "car_field_annual_expires_date_time_7ZuwgB3XaK",
            name: "15天内到期",
            type: "DAY"
        }, {
            code: "car_field_annual_expires_date_time_e4KuAl666s",
            name: "7天内到期",
            type: "DAY"
        }, {code: "car_field_annual_expires_date_time_McKKQik7wI", name: "已过期", type: "DAY"}],
        required: false,
        type: "DATETIME",
        value: {
            begin: "1669132800000",
            empty: false,
            end: "1671724799000",
            relativeTimeCode: "car_field_annual_expires_date_time_BZsBhNl3NZ"
        }
    }, {
        builtIn: false,
        code: "car_field_stock_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "siOa7lSClG_option_value_vZAtYULa31",
            name: "在途"
        }, {code: "siOa7lSClG_option_value_RqMLk4UCHS", name: "在厅"}, {
            code: "siOa7lSClG_option_value_zZQhWpTQKL",
            name: "整备"
        }, {code: "siOa7lSC", name: "初检"}, {
            code: "siOa7lSClG_option_value_NUa4062kJJ",
            name: "转场"
        }, {code: "siOa7lSClG_option_value_xp4KaUYCkH", name: "外借"}, {
            code: "waichu",
            name: "外出"
        }, {code: "yichuku", name: "已出库"}],
        inputType: "check_box",
        name: "库存状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_purchase_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{code: "fxae00VqZ0_option_value_Luqy8jNt1Q", name: "收购"}, {
            code: "paimai",
            name: "拍卖"
        }, {
            code: "fxae00VqZ0_option_value_Or8aDqKEGT",
            name: "实车寄售"
        }, {
            code: "fxae00VqZ0_option_value_jiMN9mfBcE",
            name: "网络寄售"
        }, {code: "fxae00VqZ0_option_value_M8OahkNXNv", name: "合作"}, {
            code: "fxae00VqZ0_option_value_aTuUCbBaLE",
            name: "置换"
        }, {code: "60", name: "其他"}],
        inputType: "check_box",
        name: "采购类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_sale_price",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "9999.99",
        minValue: "0",
        name: "网络标价",
        required: false,
        type: "CURRENCY",
        unit: "万元",
        value: {empty: true}
    }, {
        code: "car_field_assessor_name",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "评估师",
        objCode: "scdo_user",
        required: false,
        targetObjCode: "scdo_user",
        type: "LOOKUP"
    }, {
        builtIn: false,
        code: "car_field_first_license_plate_date",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "首次上牌",
        relativeTimeTags: [{
            code: "car_field_first_license_plate_date_time_IxwvxAkA9O",
            name: "今年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_CNaoxV1Wn9",
            name: "去年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_zKaglojioP",
            name: "近三年",
            type: "YEAR"
        }, {code: "car_field_first_license_plate_date_time_edMNv1qK6L", name: "近五年", type: "YEAR"}],
        required: true,
        type: "DATETIME",
        value: {empty: true}
    }, {
        code: "car_field_shop_code",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "门店",
        objCode: "scdo_shop",
        required: true,
        targetObjCode: "scdo_shop",
        type: "LOOKUP",
        value: {
            displayValue: "13811099817",
            empty: false,
            values: [{empty: false, id: "04302535", name: "13811099817"}]
        }
    }, {
        builtIn: false,
        code: "car_field_car_body",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "CS48KMJ4E7_option_value_g4qULCqs40",
            name: "客车"
        }, {code: "CS48KMJ4E7_option_value_6bQpOZPtxR", name: "货车"}, {
            code: "CS48KMJ4E7_option_value_kOg7h3aDJ8",
            name: "三厢车"
        }, {code: "CS48KMJ4E7_option_value_cXcFveWQVI", name: "两厢车"}, {
            code: "CS48KMJ4E7_option_value_Ju8unONdAK",
            name: "旅行车"
        }, {code: "CS48KMJ4E7_option_value_ggK2gTvRtV", name: "皮卡"}, {
            code: "CS48KMJ4E7_option_value_NFs1JTfIVX",
            name: "MPV"
        }, {code: "CS48KMJ4E7_option_value_q4OGfFJ36d", name: "SUV"}, {
            code: "CS48KMJ4E7_option_value_QPa0HFsLg2",
            name: "掀背车"
        }, {
            code: "CS48KMJ4E7_option_value_UDKkP78g36",
            name: "软顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_Qecbi3PnRg",
            name: "硬顶敞篷车"
        }, {code: "CS48KMJ4E7_option_value_PT4uWfris5", name: "硬顶跑车"}],
        inputType: "check_box",
        name: "车身结构",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_gear_box_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "jHAReXtT38_option_value_NFQzb25m37",
            name: "手自一体"
        }, {
            code: "jHAReXtT38_option_value_7MOEGIeGvU",
            name: "自动变速箱"
        }, {
            code: "jHAReXtT38_option_value_YJMr62zpGc",
            name: "无极变速箱"
        }, {
            code: "jHAReXtT38_option_value_93ALzjBVj3",
            name: "双离合变速箱"
        }, {
            code: "jHAReXtT38_option_value_vbaKO1yUE7",
            name: "手动变速箱"
        }, {
            code: "jHAReXtT38_option_value_m0u6Avh7yc",
            name: "电子无极"
        }, {
            code: "jHAReXtT38_option_value_xUwzdOu9iK",
            name: "机械式自动"
        }, {
            code: "jHAReXtT38_option_value_aRaiOev6pw",
            name: "序列变速箱"
        }, {
            code: "jHAReXtT38_option_value_NzwH9LdXl3",
            name: "ISR变速箱"
        }, {code: "jHAReXtT38_option_value_HzOSjUUsXr", name: "固定齿比"}, {
            code: "12",
            name: "E-CVT+自动"
        }, {code: "13", name: "国际档"}],
        inputType: "check_box",
        name: "变速箱类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_weidian_is_upshelf",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "0gqKEZFKYX_option_value_qWgJSVMPmN",
            name: "未上架"
        }, {code: "0gqKEZFKYX_option_value_ZWacFiWc1o", name: "已上架"}],
        inputType: "check_box",
        name: "微店上架",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        builtInType: "singleCarColour",
        code: "car_field_color",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "车身颜色",
        required: true,
        type: "BUILT_IN",
        value: {displayValue: "", empty: true, values: []}
    }, {
        builtIn: false,
        code: "car_field_mileage",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99.99",
        minValue: "-99.99",
        name: "表显里程",
        required: true,
        type: "NUMBER",
        unit: "万公里",
        value: {empty: true}
    }, {
        builtIn: false,
        code: "car_field_emission_standard",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "dFaWk1XCyl_option_value_E86JZJeywo",
            name: "国一"
        }, {code: "dFaWk1XCyl_option_value_DtsZnY7NhH", name: "国二"}, {
            code: "dFaWk1XCyl_option_value_WZaGKP5K3Y",
            name: "国三"
        }, {code: "dFaWk1XCyl_option_value_l8sf66FMKY", name: "国四"}, {
            code: "dFaWk1XCyl_option_value_eXcXmGJktV",
            name: "国五"
        }, {code: "dFaWk1XCyl_option_value_YG82uJ6KIo", name: "国六"}, {
            code: "dFaWk1XCyl_option_value_zn8YSKoIZK",
            name: "欧一"
        }, {code: "dFaWk1XCyl_option_value_86c7r7igJh", name: "欧二"}, {
            code: "dFaWk1XCyl_option_value_fa4w9pBdE3",
            name: "欧三"
        }, {code: "dFaWk1XCyl_option_value_KTsfgUe7b5", name: "欧四"}, {
            code: "dFaWk1XCyl_option_value_s7AZ68eWjQ",
            name: "欧五"
        }, {code: "dFaWk1XCyl_option_value_eq6xtCfWRE", name: "欧六"}],
        inputType: "check_box",
        name: "排放标准",
        required: false,
        type: "RADIO"
    }],
    keywords: "",
    pageNo: 1,
    pageSize: 20,
    sort: {
        chosen: true,
        fieldCode: "car_field_jiaoqiangdaoqiri",
        fieldName: "交强险到期",
        isBuildIn: false,
        ruleName: "最快到期",
        sortType: "asc"
    }
};

//联盟代销
const car_LMDX = {
    objCode: "car",
    viewCode: "car_LMDX",
    filters: [{
        builtIn: false,
        code: "car_field_from_shop",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{code: "wu", name: "无"}],
        inputType: "check_box",
        name: "车辆所属门店",
        required: false,
        type: "CHECK_BOX"
    }, {
        builtIn: false,
        builtInType: "brandSeriesModel",
        code: "car_field_name",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "品牌车型",
        required: true,
        type: "BUILT_IN",
        value: {displayValue: "", empty: true, items: []}
    }, {
        builtIn: false,
        code: "car_field_weidian_is_upshelf",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "0gqKEZFKYX_option_value_qWgJSVMPmN",
            name: "未上架"
        }, {code: "0gqKEZFKYX_option_value_ZWacFiWc1o", name: "已上架"}],
        inputType: "check_box",
        name: "微店上架",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_purchase_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{code: "fxae00VqZ0_option_value_Luqy8jNt1Q", name: "收购"}, {
            code: "paimai",
            name: "拍卖"
        }, {
            code: "fxae00VqZ0_option_value_Or8aDqKEGT",
            name: "实车寄售"
        }, {
            code: "fxae00VqZ0_option_value_jiMN9mfBcE",
            name: "网络寄售"
        }, {code: "fxae00VqZ0_option_value_M8OahkNXNv", name: "合作"}, {
            code: "fxae00VqZ0_option_value_aTuUCbBaLE",
            name: "置换"
        }, {code: "60", name: "其他"}],
        inputType: "check_box",
        name: "采购类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_stock_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "siOa7lSClG_option_value_vZAtYULa31",
            name: "在途"
        }, {code: "siOa7lSClG_option_value_RqMLk4UCHS", name: "在厅"}, {
            code: "siOa7lSClG_option_value_zZQhWpTQKL",
            name: "整备"
        }, {code: "siOa7lSC", name: "初检"}, {
            code: "siOa7lSClG_option_value_NUa4062kJJ",
            name: "转场"
        }, {code: "siOa7lSClG_option_value_xp4KaUYCkH", name: "外借"}, {
            code: "waichu",
            name: "外出"
        }, {code: "yichuku", name: "已出库"}],
        inputType: "check_box",
        name: "库存状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_sale_price",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "9999.99",
        minValue: "0",
        name: "网络标价",
        required: false,
        type: "CURRENCY",
        unit: "万元",
        value: {empty: true}
    }, {
        code: "car_field_assessor_name",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "评估师",
        objCode: "scdo_user",
        required: false,
        targetObjCode: "scdo_user",
        type: "LOOKUP"
    }, {
        builtIn: false,
        code: "car_field_first_license_plate_date",
        display: true,
        displayType: "date",
        editable: true,
        inputType: "range_input_box",
        name: "首次上牌",
        relativeTimeTags: [{
            code: "car_field_first_license_plate_date_time_IxwvxAkA9O",
            name: "今年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_CNaoxV1Wn9",
            name: "去年",
            type: "YEAR"
        }, {
            code: "car_field_first_license_plate_date_time_zKaglojioP",
            name: "近三年",
            type: "YEAR"
        }, {code: "car_field_first_license_plate_date_time_edMNv1qK6L", name: "近五年", type: "YEAR"}],
        required: true,
        type: "DATETIME",
        value: {empty: true}
    }, {
        code: "car_field_shop_code",
        display: true,
        displayType: "page",
        editable: true,
        inputType: "check_box",
        name: "门店",
        objCode: "scdo_shop",
        required: true,
        targetObjCode: "scdo_shop",
        type: "LOOKUP",
        value: {
            displayValue: "13811099817",
            empty: false,
            values: [{empty: false, id: "04302535", name: "13811099817"}]
        }
    }, {
        builtIn: false,
        code: "car_field_car_body",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "CS48KMJ4E7_option_value_g4qULCqs40",
            name: "客车"
        }, {code: "CS48KMJ4E7_option_value_6bQpOZPtxR", name: "货车"}, {
            code: "CS48KMJ4E7_option_value_kOg7h3aDJ8",
            name: "三厢车"
        }, {code: "CS48KMJ4E7_option_value_cXcFveWQVI", name: "两厢车"}, {
            code: "CS48KMJ4E7_option_value_Ju8unONdAK",
            name: "旅行车"
        }, {code: "CS48KMJ4E7_option_value_ggK2gTvRtV", name: "皮卡"}, {
            code: "CS48KMJ4E7_option_value_NFs1JTfIVX",
            name: "MPV"
        }, {code: "CS48KMJ4E7_option_value_q4OGfFJ36d", name: "SUV"}, {
            code: "CS48KMJ4E7_option_value_QPa0HFsLg2",
            name: "掀背车"
        }, {
            code: "CS48KMJ4E7_option_value_UDKkP78g36",
            name: "软顶敞篷车"
        }, {
            code: "CS48KMJ4E7_option_value_Qecbi3PnRg",
            name: "硬顶敞篷车"
        }, {code: "CS48KMJ4E7_option_value_PT4uWfris5", name: "硬顶跑车"}],
        inputType: "check_box",
        name: "车身结构",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_gear_box_type",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "jHAReXtT38_option_value_NFQzb25m37",
            name: "手自一体"
        }, {
            code: "jHAReXtT38_option_value_7MOEGIeGvU",
            name: "自动变速箱"
        }, {
            code: "jHAReXtT38_option_value_YJMr62zpGc",
            name: "无极变速箱"
        }, {
            code: "jHAReXtT38_option_value_93ALzjBVj3",
            name: "双离合变速箱"
        }, {
            code: "jHAReXtT38_option_value_vbaKO1yUE7",
            name: "手动变速箱"
        }, {
            code: "jHAReXtT38_option_value_m0u6Avh7yc",
            name: "电子无极"
        }, {
            code: "jHAReXtT38_option_value_xUwzdOu9iK",
            name: "机械式自动"
        }, {
            code: "jHAReXtT38_option_value_aRaiOev6pw",
            name: "序列变速箱"
        }, {
            code: "jHAReXtT38_option_value_NzwH9LdXl3",
            name: "ISR变速箱"
        }, {code: "jHAReXtT38_option_value_HzOSjUUsXr", name: "固定齿比"}, {
            code: "12",
            name: "E-CVT+自动"
        }, {code: "13", name: "国际档"}],
        inputType: "check_box",
        name: "变速箱类型",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        builtInType: "singleCarColour",
        code: "car_field_color",
        display: true,
        displayType: "default",
        editable: true,
        inputType: "check_box",
        name: "车身颜色",
        required: true,
        type: "BUILT_IN",
        value: {displayValue: "", empty: true, values: []}
    }, {
        builtIn: false,
        code: "car_field_mileage",
        decimalDigit: 2,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99.99",
        minValue: "-99.99",
        name: "表显里程",
        required: true,
        type: "NUMBER",
        unit: "万公里",
        value: {empty: true}
    }, {
        builtIn: false,
        code: "car_field_emission_standard",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "dFaWk1XCyl_option_value_E86JZJeywo",
            name: "国一"
        }, {code: "dFaWk1XCyl_option_value_DtsZnY7NhH", name: "国二"}, {
            code: "dFaWk1XCyl_option_value_WZaGKP5K3Y",
            name: "国三"
        }, {code: "dFaWk1XCyl_option_value_l8sf66FMKY", name: "国四"}, {
            code: "dFaWk1XCyl_option_value_eXcXmGJktV",
            name: "国五"
        }, {code: "dFaWk1XCyl_option_value_YG82uJ6KIo", name: "国六"}, {
            code: "dFaWk1XCyl_option_value_zn8YSKoIZK",
            name: "欧一"
        }, {code: "dFaWk1XCyl_option_value_86c7r7igJh", name: "欧二"}, {
            code: "dFaWk1XCyl_option_value_fa4w9pBdE3",
            name: "欧三"
        }, {code: "dFaWk1XCyl_option_value_KTsfgUe7b5", name: "欧四"}, {
            code: "dFaWk1XCyl_option_value_s7AZ68eWjQ",
            name: "欧五"
        }, {code: "dFaWk1XCyl_option_value_eq6xtCfWRE", name: "欧六"}],
        inputType: "check_box",
        name: "排放标准",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_operation_phase",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{
            code: "5j4qm0tNbC_phase_node_dFM1uFKdmI",
            name: "在售"
        }, {code: "5j4qm0tNbC_phase_node_ucQvV02Z5v", name: "已预订"}, {
            code: "5j4qm0tNbC_phase_node_WZgTRtWjBz",
            name: "已售"
        }, {code: "5j4qm0tNbC_phase_node_GdOunSGEU1", name: "退库"}],
        inputType: "check_box",
        name: "车辆状态",
        required: false,
        type: "RADIO",
        value: {empty: false, values: ["5j4qm0tNbC_phase_node_dFM1uFKdmI"]}
    }, {
        builtIn: false,
        code: "car_field_car_age",
        decimalDigit: 0,
        display: true,
        displayType: "default",
        editable: true,
        inputType: "range_input_box",
        maxValue: "99999999",
        minValue: "0",
        name: "库龄",
        required: false,
        type: "NUMBER",
        unit: "天",
        value: {empty: true}
    }, {
        builtIn: false,
        code: "car_field_detection_status",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{code: "wjc", name: "未检测"}, {code: "djc", name: "待检测"}, {
            code: "jcz",
            name: "检测中"
        }, {code: "jcwc", name: "检测完成"}, {code: "jcsb", name: "检测失败"}],
        inputType: "check_box",
        name: "检测状态",
        required: false,
        type: "RADIO"
    }, {
        builtIn: false,
        code: "car_field_source_car",
        display: true,
        displayType: "tag",
        editable: true,
        elements: [{code: "TTCL", name: "寄售代销"}, {code: "XDFC", name: "自有库存"}, {
            code: "LMDX",
            name: "联盟代销"
        }],
        inputType: "check_box",
        name: "车辆来源",
        required: false,
        type: "RADIO",
        value: {empty: false, values: ["LMDX"]}
    }],
    keywords: "",
    pageNo: 1,
    pageSize: 20,
    sort: {
        chosen: true,
        fieldCode: "car_field_date_create",
        fieldName: "创建时间",
        isBuildIn: true,
        ruleName: "最近创建",
        sortType: "desc"
    }
};