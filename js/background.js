//点击下载数据
function fetchVehicleData() {
    const arr = [{name: '在售', body: ON_SALE},
        {name: '在售已上架', body: yishangjia},
        {name: '寄售代销', body: car_tt_sale},
        {name: '在售未上架', body: car_zaishouweishangjia},
        {name: '已售', body: car_sold},
        {name: '已预定', body: car_booked},
        {name: '退库', body: car_retreat_from_storage},
        {name: '交强险30天内', body: car_jiaoqiangxiandaoqi_30},
        {name: '商业险到期30天内', body: car_shangyexiandaoqi_30},
        {name: '年检到期30天内', body: car_car_nianjiandaoqi_30},
        {name: '联盟代销', body: car_LMDX},
    ];
    for (let requestBody of arr) {
        fetchVehicleDataByParam(requestBody);
    }
}

function fetchVehicleDataByParam(params) {
    const {name, body} = params;
    body.pageSize = 200;
    fetch("http://crazyracing-kartrider.souche.com/web/v3/carViewQuery/queryRecordPageInfoForPc.json",
        {
            method: 'post',
            body: JSON.stringify(body)
        }
    )
        .then(response => response.json())
        .then(json => {
            console.info("数据拉取成功", json)
            const records = json.data.common.records;
            exportVehicleData('车源数据-' + name, records)
        })
        .catch(function (err) {
            console.log('Fetch错误:' + err);
        });
}


function exportVehicleData(fileName, records) {
    const header = ['车辆来源', '车辆状态', '库存状态', '微店上架', '品牌', '车系', '车型', '首次上牌', '表显里程', '门店', '库龄', '排放标准', '评估师', '排量', 'VIN码', '车辆编号', '出厂日期',
        '网络标价', '采购类型', '采购价', '采购日期', '展厅标价', '销售底价', '批发价', '新车指导价', '库存描述', '库存描述', "图片"];
    const list = records.map(v => {
        const fieldObj = {};
        const {recordId} = v;
        v.carRecord.fields.map(f => {
            const {code, value, displayValue} = f;
            fieldObj[code] = displayValue || value
        });

        const arr = [];
        arr.push(_.get(fieldObj, 'car_field_source_car'))
        arr.push(_.get(fieldObj, 'car_field_operation_phase'))
        arr.push(_.get(fieldObj, 'car_field_stock_status'))
        arr.push(_.get(fieldObj, 'car_field_weidian_is_upshelf'))
        let brand = _.get(v, 'keyField.brandName');
        arr.push(brand);
        let series = _.get(v, 'keyField.seriesName');
        arr.push(series);
        arr.push(_.get(v, 'keyField.modelName'))
        arr.push(_.get(fieldObj, 'car_field_first_license_plate_date'))
        arr.push(_.get(fieldObj, 'car_field_mileage'))
        arr.push(_.get(fieldObj, 'car_field_shop_code'))
        arr.push(_.get(fieldObj, 'car_field_car_age'))
        arr.push(_.get(fieldObj, 'car_field_emission_standard'))
        arr.push(_.get(fieldObj, 'car_field_assessor_name'))
        arr.push(_.get(fieldObj, 'car_field_engine_volume_liter'))
        let vin = _.get(fieldObj, 'car_field_vin_number');
        arr.push(vin);
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
        const dir = vin + "_" + brand + series + "-" + recordId;
        download(pic, dir);
        fetchVehicleDetail(dir, recordId);
        return arr;
    });
    exportFile(fileName, header, list);

}

/**
 * 拉取车辆详细信息
 * @param recordId
 * @param dir
 */
function fetchVehicleDetail(dir, recordId) {
    const url = 'http://crazyracing-kartrider.souche.com/web/carEditQuery/queryCarMediaValues.json?carId=' + recordId;
    fetch(url)
        .then(response => response.json())
        .then(resp => {
            const {code, data, success} = resp;
            if (success && code == '200') {
                const {
                    picture_type_Zi6ZJWxJ7l,
                    picture_type_UYeyTWcMNN,
                    picture_type_wbQvzWxEjp
                } = data.picturesFieldValues;

                let arr = [].concat(picture_type_Zi6ZJWxJ7l);
                arr = arr.concat(picture_type_UYeyTWcMNN);
                arr = arr.concat(picture_type_wbQvzWxEjp);
                for (let temp of arr) {
                    const {name, content} = temp;
                    if (name === '照片链接') {
                        download(dir, content);
                    }
                }
            }
        });
}


function getTimeStr() {
    const date = new Date();
    return [date.getFullYear(), date.getMonth(), date.getDay()].join("");
}

//请求客户数据
function fetchAccountData() {
    const reqeustBody = ACCOUNT_REQUEST_BODY;
    return fetch("http://super-mario.souche.com/v1/crm/customerViewAction/queryCustomerRecordPageInfo.json",
        {
            method: 'post',
            body: JSON.stringify(reqeustBody)
        }
    )
        .then(response => response.json())
        .then(json => {
            console.info("数据拉取成功", json);
            const records = json.data.common.records;
            exportAccount(records);
        })
        .catch(function (err) {
            console.log('Fetch错误:' + err);
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
    return fetch("http://rich-man.souche.com/orderOperationApi/queryRecordPageInfo.json",
        {
            method: 'post',
            body: JSON.stringify(reqeustBody)
        }
    )
        .then(response => response.json())
        .then(json => {
            console.info("数据拉取成功", json);
            const records = json.data.common.records;
            exportOrder(records);
        })
        .catch(function (err) {
            console.log('Fetch错误:' + err);
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


function download(url, dir) {
    if (url && url.startsWith("http")) {
        const f = url.replace(/http.*\//, '');
        chrome.downloads.download({
            url: url,
            filename: dir + '/' + f,
            saveAs: !1,
            conflictAction: "overwrite"
        });
    }

}


