function fetchVehicleData() {
    //请求百度 不会拦截
    const requestBody = VEHICLE_REQUEST_BODY;
    fetchData("http://crazyracing-kartrider.souche.com/web/v3/carViewQuery/queryRecordPageInfoForPc.json",
        {
            method: 'post',
            body: JSON.stringify(requestBody)
        }).then(data => {
        const records = data.common.records;
        exportVehicleData(records)
    })
}

function exportVehicleData(records) {
    const header = ['车辆来源', '车辆状态', '库存状态', '微店上架', '品牌', '车系', '车型', '首次上牌', '表显里程', '门店', '库龄', '排放标准', '评估师', '排量', 'VIN码', '车辆编号', '出厂日期',
        '网络标价', '采购类型', '采购价', '采购日期', '展厅标价', '销售底价', '批发价', '新车指导价', '库存描述', '库存描述', "图片"];
    const list = records.map(v => {
        const fieldObj = {};

        v.carRecord.fields.map(f => {
            const {code, value, displayValue} = f;
            fieldObj[code] = displayValue || value
        });
        const arr = [];
        arr.push(_.get(fieldObj, 'car_field_source_car'))
        arr.push(_.get(fieldObj, 'car_field_operation_phase'))
        arr.push(_.get(fieldObj, 'car_field_stock_status'))
        arr.push(_.get(fieldObj, 'car_field_weidian_is_upshelf'))
        arr.push(_.get(v, 'keyField.brandName'))
        arr.push(_.get(v, 'keyField.seriesName'))
        arr.push(_.get(v, 'keyField.modelName'))
        arr.push(_.get(fieldObj, 'car_field_first_license_plate_date'))
        arr.push(_.get(fieldObj, 'car_field_mileage'))
        arr.push(_.get(fieldObj, 'car_field_shop_code'))
        arr.push(_.get(fieldObj, 'car_field_car_age'))
        arr.push(_.get(fieldObj, 'car_field_emission_standard'))
        arr.push(_.get(fieldObj, 'car_field_assessor_name'))
        arr.push(_.get(fieldObj, 'car_field_engine_volume_liter'))
        arr.push(_.get(fieldObj, 'car_field_vin_number'))
        arr.push(_.get(fieldObj, 'car_field_vehicle_number'))
        arr.push(_.get(fieldObj, 'car_field_production_date'))
        arr.push(_.get(fieldObj, 'car_field_sale_price'))
        arr.push(_.get(fieldObj, 'car_field_purchase_type'))
        arr.push(_.get(fieldObj, 'car_field_purchase_price'))
        arr.push(_.get(fieldObj, 'car_field_contract_sign_date'))
        arr.push(_.get(fieldObj, 'car_field_exhibition_price'))
        arr.push(_.get(fieldObj, 'car_field_sales_price'))
        arr.push(_.get(fieldObj, 'car_field_wholesale_price'))
        arr.push(_.get(fieldObj, 'car_field_new_price'))
        arr.push(_.get(fieldObj, 'car_field_status_description'))
        arr.push(_.get(fieldObj, 'car_field_manager_price'))
        const pic = _.get(v, 'carRecord.carPicture');
        arr.push(pic);
        download(pic, _.get(v, 'keyField.modelName'))
        return arr;
    });
    exportFile('车辆信息', header, list);


}

//请求客户数据
function fetchAccountData() {
    const reqeustBody = ACCOUNT_REQUEST_BODY;
    return fetchData("http://super-mario.souche.com/v1/crm/customerViewAction/queryCustomerRecordPageInfo.json",
        {
            method: 'post',
            body: JSON.stringify(reqeustBody)
        }
    )
        .then(data => {
            const records = data.common.records;
            exportAccount(records);
        });
}

/*导出客户数据*/
function exportAccount(records) {
    const header = ['姓名', "电话", "区域", "重点客户", "预算", "预计买车时间", "意向车系", "下次跟进时间", "最近跟进内容",
        "销售", "客户来源"];
    const list = records.map(v => {
        const arr = [];
        const fieldObj = {};
        v.fields.map(f => {
            const {code, value, displayValue} = f;
            fieldObj[code] = displayValue || value
        });
        arr.push(_.get(v, 'keyField.value'))
        arr.push(_.get(v, 'phone.displayValue'))
        arr.push(_.get(v, 'phone.area'))
        arr.push(_.get(fieldObj, 'customer_field_is_important'))
        arr.push(_.get(fieldObj, 'budget'))
        arr.push(_.get(fieldObj, 'customer_field_forecast_time'))
        arr.push(_.get(fieldObj, 'customer_field_intent_car_type'))
        arr.push(_.get(v, 'subTitle'))
        arr.push(_.get(fieldObj, 'customer_field_last_content'))
        arr.push(_.get(v, 'owner.displayValue'))
        arr.push(_.get(fieldObj, 'customer_field_source'))
        return arr;
    });
    exportFile('客户数据', header, list);
}

function fetchOrderData() {
    const reqeustBody = ORDER_REQUEST_BODY;
    const self = this;
    return fetchData("http://rich-man.souche.com/orderOperationApi/queryRecordPageInfo.json",
        {
            method: 'post',
            body: JSON.stringify(reqeustBody)
        }
    )
        .then(data => {
            const records = data.common.records;
            exportOrder(records);
        });
}

function exportOrder(records) {
    const header = ["车辆名称", "上牌时间", "vin", "里程", "成交价", "订单状态", "定金", "姓名", "销售", "门店", "预定时间", "创建时间", "图片"];
    const list = records.map(v => {
        const arr = [];
        const fieldObj = {};
        v.fields.map(f => {
            const {code, value, displayValue} = f;
            fieldObj[code] = displayValue || value
        });
        arr.push(_.get(v, 'carModelName'))
        arr.push(_.get(v, 'firstLicensePlateDate'))
        arr.push(_.get(v, 'vinNumber'))
        arr.push(_.get(v, 'mileage'))
        arr.push(_.get(v, 'dealPrice.displayValue'))
        arr.push(_.get(v, 'orderStatus.displayValue'))
        arr.push(_.get(v, 'earnest.displayValue'))
        arr.push(_.get(v, 'customer.displayValue'))
        arr.push(_.get(v, 'owner.displayValue'))
        arr.push(_.get(v, 'shopName.displayValue'))
        arr.push(_.get(v, 'reserveTime.displayValue'))
        arr.push(_.get(v, 'createTime.displayValue'))
        arr.push(_.get(v, 'carFirstPicture'))

        return arr;
    });
    exportFile('订单数据', header, list);
}

/*统一请求http数据*/
function fetchData(url, init) {
    return fetch(url, init)
        .then(response => response.json())
        .then(json => {
            const {code, data, msg} = json;
            if (code == '200') {
                return data;
            } else {
                throw msg
            }
        }).catch(e => {
            console.info("请求失败", e);
            alert(e);
        })
}

/*下载文件*/
function download(url, fileName) {
    const f = url.replace(/http.*\//, '')
    console.log('下载文件', url);
    chrome.downloads.download({
        url: url,
        filename: f,
        saveAs: !1,
        conflictAction: "overwrite"
    });
}


