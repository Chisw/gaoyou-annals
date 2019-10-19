import React from 'react'
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts'

const data = [
  { date: '2019/07/28', count: 297 },
  { date: '2019/07/29', count: 307 },
  { date: '2019/07/30', count: 366 },
  { date: '2019/07/31', count: 498 },
  { date: '2019/08/01', count: 462 },
  { date: '2019/08/03', count: 850 },
  { date: '2019/08/04', count: 799 },
  { date: '2019/08/05', count: 621 },
  { date: '2019/08/07', count: 425 },
  { date: '2019/08/08', count: 447 },
  { date: '2019/08/13', count: 561 },
  { date: '2019/08/15', count: 800 },
  { date: '2019/08/19', count: 545 },
  { date: '2019/08/23', count: 360 },
  { date: '2019/08/27', count: 677 },
  { date: '2019/08/30', count: 377 },
  { date: '2019/08/31', count: 228 },
  { date: '2019/09/01', count: 542 },
  { date: '2019/09/02', count: 816 },
  { date: '2019/09/03', count: 346 },
  { date: '2019/09/09', count: 333 },
  { date: '2019/09/11', count: 507 },
  { date: '2019/09/15', count: 353 },
  { date: '2019/10/05', count: 837 },
  { date: '2019/10/07', count: 531 },
  { date: '2019/10/11', count: 698 },
  { date: '2019/10/12', count: 562 },
  { date: '2019/10/13', count: 632 },
  { date: '2019/10/14', count: 533 },
  { date: '2019/10/15', count: 191 },
  { date: '2019/10/16', count: 1094 },
  { date: '2019/10/18', count: 1052 },
  { date: '2019/10/19', count: 557 },
]

const cols = {
  count: { alias: '整理字数' },
  date: { alias: '日期' }
};

export default function Statistics() {
  return (
    <div>
      <Chart width={1200} height={200} data={data} scale={cols}>
        <Axis name="count" />
        <Axis name="date" />
        <Legend position="bottom" />
        <Tooltip />
        <Geom type="interval" position="date*count" color="#f55857" size={3} />
      </Chart>
    </div>
  )
}