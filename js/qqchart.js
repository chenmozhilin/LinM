 var chartData = {
        labels:['华东地区', '华北地区', '华中地区', '华南地区', ],
        datasets:[
            {               
                fillColor:'#EDEDED',// 填充色              
                data:[40, 70, 100, 9 ], // 数据                
            }
        ]
    };
    
     var configs  = {
        scaleOverlay : false,  // 网格线是否在数据线的上面
        scaleOverride : false, // 是否用硬编码重写y轴网格线
        scaleSteps : null, //y轴刻度的个数
        scaleStepWidth : 20, //y轴每个刻度的宽度
        scaleStartValue :null,  //y轴的起始值
        scaleLineColor : "rgba(0,0,0,.1)",// x轴y轴的颜色
        scaleLineWidth : 1,// x轴y轴的线宽  
        scaleShowLabels : true,// 是否显示y轴的标签
        scaleLabel : "<%=value%>",// 标签显示值
        scaleFontFamily : "'Arial'",// 标签的字体
        scaleFontSize : 12,// 标签字体的大小
        scaleFontStyle : "normal",// 标签字体的样式
        scaleFontColor : "#666",// 标签字体的颜色
        scaleShowGridLines : true,// 是否显示网格线
        scaleGridLineColor : "#E6E6E6",    // 网格线的颜色
        scaleGridLineWidth : 1, // 网格线的线宽
        scaleBeginAtZero: false, // y轴标记是否从0开始
        scaleShowHorizontalLines: true, // 是否显示横向线
        scaleShowVerticalLines: true, // 是否显示竖向线
        barShowStroke : true, // 是否显示线
        barStrokeWidth : 2,   // 线宽
        barValueSpacing : 5,// 柱状块与x值所形成的线之间的距离
        barDatasetSpacing : 1,// 在同一x值内的柱状块之间的间距
        animation : true,//是否有动画效果
        animationSteps : 60,//动画的步数
        animationEasing : "easeOutQuart",// 动画的效果
        showTooltips: false, // 是否显示提示
        // 图例
        legendTemplate : '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        // 动画完成后调用的函数(每个柱上显示对应的数据)
        onAnimationComplete: function () {
            var ctx = this.chart.ctx;
            ctx.font = this.scale.font;
            ctx.fillStyle = this.scale.textColor;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            this.datasets.forEach(function (dataset){
                dataset.bars.forEach(function (bar) {
                    ctx.fillText(bar.value, bar.x, bar.y);
                });
            });
        }
    };

 var ctx = document.getElementById('bar').getContext('2d');
    var bar = new Chart(ctx).Bar(chartData, configs);
    var legend = document.getElementById('legend');
    // 图例
    legend.innerHTML = bar.generateLegend();