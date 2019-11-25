 var hijiki = 'hijiki/assets/hijiki.model.json';

    function show(path) {
        config.model.jsonPath = path;
        L2Dwidget.init(config)
    }

    var config = {
        model: {
            jsonPath: '', // xxx.model.json 的路径
        },
        display: {
            superSample: 1, // 超采样等级
            width: 350, // canvas的宽度
            height: 400, // canvas的高度
            position: 'right', // 显示位置：左或右
            hOffset: 0, // canvas水平偏移
            vOffset: 0, // canvas垂直偏移
        },
        mobile: {
            show: true, // 是否在移动设备上显示
            scale: 1, // 移动设备上的缩放
            motion: true, // 移动设备是否开启重力感应
        },
        react: {
            opacityDefault: 1, // 默认透明度
            opacityOnHover: 1, // 鼠标移上透明度
        },
    }
    window.onload = function () {
        show(hijiki);
    }