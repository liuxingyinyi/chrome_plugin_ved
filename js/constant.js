/*车辆列表请求参数*/
const VEHICLE_REQUEST_BODY = {
    objCode: "car",
    viewCode: "car_on_sale",
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
    }
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
    objCode: "order"

};