/*统一请求http数据*/
function fetchData(url, init) {
    return fetch(url, init)
        .then(response => response.json())
        .then(json => {
            const {code, data, msg} = json;
            if (code === '200') {
                return data;
            } else {
                throw msg
            }
        }).catch(e => {
            console.info("请求失败", e);
            alert('下载失败，请重试');
        })
}

/*车辆图片下载标记*/
let vehiclePicDownloadFlag = false;


//点击下载数据
function onVehicleDownload() {
    vehiclePicDownloadFlag = false;
    fetchVehicleData();
}

//下载车源数据+图片数据
function onVehicleFullDataDownload() {
    vehiclePicDownloadFlag = true;
    fetchVehicleData();
}

//拉取顶部标签   {name, code}
function fetchTags() {
    return fetchData("http://danube-chord.souche.com/generic/viewManageAction/listView.json?objCode=car")
        .then(data => data.views);
}

/**
 * 下载完整车辆数据
 */
function fetchVehicleData() {
    fetchTags().then(views => {
        for (let view of views) {
            const {name, code} = view;
            const body = {
                objCode: "car",
                viewCode: code,
                filters: [],
                keywords: "",
                pageNo: 1,
                pageSize: 100,
                sort: {
                    chosen: true,
                    fieldCode: "car_field_date_create",
                    fieldName: "创建时间",
                    isBuildIn: true,
                    ruleName: "最近创建",
                    sortType: "desc"
                }
            };
            const fetchArr = [];
            for (let page = 1; page <= 10; page++) {
                const requestBody = {...body, pageNo: page};
                const req = fetchData("http://crazyracing-kartrider.souche.com/web/v3/carViewQuery/queryRecordPageInfoForPc.json",
                    {
                        method: 'post',
                        body: JSON.stringify(requestBody)
                    });
                fetchArr.push(req);
            }
            Promise.all(fetchArr).then(values => {
                let records = [];
                values.map(data => {
                    records = records.concat(data.common.records);
                });
                exportVehicleData('车源数据-' + name, records);
            });
        }
    });
}

function exportVehicleData(fileName, records) {
    const header = ["carId", '车辆来源', '车辆状态', '库存状态', '微店上架', '品牌', '车系', '车型', '首次上牌', '表显里程', '门店', '库龄', '排放标准', '评估师', '排量', 'VIN码', '车辆编号', '出厂日期',
        '网络标价', '采购类型', '采购价', '采购日期', '展厅标价', '销售底价', '批发价', '新车指导价', '库存描述', '库存描述', "图片"];
    const list = records.map(v => {
        const fieldObj = {};
        const {recordId} = v;
        v.carRecord.fields.map(f => {
            const {code, value, displayValue} = f;
            fieldObj[code] = displayValue || value
        });

        const arr = [];
        arr.push(recordId);
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
        //下载详细的图片数据
        if (vehiclePicDownloadFlag) {
            const dir = vin + "_" + brand + series + "-" + recordId;
            download(pic, dir);
            fetchVehicleDetail(dir, recordId);
        }
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


//请求客户数据
async function fetchAccountData() {
    const list = [];
    debugger
    for (let i = 1; ; i++) {
        const records = await fetchAccountDataByPage(i);
        if (records.length === 0) {
            break
        }
        list.push(...records);
    }
    exportAccount(list);
}

/**
 * 单页拉取客户数据
 * @returns {Promise<any>}
 */
function fetchAccountDataByPage(page) {
    const reqeustBody = JSON.parse(JSON.stringify(ACCOUNT_REQUEST_BODY));
    reqeustBody.pageNo = page;
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
            return records;
        })
        .catch(function (err) {
            console.log('Fetch错误:' + err);
        });
}


/*导出客户数据*/
function exportAccount(records) {
    const header = ["recordId", '姓名', "电话", "区域", "重点客户", "预算", "预计买车时间", "意向车系", "下次跟进时间", "最近跟进内容",
        "销售", "客户来源"];
    const list = records.map(v => {
        const arr = [];
        const fieldObj = {};
        v.fields.map(f => {
            const {code, value, displayValue} = f;
            fieldObj[code] = displayValue || value
        });
        arr.push(_.get(v, 'recordId'))
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
            saveAs: false,
            conflictAction: "uniquify",
        });
    }

}


