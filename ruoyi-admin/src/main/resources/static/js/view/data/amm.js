
function amm_onload() {

    // 前台图表
    init_echarts_amm();

/*    setInterval('amm_onload()',1000);

    setInterval('init_echarts_amm',1000);*/


}
function  init_echarts_amm(){
                $.ajax({
                    type: "GET",
                    url: "/api/piginfo/amm",
                    datatype: "JSON",
                    success: function (data) {
                        var amm = data.data;
                        var air = new Array();
                        var logtime = new Array();

            for (i in amm) {
                air.push(amm[i].air_v);
                logtime.push(amm[i].rec_time.substring(11));
            }

            var Amm = echarts.init(document.getElementById('Amm'));

            Amm_option = {
                /*   backgroundColor: '#FFB6C1',*/
                /*                title: {
                                    text: '请求数',
                                    textStyle: {
                                        fontWeight: 'normal',
                                        fontSize: 16,
                                        color: '#F1F1F3'
                                    },
                                    left: '6%'
                                },*/
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                },
                legend: {
                    icon: 'rect',
                    itemWidth: 14,
                    itemHeight: 5,
                    itemGap: 13,
                    data: ['氨气'],
                    right: '4%',
                    textStyle: {
                        fontSize: 12,
                        color: '#292f39'
                    }
                },
                grid: {
                    left: '1%',
                    right: '2%',
                    bottom: '2%',
                    top:'2%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data:logtime,
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    },

                }],
                yAxis: [{
                    type: 'value',
                    data:air,
                    name: '氨气值',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                }],
                series: [{
                    name: '氨气值',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 3
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(16,97,204, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(17,235,210, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {

                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(16,97,204,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(17,235,210,1)'
                            }])
                        },
                        emphasis: {
                            color: 'rgb(0,196,132)',
                            borderColor: 'rgba(0,196,132,0.2)',
                            extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                            borderWidth: 10
                        }
                    },
                    data:air
                } ]
            };

            Amm.setOption(Amm_option);
        }
    })
}




