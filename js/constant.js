/*车辆列表请求参数*/
const VEHICLE_REQUEST_BODY = {
    objCode: "car",
    viewCode: "car_yishangjia",
    filters: [
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
                    "5j4qm0tNbC_phase_node_dFM1uFKdmI",
                    "5j4qm0tNbC_phase_node_ucQvV02Z5v",
                    "5j4qm0tNbC_phase_node_WZgTRtWjBz",
                    "5j4qm0tNbC_phase_node_GdOunSGEU1"
                ]
            },
            viewCode: "car_yishangjia",
            mounted: true,
            key: "car_field_operation_phase"
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
                values: [
                    "TTCL",
                    "XDFC",
                    "LMDX"
                ]
            },
            viewCode: "car_yishangjia",
            mounted: true,
            key: "car_field_source_car",
            empty: false
        }
    ],
    keywords: "",
    pageNo: 1,
    pageSize: 200,
    sort: {
        chosen: true,
        fieldCode: "car_field_date_create",
        fieldName: "创建时间",
        isBuildIn: true,
        ruleName: "最近创建",
        sortType: "desc"
    }
};
/*客户请求参数*/
const ACCOUNT_REQUEST_BODY = {
    pageNo: 1,
    pageSize: 200,
    sort: {
        chosen: true,
        fieldCode: "customer_field_last_follow_up_time",
        fieldName: "跟进时间最近",
        isBuildIn: false,
        ruleName: "最近跟进",
        sortType: "desc"
    },
    keywords: "",
    viewCode: "customer_following",
    objCode: "customer",
    filters: [
        {
            builtIn: false,
            code: "customer_field_operation_phase",
            display: true,
            displayType: "tag",
            editable: true,
            elements: [
                {
                    code: "Jm6R71haKU_phase_node_DXs7bFXGPG",
                    name: "新建"
                },
                {
                    code: "Jm6R71haKU_phase_node_1nqkLmDYRl",
                    name: "邀约"
                },
                {
                    code: "Jm6R71haKU_phase_node_19cvQFVB9h",
                    name: "到店"
                },
                {
                    code: "Jm6R71haKU_phase_node_iScnYh93bt",
                    name: "预定"
                },
                {
                    code: "Jm6R71haKU_phase_node_VPOYw0gDco",
                    name: "成交"
                },
                {
                    code: "Jm6R71haKU_phase_node_s04IHZ8qsX",
                    name: "战败"
                },
                {
                    code: "Jm6R71haKU_phase_node_lgaUrpWzWC",
                    name: "无效"
                }
            ],
            inputType: "check_box",
            name: "客户状态",
            required: false,
            type: "RADIO",
            value: {
                values: [
                    "Jm6R71haKU_phase_node_DXs7bFXGPG",
                    "Jm6R71haKU_phase_node_1nqkLmDYRl",
                    "Jm6R71haKU_phase_node_19cvQFVB9h",
                    "Jm6R71haKU_phase_node_iScnYh93bt",
                    "Jm6R71haKU_phase_node_VPOYw0gDco",
                    "Jm6R71haKU_phase_node_s04IHZ8qsX",
                    "Jm6R71haKU_phase_node_lgaUrpWzWC"
                ]
            },
            empty: false
        }
    ]
}

/*订单请求数据*/
const ORDER_REQUEST_BODY = {
    pageNo: 1,
    pageSize: 200,
    sort: {
        chosen: true,
        fieldCode: "order_field_date_create",
        fieldName: "创建时间",
        isBuildIn: true,
        ruleName: "最近创建",
        sortType: "desc"
    },
    keywords: "",
    viewCode: "order_no_paying",
    objCode: "order",
    filters: [
        {
            builtIn: false,
            code: "order_field_operation_phase",
            display: true,
            displayType: "tag",
            editable: true,
            elements: [
                {
                    code: "FqOE4vEjut_phase_node_fiOYyQo14T",
                    name: "审批中"
                },
                {
                    code: "FqOE4vEjut_phase_node_A6Q1MoHtTp",
                    name: "待收款"
                },
                {
                    code: "FqOE4vEjut_phase_node_wY6dJUxcu4",
                    name: "收款中"
                },
                {
                    code: "FqOE4vEjut_phase_node_1LQVetrqSm",
                    name: "收齐全款"
                },
                {
                    code: "FqOE4vEjut_phase_node_BAwThWASSX",
                    name: "取消预订"
                },
                {
                    code: "FqOE4vEjut_phase_node_Nqslj8EZW0",
                    name: "已回库"
                }
            ],
            inputType: "check_box",
            name: "订单状态",
            required: false,
            type: "RADIO",
            value: {
                values: [
                    "FqOE4vEjut_phase_node_fiOYyQo14T",
                    "FqOE4vEjut_phase_node_A6Q1MoHtTp",
                    "FqOE4vEjut_phase_node_wY6dJUxcu4",
                    "FqOE4vEjut_phase_node_1LQVetrqSm",
                    "FqOE4vEjut_phase_node_BAwThWASSX",
                    "FqOE4vEjut_phase_node_Nqslj8EZW0"
                ]
            },
            viewCode: "order_no_paying",
            mounted: true,
            key: "order_field_operation_phase",
            empty: false
        }
    ]
}