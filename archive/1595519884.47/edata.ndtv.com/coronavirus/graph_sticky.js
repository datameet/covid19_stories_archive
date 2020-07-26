var cssjsurl = 'https://edata.ndtv.com/coronavirus/';
var feedPath = 'https://edata.ndtv.com/cricket/coronavirus/';
if(location.hostname == "localhost"){
    feedPath = 'table/';
    cssjsurl = '';
}
if(!window.Highcharts) {
    var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = cssjsurl + "table/highcharts.js";
   document.getElementsByTagName('head')[0].appendChild(script);
}
if(!window.jQuery)
{
   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "jquery.3.4.1.js";
   document.getElementsByTagName('head')[0].appendChild(script);
} 
function querySt(e) {hu = window.location.search.substring(1).split("&");for (i = 0; i < hu.length; i++) {ft = hu[i].split("=");if (ft[0] == e) {return ft[1];}}}
var lang = querySt("lang") || (document.getElementById('_embedhtml').getAttribute('data-lang')) || 1;
var cnfTitle = 'CASES';
var actTitle = 'ACTIVE';
var recTitle = 'RECOVERED';
var dethTitle = 'DEATHS';
var redUrl = 'https://www.ndtv.com/coronavirus';
var caseText = 'Cases in India';
if(lang == 2) {
    cnfTitle = 'मामले';
    actTitle = 'सक्रिय';
    recTitle = 'ठीक हुए';
    dethTitle = 'मौतें';
    caseText = 'भारत में मामले';
    redUrl = 'https://khabar.ndtv.com/coronavirus/';
}
var stylecss = `<style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                a{text-decoration:none;}
                @font-face {
                    font-family: 'SF UI Display';
                    font-style: normal;
                    font-weight: 500;
                    src: local('SF UI Display Medium'), url('`+cssjsurl+`fonts/sf-ui-display-medium-58646be638f96.woff') format('woff');
                }
                @font-face {
                    font-family: 'SF UI Display';
                    font-style: normal;
                    font-weight: 700;
                    src: local('SF UI Display Bold'), url('`+cssjsurl+`fonts/sf-ui-display-bold-58646a511e3d9.woff') format('woff');
                }
                @font-face {
                    font-family: 'SF UI Display';
                    font-style: normal;
                    font-weight: 900;
                    src: local('SF UI Display Heavy'), url('`+cssjsurl+`fonts/sf-ui-display-heavy-586470160b9e5.woff') format('woff');
                }
                .corSticky *{font-family: 'SF UI Display'; box-sizing: border-box;}
                .corSticky {position: fixed;right: 10%;bottom:0px; -webkit-tap-highlight-color: transparent; transition: all 1s cubic-bezier(0.33, 1, 0.68, 1);}
                .corSticky-wrap {width: 160px;min-height: 80px;background: #F4F4F4;box-shadow: 0 -1px 15px 0 rgba(0,0,0,0.22); position: relative; overflow: hidden;  }
                .corSticky-check{ width: 30%;height: 30%; bottom: 0; display: block; position: absolute;cursor: pointer;right: 0;z-index: 9; opacity: 0; pointer-events: all; -webkit-tap-highlight-color: transparent;}
                .corSticky-head{ width: 100%; display: flex; justify-content: space-between; padding: 7px;}
                .corSticky-logo{ width: 100px; font-size:0; flex-shrink: 0;}
				.corSticky-logo a{ display: block; font-size: 0;line-height: normal;}
                .corSticky-logo img{ width: 100%;}
                .corSticky-logo span{ font-size:11px; font-weight: 500; color: #313231; text-transform: uppercase;}
                .corSticky-expand{ width: 20px; height: 20px; border-radius: 50%; background-color: #D8D8D8; flex-shrink: 0; position: relative; cursor: pointer;}
                .corSticky-expand:before, .corSticky-expand:after{ content: ""; position: absolute; left: 50%; top:50%; transform: translate(-50%,-50%);width: 9px; height: 2px; background-color: #393939; border-radius: 6px;}
                .corSticky-expand:after{ content: ""; width: 2px; height: 9px;}
                .corSticky-head_graph{ width: 100%; position: absolute; display: flex; justify-content: space-between; padding: 0px 7px 7px 7px; transform: translateY(0); opacity: 1; transition: transform 1s cubic-bezier(0.33, 1, 0.68, 1);}
                .corSticky-heading{ display: flex; align-items: center; font-weight: 700; font-size: 14px; color: #313231; letter-spacing: -1px;}
                .corSticky-total_no{ font-size: 11px; font-weight: 700; color: #C30000;}
                .corSticky-graph{ width: 100%; flex-shrink: 0;}
                .dataUpBig{background: url("`+cssjsurl+`images/red-tp-big.svg") left center no-repeat; padding-left: 10px; margin-left: 5px;background-size: 8px;}
                .corSticky-list{ width: 100%; list-style: none;display: none;}
                .corSticky-iteam{ width: 100%;}
                .corSticky-iteam-head{ width: 100%; background-color: #ddd; font-size: 12px; font-weight: 900; color: #FFFFFF; text-transform: uppercase; text-align: center; line-height: normal;}
                .corSticky-iteam-info{ width: 100%; display: flex; justify-content: space-between; padding: 3px 0px;}
                .corSticky-iteam-txt{ display: flex; align-items: center;letter-spacing: -1px; padding-left: 2px;}
                .tNum{ width: 50px; text-align: right; font-size: 12px; font-weight: 700; color: #717171;letter-spacing: -0.5px;}
                .dataNo{ text-align: right; font-size: 10px; font-weight: 700;}    
                .dataGraph{ width: 55px;flex-shrink: 0; margin-right: 7px; display: flex; align-items: center;}
                .corSticky-expand_info{ width: 100%; position: relative;}
                .corSticky-iteam:nth-of-type(1){ transform: translateY(50px);}
                .corSticky-iteam:nth-of-type(2){ transform: translateY(80px);}
                .corSticky-iteam:nth-of-type(3){ transform: translateY(110px);}
                .corSticky-iteam:nth-of-type(4){ transform: translateY(140px);}
                .corSticky-check:checked{ bottom: auto; top: 0;}

                .slideShow .corSticky-iteam:nth-of-type(1),.slideShow .corSticky-iteam:nth-of-type(2),.slideShow .corSticky-iteam:nth-of-type(3),.slideShow .corSticky-iteam:nth-of-type(4){ transform: translateY(0); transition: transform 1s cubic-bezier(0.33, 1, 0.68, 1);}
				.slideShow .corSticky-head_graph{ transform: translateY(100%); position: absolute; opacity: 0; z-index: -9; transition: transform 1s cubic-bezier(0.33, 1, 0.68, 1);}
				.slideShow .corSticky-expand:after{transition: all 0.7s ease-in-out;transform: rotate(90deg); opacity: 0;}

                .dataupRed{background: url("`+cssjsurl+`images/red-tp.svg") left 4px no-repeat; padding-left: 12px; margin-left: 5px; color:#C30000;}
                .dataupGen{background: url("`+cssjsurl+`images/green-tp.svg") left 4px no-repeat; padding-left: 15px; margin-left: 5px; color:#4F9A0A;}
                .datadownGen{background:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjAgKDg4MTAzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5UcmlhbmdsZSBDb3B5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwNi4wMDAwMDAsIC02MTMuMDAwMDAwKSIgZmlsbD0iIzdFRDMyMSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NzYuMDAwMDAwLCA1MjQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iVHJpYW5nbGUtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQuMDAwMDAwLCA5My4wMDAwMDApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTM0LjAwMDAwMCwgLTkzLjAwMDAwMCkgIiBwb2ludHM9IjM0IDg5IDM4IDk3IDMwIDk3Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==") left center no-repeat; padding-left: 15px; margin-left: 5px; color:#4F9A0A;}
                .con-data{ background: #EBEBEB}
                .con-data .corSticky-iteam-head{ background: #717171;}
                .con-data .tNum{ color: #717171}
                .act-data{ background: #ECF0F5}
                .act-data .corSticky-iteam-head{ background: #A3C3EA;}
                .act-data .tNum{ color: #3A81D8}
                .rec-data{ background: #E0E9DB;}
                .rec-data .corSticky-iteam-head{ background: #A4C885;}
                .rec-data .tNum{ color: #4F9A0A}
                .dea-data{ background: #EFE6E6;}
                .dea-data .corSticky-iteam-head{ background: #E28993;}
                .dea-data .tNum{ color: #D0021B}
                </style>`;
//jQuery('head').append(stylecss);
function querySt(e) {hu = window.location.search.substring(1).split("&");for (i = 0; i < hu.length; i++) {ft = hu[i].split("=");if (ft[0] == e) {return ft[1];}}}
var device = querySt("device") || (document.getElementById('_embedhtml').getAttribute('data-device')) || '';
var days = querySt("days") || (document.getElementById('_embedhtml').getAttribute('data-days')) || '7';
var innerhtmlcont = `
            <div class="corSticky-wrap">
                <div class="corSticky-head">
                    <div class="corSticky-logo" id="_corSticky-logo"></div>
                    <div class="corSticky-expand"></div>
                </div>
      <div class="corSticky-expand_info">
    <div class="corSticky-head_graph">
      <div class="corSticky-heading" id="_corSticky-heading"></div>
      <div class="corSticky-graph _confgraph" id="_confgraphhead" style="width:45px;" ></div>
     </div>
    <ul class="corSticky-list">
    <li class="corSticky-iteam con-data">
        <div class="corSticky-iteam-head">`+cnfTitle+`</div>
        <div class="corSticky-iteam-info">
        <div class="corSticky-iteam-txt" id="_confirmdata"></div>
        <div class="dataGraph _confgraphs" id="_confgraphid"></div>
        </div>  
    </li>
    <li class="corSticky-iteam act-data">
        <div class="corSticky-iteam-head">`+actTitle+`</div>
        <div class="corSticky-iteam-info">
        <div class="corSticky-iteam-txt" id="_activedata"></div>
        <div class="dataGraph" id="_activegraph"></div>
        </div>  
    </li>   
        <li class="corSticky-iteam rec-data">
        <div class="corSticky-iteam-head">`+recTitle+`</div>
        <div class="corSticky-iteam-info">
        <div class="corSticky-iteam-txt" id="_recoverdata"></div>
        <div class="dataGraph" id="_recovergraph"></div>
        </div>  
    </li>
        <li class="corSticky-iteam dea-data">
        <div class="corSticky-iteam-head">`+dethTitle+`</div>
        <div class="corSticky-iteam-info">
        <div class="corSticky-iteam-txt" id="_deathdata"></div>
        <div class="dataGraph" id="_deathgraph"></div>
        </div>  
    </li>
    </ul>
      </div>
  </div>
`;
jQuery('#_embedhtml').html(stylecss+innerhtmlcont);

var todayData = [];
var confirmedArr = [];var activeArr = [];var recoveredArr = [];var deathArr = [];
function showData() {
    jQuery('#_corSticky-logo').html('<a href="'+redUrl+'"><img src="'+cssjsurl+'images/logocor.svg" alt=""><span>'+caseText+'</span></a>');
    $.ajax({
        type: "GET",
        url: feedPath + 'daily.json',
        success: function (res) {
            if(res.data) {
                todayData = res.data[res.data.length-1];
                if(todayData.c != null && todayData.c > 0) {
                    var heading = todayData.c.toLocaleString('en-IN');
                    var confdata = '<span class="tNum">'+todayData.c.toLocaleString('en-IN')+'</span>';
                    if(todayData.c_tday != null && todayData.c_tday > 0){
                        heading += '<span class="corSticky-total_no dataUpBig">'+todayData.c_tday.toLocaleString('en-IN')+'</span>';
                        confdata += '<span class="dataNo dataupRed">'+todayData.c_tday.toLocaleString('en-IN')+'</span>';
                    }
                    jQuery('#_corSticky-heading').html(heading);
                    jQuery('#_confirmdata').html(confdata);
                }
                if(todayData.c != null && todayData.c > 0) {
                    var active = '<span class="tNum">'+(todayData.c-(todayData.r+todayData.d)).toLocaleString('en-IN')+'</span>';
                    if(todayData.c_tday != null && todayData.c_tday > 0){
                        let changeActive = todayData.c_tday-(todayData.r_tday+todayData.d_tday);
                        active += '<span class="dataNo '+ (changeActive < 0 ? 'datadownGen' : 'dataupRed') +'">'+(Math.abs(changeActive)).toLocaleString('en-IN')+'</span>';
                    }
                    jQuery('#_activedata').html(active);
                }
                if(todayData.r != null && todayData.r > 0) {
                    var recoverd = '<span class="tNum">'+todayData.r.toLocaleString('en-IN')+'</span>';
                    if(todayData.r_tday != null && todayData.r_tday > 0){
                        recoverd += '<span class="dataNo dataupGen">'+todayData.r_tday.toLocaleString('en-IN')+'</span>';
                    }
                    jQuery('#_recoverdata').html(recoverd);
                }
                if(todayData.d != null && todayData.d > 0) {
                    var death = '<span class="tNum">'+todayData.d.toLocaleString('en-IN')+'</span>';
                    if(todayData.d_tday != null && todayData.d_tday > 0){
                        death += '<span class="dataNo dataupRed">'+todayData.d_tday.toLocaleString('en-IN')+'</span>';
                    }
                    jQuery('#_deathdata').html(death);
                }

                var revArr = res.data.reverse();
                for(var cunt=0; cunt < days; ++cunt) {
                    confirmedArr.push(revArr[cunt]['c_tday']);
                    activeArr.push(revArr[cunt]['c_tday'] - (revArr[cunt]['r_tday']+revArr[cunt]['d_tday']));
                    recoveredArr.push(revArr[cunt]['r_tday']);
                    deathArr.push(revArr[cunt]['d_tday']);
                }

                if(confirmedArr.length > 0) {
                    var confseriesArr = confirmedArr.reverse();
                    setTimeout(function () {
                        ConfirmChart('_confgraphhead',confseriesArr);
                        ConfirmChart('_confgraphid',confseriesArr);
                    }, 500);
                }
                if(activeArr.length > 0) {
                    setTimeout(function () {
                        ActiveChart(activeArr.reverse());
                    }, 500);
                }
                if(recoveredArr.length > 0) {
                    setTimeout(function () {
                        RecoverChart(recoveredArr.reverse());
                    }, 500);
                }
                if(deathArr.length > 0) {
                    setTimeout(function () {
                        DeathChart(deathArr.reverse());
                    }, 500);
                }
            }

        }
    });
}

showData();

var xAxiso = {title: {enabled: false},visible: false,min: -0.5,rangeSelector: {selected: 1}};
var plotOptionsA = {series: {states: {hover: {enabled: false,}},animation: {duration: 100}}};

function ConfirmChart(ides='_confgraphhead',seriesval = []) {
    let a = [...seriesval];
    let bckcol = '#f4f4f4';
    let linecol = '#818181';
    if(ides == '_confgraphid') {
        bckcol = '#ebebeb';
        linecol = '#818181';
    } 
    $('#'+ides).highcharts({
        chart: {
            events: {
            load: function(){
            var points = this.series[0].points;
            points[points.length-1].update({
                    marker: {
                    enabled: true,
                    radius:2
              }
            });
            }
            },
            spacing: [2, 2, 2, 2],
            backgroundColor: bckcol,
            renderTo: this,
        },
        title: false,
        credits: {
            enabled: false
        },
        xAxis: xAxiso,
        yAxis: {title: {enabled: false},visible: false,min: (Math.min.apply(Math,a)-5),max:(Math.max.apply(Math,a)+5)},
        plotOptions: plotOptionsA,
        tooltip: {enabled: false},
        series: [{
            name:'top',
            lineWidth: 2,
            lineColor: linecol,
            marker: {enabled: false,fillColor : linecol},
            data: a,
            type:'spline',
            showInLegend: false,
        }]
    })
}
function ActiveChart(seriesval = []) {
    let act = [...seriesval];
    $('#_activegraph').highcharts({
        chart: {
            events: {
            load: function(){
            var points = this.series[0].points;
            points[points.length-1].update({
                    marker: {
                    enabled: true,
                    radius:2
              }
            });
            }
            },
            spacing: [2, 2, 2, 2],
            backgroundColor: '#ecf0f5'
        },
        title: false,
        credits: {
            enabled: false
        },
        xAxis: xAxiso,
        yAxis: {title: {enabled: false},visible: false,min: (Math.min.apply(Math,act)-10),max:(Math.max.apply(Math,act)+10)},
        plotOptions: plotOptionsA,
        tooltip: {enabled: false},
        series: [{
            lineWidth: 2,
            lineColor: '#89b2e7',
            marker: {enabled: false,fillColor:'#89b2e7'},
            data: act,
            type:'spline',
            showInLegend: false,
        }]
    })
}
function RecoverChart(seriesval = []) {
    let rec = [...seriesval];
    $('#_recovergraph').highcharts({
        chart: {
            events: {
            load: function(){
            var points = this.series[0].points;
            points[points.length-1].update({
                    marker: {
                    enabled: true,
                    radius:2
              }
            });
            }
            },
            spacing: [2, 2, 2, 2],
            backgroundColor: '#e0e9db'
        },
        title: false,
        credits: {
            enabled: false
        },
        xAxis: xAxiso,
        yAxis: {title: {enabled: false},visible: false,min: (Math.min.apply(Math,rec)-10),max:(Math.max.apply(Math,rec)+10)},
        plotOptions: plotOptionsA,
        tooltip: {enabled: false},
        series: [{
            lineWidth: 2,
            lineColor: '#83c06c',
            marker: {enabled: false,fillColor:'#83c06c'},
            data: rec,
            type:'spline',
            showInLegend: false,
        }]
    })
}
function DeathChart(seriesval = []) {
    let det = [...seriesval];
    $('#_deathgraph').highcharts({
        chart: {
            events: {
            load: function(){
            var points = this.series[0].points;
            points[points.length-1].update({
                    marker: {
                    enabled: true,
                    radius:2
              }
            });
            }
            },
            spacing: [2, 2, 2, 2],
            backgroundColor: '#efe6e6'
        },
        title: false,
        credits: {
            enabled: false
        },
        xAxis: xAxiso,
        yAxis: {title: {enabled: false},visible: false,min: (Math.min.apply(Math,det)-10),max:(Math.max.apply(Math,det)+10)},
        plotOptions: plotOptionsA,
        tooltip: {enabled: false},
        series: [{
            lineWidth: 2,
            lineColor: '#db726f',
            marker: {enabled: false,fillColor:'#db726f'},
            data: det,
            type:'spline',
            showInLegend: false,
        }]
    })
}

$( document ).ready(function() {
    $(".corSticky-expand").click(function(){
		$(".corSticky-list").slideToggle(400);
		$(".corSticky").toggleClass("slideShow");
	});		
	$(window).on('scroll',function() {
            if(lang==2) {
		if ($('.foot-sticky').hasClass('hideon')) {
                    $(".corSticky").css("bottom","0");
		}else{
                    $(".corSticky").css("bottom",$('.foot-sticky').outerHeight()+"px");
                }
            } else {
                if ($('#trcNextUpWidget').css('opacity') == 1) {
                    $(".corSticky").css("bottom","80px");		 
		}else{
                    $(".corSticky").css("bottom","0");
                }
            }
        });
});	
