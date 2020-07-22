import { Component, OnInit } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { Subscription } from 'rxjs/internal/Subscription';

import { UvDashboardService } from './../dashboard/uv-dashboard.service';

import * as appData from './../uv-data.json';

@Component({
  selector: 'app-uv-bar-chart',
  templateUrl: './uv-bar-chart.component.html',
  styleUrls: ['./uv-bar-chart.component.scss']
})
export class UvBarChartComponent implements OnInit {

  sectorSubscription: Subscription;

  constructor(private uvDashboardService: UvDashboardService) { }

  ngOnInit(): void {
    am4core.useTheme(am4themes_animated);
    this.initComponent();
  }

  getProcessedData(shares): any[] {
    for (const share of shares) {
      share.value = share.price * share.quantity;
    }
    return shares;
  }

  initComponent(): void {

    const chart = am4core.create('uv-bar-chart-container', am4charts.XYChart);
    chart.padding(40, 40, 40, 40);

    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = 'name';
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = 'name';
    series.dataFields.valueX = 'value';
    series.tooltipText = '{valueX.value}';
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;

    const labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.horizontalCenter = 'left';
    labelBullet.label.dx = 10;
    labelBullet.label.text = '{values.valueX.workingValue.formatNumber("#.0as")}';
    labelBullet.locationX = 1;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add('fill', (fill, target) => {
      return chart.colors.getIndex(target.dataItem.index);
    });

    categoryAxis.sortBySeries = series;

    series.columns.template.maxHeight =  50;

    // Display bar chart based on sector selected.
    this.sectorSubscription = this.uvDashboardService.sectorSubscriber$.subscribe(sectorId => {
      chart.data = this.getProcessedData(appData.sectors[sectorId].shares);
    });
  }
}
